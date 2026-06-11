// Generated from main/bus.sc

import { $ } from "../utils/vars.mts";

async function bus_inner() {


  if ($.bus_created == 0) {
    await asyncWait(500);
    $.move_bus++;
    if ($.move_bus > 30) {
      $.bus_position++;
      $.move_bus = 0;
    }
    if ($.bus_position > 17) {
      $.bus_position = 1;
    }
  }
  else {
    await asyncWait(500);
  }

  //IF test_counter = 0
  //DISPLAY_NTH_ONSCREEN_COUNTER bus_position COUNTER_DISPLAY_NUMBER 1
  //DISPLAY_NTH_ONSCREEN_COUNTER bus_created COUNTER_DISPLAY_NUMBER 2
  //test_counter = 1
  //ENDIF



  if (ONMISSION == 0) {
    $.stop_check_on_mission = 0;
    if ($.bus_created == 0) {
      if ($.player1.isPlaying()) {
        if ($.player1.isInAnyCar()) {
          if ($.player1.isInModel(coach)) {
            if ($.player1.isStopped()) {
              $.time_to_get_end = Clock.GetGameTimer();
              $.total_time_to_get = $.time_to_get_end - $.time_to_get_start;
              if ($.total_time_to_get > 1000) {
                $.bus_fares = $.player1.getBusFaresCollected();
                if ($.bus_fares > 0) {
                  Text.PrintWithNumberBig("BONUS", 5, 50, 1);
                  Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
                  $.player1.addScore(5);
                  $.time_to_get_start = Clock.GetGameTimer();
                  $.bus_fares = 0;
                }
              }
            }
          }
        }
      }

      //BEACH ROUTE
      if ($.player1.isPlaying()) {
        if ($.player1.isInZone("BEACH1") || $.player1.isInZone("BEACH2") || $.player1.isInZone("BEACH3")) {
          if ($.flag_player_in_stripclub == 0) {
            if ($.flag_player_in_hotel == 0) {
              if ($.flag_player_in_malibu == 0) {
                if ($.flag_player_in_mall == 0) {
                  if ($.flag_player_in_cop_shop == 0) {
                    if ($.bus_position == 1) {
                      $.busx = -77.6;
                      $.busy = -982.5;
                      $.busz = 9.3;
                      $.bus_heading = 9.8;
                    }
                    if ($.bus_position == 2) {
                      $.busx = 120.0;
                      $.busy = -807.3;
                      $.busz = 9.3;
                      $.bus_heading = 333.5;
                    }
                    if ($.bus_position == 3) {
                      $.busx = 183.2;
                      $.busy = -488.9;
                      $.busz = 9.9;
                      $.bus_heading = 356.5;
                    }
                    if ($.bus_position == 4) {
                      $.busx = 318.6;
                      $.busy = -82.7;
                      $.busz = 9.6;
                      $.bus_heading = 351.4;
                    }
                    if ($.bus_position == 5) {
                      $.busx = 472.7;
                      $.busy = 627.8;
                      $.busz = 10.0;
                      $.bus_heading = 1.7;
                    }
                    if ($.bus_position == 6) {
                      $.busx = 226.5;
                      $.busy = 719.5;
                      $.busz = 9.7;
                      $.bus_heading = 304.3;
                    }
                    if ($.bus_position == 7) {
                      $.busx = 306.9;
                      $.busy = 1044.8;
                      $.busz = 12.1;
                      $.bus_heading = 19.4;
                    }
                    if ($.bus_position == 8) {
                      $.busx = 448.7;
                      $.busy = 1274.3;
                      $.busz = 16.3;
                      $.bus_heading = 269.5;
                    }
                    if ($.bus_position == 9) {
                      $.busx = 499.5;
                      $.busy = 1022.8;
                      $.busz = 16.8;
                      $.bus_heading = 192.4;
                    }
                    if ($.bus_position == 10) {
                      $.busx = 528.1;
                      $.busy = 632.5;
                      $.busz = 9.8;
                      $.bus_heading = 180.9;
                    }
                    if ($.bus_position == 11) {
                      $.busx = 516.2;
                      $.busy = 403.6;
                      $.busz = 9.7;
                      $.bus_heading = 162.7;
                    }
                    if ($.bus_position == 12) {
                      $.busx = 491.5;
                      $.busy = 0.6;
                      $.busz = 9.6;
                      $.bus_heading = 194.7;
                    }
                    if ($.bus_position == 13) {
                      $.busx = 434.1;
                      $.busy = -454.1;
                      $.busz = 9.0;
                      $.bus_heading = 178.5;
                    }
                    if ($.bus_position == 14) {
                      $.busx = 217.1;
                      $.busy = -974.4;
                      $.busz = 9.0;
                      $.bus_heading = 168.2;
                    }
                    if ($.bus_position == 15) {
                      $.busx = 160.6;
                      $.busy = -1329.6;
                      $.busz = 9.0;
                      $.bus_heading = 172.8;
                    }
                    if ($.bus_position == 16) {
                      $.busx = -26.6;
                      $.busy = -1566.2;
                      $.busz = 9.0;
                      $.bus_heading = 84.0;
                    }
                    if ($.bus_position == 17) {
                      $.busx = -21.6;
                      $.busy = -1307.4;
                      $.busz = 9.0;
                      $.bus_heading = 358.1;
                    }
                    await creating_bus();  // SCM GOSUB creating_bus
                    if ($.bus_created == 1) {
                      $.where_bus = 1;
                    }
                  }
                }
              }
            }
          }
        }
      }

      //MAINLAND ROUTE
      if ($.player1.isPlaying()) {
        if ($.player1.isInZone("DTOWN") || $.player1.isInZone("HAITI") || $.player1.isInZone("HAVANA") || $.player1.isInZone("A_PORT") || $.player1.isInZone("JUNKY")) {
          if ($.flag_player_in_bank == 0) {
            if ($.flag_player_in_shooting_range == 0) {
              if ($.bus_position > 13) {
                $.bus_position = 1;
              }
              if ($.bus_position == 1) {
                $.busx = -385.7;
                $.busy = 1008.3;
                $.busz = 8.4;
                $.bus_heading = 338.4;
              }
              if ($.bus_position == 2) {
                $.busx = -295.4;
                $.busy = 1283.6;
                $.busz = 10.1;
                $.bus_heading = 0.0;
              }
              if ($.bus_position == 3) {
                $.busx = -477.4;
                $.busy = 1344.0;
                $.busz = 10.1;
                $.bus_heading = 97.2;
              }
              if ($.bus_position == 4) {
                $.busx = -744.3;
                $.busy = 1319.0;
                $.busz = 10.1;
                $.bus_heading = 101.4;
              }
              if ($.bus_position == 5) {
                $.busx = -875.4;
                $.busy = 1351.1;
                $.busz = 9.8;
                $.bus_heading = 187.2;
              }
              if ($.bus_position == 6) {
                $.busx = -869.5;
                $.busy = 1074.8;
                $.busz = 9.4;
                $.bus_heading = 182.7;
              }
              if ($.bus_position == 7) {
                $.busx = -996.5;
                $.busy = -513.8;
                $.busz = 9.3;
                $.bus_heading = 186.3;
              }
              if ($.bus_position == 8) {
                $.busx = -910.1;
                $.busy = -660.4;
                $.busz = 9.6;
                $.bus_heading = 277.9;
              }
              if ($.bus_position == 9) {
                $.busx = -1432.9;
                $.busy = -780.5;
                $.busz = 13.2;
                $.bus_heading = 88.4;
              }
              if ($.bus_position == 10) {
                $.busx = -1017.7;
                $.busy = -918.7;
                $.busz = 12.9;
                $.bus_heading = 46.4;
              }
              if ($.bus_position == 11) {
                $.busx = -1130.8;
                $.busy = -594.3;
                $.busz = 10.0;
                $.bus_heading = 275.0;
              }
              if ($.bus_position == 12) {
                $.busx = -1200.6;
                $.busy = -420.0;
                $.busz = 9.3;
                $.bus_heading = 5.8;
              }
              if ($.bus_position == 13) {
                $.busx = -1061.0;
                $.busy = -340.2;
                $.busz = 9.3;
                $.bus_heading = 278.5;
              }
              await creating_bus();  // SCM GOSUB creating_bus
              if ($.bus_created == 1) {
                $.where_bus = 2;
              }
            }
          }
        }
      }


    }
    else {
      if ($.flag_player_in_stripclub == 1 || $.flag_player_in_hotel == 1 || $.flag_player_in_malibu == 1 || $.flag_player_in_mall == 1 || $.flag_player_in_bank == 1) {
        await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
      }
      if ($.flag_player_in_shooting_range == 1 || $.flag_player_in_cop_shop == 1) {
        await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
      }


      //BEACH ROUTE
      if ($.where_bus == 1) {
        if ($.player1.isPlaying()) {
          if ($.player1.isInZone("BEACH1") || $.player1.isInZone("BEACH2") || $.player1.isInZone("BEACH3")) {
            $.bus_coordx1 = -77.6;
            $.bus_coordy1 = -982.5;
            $.bus_coordz1 = 9.4;
            $.bus_coordx2 = 120.0;
            $.bus_coordy2 = -807.3;
            $.bus_coordz2 = 9.4;
            $.bus_coordx3 = 183.2;
            $.bus_coordy3 = -488.9;
            $.bus_coordz3 = 10.9;
            $.bus_coordx4 = 318.6;
            $.bus_coordy4 = -82.7;
            $.bus_coordz4 = 9.6;
            $.bus_coordx5 = 472.7;
            $.bus_coordy5 = 627.8;
            $.bus_coordz5 = 10.0;
            $.bus_coordx6 = 226.5;
            $.bus_coordy6 = 719.5;
            $.bus_coordz6 = 9.7;
            $.bus_coordx7 = 306.9;
            $.bus_coordy7 = 1044.8;
            $.bus_coordz7 = 11.9;
            $.bus_coordx8 = 448.7;
            $.bus_coordy8 = 1274.3;
            $.bus_coordz8 = 16.1;
            $.bus_coordx9 = 499.5;
            $.bus_coordy9 = 1022.8;
            $.bus_coordz9 = 16.8;
            $.bus_coordx10 = 528.1;
            $.bus_coordy10 = 632.5;
            $.bus_coordz10 = 9.8;
            $.bus_coordx11 = 516.2;
            $.bus_coordy11 = 403.6;
            $.bus_coordz11 = 9.7;
            $.bus_coordx12 = 491.5;
            $.bus_coordy12 = 0.6;
            $.bus_coordz12 = 9.6;
            $.bus_coordx13 = 434.1;
            $.bus_coordy13 = -454.1;
            $.bus_coordz13 = 9.7;
            $.bus_coordx14 = 217.1;
            $.bus_coordy14 = -974.4;
            $.bus_coordz14 = 9.0;
            $.bus_coordx15 = 160.6;
            $.bus_coordy15 = -1329.6;
            $.bus_coordz15 = 9.0;
            $.bus_coordx16 = -26.6;
            $.bus_coordy16 = -1566.2;
            $.bus_coordz16 = 9.0;
            $.bus_coordx17 = -21.6;
            $.bus_coordy17 = -1307.4;
            $.bus_coordz17 = 9.0;
            await setting_speed();  // SCM GOSUB setting_speed
          }
          else {
            await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
          }
        }
      }


      //MAINLAND ROUTE
      if ($.where_bus == 2) {
        if ($.player1.isPlaying()) {
          if ($.player1.isInZone("DTOWN") || $.player1.isInZone("HAITI") || $.player1.isInZone("HAVANA") || $.player1.isInZone("A_PORT") || $.player1.isInZone("JUNKY")) {
            $.bus_coordx1 = -385.7;
            $.bus_coordy1 = 1008.3;
            $.bus_coordz1 = 8.4;
            $.bus_coordx2 = -295.4;
            $.bus_coordy2 = 1283.6;
            $.bus_coordz2 = 10.1;
            $.bus_coordx3 = -477.4;
            $.bus_coordy3 = 1344.0;
            $.bus_coordz3 = 10.1;
            $.bus_coordx4 = -744.3;
            $.bus_coordy4 = 1319.0;
            $.bus_coordz4 = 10.1;
            $.bus_coordx5 = -875.4;
            $.bus_coordy5 = 1351.1;
            $.bus_coordz5 = 9.8;
            $.bus_coordx6 = -869.5;
            $.bus_coordy6 = 1074.8;
            $.bus_coordz6 = 9.4;
            $.bus_coordx7 = -996.5;
            $.bus_coordy7 = -513.8;
            $.bus_coordz7 = 9.3;
            $.bus_coordx8 = -910.1;
            $.bus_coordy8 = -660.4;
            $.bus_coordz8 = 9.6;
            $.bus_coordx9 = -1432.9;
            $.bus_coordy9 = -780.5;
            $.bus_coordz9 = 13.2;
            $.bus_coordx10 = -1017.7;
            $.bus_coordy10 = -918.7;
            $.bus_coordz10 = 12.9;
            $.bus_coordx11 = -1130.8;
            $.bus_coordy11 = -594.3;
            $.bus_coordz11 = 10.0;
            $.bus_coordx12 = -1200.6;
            $.bus_coordy12 = -420.0;
            $.bus_coordz12 = 9.3;
            $.bus_coordx13 = -1061.0;
            $.bus_coordy13 = -340.2;
            $.bus_coordz13 = 9.3;
            await setting_speed();  // SCM GOSUB setting_speed
          }
          else {
            await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
          }
        }
      }
    }
  }
  else {
    if ($.stop_check_on_mission == 0) {
      await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
      $.stop_check_on_mission = 1;
    }
  }


  // SCM GOTO → bus_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO bus_inner"); // fallback: would break linear control flow


  // MissionBoundary



}



