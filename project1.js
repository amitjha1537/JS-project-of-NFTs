const NFTs = []
function mintNFT (_name, _type, _shape, _color, _use) {
    const NFT ={
        "Name" : _name,
        "Type": _type,
        "Shape" : _shape,
        "color" : _color,
        "Use" : _use
    }
    NFTs.push(NFT);
    console.log(_name+" has been Minted\n");

}

function listNFTs () {
    var i = 0;
    while (i < NFTs.length) {
        console.log("NFT " + (i + 1)  + ":\n");
        console.log("Name : " + NFTs[i].Name);
        console.log("Type : " + NFTs[i].Type);
        console.log("Shape: " + NFTs[i].Shape);
        console.log("Color: " + NFTs[i].color); 
        console.log("Use  : " + NFTs[i].Use);
        i++;
    }
}

function getTotalSupply() {
    console.log("\nTotal NFTs minted : " + NFTs.length);

}
mintNFT("Pixel","Art", "Pixelated","Retro","In profile pictures");
mintNFT("Dynasty","Trading card", "Rectangular","Varied","Card Games");
mintNFT("Symphony","Music", "Soundwaves","Dynamic","Exclusive music ownership rights");
mintNFT("Elegance","Fashion", "Wearable","Silver and Gold","Virtual fashion shows");
mintNFT("Blossom","Digital Art", "Floral","Pink and Blue","Background of digital spaces");
listNFTs();
getTotalSupply();
 