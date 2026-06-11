// Generated from main/ambulance.sc

import { $ } from "../utils/vars.mts";

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// *********************************** Ambulance missions **********************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {


  ONMISSION = 1;
  $.flag_player_on_ambulance_mission = 1;
  // SCRIPT_NAME ambulan


  if ($.done_ambulance_progress == 0) {
    Stat.RegisterMissionGiven();
  }


  await asyncWait(0);


  // LVAR_INT injured_ped_1 injured_ped_1_blip injured_ped_1_flag
  // LVAR_INT injured_ped_2 injured_ped_2_blip injured_ped_2_flag
  // LVAR_INT injured_ped_3 injured_ped_3_blip injured_ped_3_flag
  // LVAR_INT injured_ped_4 injured_ped_4_blip injured_ped_4_flag
  // LVAR_INT injured_ped_5 injured_ped_5_blip injured_ped_5_flag


  Text.LoadMissionText("AMBULAE");


  $.ped_time_limit = 0;
  $.players_ambulance = 0;
  $.ambulance_health_last = 0;
  $.ambulance_health_now = 0;
  $.time_drop = 0;
  $.max_peds_in_car = 0;
  $.peds_in_car = 0;
  $.number_of_injured_peds = 1;
  $.ped_counter = 0;
  injured_ped_1_flag = 0;
  injured_ped_2_flag = 0;
  injured_ped_3_flag = 0;
  injured_ped_4_flag = 0;
  injured_ped_5_flag = 0;
  $.injured_ped_6_flag = 0;
  $.injured_ped_7_flag = 0;
  $.injured_ped_8_flag = 0;
  $.injured_ped_9_flag = 0;
  $.injured_ped_10_flag = 0;
  $.injured_ped_11_flag = 0;
  $.injured_ped_12_flag = 0;
  $.saved_peds = 0;
  $.time_chunk_divider = 10.0;
  $.ambulance_level = 1;
  $.time_chunk = 0;
  $.time_chunk_in_secs = 0;
  $.score_am = 0;
  $.bonus_time_flag = 0;
  $.drop_off_time_bonus = 0;
  $.hospital_blip_flag = 0;
  $.mission_end_button_ambulance = 0;
  $.car_full_flag = 0;
  $.saved_peds_this_go = 0;
  $.player_failed_mission = 0;
  $.ped_coord_x = 0.0;
  $.ped_coord_y = 0.0;
  $.ped_coord_z = 0.0;


  Text.PrintNow("ATUTOR2", 3000, 1); // Take the injured people to the Hospital

  //WAIT 3000


  Game.SetWantedMultiplier(0.5);
}



async function mission_root() {


  Text.PrintWithNumber("ALEVEL", $.ambulance_level, 5000, 4); // Ambulance Mission Level ~1~


  Hud.ClearTimer($.$id.ped_time_limit);


  $.ped_time_limit = 0;


  if ($.player1.locateAnyMeans2D(361.298, -958.797, 750.0, 850.0, false)) {
    //BEACH SOUTH
    $.hospital_x = -133.0288;
    $.hospital_y = -981.1411;
    $.hospital_z = 9.4084;
    $.hospital_door_x = -134.3;
    $.hospital_door_y = -982.6;
  }
  else {
    if ($.player1.locateAnyMeans2D(574.234, 641.203, 750.0, 750.0, false)) {
      //BEACH NORTH
      $.hospital_x = 479.1241;
      $.hospital_y = 710.7480;
      $.hospital_z = 10.3577;
      $.hospital_door_x = 496.5145;
      $.hospital_door_y = 708.1912;
    }
    else {
      if ($.player1.locateAnyMeans2D(-1138.702, -902.039, 750.0, 900.0, false)) {
        //MAINLAND SOUTH
        $.hospital_x = -871.6317;
        $.hospital_y = -477.0081;
        $.hospital_z = 10.0683;
        $.hospital_door_x = -887.1110;
        $.hospital_door_y = -470.5340;
      }
      else {
        if ($.player1.locateAnyMeans2D(-1025.766, 847.961, 850.0, 850.0, false)) {
          //MAINLAND NORTH
          $.hospital_x = -823.1110;
          $.hospital_y = 1167.6761;
          $.hospital_z = 9.8744;
          $.hospital_door_x = -823.2640;
          $.hospital_door_y = 1140.0605;
        }
      }
    }
  }


  while ($.number_of_injured_peds > $.ped_counter) {
    await generate_random_coord();  // SCM GOSUB generate_random_coord
    if ($.player_failed_mission == 1) {
      // SCM GOTO → ambulance_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
    }
    await create_random_injured_ped();  // SCM GOSUB create_random_injured_ped
    await generate_timelimit();  // SCM GOSUB generate_timelimit
    ++$.ped_counter;
  }


  if ($.number_of_injured_peds > 3) {
    $.bonus_time_flag = 1;
  }
  else {
    $.bonus_time_flag = 0;
  }


  $.time_chunk = $.ped_time_limit / $.number_of_injured_peds;
  $.time_chunk /= 2;
  $.brackets_var = $.number_of_injured_peds + 1;
  $.time_chunk *= $.brackets_var;
  $.ped_time_limit += $.time_chunk;
  $.ped_time_limit = $.ped_time_limit / $.number_of_injured_peds;
  $.time_chunk = $.ped_time_limit;
  $.time_chunk /= 2;


  Hud.DisplayTimer($.$id.ped_time_limit, 1 /* TIMER_DOWN */);


  if (ONMISSION == 0) {
    $.hospital_blip = Blip.AddForCoord($.hospital_x, $.hospital_y, $.hospital_z);
  }


  // SCM GOTO → ambulance_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ambulance_loop"); // fallback: would break linear control flow
}


