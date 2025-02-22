let counter = 0;
for (let spacing = "          ";;) {
    for (star = "*"; counter <= 5; star += "**") {
        console.log(spacing + star);
        counter++;
        spacing = spacing.slice(0,-1);
    }
    if (counter > 5)
        console.log(counter);
        break;
}