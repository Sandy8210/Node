class iceOffer {
  offer(size) {
    if (size === "large") {
      console.log("discount 50rs");
    }else{
        console.log('not eligible for offer');
    }
  }
}

module.exports=iceOffer