////////////////


async function create_random_injured_ped() {


  if ($.number_of_injured_peds > 0 && injured_ped_1_flag == 0) {
    injured_ped_1 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    injured_ped_1_flag = 1;
    injured_ped_1.setBleeding(true /* TRUE */);
    injured_ped_1.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    injured_ped_1.setHeading($.random_ped_heading);
    injured_ped_1.setRunning(true /* TRUE */);
    injured_ped_1.clearThreatSearch();
    injured_ped_1_blip = Blip.AddForChar(injured_ped_1);
    injured_ped_1.setObjWaitOnFoot();
    //FREEZE_CHAR_POSITION_AND_DONT_LOAD_COLLISION injured_ped_1 TRUE
    return;
  }


  if ($.number_of_injured_peds > 1 && injured_ped_2_flag == 0) {
    injured_ped_2 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    injured_ped_2_flag = 1;
    injured_ped_2.setBleeding(true /* TRUE */);
    injured_ped_2.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    injured_ped_2.setHeading($.random_ped_heading);
    injured_ped_2.setRunning(true /* TRUE */);
    injured_ped_2.clearThreatSearch();
    injured_ped_2_blip = Blip.AddForChar(injured_ped_2);
    injured_ped_2.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 2 && injured_ped_3_flag == 0) {
    injured_ped_3 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    injured_ped_3_flag = 1;
    injured_ped_3.setBleeding(true /* TRUE */);
    injured_ped_3.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    injured_ped_3.setHeading($.random_ped_heading);
    injured_ped_3.setRunning(true /* TRUE */);
    injured_ped_3.clearThreatSearch();
    injured_ped_3_blip = Blip.AddForChar(injured_ped_3);
    injured_ped_3.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 3 && injured_ped_4_flag == 0) {
    injured_ped_4 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    injured_ped_4_flag = 1;
    injured_ped_4.setBleeding(true /* TRUE */);
    injured_ped_4.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    injured_ped_4.setHeading($.random_ped_heading);
    injured_ped_4.setRunning(true /* TRUE */);
    injured_ped_4.clearThreatSearch();
    injured_ped_4_blip = Blip.AddForChar(injured_ped_4);
    injured_ped_4.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 4 && injured_ped_5_flag == 0) {
    injured_ped_5 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    injured_ped_5_flag = 1;
    injured_ped_5.setBleeding(true /* TRUE */);
    injured_ped_5.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    injured_ped_5.setHeading($.random_ped_heading);
    injured_ped_5.setRunning(true /* TRUE */);
    injured_ped_5.clearThreatSearch();
    injured_ped_5_blip = Blip.AddForChar(injured_ped_5);
    injured_ped_5.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 5 && $.injured_ped_6_flag == 0) {
    $.injured_ped_6 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_6_flag = 1;
    $.injured_ped_6.setBleeding(true /* TRUE */);
    $.injured_ped_6.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_6.setHeading($.random_ped_heading);
    $.injured_ped_6.setRunning(true /* TRUE */);
    $.injured_ped_6.clearThreatSearch();
    $.injured_ped_6_blip = Blip.AddForChar($.injured_ped_6);
    $.injured_ped_6.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 6 && $.injured_ped_7_flag == 0) {
    $.injured_ped_7 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_7_flag = 1;
    $.injured_ped_7.setBleeding(true /* TRUE */);
    $.injured_ped_7.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_7.setHeading($.random_ped_heading);
    $.injured_ped_7.setRunning(true /* TRUE */);
    $.injured_ped_7.clearThreatSearch();
    $.injured_ped_7_blip = Blip.AddForChar($.injured_ped_7);
    $.injured_ped_7.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 7 && $.injured_ped_8_flag == 0) {
    $.injured_ped_8 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_8_flag = 1;
    $.injured_ped_8.setBleeding(true /* TRUE */);
    $.injured_ped_8.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_8.setHeading($.random_ped_heading);
    $.injured_ped_8.setRunning(true /* TRUE */);
    $.injured_ped_8.clearThreatSearch();
    $.injured_ped_8_blip = Blip.AddForChar($.injured_ped_8);
    $.injured_ped_8.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 8 && $.injured_ped_9_flag == 0) {
    $.injured_ped_9 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_9_flag = 1;
    $.injured_ped_9.setBleeding(true /* TRUE */);
    $.injured_ped_9.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_9.setHeading($.random_ped_heading);
    $.injured_ped_9.setRunning(true /* TRUE */);
    $.injured_ped_9.clearThreatSearch();
    $.injured_ped_9_blip = Blip.AddForChar($.injured_ped_9);
    $.injured_ped_9.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 9 && $.injured_ped_10_flag == 0) {
    $.injured_ped_10 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_10_flag = 1;
    $.injured_ped_10.setBleeding(true /* TRUE */);
    $.injured_ped_10.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_10.setHeading($.random_ped_heading);
    $.injured_ped_10.setRunning(true /* TRUE */);
    $.injured_ped_10.clearThreatSearch();
    $.injured_ped_10_blip = Blip.AddForChar($.injured_ped_10);
    $.injured_ped_10.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 10 && $.injured_ped_11_flag == 0) {
    $.injured_ped_11 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_11_flag = 1;
    $.injured_ped_11.setBleeding(true /* TRUE */);
    $.injured_ped_11.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_11.setHeading($.random_ped_heading);
    $.injured_ped_11.setRunning(true /* TRUE */);
    $.injured_ped_11.clearThreatSearch();
    $.injured_ped_11_blip = Blip.AddForChar($.injured_ped_11);
    $.injured_ped_11.setObjWaitOnFoot();
    return;
  }


  if ($.number_of_injured_peds > 11 && $.injured_ped_12_flag == 0) {
    $.injured_ped_12 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_12_flag = 1;
    $.injured_ped_12.setBleeding(true /* TRUE */);
    $.injured_ped_12.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_12.setHeading($.random_ped_heading);
    $.injured_ped_12.setRunning(true /* TRUE */);
    $.injured_ped_12.clearThreatSearch();
    $.injured_ped_12_blip = Blip.AddForChar($.injured_ped_12);
    $.injured_ped_12.setObjWaitOnFoot();
    return;
  }
}


