// Generated from main/mm.sc

import { $ } from "../vars.mts";

async function mission_start_mm() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  if ($.mm_mission_passed_once == 0) {
    Stat.RegisterMissionGiven();
  }
  Clock.SetTimeOfDay(10, 0);
  //forcing weather to be nice

  Weather.ForceNow(WEATHER_EXTRA_SUNNY);
  Game.SetIsInStadium(true /* TRUE */);
  $.player1.setFreeHealthCare(true /* TRUE */);
  await asyncWait(0);
  Text.LoadMissionText("MM");
  // *****************************************Set Flags/variables************************************

  $.random_garage = 0;
  $.cars_created = 16;
  $.mm_cars_killed = 0;


  if ($.mm_attempt == 0) {
    $.mm_best_time = 1;
    $.mm_longest_time = 60;
    $.time_to_beat = 60000;
  }
  $.mm_countdown = 30000;
  $.mm_car_health = 0;
  $.mm_car_health_divided = 0;
  $.where_is_player = 0;
  $.zero_where_player = 0;
  $.zero1 = 0;
  $.zero2 = 0;
  $.zero3 = 0;
  $.zero4 = 0;
  $.letting_cars_do_stuff = 0;


  $.mm_audio_flag = 0;
  $.mm_sound1 = 0;
  $.mm_sound_playing = 0;
  $.mm_cuntie = 0;
  $.mm_adding_health = 0;


  $.random_car_node_x = 0.0;
  $.random_car_node_y = 0.0;
  $.random_car_node_z = 0.0;
  $.mm_car_heading = 0.0;
  $.player_x = 0.0;
  $.player_y = 0.0;
  $.player_z = 0.0;


  $.plyr_rndx = 0.0;
  $.plyr_rndy = 0.0;
  $.plyr_rndz = 0.0;


  if (ONMISSION == 0) {
    $.plyr_checkpoint_blip = Blip.AddForCoord($.plyr_rndx, $.plyr_rndy, $.plyr_rndz);
  }
  //------------------REQUEST_MODELS ------------------------------

  Streaming.RequestModel(bloodrb);
  Streaming.RequestModel(bloodra);
  Streaming.RequestModel(WMYCR);


  while (!(Streaming.HasModelLoaded(bloodrb)) || !(Streaming.HasModelLoaded(bloodra)) || !(Streaming.HasModelLoaded(WMYCR))) {
    await asyncWait(0);
  }


  Restart.OverrideNext(-1102.4, 1331.2, 19.0, 271.2);

  //getting player into destruction derby

  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  $.player1.clearWantedLevel();


  Streaming.SetAreaVisible(VIS_BLOOD);
  World.SwitchRubbish(false /* OFF */);
  World.SetCarDensityMultiplier(0.0);
  World.SetPedDensityMultiplier(0.0);
  $.player1.shutUp(true /* TRUE */);


  Streaming.LoadScene(-1379.3, 1000.0, 251.5);

  //LOAD_SCENE -1280.960 994.86 261.8

  if ($.player1.isInAnyCar()) {
    $.player1.warpFromCarToCoord(-1280.960, 994.86, 261.8);
  }
  else {
    $.player1.setCoordinates(-1280.960, 994.86, 261.8);
  }


  $.mmplayer_car = Car.Create(bloodra, -1280.960, 994.86, 261.8);
  $.mmplayer_car.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  $.player1.warpIntoCar($.mmplayer_car);
  $.mmplayer_car.setStrong(true /* TRUE */);
  $.mmplayer_car.setHeading(90.0);
  $.player1.setHeading(80.0);
  World.SetExtraColors(10, false /* FALSE */);
  $.mmplayer_car.setUpsidedownNotDamaged(true /* TRUE */);
  $.mmplayer_car.setHealth(1249);


  $.random_car_node_x = -1285.77;
  $.random_car_node_y = 1014.54;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 104.4;
  $.mm_car1 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car1.setHeading($.mm_car_heading);
  $.mm_car1.setStraightLineDistance(255);
  $.mm_driver1 = Char.CreateInsideCar($.mm_car1, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver1.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car1 TRUE

  StuckCarCheck.Add($.mm_car1, 1.5, 4000);
  $.mm_car1.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car1.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car1 750


  $.random_car_node_x = -1299.50;
  $.random_car_node_y = 1030.74;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 132.6;
  $.mm_car2 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car2.setHeading($.mm_car_heading);
  $.mm_car2.setStraightLineDistance(255);
  $.mm_driver2 = Char.CreateInsideCar($.mm_car2, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver2.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car2 TRUE

  StuckCarCheck.Add($.mm_car2, 1.5, 4000);
  $.mm_car2.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car2.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
  $.mm_car2.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car2 750


  $.random_car_node_x = -1319.30;
  $.random_car_node_y = 1042.82;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 135.4;
  $.mm_car3 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car3.setHeading($.mm_car_heading);
  $.mm_car3.setStraightLineDistance(255);
  $.mm_driver3 = Char.CreateInsideCar($.mm_car3, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver3.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car3 TRUE

  StuckCarCheck.Add($.mm_car3, 1.5, 4000);
  $.mm_car3.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car3.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car3 750


  $.random_car_node_x = -1349.33;
  $.random_car_node_y = 1054.47;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 155.4;
  $.mm_car4 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car4.setHeading($.mm_car_heading);
  $.mm_car4.setStraightLineDistance(255);
  $.mm_driver4 = Char.CreateInsideCar($.mm_car4, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver4.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car4 TRUE

  StuckCarCheck.Add($.mm_car4, 1.5, 4000);
  $.mm_car4.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car4.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car4 750


  $.random_car_node_x = -1384.33;
  $.random_car_node_y = 1058.55;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 173.2;
  $.mm_car5 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car5.setHeading($.mm_car_heading);
  $.mm_car5.setStraightLineDistance(255);
  $.mm_driver5 = Char.CreateInsideCar($.mm_car5, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver5.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car5 TRUE

  StuckCarCheck.Add($.mm_car5, 1.5, 4000);
  $.mm_car5.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car5.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car5 750


  $.random_car_node_x = -1293.77;
  $.random_car_node_y = 958.96;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 60.5;
  $.mm_car6 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car6.setHeading($.mm_car_heading);
  $.mm_car6.setStraightLineDistance(255);
  $.mm_driver6 = Char.CreateInsideCar($.mm_car6, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver6.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car6 TRUE

  StuckCarCheck.Add($.mm_car6, 1.5, 4000);
  $.mm_car6.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car6.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
  $.mm_car6.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car6 750


  $.random_car_node_x = -1418.77;
  $.random_car_node_y = 1057.54;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 180.4;
  $.mm_car7 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car7.setHeading($.mm_car_heading);
  $.mm_car7.setStraightLineDistance(255);
  $.mm_driver7 = Char.CreateInsideCar($.mm_car7, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver7.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car7 TRUE

  StuckCarCheck.Add($.mm_car7, 1.5, 4000);
  $.mm_car7.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car7.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car7 750


  $.random_car_node_x = -1460.3;
  $.random_car_node_y = 1050.3;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 242.9;
  $.mm_car8 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car8.setHeading($.mm_car_heading);
  $.mm_car8.setStraightLineDistance(255);
  $.mm_driver8 = Char.CreateInsideCar($.mm_car8, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver8.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car8 TRUE

  StuckCarCheck.Add($.mm_car8, 1.5, 4000);
  $.mm_car8.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car8.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car8 750


  $.random_car_node_x = -1499.77;
  $.random_car_node_y = 1029.54;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 242.4;
  $.mm_car9 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car9.setHeading($.mm_car_heading);
  $.mm_car9.setStraightLineDistance(255);
  $.mm_driver9 = Char.CreateInsideCar($.mm_car9, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver9.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car9 TRUE

  StuckCarCheck.Add($.mm_car9, 1.5, 4000);
  $.mm_car9.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car9.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car9 750


  $.random_car_node_x = -1513.77;
  $.random_car_node_y = 986.54;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 271.4;
  $.mm_car10 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car10.setHeading($.mm_car_heading);
  $.mm_car10.setStraightLineDistance(255);
  $.mm_driver10 = Char.CreateInsideCar($.mm_car10, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver10.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car10 TRUE

  StuckCarCheck.Add($.mm_car10, 1.5, 4000);
  $.mm_car10.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car10.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car10 750


  $.random_car_node_x = -1496.77;
  $.random_car_node_y = 959.54;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 293.4;
  $.mm_car11 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car11.setHeading($.mm_car_heading);
  $.mm_car11.setStraightLineDistance(255);
  $.mm_driver11 = Char.CreateInsideCar($.mm_car11, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver11.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car11 TRUE

  StuckCarCheck.Add($.mm_car11, 1.5, 4000);
  $.mm_car11.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car11.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car11 750


  $.random_car_node_x = -1461.84;
  $.random_car_node_y = 938.32;
  $.random_car_node_z = 261.0;
  $.mm_car_heading = 345.6;
  $.mm_car12 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car12.setHeading($.mm_car_heading);
  $.mm_car12.setStraightLineDistance(255);
  $.mm_driver12 = Char.CreateInsideCar($.mm_car12, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver12.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car12 TRUE

  StuckCarCheck.Add($.mm_car12, 1.5, 4000);
  $.mm_car12.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car12.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car12 750


  $.random_car_node_x = -1424.36;
  $.random_car_node_y = 931.29;
  $.random_car_node_z = 261.0;
  $.mm_car_heading = 0.0;
  $.mm_car13 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car13.setHeading($.mm_car_heading);
  $.mm_car13.setStraightLineDistance(255);
  $.mm_driver13 = Char.CreateInsideCar($.mm_car13, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver13.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car13 TRUE

  StuckCarCheck.Add($.mm_car13, 1.5, 4000);
  $.mm_car13.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car13.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car13 750


  $.random_car_node_x = -1363.77;
  $.random_car_node_y = 932.44;
  $.random_car_node_z = 261.0;
  $.mm_car_heading = 17.85;
  $.mm_car14 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car14.setHeading($.mm_car_heading);
  $.mm_car14.setStraightLineDistance(255);
  $.mm_driver14 = Char.CreateInsideCar($.mm_car14, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver14.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car14 TRUE

  StuckCarCheck.Add($.mm_car14, 1.5, 4000);
  $.mm_car14.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car14.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car14 750


  $.random_car_node_x = -1332.77;
  $.random_car_node_y = 940.30;
  $.random_car_node_z = 263.0;
  $.mm_car_heading = 39.98;
  $.mm_car15 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car15.setHeading($.mm_car_heading);
  $.mm_car15.setStraightLineDistance(255);
  $.mm_driver15 = Char.CreateInsideCar($.mm_car15, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver15.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car15 TRUE

  StuckCarCheck.Add($.mm_car15, 1.5, 4000);
  $.mm_car15.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car15.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car15 750


  $.random_car_node_x = -1443.29;
  $.random_car_node_y = 933.86;
  $.random_car_node_z = 261.0;
  $.mm_car_heading = 351.4;
  $.mm_car16 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
  $.mm_car16.setHeading($.mm_car_heading);
  $.mm_car16.setStraightLineDistance(255);
  $.mm_driver16 = Char.CreateInsideCar($.mm_car16, 4 /* PEDTYPE_CIVMALE */, WMYCR);
  $.mm_driver16.shutUp(true /* TRUE */);
  //SET_CAR_ONLY_DAMAGED_BY_PLAYER mm_car16 TRUE

  StuckCarCheck.Add($.mm_car16, 1.5, 4000);
  $.mm_car16.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
  $.mm_car16.setUpsidedownNotDamaged(true /* TRUE */);
  //SET_CAR_HEALTH mm_car16 750


  $.mm_car1.setCruiseSpeed(0.0);
  $.mm_car2.setCruiseSpeed(0.0);
  $.mm_car3.setCruiseSpeed(0.0);
  $.mm_car4.setCruiseSpeed(0.0);
  $.mm_car5.setCruiseSpeed(0.0);
  $.mm_car6.setCruiseSpeed(0.0);
  $.mm_car7.setCruiseSpeed(0.0);
  $.mm_car8.setCruiseSpeed(0.0);
  $.mm_car9.setCruiseSpeed(0.0);
  $.mm_car10.setCruiseSpeed(0.0);
  $.mm_car11.setCruiseSpeed(0.0);
  $.mm_car12.setCruiseSpeed(0.0);
  $.mm_car13.setCruiseSpeed(0.0);
  $.mm_car14.setCruiseSpeed(0.0);
  $.mm_car15.setCruiseSpeed(0.0);
  $.mm_car16.setCruiseSpeed(0.0);

  // ******************************************START OF Demolition Derby*******************************************

  Hud.SwitchWidescreen(true /* ON */);


  Camera.SetFixedPosition(-1266.5, 1042.8, 278.3, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1339.9, 1009.8, 252.0, 2 /* JUMP_CUT */);


  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  if ($.player1.isPlaying()) {
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  }
  TIMERA = 0;


  Text.PrintNow("BLOD_01", 5000, 1); //Drive through the checkpoints to increase your overall time.


  while (TIMERA < 5000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → skip_mm_initial_cutscene (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_mm_initial_cutscene"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  TIMERA = 0;


  Camera.SetFixedPosition(-1468.7, 948.8, 262.9, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1459.5, 942.2, 261.6, 2 /* JUMP_CUT */);


  Text.PrintNow("BLOD_02", 5000, 1); //You will lose if your overall time reaches zero.


  while (TIMERA < 5000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → skip_mm_initial_cutscene (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_mm_initial_cutscene"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  TIMERA = 0;


  Camera.SetFixedPosition(-1262.7, 997.2, 266.8, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1277.6, 996.0, 263.6, 2 /* JUMP_CUT */);


  Text.PrintNow("BLOD_03", 5000, 1); //Get your overall time above the Target Time to win!


  while (TIMERA < 5000) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → skip_mm_initial_cutscene (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_mm_initial_cutscene"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  TIMERA = 0;
}



async function skip_mm_initial_cutscene() {
  Text.ClearPrints();
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  Hud.SwitchWidescreen(false /* OFF */);
  // ******************************************END OF PLAYER GETTING INTO BOAT*********************************************



  Text.PrintBig("RACE2", 1100, 4); //"THREE"
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 97 /* SOUND_RACE_START_3 */);
  await asyncWait(1000);
  Text.PrintBig("RACE3", 1100, 4); //"TWO"
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 98 /* SOUND_RACE_START_2 */);


  await asyncWait(1000);
  Text.PrintBig("RACE4", 1100, 4); //"ONE"
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 99 /* SOUND_RACE_START_1 */);


  await asyncWait(1000);
  Text.PrintBig("RACE5", 800, 4); //"GO!"
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 100 /* SOUND_RACE_START_GO */);


  await asyncWait(800);


  Text.ClearPrints();
  $.player1.setControl(true /* ON */);



  if (!(Car.IsDead($.mm_car1))) {
    $.mm_car1.setCruiseSpeed(100.0);
    $.mm_car1.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car2))) {
      $.mm_car1.setRamCar($.mm_car2);
    }
  }
  if (!(Car.IsDead($.mm_car2))) {
    $.mm_car2.setCruiseSpeed(100.0);
    $.mm_car2.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    $.mm_car2.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
  }
  if (!(Car.IsDead($.mm_car3))) {
    $.mm_car3.setCruiseSpeed(100.0);
    $.mm_car3.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
  }
  if (!(Car.IsDead($.mm_car4))) {
    $.mm_car4.setCruiseSpeed(100.0);
    $.mm_car4.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car5))) {
      $.mm_car4.setRamCar($.mm_car5);
    }
  }
  if (!(Car.IsDead($.mm_car5))) {
    $.mm_car5.setCruiseSpeed(100.0);
    $.mm_car5.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car6))) {
      $.mm_car5.setRamCar($.mm_car6);
    }
  }
  if (!(Car.IsDead($.mm_car6))) {
    $.mm_car6.setCruiseSpeed(100.0);
    $.mm_car6.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    $.mm_car6.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
  }
  if (!(Car.IsDead($.mm_car7))) {
    $.mm_car7.setCruiseSpeed(100.0);
    $.mm_car7.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car8))) {
      $.mm_car7.setRamCar($.mm_car8);
    }
  }
  if (!(Car.IsDead($.mm_car8))) {
    $.mm_car8.setCruiseSpeed(100.0);
    $.mm_car8.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car9))) {
      $.mm_car8.setRamCar($.mm_car9);
    }
  }
  if (!(Car.IsDead($.mm_car9))) {
    $.mm_car9.setCruiseSpeed(100.0);
    $.mm_car9.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car10))) {
      $.mm_car9.setRamCar($.mm_car10);
    }
  }
  if (!(Car.IsDead($.mm_car10))) {
    $.mm_car10.setCruiseSpeed(100.0);
    $.mm_car10.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
  }
  if (!(Car.IsDead($.mm_car11))) {
    $.mm_car11.setCruiseSpeed(100.0);
    $.mm_car11.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car12))) {
      $.mm_car11.setRamCar($.mm_car12);
    }
  }
  if (!(Car.IsDead($.mm_car12))) {
    $.mm_car12.setCruiseSpeed(100.0);
    $.mm_car12.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car13))) {
      $.mm_car12.setRamCar($.mm_car13);
    }
  }
  if (!(Car.IsDead($.mm_car13))) {
    $.mm_car13.setCruiseSpeed(100.0);
    $.mm_car13.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car14))) {
      $.mm_car13.setRamCar($.mm_car14);
    }
  }
  if (!(Car.IsDead($.mm_car14))) {
    $.mm_car14.setCruiseSpeed(100.0);
    $.mm_car14.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car15))) {
      $.mm_car14.setRamCar($.mm_car15);
    }
  }
  if (!(Car.IsDead($.mm_car15))) {
    $.mm_car15.setCruiseSpeed(100.0);
    $.mm_car15.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car16))) {
      $.mm_car15.setRamCar($.mm_car16);
    }
  }
  if (!(Car.IsDead($.mm_car16))) {
    $.mm_car16.setCruiseSpeed(100.0);
    $.mm_car16.setTempAction(8 /* TEMPACT_GOFORWARD */, 5000);
    if (!(Car.IsDead($.mm_car1))) {
      $.mm_car16.setRamCar($.mm_car1);
    }
  }


  Hud.DisplayTimer($.$id.mm_countdown, TIMER_DOWN);
  //DISPLAY_NTH_ONSCREEN_COUNTER_WITH_STRING time_to_beat/*mm_cars_killed*/ COUNTER_DISPLAY_NUMBER 2 ( BLOD_08 )

  Hud.DisplayNthCounterWithString($.mm_car_health_divided, 1 /* COUNTER_DISPLAY_BAR */, 1, "BLOD_04");


  $.rnd_float1x = Math.RandomFloatInRange(-1530.0, -1384.0);
  $.rnd_float1y = Math.RandomFloatInRange(995.0, 923.0);


  $.rnd_float2x = Math.RandomFloatInRange(-1530.0, -1384.0);
  $.rnd_float2y = Math.RandomFloatInRange(995.0, 1056.0);


  $.rnd_float3x = Math.RandomFloatInRange(-1265.0, -1384.0);
  $.rnd_float3y = Math.RandomFloatInRange(995.0, 923.0);


  $.rnd_float4x = Math.RandomFloatInRange(-1265.0, -1384.0);
  $.rnd_float4y = Math.RandomFloatInRange(995.0, 1056.0);



  await cunty_hoarz();  // SCM GOSUB cunty_hoarz

  //starting the fight



  TIMERA = 0;
  TIMERB = 0;


  while ($.mm_countdown > 0) {
    await asyncWait(0);
    if ($.mm_attempt == 0) {
      Text.PrintWithNumber("BLOD_05", $.mm_best_time, $.time_to_beat, 1); //Target Time
    }
    else {
      Text.PrintWithNumber("BLOD_06", $.mm_best_time, $.time_to_beat, 1); //Target Time
    }

    //player winning
    if ($.mm_countdown > $.time_to_beat) {
      // SCM GOTO → mission_passed_mm (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_mm"); // fallback: would break linear control flow
    }


    //playing sound
    if ($.mm_sound_playing == 1) {
      await mm_sound();  // SCM GOSUB mm_sound
    }
    Fx.DrawCorona($.plyr_rndx, $.plyr_rndy, $.plyr_rndz, 5.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 150, 150, 0);
    if ($.player1.locateAnyMeans3D($.plyr_rndx, $.plyr_rndy, $.plyr_rndz, 7.0, 7.0, 7.0, false /* FALSE */)) {
      if (!(Car.IsDead($.mmplayer_car))) {
        $.mm_adding_health = $.mmplayer_car.getHealth();
        if ($.mm_adding_health < 1234) {
          $.mm_adding_health += 15;
          $.mmplayer_car.setHealth($.mm_adding_health);
        }
        else {
          $.mm_adding_health = 1249;
          $.mmplayer_car.setHealth($.mm_adding_health);
        }
      }
      $.mm_countdown += 15000;
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      await cunty_hoarz();  // SCM GOSUB cunty_hoarz
    }
    if (!(Car.IsDead($.mm_car3))) {
      if ($.mm_car3.locate3D($.plyr_rndx, $.plyr_rndy, $.plyr_rndz, 7.0, 7.0, 7.0, false /* FALSE */)) {
        await cunty_hoarz();  // SCM GOSUB cunty_hoarz
      }
    }
    if (!(Car.IsDead($.mm_car10))) {
      if ($.mm_car10.locate3D($.plyr_rndx, $.plyr_rndy, $.plyr_rndz, 7.0, 7.0, 7.0, false /* FALSE */)) {
        await cunty_hoarz();  // SCM GOSUB cunty_hoarz
      }
    }


    //making sure counter cant be 0
    if ($.mm_cars_killed < 0) {
      $.mm_cars_killed = 0;
    }

    ////checking car health for counter and making car right way up
    if (!(Car.IsDead($.mmplayer_car))) {
      $.mm_car_health = $.mmplayer_car.getHealth();
      $.mm_car_health -= 249;
      if ($.mm_car_health < 0) {
        $.mm_car_health = 0;
      }
      $.mm_car_health_divided = $.mm_car_health / 10;
      if ($.mm_car_health_divided < 0) {
        $.mm_car_health_divided = 0;
      }
      if ($.mmplayer_car.isUpsidedown()) {
        if ($.mmplayer_car.isStopped()) {
          const _res331 = $.mmplayer_car.getCoordinates();
$.player_x = _res331.x;
$.player_y = _res331.y;
$.player_z = _res331.z;
          $.mm_car_heading = $.mmplayer_car.getHeading();
          $.mmplayer_car.setCoordinates($.player_x, $.player_y, $.player_z);
          $.mmplayer_car.setHeading($.mm_car_heading);
        }
      }
    }


    //waiting for cars to finish initial forward burst
    if (TIMERB > 5000) {
      if ($.letting_cars_do_stuff == 0) {
        if (!(Car.IsDead($.mm_car3))) {
          $.mm_car3.gotoCoordinatesAccurate($.plyr_rndx, $.plyr_rndy, -100.0);
        }
        if (!(Car.IsDead($.mm_car10))) {
          $.mm_car10.gotoCoordinatesAccurate($.plyr_rndx, $.plyr_rndy, -100.0);
        }
        $.letting_cars_do_stuff = 1;
      }

      //top left of bloodring
      if ($.zero_where_player == 1) {
        if (!(Car.IsDead($.mm_car1))) {
          //IF NOT IS_CAR_DEAD mm_car2
          //	SET_CAR_RAM_CAR mm_car2 mm_car1
          //ENDIF
          if (!(Car.IsDead($.mm_car3))) {
            $.mm_car3.gotoCoordinatesAccurate($.plyr_rndx, $.plyr_rndy, -100.0);
          }
          if (!(Car.IsDead($.mm_car4))) {
            $.mm_car4.setRamCar($.mm_car1);
          }
        }
        $.zero_where_player = 5;
      }
      if ($.where_is_player == 0) {
        if ($.zero_where_player == 5) {
          if (!(Car.IsDead($.mm_car1))) {
            $.rnd_float1x = Math.RandomFloatInRange(-1530.0, -1384.0);
            $.rnd_float1y = Math.RandomFloatInRange(995.0, 923.0);
            $.mm_car1.gotoCoordinatesAccurate($.rnd_float1x, $.rnd_float1y, -100.0);
          }
        }
      }
      if ($.zero_where_player == 11) {
        if (!(Car.IsDead($.mm_car1))) {
          $.mm_car1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        //IF NOT IS_CAR_DEAD mm_car2
        //	SET_CAR_MISSION mm_car2 MISSION_RAMPLAYER_FARAWAY
        //ENDIF
        //IF NOT IS_CAR_DEAD mm_car3
        //	SET_CAR_MISSION mm_car3 MISSION_RAMPLAYER_FARAWAY
        //ENDIF
        if (!(Car.IsDead($.mm_car4))) {
          $.mm_car4.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        $.zero_where_player = 6;
      }



      //top right of bloodring
      if ($.zero_where_player == 2) {
        if (!(Car.IsDead($.mm_car5))) {
          //IF NOT IS_CAR_DEAD mm_car6
          //	SET_CAR_RAM_CAR mm_car6 mm_car5
          //ENDIF
          if (!(Car.IsDead($.mm_car7))) {
            $.mm_car7.setRamCar($.mm_car5);
          }
          if (!(Car.IsDead($.mm_car8))) {
            $.mm_car8.setRamCar($.mm_car5);
          }
        }
        $.zero_where_player = 5;
      }
      if ($.where_is_player == 0) {
        if ($.zero_where_player == 5) {
          if (!(Car.IsDead($.mm_car5))) {
            $.rnd_float2x = Math.RandomFloatInRange(-1530.0, -1384.0);
            $.rnd_float2y = Math.RandomFloatInRange(995.0, 1056.0);
            $.mm_car5.gotoCoordinatesAccurate($.rnd_float2x, $.rnd_float2y, -100.0);
          }
        }
      }
      if ($.zero_where_player == 12) {
        if (!(Car.IsDead($.mm_car5))) {
          $.mm_car5.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        //IF NOT IS_CAR_DEAD mm_car6
        //	SET_CAR_MISSION mm_car6 MISSION_RAMPLAYER_FARAWAY
        //ENDIF
        if (!(Car.IsDead($.mm_car7))) {
          $.mm_car7.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        if (!(Car.IsDead($.mm_car8))) {
          $.mm_car8.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        $.zero_where_player = 6;
      }



      //Bottom Left of bloodring
      if ($.zero_where_player == 3) {
        if (!(Car.IsDead($.mm_car9))) {
          if (!(Car.IsDead($.mm_car10))) {
            $.mm_car10.gotoCoordinatesAccurate($.plyr_rndx, $.plyr_rndy, -100.0);
          }
          if (!(Car.IsDead($.mm_car11))) {
            $.mm_car11.setRamCar($.mm_car9);
          }
          if (!(Car.IsDead($.mm_car12))) {
            $.mm_car12.setRamCar($.mm_car9);
          }
        }
        $.zero_where_player = 5;
      }
      if ($.where_is_player == 0) {
        if ($.zero_where_player == 5) {
          if (!(Car.IsDead($.mm_car9))) {
            $.rnd_float3x = Math.RandomFloatInRange(-1265.0, -1384.0);
            $.rnd_float3y = Math.RandomFloatInRange(995.0, 923.0);
            $.mm_car9.gotoCoordinatesAccurate($.rnd_float3x, $.rnd_float3y, -100.0);
          }
        }
      }
      if ($.zero_where_player == 13) {
        if (!(Car.IsDead($.mm_car9))) {
          $.mm_car9.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        //IF NOT IS_CAR_DEAD mm_car10
        //	SET_CAR_MISSION mm_car10 MISSION_RAMPLAYER_FARAWAY
        //ENDIF
        if (!(Car.IsDead($.mm_car11))) {
          $.mm_car11.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        if (!(Car.IsDead($.mm_car12))) {
          $.mm_car12.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        $.zero_where_player = 6;
      }



      //Bottom Right of bloodring
      if ($.zero_where_player == 4) {
        if (!(Car.IsDead($.mm_car13))) {
          if (!(Car.IsDead($.mm_car14))) {
            $.mm_car14.setRamCar($.mm_car13);
          }
          if (!(Car.IsDead($.mm_car15))) {
            $.mm_car15.setRamCar($.mm_car13);
          }
          if (!(Car.IsDead($.mm_car16))) {
            $.mm_car16.setRamCar($.mm_car13);
          }
        }
        $.zero_where_player = 5;
      }
      if ($.where_is_player == 0) {
        if ($.zero_where_player == 5) {
          if (!(Car.IsDead($.mm_car13))) {
            $.rnd_float4x = Math.RandomFloatInRange(-1265.0, -1384.0);
            $.rnd_float4y = Math.RandomFloatInRange(995.0, 1056.0);
            $.mm_car13.gotoCoordinatesAccurate($.rnd_float4x, $.rnd_float4y, -100.0);
          }
        }
        $.where_is_player = 1;
      }
      if ($.zero_where_player == 14) {
        if (!(Car.IsDead($.mm_car13))) {
          $.mm_car13.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        if (!(Car.IsDead($.mm_car14))) {
          $.mm_car14.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        if (!(Car.IsDead($.mm_car15))) {
          $.mm_car15.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        if (!(Car.IsDead($.mm_car16))) {
          $.mm_car16.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
        $.zero_where_player = 6;
      }



      //checking on cars
      if (!(Car.IsDead($.mm_car1))) {
        //IF IS_CAR_STOPPED mm_car1
        if ($.mm_car1.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car1
          if (!($.player1.locateAnyMeansCar2D($.mm_car1, 7.0, 7.0, false /* FALSE */))) {
            const _res332 = $.mm_car1.getCoordinates();
$.player_x = _res332.x;
$.player_y = _res332.y;
$.player_z = _res332.z;
            $.mm_car1.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car1)) {
          $.mm_car1.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car2))) {
        //IF IS_CAR_STOPPED mm_car2
        if ($.mm_car2.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car2
          if (!($.player1.locateAnyMeansCar2D($.mm_car2, 7.0, 7.0, false /* FALSE */))) {
            const _res333 = $.mm_car2.getCoordinates();
$.player_x = _res333.x;
$.player_y = _res333.y;
$.player_z = _res333.z;
            $.mm_car2.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car2)) {
          $.mm_car2.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car3))) {
        //IF IS_CAR_STOPPED mm_car3
        if ($.mm_car3.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car3
          if (!($.player1.locateAnyMeansCar2D($.mm_car3, 7.0, 7.0, false /* FALSE */))) {
            const _res334 = $.mm_car3.getCoordinates();
$.player_x = _res334.x;
$.player_y = _res334.y;
$.player_z = _res334.z;
            $.mm_car3.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car3)) {
          $.mm_car3.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car4))) {
        //IF IS_CAR_STOPPED mm_car4
        if ($.mm_car4.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car4
          if (!($.player1.locateAnyMeansCar2D($.mm_car4, 7.0, 7.0, false /* FALSE */))) {
            const _res335 = $.mm_car4.getCoordinates();
$.player_x = _res335.x;
$.player_y = _res335.y;
$.player_z = _res335.z;
            $.mm_car4.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car4)) {
          $.mm_car4.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car5))) {
        //IF IS_CAR_STOPPED mm_car5
        if ($.mm_car5.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car5
          if (!($.player1.locateAnyMeansCar2D($.mm_car5, 7.0, 7.0, false /* FALSE */))) {
            const _res336 = $.mm_car5.getCoordinates();
$.player_x = _res336.x;
$.player_y = _res336.y;
$.player_z = _res336.z;
            $.mm_car5.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car5)) {
          $.mm_car5.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car6))) {
        //IF IS_CAR_STOPPED mm_car6
        if ($.mm_car6.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car6
          if (!($.player1.locateAnyMeansCar2D($.mm_car6, 7.0, 7.0, false /* FALSE */))) {
            const _res337 = $.mm_car6.getCoordinates();
$.player_x = _res337.x;
$.player_y = _res337.y;
$.player_z = _res337.z;
            $.mm_car6.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car6)) {
          $.mm_car6.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car7))) {
        //IF IS_CAR_STOPPED mm_car7
        if ($.mm_car7.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car7
          if (!($.player1.locateAnyMeansCar2D($.mm_car7, 7.0, 7.0, false /* FALSE */))) {
            const _res338 = $.mm_car7.getCoordinates();
$.player_x = _res338.x;
$.player_y = _res338.y;
$.player_z = _res338.z;
            $.mm_car7.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car7)) {
          $.mm_car7.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car8))) {
        //IF IS_CAR_STOPPED mm_car8
        if ($.mm_car8.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car8
          if (!($.player1.locateAnyMeansCar2D($.mm_car8, 7.0, 7.0, false /* FALSE */))) {
            const _res339 = $.mm_car8.getCoordinates();
$.player_x = _res339.x;
$.player_y = _res339.y;
$.player_z = _res339.z;
            $.mm_car8.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car8)) {
          $.mm_car8.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car9))) {
        //IF IS_CAR_STOPPED mm_car9
        if ($.mm_car9.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car9
          if (!($.player1.locateAnyMeansCar2D($.mm_car9, 7.0, 7.0, false /* FALSE */))) {
            const _res340 = $.mm_car9.getCoordinates();
$.player_x = _res340.x;
$.player_y = _res340.y;
$.player_z = _res340.z;
            $.mm_car9.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car9)) {
          $.mm_car9.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car10))) {
        //IF IS_CAR_STOPPED mm_car10
        if ($.mm_car10.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car10
          if (!($.player1.locateAnyMeansCar2D($.mm_car10, 7.0, 7.0, false /* FALSE */))) {
            const _res341 = $.mm_car10.getCoordinates();
$.player_x = _res341.x;
$.player_y = _res341.y;
$.player_z = _res341.z;
            $.mm_car10.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car10)) {
          $.mm_car10.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car11))) {
        //IF IS_CAR_STOPPED mm_car11
        if ($.mm_car11.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car11
          if (!($.player1.locateAnyMeansCar2D($.mm_car11, 7.0, 7.0, false /* FALSE */))) {
            const _res342 = $.mm_car11.getCoordinates();
$.player_x = _res342.x;
$.player_y = _res342.y;
$.player_z = _res342.z;
            $.mm_car11.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car11)) {
          $.mm_car11.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car12))) {
        //IF IS_CAR_STOPPED mm_car12
        if ($.mm_car12.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car12
          if (!($.player1.locateAnyMeansCar2D($.mm_car12, 7.0, 7.0, false /* FALSE */))) {
            const _res343 = $.mm_car12.getCoordinates();
$.player_x = _res343.x;
$.player_y = _res343.y;
$.player_z = _res343.z;
            $.mm_car12.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car12)) {
          $.mm_car12.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car13))) {
        //IF IS_CAR_STOPPED mm_car13
        if ($.mm_car13.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car13
          if (!($.player1.locateAnyMeansCar2D($.mm_car13, 7.0, 7.0, false /* FALSE */))) {
            const _res344 = $.mm_car13.getCoordinates();
$.player_x = _res344.x;
$.player_y = _res344.y;
$.player_z = _res344.z;
            $.mm_car13.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car13)) {
          $.mm_car13.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car14))) {
        //IF IS_CAR_STOPPED mm_car14
        if ($.mm_car14.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car14
          if (!($.player1.locateAnyMeansCar2D($.mm_car14, 7.0, 7.0, false /* FALSE */))) {
            const _res345 = $.mm_car14.getCoordinates();
$.player_x = _res345.x;
$.player_y = _res345.y;
$.player_z = _res345.z;
            $.mm_car14.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car14)) {
          $.mm_car14.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car15))) {
        //IF IS_CAR_STOPPED mm_car15
        if ($.mm_car15.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car15
          if (!($.player1.locateAnyMeansCar2D($.mm_car15, 7.0, 7.0, false /* FALSE */))) {
            const _res346 = $.mm_car15.getCoordinates();
$.player_x = _res346.x;
$.player_y = _res346.y;
$.player_z = _res346.z;
            $.mm_car15.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car15)) {
          $.mm_car15.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }
      if (!(Car.IsDead($.mm_car16))) {
        //IF IS_CAR_STOPPED mm_car16
        if ($.mm_car16.isUpsidedown()) {
          //IF NOT IS_CAR_ON_SCREEN mm_car16
          if (!($.player1.locateAnyMeansCar2D($.mm_car16, 7.0, 7.0, false /* FALSE */))) {
            const _res347 = $.mm_car16.getCoordinates();
$.player_x = _res347.x;
$.player_y = _res347.y;
$.player_z = _res347.z;
            $.mm_car16.setCoordinates($.player_x, $.player_y, $.player_z);
          }
          //ENDIF

        }
        //ENDIF
        if (StuckCarCheck.IsCarStuck($.mm_car16)) {
          $.mm_car16.setTempAction(2 /* TEMPACT_REVERSE */, 3000);
        }
      }

      //setting timer to change coords lead car is going to
      if (TIMERA > 1500) {
        $.where_is_player = 0;
        TIMERA = 0;
        if ($.mm_sound_playing == 0) {
          $.mm_sound_playing = 1;
        }
      }

      //where is player
      if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
        if ($.zero1 == 0) {
          $.zero_where_player = 11;
          $.zero1 = 1;
        }
      }
      else {
        if ($.zero1 == 1) {
          $.zero_where_player = 1;
          $.zero1 = 0;
        }
      }
      if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
        if ($.zero2 == 0) {
          $.zero_where_player = 12;
          $.zero2 = 1;
        }
      }
      else {
        if ($.zero2 == 1) {
          $.zero_where_player = 2;
          $.zero2 = 0;
        }
      }
      if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
        if ($.zero3 == 0) {
          $.zero_where_player = 13;
          $.zero3 = 1;
        }
      }
      else {
        if ($.zero3 == 1) {
          $.zero_where_player = 3;
          $.zero3 = 0;
        }
      }
      if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
        if ($.zero4 == 0) {
          $.zero_where_player = 14;
          $.zero4 = 1;
        }
      }
      else {
        if ($.zero4 == 1) {
          $.zero_where_player = 4;
          $.zero4 = 0;
        }
      }
    }



    //checking cars status
    if (Car.IsDead($.mm_car1)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car2)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car3)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car4)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car5)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car6)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car7)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car8)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car9)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car10)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car11)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car12)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car13)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car14)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car15)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }
    if (Car.IsDead($.mm_car16)) {
      $.cars_created--;
      $.mm_cars_killed++;
    }



    //building new cars
    if ($.cars_created < 16) {
      await create_cars_mm();  // SCM GOSUB create_cars_mm
    }


  }


  $.player1.setControl(false /* OFF */);
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("taxi2", 5000, 1); //You're out of time
  // SCM GOTO → mission_failed_mm (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_failed_mm"); // fallback: would break linear control flow
}



