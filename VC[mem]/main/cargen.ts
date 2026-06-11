// Generated from main/cargen.sc

import { $ } from "../utils/vars.mts";

async function car_park_inner() {


  await asyncWait(500);

  //car park next to big mall


  if ($.player1.isPlaying()) {
    if ($.player1.isInZone("BEACH3")) {
      if ($.player1.isInArea3D(369.7, 1207.3, 24.5, 372.2, 1212.8, 28.5, false /* FALSE */)) {
        $.mall_need_to_clear_area_flag = 4;
      }
      if ($.player1.isInArea3D(301.9, 1152.3, 16.1, 342.4, 1259.4, 22.0, false /* FALSE */)) {
        if ($.mall_first_floor_cars_exist == 0) {
          await mall_first_floor_of_cars();  // SCM GOSUB mall_first_floor_of_cars
          $.mall_first_floor_cars_exist = 1;
        }
        if ($.mall_second_floor_cars_exist == 0) {
          await mall_second_floor_of_cars();  // SCM GOSUB mall_second_floor_of_cars
          $.mall_second_floor_cars_exist = 1;
        }
        if ($.mall_third_floor_cars_exist == 1) {
          World.ClearAreaOfCars(342.4, 1259.1, 21.5, 302.5, 1153.3, 26.0); // 3RD FLOOR CLEAR
          $.mall_third_floor_cars_exist = 0;
        }
        if ($.mall_fourth_floor_cars_exist == 1) {
          World.ClearAreaOfCars(342.4, 1153.3, 23.8, 367.2, 1259.1, 28.9); // 4th FLOOR CLEAR
          $.mall_fourth_floor_cars_exist = 0;
        }
        if ($.mall_fifth_floor_cars_exist == 1) {
          World.ClearAreaOfCars(302.1, 1151.5, 32.0, 342.7, 1259.4, 26.5); // 5th FLOOR CLEAR
          $.mall_fifth_floor_cars_exist = 0;
        }
        $.mall_need_to_clear_area_flag = 1;
      }
      if ($.mall_need_to_clear_area_flag > 0) {
        if ($.player1.isInArea3D(341.3, 1258.9, 19.1, 367.2, 1152.6, 23.8, false /* FALSE */)) {
          if ($.mall_first_floor_cars_exist == 0) {
            await mall_first_floor_of_cars();  // SCM GOSUB mall_first_floor_of_cars
            $.mall_first_floor_cars_exist = 1;
          }
          if ($.mall_second_floor_cars_exist == 0) {
            await mall_second_floor_of_cars();  // SCM GOSUB mall_second_floor_of_cars
            $.mall_second_floor_cars_exist = 1;
          }
          if ($.mall_third_floor_cars_exist == 0) {
            await mall_third_floor_of_cars();  // SCM GOSUB mall_third_floor_of_cars
            $.mall_third_floor_cars_exist = 1;
          }
          if ($.mall_fourth_floor_cars_exist == 1) {
            World.ClearAreaOfCars(342.4, 1153.3, 23.8, 367.2, 1259.1, 28.9);
            $.mall_fourth_floor_cars_exist = 0;
          }
          if ($.mall_fifth_floor_cars_exist == 1) {
            World.ClearAreaOfCars(302.1, 1151.5, 32.0, 342.7, 1259.4, 26.5);
            $.mall_fifth_floor_cars_exist = 0;
          }
          $.mall_need_to_clear_area_flag = 2;
        }
      }
      if ($.mall_need_to_clear_area_flag > 1) {
        if ($.player1.isInArea3D(342.4, 1259.1, 21.5, 302.5, 1153.3, 26.0, false /* FALSE */)) {
          if ($.mall_first_floor_cars_exist == 1) {
            World.ClearAreaOfCars(301.9, 1152.3, 16.1, 342.4, 1259.4, 22.0);
            $.mall_first_floor_cars_exist = 0;
          }
          if ($.mall_second_floor_cars_exist == 0) {
            await mall_second_floor_of_cars();  // SCM GOSUB mall_second_floor_of_cars
            $.mall_second_floor_cars_exist = 1;
          }
          if ($.mall_third_floor_cars_exist == 0) {
            await mall_third_floor_of_cars();  // SCM GOSUB mall_third_floor_of_cars
            $.mall_third_floor_cars_exist = 1;
          }
          if ($.mall_fourth_floor_cars_exist == 0) {
            await mall_fourth_floor_of_cars();  // SCM GOSUB mall_fourth_floor_of_cars
            $.mall_fourth_floor_cars_exist = 1;
          }
          if ($.mall_fifth_floor_cars_exist == 1) {
            World.ClearAreaOfCars(302.1, 1151.5, 32.0, 342.7, 1259.4, 26.5);
            $.mall_fifth_floor_cars_exist = 0;
          }
          $.mall_need_to_clear_area_flag = 3;
        }
      }
      if ($.mall_need_to_clear_area_flag > 2) {
        if ($.player1.isInArea3D(342.4, 1153.3, 23.8, 372.3, 1259.1, 28.9, false /* FALSE */)) {
          if ($.mall_first_floor_cars_exist == 1) {
            World.ClearAreaOfCars(301.9, 1152.3, 16.1, 342.4, 1259.4, 22.0);
            $.mall_first_floor_cars_exist = 0;
          }
          if ($.mall_second_floor_cars_exist == 1) {
            World.ClearAreaOfCars(341.3, 1258.9, 19.1, 367.2, 1152.6, 23.8);
            $.mall_second_floor_cars_exist = 0;
          }
          if ($.mall_third_floor_cars_exist == 0) {
            await mall_third_floor_of_cars();  // SCM GOSUB mall_third_floor_of_cars
            $.mall_third_floor_cars_exist = 1;
          }
          if ($.mall_fourth_floor_cars_exist == 0) {
            await mall_fourth_floor_of_cars();  // SCM GOSUB mall_fourth_floor_of_cars
            $.mall_fourth_floor_cars_exist = 1;
          }
          if ($.mall_fifth_floor_cars_exist == 0) {
            await mall_fifth_floor_of_cars();  // SCM GOSUB mall_fifth_floor_of_cars
            $.mall_fifth_floor_cars_exist = 1;
          }
          $.mall_need_to_clear_area_flag = 4;
        }
      }
      if ($.mall_need_to_clear_area_flag > 3) {
        if ($.player1.isInArea3D(302.1, 1151.5, 32.0, 342.7, 1259.4, 26.5, false /* FALSE */)) {
          if ($.mall_first_floor_cars_exist == 1) {
            World.ClearAreaOfCars(301.9, 1152.3, 16.1, 342.4, 1259.4, 22.0);
            $.mall_first_floor_cars_exist = 0;
          }
          if ($.mall_second_floor_cars_exist == 1) {
            World.ClearAreaOfCars(341.3, 1258.9, 19.1, 367.2, 1152.6, 23.8);
            $.mall_second_floor_cars_exist = 0;
          }
          if ($.mall_third_floor_cars_exist == 1) {
            World.ClearAreaOfCars(342.4, 1259.1, 21.5, 302.5, 1153.3, 26.0);
            $.mall_third_floor_cars_exist = 0;
          }
          if ($.mall_fourth_floor_cars_exist == 0) {
            await mall_fourth_floor_of_cars();  // SCM GOSUB mall_fourth_floor_of_cars
            $.mall_fourth_floor_cars_exist = 1;
          }
          if ($.mall_fifth_floor_cars_exist == 0) {
            await mall_fifth_floor_of_cars();  // SCM GOSUB mall_fifth_floor_of_cars
            $.mall_fifth_floor_cars_exist = 1;
          }
          $.mall_need_to_clear_area_flag = 5;
        }
      }
      if ($.mall_need_to_clear_area_flag > 0) {
        if (!($.player1.isInArea3D(301.9, 1152.3, 16.1, 372.3, 1258.4, 32.6, false /* FALSE */))) {
          World.ClearAreaOfCars(301.9, 1152.3, 16.1, 342.4, 1259.4, 22.0); // 1st FLOOR CLEAR
          World.ClearAreaOfCars(341.3, 1258.9, 19.1, 367.2, 1152.6, 23.8); // 2ND FLOOR CLEAR
          World.ClearAreaOfCars(342.4, 1259.1, 21.5, 302.5, 1153.3, 26.0); // 3RD FLOOR CLEAR
          World.ClearAreaOfCars(342.4, 1153.3, 23.8, 367.2, 1259.1, 28.9); //4th floor clear
          World.ClearAreaOfCars(302.1, 1151.5, 32.0, 342.7, 1259.4, 26.5); //fifth floor clear
          $.mall_first_floor_cars_exist = 0;
          $.mall_second_floor_cars_exist = 0;
          $.mall_third_floor_cars_exist = 0;
          $.mall_fourth_floor_cars_exist = 0;
          $.mall_fifth_floor_cars_exist = 0;
          $.mall_need_to_clear_area_flag = 0;
        }
      }
    }
  }



  //car park behind in ocean beach


  if ($.player1.isPlaying()) {
    if ($.player1.isInZone("BEACH1")) {
      if ($.player1.isInArea3D(104.9, -1143.3, 23.6, 158.3, -1239.3, 2.1, false /* FALSE */)) {
        if ($.beach_first_floor_cars_exist == 0) {
          await beach_first_floor_of_cars();  // SCM GOSUB beach_first_floor_of_cars
          $.beach_first_floor_cars_exist = 1;
        }
        if ($.beach_second_floor_cars_exist == 0) {
          await beach_second_floor_of_cars();  // SCM GOSUB beach_second_floor_of_cars
          $.beach_second_floor_cars_exist = 1;
        }
        if ($.beach_third_floor_cars_exist == 1) {
          World.ClearAreaOfCars(158.3, -1236.6, 29.9, 104.5, -1142.1, 36.8); // 3RD FLOOR CLEAR
          $.beach_third_floor_cars_exist = 0;
        }
        $.beach_need_to_clear_area_flag = 1;
      }
      if ($.beach_need_to_clear_area_flag > 0) {
        if ($.player1.isInArea3D(104.9, -1143.3, 23.6, 158.3, -1236.6, 29.9, false /* FALSE */)) {
          if ($.beach_first_floor_cars_exist == 0) {
            await beach_first_floor_of_cars();  // SCM GOSUB beach_first_floor_of_cars
            $.beach_first_floor_cars_exist = 1;
          }
          if ($.beach_second_floor_cars_exist == 0) {
            await beach_second_floor_of_cars();  // SCM GOSUB beach_second_floor_of_cars
            $.beach_second_floor_cars_exist = 1;
          }
          if ($.beach_third_floor_cars_exist == 0) {
            await beach_third_floor_of_cars();  // SCM GOSUB beach_third_floor_of_cars
            $.beach_third_floor_cars_exist = 1;
          }
          $.beach_need_to_clear_area_flag = 2;
        }
      }
      if ($.beach_need_to_clear_area_flag > 1) {
        if ($.player1.isInArea3D(158.3, -1236.6, 29.9, 104.5, -1142.1, 36.8, false /* FALSE */)) {
          if ($.beach_first_floor_cars_exist == 1) {
            World.ClearAreaOfCars(104.9, -1143.3, 23.6, 158.3, -1239.3, 2.1);
            $.beach_first_floor_cars_exist = 0;
          }
          if ($.beach_second_floor_cars_exist == 0) {
            await beach_second_floor_of_cars();  // SCM GOSUB beach_second_floor_of_cars
            $.beach_second_floor_cars_exist = 1;
          }
          if ($.beach_third_floor_cars_exist == 0) {
            await beach_third_floor_of_cars();  // SCM GOSUB beach_third_floor_of_cars
            $.beach_third_floor_cars_exist = 1;
          }
          $.beach_need_to_clear_area_flag = 3;
        }
      }
      if ($.beach_need_to_clear_area_flag > 0) {
        if (!($.player1.isInArea3D(158.3, -1239.3, 2.1, 104.5, -1142.1, 36.8, false))) {
          World.ClearAreaOfCars(104.9, -1143.3, 23.6, 158.3, -1239.3, 2.1); // 1st FLOOR CLEAR
          World.ClearAreaOfCars(104.9, -1143.3, 23.6, 158.3, -1236.6, 29.9); // 2ND FLOOR CLEAR
          World.ClearAreaOfCars(158.3, -1236.6, 29.9, 104.5, -1142.1, 36.8); // 3RD FLOOR CLEAR
          $.beach_first_floor_cars_exist = 0;
          $.beach_second_floor_cars_exist = 0;
          $.beach_third_floor_cars_exist = 0;
          $.beach_need_to_clear_area_flag = 0;
        }
      }
    }
  }


  // SCM GOTO → car_park_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO car_park_inner"); // fallback: would break linear control flow
  // MissionBoundary
}