////////////////


async function generate_random_coord() {


  await asyncWait(0);


  const _res1 = $.player1.getCoordinates();
$.player1_a_x = _res1.x;
$.player1_a_y = _res1.y;
$.player1_a_z = _res1.z;


  if ($.hospital_x == -133.0288) {
    $.random_x = Math.RandomFloatInRange(-388.702, 1111.298);
    $.random_y = Math.RandomFloatInRange(-1808.797, -108.797);
  }


  if ($.hospital_x == 479.1241) {
    $.random_x = Math.RandomFloatInRange(-175.766, 1324.234);
    $.random_y = Math.RandomFloatInRange(-108.797, 1391.203);
  }


  if ($.hospital_x == -871.6317) {
    $.random_x = Math.RandomFloatInRange(-1888.702, -388.702);
    $.random_y = Math.RandomFloatInRange(-1802.039, -2.039);
  }


  if ($.hospital_x == -823.1110) {
    $.random_x = Math.RandomFloatInRange(-1875.766, -175.766);
    $.random_y = Math.RandomFloatInRange(-2.039, 1697.961);
  }


  $.controlmode = Pad.GetControllerMode();


  if (!($.controlmode == 3)) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      $.mission_end_button_ambulance = 1;
    }
  }
  else {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.mission_end_button_ambulance = 1;
    }
  }


  if ($.mission_end_button_ambulance == 1) {
    if (!($.controlmode == 3)) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
        Text.PrintNow("A_CANC", 3000, 1); //"~r~Ambulance mission cancelled!"
        $.player_failed_mission = 1;
        return;
      }
    }
    else {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
        Text.PrintNow("A_CANC", 3000, 1); //"~r~Ambulance mission cancelled!"
        $.player_failed_mission = 1;
        return;
      }
    }
  }


  if (!($.player1.isInModel(AMBULAN))) {
    Text.PrintNow("A_CANC", 3000, 1); //"~r~Ambulance mission cancelled!"
    $.player_failed_mission = 1;
    return;
  }


  const _res2 = Path.GetClosestCharNode($.random_x, $.random_y, $.player1_a_z);
