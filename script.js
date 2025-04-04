function processImage() {
    let upload = document.getElementById("upload").files[0];
    if (!upload) {
        alert("Please upload an image first!");
        return;
    }

    let preview = document.getElementById("preview");
    let ghibliImage = document.getElementById("ghibliImage");

    let reader = new FileReader();
    reader.onload = function(e) {
        preview.src = e.target.result;

        // Simulate AI-generated Ghibli effect (Replace with real AI API later)
        setTimeout(() => {
            ghibliImage.src = e.target.result; // Replace this with actual AI output
            alert("Ghibli Portrait Generated! (AI processing will be added later)");
        }, 2000);
    };
    reader.readAsDataURL(upload);
}