// Mission failed

async function mission_failed_mm() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_mm() {
  Audio.LoadMissionAudio(1, "airhrnl" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Audio.LoadMissionAudio(2, "airhrnr" as any);
  while (!(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }


  Audio.PlayMissionAudio(1);
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
  }
  // ******************************************WINNING Demolition Derby*******************************************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Audio.PlayMissionPassedTune(1);


  if (!(Car.IsDead($.mm_car1))) {
    $.mm_car1.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car2))) {
    $.mm_car2.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car3))) {
    $.mm_car3.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car4))) {
    $.mm_car4.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car5))) {
    $.mm_car5.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car6))) {
    $.mm_car6.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car7))) {
    $.mm_car7.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car8))) {
    $.mm_car8.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car9))) {
    $.mm_car9.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car10))) {
    $.mm_car10.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car11))) {
    $.mm_car11.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car12))) {
    $.mm_car12.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car13))) {
    $.mm_car13.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car14))) {
    $.mm_car14.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car15))) {
    $.mm_car15.freezePosition(true /* TRUE */);
  }
  if (!(Car.IsDead($.mm_car16))) {
    $.mm_car16.freezePosition(true /* TRUE */);
  }


  Text.PrintBig("BLOD_10", 6000, 5); //WINNER!!
  Text.PrintWithNumberBig("BLOD_09", 1000, 6000, 6); //$~1~


  $.player1.addScore(1000);
  $.mm_longest_time = $.time_to_beat;
  $.mm_longest_time /= 1000;
  $.mm_attempt++;
  $.mm_best_time++;
  Stat.SetLongestTimeInBloodRing($.mm_longest_time);


  TIMERA = 0;
  Text.UseCommands(true /* TRUE */);
}