//mall car park cars

async function mall_first_floor_of_cars() {
  World.CreateRandomCarForCarPark(310.2, 1234.8, 16.2, 90.2);
  World.CreateRandomCarForCarPark(336.4, 1250.7, 16.2, 271.9);
  World.CreateRandomCarForCarPark(307.6, 1160.9, 16.2, 92.8);
  World.CreateRandomCarForCarPark(336.4, 1157.7, 16.2, 270.1);
  World.CreateRandomCarForCarPark(307.4, 1253.6, 16.2, 89.4);
}



async function mall_second_floor_of_cars() {
  World.CreateRandomCarForCarPark(347.5, 1185.5, 19.1, 95.2);
  World.CreateRandomCarForCarPark(361.4, 1202.9, 19.1, 273.7);
  World.CreateRandomCarForCarPark(361.3, 1157.8, 19.1, 267.7);
  World.CreateRandomCarForCarPark(347.6, 1228.8, 19.0, 92.5);
  World.CreateRandomCarForCarPark(361.4, 1255.5, 19.1, 269.5);
  World.CreateRandomCarForCarPark(362.4, 1228.7, 19.1, 264.6);
}



async function mall_third_floor_of_cars() {
  World.CreateRandomCarForCarPark(308.4, 1225.8, 21.5, 87.4);
  World.CreateRandomCarForCarPark(335.8, 1207.9, 21.5, 271.2);
  World.CreateRandomCarForCarPark(335.8, 1213.6, 21.5, 270.6);
  World.CreateRandomCarForCarPark(308.4, 1196.2, 21.5, 90.0);
  World.CreateRandomCarForCarPark(307.2, 1168.4, 21.5, 89.6);
  World.CreateRandomCarForCarPark(336.2, 1182.3, 21.5, 270.3);
}



