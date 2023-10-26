function volume_sphere() {
            var radius = document.getElementById('radius').value;
            radius = Math.abs(radius);
            var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
            volume = volume.toFixed(4);
            document.getElementById('volume').value = volume;
            return false;
        }
 
      window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;