
async function hello() {
      try {
        axios.defaults.headers.common['x-api-key'] = "572201f7-9d9f-4ada-9256-dafc59396b5e"

        let response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=30')

        this.images = response.data
        console.log(this.images)
        for (let i = 0; i < this.images.length; i++) {
          var url = this.images[i].url
          var img = '<img style="dissplay:inline" height="300px" width="300px" src="' + url + '"></div>'        
          $("#img_card").append('<div class="hhhh" style="border:grey solid 3px; padding:15px; display:inline-table; border-radius: 7px;">' + img + '</div> ')
          // '<h3 style="display: inline-table">' + this.images[i].id + '</h3>' +
        }
      } catch (err) {
        console.log(err)
      }
}


$('#submit').click(async function(){
  try {
    axios.defaults.headers.common['x-api-key'] = "572201f7-9d9f-4ada-9256-dafc59396b5e"
    var name = document.getElementById('name')
    var breeds = document.getElementById('breeds')
    var age = document.getElementById('age')
    var color = document.getElementById('color')

    let response = await axios.post('https://api.thecatapi.com/v1/images/:name/:breeds/:age/:color')


  } catch (err) {
    console.log(err)
  }
})