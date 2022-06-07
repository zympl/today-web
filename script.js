function adding() {
    let Text = document.getElementById("txt").value;
    if (Text !== "") {
        p = document.createElement("p");
        p.innerHTML = Text;
        document.getElementById("txt").value = "";
        p.onclick = function() {
            if (this.style.textDecoration == "line-through") {
                this.style.textDecoration = "none"
            } else {
                this.style.textDecoration = "line-through"

            }

        }
        document.body.appendChild(p);
    }
}