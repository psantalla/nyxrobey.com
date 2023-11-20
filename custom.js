document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("span");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var accentureIndex = element.textContent.indexOf("Accenture");
        var etsyIndex = element.textContent.indexOf("Etsy");
        if (accentureIndex !== -1) {
            var logo = document.createElement("img");
            logo.className = "com-icon--accenture";
            logo.src = "assets/accenture.svg";
            logo.alt = "Icon of Accenture";
            var accentureText = element.textContent.substring(accentureIndex);
            var beforeAccentureText = element.textContent.substring(0, accentureIndex);
            element.textContent = "";
            var span = document.createElement("span");
            span.style.whiteSpace = "nowrap";
            span.appendChild(logo);
            span.appendChild(document.createTextNode(accentureText));
            element.appendChild(document.createTextNode(beforeAccentureText));
            element.appendChild(span);
            span.style.opacity = "0.8";
            span.style.fontWeight = "bold";
        }
        if (etsyIndex !== -1) {
            var logo = document.createElement("img");
            logo.className = "com-icon--etsy";
            logo.src = "assets/etsy.png";
            logo.alt = "Icon of Etsy";
            var etsyText = element.textContent.substring(etsyIndex);
            var beforeEtsyText = element.textContent.substring(0, etsyIndex);
            element.textContent = "";
            var span = document.createElement("span");
            span.style.whiteSpace = "nowrap";
            span.appendChild(logo);
            span.appendChild(document.createTextNode(etsyText));
            element.appendChild(document.createTextNode(beforeEtsyText));
            element.appendChild(span);
            span.style.opacity = "0.8";
            span.style.fontWeight = "bold";
        }
    }
});