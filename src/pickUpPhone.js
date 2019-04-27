function pickUpPhone() {
  
  //The definition of Host is hidden in phone without being exposed to outside
  function Host(){
    this.transform = function(){
      console.log('I am a host for transforming sound to digital.')
    }
  }
  let host = new Host()

  //The receiver has to collaborate with a host
  function speakByReceiver(){
    console.log('You are speaking by a receiver depending on the host.')
    host.transform()
  }

  //The phone only exposes speakByReceiver to outside but it need the host's help
  return speakByReceiver
}

exports.pickUpPhone = pickUpPhone