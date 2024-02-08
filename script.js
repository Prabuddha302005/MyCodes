document.getElementById('appendCssBtn').addEventListener('click', function() {
    // Create a new link element for the CSS file
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style3.css';

    // Append the link to the head section of the document
    document.head.appendChild(link);

    if(document.head.appendChild(link)==true){
        document.head.removeChild(link);
    }
});
