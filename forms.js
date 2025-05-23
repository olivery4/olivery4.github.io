const forms = document.querySelectorAll("form");

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(forms[i]);

    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    fetch("https://olivery4-github-io.onrender.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDataObject)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, true);
};
