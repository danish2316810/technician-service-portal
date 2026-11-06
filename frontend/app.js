function loadTechnicians() {
        fetch("http://localhost:3000/technicians")
          .then(response => response.json())
          .then(data => {
            document.getElementById("output").innerText =
              JSON.stringify(data, null, 2);
          })
          .catch(error => console.error("Error:", error));
      }

      function loadTechnicianById() {
        const id = document.getElementById("techId").value;

        fetch(`http://localhost:3000/technicians/${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error("Technician not found");
            }
            return response.json();
          })
          .then(data => {
            document.getElementById("output").innerText =
              JSON.stringify(data, null, 2);
          })
          .catch(error => {
            document.getElementById("output").innerText =
              error.message;
          });
      }