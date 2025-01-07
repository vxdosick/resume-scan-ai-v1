const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-upload');
const fileNameLabel = document.getElementById('file-name');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
  dropZone.addEventListener(event, e => e.preventDefault());
  dropZone.addEventListener(event, e => e.stopPropagation());
});

['dragenter', 'dragover'].forEach(event => {
  dropZone.classList.add('dragover');
});

['dragleave', 'drop'].forEach(event => {
  dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', e => {
  const files = e.dataTransfer.files;
  if (files.length > 0 && files[0].type === 'application/pdf') {
    fileInput.files = files;
    fileNameLabel.textContent = files[0].name;
  } else {
    alert('Please only upload PDF files.');
  }
});

fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      fileNameLabel.textContent = file.name;
    } else {
      alert('Enter a PDF file, please');
    }
  });
  
