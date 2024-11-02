// result.js
document.addEventListener('DOMContentLoaded', function() {
    const result = document.getElementById('result');
    const downloadBtn = document.getElementById('downloadBtn');
  
    const name = localStorage.getItem('searchName');
    if (name) {
      result.textContent = `¿Dónde estás, ${name}?`;
      localStorage.removeItem('searchName');
    }
    else {
      window.location.href = 'index.html';
    }
  
    downloadBtn.addEventListener('click', function() {
      const text = result.textContent.replace('\n', ' ');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      canvas.width = 1170;
      canvas.height = 2532;
  
      ctx.fillStyle = '#0a1622';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = 'white';
      ctx.font = 'bold 75px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  
      const link = document.createElement('a');
      link.download = 'donde-estas[Nombre].png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });