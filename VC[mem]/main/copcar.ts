// Generated from main/copcar.sc

import { $ } from "../utils/vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// ********************************* Copcar oddjob *****************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  ONMISSION = 1;


  // SCRIPT_NAME copcar


  await asyncWait(0);


  if ($.done_copcar_progress == 0) {
    Stat.RegisterMissionGiven();
  }


  // LVAR_FLOAT criminal2_x criminal2_y
  // LVAR_FLOAT criminal2_car_stuck_x criminal2_car_stuck_y criminal2_car_stuck_z criminal2_car_speed
  // LVAR_FLOAT criminal3_x criminal3_y
  // LVAR_FLOAT criminal3_car_stuck_x criminal3_car_stuck_y criminal3_car_stuck_z criminal3_car_speed
  // LVAR_INT criminal3_car_stuck_timer_start criminal3_car_stuck_flag


  Text.LoadMissionText("COPCAR");

  //flag_baron_mission2_passed = 1//DEBUG!!!!


  $.copcar_level = 0;
  $.cop_time_limit = -100;
  $.copcar_cancelled_flag = 0;
  $.total_criminals_killed = 0;
  $.timer_on_screen_flag = 0;
  $.mission_end_button = 0;
  $.break_convoy_flag = 0;
  $.game_timer_start = 0;
  $.players_cop_car_health = 0;
  $.vigilante_score = 0;
  $.num_of_followers = 0;
  $.copcar_timer = 0;
  $.game_time_flag = 0;
  $.game_time_present = 0;
  $.game_time_difference = 0;
  $.timer_in_secs = 0;
  $.cop_time_limit_int = 0;
  $.random_car_model = 0;
  $.random_ped_model = 0;
  $.time_bonus_divider = 4.0;
  $.wanted_level_multiplier = 1.0;
  $.in_copcar_nice_timer = 0;


  $.heading = 0.0;
  $.gosub_car_to_slow_speed = 0.0;


  $.criminal1_car_stuck_x = 0.0;
  $.criminal1_car_stuck_y = 0.0;
  $.criminal1_car_stuck_z = 0.0;
  $.criminal1_car_speed = 0.0;


  criminal2_car_stuck_x = 0.0;
  criminal2_car_stuck_y = 0.0;
  criminal2_car_stuck_z = 0.0;
  criminal2_car_speed = 0.0;


  criminal3_car_stuck_x = 0.0;
  criminal3_car_stuck_y = 0.0;
  criminal3_car_stuck_z = 0.0;
  criminal3_car_speed = 0.0;


  Streaming.RequestModel(COLT45);
  Streaming.RequestModel(TEC9);
  Streaming.RequestModel(RUGER);
  Streaming.RequestModel(CHROMEGUN);
  Streaming.RequestModel(MACHETE);
  Streaming.RequestModel(BAT);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(COLT45)) || !(Streaming.HasModelLoaded(TEC9)) || !(Streaming.HasModelLoaded(RUGER)) || !(Streaming.HasModelLoaded(CHROMEGUN))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(MACHETE)) || !(Streaming.HasModelLoaded(BAT))) {
    await asyncWait(0);
  }


  Char.SetEnterCarRangeMultiplier(6.0);
  Char.SetThreatReactionRangeMultiplier(3.0);


  if ($.player1.isInAnyCar()) {
    $.players_cop_car = $.player1.storeCarIsInNoSave();
    $.players_cop_car.setCanBurstTires(false /* FALSE */);
  }
}



async function next_criminal_to_kill() {


  $.criminal1_team_dead_flag = 0;
  $.criminal2_team_dead_flag = 0;
  $.criminal3_team_dead_flag = 0;
  $.break_convoy_flag = 0;


  $.criminal1_in_car_flag = 0;
  $.criminal1_car_stuck_timer_start = 0;
  $.criminal1_car_stuck_flag = 0;
  $.criminal1_dead_flag = 0;
  $.criminal1_thug1_dead_flag = 0;
  $.criminal1_thug2_dead_flag = 0;
  $.criminal1_thug3_dead_flag = 0;


  $.criminal2_in_car_flag = 0;
  $.criminal2_car_stuck_timer_start = 0;
  $.criminal2_car_stuck_flag = 0;
  $.criminal2_dead_flag = 0;
  $.criminal2_thug1_dead_flag = 0;
  $.criminal2_thug2_dead_flag = 0;
  $.criminal2_thug3_dead_flag = 0;


  $.criminal3_in_car_flag = 0;
  criminal3_car_stuck_timer_start = 0;
  criminal3_car_stuck_flag = 0;
  $.criminal3_dead_flag = 0;
  $.criminal3_thug1_dead_flag = 0;
  $.criminal3_thug2_dead_flag = 0;
  $.criminal3_thug3_dead_flag = 0;


  $.car1_infront_car2 = 0.0;
  $.car2_infront_car1 = 0.0;


  $.car2_infront_car3 = 0.0;
  $.car3_infront_car2 = 0.0;


  $.frame_counter = 0;


  await request_random_car_model();  // SCM GOSUB request_random_car_model


  $.random_ped_model = Math.RandomIntInRange(9, 95);
  Streaming.RequestModel($.random_ped_model);
}



async function get_random_car_coords() {


  await copcar_cancelled_checks();  // SCM GOSUB copcar_cancelled_checks
  if ($.copcar_cancelled_flag == 1) {
    // SCM GOTO → copcar_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
  }


  const _res131 = $.player1.getCoordinates();
$.player_x = _res131.x;
$.player_y = _res131.y;
$.z = _res131.z;
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


  $.car1_z = 10.0;
  if ($.copcar_level < 4) {
    const _res132 = Path.GetClosestCarNodeWithHeading($.car1_x, $.car1_y, $.car1_z);
$.car1_x = _res132.nodeX;
$.car1_y = _res132.nodeY;
$.car1_z = _res132.nodeZ;
$.random_heading = _res132.angle;
    $.car1_z += 0.5;
  }


  if ($.copcar_level > 3 && $.copcar_level < 8) {
    const _res133 = Path.GetClosestStraightRoad($.car1_x, $.car1_y, $.car1_z, 8.0, 500.0);
$.car1_x = _res133.node1X;
$.car1_y = _res133.node1Y;
$.car1_z = _res133.node1Z;
$.car2_x = _res133.node2X;
$.car2_y = _res133.node2Y;
$.car2_z = _res133.node2Z;
$.random_heading = _res133.angle;
    if ($.car1_x == 0.0 && $.car1_y == 0.0 && $.car2_x == 0.0 && $.car2_y == 0.0) {
      await asyncWait(0);
      // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
    }
    //MAKES THE DISTANCE BETWEEN CAR1_XYZ AND CAR2_XYZ EQUAL TO MINLENGTH OF STRAIGHT ROAD (8.0)
    $.dx = $.car2_x - $.car1_x;
    $.dy = $.car2_y - $.car1_y;
    $.temp_x = $.dx * $.dx;
    $.temp_y = $.dy * $.dy;
    $.temp_xy = $.temp_x + $.temp_y;
    $.temp_xy = Math.Sqrt($.temp_xy);
    $.sum_x_y_temp = 8.0 / $.temp_xy;
    $.temp_x = $.dx * $.sum_x_y_temp;
    $.car2_x = $.car1_x + $.temp_x;
    $.temp_y = $.dy * $.sum_x_y_temp;
    $.car2_y = $.car1_y + $.temp_y;

    //BRINGS THE CAR1_XYZ BACK TOWARDS CAR2_XYZ BY 2.0 METERS
    $.sum_x_y_temp = 2.0 / $.temp_xy;
    $.temp_x = $.dx * $.sum_x_y_temp;
    $.car1_x = $.car1_x + $.temp_x;
    $.temp_y = $.dy * $.sum_x_y_temp;
    $.car1_y = $.car1_y + $.temp_y;
    $.car1_z += 0.5;
    $.car2_z += 0.5;
  }


  if ($.copcar_level > 7 && $.copcar_level < 12) {
    const _res134 = Path.GetClosestStraightRoad($.car1_x, $.car1_y, $.car1_z, 13.0, 500.0);
$.car1_x = _res134.node1X;
$.car1_y = _res134.node1Y;
$.car1_z = _res134.node1Z;
$.car3_x = _res134.node2X;
$.car3_y = _res134.node2Y;
$.car3_z = _res134.node2Z;
$.random_heading = _res134.angle;
    if ($.car1_x == 0.0 && $.car1_y == 0.0 && $.car3_x == 0.0 && $.car3_y == 0.0) {
      await asyncWait(0);
      // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
    }

    //MAKES THE DISTANCE BETWEEN CAR1_XYZ AND CAR3_XYZ EQUAL TO MINLENGTH OF STRAIGHT ROAD (13.0)
    $.dx = $.car3_x - $.car1_x;
    $.dy = $.car3_y - $.car1_y;
    $.temp_x = $.dx * $.dx;
    $.temp_y = $.dy * $.dy;
    $.temp_xy = $.temp_x + $.temp_y;
    $.temp_xy = Math.Sqrt($.temp_xy);
    $.sum_x_y_temp = 13.0 / $.temp_xy;
    $.temp_x = $.dx * $.sum_x_y_temp;
    $.car3_x = $.car1_x + $.temp_x;
    $.temp_y = $.dy * $.sum_x_y_temp;
    $.car3_y = $.car1_y + $.temp_y;

    //BRINGS THE CAR1_XYZ BACK TOWARDS CAR3_XYZ BY 2.0 METERS
    $.sum_x_y_temp = 2.0 / $.temp_xy;
    $.temp_x = $.dx * $.sum_x_y_temp;
    $.car1_x = $.car1_x + $.temp_x;
    $.temp_y = $.dy * $.sum_x_y_temp;
    $.car1_y = $.car1_y + $.temp_y;

    //WORKS OUT THE MIDDLE POINT OF CAR1_XYZ AND CAR3_XYZ
    $.car2_x = $.car1_x - $.car3_x;
    $.car2_x = $.car2_x / 2.0;
    $.car2_x = $.car2_x + $.car3_x;
    $.car2_y = $.car1_y - $.car3_y;
    $.car2_y = $.car2_y / 2.0;
    $.car2_y = $.car2_y + $.car3_y;
    $.car2_z = $.car1_z - $.car3_z;
    $.car2_z = $.car2_z / 2.0;
    $.car2_z = $.car2_z + $.car3_z;
    $.car1_z += 0.5;
    $.car2_z += 0.5;
    $.car3_z += 0.5;
  }


  if ($.car1_z < 7.0) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }


  const _res135 = $.player1.getCoordinates();
$.player_x = _res135.x;
$.player_y = _res135.y;
$.player_z = _res135.z;
  $.distance_from_player = Math.GetDistanceBetweenCoords2D($.player_x, $.player_y, $.car1_x, $.car1_y);


  if ($.distance_from_player < 150.0 || $.distance_from_player > 600.0) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }
  //STADIUM

  if ($.car1_x > -1905.785 && $.car1_x < -1105.785 && $.car1_y > 745.678 && $.car1_y < 1773.513) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }
  //GOLF COURSE & PORN

  if ($.car1_x > -265.018 && $.car1_x < 170.188 && $.car1_y > -275.942 && $.car1_y < 1689.059) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }
  //MORE GOLFCOURSE

  if ($.car1_x > 164.191 && $.car1_x < 259.713 && $.car1_y > -187.926 && $.car1_y < 631.97) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }
  //GOLFCOURSE BRIDGE

  if ($.car1_x > -731.729 && $.car1_x < -263.334 && $.car1_y > -4.399 && $.car1_y < 62.853) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }
  //STARISLAND BRIDGE

  if ($.car1_x > -180.88 && $.car1_x < 64.112 && $.car1_y > -499.183 && $.car1_y < -417.519) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }
  //STARISLAND

  if ($.car1_x > -762.855 && $.car1_x < -172.566 && $.car1_y > -667.099 && $.car1_y < -224.382) {
    await asyncWait(0);
    // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
  }


  if ($.flag_baron_mission2_passed == 0) {
    if ($.car1_x > -2327.212 && $.car1_x < -261.402 && $.car1_y > -2027.821 && $.car1_y < 1894.426) {
      await asyncWait(0);
      // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
    }
    if ($.car1_x > -265.018 && $.car1_x < 170.188 && $.car1_y > -275.942 && $.car1_y < 1689.059) {
      await asyncWait(0);
      // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
    }
    if ($.car1_x > -265.657 && $.car1_x < 36.828 && $.car1_y > -729.217 && $.car1_y < -275.488) {
      await asyncWait(0);
      // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
    }
    if ($.car1_x > 164.191 && $.car1_x < 259.713 && $.car1_y > -187.926 && $.car1_y < 631.97) {
      await asyncWait(0);
      // SCM GOTO → get_random_car_coords (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_random_car_coords"); // fallback: would break linear control flow
    }
  }


  $.random_seed = Math.Random();
  while ($.random_seed == 0) {
    $.random_seed = Math.Random();
  }


  while (!(Streaming.HasModelLoaded($.random_car_model)) || !(Streaming.HasModelLoaded($.random_ped_model))) {
    await asyncWait(0);
    await copcar_cancelled_checks();  // SCM GOSUB copcar_cancelled_checks
    if ($.copcar_cancelled_flag == 1) {
      // SCM GOTO → copcar_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
    }


  }


  $.criminal1_car = Car.Create($.random_car_model, $.car1_x, $.car1_y, $.car1_z);
  $.criminal1_car.setHealth(800);
  $.criminal1_car.setDrivingStyle(2);
  $.criminal1_car.setRandomRouteSeed($.random_seed);
  $.criminal1_car.markAsConvoyCar(true /* TRUE */);
  $.criminal1_car.setHeading($.random_heading);
  $.criminal1_car.setAvoidLevelTransitions(true /* TRUE */);


  while ($.criminal1_car.isWaitingForWorldCollision()) {
    await asyncWait(0);
    if (Car.IsDead($.criminal1_car)) {
      // SCM GOTO → copcar_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
    }
    await copcar_cancelled_checks();  // SCM GOSUB copcar_cancelled_checks
    if ($.copcar_cancelled_flag == 1) {
      // SCM GOTO → copcar_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
    }


  }


  $.criminal1 = Char.CreateInsideCar($.criminal1_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model);

  //POINT_CAMERA_AT_CHAR criminal1 FOLLOWPED JUMP_CUT //BEHINDCAR
  //SET_CAMERA_BEHIND_PLAYER


  if (!(ONMISSION == 1)) {
    $.criminal1_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.criminal2_blip = Blip.AddForCoord($.x, $.y, $.z);
    $.criminal3_blip = Blip.AddForCoord($.x, $.y, $.z);
  }


  $.criminal1_blip.remove();
  $.criminal1_blip = Blip.AddForChar($.criminal1);


  $.ped = $.criminal1;
  await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc


  if ($.copcar_level > 0) {
    $.criminal1_thug1 = Char.CreateAsPassenger($.criminal1_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 0);
    $.ped = $.criminal1_thug1;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal1_thug1_dead_flag = 1;
  }


  if ($.copcar_level > 1) {
    $.criminal1_thug2 = Char.CreateAsPassenger($.criminal1_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 1);
    $.ped = $.criminal1_thug2;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal1_thug2_dead_flag = 1;
  }


  if ($.copcar_level > 2) {
    $.criminal1_thug3 = Char.CreateAsPassenger($.criminal1_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 2);
    $.ped = $.criminal1_thug3;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal1_thug3_dead_flag = 1;
  }


  if ($.copcar_level > 3) {
    $.criminal2_car = Car.Create($.random_car_model, $.car2_x, $.car2_y, $.car2_z);
    $.criminal2_car.markAsConvoyCar(true /* TRUE */);
    $.criminal2_car.setHeading($.random_heading);
    $.criminal2_car.setAvoidLevelTransitions(true /* TRUE */);
    $.criminal2_car.setDrivingStyle(2);
    $.criminal2_car.setHealth(800);
    $.criminal2_car.setRandomRouteSeed($.random_seed);
    while ($.criminal2_car.isWaitingForWorldCollision()) {
      await asyncWait(0);
      if (Car.IsDead($.criminal2_car)) {
        // SCM GOTO → copcar_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
      }
      await copcar_cancelled_checks();  // SCM GOSUB copcar_cancelled_checks
      if ($.copcar_cancelled_flag == 1) {
        // SCM GOTO → copcar_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
      }


    }
    $.criminal2 = Char.CreateInsideCar($.criminal2_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model);

    //POINT_CAMERA_AT_CHAR criminal2 FOLLOWPED JUMP_CUT //BEHINDCAR
    //SET_CAMERA_BEHIND_PLAYER
    $.ped = $.criminal2;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
    $.criminal2_blip.remove();
    $.criminal2_blip = Blip.AddForChar($.criminal2);
  }
  else {
    $.criminal2_team_dead_flag = 1;
    $.criminal2_dead_flag = 1;
  }


  if ($.copcar_level > 4) {
    $.criminal2_thug1 = Char.CreateAsPassenger($.criminal2_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 0);
    $.ped = $.criminal2_thug1;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal2_thug1_dead_flag = 1;
  }


  if ($.copcar_level > 5) {
    $.criminal2_thug2 = Char.CreateAsPassenger($.criminal2_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 1);
    $.ped = $.criminal2_thug2;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal2_thug2_dead_flag = 1;
  }


  if ($.copcar_level > 6) {
    $.criminal2_thug3 = Char.CreateAsPassenger($.criminal2_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 2);
    $.ped = $.criminal2_thug3;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal2_thug3_dead_flag = 1;
  }


  if ($.copcar_level > 7) {
    $.criminal3_car = Car.Create($.random_car_model, $.car3_x, $.car3_y, $.car3_z);
    $.criminal3_car.markAsConvoyCar(true /* TRUE */);
    $.criminal3_car.setHeading($.random_heading);
    $.criminal3_car.setAvoidLevelTransitions(true /* TRUE */);
    $.criminal3_car.setDrivingStyle(2);
    $.criminal3_car.setHealth(800);
    $.criminal3_car.setRandomRouteSeed($.random_seed);
    while ($.criminal3_car.isWaitingForWorldCollision()) {
      await asyncWait(0);
      if (Car.IsDead($.criminal3_car)) {
        // SCM GOTO → copcar_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
      }
      await copcar_cancelled_checks();  // SCM GOSUB copcar_cancelled_checks
      if ($.copcar_cancelled_flag == 1) {
        // SCM GOTO → copcar_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
      }


    }
    $.criminal3 = Char.CreateInsideCar($.criminal3_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model);

    //POINT_CAMERA_AT_CHAR criminal3 FOLLOWPED JUMP_CUT //BEHINDCAR
    //SET_CAMERA_BEHIND_PLAYER
    $.ped = $.criminal3;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
    $.criminal3_blip.remove();
    $.criminal3_blip = Blip.AddForChar($.criminal3);
  }
  else {
    $.criminal3_team_dead_flag = 1;
    $.criminal3_dead_flag = 1;
  }


  if ($.copcar_level > 8) {
    $.criminal3_thug1 = Char.CreateAsPassenger($.criminal3_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 0);
    $.ped = $.criminal3_thug1;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal3_thug1_dead_flag = 1;
  }


  if ($.copcar_level > 9) {
    $.criminal3_thug2 = Char.CreateAsPassenger($.criminal3_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 1);
    $.ped = $.criminal3_thug2;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal3_thug2_dead_flag = 1;
  }


  if ($.copcar_level > 10) {
    $.criminal3_thug3 = Char.CreateAsPassenger($.criminal3_car, 15 /* PEDTYPE_GANG9 */, $.random_ped_model, 2);
    $.ped = $.criminal3_thug3;
    await setup_ped_threats_etc();  // SCM GOSUB setup_ped_threats_etc
  }
  else {
    $.criminal3_thug3_dead_flag = 1;
  }


  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);
  Streaming.MarkModelAsNoLongerNeeded($.random_ped_model);


  await print_text_for_zone_char_is_in();  // SCM GOSUB print_text_for_zone_char_is_in
  const _res136 = $.criminal1.getCoordinates();
$.criminal1_x = _res136.x;
$.criminal1_y = _res136.y;
$.z = _res136.z;
  Audio.PoliceRadioMessage($.criminal1_x, $.criminal1_y, $.z);


  const _res137 = $.player1.getCoordinates();
$.player_x = _res137.x;
$.player_y = _res137.y;
$.player_z = _res137.z;
  $.x_temp = $.player_x - $.criminal1_x;
  $.y_temp = $.player_y - $.criminal1_y;
  $.x_temp = $.x_temp * $.x_temp;
  $.y_temp = $.y_temp * $.y_temp;
  $.player_dist_from_crim = $.y_temp + $.y_temp;
  $.player_dist_from_crim = Math.Sqrt($.player_dist_from_crim);


  $.player_dist_from_crim /= $.time_bonus_divider;
  $.player_dist_from_crim *= 1000.0;
  $.cop_time_limit_int = $.player_dist_from_crim;
  if ($.cop_time_limit_int < 40000) {
    $.cop_time_limit_int = 40000;
  }
  $.cop_time_limit += $.cop_time_limit_int;


  $.cop_time_limit_int /= 1000;


  if ($.timer_on_screen_flag == 1) {
    Text.PrintWithNumberBig("A_TIME", $.cop_time_limit_int, 4000, 6); //+~1~ Seconds
  }
  else {
    if ($.cop_time_limit < 45000) {
      $.cop_time_limit = 45000;
    }
    $.cop_time_limit += 30000;
    Hud.DisplayTimer($.$id.cop_time_limit, 1 /* TIMER_DOWN */);
    $.timer_on_screen_flag = 1;
  }


  $.game_timer = Clock.GetGameTimer();
  $.criminal1_timera = $.game_timer;
  $.criminal2_timera = $.game_timer;
  $.criminal3_timera = $.game_timer;


  if ($.copcar_level < 13) {
    $.time_bonus_divider -= 0.1;
  }


  Hud.FreezeTimer(false /* FALSE */);


  $.copcar_print_level = $.copcar_level + 1;
  Text.PrintWithNumberNow("CLEVEL", $.copcar_print_level, 5000, 1); //Vigilante Mission Level ~1~
}



async function copcar_oddjob_loop() {
  // SCM GOTO → copcar_oddjob_loop lowered to endless loop
  while (true) {


    await asyncWait(0);

    //PRINT_WITH_NUMBER_NOW NUMBER random_car_model 17 1//debug


    $.game_timer = Clock.GetGameTimer();
    const _res138 = $.player1.getCoordinates();
$.player_x = _res138.x;
$.player_y = _res138.y;
$.player_z = _res138.z;


    await copcar_cancelled_checks();  // SCM GOSUB copcar_cancelled_checks
    if ($.copcar_cancelled_flag == 1) {
      // SCM GOTO → copcar_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
    }


    if ($.criminal1_in_car_flag == -1 || $.criminal2_in_car_flag == -1 || $.criminal3_in_car_flag == -1) {
      $.break_convoy_flag = 1;
    }


    ++$.frame_counter;
    //IF copcar_level < 4
    //	IF frame_counter > 0
    //		frame_counter = 0
    //	ENDIF
    //ENDIF
    //IF copcar_level > 3
    //AND	copcar_level < 8
    //	IF frame_counter > 1
    //		frame_counter = 0
    //	ENDIF
    //ENDIF
    //IF copcar_level > 7

    if ($.frame_counter > 2) {
      $.frame_counter = 0;
    }
    //ENDIF

    /////
    ////criminal1
    /////

    if ($.frame_counter == 0) {
      if (!(Char.IsDead($.criminal1))) {
        if ($.criminal1.isSittingInAnyCar()) {
          $.criminal1_car.markAsNoLongerNeeded();
          $.criminal1_car = $.criminal1.storeCarIsInNoSave();
          if ($.criminal1_in_car_flag == -1) {
            $.num_of_followers = $.criminal1.getNumberOfFollowers();
            if ($.num_of_followers > 0) {
              $.criminal1_timera = $.game_timer + 2000;
            }
            else {
              $.criminal1_timera = $.game_timer;
            }
            $.criminal1_in_car_flag = 0;
          }
          if ($.criminal1_in_car_flag == 0) {
            if ($.game_timer > $.criminal1_timera) {
              $.criminal1_car.setCruiseSpeed(100.0);
              $.criminal1_car.setDrivingStyle(2);
              $.criminal1_car.wanderRandomly();
              $.criminal1_car_stuck_timer_start = $.game_timer;
              $.criminal1_in_car_flag = 1;
              $.criminal1_car_stuck_flag = 0;
            }
          }
          if ($.criminal1_in_car_flag > 0) {
            if ($.player1.isInCar($.criminal1_car)) {
              $.criminal1.setObjKillPlayerOnFoot($.player1);
            }
            $.gosub_stuck_car = $.criminal1_car;
            $.car_stuck_flag = $.criminal1_car_stuck_flag;
            $.stuck_timer_start = $.criminal1_car_stuck_timer_start;
            $.stuck_x = $.criminal1_car_stuck_x;
            $.stuck_y = $.criminal1_car_stuck_y;
            $.stuck_z = $.criminal1_car_stuck_z;
            if ($.criminal1_car_speed > 0.0) {
              await criminal_car_stuck_checks();  // SCM GOSUB criminal_car_stuck_checks
            }
            $.criminal1_car_stuck_flag = $.car_stuck_flag;
            $.criminal1_car_stuck_timer_start = $.stuck_timer_start;
            $.criminal1_car_stuck_x = $.stuck_x;
            $.criminal1_car_stuck_y = $.stuck_y;
            $.criminal1_car_stuck_z = $.stuck_z;
            if ($.criminal1_car_stuck_flag == -9) {
              $.criminal1.setObjFleeCar($.criminal1_car);
              $.criminal1_car_stuck_flag = 0;
            }
            if (!($.criminal1_car.isHealthGreater(400))) {
              $.criminal1.setObjKillPlayerOnFoot($.player1);
            }
            if (!($.criminal1_car.isHealthGreater(251))) {
              $.criminal1.setObjFleeCar($.criminal1_car);
              $.criminal1_timera = $.game_timer + 2000;
            }
            else {
              $.criminal1_timera = $.game_timer;
            }
            await criminal1_group_breaking();  // SCM GOSUB criminal1_group_breaking
            const _res139 = $.criminal1.getCoordinates();
$.criminal1_x = _res139.x;
$.criminal1_y = _res139.y;
$.z = _res139.z;
            $.x_temp = $.player_x - $.criminal1_x;
            $.y_temp = $.player_y - $.criminal1_y;
            $.x_temp = $.x_temp * $.x_temp;
            $.y_temp = $.y_temp * $.y_temp;
            $.sum_x_y_temp = $.x_temp + $.y_temp;
            $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
            $.criminal1_car_speed = 1000.0 / $.sum_x_y_temp;
            if ($.criminal1_car_speed > 100.0) {
              $.criminal1_car_speed = 100.0;
            }
            if ($.criminal1_car_speed < 15.0) {
              $.criminal1_car_speed = 15.0;
            }
            $.criminal1_car.setCruiseSpeed($.criminal1_car_speed);
          }
        }
        else {
          $.criminal1_in_car_flag = -1;
          await criminal1_group_breaking();  // SCM GOSUB criminal1_group_breaking
          if ($.game_timer > $.criminal1_timera) {
            if ($.player1.locateAnyMeansChar2D($.criminal1, 45.0, 45.0, false)) {
              if (!($.player1.isInAnyCar())) {
                $.criminal1.setObjKillPlayerOnFoot($.player1);
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.criminal1, 30.0, 30.0, false)) {
                  $.criminal1.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.gosub_ped = $.criminal1;
                  if (!(Car.IsDead($.criminal1_car))) {
                    if ($.criminal1_car.isHealthGreater(400)) {
                      if ($.criminal1.locateAnyMeansCar2D($.criminal1_car, 40.0, 40.0, false)) {
                        $.criminal1.setObjEnterCarAsDriver($.criminal1_car);
                      }
                      else {
                        await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                      }
                    }
                    else {
                      await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                    }
                  }
                  else {
                    await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                  }
                }
              }
            }
            else {
              $.gosub_ped = $.criminal1;
              if (!(Car.IsDead($.criminal1_car))) {
                if ($.criminal1_car.isHealthGreater(400)) {
                  if ($.criminal1.locateAnyMeansCar2D($.criminal1_car, 40.0, 40.0, false)) {
                    $.criminal1.setObjEnterCarAsDriver($.criminal1_car);
                  }
                  else {
                    await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                  }
                }
                else {
                  await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                }
              }
              else {
                await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
              }
            }
          }
        }
      }
      else {
        $.criminal1_blip.remove();
        $.criminal1.markAsNoLongerNeeded();
        if ($.criminal1_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal1_dead_flag = 1;
        }
        if (!(Char.IsDead($.criminal1_thug1))) {
          $.criminal1 = $.criminal1_thug1;
          $.criminal1_thug1 = -1;
          $.criminal1_dead_flag = 0;
          $.criminal1_thug1_dead_flag = 1;
          $.criminal1_blip = Blip.AddForChar($.criminal1);
          if (!(Char.IsDead($.criminal1_thug2))) {
            $.criminal1_thug2.followChar($.criminal1);
            if (!($.criminal1_thug2.isInCharsGroup($.criminal1))) {
              $.criminal1_thug2.setObjKillPlayerAnyMeans($.player1);
            }
          }
          if (!(Char.IsDead($.criminal1_thug3))) {
            $.criminal1_thug3.followChar($.criminal1);
            if (!($.criminal1_thug3.isInCharsGroup($.criminal1))) {
              $.criminal1_thug3.setObjKillPlayerAnyMeans($.player1);
            }
          }
        }
        else {
          $.criminal1_thug1.markAsNoLongerNeeded();
          if (!(Char.IsDead($.criminal1_thug2))) {
            $.criminal1 = $.criminal1_thug2;
            $.criminal1_thug2 = -1;
            $.criminal1_dead_flag = 0;
            $.criminal1_thug2_dead_flag = 1;
            $.criminal1_blip = Blip.AddForChar($.criminal1);
            if (!(Char.IsDead($.criminal1_thug3))) {
              $.criminal1_thug3.followChar($.criminal1);
              if (!($.criminal1_thug3.isInCharsGroup($.criminal1))) {
                $.criminal1_thug3.setObjKillPlayerAnyMeans($.player1);
              }
            }
          }
          else {
            $.criminal1_thug2.markAsNoLongerNeeded();
            if (!(Char.IsDead($.criminal1_thug3))) {
              $.criminal1 = $.criminal1_thug3;
              $.criminal1_thug3 = -1;
              $.criminal1_dead_flag = 0;
              $.criminal1_thug3_dead_flag = 1;
              $.criminal1_blip = Blip.AddForChar($.criminal1);
            }
            else {
              $.criminal1_thug3.markAsNoLongerNeeded();
              $.criminal1_team_dead_flag = 1;
            }
          }
        }
      }
      if (Char.IsDead($.criminal1_thug1)) {
        if ($.criminal1_thug1_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal1_thug1_dead_flag = 1;
        }
      }
      if (Char.IsDead($.criminal1_thug2)) {
        if ($.criminal1_thug2_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal1_thug2_dead_flag = 1;
        }
      }
      if (Char.IsDead($.criminal1_thug3)) {
        if ($.criminal1_thug3_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal1_thug3_dead_flag = 1;
        }
      }
    }

    /////
    ////criminal2
    /////

    if ($.frame_counter == 1) {
      if (!(Char.IsDead($.criminal2))) {
        if ($.criminal2.isSittingInAnyCar()) {
          $.criminal2_car.markAsNoLongerNeeded();
          $.criminal2_car = $.criminal2.storeCarIsInNoSave();
          if ($.criminal2_in_car_flag == -1) {
            $.num_of_followers = $.criminal2.getNumberOfFollowers();
            if ($.num_of_followers > 0) {
              $.criminal2_timera = $.game_timer + 2000;
            }
            else {
              $.criminal2_timera = $.game_timer;
            }
            $.criminal2_in_car_flag = 0;
          }
          if ($.criminal2_in_car_flag == 0) {
            if ($.game_timer > $.criminal2_timera) {
              $.criminal2_car.setCruiseSpeed(100.0);
              $.criminal2_car.setDrivingStyle(2);
              if ($.break_convoy_flag == 0) {
                if (!(Car.IsDead($.criminal1_car))) {
                  $.criminal2_car.wanderRandomly();
                  //SET_CAR_STRAIGHT_LINE_DISTANCE criminal2_car 5
                  //SET_CAR_RAM_CAR criminal2_car criminal1_car

                }
                else {
                  $.break_convoy_flag = 1;
                }
              }
              if ($.break_convoy_flag == 1) {
                $.criminal2_car.markAsConvoyCar(false /* FALSE */);
                $.criminal2_car.wanderRandomly();
              }
              $.criminal2_car_stuck_timer_start = $.game_timer;
              $.criminal2_in_car_flag = 1;
              $.criminal2_car_stuck_flag = 0;
            }
          }
          if ($.criminal2_in_car_flag > 0) {
            if ($.player1.isInCar($.criminal2_car)) {
              $.criminal2.setObjKillPlayerOnFoot($.player1);
            }
            $.gosub_stuck_car = $.criminal2_car;
            $.car_stuck_flag = $.criminal2_car_stuck_flag;
            $.stuck_timer_start = $.criminal2_car_stuck_timer_start;
            $.stuck_x = criminal2_car_stuck_x;
            $.stuck_y = criminal2_car_stuck_y;
            $.stuck_z = criminal2_car_stuck_z;
            if (criminal2_car_speed > 0.0) {
              await criminal_car_stuck_checks();  // SCM GOSUB criminal_car_stuck_checks
            }
            $.criminal2_car_stuck_flag = $.car_stuck_flag;
            $.criminal2_car_stuck_timer_start = $.stuck_timer_start;
            criminal2_car_stuck_x = $.stuck_x;
            criminal2_car_stuck_y = $.stuck_y;
            criminal2_car_stuck_z = $.stuck_z;
            if ($.criminal2_car_stuck_flag == -9) {
              $.criminal2.setObjFleeCar($.criminal2_car);
              $.criminal2_car_stuck_flag = 0;
            }
            if (!($.criminal2_car.isHealthGreater(400))) {
              $.criminal2.setObjKillPlayerOnFoot($.player1);
            }
            if (!($.criminal2_car.isHealthGreater(251))) {
              $.criminal2.setObjFleeCar($.criminal2_car);
              $.criminal2_timera = $.game_timer + 2000;
            }
            else {
              $.criminal2_timera = $.game_timer;
            }
            await criminal2_group_breaking();  // SCM GOSUB criminal2_group_breaking
            [criminal2_x, criminal2_y, $.z] = $.criminal2.getCoordinates();
            $.x_temp = $.player_x - criminal2_x;
            $.y_temp = $.player_y - criminal2_y;
            $.x_temp = $.x_temp * $.x_temp;
            $.y_temp = $.y_temp * $.y_temp;
            $.sum_x_y_temp = $.x_temp + $.y_temp;
            $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
            criminal2_car_speed = 1000.0 / $.sum_x_y_temp;
            if (criminal2_car_speed > 100.0) {
              criminal2_car_speed = 100.0;
            }
            if (criminal2_car_speed < 15.0) {
              criminal2_car_speed = 15.0;
            }
            if ($.break_convoy_flag == 0) {
              if (!(Car.IsDead($.criminal1_car))) {
                $.gosub_car_to_slow = $.criminal2_car;
                $.gosub_target_entity = $.criminal1_car;
                await slow_criminal_if_close();  // SCM GOSUB slow_criminal_if_close
                criminal2_car_speed = $.gosub_car_to_slow_speed;

                //THIS BIT OF CODE CHECKS TO SEE IF CAR1 IS INFRONT OF CAR2
                $.forward_x = $.criminal2_car.getForwardX();
                $.forward_y = $.criminal2_car.getForwardY();
                const _res140 = $.criminal1_car.getCoordinates();
$.criminal1_car_x = _res140.x;
$.criminal1_car_y = _res140.y;
$.z = _res140.z;
                const _res141 = $.criminal2_car.getCoordinates();
$.criminal2_car_x = _res141.x;
$.criminal2_car_y = _res141.y;
$.z = _res141.z;
                // IF (((forward_x * (car2_x - car1_x)) + (forward_y * (car2_y - car1_y)>) IS GREATER THAN 0.0 CAR IS IN FRONT
                $.temp_float_x = $.criminal2_car_x - $.criminal1_car_x;
                $.forward_x = $.forward_x * $.temp_float_x;
                $.temp_float_y = $.criminal2_car_y - $.criminal1_car_y;
                $.forward_y = $.forward_y * $.temp_float_y;
                $.car1_infront_car2 = $.forward_x + $.forward_y;

                //THIS BIT OF CODE CHECKS TO SEE IF CAR2 IS INFRONT OF CAR1
                $.forward_x = $.criminal1_car.getForwardX();
                $.forward_y = $.criminal1_car.getForwardY();
                const _res142 = $.criminal2_car.getCoordinates();
$.criminal2_car_x = _res142.x;
$.criminal2_car_y = _res142.y;
$.z = _res142.z;
                const _res143 = $.criminal1_car.getCoordinates();
$.criminal1_car_x = _res143.x;
$.criminal1_car_y = _res143.y;
$.z = _res143.z;
                // IF (((forward_x * (car1_x - car2_x)) + (forward_y * (car1_y - car2_y)>) IS GREATER THAN 0.0 CAR IS IN FRONT
                $.temp_float_x = $.criminal1_car_x - $.criminal2_car_x;
                $.forward_x = $.forward_x * $.temp_float_x;
                $.temp_float_y = $.criminal1_car_y - $.criminal2_car_y;
                $.forward_y = $.forward_y * $.temp_float_y;
                $.car2_infront_car1 = $.forward_x + $.forward_y;
                if ($.car1_infront_car2 > 0.0) {
                  if ($.car2_infront_car1 < 0.0) {
                    criminal2_car_speed = 0.0;
                  }
                }
              }
              else {
                $.criminal2_car.wanderRandomly();
                $.break_convoy_flag = 1;
              }
            }
            if (criminal2_car_speed == 0.0) {
              $.criminal2_car.setTempAction(1 /* TEMPACT_WAIT */, 17);
            }
            else {
              $.criminal2_car.setCruiseSpeed(criminal2_car_speed);
            }


          }
        }
        else {
          $.criminal2_in_car_flag = -1;
          await criminal2_group_breaking();  // SCM GOSUB criminal2_group_breaking
          if ($.game_timer > $.criminal2_timera) {
            if ($.player1.locateAnyMeansChar2D($.criminal2, 40.0, 40.0, false)) {
              if (!($.player1.isInAnyCar())) {
                $.criminal2.setObjKillPlayerOnFoot($.player1);
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.criminal2, 25.0, 25.0, false)) {
                  $.criminal2.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.gosub_ped = $.criminal2;
                  if (!(Car.IsDead($.criminal2_car))) {
                    if ($.criminal2_car.isHealthGreater(400)) {
                      if ($.criminal2.locateAnyMeansCar2D($.criminal2_car, 40.0, 40.0, false)) {
                        $.criminal2.setObjEnterCarAsDriver($.criminal2_car);
                      }
                      else {
                        await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                      }
                    }
                    else {
                      await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                    }
                  }
                  else {
                    await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                  }
                }
              }
            }
            else {
              $.gosub_ped = $.criminal2;
              if (!(Car.IsDead($.criminal2_car))) {
                if ($.criminal2_car.isHealthGreater(400)) {
                  if ($.criminal2.locateAnyMeansCar2D($.criminal2_car, 40.0, 40.0, false)) {
                    $.criminal2.setObjEnterCarAsDriver($.criminal2_car);
                  }
                  else {
                    await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                  }
                }
                else {
                  await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                }
              }
              else {
                await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
              }
            }
          }
        }
      }
      else {
        $.criminal2_blip.remove();
        $.criminal2.markAsNoLongerNeeded();
        if ($.criminal2_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal2_dead_flag = 1;
        }
        if (!(Char.IsDead($.criminal2_thug1))) {
          $.criminal2 = $.criminal2_thug1;
          $.criminal2_thug1 = -1;
          $.criminal2_dead_flag = 0;
          $.criminal2_thug1_dead_flag = 1;
          $.criminal2_blip = Blip.AddForChar($.criminal2);
          if (!(Char.IsDead($.criminal2_thug2))) {
            $.criminal2_thug2.followChar($.criminal2);
            if (!($.criminal2_thug2.isInCharsGroup($.criminal2))) {
              $.criminal2_thug2.setObjKillPlayerAnyMeans($.player1);
            }
          }
          if (!(Char.IsDead($.criminal2_thug3))) {
            $.criminal2_thug3.followChar($.criminal2);
            if (!($.criminal2_thug3.isInCharsGroup($.criminal2))) {
              $.criminal2_thug3.setObjKillPlayerAnyMeans($.player1);
            }
          }
        }
        else {
          $.criminal2_thug1.markAsNoLongerNeeded();
          if (!(Char.IsDead($.criminal2_thug2))) {
            $.criminal2 = $.criminal2_thug2;
            $.criminal2_thug2 = -1;
            $.criminal2_dead_flag = 0;
            $.criminal2_thug2_dead_flag = 1;
            $.criminal2_blip = Blip.AddForChar($.criminal2);
            if (!(Char.IsDead($.criminal2_thug3))) {
              $.criminal2_thug3.followChar($.criminal2);
              if (!($.criminal2_thug3.isInCharsGroup($.criminal2))) {
                $.criminal2_thug3.setObjKillPlayerAnyMeans($.player1);
              }
            }
          }
          else {
            $.criminal2_thug2.markAsNoLongerNeeded();
            if (!(Char.IsDead($.criminal2_thug3))) {
              $.criminal2 = $.criminal2_thug3;
              $.criminal2_thug3 = -1;
              $.criminal2_dead_flag = 0;
              $.criminal2_thug3_dead_flag = 1;
              $.criminal2_blip = Blip.AddForChar($.criminal2);
            }
            else {
              $.criminal2_thug3.markAsNoLongerNeeded();
              $.criminal2_team_dead_flag = 1;
            }
          }
        }
      }
      if (Char.IsDead($.criminal2_thug1)) {
        if ($.criminal2_thug1_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal2_thug1_dead_flag = 1;
        }
      }
      if (Char.IsDead($.criminal2_thug2)) {
        if ($.criminal2_thug2_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal2_thug2_dead_flag = 1;
        }
      }
      if (Char.IsDead($.criminal2_thug3)) {
        if ($.criminal2_thug3_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal2_thug3_dead_flag = 1;
        }
      }
    }

    /////
    ////criminal3
    /////

    if ($.frame_counter == 2) {
      if (!(Char.IsDead($.criminal3))) {
        if ($.criminal3.isSittingInAnyCar()) {
          $.criminal3_car.markAsNoLongerNeeded();
          $.criminal3_car = $.criminal3.storeCarIsInNoSave();
          if ($.criminal3_in_car_flag == -1) {
            $.num_of_followers = $.criminal3.getNumberOfFollowers();
            if ($.num_of_followers > 0) {
              $.criminal3_timera = $.game_timer + 2000;
            }
            else {
              $.criminal3_timera = $.game_timer;
            }
            $.criminal3_in_car_flag = 0;
          }
          if ($.criminal3_in_car_flag == 0) {
            if ($.game_timer > $.criminal3_timera) {
              $.criminal3_car.setCruiseSpeed(100.0);
              $.criminal3_car.setDrivingStyle(2);
              if ($.break_convoy_flag == 0) {
                if (!(Car.IsDead($.criminal2_car))) {
                  $.criminal3_car.wanderRandomly();
                  //SET_CAR_STRAIGHT_LINE_DISTANCE criminal3_car 5
                  //SET_CAR_RAM_CAR criminal3_car criminal2_car

                }
                else {
                  $.break_convoy_flag = 1;
                }
              }
              if ($.break_convoy_flag == 1) {
                $.criminal3_car.markAsConvoyCar(false /* FALSE */);
                $.criminal3_car.wanderRandomly();
              }
              criminal3_car_stuck_timer_start = $.game_timer;
              $.criminal3_in_car_flag = 1;
              criminal3_car_stuck_flag = 0;
            }
          }
          if ($.criminal3_in_car_flag > 0) {
            if ($.player1.isInCar($.criminal3_car)) {
              $.criminal3.setObjKillPlayerOnFoot($.player1);
            }
            $.gosub_stuck_car = $.criminal3_car;
            $.car_stuck_flag = criminal3_car_stuck_flag;
            $.stuck_timer_start = criminal3_car_stuck_timer_start;
            $.stuck_x = criminal3_car_stuck_x;
            $.stuck_y = criminal3_car_stuck_y;
            $.stuck_z = criminal3_car_stuck_z;
            if (criminal3_car_speed > 0.0) {
              await criminal_car_stuck_checks();  // SCM GOSUB criminal_car_stuck_checks
            }
            criminal3_car_stuck_flag = $.car_stuck_flag;
            criminal3_car_stuck_timer_start = $.stuck_timer_start;
            criminal3_car_stuck_x = $.stuck_x;
            criminal3_car_stuck_y = $.stuck_y;
            criminal3_car_stuck_z = $.stuck_z;
            if (criminal3_car_stuck_flag == -9) {
              $.criminal3.setObjFleeCar($.criminal3_car);
              criminal3_car_stuck_flag = 0;
            }
            if (!($.criminal3_car.isHealthGreater(400))) {
              $.criminal3.setObjKillPlayerOnFoot($.player1);
            }
            if (!($.criminal3_car.isHealthGreater(251))) {
              $.criminal3.setObjFleeCar($.criminal3_car);
              $.criminal3_timera = $.game_timer + 2000;
            }
            else {
              $.criminal3_timera = $.game_timer;
            }
            await criminal3_group_breaking();  // SCM GOSUB criminal3_group_breaking
            [criminal3_x, criminal3_y, $.z] = $.criminal3.getCoordinates();
            $.x_temp = $.player_x - criminal3_x;
            $.y_temp = $.player_y - criminal3_y;
            $.x_temp = $.x_temp * $.x_temp;
            $.y_temp = $.y_temp * $.y_temp;
            $.sum_x_y_temp = $.x_temp + $.y_temp;
            $.sum_x_y_temp = Math.Sqrt($.sum_x_y_temp);
            criminal3_car_speed = 1000.0 / $.sum_x_y_temp;
            if (criminal3_car_speed > 100.0) {
              criminal3_car_speed = 100.0;
            }
            if (criminal3_car_speed < 15.0) {
              criminal3_car_speed = 15.0;
            }
            if ($.break_convoy_flag == 0) {
              if (!(Car.IsDead($.criminal2_car))) {
                $.gosub_car_to_slow = $.criminal3_car;
                $.gosub_target_entity = $.criminal2_car;
                await slow_criminal_if_close();  // SCM GOSUB slow_criminal_if_close
                criminal3_car_speed = $.gosub_car_to_slow_speed;

                //THIS BIT OF CODE CHECKS TO SEE IF CAR2 IS INFRONT OF CAR3
                $.forward_x = $.criminal3_car.getForwardX();
                $.forward_y = $.criminal3_car.getForwardY();
                const _res144 = $.criminal2_car.getCoordinates();
$.criminal2_car_x = _res144.x;
$.criminal2_car_y = _res144.y;
$.z = _res144.z;
                const _res145 = $.criminal3_car.getCoordinates();
$.criminal3_car_x = _res145.x;
$.criminal3_car_y = _res145.y;
$.z = _res145.z;
                // IF (((forward_x * (car3_x - car2_x)) + (forward_y * (car3_y - car2_y)>) IS GREATER THAN 0.0 CAR IS IN FRONT
                $.temp_float_x = $.criminal3_car_x - $.criminal2_car_x;
                $.forward_x = $.forward_x * $.temp_float_x;
                $.temp_float_y = $.criminal3_car_y - $.criminal2_car_y;
                $.forward_y = $.forward_y * $.temp_float_y;
                $.car2_infront_car3 = $.forward_x + $.forward_y;

                //THIS BIT OF CODE CHECKS TO SEE IF CAR3 IS INFRONT OF CAR2
                $.forward_x = $.criminal2_car.getForwardX();
                $.forward_y = $.criminal2_car.getForwardY();
                const _res146 = $.criminal3_car.getCoordinates();
$.criminal3_car_x = _res146.x;
$.criminal3_car_y = _res146.y;
$.z = _res146.z;
                const _res147 = $.criminal2_car.getCoordinates();
$.criminal2_car_x = _res147.x;
$.criminal2_car_y = _res147.y;
$.z = _res147.z;
                // IF (((forward_x * (car2_x - car3_x)) + (forward_y * (car2_y - car3_y)>) IS GREATER THAN 0.0 CAR IS IN FRONT
                $.temp_float_x = $.criminal2_car_x - $.criminal3_car_x;
                $.forward_x = $.forward_x * $.temp_float_x;
                $.temp_float_y = $.criminal2_car_y - $.criminal3_car_y;
                $.forward_y = $.forward_y * $.temp_float_y;
                $.car3_infront_car2 = $.forward_x + $.forward_y;
                if ($.car2_infront_car3 > 0.0) {
                  if ($.car3_infront_car2 < 0.0) {
                    criminal3_car_speed = 0.0;
                  }
                }
              }
              else {
                $.criminal3_car.wanderRandomly();
                $.break_convoy_flag = 1;
              }
            }
            if (criminal3_car_speed == 0.0) {
              $.criminal3_car.setTempAction(1 /* TEMPACT_WAIT */, 17);
            }
            else {
              $.criminal3_car.setCruiseSpeed(criminal3_car_speed);
            }


          }
        }
        else {
          $.criminal3_in_car_flag = -1;
          await criminal3_group_breaking();  // SCM GOSUB criminal3_group_breaking
          if ($.game_timer > $.criminal3_timera) {
            if ($.player1.locateAnyMeansChar2D($.criminal3, 40.0, 40.0, false)) {
              if (!($.player1.isInAnyCar())) {
                $.criminal3.setObjKillPlayerOnFoot($.player1);
              }
              else {
                if ($.player1.locateAnyMeansChar2D($.criminal3, 25.0, 25.0, false)) {
                  $.criminal3.setObjKillPlayerOnFoot($.player1);
                }
                else {
                  $.gosub_ped = $.criminal3;
                  if (!(Car.IsDead($.criminal3_car))) {
                    if ($.criminal3_car.isHealthGreater(400)) {
                      if ($.criminal3.locateAnyMeansCar2D($.criminal3_car, 40.0, 40.0, false)) {
                        $.criminal3.setObjEnterCarAsDriver($.criminal3_car);
                      }
                      else {
                        await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                      }
                    }
                    else {
                      await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                    }
                  }
                  else {
                    await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                  }
                }
              }
            }
            else {
              $.gosub_ped = $.criminal3;
              if (!(Car.IsDead($.criminal3_car))) {
                if ($.criminal3_car.isHealthGreater(400)) {
                  if ($.criminal3.locateAnyMeansCar2D($.criminal3_car, 40.0, 40.0, false)) {
                    $.criminal3.setObjEnterCarAsDriver($.criminal3_car);
                  }
                  else {
                    await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                  }
                }
                else {
                  await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
                }
              }
              else {
                await criminal_steal_a_car();  // SCM GOSUB criminal_steal_a_car
              }
            }
          }
        }
      }
      else {
        $.criminal3_blip.remove();
        $.criminal3.markAsNoLongerNeeded();
        if ($.criminal3_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal3_dead_flag = 1;
        }
        if (!(Char.IsDead($.criminal3_thug1))) {
          $.criminal3 = $.criminal3_thug1;
          $.criminal3_thug1 = -1;
          $.criminal3_dead_flag = 0;
          $.criminal3_thug1_dead_flag = 1;
          $.criminal3_blip = Blip.AddForChar($.criminal3);
          if (!(Char.IsDead($.criminal3_thug2))) {
            $.criminal3_thug2.followChar($.criminal3);
            if (!($.criminal3_thug2.isInCharsGroup($.criminal3))) {
              $.criminal3_thug2.setObjKillPlayerAnyMeans($.player1);
            }
          }
          if (!(Char.IsDead($.criminal3_thug3))) {
            $.criminal3_thug3.followChar($.criminal3);
            if (!($.criminal3_thug3.isInCharsGroup($.criminal3))) {
              $.criminal3_thug3.setObjKillPlayerAnyMeans($.player1);
            }
          }
        }
        else {
          $.criminal3_thug1.markAsNoLongerNeeded();
          if (!(Char.IsDead($.criminal3_thug2))) {
            $.criminal3 = $.criminal3_thug2;
            $.criminal3_thug2 = -1;
            $.criminal3_dead_flag = 0;
            $.criminal3_thug2_dead_flag = 1;
            $.criminal3_blip = Blip.AddForChar($.criminal3);
            if (!(Char.IsDead($.criminal3_thug3))) {
              $.criminal3_thug3.followChar($.criminal3);
              if (!($.criminal3_thug3.isInCharsGroup($.criminal3))) {
                $.criminal3_thug3.setObjKillPlayerAnyMeans($.player1);
              }
            }
          }
          else {
            $.criminal3_thug2.markAsNoLongerNeeded();
            if (!(Char.IsDead($.criminal3_thug3))) {
              $.criminal3 = $.criminal3_thug3;
              $.criminal3_thug3 = -1;
              $.criminal3_dead_flag = 0;
              $.criminal3_thug3_dead_flag = 1;
              $.criminal3_blip = Blip.AddForChar($.criminal3);
            }
            else {
              $.criminal3_thug3.markAsNoLongerNeeded();
              $.criminal3_team_dead_flag = 1;
            }
          }
        }
      }
      if (Char.IsDead($.criminal3_thug1)) {
        if ($.criminal3_thug1_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal3_thug1_dead_flag = 1;
        }
      }
      if (Char.IsDead($.criminal3_thug2)) {
        if ($.criminal3_thug2_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal3_thug2_dead_flag = 1;
        }
      }
      if (Char.IsDead($.criminal3_thug3)) {
        if ($.criminal3_thug3_dead_flag == 0) {
          ++$.total_criminals_killed;
          Stat.RegisterCriminalCaught();
          Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
          if ($.total_criminals_killed == 1) {
            Hud.DisplayCounterWithString($.$id.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, "KILLS");
          }
          $.criminal3_thug3_dead_flag = 1;
        }
      }
    }


    if ($.criminal1_team_dead_flag == 1 && $.criminal2_team_dead_flag == 1 && $.criminal3_team_dead_flag == 1) {
      // SCM GOTO → mission_copcar_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_copcar_passed"); // fallback: would break linear control flow
    }


  }
}