async function mall_fourth_floor_of_cars() {
  World.CreateRandomCarForCarPark(348.3, 1190.1, 23.8, 91.0);
  World.CreateRandomCarForCarPark(348.0, 1203.5, 23.8, 87.5);
  World.CreateRandomCarForCarPark(348.2, 1208.5, 23.8, 90.2);
  World.CreateRandomCarForCarPark(347.1, 1227.1, 23.8, 89.8);
  World.CreateRandomCarForCarPark(348.2, 1253.7, 23.8, 92.5);
}



async function mall_fifth_floor_of_cars() {
  World.CreateRandomCarForCarPark(336.8, 1158.1, 26.3, 269.4);
  World.CreateRandomCarForCarPark(335.0, 1186.2, 26.3, 268.7);
  World.CreateRandomCarForCarPark(336.3, 1190.7, 26.3, 271.2);
  World.CreateRandomCarForCarPark(337.0, 1227.0, 26.2, 269.5);
  World.CreateRandomCarForCarPark(337.1, 1221.0, 26.2, 267.9);
}




//beach car park cars

async function beach_first_floor_of_cars() {
  World.CreateRandomCarForCarPark(109.8, -1151.2, 16.5, 1.6);
  World.CreateRandomCarForCarPark(129.7, -1150.8, 16.5, 0.4);
  World.CreateRandomCarForCarPark(143.6, -1153.0, 16.5, 358.9);
  World.CreateRandomCarForCarPark(123.0, -1180.8, 16.5, 1.3);
  World.CreateRandomCarForCarPark(128.0, -1180.8, 16.5, 1.3);
  World.CreateRandomCarForCarPark(133.0, -1180.8, 16.5, 1.3);
}



