// Generated from main/moviedemo.sc

import { $ } from "../utils/vars.mts";

// *****************************************************************************************
// *********************************** XXXX mission 1  *************************************
// ****************************************  XXXX  *****************************************
// *****************************************************************************************
// ***                                                                                   ***
// *****************************************************************************************

async function body() {


  ONMISSION = 1;


  Stat.RegisterMissionGiven();
  // SCRIPT_NAME XXXX


  await asyncWait(0);

  //LOAD_SCENE 388.7012 -511.8918 8.3556
  //CREATE_PLAYER 0 388.7012 -511.8918 8.3556 player1
  //LAUNCH_MISSION moviedemo.sc



  Streaming.RequestModel(COP);
  Streaming.RequestModel(HFYBE);
  Streaming.RequestModel(SENTINEL);
  Streaming.RequestModel(MALE01);
  Streaming.RequestModel(BANSHEE);
  Streaming.RequestModel(SHOTGUN);
  Streaming.RequestModel(M4);
  Streaming.RequestModel(UZI);
  Streaming.RequestModel(barrel1);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(COP)) || !(Streaming.HasModelLoaded(SENTINEL)) || !(Streaming.HasModelLoaded(HFYBE)) || !(Streaming.HasModelLoaded(SHOTGUN)) || !(Streaming.HasModelLoaded(BANSHEE))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(M4)) || !(Streaming.HasModelLoaded(UZI)) || !(Streaming.HasModelLoaded(barrel1))) {
    await asyncWait(0);
  }

  //SET_PLAYER_CONTROL player1 OFF

  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setVisible(true /* TRUE */);
  Camera.SetGenerateCarsAround(true /* TRUE */);


  //LOAD_CAMERA_SPLINE christe//.dat
  //
  //WAIT 0
  //
  //MOVE_CAMERA_ALONG_SPLINE jump_cut
  //
  //loop2:
  //
  //	WAIT 0
  //
  //	GET_CAMERA_POSITION_ALONG_SPLINE progressvalue
  //
  //	progressvalue_int =# progressvalue
  //
  //	PRINT_WITH_NUMBER_NOW number progressvalue_int 5000 1
  //
  //GOTO loop2



  movie_player = Char.Create(4 /* PEDTYPE_CIVMALE */, NULL, 383.0219, -505.1329, 8.3556);
  movie_player.setHeading(241.0667);
  movie_player.setUsePednodeSeek(false /* FALSE */);


  movie_cop = Char.Create(4 /* PEDTYPE_CIVMALE */, COP, 384.4897, -507.7556, 8.3556);
  movie_cop.setHeading(338.9948);


  Camera.SetFixedPosition(386.6381, -509.7485, 9.0009, 0.0, 0.0, 0.0); //IN JAIL
  Camera.PointAtPoint(386.0713, -508.9288, 9.0839, 2 /* JUMP_CUT */);


  movie_car1 = Car.Create(BANSHEE, 408.6158, -469.1374, 9.1126);
  movie_car1.setHeading(230.2856);
  movie_car1_driver = Char.CreateInsideCar(movie_car1, 4 /* PEDTYPE_CIVMALE */, HFYBE);
  movie_car1.setIdle();
  movie_car1.setCruiseSpeed(12.0);


  movie_car2 = Car.Create(SENTINEL, 431.9260, -457.8690, 8.9777);
  movie_car2.setHeading(176.3647);
  movie_car2_driver = Char.CreateInsideCar(movie_car2, 4 /* PEDTYPE_CIVMALE */, MALE01);
  movie_car2_passenger = Char.CreateAsPassenger(movie_car2, 4 /* PEDTYPE_CIVMALE */, MALE01, 0);
  movie_car2_driver.clearThreatSearch();
  movie_car2_passenger.clearThreatSearch();
  movie_car2_driver.setSuffersCriticalHits(false /* FALSE */);
  movie_car2_passenger.setSuffersCriticalHits(false /* FALSE */);
  movie_player.setSuffersCriticalHits(false /* FALSE */);
  movie_player.setProofs(true /* TRUE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
  movie_car2.setIdle();
  movie_car2.setCruiseSpeed(12.0);
  movie_car1.setDrivingStyle(2);
  movie_car2.setDrivingStyle(2);


  Camera.DoFade(1000, 1 /* FADE_IN */);
}