async function bitches() {
  // SCM GOTO → bitches lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (TIMERA < 5000) {
      await texty_wexty();  // SCM GOSUB texty_wexty
      Text.SetColor(0, 0, 0, 255);
      Text.DisplayWithNumber(32.0, 302.0, "BLOD_07", $.mm_longest_time); //NEW Best Time: ~1~Seconds
      await texty_wexty();  // SCM GOSUB texty_wexty
      Text.SetColor(255, 128, 0, 255);
      Text.DisplayWithNumber(30.0, 300.0, "BLOD_07", $.mm_longest_time); //NEW Best Time: ~1~Seconds
      //IF mm_cars_killed > 0
      await texty_wexty();  // SCM GOSUB texty_wexty
      Text.SetColor(0, 0, 0, 255);
      Text.DisplayWithNumber(32.0, 317.0, "BLOD_08", $.mm_cars_killed); //Cars Destroyed: ~1~
      await texty_wexty();  // SCM GOSUB texty_wexty
      Text.SetColor(255, 128, 0, 255);
      Text.DisplayWithNumber(30.0, 315.0, "BLOD_08", $.mm_cars_killed); //Cars Destroyed: ~1~
      //ENDIF

    }
    else {
      // SCM GOTO → bitches_hoars (not lowered; manual jump required)
      throw new Error("unresolved GOTO bitches_hoars"); // fallback: would break linear control flow
    }
  }
}