async function beach_second_floor_of_cars() {
  World.CreateRandomCarForCarPark(150.5, -1192.9, 23.2, 265.1);
  World.CreateRandomCarForCarPark(141.6, -1228.8, 23.2, 181.3);
  World.CreateRandomCarForCarPark(127.1, -1228.7, 23.2, 178.6);
  World.CreateRandomCarForCarPark(117.9, -1152.3, 23.2, 0.1);
  World.CreateRandomCarForCarPark(141.8, -1151.1, 23.2, 0.0);
  World.CreateRandomCarForCarPark(129.2, -1179.3, 23.2, 0.0);
}



async function beach_third_floor_of_cars() {
  World.CreateRandomCarForCarPark(133.0, -1199.6, 30.0, 182.6);
  World.CreateRandomCarForCarPark(123.7, -1199.7, 30.0, 180.4);
  World.CreateRandomCarForCarPark(133.0, -1167.9, 30.0, 182.6);
  World.CreateRandomCarForCarPark(146.3, -1149.3, 30.1, 273.0);
  World.CreateRandomCarForCarPark(143.0, -1230.0, 30.1, 181.5);
  World.CreateRandomCarForCarPark(135.3, -1217.7, 30.1, 1.5);
}

export async function cargen() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // **********************************car gen*********************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // Variables for mission


  // VAR_INT beach_first_floor_cars_exist beach_second_floor_cars_exist beach_third_floor_cars_exist beach_need_to_clear_area_flag
  // VAR_INT mall_first_floor_cars_exist mall_second_floor_cars_exist mall_third_floor_cars_exist mall_fourth_floor_cars_exist mall_fifth_floor_cars_exist mall_need_to_clear_area_flag
  // ****************************************Mission Start************************************



  // SCRIPT_NAME cargen
  // SET_DEATHARREST_STATE(false /* OFF */);


}
