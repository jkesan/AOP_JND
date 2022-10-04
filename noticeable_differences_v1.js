PennController.ResetPrefix(null);

//Template(

var blocks = [randomize("block1"),randomize("block2")];
fisherYates(blocks);
Sequence("consent",...blocks)
Template(
GetTable("JND_test.csv")
    .filter("BlockID",/Block1/)
    ,
    row=>newTrial("block1",
    newImage("Image1",row.Image1)
    .settings.size(640, 360)
    ,
    newImage("Image2", row.Image2)
    .settings.size(640, 360)
    ,
    newCanvas("ImageCanvas", 1280,400)
    .add(  0, 0, getImage("Image1").print())
    .add(640, 0, getImage("Image2").print())
    .center()
    .print()
    ,
    newText("Prompt", "Are these images identical to each other or different?")
    .center()
    .bold()
    .print()
    .css({"font-size": "24px"})
    ,
    newCanvas("ResponseCanvas", 960, 200)
    .add(400,0, newButton("Identical", "Identical"))
    .add(560,0, newButton("Different", "Different"))
    .center()
    .print()
    ,
    newSelector("Response")
    .add( getButton("Identical"), getButton("Different"))
    .shuffle()
    .log("all")
    .wait(),
    clear())),
Template(
    GetTable("JND_test.csv")
    .filter("BlockID","Block2")
    ,
    row=>newTrial("block2",
    newImage("Image1",row.Image1)
    .settings.size(640, 360)
    ,
    newImage("Image2", row.Image2)
    .settings.size(640, 360)
    ,
    newCanvas("ImageCanvas", 1280,400)
    .add(  0, 0, getImage("Image1").print())
    .add(640, 0, getImage("Image2").print())
    .center()
    .print()
    ,
    newText("Prompt", "Are these images identical to each other or different?")
    .center()
    .bold()
    .print()
    .css({"font-size": "24px"})
    ,
    newCanvas("ResponseCanvas", 960, 200)
    .add(400,0, newButton("Identical", "Identical"))
    .add(560,0, newButton("Different", "Different"))
    .center()
    .print()
    ,
    newSelector("Response")
    .add( getButton("Identical"), getButton("Different"))
    .shuffle()
    .log("all")
    .wait()
    ,
    clear()
    ))

//fisherYates(blocks);