$.ped_coord_x = _res2.nodeX;
$.ped_coord_y = _res2.nodeY;
$.ped_coord_z = _res2.nodeZ;


  if ($.flag_baron_mission2_passed == 0) {
    if ($.ped_coord_x > -2327.212 && $.ped_coord_x < -261.402 && $.ped_coord_y > -2027.821 && $.ped_coord_y < 1894.426) {
      // SCM GOTO → generate_random_coord (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
    }
    if ($.ped_coord_x > -265.018 && $.ped_coord_x < 170.188 && $.ped_coord_y > -275.942 && $.ped_coord_y < 1689.059) {
      // SCM GOTO → generate_random_coord (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
    }
    if ($.ped_coord_x > -265.657 && $.ped_coord_x < 36.828 && $.ped_coord_y > -729.217 && $.ped_coord_y < -275.488) {
      // SCM GOTO → generate_random_coord (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
    }
    if ($.ped_coord_x > 164.191 && $.ped_coord_x < 259.713 && $.ped_coord_y > -187.926 && $.ped_coord_y < 631.97) {
      // SCM GOTO → generate_random_coord (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
    }
  }
  //POLICE STATION BEACH SOUTH

  if ($.ped_coord_x > 333.358 && $.ped_coord_x < 435.544 && $.ped_coord_y > -557.261 && $.ped_coord_y < -433.179) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MALL BEACH SOUTH

  if ($.ped_coord_x > -64.434 && $.ped_coord_x < 81.544 && $.ped_coord_y > -995.198 && $.ped_coord_y < -896.662) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MALIBU

  if ($.ped_coord_x > 446.491 && $.ped_coord_x < 599.769 && $.ped_coord_y > -92.564 && $.ped_coord_y < 53.415) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //GOLF COURSE

  if ($.ped_coord_x > -192.361 && $.ped_coord_x < 234.821 && $.ped_coord_y > -272.607 && $.ped_coord_y < 406.194) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //GOLF COURSE

  if ($.ped_coord_x > -290.702 && $.ped_coord_x < 282.265 && $.ped_coord_y > 398.714 && $.ped_coord_y < 661.476) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //BRIDGE

  if ($.ped_coord_x > -728.193 && $.ped_coord_x < -67.639 && $.ped_coord_y > -20.866 && $.ped_coord_y < 99.566) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MANSION

  if ($.ped_coord_x > -516.97 && $.ped_coord_x < -188.518 && $.ped_coord_y > -667.97 && $.ped_coord_y < -507.393) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //TANKER

  if ($.ped_coord_x > -710.393 && $.ped_coord_x < -579.012 && $.ped_coord_y > -1416.112 && $.ped_coord_y < -1211.742) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //BIG MALL

  if ($.ped_coord_x > 333.358 && $.ped_coord_x < 493.934 && $.ped_coord_y > 991.328 && $.ped_coord_y < 1261.389) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //BEHIND AMMUNATION DOWNTOWN

  if ($.ped_coord_x > -790.682 && $.ped_coord_x < -626.456 && $.ped_coord_y > 1196.908 && $.ped_coord_y < 1306.392) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //PHILS YARD

  if ($.ped_coord_x > -1173.877 && $.ped_coord_x < -1027.898 && $.ped_coord_y > 237.098 && $.ped_coord_y < 415.922) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //BUDDY YARD

  if ($.ped_coord_x > -1389.195 && $.ped_coord_x < -1199.422 && $.ped_coord_y > -47.561 && $.ped_coord_y < 229.799) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //AIPORT TEMINAL

  if ($.ped_coord_x > -1571.667 && $.ped_coord_x < -1290.658 && $.ped_coord_y > -1007.371 && $.ped_coord_y < -784.753) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //SOUTH BRIDGE

  if ($.ped_coord_x > -757.335 && $.ped_coord_x < -219.313 && $.ped_coord_y > -979.568 && $.ped_coord_y < -878.689) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //STARISLAND BRIDGE

  if ($.ped_coord_x > -180.88 && $.ped_coord_x < 64.112 && $.ped_coord_y > -499.183 && $.ped_coord_y < -417.519) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //LIGHTHOUSE JETTYS

  if ($.ped_coord_x > 511.112 && $.ped_coord_x < 638.214 && $.ped_coord_y > -1815.644 && $.ped_coord_y < -1679.04) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //BOAT YARD

  if ($.ped_coord_x > -691.673 && $.ped_coord_x < -581.673 && $.ped_coord_y > -1519.748 && $.ped_coord_y < -1449.748) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //PRINT WORKS

  if ($.ped_coord_x > -1176.038 && $.ped_coord_x < -1012.796 && $.ped_coord_y > -266.898 && $.ped_coord_y < -158.26) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //CAR YARD

  if ($.ped_coord_x > -1031.494 && $.ped_coord_x < -949.479 && $.ped_coord_y > -902.312 && $.ped_coord_y < -821.592) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //ICECREAM

  if ($.ped_coord_x > -896.098 && $.ped_coord_x < -855.09 && $.ped_coord_y > -593.101 && $.ped_coord_y < -548.64) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //TAXIFIRM

  if ($.ped_coord_x > -1012.06 && $.ped_coord_x < -982.06 && $.ped_coord_y > 181.561 && $.ped_coord_y < 216.561) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //PORN STUDIO

  if ($.ped_coord_x > -112.495 && $.ped_coord_x < 9.705 && $.ped_coord_y > 920.349 && $.ped_coord_y < 1025.694) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //HOTEL WITH GLASSHOUSE & SWIMMING POOL OUT BACK

  if ($.ped_coord_x > 533.891 && $.ped_coord_x < 673.891 && $.ped_coord_y > -343.116 && $.ped_coord_y < -183.116) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //ARMY BASE

  if ($.ped_coord_x > -1783.2216 && $.ped_coord_x < -1586.5990 && $.ped_coord_y > -307.5092 && $.ped_coord_y < -84.3105) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //PIZZA SHOP DOWNTOWN

  if ($.ped_coord_x > -903.6972 && $.ped_coord_x < -882.7946 && $.ped_coord_y > 791.7817 && $.ped_coord_y < 808.3229) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //PIZZA SHOP HAITI

  if ($.ped_coord_x > -1059.2343 && $.ped_coord_x < -1040.1482 && $.ped_coord_y > 73.3646 && $.ped_coord_y < 89.7497) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //HAITIAN BASE

  if ($.ped_coord_x > -1235.7916 && $.ped_coord_x < -1110.9315 && $.ped_coord_y > 32.1217 && $.ped_coord_y < 126.1341) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }






  if ($.ped_coord_z < 6.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }


  $.difference_x_float_a = $.player1_a_x - $.ped_coord_x;
  $.difference_y_float_a = $.player1_a_y - $.ped_coord_y;
  $.difference_x_float_a = $.difference_x_float_a * $.difference_x_float_a;
  $.difference_y_float_a = $.difference_y_float_a * $.difference_y_float_a;
  $.sum_difference_a_xy = $.difference_x_float_a + $.difference_y_float_a;
  $.players_distance_from_ped = Math.Sqrt($.sum_difference_a_xy);


  if ($.players_distance_from_ped < 120.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }


  $.difference_x_float_a = $.hospital_x - $.ped_coord_x;
  $.difference_y_float_a = $.hospital_y - $.ped_coord_y;
  $.difference_x_float_a = $.difference_x_float_a * $.difference_x_float_a;
  $.difference_y_float_a = $.difference_y_float_a * $.difference_y_float_a;
  $.sum_difference_a_xy = $.difference_x_float_a + $.difference_y_float_a;
  $.peds_distance_from_hospital = Math.Sqrt($.sum_difference_a_xy);


  if ($.peds_distance_from_hospital < 100.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }


  if (injured_ped_1_flag > 0) {
    if (!(Char.IsDead(injured_ped_1))) {
      if (injured_ped_1.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if (injured_ped_2_flag > 0) {
    if (!(Char.IsDead(injured_ped_2))) {
      if (injured_ped_2.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if (injured_ped_3_flag > 0) {
    if (!(Char.IsDead(injured_ped_3))) {
      if (injured_ped_3.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if (injured_ped_4_flag > 0) {
    if (!(Char.IsDead(injured_ped_4))) {
      if (injured_ped_4.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if (injured_ped_5_flag > 0) {
    if (!(Char.IsDead(injured_ped_5))) {
      if (injured_ped_5.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if ($.injured_ped_6_flag > 0) {
    if (!(Char.IsDead($.injured_ped_6))) {
      if ($.injured_ped_6.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if ($.injured_ped_7_flag > 0) {
    if (!(Char.IsDead($.injured_ped_7))) {
      if ($.injured_ped_7.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if ($.injured_ped_8_flag > 0) {
    if (!(Char.IsDead($.injured_ped_8))) {
      if ($.injured_ped_8.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if ($.injured_ped_9_flag > 0) {
    if (!(Char.IsDead($.injured_ped_9))) {
      if ($.injured_ped_9.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if ($.injured_ped_10_flag > 0) {
    if (!(Char.IsDead($.injured_ped_10))) {
      if ($.injured_ped_10.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }


  if ($.injured_ped_11_flag > 0) {
    if (!(Char.IsDead($.injured_ped_11))) {
      if ($.injured_ped_11.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
}


////////////////


async function generate_timelimit() {


  $.ped_time_limit_float = $.peds_distance_from_hospital / $.time_chunk_divider;
  $.ped_time_limit_float = $.ped_time_limit_float * 1000.0;
  $.ped_time_limit_temp = $.ped_time_limit_float;
  $.ped_time_limit += $.ped_time_limit_temp;
}


///////////////


async function ambulance_loop() {
  // SCM GOTO → ambulance_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    $.controlmode = Pad.GetControllerMode();


    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
        $.mission_end_button_ambulance = 1;
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
        $.mission_end_button_ambulance = 1;
      }
    }


    if ($.mission_end_button_ambulance == 1) {
      if (!($.controlmode == 3)) {
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
          Text.PrintNow("A_CANC", 3000, 1); //"~r~Ambulance mission cancelled!"
          // SCM GOTO → ambulance_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
        }
      }
      else {
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
          Text.PrintNow("A_CANC", 3000, 1); //"~r~Ambulance mission cancelled!"
          // SCM GOTO → ambulance_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
        }
      }
    }


    if (!($.player1.isInModel(AMBULAN))) {
      Text.PrintNow("A_CANC", 3000, 1); //"~r~Ambulance mission cancelled!"
      // SCM GOTO → ambulance_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
    }
    else {
      $.players_ambulance = $.player1.storeCarIsIn();
    }


    if ($.number_of_injured_peds > 6 && $.bonus_time_flag == 2 && $.drop_off_time_bonus == 0) {
      $.bonus_time_flag = 1;
      ++$.drop_off_time_bonus;
    }


    if ($.number_of_injured_peds > 9 && $.bonus_time_flag == 2 && $.drop_off_time_bonus == 1) {
      $.bonus_time_flag = 1;
      ++$.drop_off_time_bonus;
    }


    if ($.number_of_injured_peds > 12 && $.bonus_time_flag == 2 && $.drop_off_time_bonus == 2) {
      $.bonus_time_flag = 1;
      ++$.drop_off_time_bonus;
    }

    /////////////////


    if (injured_ped_1_flag > 0) {
      $.ped_var_for_gosub = injured_ped_1;
      $.ped_var_for_gosub_flag = injured_ped_1_flag;
      $.ped_var_for_gosub_blip = injured_ped_1_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      injured_ped_1_flag = $.ped_var_for_gosub_flag;


    }

    /////////////////


    if (injured_ped_2_flag > 0) {
      $.ped_var_for_gosub = injured_ped_2;
      $.ped_var_for_gosub_flag = injured_ped_2_flag;
      $.ped_var_for_gosub_blip = injured_ped_2_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      injured_ped_2_flag = $.ped_var_for_gosub_flag;
    }

    //////////////////


    if (injured_ped_3_flag > 0) {
      $.ped_var_for_gosub = injured_ped_3;
      $.ped_var_for_gosub_flag = injured_ped_3_flag;
      $.ped_var_for_gosub_blip = injured_ped_3_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      injured_ped_3_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if (injured_ped_4_flag > 0) {
      $.ped_var_for_gosub = injured_ped_4;
      $.ped_var_for_gosub_flag = injured_ped_4_flag;
      $.ped_var_for_gosub_blip = injured_ped_4_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      injured_ped_4_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if (injured_ped_5_flag > 0) {
      $.ped_var_for_gosub = injured_ped_5;
      $.ped_var_for_gosub_flag = injured_ped_5_flag;
      $.ped_var_for_gosub_blip = injured_ped_5_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      injured_ped_5_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.injured_ped_6_flag > 0) {
      $.ped_var_for_gosub = $.injured_ped_6;
      $.ped_var_for_gosub_flag = $.injured_ped_6_flag;
      $.ped_var_for_gosub_blip = $.injured_ped_6_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      $.injured_ped_6_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.injured_ped_7_flag > 0) {
      $.ped_var_for_gosub = $.injured_ped_7;
      $.ped_var_for_gosub_flag = $.injured_ped_7_flag;
      $.ped_var_for_gosub_blip = $.injured_ped_7_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      $.injured_ped_7_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.injured_ped_8_flag > 0) {
      $.ped_var_for_gosub = $.injured_ped_8;
      $.ped_var_for_gosub_flag = $.injured_ped_8_flag;
      $.ped_var_for_gosub_blip = $.injured_ped_8_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      $.injured_ped_8_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.injured_ped_9_flag > 0) {
      $.ped_var_for_gosub = $.injured_ped_9;
      $.ped_var_for_gosub_flag = $.injured_ped_9_flag;
      $.ped_var_for_gosub_blip = $.injured_ped_9_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      $.injured_ped_9_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.injured_ped_10_flag > 0) {
      $.ped_var_for_gosub = $.injured_ped_10;
      $.ped_var_for_gosub_flag = $.injured_ped_10_flag;
      $.ped_var_for_gosub_blip = $.injured_ped_10_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      $.injured_ped_10_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.injured_ped_11_flag > 0) {
      $.ped_var_for_gosub = $.injured_ped_11;
      $.ped_var_for_gosub_flag = $.injured_ped_11_flag;
      $.ped_var_for_gosub_blip = $.injured_ped_11_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      $.injured_ped_11_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.injured_ped_12_flag > 0) {
      $.ped_var_for_gosub = $.injured_ped_12;
      $.ped_var_for_gosub_flag = $.injured_ped_12_flag;
      $.ped_var_for_gosub_blip = $.injured_ped_12_blip;
      await injured_ped_checks();  // SCM GOSUB injured_ped_checks
      if ($.player_failed_mission == 1) {
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      $.injured_ped_12_flag = $.ped_var_for_gosub_flag;
    }

    ////////////////


    if ($.saved_peds == $.number_of_injured_peds) {
      $.score_am = $.ambulance_level * $.ambulance_level;
      $.score_am *= 50;
      Text.PrintWithNumberBig("REWARD", $.score_am, 6000, 6);
      $.total_saved_peds += $.saved_peds;
      $.saved_peds_this_go += $.saved_peds;
      ++$.number_of_injured_peds;
      $.saved_peds = 0;
      $.ped_counter = 0;
      $.player1.addScore($.score_am);
      $.hospital_blip_flag = 0;
      $.hospital_blip.remove();
      injured_ped_1_blip.remove();
      injured_ped_2_blip.remove();
      injured_ped_3_blip.remove();
      injured_ped_4_blip.remove();
      injured_ped_5_blip.remove();
      $.injured_ped_6_blip.remove();
      $.injured_ped_7_blip.remove();
      $.injured_ped_8_blip.remove();
      $.injured_ped_9_blip.remove();
      $.injured_ped_10_blip.remove();
      $.injured_ped_11_blip.remove();
      $.injured_ped_12_blip.remove();
      Stat.RegisterAmbulanceLevel($.ambulance_level);
      ++$.ambulance_level;
      if ($.ambulance_level == 13) {
        Text.PrintWithNumberBig("A_COMP1", 15000, 5000, 5); //"Ambulance missions complete: $ ~1~"
        $.player1.addScore(25000);
        Audio.PlayMissionPassedTune(1);
        $.player1.setNeverGetsTired(true /* TRUE */);
        if ($.done_ambulance_progress == 0) {
          Stat.PlayerMadeProgress(1);
          Text.PrintHelp("A_COMP2"); //"You will never get tired!"
          $.player1.setNeverGetsTired(true /* TRUE */);
          Stat.RegisterOddjobMissionPassed();
          $.done_ambulance_progress = 1;
        }
        return;
      }
      // SCM GOTO → mission_root (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_root"); // fallback: would break linear control flow
    }


  }
}




async function cleanup() {


  Hud.ClearTimer($.$id.ped_time_limit);
  if (!($.ambulance_level == 13)) {
    Text.PrintBig("A_FAIL1", 5000, 5);
    Text.PrintWithNumberBig("A_SAVES", $.saved_peds_this_go, 6000, 6); //PEOPLE SAVED: ~1~
  }


  $.hospital_blip_flag = 0;
  $.hospital_blip.remove();
  injured_ped_1_blip.remove();
  injured_ped_2_blip.remove();
  injured_ped_3_blip.remove();
  injured_ped_4_blip.remove();
  injured_ped_5_blip.remove();
  $.injured_ped_6_blip.remove();
  $.injured_ped_7_blip.remove();
  $.injured_ped_8_blip.remove();
  $.injured_ped_9_blip.remove();
  $.injured_ped_10_blip.remove();
  $.injured_ped_11_blip.remove();
  $.injured_ped_12_blip.remove();


  Game.SetWantedMultiplier(1.0);


  $.timer_mobile_start = Clock.GetGameTimer();


  ONMISSION = 0;
  $.flag_player_on_ambulance_mission = 0;
  Mission.Finish();
  if ($.done_ambulance_progress == 1) {
    Text.PrintHelp("A_COMP2"); //"You will never get tired!"
    $.done_ambulance_progress = 2;
  }
}



//////////////////////////////////////////////////////////////////////

async function injured_ped_checks() {
  if (Char.IsDead($.ped_var_for_gosub)) {
    Text.PrintNow("A_FAIL3", 3000, 1); //The patient is dead
    $.player_failed_mission = 1;
    return;
  }


  if ($.ped_time_limit == 0) {
    $.ped_var_for_gosub.explodeHead();
    $.ped_var_for_gosub.removeElegantly();
    Text.PrintNow("A_FAIL2", 3000, 1); //"Your too late"
    $.player_failed_mission = 1;
    return;
  }


  if ($.ped_var_for_gosub_flag == 3) {
    const _res3 = $.ped_var_for_gosub.getCoordinates();
$.sound_x = _res3.x;
$.sound_y = _res3.y;
$.sound_z = _res3.z;
    $.ambulance_health_now = $.players_ambulance.getHealth();
    if ($.ambulance_health_now < $.ambulance_health_last) {
      $.time_drop = $.ambulance_health_last - $.ambulance_health_now;
      $.time_drop = $.time_drop * 50;
      $.ped_time_limit = $.ped_time_limit - $.time_drop;
      if ($.ped_var_for_gosub.isMale()) {
        Sound.AddOneOffSound($.sound_x, $.sound_y, $.sound_z, 19 /* SOUND_MALE_AMBULANCE_OUCH */);
      }
      else {
        Sound.AddOneOffSound($.sound_x, $.sound_y, $.sound_z, 20 /* SOUND_FEMALE_AMBULANCE_OUCH */);
      }
      if ($.ped_time_limit < 0) {
        $.ped_time_limit = 0;
      }
      $.ambulance_health_last = $.ambulance_health_now;
    }
  }


  if ($.ped_var_for_gosub_flag == 1) {
    if ($.player1.locateInCarChar3D($.ped_var_for_gosub, 10.0, 10.0, 2.0, false)) {
      $.peds_in_car = $.players_ambulance.getNumberOfPassengers();
      $.max_peds_in_car = $.players_ambulance.getMaximumNumberOfPassengers();
      if ($.peds_in_car == $.max_peds_in_car) {
        Text.PrintNow("A_FULL", 5000, 1); //"Ambulance full!!!"
        $.car_full_flag = 1;
      }
      else {
        $.car_full_flag = 0;
      }
      $.ambulance_health_last = $.players_ambulance.getHealth();
      if ($.car_full_flag == 0) {
        $.ped_var_for_gosub.setObjEnterCarAsPassenger($.players_ambulance);
        $.ped_var_for_gosub_flag = 2;
      }
    }
  }


  if ($.ped_var_for_gosub_flag == 2) {
    if (!($.player1.locateInCarChar2D($.ped_var_for_gosub, 20.0, 20.0, false))) {
      $.ped_var_for_gosub_flag = 1;
    }
    if ($.ped_var_for_gosub.isObjNoObj()) {
      if (!($.ped_var_for_gosub.isInAnyCar())) {
        $.ped_var_for_gosub_flag = 1;
      }
    }
  }


  if ($.ped_var_for_gosub_flag == 2) {
    if ($.ped_var_for_gosub.isInAnyCar()) {
      $.ped_var_for_gosub_blip.remove();
      if ($.hospital_blip_flag == 0) {
        $.hospital_blip = Blip.AddForCoord($.hospital_x, $.hospital_y, $.hospital_z);
        $.hospital_blip_flag = 1;
      }
      $.time_chunk_in_secs = $.time_chunk / 1000;
      Text.PrintWithNumberBig("A_TIME", $.time_chunk_in_secs, 6000, 6); //+~1~ Seconds
      $.ped_time_limit += $.time_chunk;
      $.ped_var_for_gosub_flag = 3;
    }
  }


  if ($.ped_var_for_gosub_flag == 3) {
    if ($.player1.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
      $.ped_var_for_gosub.setObjRunToCoord($.hospital_door_x, $.hospital_door_y);
      $.ped_var_for_gosub_flag = 4;
    }
  }


  if ($.ped_var_for_gosub_flag == 4) {
    $.ped_var_for_gosub.setObjRunToCoord($.hospital_door_x, $.hospital_door_y);
    if (!($.ped_var_for_gosub.isInAnyCar())) {
      $.ped_var_for_gosub.setObjRunToCoord($.hospital_door_x, $.hospital_door_y);
      $.ped_var_for_gosub.markAsNoLongerNeeded();
      Text.PrintBig("A_PASS", 3000, 5);
      if ($.bonus_time_flag == 1) {
        $.time_chunk_in_secs = $.time_chunk / 1000;
        Text.PrintWithNumberBig("A_TIME", $.time_chunk_in_secs, 6000, 6); //+~1~ Seconds
        $.players_ambulance = $.player1.storeCarIsIn();
        $.players_ambulance_health = $.players_ambulance.getHealth();
        $.players_ambulance_health += 110;
        $.players_ambulance.setHealth($.players_ambulance_health);
        $.ped_time_limit += $.time_chunk;
        ++$.bonus_time_flag;
      }
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      ++$.saved_peds;
      Stat.RegisterLifeSaved();
      $.ped_var_for_gosub_flag = 0;
    }
  }
  return;
  //////////////////////////////////////////////////////////////////////

}

export async function ambulance() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_ambulance


  await cleanup();  // SCM GOSUB ambulance_failed



  // Variables for mission


  // VAR_INT ped_time_limit players_ambulance ped_time_limit_temp ped_counter number_of_injured_peds brackets_var
  // VAR_INT ambulance_health_last ambulance_health_now time_drop max_peds_in_car peds_in_car score_am bonus_time_flag
  // VAR_INT saved_peds hospital_blip time_chunk ambulance_level time_chunk_in_secs car_full_flag
  // VAR_INT drop_off_time_bonus hospital_blip_flag mission_end_button_ambulance players_ambulance_health saved_peds_this_go
  // VAR_INT injured_ped_6 injured_ped_6_blip injured_ped_6_flag
  // VAR_INT injured_ped_7 injured_ped_7_blip injured_ped_7_flag
  // VAR_INT injured_ped_8 injured_ped_8_blip injured_ped_8_flag
  // VAR_INT injured_ped_9 injured_ped_9_blip injured_ped_9_flag
  // VAR_INT injured_ped_10 injured_ped_10_blip injured_ped_10_flag
  // VAR_INT injured_ped_11 injured_ped_11_blip injured_ped_11_flag
  // VAR_INT injured_ped_12 injured_ped_12_blip injured_ped_12_flag
  // VAR_INT ped_var_for_gosub ped_var_for_gosub_flag ped_var_for_gosub_blip player_failed_mission


  // VAR_FLOAT random_x random_y hospital_x hospital_y hospital_z
  // VAR_FLOAT player1_a_x player1_a_y player1_a_z hospital_door_x hospital_door_y
  // VAR_FLOAT ped_coord_x ped_coord_y ped_coord_z sound_x sound_y sound_z
  // VAR_FLOAT difference_x_float_a difference_y_float_a sum_difference_a_xy
  // VAR_FLOAT players_distance_from_ped peds_distance_from_hospital ped_time_limit_float random_ped_heading time_chunk_divider


  // ****************************************Mission Start************************************


}
