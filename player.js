(function() {
  var d = document;

  var fs = d.createElement('style');
  fs.textContent = '.material-symbols-outlined{visibility:hidden}';
  d.head.appendChild(fs);
  d.fonts.ready.then(function(){ fs.textContent = ''; });

  var audio = new Audio('tum_song.mp3');
  var isPlaying = false, isFull = false;

  function fmt(s) {
    var m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function updateBtns() {
    var icon = isPlaying ? 'pause' : 'play_arrow';
    var bp = d.getElementById('mpPlay');
    var fp = d.getElementById('fpPlay');
    if (bp) bp.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">' + icon + '</span>';
    if (fp) fp.innerHTML = '<span class="material-symbols-outlined" style="font-size:40px;">' + icon + '</span>';
  }

  function doPlay() {
    if (audio.paused) {
      audio.play().then(function() { isPlaying = true; updateBtns(); }).catch(function(){});
    } else {
      audio.pause();
      isPlaying = false;
      updateBtns();
    }
  }

  // Save on unload
  window.addEventListener('beforeunload', function() {
    localStorage.setItem('tumPlayer', JSON.stringify({t: audio.currentTime || 0, p: isPlaying}));
  });

  audio.addEventListener('timeupdate', function() {
    if (audio.duration) {
      var pct = (audio.currentTime / audio.duration) * 100;
      var t = fmt(audio.currentTime);
      var bs = d.getElementById('mpSeek');
      var bc = d.getElementById('mpCur');
      var fs = d.getElementById('fpSeek');
      var fc = d.getElementById('fpCur');
      if (bs) bs.value = pct; if (bc) bc.textContent = t;
      if (fs) fs.value = pct; if (fc) fc.textContent = t;
      localStorage.setItem('tumPlayer', JSON.stringify({t: audio.currentTime, p: isPlaying}));
    }
  });

  audio.addEventListener('loadedmetadata', function() {
    var t = fmt(audio.duration);
    var bt = d.getElementById('mpTot');
    var ft = d.getElementById('fpTot');
    if (bt) bt.textContent = t;
    if (ft) ft.textContent = t;

    try {
      var saved = JSON.parse(localStorage.getItem('tumPlayer'));
      if (saved && saved.t && saved.t < audio.duration) {
        audio.currentTime = saved.t;
      }
    } catch(e) {}
  });

  audio.addEventListener('ended', function() {
    isPlaying = false; updateBtns();
  });

  // Build mini player
  var mini = d.createElement('div');
  mini.id = 'mpMini';
  mini.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99999;font-family:Poppins,sans-serif;display:flex;flex-direction:column;align-items:flex-end;';
  mini.innerHTML =
    '<div id="mpToggle" style="width:52px;height:52px;border-radius:50%;border:1.5px solid #1a1a1a;background:#FFD400;display:none;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,0.15);">' +
      '<span class="material-symbols-outlined" style="font-size:26px;color:#1a1a1a;line-height:1;">music_note</span>' +
    '</div>' +
    '<div id="mpBar" style="display:none;margin-bottom:10px;background:#fff;border:1.5px solid #1a1a1a;border-radius:14px;padding:14px 16px;width:300px;box-shadow:0 8px 32px rgba(0,0,0,0.12);">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">' +
        '<div style="font-size:13px;font-weight:600;color:#1a1a1a;line-height:1.3;">Tum<span style="display:block;font-size:11px;font-weight:400;color:#666;">Rishabh Kothiyal</span></div>' +
        '<div style="display:flex;gap:4px;">' +
          '<button id="mpExpand" style="background:none;border:none;cursor:pointer;padding:4px;color:#1a1a1a;"><span class="material-symbols-outlined" style="font-size:18px;">open_in_full</span></button>' +
          '<button id="mpClose" style="background:none;border:none;cursor:pointer;padding:4px;color:#999;"><span class="material-symbols-outlined" style="font-size:18px;">close</span></button>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;align-items:center;gap:10px;">' +
        '<button id="mpPlay" style="background:none;border:1.5px solid #1a1a1a;border-radius:50%;width:34px;height:34px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#1a1a1a;flex-shrink:0;"><span class="material-symbols-outlined" style="font-size:18px;">play_arrow</span></button>' +
        '<div style="flex:1;">' +
          '<input type="range" id="mpSeek" value="0" max="100" style="width:100%;height:3px;-webkit-appearance:none;appearance:none;background:#e0e0e0;border-radius:2px;outline:none;display:block;">' +
          '<div style="display:flex;justify-content:space-between;font-size:9px;color:#999;margin-top:2px;"><span id="mpCur">0:00</span><span id="mpTot">0:00</span></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  d.body.appendChild(mini);

  // Build full-screen overlay
  var full = d.createElement('div');
  full.id = 'mpFull';
  full.style.cssText = 'display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:99998;font-family:Poppins,sans-serif;background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 50%,#1a1a1a 100%);align-items:center;justify-content:center;';
  full.innerHTML =
    '<div style="position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;opacity:0.3;">' +
      '<img src="assets/images/misc/music.png" alt="" style="width:100%;height:100%;object-fit:cover;filter:blur(40px);transform:scale(1.2);">' +
    '</div>' +
    '<div style="position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.85) 100%);"></div>' +
    '<div style="text-align:center;max-width:420px;width:90%;position:relative;z-index:1;">' +
      '<div style="position:absolute;top:0;right:0;display:flex;gap:8px;">' +
        '<button id="fpMinimize" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;"><span class="material-symbols-outlined" style="font-size:20px;">collapse_content</span></button>' +
        '<button id="fpClose" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:50%;width:40px;height:40px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;"><span class="material-symbols-outlined" style="font-size:20px;">close</span></button>' +
      '</div>' +
      '<img src="assets/images/misc/music.png" alt="Tum" style="display:block;width:200px;margin:0 auto 24px;">' +
      '<div style="font-size:28px;font-weight:700;color:#fff;margin-bottom:4px;">Tum</div>' +
      '<div style="font-size:14px;color:rgba(255,255,255,0.6);margin-bottom:28px;">Rishabh Kothiyal</div>' +
      '<div style="margin-bottom:20px;">' +
        '<input type="range" id="fpSeek" value="0" max="100" style="width:100%;height:4px;-webkit-appearance:none;appearance:none;background:rgba(255,255,255,0.15);border-radius:2px;outline:none;">' +
        '<div style="display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,0.4);margin-top:6px;"><span id="fpCur">0:00</span><span id="fpTot">0:00</span></div>' +
      '</div>' +
      '<div style="display:flex;align-items:center;justify-content:center;gap:24px;">' +
        '<button id="fpBackward" style="background:none;border:1px solid rgba(255,255,255,0.2);border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;"><span class="material-symbols-outlined" style="font-size:24px;">replay_10</span></button>' +
        '<button id="fpPlay" style="background:#FFD400;border:none;border-radius:50%;width:72px;height:72px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#1a1a1a;box-shadow:0 4px 20px rgba(255,212,0,0.4);"><span class="material-symbols-outlined" style="font-size:40px;">play_arrow</span></button>' +
        '<button id="fpForward" style="background:none;border:1px solid rgba(255,255,255,0.2);border-radius:50%;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;"><span class="material-symbols-outlined" style="font-size:24px;">forward_10</span></button>' +
      '</div>' +
    '</div>';
  d.body.appendChild(full);

  // Wire events
  d.getElementById('mpToggle').onclick = function() {
    d.getElementById('mpBar').style.display = 'block';
    this.style.display = 'none';
  };
  d.getElementById('mpClose').onclick = function() {
    d.getElementById('mpBar').style.display = 'none';
    d.getElementById('mpToggle').style.display = 'flex';
    audio.pause(); isPlaying = false; updateBtns();
  };
  d.getElementById('mpPlay').onclick = doPlay;
  d.getElementById('fpPlay').onclick = doPlay;
  d.getElementById('fpBackward').onclick = function() {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
  };
  d.getElementById('fpForward').onclick = function() {
    audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 10);
  };

  d.getElementById('mpExpand').onclick = function() {
    full.style.display = 'flex';
    d.getElementById('mpBar').style.display = 'none';
  };
  d.getElementById('fpMinimize').onclick = function() {
    full.style.display = 'none';
    d.getElementById('mpBar').style.display = 'block';
  };
  d.getElementById('fpClose').onclick = function() {
    full.style.display = 'none';
    d.getElementById('mpBar').style.display = 'none';
    d.getElementById('mpToggle').style.display = 'flex';
    audio.pause(); isPlaying = false; updateBtns();
  };

  full.onclick = function(e) {
    if (e.target === full) {
      full.style.display = 'none';
      d.getElementById('mpBar').style.display = 'block';
    }
  };

  d.getElementById('mpSeek').oninput = function() {
    if (audio.duration) audio.currentTime = (this.value / 100) * audio.duration;
  };
  d.getElementById('fpSeek').oninput = function() {
    if (audio.duration) audio.currentTime = (this.value / 100) * audio.duration;
  };

  window.startPlayer = function() {
    d.getElementById('mpBar').style.display = 'block';
    d.getElementById('mpToggle').style.display = 'none';
    if (audio.paused) {
      audio.play().then(function() { isPlaying = true; updateBtns(); }).catch(function(){});
    }
  };
})();