async function mission_copcar_passed() {


  Stat.RegisterVigilanteLevel($.copcar_print_level);
  ++$.copcar_level;
  if ($.scplayer.isInAnyPoliceVehicle() || $.player1.isInModel(HUNTER) || $.player1.isInModel(FBICAR)) {
    $.players_cop_car = $.player1.storeCarIsInNoSave();
    $.players_cop_car.setCanBurstTires(false /* FALSE */);
    $.players_cop_car_health = $.players_cop_car.getHealth();
    $.players_cop_car_health += 100;
    $.players_cop_car.setHealth($.players_cop_car_health);
  }


  $.criminal1_car.markAsNoLongerNeeded();
  $.criminal1.markAsNoLongerNeeded();
  $.criminal1_thug1.markAsNoLongerNeeded();
  $.criminal1_thug2.markAsNoLongerNeeded();
  $.criminal1_thug3.markAsNoLongerNeeded();


  $.criminal2_car.markAsNoLongerNeeded();
  $.criminal2.markAsNoLongerNeeded();
  $.criminal2_thug1.markAsNoLongerNeeded();
  $.criminal2_thug2.markAsNoLongerNeeded();
  $.criminal2_thug3.markAsNoLongerNeeded();


  $.criminal3_car.markAsNoLongerNeeded();
  $.criminal3.markAsNoLongerNeeded();
  $.criminal3_thug1.markAsNoLongerNeeded();
  $.criminal3_thug2.markAsNoLongerNeeded();
  $.criminal3_thug3.markAsNoLongerNeeded();


  $.criminal1_blip.remove();
  $.criminal2_blip.remove();
  $.criminal3_blip.remove();


  $.vigilante_score = $.copcar_level * $.copcar_level;
  $.vigilante_score *= 50;
  Text.PrintWithNumberBig("C_PASS", $.vigilante_score, 5000, 5);
  //PRINT_WITH_NUMBER_BIG REWARD vigilante_score 5000 6

  $.player1.addScore($.vigilante_score);


  if ($.done_copcar_progress == 0) {
    if ($.copcar_level == 12) {
      Text.PrintHelp("C_COMP1"); //Vigilante mission level 12 complete: Your max Body Armor increased to 150
      Stat.PlayerMadeProgress(1);
      $.player1.increaseMaxArmor(50);
      $.scplayer.addArmor(150);
      Stat.RegisterOddjobMissionPassed();
      $.done_copcar_progress = 1;
    }
  }


  while (!($.scplayer.isInAnyPoliceVehicle()) && !($.player1.isInModel(HUNTER)) && !($.player1.isInModel(FBICAR))) {
    if ($.game_time_flag == 0) {
      $.game_timer_start = Clock.GetGameTimer();
      if ($.cop_time_limit > 60000) {
        $.copcar_timer = 60000;
      }
      else {
        $.copcar_timer = $.cop_time_limit;
      }
      $.game_time_flag = 1;
    }
    $.game_time_present = Clock.GetGameTimer();
    $.game_time_difference = $.game_time_present - $.game_timer_start;
    $.copcar_timer -= $.game_time_difference;
    $.game_timer_start = $.game_time_present;
    $.timer_in_secs = $.copcar_timer / 1000;
    if ($.timer_in_secs < 1) {
      $.timer_in_secs = 0;
      if ($.in_copcar_nice_timer < $.game_time_present) {
        Text.PrintNow("C_TIME", 3000, 1); //"Your time as a law enforcer is over!"
        $.copcar_cancelled_flag = 1;
        // SCM GOTO → copcar_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO copcar_failed"); // fallback: would break linear control flow
      }
    }
    else {
      $.in_copcar_nice_timer = $.game_time_present + 1000;
    }
    Text.PrintWithNumberNow("COPCART", $.timer_in_secs, 200, 1); //You have ~1~ seconds to return to the car before the mission ends.
    await asyncWait(0);


  }


  Hud.FreezeTimer(true /* TRUE */);


  if ($.player1.isInAnyCar()) {
    $.players_cop_car = $.player1.storeCarIsInNoSave();
    $.players_cop_car.setCanBurstTires(false /* FALSE */);
    $.players_cop_car_health = $.players_cop_car.getHealth();
    $.players_cop_car_health += 100;
    $.players_cop_car.setHealth($.players_cop_car_health);
  }


  if ($.copcar_level < 13) {
    $.wanted_level_multiplier -= 0.05;
    Game.SetWantedMultiplier($.wanted_level_multiplier);
  }



  // SCM GOTO → next_criminal_to_kill (not lowered; manual jump required)
  throw new Error("unresolved GOTO next_criminal_to_kill"); // fallback: would break linear control flow
}