async function bitches_hoars() {


  $.time_to_beat += 60000;
  // ******************************************END OF PLAYER GETTING INTO BOAT*********************************************

  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Hud.SwitchWidescreen(false /* OFF */);


  Restart.CancelOverride();
  $.player1.setFreeHealthCare(false /* FALSE */);
  Text.ClearPrints();
  $.player1.clearWantedLevel();


  if ($.mm_mission_passed_once == 0) {
    $.gen_car125.switch(101);
    $.gen_car126.switch(101);
    Stat.PlayerMadeProgress(1);
    Stat.RegisterOddjobMissionPassed();
    $.mm_mission_passed_once = 1;
  }
}




// mission cleanup

async function mission_cleanup_mm() {
  ONMISSION = 0;
  Text.UseCommands(false /* FALSE */);
  World.ClearExtraColors(false /* FALSE */);
  $.plyr_checkpoint_blip.remove();
  Streaming.LoadScene(-1101.0, 1331.0, 19.1);
  $.player1.setControl(true /* on */);
  Weather.Release();
  Stat.AddBloodRingKills($.mm_cars_killed);
  Hud.ClearCounter($.$id.mm_cars_killed);
  Hud.ClearTimer($.$id.mm_countdown);
  Hud.ClearCounter($.$id.mm_car_health_divided);
  Text.ClearThisPrint("BLOD_05");
  Text.ClearThisPrint("BLOD_06");
  Streaming.MarkModelAsNoLongerNeeded(bloodrb);
  Streaming.MarkModelAsNoLongerNeeded(bloodra);
  Streaming.MarkModelAsNoLongerNeeded(WMYCR);
  $.flag_mm_trigger = 1;
  $.timer_mobile_start = Clock.GetGameTimer();
  $.player1.shutUp(false /* FALSE */);
  Game.SetIsInStadium(false /* FALSE */);


  if (!(HAS_DEATHARREST_BEEN_EXECUTED())) {
    Streaming.SetAreaVisible(VIS_MAIN_MAP);
    Streaming.LoadScene(-1101.0, 1331.0, 19.1);
    if ($.player1.isInAnyCar()) {
      $.player1.warpFromCarToCoord(-1101.0, 1331.0, 19.1);
    }
    else {
      $.player1.setCoordinates(-1101.0, 1331.0, 19.1);
    }
    $.player1.setHeading(278.650);
    Camera.RestoreJumpcut();
    Camera.SetInFrontOfPlayer();
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(1500, 1 /* FADE_IN */);
    $.player1.setControl(true /* ON */);
  }


  Mission.Finish();
}




