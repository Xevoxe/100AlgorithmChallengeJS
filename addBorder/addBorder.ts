function addBorder(picture: string[]): string[] {
    let bordered = picture.map((item)=> "*" + item + "*");
    let border = ""

    for (let i = 0; i < picture[0].length+2; i++){
        border +="*"
    }

     bordered.unshift(border);
     bordered.push(border);
     return bordered;
}

function reFactoredAddBorder(picture :string[]):string[] {
    let border = "*".repeat(picture[0].length+2)

    picture = picture.map((item)=> "*".concat(item,"*"))
    picture.unshift(border);
    picture.push(border);
    return picture;
}


console.log(reFactoredAddBorder(["abc", "ded"]));