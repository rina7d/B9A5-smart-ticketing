function seats(){
    if(selectedSeat ===4){
      for(let halp =0; halp < 8; halp++){
        seats[halp].classList.add("cursor")
      }
    }
  }