async function creating_bus() {
  if ($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 180.0, 180.0, 180.0, false /* FALSE */)) {
    if (!($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 115.0, 115.0, 115.0, false /* FALSE */))) {
      Streaming.RequestModel(coach);
      while (!(Streaming.HasModelLoaded(coach))) {
        await asyncWait(0);
      }
    }
    if ($.player1.isPlaying()) {
      if (!($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 115.0, 115.0, 115.0, false /* FALSE */))) {
        $.bus1 = Car.Create(coach, $.busx, $.busy, $.busz);
        $.bus1.setToFadeIn(0);
        $.bus1.setHeading($.bus_heading);
        $.bus1.setDrivingStyle(0);
        $.bus_driver = Char.CreateRandom($.busx, $.busy, 30.0);
        $.bus_driver.warpIntoCar($.bus1);
        $.bus_created = 1;
      }
      else {
        Streaming.MarkModelAsNoLongerNeeded(coach);
      }
    }
  }
}



async function setting_speed() {
  if (!(Car.IsDead($.bus1))) {
    if (!(Char.IsDead($.bus_driver))) {
      if ($.bus_driver.isSittingInCar($.bus1)) {
        if ($.bus_can_go == 0) {
          if ($.bus_position == 1) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx1, $.bus_coordy1, $.bus_coordz1);
          }
          if ($.bus_position == 2) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx2, $.bus_coordy2, $.bus_coordz2);
          }
          if ($.bus_position == 3) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx3, $.bus_coordy3, $.bus_coordz3);
          }
          if ($.bus_position == 4) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx4, $.bus_coordy4, $.bus_coordz4);
          }
          if ($.bus_position == 5) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx5, $.bus_coordy5, $.bus_coordz5);
          }
          if ($.bus_position == 6) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx6, $.bus_coordy6, $.bus_coordz6);
          }
          if ($.bus_position == 7) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx7, $.bus_coordy7, $.bus_coordz7);
          }
          if ($.bus_position == 8) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx8, $.bus_coordy8, $.bus_coordz8);
          }
          if ($.bus_position == 9) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx9, $.bus_coordy9, $.bus_coordz9);
          }
          if ($.bus_position == 10) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx10, $.bus_coordy10, $.bus_coordz10);
          }
          if ($.bus_position == 11) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx11, $.bus_coordy11, $.bus_coordz11);
          }
          if ($.bus_position == 12) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx12, $.bus_coordy12, $.bus_coordz12);
          }
          if ($.bus_position == 13) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx13, $.bus_coordy13, $.bus_coordz13);
          }
          if ($.bus_position == 14) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx14, $.bus_coordy14, $.bus_coordz14);
          }
          if ($.bus_position == 15) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx15, $.bus_coordy15, $.bus_coordz15);
          }
          if ($.bus_position == 16) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx16, $.bus_coordy16, $.bus_coordz16);
          }
          if ($.bus_position == 17) {
            $.bus1.gotoCoordinatesAccurate($.bus_coordx17, $.bus_coordy17, $.bus_coordz17);
          }
          $.bus1.setCruiseSpeed(15.0);
          $.bus_can_go = 1;
        }
      }
      else {
        await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
      }
    }
    else {
      await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
    }
  }
  else {
    await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
  }
}