///////////////////////////////////////////////////////////////////////////////////////////

async function create_cars_mm() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car1)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car1);
    $.mm_car1.markAsNoLongerNeeded();
    $.mm_driver1.markAsNoLongerNeeded();
    $.mm_car1 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver1 = Char.CreateInsideCar($.mm_car1, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver1.shutUp(true /* TRUE */);
    $.mm_car1.setStraightLineDistance(255);
    $.mm_car1.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car1.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car1, 1.5, 4000);
    $.mm_car1.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car1.setForwardSpeed(25.0);
    $.mm_car1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car1 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car2)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car2);
    $.mm_car2.markAsNoLongerNeeded();
    $.mm_driver2.markAsNoLongerNeeded();
    $.mm_car2 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver2 = Char.CreateInsideCar($.mm_car2, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver2.shutUp(true /* TRUE */);
    $.mm_car2.setStraightLineDistance(255);
    $.mm_car2.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car2.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car2, 1.5, 4000);
    $.mm_car2.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car2.setForwardSpeed(25.0);
    $.mm_car2.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car2 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car3)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car3);
    $.mm_car3.markAsNoLongerNeeded();
    $.mm_driver3.markAsNoLongerNeeded();
    $.mm_car3 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver3 = Char.CreateInsideCar($.mm_car3, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver3.shutUp(true /* TRUE */);
    $.mm_car3.setStraightLineDistance(255);
    $.mm_car3.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car3.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car3, 1.5, 4000);
    $.mm_car3.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car3.setForwardSpeed(25.0);
    $.mm_car3.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car3 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car4)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car4);
    $.mm_car4.markAsNoLongerNeeded();
    $.mm_driver4.markAsNoLongerNeeded();
    $.mm_car4 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver4 = Char.CreateInsideCar($.mm_car4, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver4.shutUp(true /* TRUE */);
    $.mm_car4.setStraightLineDistance(255);
    $.mm_car4.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car4.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car4, 1.5, 4000);
    $.mm_car4.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car4.setForwardSpeed(25.0);
    $.mm_car4.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car4 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car5)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car5);
    $.mm_car5.markAsNoLongerNeeded();
    $.mm_driver5.markAsNoLongerNeeded();
    $.mm_car5 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver5 = Char.CreateInsideCar($.mm_car5, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver5.shutUp(true /* TRUE */);
    $.mm_car5.setStraightLineDistance(255);
    $.mm_car5.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car5.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car5, 1.5, 4000);
    $.mm_car5.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car5.setForwardSpeed(25.0);
    $.mm_car5.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car5 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car6)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car6);
    $.mm_car6.markAsNoLongerNeeded();
    $.mm_driver6.markAsNoLongerNeeded();
    $.mm_car6 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver6 = Char.CreateInsideCar($.mm_car6, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver6.shutUp(true /* TRUE */);
    $.mm_car6.setStraightLineDistance(255);
    $.mm_car6.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car6.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car6, 1.5, 4000);
    $.mm_car6.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car6.setForwardSpeed(25.0);
    $.mm_car6.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    $.mm_car6.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car6 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car7)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car7);
    $.mm_car7.markAsNoLongerNeeded();
    $.mm_driver7.markAsNoLongerNeeded();
    $.mm_car7 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver7 = Char.CreateInsideCar($.mm_car7, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver7.shutUp(true /* TRUE */);
    $.mm_car7.setStraightLineDistance(255);
    $.mm_car7.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car7.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car7, 1.5, 4000);
    $.mm_car7.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car7.setForwardSpeed(25.0);
    $.mm_car7.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car7 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car8)) {
    if ($.player1.isInArea2D(-1530.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car8);
    $.mm_car8.markAsNoLongerNeeded();
    $.mm_driver8.markAsNoLongerNeeded();
    $.mm_car8 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver8 = Char.CreateInsideCar($.mm_car8, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver8.shutUp(true /* TRUE */);
    $.mm_car8.setStraightLineDistance(255);
    $.mm_car8.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car8.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car8, 1.5, 4000);
    $.mm_car8.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car8.setForwardSpeed(25.0);
    $.mm_car8.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car8 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car9)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car9);
    $.mm_car9.markAsNoLongerNeeded();
    $.mm_driver9.markAsNoLongerNeeded();
    $.mm_car9 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver9 = Char.CreateInsideCar($.mm_car9, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver9.shutUp(true /* TRUE */);
    $.mm_car9.setStraightLineDistance(255);
    $.mm_car9.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car9.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car9, 1.5, 4000);
    $.mm_car9.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car9.setForwardSpeed(25.0);
    $.mm_car9.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car9 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car10)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car10);
    $.mm_car10.markAsNoLongerNeeded();
    $.mm_driver10.markAsNoLongerNeeded();
    $.mm_car10 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver10 = Char.CreateInsideCar($.mm_car10, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver10.shutUp(true /* TRUE */);
    $.mm_car10.setStraightLineDistance(255);
    $.mm_car10.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car10.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car10, 1.5, 4000);
    $.mm_car10.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car10.setForwardSpeed(25.0);
    $.mm_car10.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car10 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car11)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car11);
    $.mm_car11.markAsNoLongerNeeded();
    $.mm_driver11.markAsNoLongerNeeded();
    $.mm_car11 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver11 = Char.CreateInsideCar($.mm_car11, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver11.shutUp(true /* TRUE */);
    $.mm_car11.setStraightLineDistance(255);
    $.mm_car11.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car11.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car11, 1.5, 4000);
    $.mm_car11.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car11.setForwardSpeed(25.0);
    $.mm_car11.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car11 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car12)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 923.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car12);
    $.mm_car12.markAsNoLongerNeeded();
    $.mm_driver12.markAsNoLongerNeeded();
    $.mm_car12 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver12 = Char.CreateInsideCar($.mm_car12, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver12.shutUp(true /* TRUE */);
    $.mm_car12.setStraightLineDistance(255);
    $.mm_car12.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car12.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car12, 1.5, 4000);
    $.mm_car12.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car12.setForwardSpeed(25.0);
    $.mm_car12.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car12 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car13)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car13);
    $.mm_car13.markAsNoLongerNeeded();
    $.mm_driver13.markAsNoLongerNeeded();
    $.mm_car13 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver13 = Char.CreateInsideCar($.mm_car13, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver13.shutUp(true /* TRUE */);
    $.mm_car13.setStraightLineDistance(255);
    $.mm_car13.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car13.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car13, 1.5, 4000);
    $.mm_car13.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car13.setForwardSpeed(25.0);
    $.mm_car13.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car13 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car14)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car14);
    $.mm_car14.markAsNoLongerNeeded();
    $.mm_driver14.markAsNoLongerNeeded();
    $.mm_car14 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver14 = Char.CreateInsideCar($.mm_car14, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver14.shutUp(true /* TRUE */);
    $.mm_car14.setStraightLineDistance(255);
    $.mm_car14.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car14.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car14, 1.5, 4000);
    $.mm_car14.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car14.setForwardSpeed(25.0);
    $.mm_car14.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car14 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car15)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car15);
    $.mm_car15.markAsNoLongerNeeded();
    $.mm_driver15.markAsNoLongerNeeded();
    $.mm_car15 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver15 = Char.CreateInsideCar($.mm_car15, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver15.shutUp(true /* TRUE */);
    $.mm_car15.setStraightLineDistance(255);
    $.mm_car15.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car15.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car15, 1.5, 4000);
    $.mm_car15.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car15.setForwardSpeed(25.0);
    $.mm_car15.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car15 750
    $.cars_created++;
  }


  await random_garages();  // SCM GOSUB random_garages


  if (Car.IsDead($.mm_car16)) {
    if ($.player1.isInArea2D(-1265.0, 995.0, -1384.0, 1076.0, false /* FALSE */)) {
      Text.PrintWithNumberBig("BONUS", 100, 1000, 1);
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.player1.addScore(100);
    }
    StuckCarCheck.Remove($.mm_car16);
    $.mm_car16.markAsNoLongerNeeded();
    $.mm_driver16.markAsNoLongerNeeded();
    $.mm_car16 = Car.Create(bloodrb, $.random_car_node_x, $.random_car_node_y, $.random_car_node_z);
    $.mm_driver16 = Char.CreateInsideCar($.mm_car16, 4 /* PEDTYPE_CIVMALE */, WMYCR);
    $.mm_driver16.shutUp(true /* TRUE */);
    $.mm_car16.setStraightLineDistance(255);
    $.mm_car16.setOnlyDamagedByPlayer(true /* TRUE */);
    $.mm_car16.setCruiseSpeed(100.0);
    StuckCarCheck.Add($.mm_car16, 1.5, 4000);
    $.mm_car16.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
    $.mm_car16.setForwardSpeed(25.0);
    $.mm_car16.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    //SET_CAR_HEALTH mm_car16 750
    $.cars_created++;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function random_garages() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  $.random_garage = Math.RandomIntInRange(1, 4);
  await asyncWait(0);
  Fx.DrawCorona($.plyr_rndx, $.plyr_rndy, $.plyr_rndz, 5.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 150, 150, 0);


  //playing sound

  if ($.mm_sound_playing == 1) {
    await mm_sound();  // SCM GOSUB mm_sound
  }



  if ($.random_garage == 1) {
    if (!(World.IsPointObscuredByAMissionEntity(-1461.84, 938.32, 261.00, 5.0, 5.0, 5.0))) {
      $.random_car_node_x = -1461.84;
      $.random_car_node_y = 938.32;
      $.random_car_node_z = 261.00;
      $.mm_car_heading = 345.6;
    }
    else {
      // SCM GOTO → random_garages (not lowered; manual jump required)
      throw new Error("unresolved GOTO random_garages"); // fallback: would break linear control flow
    }
  }
  if ($.random_garage == 2) {
    if (!(World.IsPointObscuredByAMissionEntity(-1424.36, 933.86, 261.00, 5.0, 5.0, 5.0))) {
      $.random_car_node_x = -1424.36;
      $.random_car_node_y = 933.86;
      $.random_car_node_z = 261.00;
    }
    else {
      // SCM GOTO → random_garages (not lowered; manual jump required)
      throw new Error("unresolved GOTO random_garages"); // fallback: would break linear control flow
    }
  }
  if ($.random_garage == 3) {
    if (!(World.IsPointObscuredByAMissionEntity(-1443.29, 931.29, 261.00, 5.0, 5.0, 5.0))) {
      $.random_car_node_x = -1443.29;
      $.random_car_node_y = 931.29;
      $.random_car_node_z = 261.00;
      $.mm_car_heading = 351.4;
    }
    else {
      // SCM GOTO → random_garages (not lowered; manual jump required)
      throw new Error("unresolved GOTO random_garages"); // fallback: would break linear control flow
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function cunty_hoarz() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  $.plyr_rndx = Math.RandomFloatInRange(-1290.0, -1508.0);
  $.plyr_rndy = Math.RandomFloatInRange(939.0, 1052.0);
  $.plyr_rndz = World.GetGroundZFor3DCoord($.plyr_rndx, $.plyr_rndy, 275.8);
  if ($.plyr_rndz > 260.2) {
    // SCM GOTO → cunty_hoarz (not lowered; manual jump required)
    throw new Error("unresolved GOTO cunty_hoarz"); // fallback: would break linear control flow
  }
  if ($.plyr_rndz < 249.0) {
    // SCM GOTO → cunty_hoarz (not lowered; manual jump required)
    throw new Error("unresolved GOTO cunty_hoarz"); // fallback: would break linear control flow
  }
  $.plyr_checkpoint_blip.remove();
  $.plyr_checkpoint_blip = Blip.AddForCoord($.plyr_rndx, $.plyr_rndy, $.plyr_rndz);
  $.plyr_checkpoint_blip.changeColor(4 /* YELLOW */);
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function mm_sound() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  $.mm_sound1 = Math.RandomIntInRange(1, 22);
  if ($.mm_audio_flag == 0) {
    if ($.mm_cuntie == $.mm_sound1) {
      ++$.mm_sound1;
      if ($.mm_sound1 > 21) {
        $.mm_sound1 = 1;
      }
    }


    if ($.mm_sound1 == 1) {
      Audio.LoadMissionAudio(1, "race1" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 2) {
      Audio.LoadMissionAudio(1, "race2" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 3) {
      Audio.LoadMissionAudio(1, "race3" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 4) {
      Audio.LoadMissionAudio(1, "race4" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 5) {
      Audio.LoadMissionAudio(1, "race5" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 6) {
      Audio.LoadMissionAudio(1, "race6" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 7) {
      Audio.LoadMissionAudio(1, "race7" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 8) {
      Audio.LoadMissionAudio(1, "race8" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 9) {
      Audio.LoadMissionAudio(1, "race9" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 10) {
      Audio.LoadMissionAudio(1, "race10" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 11) {
      Audio.LoadMissionAudio(1, "race11" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 12) {
      Audio.LoadMissionAudio(1, "race12" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 13) {
      Audio.LoadMissionAudio(1, "race13" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 14) {
      Audio.LoadMissionAudio(1, "race14" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 15) {
      Audio.LoadMissionAudio(1, "race15" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 16) {
      Audio.LoadMissionAudio(1, "cheer1" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 17) {
      Audio.LoadMissionAudio(1, "cheer2" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 18) {
      Audio.LoadMissionAudio(1, "cheer3" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 19) {
      Audio.LoadMissionAudio(1, "cheer4" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 20) {
      Audio.LoadMissionAudio(1, "ooh1" as any);
      $.mm_audio_flag = 1;
    }
    if ($.mm_sound1 == 21) {
      Audio.LoadMissionAudio(1, "ooh2" as any);
      $.mm_audio_flag = 1;
    }


    $.mm_cuntie = $.mm_sound1;




  }


  if ($.mm_audio_flag == 1) {
    if (Audio.HasMissionAudioLoaded(1)) {
      $.mm_audio_flag = 2;
    }
  }


  if ($.mm_audio_flag == 2) {
    Audio.PlayMissionAudio(1);
    $.mm_audio_flag = 3;
  }


  if ($.mm_audio_flag == 3) {
    if (Audio.HasMissionAudioFinished(1)) {
      $.mm_audio_flag = 4;
    }
  }


  if ($.mm_audio_flag == 4) {
    $.mm_audio_flag = 0;
    $.mm_sound_playing = 0;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
}

///////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

async function texty_wexty() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  Text.SetJustify(true /* ON */);
  Text.SetRightJustify(false /* OFF */);
  Text.SetWrapX(500.0);
  Text.SetProportional(true /* ON */);
  Text.SetCenter(false /* OFF */);
  Text.SetBackground(false /* OFF */);
  Text.SetScale(0.6, 1.6);
  ///////////////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////////////

}

export async function mm() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Miami Massacre******r***************************
  // *****************************************Courtesy of Demolition Derby********************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME mm
  // Mission start stuff

  await mission_start_mm();  // SCM GOSUB mission_start_mm
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_mm();  // SCM GOSUB mission_failed_mm
  }
  await mission_cleanup_mm();  // SCM GOSUB mission_cleanup_mm
  // MissionBoundary

  // Variables for mission
  //people, cars and objects

  // VAR_INT mm_car1
  // VAR_INT mm_car2
  // VAR_INT mm_car3
  // VAR_INT mm_car4
  // VAR_INT mm_car5
  // VAR_INT mm_car6
  // VAR_INT mm_car7
  // VAR_INT mm_car8
  // VAR_INT mm_car9
  // VAR_INT mm_car10
  // VAR_INT mm_car11
  // VAR_INT mm_car12
  // VAR_INT mm_car13
  // VAR_INT mm_car14
  // VAR_INT mm_car15
  // VAR_INT mm_car16
  // VAR_INT mm_driver1
  // VAR_INT mm_driver2
  // VAR_INT mm_driver3
  // VAR_INT mm_driver4
  // VAR_INT mm_driver5
  // VAR_INT mm_driver6
  // VAR_INT mm_driver7
  // VAR_INT mm_driver8
  // VAR_INT mm_driver9
  // VAR_INT mm_driver10
  // VAR_INT mm_driver11
  // VAR_INT mm_driver12
  // VAR_INT mm_driver13
  // VAR_INT mm_driver14
  // VAR_INT mm_driver15
  // VAR_INT mm_driver16
  // VAR_INT mmplayer_car

  //flags

  // VAR_INT random_garage
  // VAR_INT cars_created
  // VAR_INT mm_cars_killed
  // VAR_INT mm_countdown
  // VAR_INT mm_attempt
  // VAR_INT mm_best_time
  // VAR_INT mm_longest_time
  // VAR_INT mm_car_health
  // VAR_INT mm_car_health_divided
  // VAR_INT where_is_player
  // VAR_INT zero_where_player
  // VAR_INT zero1
  // VAR_INT zero2
  // VAR_INT zero3
  // VAR_INT zero4
  // VAR_INT time_to_beat
  // VAR_INT letting_cars_do_stuff
  // VAR_INT mm_audio_flag
  // VAR_INT mm_sound1
  // VAR_INT mm_sound_playing
  // VAR_INT mm_cuntie
  // VAR_INT mm_adding_health


  //coordinates

  // VAR_FLOAT random_car_node_x
  // VAR_FLOAT random_car_node_y
  // VAR_FLOAT random_car_node_z
  // VAR_FLOAT mm_car_heading


  // VAR_FLOAT rnd_float1x
  // VAR_FLOAT rnd_float1y
  // VAR_FLOAT rnd_float2x
  // VAR_FLOAT rnd_float2y
  // VAR_FLOAT rnd_float3x
  // VAR_FLOAT rnd_float3y
  // VAR_FLOAT rnd_float4x
  // VAR_FLOAT rnd_float4y



  // VAR_FLOAT plyr_rndx
  // VAR_FLOAT plyr_rndy
  // VAR_FLOAT plyr_rndz

  //blips

  // VAR_INT plyr_checkpoint_blip



  // ****************************************Mission Start************************************

}
