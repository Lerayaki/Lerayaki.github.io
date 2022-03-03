window.onload = function(){
    document.getElementById("download").addEventListener("click", ()=>{
        const resume = document.getElementById("resume")

        setImgVisivility(false)

        var opt = {
            margin:       1,
            filename:     'Resume.pdf',
            image:        { type: 'png', quality: 0.98 },
            html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }

        html2pdf().from(resume).set(opt).save()
            .then(res =>{
                setImgVisivility(true)
            }
        )
        

    })
}

function setImgVisivility(bool){
    var list = resume.getElementsByTagName('img')
    console.log(list)
    for (img of list) {
        img.style.visibility = (bool ? 'visible' : 'hidden')
    }

}