async function movie_demo_loop() {
  // SCM GOTO → movie_demo_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    $.game_timer = Clock.GetGameTimer();



    if (movie_counter < 63) {
      if (Char.IsDead(movie_player)) {
        // SCM GOTO → mission_XXXX_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_XXXX_failed"); // fallback: would break linear control flow
      }
      if (movie_counter < 49) {
        if (Char.IsDead(movie_car2_driver)) {
          // SCM GOTO → mission_XXXX_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_XXXX_failed"); // fallback: would break linear control flow
        }
      }
      if (movie_counter < 51) {
        if (Char.IsDead(movie_car2_passenger)) {
          // SCM GOTO → mission_XXXX_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_XXXX_failed"); // fallback: would break linear control flow
        }
      }
      if (Car.IsDead(movie_car1)) {
        // SCM GOTO → mission_XXXX_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_XXXX_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead(movie_car2)) {
        // SCM GOTO → mission_XXXX_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_XXXX_failed"); // fallback: would break linear control flow
      }
    }


    if (movie_counter == 0) {
      if (!(Camera.GetFadingStatus())) {
        movie_player.setObjGotoCoordOnFoot(387.2983, -507.8135);
        movie_timer = $.game_timer + 2500;
        movie_counter = 1;
      }
    }


    if (movie_counter == 1) {
      if ($.game_timer > movie_timer) {
        Camera.DoFade(500, 0 /* FADE_OUT */);
        movie_counter = 2;
      }
    }


    if (movie_counter == 2) {
      if (!(Camera.GetFadingStatus())) {
        Camera.SetFixedPosition(433.7975, -465.8116, 19.6369, 0.0, 0.0, 0.0); //HIGH UP SCENE SETTING SHOT AT POLICE STATION
        Camera.PointAtPoint(432.8138, -465.9370, 19.5081, 2 /* JUMP_CUT */);
        $.player1.setCoordinates(415.0560, -493.8982, 9.1245);
        movie_player.setCoordinates(395.8395, -473.9948, 11.3032);
        movie_player.setHeading(316.8160);
        Camera.DoFade(500, 1 /* FADE_IN */);
        movie_player.setObjGotoCoordOnFoot(397.2151, -472.0574);
        movie_cop.delete();
        movie_timer = $.game_timer + 1800;
        movie_counter = 3;
      }
    }


    if (movie_counter == 3) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(398.0080, -467.5676, 11.2081, 0.0, 0.0, 0.0); //UP AT PLAYER IN FRONT OF POLICE STATION
        Camera.PointAtPoint(397.8017, -468.4708, 11.5847, 2 /* JUMP_CUT */);
        movie_timer = $.game_timer + 500;
        movie_counter = 4;
      }
    }


    if (movie_counter == 4) {
      if ($.game_timer > movie_timer) {
        if (IS_CHAR_STOPPED(movie_player)) {
          movie_player.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 2000);
          movie_timer = $.game_timer + 2000;
          movie_counter = 5;
        }
      }
    }


    if (movie_counter == 5) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(412.9082, -470.9594, 11.9520, 0.0, 0.0, 0.0); //OVER PLAYERS CAR BONNET
        Camera.PointAtPoint(411.9218, -470.8722, 11.8129, 2 /* JUMP_CUT */);
        movie_player.setObjGotoCoordOnFoot(400.4298, -469.0890);
        movie_counter = 6;
      }
    }


    if (movie_counter == 6) {
      if (movie_player.locateOnFoot2D(400.4298, -469.0890, 1.0, 1.0, false)) {
        movie_player.setObjGotoCoordOnFoot(405.5740, -472.8026);
        Camera.SetFixedPosition(434.9879, -458.1398, 10.5767, 0.0, 0.0, 0.0); //THROUGH FOLLOWERS CAR
        Camera.PointAtPoint(434.0512, -458.4890, 10.5516, 2 /* JUMP_CUT */);
        //CHAR_LOOK_AT_CHAR_ALWAYS movie_car2_driver movie_player
        //CHAR_LOOK_AT_CHAR_ALWAYS movie_car2_passenger movie_player
        movie_counter = 7;
      }
    }


    if (movie_counter == 7) {
      if (movie_player.locateOnFoot2D(405.5740, -472.8026, 1.0, 1.0, false)) {
        movie_player.setObjEnterCarAsPassenger(movie_car1);
        movie_car2_passenger.lookAtCharAlways(movie_player);
        movie_timer = $.game_timer + 2000;
        movie_counter = 8;
      }
    }


    if (movie_counter == 8) {
      if ($.game_timer > movie_timer) {
        movie_car2_driver.lookAtCharAlways(movie_player);
        movie_timer = $.game_timer + 2000;
        movie_counter = 9;
      }
    }


    if (movie_counter == 9) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(440.0391, -453.9345, 11.4509, 0.0, 0.0, 0.0); //BACK BEHIND FOLLOWERS CAR
        Camera.PointAtPoint(439.4124, -454.7128, 11.4128, 2 /* JUMP_CUT */);
        movie_counter = 10;
      }
    }


    if (movie_counter == 10) {
      if (movie_player.isInAnyCar()) {
        movie_player.delete();
        movie_player = Char.CreateAsPassenger(movie_car1, 4 /* PEDTYPE_CIVMALE */, NULL, 0);
        movie_car1.gotoCoordinatesAccurate(423.0787, -485.6171, 9.1474);
        movie_car1.setCruiseSpeed(12.0);
        movie_counter = 11;
      }
    }


    if (movie_counter == 11) {
      if (movie_car1.locate2D(423.0787, -485.6171, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinatesAccurate(425.0385, -503.6205, 8.9777);
        movie_car2.gotoCoordinates(167.3340, -1281.8876, 9.2418);
        movie_counter = 12;
      }
    }


    if (movie_counter == 12) {
      if (movie_car1.locate2D(425.0385, -503.6205, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinates(167.3340, -1281.8876, 9.2418);
        movie_timer = $.game_timer + 2000;
        movie_counter = 13;
      }
    }


    if (movie_counter == 13) {
      if ($.game_timer > movie_timer) {
        Camera.DoFade(500, 0 /* FADE_OUT */);
        movie_counter = 14;
      }
    }


    if (movie_counter == 14) {
      if (!(Camera.GetFadingStatus())) {
        $.player1.setCoordinates(206.9016, -1074.7250, 9.3918);
        Streaming.LoadScene(199.0145, -1069.3364, 9.6091);
        movie_car1.setCoordinates(200.4294, -1053.1617, 9.2418);
        movie_car1.setHeading(166.4908);
        movie_car2.setCoordinates(202.9422, -1037.7394, 9.2418);
        movie_car2.setHeading(166.4316);
        Camera.SetFixedPosition(199.0145, -1069.3364, 9.6091, 0.0, 0.0, 0.0); //MIDDLE OF ROAD LOW
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_timer = $.game_timer;
        //PIZZA SHOP HERE
        movie_counter = 15;
      }
    }


    if (movie_counter == 15) {
      if ($.game_timer > movie_timer) {
        Camera.DoFade(500, 1 /* FADE_IN */);
        movie_car1.setDrivingStyle(2);
        movie_timer = $.game_timer + 5500;
        movie_counter = 16;
      }
    }


    if (movie_counter == 16) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(195.2658, -1096.1324, 22.4072, 0.0, 0.0, 0.0); //HIGH UP SHOT OF ROAD
        Camera.PointAtPoint(195.0012, -1097.0082, 22.0033, 2 /* JUMP_CUT */);
        Streaming.LoadScene(186.3302, -1127.5532, 9.2418);
        movie_counter = 17;
      }
    }


    if (movie_counter == 17) {
      if (movie_car1.locate2D(189.1301, -1103.4320, 3.0, 3.0, false)) {
        movie_car1.setCruiseSpeed(50.0);
        movie_counter = 18;
      }
    }


    if (movie_counter == 18) {
      if (movie_car1.locate2D(184.6017, -1124.3391, 3.0, 3.0, false)) {
        movie_car1.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 400);
        //SET_CAR_HANDBRAKE_TURN_RIGHT movie_car1 400
        movie_car1.gotoCoordinates(201.5269, -1132.7877, 9.3961);
        movie_counter = 19;
        movie_counter2 = 1;
      }
    }


    if (movie_counter2 == 1) {
      if (movie_car2.locate2D(184.6017, -1124.3391, 3.0, 3.0, false)) {
        movie_car2.setCruiseSpeed(50.0);
        movie_car2.gotoCoordinates(201.5269, -1132.7877, 9.3961);
        movie_counter2 = 2;
      }
    }


    if (movie_counter2 == 2) {
      if (movie_car2.locate2D(201.5269, -1132.7877, 3.0, 3.0, false)) {
        movie_car2.gotoCoordinates(223.0123, -1137.4708, 9.4234);
        movie_counter2 = 3;
      }
    }


    if (movie_counter2 == 3) {
      if (movie_car2.locate2D(223.0123, -1137.4708, 3.0, 3.0, false)) {
        movie_car2.gotoCoordinates(240.5568, -1140.8102, 9.8976);
        movie_counter2 = 4;
      }
    }


    if (movie_counter2 == 4) {
      if (movie_car2.locate2D(240.5568, -1140.8102, 3.0, 3.0, false)) {
        movie_car2.gotoCoordinates(265.5538, -1145.7645, 9.8615);
        movie_counter2 = 5;
      }
    }


    if (movie_counter2 == 5) {
      if (movie_car2.locate2D(265.5538, -1145.7645, 3.0, 3.0, false)) {
        movie_car2.gotoCoordinates(297.6341, -1004.0583, 9.8615);
        movie_counter2 = 6;
      }
    }


    if (movie_counter == 19) {
      if (movie_car1.locate2D(201.5269, -1132.7877, 3.0, 3.0, false)) {
        Camera.SetFixedPosition(228.1009, -1131.6427, 10.6909, 0.0, 0.0, 0.0); //IN ALLEY
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_car1.gotoCoordinates(223.0123, -1137.4708, 9.4234);
        movie_counter = 20;
      }
    }


    if (movie_counter == 20) {
      if (movie_car1.locate2D(223.0123, -1137.4708, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinates(240.5568, -1140.8102, 9.8976);
        movie_counter = 21;
      }
    }


    if (movie_counter == 21) {
      if (movie_car1.locate2D(240.5568, -1140.8102, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinates(265.5538, -1145.7645, 9.8615);
        movie_counter = 22;
      }
    }


    if (movie_counter == 22) {
      if (movie_car1.locate2D(265.5538, -1145.7645, 3.0, 3.0, false)) {
        movie_car1.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 250);
        //SET_CAR_HANDBRAKE_TURN_RIGHT movie_car1 250
        movie_car1.gotoCoordinates(297.6341, -1004.0583, 9.8615);
        movie_timer = $.game_timer + 500;
        movie_counter = 23;
      }
    }


    if (movie_counter == 23) {
      if ($.game_timer > movie_timer) {
        Camera.PointAtCar(movie_car2, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_counter = 24;
      }
    }


    if (movie_counter == 24) {
      if (movie_counter2 == 6) {
        Camera.DoFade(500, 0 /* FADE_OUT */);
        movie_counter = 25;
      }
    }


    if (movie_counter == 25) {
      if (!(Camera.GetFadingStatus())) {
        Camera.SetFixedPosition(417.6970, 85.3492, 11.9908, 0.0, 0.0, 0.0); //IN PIZZA SHOP
        Camera.PointAtPoint(418.4539, 85.9975, 11.9088, 2 /* JUMP_CUT */);
        $.player1.setCoordinates(425.0735, 96.8492, 10.3588);
        Streaming.LoadScene(452.8855, 91.3795, 9.8736);
        movie_car1.setCoordinates(398.6962, 159.8536, 9.8616);
        movie_car1.setHeading(198.3470);
        movie_car2.setCoordinates(397.0435, 171.9857, 9.8616);
        movie_car2.setHeading(182.8275);
        movie_car1.gotoCoordinatesAccurate(510.9139, -82.3355, 9.4241); //496.9194 -101.1175 9.5295
        movie_car2.gotoCoordinatesAccurate(510.4948, -74.0066, 9.4967); //496.9194 -101.1175 9.5295
        movie_car1.setDrivingStyle(2);
        movie_car2.setDrivingStyle(2);
        movie_car1.setCruiseSpeed(50.0);
        movie_car2.setCruiseSpeed(50.0);
        movie_shopper1 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 420.1246, 90.2250, 10.2499);
        movie_shopper1.setHeading(207.3158);
        movie_shopper2 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 421.3222, 88.2824, 10.3766);
        movie_shopper2.setHeading(63.0121);
        movie_shopper3 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 422.9127, 87.0644, 10.3521);
        movie_shopper3.setHeading(77.3265);
        movie_shopper4 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 430.2144, 81.2067, 10.1969);
        movie_shopper4.setHeading(355.5790);
        Game.SetCharsChatting(movie_shopper1, movie_shopper2, 3200);
        Camera.DoFade(500, 1 /* FADE_IN */);
        movie_timer = $.game_timer + 3300;
        movie_counter = 26;
        movie_counter2 = 7;
      }
    }


    if (movie_counter == 26) {
      if ($.game_timer > movie_timer) {
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 1 /* INTERPOLATION */);
        if (!(Char.IsDead(movie_shopper1))) {
          movie_shopper1.lookAtCharAlways(movie_player);
        }
        if (!(Char.IsDead(movie_shopper2))) {
          movie_shopper2.lookAtCharAlways(movie_player);
        }
        if (!(Char.IsDead(movie_shopper3))) {
          movie_shopper3.lookAtCharAlways(movie_player);
        }
        if (!(Char.IsDead(movie_shopper4))) {
          movie_shopper4.lookAtCharAlways(movie_player);
        }
        movie_counter = 27;
      }
    }


    if (movie_counter == 27) {
      if (movie_car1.locate2D(446.4955, 83.0253, 3.0, 3.0, false)) {
        movie_car1.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 300);
        //SET_CAR_HANDBRAKE_TURN_RIGHT movie_car1 300
        movie_timer = $.game_timer + 2000;
        movie_counter = 28;
      }
    }


    if (movie_counter2 == 7) {
      if (movie_car2.locate2D(446.4955, 83.0253, 3.0, 3.0, false)) {
        movie_car2.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 300);
        //SET_CAR_HANDBRAKE_TURN_RIGHT movie_car2 300
        movie_counter2 = 8;
      }
    }


    if (movie_counter == 28) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(502.4712, 108.9173, 12.7109, 0.0, 0.0, 0.0); //AT CORNER
        Camera.PointAtPoint(501.7713, 108.2058, 12.6488, 2 /* JUMP_CUT */);
        movie_shopper1.delete();
        movie_shopper2.delete();
        movie_shopper3.delete();
        movie_shopper4.delete();
        movie_counter = 29;
      }
    }


    if (movie_counter == 29) {
      if (movie_car1.locate2D(487.0447, 94.3898, 4.0, 4.0, false)) {
        movie_car1.setTempAction(4 /* TEMPACT_HANDBRAKETURNRIGHT */, 300);
        //SET_CAR_HANDBRAKE_TURN_LEFT movie_car1 300
        movie_timer = $.game_timer + 2000;
        movie_counter = 30;
      }
    }


    if (movie_counter2 == 8) {
      if (movie_car2.locate2D(470.5926, 93.6275, 3.0, 3.0, false)) {
        movie_car2.setTempAction(4 /* TEMPACT_HANDBRAKETURNRIGHT */, 300);
        //SET_CAR_HANDBRAKE_TURN_LEFT movie_car2 300
        movie_counter2 = 9;
      }
    }


    if (movie_counter == 30) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(476.1554, 22.6055, 36.9843, 0.0, 0.0, 0.0); //FROM PENTHOUSE
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_timer = $.game_timer + 2300;
        movie_counter = 31;
      }
    }


    if (movie_counter == 31) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(532.8522, -87.4967, 12.6269, 0.0, 0.0, 0.0); //FRONT OF CLUB
        Camera.PointAtPoint(531.8540, -87.5545, 12.6077, 2 /* JUMP_CUT */);
        $.player1.setCoordinates(471.0432, -84.1013, 10.4438);
        Camera.DoFade(0, 0 /* FADE_OUT */);
        Streaming.LoadScene(498.8900, -82.0271, 8.9903);
        Camera.DoFade(0, 1 /* FADE_IN */);
        movie_counter2 = 10;
        movie_counter = 32;
      }
    }


    if (movie_counter == 32) {
      if (movie_car1.locate2D(510.9139, -80.3355, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinatesAccurate(520.9139, -80.3355, 9.5);
        movie_timer = $.game_timer + 250;
        movie_counter = 33;
      }
    }


    if (movie_counter == 33) {
      if ($.game_timer > movie_timer) {
        movie_car1.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 5000);
        //SET_CAR_HANDBRAKE_TURN_RIGHT movie_car1 5000
        movie_counter = 34;
      }
    }


    if (movie_counter2 == 10) {
      if (movie_car2.locate2D(510.4948, -72.0066, 3.0, 3.0, false)) {
        movie_car2.gotoCoordinatesAccurate(520.9139, -72.0066, 9.5);
        movie_timer2 = $.game_timer + 150;
        movie_counter2 = 11;
      }
    }


    if (movie_counter2 == 11) {
      if ($.game_timer > movie_timer2) {
        movie_car2.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 5000);
        //SET_CAR_HANDBRAKE_TURN_RIGHT movie_car2 5000
        movie_counter2 = 12;
      }
    }


    if (movie_counter == 34) {
      if (movie_car1.isStopped()) {
        movie_player.setObjRunToCoord(501.5616, -82.9503);
        movie_club_manager = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 466.3348, -58.5777, 14.6633);
        movie_club_manager.setHeading(245.9955);
        movie_barman = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 467.8509, -53.6819, 10.4431);
        movie_barman.setHeading(221.5119);
        movie_barman.lookAtCharAlways(movie_player);
        movie_drinker1 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 468.9094, -54.9209, 10.4431);
        movie_drinker1.setHeading(42.7760);
        movie_drinker2 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 470.0663, -53.5861, 10.4431);
        movie_drinker2.setHeading(101.4189);
        movie_drinker3 = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 466.6759, -57.1055, 10.4431);
        movie_drinker2.setHeading(222.7760);
        movie_player.giveWeapon(19 /* WEAPONTYPE_SHOTGUN */, 9999);
        movie_car1.setIdle();
        movie_counter = 35;
      }
    }


    if (movie_counter > 34) {
      if (movie_counter < 46) {
        if (Char.IsDead(movie_club_manager)) {
          // SCM GOTO → mission_XXXX_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_XXXX_failed"); // fallback: would break linear control flow
        }
      }
      //	IF IS_CHAR_DEAD	movie_barman
      //		GOTO mission_XXXX_failed
      //	ENDIF
      //	IF IS_CHAR_DEAD	movie_drinker1
      //		GOTO mission_XXXX_failed
      //	ENDIF
      //	IF IS_CHAR_DEAD	movie_drinker2
      //		GOTO mission_XXXX_failed
      //	ENDIF
      //	IF IS_CHAR_DEAD	movie_drinker3
      //		GOTO mission_XXXX_failed
      //	ENDIF

    }


    if (movie_counter == 35) {
      if (movie_player.locateOnFoot2D(501.5616, -82.9503, 1.0, 1.0, false)) {
        movie_player.setObjRunToCoord(486.6614, -73.9622);
        Camera.SetFixedPosition(463.5040, -54.8264, 16.8099, 0.0, 0.0, 0.0); //OVER SHOLDER
        Camera.PointAtPoint(464.3841, -55.2169, 16.5396, 2 /* JUMP_CUT */);
        movie_counter = 36;
      }
    }


    if (movie_counter == 36) {
      if (movie_player.locateOnFoot2D(486.6614, -73.9622, 1.0, 1.0, false)) {
        movie_player.setObjRunToCoord(467.2191, -58.0957);
        movie_timer = $.game_timer + 2000;
        movie_counter = 37;
      }
    }


    if (movie_counter == 37) {
      if ($.game_timer > movie_timer) {
        movie_player.setCoordinates(481.4690, -68.8889, 8.9430);
        Camera.SetFixedPosition(485.0654, -64.3929, 10.1884, 0.0, 0.0, 0.0); //UP AT MANAGER
        Camera.PointAtPoint(484.1102, -64.1311, 10.3265, 2 /* JUMP_CUT */);
        movie_counter = 38;
      }
    }



    if (movie_counter == 38) {
      if (movie_player.locateOnFoot2D(467.2191, -58.0957, 1.0, 1.0, false)) {
        movie_player.setObjRunToCoord(464.8464, -59.8506);
        movie_counter = 39;
      }
    }


    if (movie_counter == 39) {
      if (movie_player.locateOnFoot2D(464.8464, -59.8506, 1.0, 1.0, false)) {
        movie_player.setObjRunToCoord(457.8582, -52.0823);
        movie_counter = 40;
      }
    }


    if (movie_counter == 40) {
      if (movie_player.locateOnFoot2D(457.8582, -52.0823, 1.0, 1.0, false)) {
        movie_player.setObjRunToCoord(454.1453, -55.6716);
        movie_counter = 41;
      }
    }


    if (movie_counter == 41) {
      if (movie_player.locateOnFoot2D(454.1453, -55.6716, 1.0, 1.0, false)) {
        movie_player.setObjRunToCoord(457.6962, -59.2783);
        movie_counter = 42;
      }
    }


    if (movie_counter == 42) {
      if (movie_player.locateOnFoot2D(457.6962, -59.2783, 1.0, 1.0, false)) {
        movie_player.setObjRunToCoord(462.2478, -54.9318);
        Camera.SetFixedPosition(471.5735, -56.0797, 16.2224, 0.0, 0.0, 0.0); //IN MANAGERS ROOM
        Camera.PointAtPoint(470.5805, -56.1331, 16.1171, 2 /* JUMP_CUT */);
        movie_counter = 43;
      }
    }


    if (movie_counter == 43) {
      movie_club_manager.turnToFaceChar(movie_player);
      if (movie_player.locateStoppedOnFoot2D(462.2478, -54.9318, 1.0, 1.0, false)) {
        movie_player.setStayInSamePlace(true /* TRUE */);
        movie_player.turnToFaceChar(movie_club_manager);
        movie_timer = $.game_timer + 800;
        movie_counter = 44;
      }
    }


    if (movie_counter == 44) {
      if ($.game_timer > movie_timer) {
        movie_club_manager.setWaitState(17 /* WAITSTATE_PLAYANIM_HANDSUP */, 2000);
        movie_timer = $.game_timer + 1500;
        movie_counter = 45;
      }
    }


    if (movie_counter == 45) {
      if ($.game_timer > movie_timer) {
        movie_player.setObjKillCharOnFoot(movie_club_manager);
        movie_timer = $.game_timer + 600;
        movie_counter = 46;
      }
    }


    if (movie_counter == 46) {
      if ($.game_timer > movie_timer) {
        movie_player.setObjRunToCoord(457.6962, -59.2783);
        movie_counter = 47;
      }
    }


    if (movie_counter == 47) {
      if (movie_player.locateOnFoot2D(457.6962, -59.2783, 1.0, 1.0, false)) {
        movie_player.setCoordinates(458.6772, -51.7050, 10.45);
        movie_player.setObjRunToCoord(464.8543, -59.6144);
        Camera.SetFixedPosition(467.5534, -64.1758, 10.3380, 0.0, 0.0, 0.0); //AT PLAYER SHOOTING FROM LOW DOWN
        Camera.PointAtPoint(467.3854, -63.2178, 10.5704, 2 /* JUMP_CUT */);
        movie_player.giveWeapon(26 /* WEAPONTYPE_M4 */, 9999);
        movie_counter = 48;
      }
    }


    if (movie_counter == 48) {
      if (movie_player.locateOnFoot2D(464.8543, -59.6144, 1.0, 1.0, false)) {
        movie_player.setCoordinates(464.8543, -59.6144, 10.45);
        movie_player.setIdle();
        movie_player.setObjNoObj();
        movie_player.setStayInSamePlace(true /* TRUE */);
        movie_player.setObjKillCharOnFoot(movie_car2_driver);
        movie_car2_driver.setCoordinates(487.5853, -72.1326, 10.4431);
        movie_player.setHealth(999);
        movie_car2_driver.setHealth(9999);
        movie_car2_driver.setStayInSamePlace(true /* TRUE */);
        movie_car2_driver.setObjKillCharOnFoot(movie_player);
        movie_car2_passenger.setStayInSamePlace(true /* TRUE */);
        movie_car2_passenger.setObjKillCharOnFoot(movie_player);
        movie_timer = $.game_timer + 1500;
        movie_counter = 49;
      }
    }


    if (movie_counter == 49) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(488.9160, -73.8545, 11.3968, 0.0, 0.0, 0.0); //BEHIND BAD DUDES
        Camera.PointAtPoint(488.0700, -73.3232, 11.3518, 2 /* JUMP_CUT */);
        movie_car1.setCoordinates(493.6040, -94.0816, 9.3432);
        movie_car1.setHeading(87.8408);
        if (!(Char.IsDead(movie_car2_driver))) {
          movie_car2_driver.setHealth(20);
        }
        movie_counter = 50;
      }
    }


    if (movie_counter == 50) {
      if (Char.IsDead(movie_car2_driver)) {
        movie_player.setObjKillCharOnFoot(movie_car2_passenger);
        movie_counter = 51;
      }
    }


    if (movie_counter2 == 12) {
      if (movie_car2.isStopped()) {
        movie_car2_driver.setObjRunToCoord(501.3533, -79.8217);
        movie_car2_passenger.setObjRunToCoord(501.3533, -79.8217);
        movie_car2_driver.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
        movie_car2_passenger.giveWeapon(23 /* WEAPONTYPE_UZI */, 9999);
        movie_car2.setIdle();
        movie_counter2 = 13;
        movie_counter3 = 1;
      }
    }


    if (movie_counter2 == 13) {
      if (movie_car2_driver.locateOnFoot2D(501.3533, -79.8217, 1.0, 1.0, false)) {
        movie_car2_driver.setObjRunToCoord(493.8939, -78.4198);
        movie_counter2 = 14;
      }
    }


    if (movie_counter2 == 14) {
      if (movie_car2_driver.locateOnFoot2D(493.8939, -78.4198, 1.0, 1.0, false)) {
        movie_car2_driver.setObjRunToCoord(488.3700, -71.6619);
        movie_counter2 = 15;
      }
    }


    if (movie_counter3 == 1) {
      if (movie_car2_passenger.locateOnFoot2D(501.3533, -79.8217, 1.0, 1.0, false)) {
        movie_car2_passenger.setObjRunToCoord(493.8939, -78.4198);
        movie_counter3 = 2;
      }
    }


    if (movie_counter3 == 2) {
      if (movie_car2_passenger.locateOnFoot2D(493.8939, -78.4198, 1.0, 1.0, false)) {
        movie_car2_passenger.setObjRunToCoord(481.7643, -73.7486);
        movie_counter3 = 3;
      }
    }


    if (movie_counter == 51) {
      if (Char.IsDead(movie_car2_passenger)) {
        if (!(Char.IsDead(movie_barman))) {
          movie_player.setObjKillCharOnFoot(movie_barman);
        }
        movie_timer = $.game_timer + 1500;
        movie_counter = 52;
      }
    }


    if (movie_counter == 52) {
      if ($.game_timer > movie_timer) {
        movie_player.setCoordinates(484.6963, -69.5012, 9.4430);
        Camera.SetFixedPosition(497.3029, -101.1990, 12.0689, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(497.0254, -100.2479, 11.9335, 2 /* JUMP_CUT */);
        movie_player.setObjRunToCoord(492.5949, -88.6765);
        movie_counter = 53;
      }
    }


    if (movie_counter == 53) {
      if (movie_player.locateOnFoot2D(492.5949, -88.6765, 1.0, 1.0, false)) {
        movie_player.setObjEnterCarAsPassenger(movie_car1);
        movie_counter = 54;
      }
    }


    if (movie_counter == 54) {
      if (movie_player.isInAnyCar()) {
        movie_car1.gotoCoordinates(440.6581, -403.6276, 9.3850);
        movie_car1.setCruiseSpeed(100.0);
        movie_car1.setDrivingStyle(3);
        movie_timer = $.game_timer + 1000;
        movie_counter = 55;
      }
    }


    if (movie_counter == 55) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(470.9526, -138.9579, 10.0, 0.0, 0.0, 0.0);
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_car2.delete();
        copscar1 = Car.Create(POLICE, 501.2257, -100.2508, 9.5295);
        copscar1.setHeading(90.1727);
        copscar2 = Car.Create(POLICE, 510.5414, -99.9129, 9.5221);
        copscar2.setHeading(114.2435);
        copscar1.setCruiseSpeed(100.0);
        copscar2.setCruiseSpeed(100.0);
        copscar1.setDrivingStyle(2);
        copscar2.setDrivingStyle(2);
        copscar1.gotoCoordinates(440.6581, -403.6276, 9.3850);
        copscar2.gotoCoordinates(440.6581, -403.6276, 9.3850);
        copscar1.switchSiren(true /* ON */);
        copscar2.switchSiren(true /* ON */);
        movie_cop = Char.CreateInsideCar(copscar1, 4 /* PEDTYPE_CIVMALE */, COP);
        movie_cop2 = Char.CreateInsideCar(copscar2, 4 /* PEDTYPE_CIVMALE */, COP);
        movie_car2 = Car.Create(SENTINEL, 453.5575, -338.9098, 9.5);
        Camera.SetGenerateCarsAround(false /* FALSE */);
        World.SetVisibilityOfClosestObjectOfType(460.562, -379.384, 10.63, 1.0, newramp, false /* FALSE */);
        $.barrel_1 = ScriptObject.Create(barrel1, 459.7787, -379.0, 9.5);
        $.barrel_2 = ScriptObject.Create(barrel1, 459.7787, -377.0, 9.5);
        $.barrel_3 = ScriptObject.Create(barrel1, 459.7787, -376.0, 9.5);
        $.barrel_4 = ScriptObject.Create(barrel1, 461.7787, -379.0, 9.5);
        barrel_5 = ScriptObject.Create(barrel1, 461.7787, -377.0, 9.5);
        barrel_6 = ScriptObject.Create(barrel1, 461.7787, -376.0, 9.5);
        $.barrel_1.setCollision(false /* FALSE */);
        $.barrel_2.setCollision(false /* FALSE */);
        $.barrel_3.setCollision(false /* FALSE */);
        $.barrel_4.setCollision(false /* FALSE */);
        barrel_5.setCollision(false /* FALSE */);
        barrel_6.setCollision(false /* FALSE */);
        movie_timer = $.game_timer + 3000;
        movie_counter = 56;
      }
    }


    if (movie_counter == 56) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(487.0211, -251.7067, 16.3674, 0.0, 0.0, 0.0);
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_timer = $.game_timer + 3000;
        movie_counter = 57;
      }
    }


    if (movie_counter == 57) {
      if ($.game_timer > movie_timer) {
        Camera.SetFixedPosition(444.8286, -352.6365, 11.7309, 0.0, 0.0, 0.0);
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_timer = $.game_timer + 3000;
        movie_counter = 58;
      }
    }


    if (movie_counter == 58) {
      if (movie_car1.locate2D(457.3652, -320.4637, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinatesAccurate(458.5753, -339.3495, 9.2);
        movie_counter = 59;
      }
    }


    if (movie_counter == 59) {
      if (movie_car1.locate2D(458.5753, -339.3495, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinatesAccurate(459.7853, -358.2354, 9.2);
        movie_counter = 60;
      }
    }


    if (movie_counter == 60) {
      if (movie_car1.locate2D(459.7853, -358.2354, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinatesAccurate(460.9953, -377.1213, 9.2);
        Camera.SetFixedPosition(439.8378, -386.9468, 10.1505, 0.0, 0.0, 0.0);
        Camera.PointAtCar(movie_car1, 15 /* FIXED */, 2 /* JUMP_CUT */);
        movie_counter2 = 90;
        movie_counter = 61;
      }
    }


    if (movie_counter == 61) {
      if (movie_car1.locate2D(460.9953, -377.1213, 3.0, 3.0, false)) {
        movie_car1.gotoCoordinatesAccurate(462.2053, -396.0072, 9.2);
        movie_counter = 62;
      }
    }


    if (movie_counter2 == 90) {
      if (movie_car1.locate2D(460.9953, -377.1213, 2.0, 2.0, false)) {
        $.barrel_1.setCollision(true /* TRUE */);
        $.barrel_2.setCollision(true /* TRUE */);
        $.barrel_3.setCollision(true /* TRUE */);
        $.barrel_4.setCollision(true /* TRUE */);
        barrel_5.setCollision(true /* TRUE */);
        barrel_6.setCollision(true /* TRUE */);
        Fx.AddExplosion(462.2737, -376.2148, 9.3957, 0 /* EXPLOSION_GRENADE */);
        Fx.AddExplosion(462.0712, -377.1941, 9.4086, 0 /* EXPLOSION_GRENADE */);
        Fx.AddExplosion(461.9546, -377.7579, 9.5774, 0 /* EXPLOSION_GRENADE */);
        movie_counter = 63;
        movie_counter2 = 91;
      }
    }

    //IF IS_CAR_DEAD movie_car1
    //	GOTO the_end
    //ENDIF


  }
}


//the_end:


// Mission XXXX 1 failed


async function onFailed() {

}




// mission XXXX 1 passed


async function mission_XXXX_passed() {

}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;


  Mission.Finish();
}

export async function moviedemo() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_XXXX


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_XXXX_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_XXXX



  // Variables for mission


  // VAR_INT movie_player movie_cop movie_car1 movie_car1_driver movie_counter movie_timer movie_car2 movie_car2_driver movie_car2_passenger
  // VAR_INT movie_counter2 movie_shopper1 movie_shopper2 movie_shopper3 movie_shopper4 movie_counter3 movie_club_manager movie_timer2
  // VAR_INT movie_barman movie_drinker1 movie_drinker2 movie_drinker3 copscar1 copscar2 movie_cop2 progressvalue_int
  // VAR_INT barrel_1 barrel_2 barrel_3 barrel_4 barrel_5 barrel_6


  // VAR_FLOAT progressvalue

  // ****************************************Mission Start************************************


}
