// Generated from main/firetruck.sc

import { $ } from "../vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// *************************************** Fire missions ***********************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  ONMISSION = 1;
  $.flag_player_on_fire_mission = 1;


  // SCRIPT_NAME firetru


  await asyncWait(0);


  if ($.done_firetruck_progress == 0) {
    Stat.RegisterMissionGiven();
  }




  // LVAR_INT onfire_car onfire_car_1 onfire_car_2 onfire_car_3
  // LVAR_INT onfire_ped onfire_ped_1 onfire_ped_2 onfire_ped_3 onfire_ped_4
  // LVAR_INT onfire_ped_5 onfire_ped_6 onfire_ped_7 onfire_ped_8 onfire_ped_9


  Text.LoadMissionText("FIRETRK");



  $.fire_time_limit = 0;
  $.score_ft = 0;
  $.displayed_timer = 0;
  $.fires_extinguished = 0;
  $.displayed_counter = 0;
  $.total_score = 0;
  $.mission_end_button_ft = 0;
  $.time_divider = 5.5;
  $.firetruck_level = 1;
  $.fail_firetruck_mission = 0;
  $.random_car_model = 0;
  $.intermediate_int = 0;
  $.players_car_health = 0;
  onfire_car_1 = -1;
  onfire_car_1 = -1;
  onfire_car_1 = -1;
  $.car_health_test_timer = 0;


  $.onfire_ped_1_fire = 0;
  $.onfire_ped_2_fire = 0;
  $.onfire_ped_3_fire = 0;
  $.onfire_ped_4_fire = 0;
  $.onfire_ped_5_fire = 0;
  $.onfire_ped_6_fire = 0;
  $.onfire_ped_7_fire = 0;
  $.onfire_ped_8_fire = 0;
  $.onfire_ped_9_fire = 0;


  Game.SetWantedMultiplier(0.5);


  if (ONMISSION == 0) {
    $.onfire_car_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_car_1_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_car_2_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_car_3_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_1_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_2_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_3_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_4_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_5_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_6_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_7_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_8_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.onfire_ped_9_blip = Blip.AddForCoord($.x, $.y, $.z);
  }
}



async function fire_generation_start() {


  $.fires_needing_extinguishing = 0;
  $.fires_extinguished_this_round = 0;


  $.onfire_car_1_flag = 0;
  $.onfire_car_2_flag = 0;
  $.onfire_car_3_flag = 0;
  $.onfire_ped_1_flag = 0;
  $.onfire_ped_2_flag = 0;
  $.onfire_ped_3_flag = 0;
  $.onfire_ped_4_flag = 0;
  $.onfire_ped_5_flag = 0;
  $.onfire_ped_6_flag = 0;
  $.onfire_ped_7_flag = 0;
  $.onfire_ped_8_flag = 0;
  $.onfire_ped_9_flag = 0;
  //fire1_flag = 0
  //fire2_flag = 0
  //fire3_flag = 0
  //fire4_flag = 0
  //fire5_flag = 0

  /////////////////////////////////////////////////////////////////////
  //REQUEST CAR MODEL
  /////////////////////////////////////////////////////////////////////

  $.random_int = Math.RandomIntInRange(25, 44);

  //4-door

  if ($.random_int == 25) {
    $.random_car_model = SENTINEL;
  }
  if ($.random_int == 26) {
    $.random_car_model = MOONBEAM;
  }
  if ($.random_int == 27) {
    $.random_car_model = WASHING;
  }
  if ($.random_int == 28) {
    $.random_car_model = LANDSTAL;
  }
  if ($.random_int == 29) {
    $.random_car_model = PEREN;
  }
  if ($.random_int == 30) {
    $.random_car_model = ADMIRAL;
  }
  if ($.random_int == 31) {
    $.random_car_model = GLENDALE;
  }
  if ($.random_int == 32) {
    $.random_car_model = OCEANIC;
  }
  if ($.random_int == 33) {
    $.random_car_model = REGINA;
  }
  if ($.random_int == 34) {
    $.random_car_model = PONY;
  }
  if ($.random_int == 35) {
    $.random_car_model = TAXI;
  }
  if ($.random_int == 36) {
    $.random_car_model = CABBIE;
  }
  if ($.random_int == 37) {
    $.random_car_model = RUMPO;
  }
  if ($.random_int == 38) {
    $.random_car_model = GANGBUR;
  }
  if ($.random_int == 39) {
    $.random_car_model = PATRIOT;
  }
  if ($.random_int == 40) {
    $.random_car_model = BURRITO;
  }
  if ($.random_int == 41) {
    $.random_car_model = KAUFMAN;
  }
  if ($.random_int == 42) {
    $.random_car_model = GREENWOO;
  }
  if ($.random_int == 43) {
    $.random_car_model = SENTXS;
  }


  Streaming.RequestModel($.random_car_model);
}



/////////////////////////////////////////////////////////////////////
//GET RANDOM FIRE COORDS
/////////////////////////////////////////////////////////////////////

