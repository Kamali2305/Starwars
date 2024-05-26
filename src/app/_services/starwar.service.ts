import { EventEmitter, Injectable } from "@angular/core";
import { IStarwar } from "../_models/starwar.model";
import { LoggerService } from "./logger.service";
import { Subject, map } from "rxjs";
import { HttpClient } from "@angular/common/http";

const Base_Url = 'https://starwar-swapi-default-rtdb.firebaseio.com';
@Injectable()
export class StarwarService{
  starwarList: IStarwar[] = [];

    
      constructor(private http:HttpClient,private logger: LoggerService) {}

      getStarwars() {

        this.logger.logInformation('Starwar ship list fetched');

        return this.http
        .get(Base_Url + '/starwar.json')
        .pipe(map((responseData)=>{
          const starwars = [];
          for (const key in responseData){
            if(responseData.hasOwnProperty(key)){
              const starwar = {...responseData[key], id: key};
              starwars.push(starwar);
            }
          }
          return starwars;
        }));
      }

      addStarwar(starwar: IStarwar) {

        const customStarwar = {
          name:starwar.name,
          director:starwar.director,
          crew:starwar.crew,
          imageUrl:starwar.imageUrl,
          year:starwar.year,
        };
        return this.http.post(Base_Url + '/starwar.json' ,customStarwar)

        //this.starwarList.push(starwar);
        //this.logger.logInformation('Starwar Added');

      }

      getStarwarById(id: string) {
       
        return this.http.get(Base_Url + `/starwar/${id}.json` ).pipe(
          map((responseData)=> {
            return{...responseData, id};
          })
        );
      }

      updateStarwar(starwar: IStarwar){
        const customStarwar = {
          name:starwar.name,
          director:starwar.director,
          crew:starwar.crew,
          imageUrl:starwar.imageUrl,
          year:starwar.year,
        };
        return this.http.put(Base_Url + `/starwar/${starwar.id}.json`,
          customStarwar
        ) ;
        
        }

        deleteStarwar(id:string){
          return this.http.delete(Base_Url + `/starwar/${id}.json`)


      }


}