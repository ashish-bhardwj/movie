import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/sharedModule/model/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/sharedModule/service/movie.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  movie: Movie | undefined;
  private seatConfig: any = null;
  private seatmap = [];
  
  private seatChartConfig = {
    showRowsLabel : false,
    showRowWisePricing : false,
    newSeatNoForRow : false
  }
  
  private cart = {
    selectedSeats : [],
    seatstoStore : [],
    totalamount : 0,
    cartId : "",
    eventId : 0
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) {
  }

  ngOnInit() {
    this.seatConfig = [
      {
        "seat_price": 250,
        "seat_map": [
          {
            "seat_label": "1",
            "layout": "ggg____ggg"
          },
          {
            "seat_label": "2",
            "layout": "ggg____ggg"
          },
          {
            "seat_label": "3",
            "layout": "gggggggggg"
          },
          {
            "seat_label": "4",
            "layout": "gggggggggg"
          },
          {
            "seat_label": "5",
            "layout": "gggggggggg"
          },
          {
            "seat_label": "6",
            "layout": "gggggggggg"
          },
          {
            "seat_label": "7",
            "layout": "gggggggggg"
          },
          {
            "seat_label": "8",
            "layout": "gggggggggg"
          }
        ]
      }
    ]    
    this.processSeatChart(this.seatConfig);


    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getMovie(id);
    }


  }

  getMovie(id:string){
    this.movieService.getMovie(id).subscribe((res)=>{
      this.movie=res as Movie;
      console.log(this.movie);
    });
  }




  onBack(): void {
    this.router.navigate(['']);
  }

  public processSeatChart ( map_data : any[] )
  {
    
      if( map_data.length > 0 )
      {
        var seatNoCounter = 1;
        for (let __counter = 0; __counter < map_data.length; __counter++) {
          var row_label = "";
          var item_map = map_data[__counter].seat_map;

          //Get the label name and price
          row_label = "Row "+item_map[0].seat_label + " - ";
          if( item_map[ item_map.length - 1].seat_label != " " )
          {
            row_label += item_map[ item_map.length - 1].seat_label;
          }
          else
          {
            row_label += item_map[ item_map.length - 2].seat_label;
          }
          row_label += " : Rs. " + map_data[__counter].seat_price;
          
          item_map.forEach(map_element => {
            var mapObj = {
              "seatRowLabel" : map_element.seat_label,
              "seats" : [],
              "seatPricingInformation" : row_label
            };
            row_label = "";
            var seatValArr = map_element.layout.split('');
            if( this.seatChartConfig.newSeatNoForRow )
            {
              seatNoCounter = 1; //Reset the seat label counter for new row
            }
            var totalItemCounter = 1;
            seatValArr.forEach(item => {
              var seatObj = {
                "key" : map_element.seat_label+"_"+totalItemCounter,
                "price" : map_data[__counter]["seat_price"],
                "status" : "available"
              };
               
              if( item != '_')
              {
                seatObj["seatLabel"] = map_element.seat_label+" "+seatNoCounter;
                if(seatNoCounter < 10)
                { seatObj["seatNo"] = "0"+seatNoCounter; }
                else { seatObj["seatNo"] = ""+seatNoCounter; }
                
                seatNoCounter++;
              }
              else
              {
                seatObj["seatLabel"] = "";
              }
              totalItemCounter++;
              mapObj["seats"].push(seatObj);
            });
            console.log(" \n\n\n Seat Objects " , mapObj);
            this.seatmap.push( mapObj );

          });
        }
      }
  }

  public selectSeat( seatObject : any )
  {
    console.log( "Seat to block: " , seatObject );
    if(seatObject.status == "available")
    {
      seatObject.status = "booked";
      this.cart.selectedSeats.push(seatObject.seatLabel);
      this.cart.seatstoStore.push(seatObject.key);
      this.cart.totalamount += seatObject.price;
    }
    else if( seatObject.status = "booked" )
    {
      seatObject.status = "available";
      var seatIndex = this.cart.selectedSeats.indexOf(seatObject.seatLabel);
      if( seatIndex > -1)
      {
        this.cart.selectedSeats.splice(seatIndex , 1);
        this.cart.seatstoStore.splice(seatIndex , 1);
        this.cart.totalamount -= seatObject.price;
      }
      
    }
  }

  public blockSeats(seatsToBlock : string)
  {
    if(seatsToBlock != "")
    {
      var seatsToBlockArr = seatsToBlock.split(',');
      for (let index = 0; index < seatsToBlockArr.length; index++) {
        var seat =  seatsToBlockArr[index]+"";
        var seatSplitArr = seat.split("_");
      //  console.log("Split seat: " , seatSplitArr);
        for (let index2 = 0; index2 < this.seatmap.length; index2++) {
          const element = this.seatmap[index2];
          if(element.seatRowLabel == seatSplitArr[0])
          {
            var seatObj = element.seats[parseInt(seatSplitArr[1]) - 1];
            if(seatObj)
            {
           //   console.log("\n\n\nFount Seat to block: " , seatObj);
              seatObj["status"] = "unavailable";
              this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1] = seatObj;
           //   console.log("\n\n\nSeat Obj" , seatObj);
           //   console.log(this.seatmap[index2]["seats"][parseInt(seatSplitArr[1]) - 1]);
              break;
            }
             
          }
        }
       
      }
    }
    
  }

  cancel(){
    this.cart.selectedSeats=[];
    this.cart.totalamount=0;
    this.cart.seatstoStore=[];
    this.router.navigate(['/movies']);
  }

  processBooking(){
    this.movieService.raiseEvent(this.movie);
    console.log(this.movie.title);
    this.router.navigate(['payment']);
  }
}