async function next_fire() {


  await do_cancelled_checks();  // SCM GOSUB do_cancelled_checks
  if ($.fail_firetruck_mission == 1) {
    // SCM GOTO → failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
  }

  //xmin -247.43 ymin -1813.62 xmax 683.41 ymax 1308.102//BEACH AREA
  //xmin -1802.615 ymin -1518.473 xmax -270.134 ymax 1591.896//MAINLAND AREA


  if ($.flag_baron_mission2_passed == 0) {
    $.car1_x = Math.RandomFloatInRange(-247.43, 683.41);
    $.car1_y = Math.RandomFloatInRange(-1813.62, 1308.102);
  }
  else {
    if ($.player1.isInArea2D(-1802.615, -1518.473, -270.134, 1591.896, false)) {
      $.car1_x = Math.RandomFloatInRange(-1802.615, -270.134); //MAINLAND AREA
      $.car1_y = Math.RandomFloatInRange(-1518.473, 1591.896);
    }
    else {
      $.car1_x = Math.RandomFloatInRange(-247.43, 683.41); //BEACH AREA
      $.car1_y = Math.RandomFloatInRange(-1813.62, 1308.102);
    }
  }


  if ($.firetruck_level < 5) {
    const _res184 = Path.GetClosestCarNode($.car1_x, $.car1_y, 10.0);
$.car1_x = _res184.nodeX;
$.car1_y = _res184.nodeY;
$.car1_z = _res184.nodeZ;
  }
  else {
    if ($.firetruck_level < 9) {
      const _res185 = Path.GetClosestStraightRoad($.car1_x, $.car1_y, 10.0, 12.0, 500.0);
$.car1_x = _res185.node1X;
$.car1_y = _res185.node1Y;
$.car1_z = _res185.node1Z;
$.car2_x = _res185.node2X;
$.car2_y = _res185.node2Y;
$.car2_z = _res185.node2Z;
$.z = _res185.angle;
      if ($.car1_x == 0.0 && $.car1_y == 0.0 && $.car2_x == 0.0 && $.car2_y == 0.0) {
        await asyncWait(0);
        // SCM GOTO → next_fire (not lowered; manual jump required)
        throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
      }
      //MAKES THE DISTANCE BETWEEN CAR1_XYZ AND CAR2_XYZ EQUAL TO MINLENGTH OF STRAIGHT ROAD (8.0)
      $.dx = $.car2_x - $.car1_x;
      $.dy = $.car2_y - $.car1_y;
      $.temp_x = $.dx * $.dx;
      $.temp_y = $.dy * $.dy;
      $.temp_xy = $.temp_x + $.temp_y;
      $.temp_xy = Math.Sqrt($.temp_xy);
      $.sum_x_y_temp = 12.0 / $.temp_xy;
      $.temp_x = $.dx * $.sum_x_y_temp;
      $.car2_x = $.car1_x + $.temp_x;
      $.temp_y = $.dy * $.sum_x_y_temp;
      $.car2_y = $.car1_y + $.temp_y;
      $.car1_z += 0.5;
      $.car2_z += 0.5;
    }
    else {
      const _res186 = Path.GetClosestStraightRoad($.car1_x, $.car1_y, 10.0, 18.0, 500.0);
$.car2_x = _res186.node1X;
$.car2_y = _res186.node1Y;
$.car2_z = _res186.node1Z;
$.car3_x = _res186.node2X;
$.car3_y = _res186.node2Y;
$.car3_z = _res186.node2Z;
$.z = _res186.angle;
      if ($.car2_x == 0.0 && $.car2_y == 0.0 && $.car3_x == 0.0 && $.car3_y == 0.0) {
        await asyncWait(0);
        // SCM GOTO → next_fire (not lowered; manual jump required)
        throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
      }

      //MAKES THE DISTANCE BETWEEN car2_XYZ AND CAR3_XYZ EQUAL TO MINLENGTH OF STRAIGHT ROAD (13.0)
      $.dx = $.car3_x - $.car2_x;
      $.dy = $.car3_y - $.car2_y;
      $.temp_x = $.dx * $.dx;
      $.temp_y = $.dy * $.dy;
      $.temp_xy = $.temp_x + $.temp_y;
      $.temp_xy = Math.Sqrt($.temp_xy);
      $.sum_x_y_temp = 18.0 / $.temp_xy;
      $.temp_x = $.dx * $.sum_x_y_temp;
      $.car3_x = $.car2_x + $.temp_x;
      $.temp_y = $.dy * $.sum_x_y_temp;
      $.car3_y = $.car2_y + $.temp_y;

      //WORKS OUT THE MIDDLE POINT OF car2_XYZ AND CAR3_XYZ
      $.car1_x = $.car2_x - $.car3_x;
      $.car1_x = $.car1_x / 2.0;
      $.car1_x = $.car1_x + $.car3_x;
      $.car1_y = $.car2_y - $.car3_y;
      $.car1_y = $.car1_y / 2.0;
      $.car1_y = $.car1_y + $.car3_y;
      $.car1_z = $.car2_z - $.car3_z;
      $.car1_z = $.car1_z / 2.0;
      $.car1_z = $.car1_z + $.car3_z;
      $.car2_z += 0.5;
      $.car1_z += 0.5;
      $.car3_z += 0.5;
    }
  }

  /////////////////////////////////////////////////////////////////////
  //MAKE SURE FIRE COORDS ARE NOT IN A BAD PLACE
  /////////////////////////////////////////////////////////////////////


  if ($.car1_z < 7.0) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }


  const _res187 = $.player1.getCoordinates();