async function moving_bus() {
  if ($.player1.isPlaying()) {
    if (!(Car.IsDead($.bus1))) {
      if (!(Char.IsDead($.bus_driver))) {
        if ($.bus_driver.isSittingInCar($.bus1)) {
          const _res111 = $.bus1.getCoordinates();
$.busx = _res111.x;
$.busy = _res111.y;
$.busz = _res111.z;
          if ($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 180.0, 180.0, 180.0, false /* FALSE */)) {
            if ($.bus_position == 1) {
              if ($.bus1.locate2D($.bus_coordx1, $.bus_coordy1, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 2) {
              if ($.bus1.locate2D($.bus_coordx2, $.bus_coordy2, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 3) {
              if ($.bus1.locate2D($.bus_coordx3, $.bus_coordy3, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 4) {
              if ($.bus1.locate2D($.bus_coordx4, $.bus_coordy4, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 5) {
              if ($.bus1.locate2D($.bus_coordx5, $.bus_coordy5, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 6) {
              if ($.bus1.locate2D($.bus_coordx6, $.bus_coordy6, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 7) {
              if ($.bus1.locate2D($.bus_coordx7, $.bus_coordy7, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 8) {
              if ($.bus1.locate2D($.bus_coordx8, $.bus_coordy8, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 9) {
              if ($.bus1.locate2D($.bus_coordx9, $.bus_coordy9, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 10) {
              if ($.bus1.locate2D($.bus_coordx10, $.bus_coordy10, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 11) {
              if ($.bus1.locate2D($.bus_coordx11, $.bus_coordy11, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 12) {
              if ($.bus1.locate2D($.bus_coordx12, $.bus_coordy12, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 13) {
              if ($.bus1.locate2D($.bus_coordx13, $.bus_coordy13, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 14) {
              if ($.bus1.locate2D($.bus_coordx14, $.bus_coordy14, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 15) {
              if ($.bus1.locate2D($.bus_coordx15, $.bus_coordy15, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 16) {
              if ($.bus1.locate2D($.bus_coordx16, $.bus_coordy16, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
            if ($.bus_position == 17) {
              if ($.bus1.locate2D($.bus_coordx17, $.bus_coordy17, 3.0, 3.0, false /* FALSE */)) {
                await guys_getting_off_bus();  // SCM GOSUB guys_getting_off_bus
                // SCM GOTO → setting_speed (not lowered; manual jump required)
                throw new Error("unresolved GOTO setting_speed"); // fallback: would break linear control flow
              }
            }
          }
          else {
            await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
          }
        }
        else {
          await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
        }
      }
      else {
        await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
      }
    }
    else {
      await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
    }
  }
  else {
    await deleting_bus_stuff();  // SCM GOSUB deleting_bus_stuff
  }
}



async function guys_getting_off_bus() {

  //PRINT UG 1000 1 // Si, men?



  $.bus1.setCruiseSpeed(0.0);
  $.bus_position++;
  $.random_busped1 = Char.CreateRandomAsPassenger($.bus1, 1);
  if (!(Char.IsDead($.random_busped1))) {
    $.random_busped1.setObjLeaveCar($.bus1);
  }
  await asyncWait(4700);
  if (ONMISSION == 0) {
    if ($.player1.isPlaying()) {
      if (!(Car.IsDead($.bus1))) {
        const _res112 = $.bus1.getOffsetInWorldCoords(0.0, -20.0, 0.0);
$.ped_walkx = _res112.x;
$.ped_walky = _res112.y;
$.busz = _res112.z;
        const _res113 = $.bus1.getCoordinates();
$.busx = _res113.x;
$.busy = _res113.y;
$.busz = _res113.z;
        if (!($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 180.0, 180.0, 180.0, false /* FALSE */))) {
          // SCM GOTO → finish_early (not lowered; manual jump required)
          throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
        }
      }
    }
    else {
      // SCM GOTO → finish_early (not lowered; manual jump required)
      throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.random_busped1))) {
      $.random_busped1.setObjGotoCoordOnFoot($.ped_walkx, $.ped_walky);
    }
  }
  else {
    // SCM GOTO → finish_early (not lowered; manual jump required)
    throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
  }


  await asyncWait(1300);
  if (ONMISSION == 0) {
    if ($.player1.isPlaying()) {
      if (!(Car.IsDead($.bus1))) {
        const _res114 = $.bus1.getOffsetInWorldCoords(0.0, -10.0, 0.0);
$.ped_walkx = _res114.x;
$.ped_walky = _res114.y;
$.busz = _res114.z;
        $.random_busped2 = Char.CreateRandomAsPassenger($.bus1, 2);
        const _res115 = $.bus1.getCoordinates();
$.busx = _res115.x;
$.busy = _res115.y;
$.busz = _res115.z;
        if (!($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 180.0, 180.0, 180.0, false /* FALSE */))) {
          // SCM GOTO → finish_early (not lowered; manual jump required)
          throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
        }
      }
    }
    else {
      // SCM GOTO → finish_early (not lowered; manual jump required)
      throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.random_busped2))) {
      $.random_busped2.setObjLeaveCar($.bus1);
    }
  }
  else {
    // SCM GOTO → finish_early (not lowered; manual jump required)
    throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
  }
  await asyncWait(4700);
  if (ONMISSION == 0) {
    if (!(Char.IsDead($.random_busped2))) {
      $.random_busped2.setObjGotoCoordOnFoot($.ped_walkx, $.ped_walky);
    }
  }
  else {
    // SCM GOTO → finish_early (not lowered; manual jump required)
    throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
  }
  await asyncWait(1300);
  if (ONMISSION == 0) {
    if ($.player1.isPlaying()) {
      if (!(Car.IsDead($.bus1))) {
        $.random_busped3 = Char.CreateRandomAsPassenger($.bus1, 3);
        const _res116 = $.bus1.getCoordinates();
$.busx = _res116.x;
$.busy = _res116.y;
$.busz = _res116.z;
        if (!($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 180.0, 180.0, 180.0, false /* FALSE */))) {
          // SCM GOTO → finish_early (not lowered; manual jump required)
          throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
        }
      }
    }
    else {
      // SCM GOTO → finish_early (not lowered; manual jump required)
      throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.random_busped3))) {
      $.random_busped3.setObjLeaveCar($.bus1);
    }
  }
  else {
    // SCM GOTO → finish_early (not lowered; manual jump required)
    throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
  }
  await asyncWait(4700);
  if (ONMISSION == 0) {
    if (!(Char.IsDead($.random_busped3))) {
      $.random_busped3.setObjGotoCoordOnFoot($.ped_walkx, $.ped_walky);
    }
    if ($.player1.isPlaying()) {
      if (!(Car.IsDead($.bus1))) {
        const _res117 = $.bus1.getCoordinates();
$.busx = _res117.x;
$.busy = _res117.y;
$.busz = _res117.z;
        if (!($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 180.0, 180.0, 180.0, false /* FALSE */))) {
          // SCM GOTO → finish_early (not lowered; manual jump required)
          throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
        }
      }
    }
    else {
      // SCM GOTO → finish_early (not lowered; manual jump required)
      throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
    }
  }
  else {
    // SCM GOTO → finish_early (not lowered; manual jump required)
    throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
  }
  await asyncWait(3300);
  if (ONMISSION == 0) {
    if ($.player1.isPlaying()) {
      if (!(Car.IsDead($.bus1))) {
        const _res118 = $.bus1.getCoordinates();
$.busx = _res118.x;
$.busy = _res118.y;
$.busz = _res118.z;
        if (!($.player1.locateAnyMeans3D($.busx, $.busy, $.busz, 180.0, 180.0, 180.0, false /* FALSE */))) {
          // SCM GOTO → finish_early (not lowered; manual jump required)
          throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
        }
      }
    }
    else {
      // SCM GOTO → finish_early (not lowered; manual jump required)
      throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
    }
  }
  else {
    // SCM GOTO → finish_early (not lowered; manual jump required)
    throw new Error("unresolved GOTO finish_early"); // fallback: would break linear control flow
  }
  await asyncWait(5000);
}

async function finish_early() {
  if ($.where_bus == 1) {
    if ($.bus_position > 17) {
      $.bus_position = 1;
    }
  }
  if ($.where_bus == 2) {
    if ($.bus_position > 13) {
      $.bus_position = 1;
    }
  }
  $.random_busped1.markAsNoLongerNeeded();
  $.random_busped2.markAsNoLongerNeeded();
  $.random_busped3.markAsNoLongerNeeded();
  $.bus_can_go = 0;

  //PRINT OOOG 1000 1 // Si, men?
}



async function deleting_bus_stuff() {




  //PRINT OFF 1000 1 // Si, men?







  if (!(Car.IsDead($.bus1))) {
    if ($.player1.isPlaying()) {
      if (!($.player1.isInCar($.bus1))) {
        $.bus1.setDrivingStyle(2);
        $.bus1.setCruiseSpeed(15.0);
      }
    }
  }
  $.bus1.markAsNoLongerNeeded();
  $.bus_driver.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(coach);
  $.random_busped1.markAsNoLongerNeeded();
  $.random_busped2.markAsNoLongerNeeded();
  $.random_busped3.markAsNoLongerNeeded();
  $.bus_created = 0;
}

export async function bus() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // **********************************bus routes*********************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // Variables for mission


  // VAR_INT where_bus bus_created bus1 bus_driver bus_position stop_check_on_mission
  // VAR_INT random_busped1 random_busped2 random_busped3 move_bus bus_can_go
  // VAR_INT time_to_get_start time_to_get_end total_time_to_get bus_fares

  //VAR_INT test_counter


  // VAR_FLOAT busx busy busz bus_heading ped_walkx ped_walky
  // VAR_FLOAT bus_coordx1 bus_coordx2 bus_coordx3 bus_coordx4 bus_coordx5 bus_coordx6 bus_coordx7 bus_coordx8 bus_coordx9 bus_coordx10
  // VAR_FLOAT bus_coordy1 bus_coordy2 bus_coordy3 bus_coordy4 bus_coordy5 bus_coordy6 bus_coordy7 bus_coordy8 bus_coordy9 bus_coordy10
  // VAR_FLOAT bus_coordz1 bus_coordz2 bus_coordz3 bus_coordz4 bus_coordz5 bus_coordz6 bus_coordz7 bus_coordz8 bus_coordz9 bus_coordz10
  // VAR_FLOAT bus_coordx11 bus_coordx12 bus_coordx13 bus_coordx14 bus_coordx15 bus_coordx16 bus_coordx17
  // VAR_FLOAT bus_coordy11 bus_coordy12 bus_coordy13 bus_coordy14 bus_coordy15 bus_coordy16 bus_coordy17
  // VAR_FLOAT bus_coordz11 bus_coordz12 bus_coordz13 bus_coordz14 bus_coordz15 bus_coordz16 bus_coordz17



  /*
  // ****************************************Mission Start************************************
  //NORTH MAINLAND ROUTE
  //downtown
  bussign1 -481.5 1345.8 12.1	//across from VAJ finance
  bussign1 -747.8 1320.7 12.2	//outside taco bell
  bussign1 -877.4 1347.3 11.9	//west of stadium entrance
  bussign1 -871.9 1071.0 11.5	//outside concert hall
  bussign1 -382.2 1010.3 10.3 //outside Gspotlight building
  bussign1 -292.9 1287.3 12.2	//outside last corner gspot jump building

  //SOUTH MAINLAND ROUTE
  //little havana
  bussign1 -905.7 -662.4 11.3	//across from screw this
  bussign1 -985.3 -541.7 11.0	//behind ice cream factory    - taken out.
  bussign1 -998.7 -517.2 11.0	//across the road from the one behind the ice cream factory
  bussign1 -1059.1 -342.3 11.0 //South of the PrintWorks
  bussign1 -1124.9 -595.1 11.7 //outside coffee shop
  bussign1 -1198.0 -415.5 11.0 //west of basketball courts in havana
  //airport
  bussign1 -1438.6 -777.9 15.2//outside airport
  bussign1 -1019.2 -913.6 14.8//outside sunshine autos



  //NORTH BEACH ROUTE
  //north beach
  bussign1 308.7 1051.8 13.7 //West of big mall
  bussign1 452.3 1270.6 18.0 //north of big mall
  bussign1 497.0 1018.5 18.6 //east of big mall
  bussign1 524.5 625.11 11.5 //north and across the road of the Sandcastle Hotel
  //north beach bottom
  bussign1 431.1 314.1 12.1
  bussign1 475.0 632.2 11.7 //across from SWANK pad
  bussign1 232.8 718.7 11.5 //just after loooong curve leadign to Big Mall
  bussign1 512.0 398.9 11.5 //south and across the road of the Sandcastle Hotel

  //SOUTH BEACH ROUTE
  //north beach west
  bussign1 186.5 -483.8 11.5 //outside Bunch of Tools (close to construction yard)
  bussign1 322.1 -78.3 11.4  //next to funky granite shaped houses
  //ocean drive north
  bussign1 490.1 -5.5 11.5 //outside sex pad
  bussign1 431.4 -454.4 10.6 //north of the police station
  //washington north
  bussign1 -75.5 -979.0 10.9 //outside Small Mall (WEST)
  bussign1 124.7 -806.3 10.9 //across from strange glowing red building
  bussign1 214.3 -974.5 10.9 //behind Dakota hotel
  //washington south
  bussign1 157.4 -1331.3 10.8//outside underpass shortcut
  bussign1 -27.4 -1562.7 10.9//across from southmost statue
  bussign1 -19.2 -1304.4 10.9//next to the pay n spray
  */


  // SET_DEATHARREST_STATE(false /* OFF */);
  // SCRIPT_NAME bus
  $.bus_position = 1;


}