// Mission copcar failed


async function onFailed() {
  //PRINT_BIG ( M_FAIL ) 5000 1 //"Mission Failed"
  //PRINT_NOW C_TIME 3000 1//"Your time as a law enforcer is over!"
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;


  $.criminal1_blip.remove();
  $.criminal2_blip.remove();
  $.criminal3_blip.remove();
  Hud.ClearTimer($.$id.cop_time_limit);
  Hud.ClearCounter($.$id.total_criminals_killed);
  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);
  Streaming.MarkModelAsNoLongerNeeded($.random_ped_model);
  Streaming.MarkModelAsNoLongerNeeded(COLT45);
  Streaming.MarkModelAsNoLongerNeeded(TEC9);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);
  Streaming.MarkModelAsNoLongerNeeded(CHROMEGUN);
  Streaming.MarkModelAsNoLongerNeeded(MACHETE);
  Streaming.MarkModelAsNoLongerNeeded(BAT);


  $.timer_mobile_start = Clock.GetGameTimer();


  Mission.Finish();
}





/////////////////////////////////////////////////////////////////////////////

async function request_random_car_model() {
  /////////////////////////////////////////////////////////////////////////////



  if ($.copcar_level > 1) {
    $.random_int = Math.RandomIntInRange(26, 37);
  }
  else {
    $.random_int = Math.RandomIntInRange(0, 37);
  }

  //bikes

  if ($.random_int == 0) {
    $.random_car_model = PCJ600;
  }
  if ($.random_int == 1) {
    $.random_car_model = FAGGIO;
  }
  if ($.random_int == 2) {
    $.random_car_model = FREEWAY;
  }
  if ($.random_int == 3) {
    $.random_car_model = SANCHEZ;
  }

  //2-door

  if ($.random_int == 4) {
    $.random_car_model = COMET;
  }
  if ($.random_int == 5) {
    $.random_car_model = STINGER;
  }
  if ($.random_int == 6) {
    $.random_car_model = INFERNUS;
  }
  if ($.random_int == 7) {
    $.random_car_model = CHEETAH;
  }
  if ($.random_int == 8) {
    $.random_car_model = BANSHEE;
  }
  if ($.random_int == 9) {
    $.random_car_model = PHEONIX;
  }
  if ($.random_int == 10) {
    $.random_car_model = BFINJECT;
  }
  if ($.random_int == 11) {
    $.random_car_model = IDAHO;
  }
  if ($.random_int == 12) {
    $.random_car_model = LINERUN;
  }
  if ($.random_int == 13) {
    $.random_car_model = MANANA;
  }
  if ($.random_int == 14) {
    $.random_car_model = PONY;
  }
  if ($.random_int == 15) {
    $.random_car_model = MULE;
  }
  if ($.random_int == 16) {
    $.random_car_model = BOBCAT;
  }
  if ($.random_int == 17) {
    $.random_car_model = ESPERANT;
  }
  if ($.random_int == 18) {
    $.random_car_model = MRWHOOP;
  }
  if ($.random_int == 19) {
    $.random_car_model = STALLION;
  }
  if ($.random_int == 20) {
    $.random_car_model = YANKEE;
  }
  if ($.random_int == 21) {
    $.random_car_model = SABRE;
  }
  if ($.random_int == 22) {
    $.random_car_model = BURRITO;
  }
  if ($.random_int == 23) {
    $.random_car_model = WALTON;
  }
  if ($.random_int == 24) {
    $.random_car_model = HERMES;
  }
  if ($.random_int == 25) {
    $.random_car_model = RUMPO;
  }

  //4-door

  if ($.random_int == 26) {
    $.random_car_model = SENTINEL;
  }
  if ($.random_int == 27) {
    $.random_car_model = MOONBEAM;
  }
  if ($.random_int == 28) {
    $.random_car_model = WASHING;
  }
  if ($.random_int == 29) {
    $.random_car_model = LANDSTAL;
  }
  if ($.random_int == 30) {
    $.random_car_model = PEREN;
  }
  if ($.random_int == 31) {
    $.random_car_model = ADMIRAL;
  }
  if ($.random_int == 32) {
    $.random_car_model = GLENDALE;
  }
  if ($.random_int == 33) {
    $.random_car_model = OCEANIC;
  }
  if ($.random_int == 34) {
    $.random_car_model = GREENWOO;
  }
  if ($.random_int == 35) {
    $.random_car_model = REGINA;
  }
  if ($.random_int == 36) {
    $.random_car_model = SENTXS;
  }


  Streaming.RequestModel($.random_car_model);

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
//select_a_weapon:// PED ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

//	IF NOT IS_PLAYER_IN_ANY_CAR player1
//		IF LOCATE_PLAYER_ANY_MEANS_CHAR_2D player1 ped 25.0 25.0 0
//			GIVE_WEAPON_TO_CHAR ped WEAPONTYPE_SHOTGUN 9999
//			RETURN
//		ENDIF
//		IF LOCATE_PLAYER_ANY_MEANS_CHAR_2D player1 ped 60.0 60.0 0
//			GIVE_WEAPON_TO_CHAR ped WEAPONTYPE_RUGER 9999//AK47
//			RETURN
//		ENDIF
//		GIVE_WEAPON_TO_CHAR ped WEAPONTYPE_TEC9 9999
//		RETURN
//	ENDIF
//
//	IF IS_PLAYER_IN_ANY_CAR player1
//		IF NOT LOCATE_PLAYER_ANY_MEANS_CHAR_2D player1 ped 20.0 20.0 0
//			IF LOCATE_PLAYER_ANY_MEANS_CHAR_2D player1 ped 40.0 40.0 0
//				STORE_CAR_PLAYER_IS_IN_NO_SAVE player1 players_cop_car
//				GET_CAR_SPEED players_cop_car players_cop_car_speed
//				IF players_cop_car_speed < 18.0
//					GIVE_WEAPON_TO_CHAR ped WEAPONTYPE_GRENADE 9999
//					RETURN
//				ENDIF
//			ENDIF
//		ENDIF
//		IF LOCATE_PLAYER_ANY_MEANS_CHAR_2D player1 ped 30.0 30.0 0
//			GIVE_WEAPON_TO_CHAR ped WEAPONTYPE_SHOTGUN 9999
//			RETURN
//		ELSE
//			GIVE_WEAPON_TO_CHAR ped WEAPONTYPE_RUGER 9999
//			RETURN
//		ENDIF
//	ENDIF

////////////////////////////////////////////////////////////////////////////
//RETURN////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function slow_criminal_if_close() {
  ////////////////////////////////////////////////////////////////////////////


  if ($.gosub_target_entity == -1) {
    const _res148 = $.player1.getCoordinates();
$.gosub_target_car_x = _res148.x;
$.gosub_target_car_y = _res148.y;
$.temp_float_x = _res148.z;
  }
  else {
    const _res149 = $.gosub_target_entity.getCoordinates();
$.gosub_target_car_x = _res149.x;
$.gosub_target_car_y = _res149.y;
$.temp_float_x = _res149.z;
  }


  const _res150 = $.gosub_car_to_slow.getCoordinates();
$.gosub_car_to_slow_x = _res150.x;
$.gosub_car_to_slow_y = _res150.y;
$.temp_float_x = _res150.z;


  $.temp_float_x = $.gosub_car_to_slow_x - $.gosub_target_car_x;
  $.temp_float_y = $.gosub_car_to_slow_y - $.gosub_target_car_y;
  $.temp_float_x = $.temp_float_x * $.temp_float_x;
  $.temp_float_y = $.temp_float_y * $.temp_float_y;
  $.temp_float_x = $.temp_float_x + $.temp_float_y;
  $.temp_float_x = Math.Sqrt($.temp_float_x);


  $.gosub_car_to_slow_speed = $.temp_float_x + 3.0;
  if ($.gosub_car_to_slow_speed > 100.0) {
    $.gosub_car_to_slow_speed = 100.0;
  }
  if ($.gosub_car_to_slow_speed < 0.0) {
    $.gosub_car_to_slow_speed = 0.0;
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function criminal_steal_a_car() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.gosub_ped))) {
    const _res151 = $.gosub_ped.getCoordinates();
$.coord_1_x = _res151.x;
$.coord_1_y = _res151.y;
$.coord_1_z = _res151.z;
    if ($.heading == 919.9) {
      $.car = Car.Create($.random_car_model, $.coord_1_x, $.coord_1_y, $.coord_1_z);
    }
    if ($.player1.locateAnyMeansChar2D($.gosub_ped, 40.0, 40.0, false)) {
      $.coord_2_x = $.coord_1_x + 40.0;
      $.coord_2_y = $.coord_1_y + 40.0;
      $.coord_1_x = $.coord_1_x - 40.0;
      $.coord_1_y = $.coord_1_y - 40.0;
      $.car.markAsNoLongerNeeded();
      $.car = -1;
      $.car = World.GetRandomCarOfTypeInArea($.coord_1_x, $.coord_1_y, $.coord_2_x, $.coord_2_y, -1);
      if ($.car == -1 || $.criminal1_car == $.car) {
        $.gosub_ped.setObjKillPlayerOnFoot($.player1);
      }
      else {
        if ($.car.isHealthGreater(400)) {
          $.num_of_followers = $.gosub_ped.getNumberOfFollowers();
          $.max_passengers = $.car.getMaximumNumberOfPassengers();
          if (!($.num_of_followers > $.max_passengers)) {
            $.car.lockDoors(1 /* CARLOCK_UNLOCKED */);
            $.car.setCruiseSpeed(0.0);
            $.gosub_ped.setObjEnterCarAsDriver($.car);
          }
          else {
            $.gosub_ped.setObjKillPlayerOnFoot($.player1);
          }
        }
        else {
          $.gosub_ped.setObjKillPlayerOnFoot($.player1);
          $.car.markAsNoLongerNeeded();
          $.car = -1;
        }
      }
    }
    else {
      const _res152 = Path.GetClosestCarNodeWithHeading($.coord_1_x, $.coord_1_y, $.coord_1_z);
$.coord_1_x = _res152.nodeX;
$.coord_1_y = _res152.nodeY;
$.coord_1_z = _res152.nodeZ;
$.heading = _res152.angle;
      if (!(Camera.IsPointOnScreen($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0))) {
        if (!(World.IsPointObscuredByAMissionEntity($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0, 3.0, 2.0))) {
          if (Streaming.HasModelLoaded($.random_car_model)) {
            $.car.markAsNoLongerNeeded();
            $.car = Car.Create($.random_car_model, $.coord_1_x, $.coord_1_y, $.coord_1_z);
            $.car.setHeading($.heading);
            $.gosub_ped.setObjEnterCarAsDriver($.car);
          }
        }
        else {
          if ($.gosub_ped.locateOnFoot3D($.coord_1_x, $.coord_1_y, $.coord_1_z, 3.0, 3.0, 2.0, false)) {
            const _res153 = Path.GetClosestCharNode($.coord_1_x, $.coord_1_y, $.coord_1_z);
$.coord_1_x = _res153.nodeX;
$.coord_1_y = _res153.nodeY;
$.coord_1_z = _res153.nodeZ;
            $.gosub_ped.setObjRunToCoord($.coord_1_x, $.coord_1_y);
          }
        }
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function criminal_car_stuck_checks() {
  ////////////////////////////////////////////////////////////////////////////


  $.game_time = Clock.GetGameTimer();


  if (!(Car.IsDead($.gosub_stuck_car))) {
    if ($.gosub_stuck_car.isUpsidedown() && $.gosub_stuck_car.isStopped()) {
      $.break_convoy_flag = 1;
      if ($.player1.locateAnyMeansCar2D($.gosub_stuck_car, 90.0, 90.0, false)) {
        $.gosub_stuck_car.setUpsidedownNotDamaged(false /* FALSE */);
        $.car_stuck_flag = -9;
      }
      else {
        if (!($.gosub_stuck_car.isOnScreen())) {
          const _res154 = $.gosub_stuck_car.getCoordinates();
$.coord_c1_x = _res154.x;
$.coord_c1_y = _res154.y;
$.coord_c1_z = _res154.z;
          const _res155 = Path.GetClosestCarNodeWithHeading($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
$.coord_c1_x = _res155.nodeX;
$.coord_c1_y = _res155.nodeY;
$.coord_c1_z = _res155.nodeZ;
$.heading = _res155.angle;
          if (!(Camera.IsPointOnScreen($.coord_c1_x, $.coord_c1_y, $.coord_c1_z, 4.0))) {
            $.gosub_stuck_car.setCoordinates($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
            $.gosub_stuck_car.setHeading($.heading);
          }
        }
      }
    }
    if ($.gosub_stuck_car.locate3D($.stuck_x, $.stuck_y, $.stuck_z, 4.0, 4.0, 4.0, false)) {
      if ($.car_stuck_flag == 0) {
        $.stuck_timer_start = $.game_time;
        $.car_stuck_flag = 1;
      }
      $.game_time = $.game_time - $.stuck_timer_start;
      if ($.car_stuck_flag == 1) {
        if ($.game_time > 8000) {
          if ($.player1.locateAnyMeansCar2D($.gosub_stuck_car, 90.0, 90.0, false)) {
            $.gosub_stuck_car.setUpsidedownNotDamaged(false /* FALSE */);
            $.stuck_timer_start = $.game_time;
            $.car_stuck_flag = -9;
          }
          else {
            if (!($.gosub_stuck_car.isOnScreen())) {
              const _res156 = $.gosub_stuck_car.getCoordinates();
$.coord_c1_x = _res156.x;
$.coord_c1_y = _res156.y;
$.coord_c1_z = _res156.z;
              const _res157 = Path.GetClosestCarNodeWithHeading($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
$.coord_c1_x = _res157.nodeX;
$.coord_c1_y = _res157.nodeY;
$.coord_c1_z = _res157.nodeZ;
$.heading = _res157.angle;
              if (!(World.IsPointObscuredByAMissionEntity($.coord_c1_x, $.coord_c1_y, $.coord_c1_z, 4.0, 4.0, 4.0))) {
                if (!(Camera.IsPointOnScreen($.coord_c1_x, $.coord_c1_y, $.coord_c1_z, 4.0))) {
                  $.gosub_stuck_car.setCoordinates($.coord_c1_x, $.coord_c1_y, $.coord_c1_z);
                  $.gosub_stuck_car.setHeading($.heading);
                  //								SET_JAMES_CAR_ON_PATH_TO_PLAYER gosub_stuck_car
                  $.stuck_timer_start = $.game_time;
                  $.car_stuck_flag = 0;
                  $.break_convoy_flag = 1;
                }
              }
            }
          }
        }
      }
    }
    if (!($.gosub_stuck_car.locate3D($.stuck_x, $.stuck_y, $.stuck_z, 4.0, 4.0, 4.0, false))) {
      const _res158 = $.gosub_stuck_car.getCoordinates();
$.stuck_x = _res158.x;
$.stuck_y = _res158.y;
$.stuck_z = _res158.z;
      $.car_stuck_flag = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function criminal1_group_breaking() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.criminal1))) {
    if (!(Char.IsDead($.criminal1_thug1))) {
      if (!($.criminal1_thug1.isInCharsGroup($.criminal1))) {
        if ($.criminal1_thug1.locateAnyMeansChar2D($.criminal1, 30.0, 30.0, false)) {
          $.criminal1_thug1.followChar($.criminal1);
        }
        else {
          $.criminal1_thug1.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal1_thug1.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.criminal1_thug2))) {
      if (!($.criminal1_thug2.isInCharsGroup($.criminal1))) {
        if ($.criminal1_thug2.locateAnyMeansChar2D($.criminal1, 30.0, 30.0, false)) {
          $.criminal1_thug2.followChar($.criminal1);
        }
        else {
          $.criminal1_thug2.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal1_thug2.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.criminal1_thug3))) {
      if (!($.criminal1_thug3.isInCharsGroup($.criminal1))) {
        if ($.criminal1_thug3.locateAnyMeansChar2D($.criminal1, 30.0, 30.0, false)) {
          $.criminal1_thug3.followChar($.criminal1);
        }
        else {
          $.criminal1_thug3.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal1_thug3.markAsNoLongerNeeded();
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function criminal2_group_breaking() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.criminal2))) {
    if (!(Char.IsDead($.criminal2_thug1))) {
      if (!($.criminal2_thug1.isInCharsGroup($.criminal2))) {
        if ($.criminal2_thug1.locateAnyMeansChar2D($.criminal2, 30.0, 30.0, false)) {
          $.criminal2_thug1.followChar($.criminal2);
        }
        else {
          $.criminal2_thug1.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal2_thug1.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.criminal2_thug2))) {
      if (!($.criminal2_thug2.isInCharsGroup($.criminal2))) {
        if ($.criminal2_thug2.locateAnyMeansChar2D($.criminal2, 30.0, 30.0, false)) {
          $.criminal2_thug2.followChar($.criminal2);
        }
        else {
          $.criminal2_thug2.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal2_thug2.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.criminal2_thug3))) {
      if (!($.criminal2_thug3.isInCharsGroup($.criminal2))) {
        if ($.criminal2_thug3.locateAnyMeansChar2D($.criminal2, 30.0, 30.0, false)) {
          $.criminal2_thug3.followChar($.criminal2);
        }
        else {
          $.criminal2_thug3.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal2_thug3.markAsNoLongerNeeded();
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function criminal3_group_breaking() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.criminal3))) {
    if (!(Char.IsDead($.criminal3_thug1))) {
      if (!($.criminal3_thug1.isInCharsGroup($.criminal3))) {
        if ($.criminal3_thug1.locateAnyMeansChar2D($.criminal3, 30.0, 30.0, false)) {
          $.criminal3_thug1.followChar($.criminal3);
        }
        else {
          $.criminal3_thug1.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal3_thug1.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.criminal3_thug2))) {
      if (!($.criminal3_thug2.isInCharsGroup($.criminal3))) {
        if ($.criminal3_thug2.locateAnyMeansChar2D($.criminal3, 30.0, 30.0, false)) {
          $.criminal3_thug2.followChar($.criminal3);
        }
        else {
          $.criminal3_thug2.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal3_thug2.markAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.criminal3_thug3))) {
      if (!($.criminal3_thug3.isInCharsGroup($.criminal3))) {
        if ($.criminal3_thug3.locateAnyMeansChar2D($.criminal3, 30.0, 30.0, false)) {
          $.criminal3_thug3.followChar($.criminal3);
        }
        else {
          $.criminal3_thug3.setObjKillPlayerAnyMeans($.player1);
        }
      }
    }
    else {
      $.criminal3_thug3.markAsNoLongerNeeded();
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function print_text_for_zone_char_is_in() {
  ////////////////////////////////////////////////////////////////////////////


  if (!(Char.IsDead($.criminal1))) {
    if ($.criminal1.isInZone("VICE_C")) {
      Text.PrintStringInStringNow("C_BREIF", "VICE_C", 5000, 1); // The criminal is proceeding south in Vice City
    }
    if ($.criminal1.isInZone("BEACH1")) {
      Text.PrintStringInStringNow("C_BREIF", "BEACH1", 5000, 1); // The criminal is proceeding south in Ocean Beach
    }
    if ($.criminal1.isInZone("BEACH2")) {
      Text.PrintStringInStringNow("C_BREIF", "BEACH2", 5000, 1); // The criminal is proceeding south in Washington Beach
    }
    if ($.criminal1.isInZone("BEACH3")) {
      Text.PrintStringInStringNow("C_BREIF", "BEACH3", 5000, 1); // The criminal is proceeding south in Vice Point
    }
    if ($.criminal1.isInZone("GOLFC")) {
      Text.PrintStringInStringNow("C_BREIF", "GOLFC", 5000, 1); // The criminal is proceeding south in Leaf Links
    }
    if ($.criminal1.isInZone("STARI")) {
      Text.PrintStringInStringNow("C_BREIF", "STARI", 5000, 1); // The criminal is proceeding south in Starfish Island
    }
    if ($.criminal1.isInZone("DOCKS")) {
      Text.PrintStringInStringNow("C_BREIF", "DOCKS", 5000, 1); // The criminal is proceeding south in ViceporT
    }
    if ($.criminal1.isInZone("HAVANA")) {
      Text.PrintStringInStringNow("C_BREIF", "HAVANA", 5000, 1); // The criminal is proceeding south in Little Havana
    }
    if ($.criminal1.isInZone("HAITI")) {
      Text.PrintStringInStringNow("C_BREIF", "HAITI", 5000, 1); // The criminal is proceeding south in Little Haiti
    }
    if ($.criminal1.isInZone("PORNI")) {
      Text.PrintStringInStringNow("C_BREIF", "PORNI", 5000, 1); // The criminal is proceeding south in Prawn Island
    }
    if ($.criminal1.isInZone("DTOWN")) {
      Text.PrintStringInStringNow("C_BREIF", "DTOWN", 5000, 1); // The criminal is proceeding south in Downtown
    }
    if ($.criminal1.isInZone("A_PORT")) {
      Text.PrintStringInStringNow("C_BREIF", "A_PORT", 5000, 1); // The criminal is proceeding south in Escobar International
    }
  }

  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////

async function setup_ped_threats_etc() {
  ////////////////////////////////////////////////////////////////////////////


  $.ped.setIsChrisCriminal(true /* TRUE */);
  $.ped.setRunning(true /* TRUE */);
  $.ped.setOnlyDamagedByPlayer(true /* TRUE */);
  $.ped.clearThreatSearch();
  $.ped.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);


  $.ped.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.ped.setThreatSearch(2 /* THREAT_PLAYER2 */);
  $.ped.setThreatSearch(4 /* THREAT_PLAYER3 */);
  $.ped.setThreatSearch(8 /* THREAT_PLAYER4 */);
  $.ped.setThreatSearch(16 /* THREAT_CIVMALE */);
  $.ped.setThreatSearch(32 /* THREAT_CIVFEMALE */);
  $.ped.setThreatSearch(64 /* THREAT_COP */);
  $.ped.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
  $.ped.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
  $.ped.setThreatSearch(512 /* THREAT_GANG_STREET */);
  $.ped.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
  $.ped.setThreatSearch(2048 /* THREAT_GANG_SECURITY */);
  $.ped.setThreatSearch(4096 /* THREAT_GANG_BIKER */);
  $.ped.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
  $.ped.setThreatSearch(16384 /* THREAT_GANG_GOLFER */);
  $.ped.setThreatSearch(65536 /* THREAT_EMERGENCY */);
  $.ped.setThreatSearch(131072 /* THREAT_PROSTITUTE */);
  $.ped.setThreatSearch(262144 /* THREAT_CRIMINAL */);
  $.ped.setThreatSearch(524288 /* THREAT_SPECIAL */);
  $.ped.setThreatSearch(1048576 /* THREAT_GUN */);
  $.ped.setThreatSearch(2097152 /* THREAT_COP_CAR */);
  $.ped.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
  $.ped.setThreatSearch(16777216 /* THREAT_FIREMAN */);
  $.ped.setHeedThreats(true /* TRUE */);


  if ($.copcar_level == 0) {
    $.random_int = Math.RandomIntInRange(0, 2);
  }


  if ($.copcar_level > 1) {
    $.random_int = Math.RandomIntInRange(0, 3);
  }


  if ($.copcar_level > 3) {
    $.random_int = Math.RandomIntInRange(0, 4);
  }


  if ($.copcar_level > 5) {
    $.random_int = Math.RandomIntInRange(0, 5);
  }


  if ($.copcar_level > 7) {
    $.random_int = Math.RandomIntInRange(0, 6);
  }


  if ($.random_int == 0) {
    $.random_int = Math.RandomIntInRange(10, 13);
    if ($.random_int == 10) {
      $.ped.giveWeapon(9 /* WEAPONTYPE_MACHETE */, 9999);
    }
    if ($.random_int == 11) {
      $.ped.giveWeapon(6 /* WEAPONTYPE_BASEBALLBAT */, 9999);
    }
  }


  if ($.random_int == 1) {
    $.ped.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 9999);
  }


  if ($.random_int == 2) {
    $.ped.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 9999);
  }


  if ($.random_int == 3) {
    $.ped.giveWeapon(27 /* WEAPONTYPE_RUGER */, 9999);
  }


  if ($.random_int == 4 || $.random_int == 5) {
    $.ped.giveWeapon(19 /* WEAPONTYPE_SHOTGUN */, 9999);
  }


  ////////////////////////////////////////////////////////////////////////////
}

////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////

async function copcar_cancelled_checks() {
  ////////////////////////////////////////////////////////////////////////////


  if (!($.cop_time_limit == -100)) {
    if ($.cop_time_limit < 1) {
      $.copcar_cancelled_flag = 1;
      Text.PrintNow("C_TIME", 3000, 1); //"Your time as a law enforcer is over!"
      return;
    }
  }


  if (!($.scplayer.isInAnyPoliceVehicle()) && !($.player1.isInModel(HUNTER)) && !($.player1.isInModel(FBICAR))) {
    Hud.FreezeTimer(false /* FALSE */);
    if ($.game_time_flag == 0) {
      $.game_timer_start = Clock.GetGameTimer();
      if ($.cop_time_limit > 60000) {
        $.copcar_timer = 60000;
      }
      else {
        $.copcar_timer = $.cop_time_limit;
      }
      $.game_time_flag = 1;
    }
    $.game_time_present = Clock.GetGameTimer();
    $.game_time_difference = $.game_time_present - $.game_timer_start;
    $.copcar_timer -= $.game_time_difference;
    $.game_timer_start = $.game_time_present;
    $.timer_in_secs = $.copcar_timer / 1000;
    if ($.timer_in_secs < 1) {
      $.timer_in_secs = 0;
      if ($.in_copcar_nice_timer < $.game_time_present) {
        Text.PrintNow("C_TIME", 3000, 1); //"Your time as a law enforcer is over!"
        $.copcar_cancelled_flag = 1;
        return;
      }
    }
    else {
      $.in_copcar_nice_timer = $.game_time_present + 1000;
    }
    Text.PrintWithNumberNow("COPCART", $.timer_in_secs, 200, 1); //You have ~1~ seconds to return to a squad car before the mission ends.
  }


  $.controlmode = Pad.GetControllerMode();


  if ($.scplayer.isInAnyPoliceVehicle() || $.player1.isInModel(HUNTER) || $.player1.isInModel(FBICAR)) {
    $.players_cop_car = $.player1.storeCarIsInNoSave();
    $.players_cop_car.setCanBurstTires(false /* FALSE */);
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
        if ($.mission_end_button == 1) {
          $.mission_end_button = 2;
        }
      }
      else {
        if ($.mission_end_button == 0) {
          $.mission_end_button = 1;
        }
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
        if ($.mission_end_button == 1) {
          $.mission_end_button = 2;
        }
      }
      else {
        if ($.mission_end_button == 0) {
          $.mission_end_button = 1;
        }
      }
    }
    $.game_time_flag = 0;
  }


  if ($.mission_end_button == 2) {
    if (!($.controlmode == 3)) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
        Text.PrintNow("C_CANC", 3000, 1); //"Police mission cancelled!"
        $.copcar_cancelled_flag = 1;
        return;
      }
    }
    else {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
        Text.PrintNow("C_CANC", 3000, 1); //"Police mission cancelled!"
        $.copcar_cancelled_flag = 1;
        return;
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////

  return;
  ////////////////////////////////////////////////////////////////////////////



  ////bikes
  //PCJ600	//sports bike			181
  //FAGGIO	//moped					182
  //FREEWAY//harley-style			183
  //SANCHEZ//scrambler bike			188
  //
  ////2-door
  //COMET	 //2-door sports		200
  //DELUXO	 //2-door sports		201
  //STINGER //2-door sports			122
  //INFERNUS//2-door sports			131
  //CHEETAH //2-door sports			135
  //BANSHEE //2-door sports			149
  //PHEONIX //2-door sports			197
  //BFINJECT//souped-up buggy		144
  //IDAHO   //2-door 70s			121
  //LINERUN //big rig			 	123
  //MANANA  //2-door pish			130
  //PONY    //light van				133
  //MULE 	 //heavy van			134
  //BOBCAT  //80s pick-up			142
  //ESPERANT//2-door 70s			139
  //MRWHOOP //ice-cream van			143
  //STALLION//small 2-door muscle	159
  //YANKEE	 //heavy van			176
  //SABRE	 //2-door 70s muscle	195
  //BURRITO //light van				202
  //WALTON  //50s pick-up			198
  //
  ////4-door
  //LANDSTAL//4-door offroad		120
  //PEREN   //60s station wagon		124
  //SENTINEL//4-door saloon			125
  //STRETCH //limo					129
  //MOONBEAM//people carrier		138
  //WASHING //4-door saloon			141
  //BUS	 //50s non-service bus		151
  //COACH	 //greyhound coach		157
  //RUMPO	 //light van			160
  //AMBASS	 //4-door saloon		165
  //GLENDALE//4-door 60s saloon		186
  //OCEANIC //4-door 60s saloon		187
  //HERMES	 //4-door 50s saloon	194
  //REGINA	 //4-door 70s saloon	199
  //RANCHER //hefty SUV				209


}

export async function copcar() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_copcar


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB copcar_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_copcar



  // Variables for mission

  //CARS PEDS OBJECTS PICKUPS

  // VAR_INT players_cop_car
  // VAR_INT criminal1_car criminal1 criminal1_thug1 criminal1_thug2 criminal1_thug3
  // VAR_INT criminal2_car criminal2 criminal2_thug1 criminal2_thug2 criminal2_thug3
  // VAR_INT criminal3_car criminal3 criminal3_thug1 criminal3_thug2 criminal3_thug3
  // VAR_INT ped
  //FLAGS COUNTERS TIMERS	ETC

  // VAR_INT copcar_level random_seed break_convoy_flag total_criminals_killed
  // VAR_INT game_timer_start vigilante_score num_of_followers
  // VAR_INT copcar_timer cop_time_limit game_time_flag copcar_cancelled_flag game_time_present
  // VAR_INT game_time_difference timer_in_secs mission_end_button cop_time_limit_int
  // VAR_INT players_cop_car_health timer_on_screen_flag criminal1_in_car_flag
  // VAR_INT criminal1_car_stuck_timer_start criminal1_car_stuck_flag
  // VAR_INT criminal1_dead_flag criminal1_thug1_dead_flag criminal1_thug2_dead_flag criminal1_thug3_dead_flag
  // VAR_INT criminal1_timera criminal1_team_dead_flag criminal2_in_car_flag
  // VAR_INT criminal2_car_stuck_timer_start criminal2_car_stuck_flag
  // VAR_INT criminal2_dead_flag criminal2_thug1_dead_flag criminal2_thug2_dead_flag criminal2_thug3_dead_flag
  // VAR_INT criminal2_timera criminal2_team_dead_flag criminal3_in_car_flag
  // VAR_INT criminal3_dead_flag criminal3_thug1_dead_flag criminal3_thug2_dead_flag criminal3_thug3_dead_flag
  // VAR_INT criminal3_timera criminal3_team_dead_flag
  // VAR_INT random_car_model
  // VAR_INT random_ped_model in_copcar_nice_timer copcar_print_level
  //BLIPS

  // VAR_INT criminal1_blip criminal2_blip criminal3_blip
  //COORDS MATHS

  // VAR_FLOAT car1_x car1_y car1_z car2_x car2_y car2_z car3_x car3_y car3_z random_heading
  // VAR_FLOAT player_dist_from_crim
  // VAR_FLOAT distance_from_player
  // VAR_FLOAT criminal1_x criminal1_y
  // VAR_FLOAT gosub_car_to_slow_x gosub_car_to_slow_y temp_float_x temp_float_y
  // VAR_FLOAT gosub_target_car_x gosub_target_car_y gosub_car_to_slow_speed
  // VAR_FLOAT dx dy temp_xy car1_infront_car2 car2_infront_car1 car2_infront_car3 car3_infront_car2
  // VAR_FLOAT criminal1_car_x criminal1_car_y criminal2_car_x criminal2_car_y criminal3_car_x criminal3_car_y
  // VAR_FLOAT forward_x forward_y temp_x temp_y time_bonus_divider wanted_level_multiplier
  // VAR_FLOAT criminal1_car_stuck_x criminal1_car_stuck_y criminal1_car_stuck_z criminal1_car_speed

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE stuff
  //VAR_FLOAT sum_x_y_temp x_temp y_temp stuck_x stuck_y stuck_z heading
  //VAR_FLOAT coord_1_x coord_1_y coord_1_z coord_2_x coord_2_y	coord_c1_x coord_c1_y coord_c1_z
  //VAR_INT game_timer frame_counter gosub_stuck_car car_stuck_flag stuck_timer_start gosub_ped
  //VAR_INT gosub_car_to_slow gosub_target_entity random_int max_passengers	game_time

  // ****************************************Mission Start************************************


}