$.player_x = _res187.x;
$.player_y = _res187.y;
$.player_z = _res187.z;
  $.players_distance_from_fire = Math.GetDistanceBetweenCoords2D($.player_x, $.player_y, $.car1_x, $.car1_y);


  if ($.players_distance_from_fire < 150.0 || $.players_distance_from_fire > 600.0) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //STADIUM

  if ($.car1_x > -1905.785 && $.car1_x < -1105.785 && $.car1_y > 745.678 && $.car1_y < 1773.513) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //GOLF COURSE & PORN

  if ($.car1_x > -265.018 && $.car1_x < 170.188 && $.car1_y > -275.942 && $.car1_y < 1689.059) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //MORE GOLFCOURSE

  if ($.car1_x > 164.191 && $.car1_x < 259.713 && $.car1_y > -187.926 && $.car1_y < 631.97) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //GOLFCOURSE BRIDGE

  if ($.car1_x > -731.729 && $.car1_x < -263.334 && $.car1_y > -4.399 && $.car1_y < 62.853) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //STARISLAND BRIDGE

  if ($.car1_x > -180.88 && $.car1_x < 64.112 && $.car1_y > -499.183 && $.car1_y < -417.519) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //STARISLAND

  if ($.car1_x > -762.855 && $.car1_x < -172.566 && $.car1_y > -667.099 && $.car1_y < -224.382) {
    await asyncWait(0);
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }


  if ($.flag_baron_mission2_passed == 0) {
    if ($.car1_x > -2327.212 && $.car1_x < -261.402 && $.car1_y > -2027.821 && $.car1_y < 1894.426) {
      await asyncWait(0);
      // SCM GOTO → next_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
    }
    if ($.car1_x > -265.018 && $.car1_x < 170.188 && $.car1_y > -275.942 && $.car1_y < 1689.059) {
      await asyncWait(0);
      // SCM GOTO → next_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
    }
    if ($.car1_x > -265.657 && $.car1_x < 36.828 && $.car1_y > -729.217 && $.car1_y < -275.488) {
      await asyncWait(0);
      // SCM GOTO → next_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
    }
    if ($.car1_x > 164.191 && $.car1_x < 259.713 && $.car1_y > -187.926 && $.car1_y < 631.97) {
      await asyncWait(0);
      // SCM GOTO → next_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
    }
  }

  /////////////////////////////////////////////////////////////////////
  //GENERATE TIMELIMIT
  /////////////////////////////////////////////////////////////////////

  $.fire_time_limit_float = $.players_distance_from_fire / $.time_divider;


  $.fire_time_limit_float = $.fire_time_limit_float * 1000.0;
  $.intermediate_int = $.fire_time_limit_float;
  $.fire_time_limit += $.intermediate_int;


  if ($.fires_extinguished == 0) {
    if ($.fire_time_limit < 50000) {
      $.fire_time_limit = 50000;
    }
  }

  /////////////////////////////////////////////////////////////////////
  //WAIT FOR CAR MODEL TO BE LOADED
  /////////////////////////////////////////////////////////////////////

  while (!(Streaming.HasModelLoaded($.random_car_model))) {
    await asyncWait(0);
    await do_cancelled_checks();  // SCM GOSUB do_cancelled_checks
    if ($.fail_firetruck_mission == 1) {
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }


  }

  /////////////////////////////////////////////////////////////////////
  //CREATE THE FIRE SCENE
  /////////////////////////////////////////////////////////////////////


  onfire_car_1 = Car.Create($.random_car_model, $.car1_x, $.car1_y, $.car1_z);
  $.random_car_heading = Math.RandomFloatInRange(0.0, 359.9);
  onfire_car_1.setHeading($.random_car_heading);
  $.onfire_car_1_fire = ScriptFire.CreateCarFire(onfire_car_1);
  $.onfire_car_1_blip = Blip.AddForCar(onfire_car_1);
  $.onfire_car_1_blip.changeDisplay(2 /* BLIP_ONLY */);
  onfire_car_1.setUpsidedownNotDamaged(true /* TRUE */);
  ++$.fires_needing_extinguishing;


  onfire_ped_1 = Char.CreateRandomAsDriver(onfire_car_1);
  onfire_ped_1.setOnlyDamagedByPlayer(true /* TRUE */);
  ++$.fires_needing_extinguishing;


  if ($.firetruck_level > 2) {
    onfire_ped_2 = Char.CreateRandomAsPassenger(onfire_car_1, 0);
    onfire_ped_2.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
  }


  if ($.firetruck_level > 3) {
    onfire_ped_3 = Char.CreateRandomAsPassenger(onfire_car_1, 1);
    onfire_ped_3.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
    //	temp_x = car1_x - 5.0
    //	x = temp_x + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_x x fire1_x
    //	temp_y = car1_y - 5.0
    //	y = temp_y + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_y y fire1_y
    //	START_SCRIPT_FIRE fire1_x fire1_y car1_z fire1

  }


  if ($.firetruck_level > 4) {
    $.temp_x = $.car2_x - 5.0;
    $.x = $.temp_x + 10.0;
    $.car2_x = Math.RandomFloatInRange($.temp_x, $.x);
    $.temp_y = $.car2_y - 5.0;
    $.y = $.temp_y + 10.0;
    $.car2_y = Math.RandomFloatInRange($.temp_y, $.y);
    onfire_car_2 = Car.Create($.random_car_model, $.car2_x, $.car2_y, $.car2_z);
    onfire_car_2.turnToFaceCoord($.car1_x, $.car1_y);
    $.onfire_car_2_fire = ScriptFire.CreateCarFire(onfire_car_2);
    onfire_car_2.setForwardSpeed(20.0);
    $.onfire_car_2_blip = Blip.AddForCar(onfire_car_2);
    $.onfire_car_2_blip.changeDisplay(2 /* BLIP_ONLY */);
    onfire_car_2.setUpsidedownNotDamaged(true /* TRUE */);
    ++$.fires_needing_extinguishing;
  }


  if ($.firetruck_level > 5) {
    onfire_ped_4 = Char.CreateRandomAsDriver(onfire_car_2);
    onfire_ped_4.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
    //	temp_x = car1_x - 5.0
    //	x = temp_x + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_x x fire2_x
    //	temp_y = car1_y - 5.0
    //	y = temp_y + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_y y fire2_y
    //	START_SCRIPT_FIRE fire2_x fire2_y car1_z fire2

  }


  if ($.firetruck_level > 6) {
    onfire_ped_5 = Char.CreateRandomAsPassenger(onfire_car_2, 0);
    onfire_ped_5.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
  }


  if ($.firetruck_level > 7) {
    onfire_ped_6 = Char.CreateRandomAsPassenger(onfire_car_2, 1);
    onfire_ped_6.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
    //	temp_x = car1_x - 5.0
    //	x = temp_x + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_x x fire3_x
    //	temp_y = car1_y - 5.0
    //	y = temp_y + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_y y fire3_y
    //	START_SCRIPT_FIRE fire3_x fire3_y car1_z fire3

  }


  if ($.firetruck_level > 8) {
    $.temp_x = $.car3_x - 5.0;
    $.x = $.temp_x + 10.0;
    $.car3_x = Math.RandomFloatInRange($.temp_x, $.x);
    $.temp_y = $.car3_y - 5.0;
    $.y = $.temp_y + 10.0;
    $.car3_y = Math.RandomFloatInRange($.temp_y, $.y);
    onfire_car_3 = Car.Create($.random_car_model, $.car3_x, $.car3_y, $.car3_z);
    onfire_car_3.turnToFaceCoord($.car1_x, $.car1_y);
    $.onfire_car_3_fire = ScriptFire.CreateCarFire(onfire_car_3);
    onfire_car_3.setForwardSpeed(20.0);
    $.onfire_car_3_blip = Blip.AddForCar(onfire_car_3);
    $.onfire_car_3_blip.changeDisplay(2 /* BLIP_ONLY */);
    onfire_car_3.setUpsidedownNotDamaged(true /* TRUE */);
    ++$.fires_needing_extinguishing;
  }


  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);


  if ($.firetruck_level > 9) {
    onfire_ped_7 = Char.CreateRandomAsDriver(onfire_car_3);
    onfire_ped_7.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
    //	temp_x = car1_x - 5.0
    //	x = temp_x + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_x x fire4_x
    //	temp_y = car1_y - 5.0
    //	y = temp_y + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_y y fire4_y
    //	START_SCRIPT_FIRE fire4_x fire4_y car1_z fire4

  }


  if ($.firetruck_level > 10) {
    onfire_ped_8 = Char.CreateRandomAsPassenger(onfire_car_3, 0);
    onfire_ped_8.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
  }


  if ($.firetruck_level > 11) {
    onfire_ped_9 = Char.CreateRandomAsPassenger(onfire_car_3, 1);
    onfire_ped_9.setOnlyDamagedByPlayer(true /* TRUE */);
    ++$.fires_needing_extinguishing;
    //	temp_x = car1_x - 5.0
    //	x = temp_x + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_x x fire5_x
    //	temp_y = car1_y - 5.0
    //	y = temp_y + 10.0
    //	GENERATE_RANDOM_FLOAT_IN_RANGE temp_y y fire5_y
    //	START_SCRIPT_FIRE fire5_x fire5_y car1_z fire5

  }


  if (!(Car.IsDead(onfire_car_1))) {
    onfire_car_1.setMission(11 /* MISSION_STOP_FOREVER */);
  }
  if (!(Car.IsDead(onfire_car_2))) {
    onfire_car_2.setMission(11 /* MISSION_STOP_FOREVER */);
  }
  if (!(Car.IsDead(onfire_car_3))) {
    onfire_car_3.setMission(11 /* MISSION_STOP_FOREVER */);
  }

  /////////////////////////////////////////////////////////////////////
  //DO PROMPTS & GAMEY STUFF
  /////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead(onfire_ped_1))) {
    if ($.firetruck_level < 5) {
      if (onfire_ped_1.isInZone("VICE_C")) {
        Text.PrintStringInStringNow("F_START", "VICE_C", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("BEACH1")) {
        Text.PrintStringInStringNow("F_START", "BEACH1", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("BEACH2")) {
        Text.PrintStringInStringNow("F_START", "BEACH2", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("BEACH3")) {
        Text.PrintStringInStringNow("F_START", "BEACH3", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("GOLFC")) {
        Text.PrintStringInStringNow("F_START", "GOLFC", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("STARI")) {
        Text.PrintStringInStringNow("F_START", "STARI", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("DOCKS")) {
        Text.PrintStringInStringNow("F_START", "DOCKS", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("HAVANA")) {
        Text.PrintStringInStringNow("F_START", "HAVANA", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("HAITI")) {
        Text.PrintStringInStringNow("F_START", "HAITI", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("PORNI")) {
        Text.PrintStringInStringNow("F_START", "PORNI", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("DTOWN")) {
        Text.PrintStringInStringNow("F_START", "DTOWN", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("A_PORT")) {
        Text.PrintStringInStringNow("F_START", "A_PORT", 5000, 1); //~g~Burning vehicle reported in the ~a~ area. Go and extinguish the fire.
      }
    }
    else {
      if (onfire_ped_1.isInZone("VICE_C")) {
        Text.PrintStringInStringNow("F_STAR1", "VICE_C", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("BEACH1")) {
        Text.PrintStringInStringNow("F_STAR1", "BEACH1", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("BEACH2")) {
        Text.PrintStringInStringNow("F_STAR1", "BEACH2", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("BEACH3")) {
        Text.PrintStringInStringNow("F_STAR1", "BEACH3", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("GOLFC")) {
        Text.PrintStringInStringNow("F_STAR1", "GOLFC", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("STARI")) {
        Text.PrintStringInStringNow("F_STAR1", "STARI", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("DOCKS")) {
        Text.PrintStringInStringNow("F_STAR1", "DOCKS", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("HAVANA")) {
        Text.PrintStringInStringNow("F_STAR1", "HAVANA", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("HAITI")) {
        Text.PrintStringInStringNow("F_STAR1", "HAITI", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("PORNI")) {
        Text.PrintStringInStringNow("F_STAR1", "PORNI", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("DTOWN")) {
        Text.PrintStringInStringNow("F_STAR1", "DTOWN", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
      if (onfire_ped_1.isInZone("A_PORT")) {
        Text.PrintStringInStringNow("F_STAR1", "A_PORT", 5000, 1); //~g~Burning vehicles reported in the ~a~ area. Go and extinguish the fire.
      }
    }
  }


  Text.PrintWithNumber("FIRELVL", $.firetruck_level, 3000, 1); //"Fire Truck Mission level ~1~"


  if ($.firetruck_level == 1) {
    --$.fires_needing_extinguishing;
    onfire_ped_1.delete();
  }


  if ($.got_siren_help_before == 1) {
    $.controlmode = Pad.GetControllerMode();
    if ($.controlmode == 0) {
      Text.PrintHelp("SIREN_1");
    }
    if ($.controlmode > 0) {
      Text.PrintHelp("SIREN_2");
    }
    $.got_siren_help_before = 2;
  }


  if ($.got_siren_help_before == 0) {
    $.controlmode = Pad.GetControllerMode();
    if ($.controlmode < 3) {
      Text.PrintHelp("SPRAY_1"); //Use the ~o~| ~w~button to fire the water cannon.
    }
    if ($.controlmode == 3) {
      Text.PrintHelp("SPRAY_4"); //Use the ~o~| ~w~button to fire the water cannon.
    }
    $.got_siren_help_before = 1;
  }


  if ($.displayed_timer == 0) {
    Hud.DisplayTimer($.$id.fire_time_limit, TIMER_DOWN);
    $.displayed_timer = 1;
  }
  else {
    Hud.FreezeTimer(false /* FALSE */);
  }


  $.firetruck_level_minus_4 = $.firetruck_level - 4;


  $.game_timer = Clock.GetGameTimer();
  $.car_health_test_timer = $.game_timer + 3000;
}


/////////////////////////////////////////////////////////////////////

async function firetruck_mission_loop() {
  // SCM GOTO → firetruck_mission_loop lowered to endless loop
  while (true) {
    /////////////////////////////////////////////////////////////////////


    if ($.fail_firetruck_mission == 1) {
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }


    await asyncWait(0);


    $.game_timer = Clock.GetGameTimer();


    await do_cancelled_checks();  // SCM GOSUB do_cancelled_checks
    if ($.fail_firetruck_mission == 1) {
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }


    onfire_car = onfire_car_1;
    $.onfire_car_fire = $.onfire_car_1_fire;
    $.onfire_car_flag = $.onfire_car_1_flag;
    $.onfire_car_blip = $.onfire_car_1_blip;
    await do_fire_on_car_bit();  // SCM GOSUB do_fire_on_car_bit
    $.onfire_car_1_fire = $.onfire_car_fire;
    $.onfire_car_1_flag = $.onfire_car_flag;
    $.onfire_car_1_blip = $.onfire_car_blip;


    if ($.firetruck_level > 1) {
      onfire_ped = onfire_ped_1;
      $.onfire_ped_flag = $.onfire_ped_1_flag;
      $.onfire_ped_fire = $.onfire_ped_1_fire;
      $.onfire_ped_blip = $.onfire_ped_1_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_1_flag = $.onfire_ped_flag;
      $.onfire_ped_1_fire = $.onfire_ped_fire;
      $.onfire_ped_1_blip = $.onfire_ped_blip;
    }


    if ($.firetruck_level > 2) {
      onfire_ped = onfire_ped_2;
      $.onfire_ped_flag = $.onfire_ped_2_flag;
      $.onfire_ped_fire = $.onfire_ped_2_fire;
      $.onfire_ped_blip = $.onfire_ped_2_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_2_flag = $.onfire_ped_flag;
      $.onfire_ped_2_fire = $.onfire_ped_fire;
      $.onfire_ped_2_blip = $.onfire_ped_blip;
    }


    if ($.firetruck_level > 3) {
      onfire_ped = onfire_ped_3;
      $.onfire_ped_flag = $.onfire_ped_3_flag;
      $.onfire_ped_fire = $.onfire_ped_3_fire;
      $.onfire_ped_blip = $.onfire_ped_3_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_3_flag = $.onfire_ped_flag;
      $.onfire_ped_3_fire = $.onfire_ped_fire;
      $.onfire_ped_3_blip = $.onfire_ped_blip;
      //		fire = fire1
      //		fire_flag = fire1_flag
      //		GOSUB do_fire_on_ground_bit
      //		fire1_flag = fire_flag

    }


    if ($.firetruck_level > 4) {
      onfire_car = onfire_car_2;
      $.onfire_car_fire = $.onfire_car_2_fire;
      $.onfire_car_flag = $.onfire_car_2_flag;
      $.onfire_car_blip = $.onfire_car_2_blip;
      await do_fire_on_car_bit();  // SCM GOSUB do_fire_on_car_bit
      $.onfire_car_2_fire = $.onfire_car_fire;
      $.onfire_car_2_flag = $.onfire_car_flag;
      $.onfire_car_2_blip = $.onfire_car_blip;
    }


    if ($.firetruck_level > 5) {
      onfire_ped = onfire_ped_4;
      $.onfire_ped_flag = $.onfire_ped_4_flag;
      $.onfire_ped_fire = $.onfire_ped_4_fire;
      $.onfire_ped_blip = $.onfire_ped_4_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_4_flag = $.onfire_ped_flag;
      $.onfire_ped_4_fire = $.onfire_ped_fire;
      $.onfire_ped_4_blip = $.onfire_ped_blip;
      //		fire = fire2
      //		fire_flag = fire2_flag
      //		GOSUB do_fire_on_ground_bit
      //		fire2_flag = fire_flag

    }


    if ($.firetruck_level > 6) {
      onfire_ped = onfire_ped_5;
      $.onfire_ped_flag = $.onfire_ped_5_flag;
      $.onfire_ped_fire = $.onfire_ped_5_fire;
      $.onfire_ped_blip = $.onfire_ped_5_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_5_flag = $.onfire_ped_flag;
      $.onfire_ped_5_fire = $.onfire_ped_fire;
      $.onfire_ped_5_blip = $.onfire_ped_blip;
    }


    if ($.firetruck_level > 7) {
      onfire_ped = onfire_ped_6;
      $.onfire_ped_flag = $.onfire_ped_6_flag;
      $.onfire_ped_fire = $.onfire_ped_6_fire;
      $.onfire_ped_blip = $.onfire_ped_6_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_6_flag = $.onfire_ped_flag;
      $.onfire_ped_6_fire = $.onfire_ped_fire;
      $.onfire_ped_6_blip = $.onfire_ped_blip;
      //		fire = fire3
      //		fire_flag = fire3_flag
      //		GOSUB do_fire_on_ground_bit
      //		fire3_flag = fire_flag

    }


    if ($.firetruck_level > 8) {
      onfire_car = onfire_car_3;
      $.onfire_car_fire = $.onfire_car_3_fire;
      $.onfire_car_flag = $.onfire_car_3_flag;
      $.onfire_car_blip = $.onfire_car_3_blip;
      await do_fire_on_car_bit();  // SCM GOSUB do_fire_on_car_bit
      $.onfire_car_3_fire = $.onfire_car_fire;
      $.onfire_car_3_flag = $.onfire_car_flag;
      $.onfire_car_3_blip = $.onfire_car_blip;
    }


    if ($.firetruck_level > 9) {
      onfire_ped = onfire_ped_7;
      $.onfire_ped_flag = $.onfire_ped_7_flag;
      $.onfire_ped_fire = $.onfire_ped_7_fire;
      $.onfire_ped_blip = $.onfire_ped_7_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_7_flag = $.onfire_ped_flag;
      $.onfire_ped_7_fire = $.onfire_ped_fire;
      $.onfire_ped_7_blip = $.onfire_ped_blip;
      //		fire = fire4
      //		fire_flag = fire4_flag
      //		GOSUB do_fire_on_ground_bit
      //		fire4_flag = fire_flag

    }


    if ($.firetruck_level > 10) {
      onfire_ped = onfire_ped_8;
      $.onfire_ped_flag = $.onfire_ped_8_flag;
      $.onfire_ped_fire = $.onfire_ped_8_fire;
      $.onfire_ped_blip = $.onfire_ped_8_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_8_flag = $.onfire_ped_flag;
      $.onfire_ped_8_fire = $.onfire_ped_fire;
      $.onfire_ped_8_blip = $.onfire_ped_blip;
    }


    if ($.firetruck_level > 11) {
      onfire_ped = onfire_ped_9;
      $.onfire_ped_flag = $.onfire_ped_9_flag;
      $.onfire_ped_fire = $.onfire_ped_9_fire;
      $.onfire_ped_blip = $.onfire_ped_9_blip;
      await do_fire_on_ped_bit();  // SCM GOSUB do_fire_on_ped_bit
      $.onfire_ped_9_flag = $.onfire_ped_flag;
      $.onfire_ped_9_fire = $.onfire_ped_fire;
      $.onfire_ped_9_blip = $.onfire_ped_blip;
      //		fire = fire5
      //		fire_flag = fire5_flag
      //		GOSUB do_fire_on_ground_bit
      //		fire5_flag = fire_flag

    }

    //	IF firetruck_level > 12
    //		IF fires_extinguished_this_round = 12
    //			GOTO passed
    //		ENDIF
    //	ELSE

    if ($.fires_extinguished_this_round == $.fires_needing_extinguishing) {
      // SCM GOTO → passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO passed"); // fallback: would break linear control flow
    }
    //	ENDIF


  }
}




/////////////////////////////////////////////////////////////////////

async function do_cancelled_checks() {
  /////////////////////////////////////////////////////////////////////

  if ($.displayed_timer == 1) {
    if ($.fire_time_limit < 1) {
      Text.PrintNow("F_FAIL2", 5000, 1);
      $.fail_firetruck_mission = 1;
      return;
    }
  }


  if (!($.player1.isInModel(FIRETRUK))) {
    Text.PrintNow("F_CANC", 3000, 1); //"Fire truck mission cancelled!"
    $.fail_firetruck_mission = 1;
    return;
  }


  $.controlmode = Pad.GetControllerMode();


  if (!($.controlmode == 3)) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      $.mission_end_button_ft = 1;
    }
  }
  else {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.mission_end_button_ft = 1;
    }
  }


  if ($.mission_end_button_ft == 1) {
    if (!($.controlmode == 3)) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
        Text.PrintNow("F_CANC", 3000, 1); //"Fire truck mission cancelled!"
        $.fail_firetruck_mission = 1;
        return;
      }
    }
    else {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
        Text.PrintNow("F_CANC", 3000, 1); //"Fire truck mission cancelled!"
        $.fail_firetruck_mission = 1;
        return;
      }
    }
  }
}



/////////////////////////////////////////////////////////////////////

async function do_fire_on_car_bit() {
  /////////////////////////////////////////////////////////////////////

  if (!($.onfire_car_flag == 10)) {
    if (!(Car.IsDead(onfire_car))) {
      if (!($.onfire_car_fire.isExtinguished())) {
        $.onfire_car_health = onfire_car.getHealth();
        if ($.car_health_test_timer < $.game_timer) {
          if ($.onfire_car_health < 700) {
            onfire_car.explode();
            Text.PrintNow("F_FAIL2", 5000, 1);
            $.fail_firetruck_mission = 1;
            return;
          }
        }
        else {
          onfire_car.setHealth(1000);
        }
        if ($.onfire_car_flag == 0) {
          if ($.fires_extinguished_this_round == $.firetruck_level_minus_4) {
            onfire_car.wanderRandomly();
            onfire_car.setCruiseSpeed(20.0);
            onfire_car.setDrivingStyle(2);
            onfire_car.setOnlyDamagedByPlayer(true /* TRUE */);
            $.onfire_car_flag = 1;
          }
        }
      }
      else {
        if (!($.onfire_car_flag == 10)) {
          $.onfire_car_blip.remove();
          onfire_car.setAllOccupantsLeave();
          Stat.RegisterFireExtinguished();
          if ($.displayed_counter == 0) {
            Hud.DisplayCounterWithString($.$id.fires_extinguished, 0 /* COUNTER_DISPLAY_NUMBER */, "F_EXTIN");
            $.displayed_counter = 1;
          }
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.onfire_car_flag = 10;
          ++$.fires_extinguished;
          ++$.fires_extinguished_this_round;
        }
      }
    }
    else {
      if (onfire_car.isInWater()) {
        if (!($.onfire_car_flag == 10)) {
          $.onfire_car_blip.remove();
          onfire_car.setAllOccupantsLeave();
          Stat.RegisterFireExtinguished();
          if ($.displayed_counter == 0) {
            Hud.DisplayCounterWithString($.$id.fires_extinguished, 0 /* COUNTER_DISPLAY_NUMBER */, "F_EXTIN");
            $.displayed_counter = 1;
          }
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.onfire_car_flag = 10;
          ++$.fires_extinguished;
          ++$.fires_extinguished_this_round;
        }
      }
      else {
        Text.PrintNow("F_FAIL2", 5000, 1);
        $.fail_firetruck_mission = 1;
        return;
      }
    }
  }
}



/////////////////////////////////////////////////////////////////////

async function do_fire_on_ped_bit() {
  /////////////////////////////////////////////////////////////////////

  if ($.onfire_ped_flag < 2) {
    if (!(Char.IsDead(onfire_ped))) {
      if ($.onfire_ped_flag == 0) {
        if (!(onfire_ped.isInAnyCar())) {
          $.onfire_ped_fire = ScriptFire.CreateCharFire(onfire_ped);
          onfire_ped.setObjFleePlayerOnFootAlways($.player1);
          $.onfire_ped_blip = Blip.AddForChar(onfire_ped);
          $.onfire_ped_blip.changeDisplay(2 /* BLIP_ONLY */);
          $.onfire_ped_flag = 1;
        }
      }
      if ($.onfire_ped_flag == 1) {
        if ($.onfire_ped_fire.isExtinguished()) {
          $.onfire_ped_blip.remove();
          Stat.RegisterFireExtinguished();
          if ($.displayed_counter == 0) {
            Hud.DisplayCounterWithString($.$id.fires_extinguished, 0 /* COUNTER_DISPLAY_NUMBER */, "F_EXTIN");
            $.displayed_counter = 1;
          }
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          ++$.fires_extinguished;
          ++$.fires_extinguished_this_round;
          $.onfire_ped_flag = 2;
        }
      }
    }
    else {
      if (onfire_ped.isInWater()) {
        if ($.onfire_ped_flag == 1) {
          $.onfire_ped_fire.remove();
          $.onfire_ped_blip.remove();
          Stat.RegisterFireExtinguished();
          if ($.displayed_counter == 0) {
            Hud.DisplayCounterWithString($.$id.fires_extinguished, 0 /* COUNTER_DISPLAY_NUMBER */, "F_EXTIN");
            $.displayed_counter = 1;
          }
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          ++$.fires_extinguished;
          ++$.fires_extinguished_this_round;
          $.onfire_ped_flag = 2;
        }
        else {
          Text.PrintNow("F_FAIL2", 5000, 1);
          $.fail_firetruck_mission = 1;
          return;
        }
      }
      else {
        Text.PrintNow("F_FAIL2", 5000, 1);
        $.fail_firetruck_mission = 1;
        return;
      }
    }
  }
}



/////////////////////////////////////////////////////////////////////////
//do_fire_on_ground_bit:
/////////////////////////////////////////////////////////////////////////
//IF IS_SCRIPT_FIRE_EXTINGUISHED fire
//	IF fire_flag = 0
//		IF IS_SCRIPT_FIRE_EXTINGUISHED fire
//			REGISTER_FIRE_EXTINGUISHED
//			IF displayed_counter = 0
//				DISPLAY_ONSCREEN_COUNTER_WITH_STRING fires_extinguished	COUNTER_DISPLAY_NUMBER F_EXTIN
//				displayed_counter = 1
//			ENDIF
//			ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
//			++ fires_extinguished
//			++ fires_extinguished_this_round
//			fire_flag = 1
//		ENDIF
//	ENDIF
//ENDIF
//RETURN



/////////////////////////////////////////////////////////////////////

async function passed() {
  /////////////////////////////////////////////////////////////////////


  Hud.FreezeTimer(true /* TRUE */);


  Text.PrintBig("F_PASS1", 5000, 5);
  $.score_ft = $.firetruck_level * $.firetruck_level;
  $.score_ft *= 50;
  $.total_score += $.score_ft;
  Text.PrintWithNumberBig("REWARD", $.score_ft, 6000, 6);
  $.player1.addScore($.score_ft);


  if ($.firetruck_level > 11) {
    if ($.done_firetruck_progress == 0) {
      $.player1.makeFireProof(true /* TRUE */);
      Text.PrintHelp("FIREPRO");
      Stat.PlayerMadeProgress(1);
      Stat.RegisterOddjobMissionPassed();
      $.done_firetruck_progress = 1;
    }
  }


  Stat.RegisterFireLevel($.firetruck_level);


  ++$.firetruck_level;


  World.RemoveAllScriptFires();


  $.onfire_car_blip.remove();
  $.onfire_car_1_blip.remove();
  $.onfire_car_2_blip.remove();
  $.onfire_car_3_blip.remove();
  $.onfire_ped_blip.remove();
  $.onfire_ped_1_blip.remove();
  $.onfire_ped_2_blip.remove();
  $.onfire_ped_3_blip.remove();
  $.onfire_ped_4_blip.remove();
  $.onfire_ped_5_blip.remove();
  $.onfire_ped_6_blip.remove();
  $.onfire_ped_7_blip.remove();
  $.onfire_ped_8_blip.remove();
  $.onfire_ped_9_blip.remove();


  if ($.player1.isInAnyCar()) {
    $.players_car = $.player1.storeCarIsIn();
    $.players_car_health = $.players_car.getHealth();
    $.players_car_health += 150;
    $.players_car.setHealth($.players_car_health);
  }


  onfire_car_1.markAsNoLongerNeeded();
  if (!(Car.IsDead(onfire_car_1))) {
    onfire_car_1.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  onfire_car_2.markAsNoLongerNeeded();
  if (!(Car.IsDead(onfire_car_2))) {
    onfire_car_2.setOnlyDamagedByPlayer(false /* FALSE */);
  }


  onfire_car_3.markAsNoLongerNeeded();
  if (!(Car.IsDead(onfire_car_3))) {
    onfire_car_3.setOnlyDamagedByPlayer(false /* FALSE */);
  }

  //DELETE_CHAR onfire_ped_1//DEBUG!!!!
  //DELETE_CHAR onfire_ped_2//DEBUG!!!!
  //DELETE_CHAR onfire_ped_3//DEBUG!!!!
  //DELETE_CHAR onfire_ped_4//DEBUG!!!!
  //DELETE_CHAR onfire_ped_5//DEBUG!!!!
  //DELETE_CHAR onfire_ped_6//DEBUG!!!!
  //DELETE_CHAR onfire_ped_7//DEBUG!!!!
  //DELETE_CHAR onfire_ped_8//DEBUG!!!!
  //DELETE_CHAR onfire_ped_9//DEBUG!!!!


  onfire_ped_1.markAsNoLongerNeeded();
  onfire_ped_2.markAsNoLongerNeeded();
  onfire_ped_3.markAsNoLongerNeeded();
  onfire_ped_4.markAsNoLongerNeeded();
  onfire_ped_5.markAsNoLongerNeeded();
  onfire_ped_6.markAsNoLongerNeeded();
  onfire_ped_7.markAsNoLongerNeeded();
  onfire_ped_8.markAsNoLongerNeeded();
  onfire_ped_9.markAsNoLongerNeeded();


  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);


  // SCM GOTO → fire_generation_start (not lowered; manual jump required)
  throw new Error("unresolved GOTO fire_generation_start"); // fallback: would break linear control flow
}



/////////////////////////////////////////////////////////////////////

async function cleanup() {
  /////////////////////////////////////////////////////////////////////


  Hud.ClearTimer($.$id.fire_time_limit);
  Hud.ClearCounter($.$id.fires_extinguished);
  Text.PrintBig("F_FAIL1", 5000, 5);
  Text.PrintWithNumberBig("TSCORE", $.total_score, 6000, 6);
  World.RemoveAllScriptFires();
  Game.SetWantedMultiplier(1.0);


  $.onfire_car_blip.remove();
  $.onfire_car_1_blip.remove();
  $.onfire_car_2_blip.remove();
  $.onfire_car_3_blip.remove();
  $.onfire_ped_blip.remove();
  $.onfire_ped_1_blip.remove();
  $.onfire_ped_2_blip.remove();
  $.onfire_ped_3_blip.remove();
  $.onfire_ped_4_blip.remove();
  $.onfire_ped_5_blip.remove();
  $.onfire_ped_6_blip.remove();
  $.onfire_ped_7_blip.remove();
  $.onfire_ped_8_blip.remove();
  $.onfire_ped_9_blip.remove();


  if (!(Char.IsDead(onfire_ped_1))) {
    onfire_ped_1.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_1.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_2))) {
    onfire_ped_2.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_2.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_3))) {
    onfire_ped_3.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_3.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_4))) {
    onfire_ped_4.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_4.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_5))) {
    onfire_ped_5.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_5.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_6))) {
    onfire_ped_6.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_6.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_7))) {
    onfire_ped_7.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_7.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_8))) {
    onfire_ped_8.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_8.explodeHead();
  }
  if (!(Char.IsDead(onfire_ped_9))) {
    onfire_ped_9.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_ped_9.explodeHead();
  }


  if (!(Car.IsDead(onfire_car_1))) {
    onfire_car_1.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_car_1.explode();
  }
  if (!(Car.IsDead(onfire_car_2))) {
    onfire_car_2.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_car_2.explode();
  }
  if (!(Car.IsDead(onfire_car_3))) {
    onfire_car_3.setOnlyDamagedByPlayer(false /* FALSE */);
    onfire_car_3.explode();
  }


  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);


  $.timer_mobile_start = Clock.GetGameTimer();


  ONMISSION = 0;
  $.flag_player_on_fire_mission = 0;
  Mission.Finish();
}

export async function firetruck() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_fire


  await cleanup();  // SCM GOSUB failed



  // Variables for mission

  //PEDS CARS OBJECTS FIRES ETC

  // VAR_INT onfire_car_fire onfire_car_1_fire onfire_car_2_fire onfire_car_3_fire
  // VAR_INT onfire_ped_fire onfire_ped_1_fire onfire_ped_2_fire onfire_ped_3_fire onfire_ped_4_fire
  // VAR_INT onfire_ped_5_fire onfire_ped_6_fire onfire_ped_7_fire onfire_ped_8_fire onfire_ped_9_fire
  //VAR_INT fire fire1 fire2 fire3 fire4 fire5
  //BLIPS

  // VAR_INT onfire_car_blip onfire_car_1_blip onfire_car_2_blip onfire_car_3_blip
  // VAR_INT onfire_ped_blip onfire_ped_1_blip onfire_ped_2_blip onfire_ped_3_blip onfire_ped_4_blip
  // VAR_INT onfire_ped_5_blip onfire_ped_6_blip onfire_ped_7_blip onfire_ped_8_blip onfire_ped_9_blip
  //FLAGS TIMERS COUNTER ETC

  // VAR_INT fire_time_limit fail_firetruck_mission intermediate_int score_ft
  // VAR_INT displayed_timer displayed_counter fires_extinguished firetruck_level mission_end_button_ft
  // VAR_INT total_score players_car_health firetruck_level_minus_4 fires_extinguished_this_round
  // VAR_INT onfire_car_health fires_needing_extinguishing car_health_test_timer
  // VAR_INT onfire_car_flag onfire_car_1_flag onfire_car_2_flag onfire_car_3_flag
  // VAR_INT onfire_ped_flag onfire_ped_1_flag onfire_ped_2_flag onfire_ped_3_flag onfire_ped_4_flag
  // VAR_INT onfire_ped_5_flag onfire_ped_6_flag onfire_ped_7_flag onfire_ped_8_flag onfire_ped_9_flag
  //VAR_INT fire_flag fire1_flag fire2_flag fire3_flag fire4_flag	fire5_flag
  //COORD MATHS

  // VAR_FLOAT time_divider
  // VAR_FLOAT players_distance_from_fire fire_time_limit_float random_car_heading
  //VAR_FLOAT fire1_x fire1_y fire2_x fire2_y fire3_x fire3_y fire4_x fire4_y fire5_x fire5_y

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE stuff
  //VAR_INT	random_int random_car_model	players_car
  //VAR_FLOAT car1_x car1_y car1_z car2_x car2_y car2_z car3_x car3_y car3_z
  //VAR_FLOAT dx dy temp_x temp_y temp_xy sum_x_y_temp

  // ****************************************Mission Start************************************


}
