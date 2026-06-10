// Generated from main/hait2.sc

import { $ } from "../vars.mts";
import { timed } from "../scm.mts";

// *****************************************************************************************
// ********************************* Haitian Mission 2 *************************************
// ************************************* Drop Off ******************************************
// *****************************************************************************************
// *** The Haitians *** Bombs Away
// *****************************************************************************************

async function body() {


  ONMISSION = 1;
  $.flag_player_on_rc_mission = 1;


  Stat.RegisterMissionGiven();
  // SCRIPT_NAME HAIT2


  await asyncWait(0);


  // LVAR_INT cuban_dude01_flag cuban_dude01_timer
  // LVAR_INT cuban_dude02_flag cuban_dude02_timer
  // LVAR_INT cuban_dude03_flag cuban_dude03_timer
  // LVAR_INT cuban_dude04_flag cuban_dude04_timer
  // LVAR_INT cuban_dude05_flag cuban_dude05_timer
  // LVAR_INT cuban_dude06_flag cuban_dude06_timer
  // LVAR_INT cuban_dude07_flag cuban_dude07_timer
  // LVAR_INT cuban_dude08_flag cuban_dude08_timer


  Text.LoadMissionText("HAIT2");
  Shortcut.SetDropoffPointForMission(-957.904, 122.843, 8.278, 356.948);


  $.rc_plane = -1;
  $.no_of_rc_planes_left = 3;


  $.circle_button_pressed = 0;
  $.circle_button_timer = 0;
  $.detonation_timer = 0;
  $.bomb_is_primed_flag = 0;
  $.next_bomb_timer = 0;
  $.player_attacking_flag = 0;
  $.boat_route_counter = 0;
  $.new_boat_using_gosub = 0;
  $.dead_cubans = 0;
  $.button_pressed = 0;
  $.help_counter_h2 = 0;
  $.help_timer_h2 = 0;
  $.player_run_out_of_planes_timer = 0;
  $.player_run_out_of_planes = 0;


  cuban_dude01_flag = 0;
  cuban_dude01_timer = 0;
  cuban_dude02_flag = 0;
  cuban_dude02_timer = 0;
  cuban_dude03_flag = 0;
  cuban_dude03_timer = 0;
  cuban_dude04_flag = 0;
  cuban_dude04_timer = 0;
  cuban_dude05_flag = 0;
  cuban_dude05_timer = 0;
  cuban_dude06_flag = 0;
  cuban_dude06_timer = 0;
  cuban_dude07_flag = 0;
  cuban_dude07_timer = 0;
  cuban_dude08_flag = 0;
  cuban_dude08_timer = 0;
  $.cuban_dude13_flag = 0;
  $.cuban_dude13_timer = 0;


  $.cuban_jetmax_flag = 0;
  $.cuban_speeder_flag = 0;
  $.cuban_coastg_flag = 0;
  $.cubangang_car_flag = 0;

  //////////////////////////
  //////////////////////////


  Streaming.SetAreaVisible(VIS_POLICE_STATION);
  World.SetExtraColors(13, false /* FALSE */);


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "apoulet");


  Streaming.LoadSpecialModel(CUTOBJ01, "htable");
  Streaming.LoadSpecialModel(CUTOBJ02, "drugpak");
  Streaming.LoadSpecialModel(CUTOBJ03, "kettle");


  Streaming.LoadScene(-962.799, 148.391, 8.355);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03))) {
    await asyncWait(0);


  }


  Camera.SetNearClip(0.1);
  World.SetExtraColors(13, false /* FALSE */);


  Cutscene.Load("HAT_2");
  Cutscene.SetOffset(-962.799, 148.391, 8.355);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("apoulet");


  $.cs_htable = CutsceneObject.Create(CUTOBJ01);
  $.cs_htable.setAnim("htable");


  $.cs_drugpak = CutsceneObject.Create(CUTOBJ02);
  $.cs_drugpak.setAnim("drugpak");


  $.cs_kettle = CutsceneObject.Create(CUTOBJ03);
  $.cs_kettle.setAnim("kettle");


  World.ClearArea(-962.53, 141.69, 8.25, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-962.53, 141.69, 8.25);
  $.player1.setHeading(183.42);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4054) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_1", 10000, 1); //Oh. Sorry I must have the wrong address...


  while ($.cs_time < 7163) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_2", 10000, 1); //Well you might as well come in and rest your soles and have some tea.


  while ($.cs_time < 11419) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_3", 10000, 1); //Do you have something for me there, Tommy?


  while ($.cs_time < 13873) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_4", 10000, 1); //Yeah...


  while ($.cs_time < 16370) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_5", 10000, 1); //This place feels familiar to me. A smell from childhood - a deja vu...


  while ($.cs_time < 22166) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_6", 10000, 1); //Now Tommy, I'm going to whisper me a lickle errand for you. Hear me well, aye?


  while ($.cs_time < 28339) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_7", 10000, 1); //You look like someone I...


  while ($.cs_time < 30139) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_8", 10000, 1); //The Cubans have fast boats they use to cross the seas with drugs.


  while ($.cs_time < 34861) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_9", 10000, 1); //It is their livelihood.


  while ($.cs_time < 37790) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_10", 10000, 1); //Me nephew bin making ickle flying bombs to take dem out.


  while ($.cs_time < 42538) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_11", 10000, 1); //Blow de boats to coffin wood.


  while ($.cs_time < 51176) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HAT2_12", 10000, 1); //Well thanks for the tea.


  while ($.cs_time < 56400) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);



  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  World.ClearExtraColors(false /* FALSE */);


  Streaming.SetAreaVisible(VIS_MAIN_MAP);


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);

  //////////////////////////
  //////////////////////////


  $.player1.setMood(PLAYER_MOOD_CALM, 60000);


  Streaming.RequestModel(TOPFUN);
  Streaming.RequestModel(RCBARON);
  Streaming.RequestModel(SPEEDER);
  Streaming.RequestModel(JETMAX);
  Streaming.RequestModel(COASTG);
  Streaming.RequestModel(CUBAN);
  Streaming.RequestModel(CBA);
  Streaming.RequestModel(CBB);
  Streaming.RequestModel(RUGER);


  Streaming.LoadScene(-962.53, 141.69, 8.25);
  Streaming.LoadAllModelsNow();


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (!(Streaming.HasModelLoaded(TOPFUN)) || !(Streaming.HasModelLoaded(RCBARON)) || !(Streaming.HasModelLoaded(SPEEDER)) || !(Streaming.HasModelLoaded(JETMAX)) || !(Streaming.HasModelLoaded(COASTG))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUBAN)) || !(Streaming.HasModelLoaded(CBA)) || !(Streaming.HasModelLoaded(CBB)) || !(Streaming.HasModelLoaded(RUGER))) {
    await asyncWait(0);
  }


  Text.PrintNow("HAT2_B1", 15000, 1); //"Get to the van that contains the flying bombs."


  $.plane_carrier = Car.Create(TOPFUN, -808.9448, -162.9215, 10.0458);
  $.plane_carrier.setHeading(0.0);
  $.plane_carrier_blip = Blip.AddForCar($.plane_carrier);
  $.plane_carrier.freezePosition(true /* TRUE */);


  while (!($.player1.isSittingInCar($.plane_carrier))) {
    await asyncWait(0);
    if (Car.IsDead($.plane_carrier)) {
      // SCM GOTO → mission_haitian2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_haitian2_failed"); // fallback: would break linear control flow
    }


  }

  //LOCK_CAR_DOORS plane_carrier CARLOCK_LOCKED_PLAYER_INSIDE


  $.plane_carrier_blip.remove();


  $.cuban_jetmax = Car.Create(JETMAX, -524.3332, -227.5792, 5.3);
  $.cuban_jetmax.setHeading(25.0);
  $.cuban_jetmax.anchor(true /* TRUE */);
  $.cuban_jetmax.setCruiseSpeed(12.0);
  $.cuban_jetmax_blip = Blip.AddForCar($.cuban_jetmax);
  //ADD_BLIP_FOR_CAR cuban_jetmax cuban_jetmax_blip


  $.cuban_speeder = Car.Create(SPEEDER, -533.5898, -230.4594, 5.3);
  $.cuban_speeder.setHeading(88.4134);
  $.cuban_speeder.anchor(true /* TRUE */);
  $.cuban_speeder.setCruiseSpeed(12.0);
  //ADD_BLIP_FOR_CAR cuban_speeder cuban_speeder_blip


  $.cuban_coastg = Car.Create(COASTG, -514.9578, -230.6103, 5.3);
  $.cuban_coastg.setHeading(265.6394);
  $.cuban_coastg.anchor(true /* TRUE */);
  $.cuban_coastg.setCruiseSpeed(12.0);
  //ADD_BLIP_FOR_CAR cuban_coastg cuban_coastg_blip

  //CREATE_CAR DINGHY -513.9479 -234.7423 7.3 dinghy1
  //SET_CAR_HEADING dinghy1 0.0
  //SET_BOAT_CRUISE_SPEED dinghy1 12.0
  //ADD_BLIP_FOR_CAR dinghy1 dinghy1_blip

  //CREATE_CAR DINGHY -509.4384 -234.9151 7.3 dinghy2
  //SET_CAR_HEADING dinghy2 0.0
  //SET_BOAT_CRUISE_SPEED dinghy2 12.0
  //ADD_BLIP_FOR_CAR dinghy2 dinghy2_blip


  $.cubangang_car = Car.Create(CUBAN, -524.3280, -255.0365, 9.5340);
  $.cubangang_car.setHeading(183.1269);
  //POP_CAR_BOOT cubangang_car

  ////WATCHING MINI CRANE - SPEEDER DRIVER 1ST

  $.cuban_dude01 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBA, -535.1575, -233.1016, 7.2104);
  $.cuban_dude01.setHeading(27.1130);
  $.cuban_dude01.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude01.clearThreatSearch();
  //ADD_BLIP_FOR_CHAR cuban_dude01 cuban_dude01_blip

  ////WORKING MINI CRANE - SPEEDER SHOOTER 2ND

  $.cuban_dude02 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBA, -538.0, -235.1073, 7.2104);
  $.cuban_dude02.setHeading(273.9880);
  $.cuban_dude02.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude02.clearThreatSearch();
  $.cuban_dude02.setWaitState(WAITSTATE_USE_ATM, 100);
  //ADD_BLIP_FOR_CHAR cuban_dude02 cuban_dude02_blip

  ////STANDING NEXT TO CUBAN SITTING ON STEPS - SPEEDER SHOOTER 3RD

  $.cuban_dude03 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBB, -528.9341, -237.8728, 7.2056);
  $.cuban_dude03.setHeading(6.0796);
  $.cuban_dude03.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude03.clearThreatSearch();
  //ADD_BLIP_FOR_CHAR cuban_dude03 cuban_dude03_blip

  ////SITTING ON SIDE OF STEPS - JETMAX DRIVER 4TH

  $.cuban_dude04 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBB, -527.7787, -236.5049, 7.2104);
  $.cuban_dude04.setHeading(93.2798);
  $.cuban_dude04.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude04.clearThreatSearch();
  $.cuban_dude04.setWaitState(WAITSTATE_SIT_IDLE, 100);
  //ADD_BLIP_FOR_CHAR cuban_dude04 cuban_dude04_blip

  ////CHATTING ON PIER - JETMAX SHOOTER 5TH

  $.cuban_dude05 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBA, -519.8645, -242.7792, 9.5542);
  $.cuban_dude05.setHeading(244.8008);
  $.cuban_dude05.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude05.clearThreatSearch();
  $.cuban_dude05.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 100);
  //ADD_BLIP_FOR_CHAR cuban_dude05 cuban_dude05_blip

  //CHATTING ON PIER - COASTG DRIVER 6TH

  $.cuban_dude06 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBA, -517.9925, -243.0342, 9.5542);
  $.cuban_dude06.setHeading(118.9880);
  $.cuban_dude06.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude06.clearThreatSearch();
  //ADD_BLIP_FOR_CHAR cuban_dude06 cuban_dude06_blip

  //WORKING ON THE ENGINE OF DINGHY2 - COASTG FRONT SHOOTER 7TH

  $.cuban_dude07 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBB, -509.3864, -237.7915, 7.2103);
  $.cuban_dude07.setHeading(6.0796);
  $.cuban_dude07.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude07.clearThreatSearch();
  $.cuban_dude07.setWaitState(WAITSTATE_USE_ATM, 100);
  //ADD_BLIP_FOR_CHAR cuban_dude07 cuban_dude07_blip

  //CHATTING ON PIER - COASTG BACK SHOOTER 8TH

  $.cuban_dude08 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBB, -519.7886, -244.7169, 9.5542);
  $.cuban_dude08.setHeading(357.2437);
  $.cuban_dude08.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude08.clearThreatSearch();
  Game.SetCharsChatting($.cuban_dude06, $.cuban_dude08, 600000000);
  //ADD_BLIP_FOR_CHAR cuban_dude08 cuban_dude08_blip

  //CREATE_CHAR PEDTYPE_CIVMALE CBA -506.4470 -257.3781 11.000 cuban_dude09
  //SET_CHAR_HEADING cuban_dude09 335.5638
  //SET_CHAR_STAY_IN_SAME_PLACE	cuban_dude09 TRUE
  //CLEAR_CHAR_THREAT_SEARCH cuban_dude09
  //SET_CHAR_CROUCH cuban_dude09 TRUE 100
  //ADD_BLIP_FOR_CHAR cuban_dude09 cuban_dude09_blip

  //CHATTING BY - DINGHY1 SHOOTER 10TH
  //CREATE_CHAR PEDTYPE_CIVMALE CBA -509.9002 -256.8647 9.5327 cuban_dude10
  //SET_CHAR_HEADING cuban_dude10 315.2729
  //SET_CHAR_STAY_IN_SAME_PLACE	cuban_dude10 TRUE
  //CLEAR_CHAR_THREAT_SEARCH cuban_dude10
  //ADD_BLIP_FOR_CHAR cuban_dude10 cuban_dude10_blip

  //LOADING - DINGHY2 DRIVER 11TH
  //CREATE_CHAR PEDTYPE_CIVMALE CBB -505.1767 -255.8461 9.5680 cuban_dude11
  //SET_CHAR_HEADING cuban_dude11 116.1346
  //SET_CHAR_STAY_IN_SAME_PLACE	cuban_dude11 TRUE
  //CLEAR_CHAR_THREAT_SEARCH cuban_dude11
  //SET_CHAR_WAIT_STATE cuban_dude11 WAITSTATE_PLAYANIM_CHAT 100
  //ADD_BLIP_FOR_CHAR cuban_dude11 cuban_dude11_blip

  //CHATTING BY - DINGHY2 SHOOTER 12TH
  //CREATE_CHAR PEDTYPE_CIVMALE CBA -508.1243 -255.8814 9.5476 cuban_dude12
  //SET_CHAR_HEADING cuban_dude12 118.9880
  //SET_CHAR_STAY_IN_SAME_PLACE	cuban_dude12 TRUE
  //CLEAR_CHAR_THREAT_SEARCH cuban_dude12
  //SET_CHARS_CHATTING cuban_dude10 cuban_dude12 600000000
  //ADD_BLIP_FOR_CHAR cuban_dude12 cuban_dude12_blip

  //BEHIND CUBAN CAR WORKING IN TRUNK	- ENTER CUBAN CAR 13TH

  $.cuban_dude13 = Char.Create(4 /* PEDTYPE_CIVMALE */, CBB, -524.5753, -251.0094, 9.5370);
  $.cuban_dude13.setHeading(185.2318);
  $.cuban_dude13.setStayInSamePlace(true /* TRUE */);
  $.cuban_dude13.clearThreatSearch();
  $.cuban_dude13.setWaitState(WAITSTATE_USE_ATM, 100);
  //ADD_BLIP_FOR_CHAR cuban_dude13 cuban_dude13_blip


  if (ONMISSION == 0) {
    $.primed_bomb_1 = ScriptObject.Create(rcbomb, 0.0, 0.0, 0.0);
    $.rc_plane = Rc.GetCar($.player1);
    $.cuban_jetmax_blip = Blip.AddForCar($.cuban_jetmax);
    $.cuban_speeder_blip = Blip.AddForCar($.cuban_speeder);
    $.cuban_coastg_blip = Blip.AddForCar($.cuban_coastg);
  }


  $.player1.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 1 /* FADE_IN */);


  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(-552.6316, -220.1019, 22.1608, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-551.9008, -220.5808, 21.6745, 2 /* JUMP_CUT */);
  Streaming.LoadScene(-524.1709, -234.6104, 8.1665);
  Text.PrintNow("HAT2_B2", 4500, 1); //"Kill the Cubans..."


  $.game_timer = Clock.GetGameTimer();
  $.timer = $.game_timer + 4500;


  while ($.game_timer < $.timer) {
    await asyncWait(0);
    $.game_timer = Clock.GetGameTimer();
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → cutscene_skip (not lowered; manual jump required)
        throw new Error("unresolved GOTO cutscene_skip"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }


  Camera.SetFixedPosition(-541.3336, -237.3457, 9.8484, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-540.4141, -237.0497, 9.5899, 2 /* JUMP_CUT */);
  Text.PrintNow("HAT2_B4", 4000, 1); //"...and destroy their boats!"


  $.game_timer = Clock.GetGameTimer();
  $.timer = $.game_timer + 4000;


  while ($.game_timer < $.timer) {
    await asyncWait(0);
    $.game_timer = Clock.GetGameTimer();
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → cutscene_skip (not lowered; manual jump required)
        throw new Error("unresolved GOTO cutscene_skip"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
}



async function cutscene_skip() {


  $.button_pressed = 0;


  if (Car.IsDead($.plane_carrier)) {
    // SCM GOTO → mission_haitian2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_haitian2_failed"); // fallback: would break linear control flow
  }



  $.plane_carrier.setCoordinates(-808.9448, -162.9215, 10.0458);
  $.player1.setControl(true /* ON */);
  Camera.RestoreJumpcut();



  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Hud.SwitchWidescreen(false /* OFF */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);


  while (!($.player1.isDead())) {
    await asyncWait(0);
    $.game_timer = Clock.GetGameTimer();
    if (Car.IsDead($.plane_carrier)) {
      // SCM GOTO → mission_haitian2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_haitian2_failed"); // fallback: would break linear control flow
    }

    //plane_carrier & rc_plane//////
    ////////////////////////////////
    if ($.player_run_out_of_planes == 0) {
      if ($.player1.isSittingInCar($.plane_carrier)) {
        if (!($.player1.isInRemoteMode())) {
          if (!($.no_of_rc_planes_left == 0)) {
            if (!(World.IsPointObscuredByAMissionEntity(-812.0, -168.0, 10.0457, 0.6, 0.6, 1.0))) {
              Rc.GiveModelToPlayer($.player1, -812.0, -168.0, 10.0457, 180.0, rcbaron);
              --$.no_of_rc_planes_left;
              if ($.no_of_rc_planes_left == 2) {
                Hud.DisplayCounterWithString($.$id.no_of_rc_planes_left, 0 /* COUNTER_DISPLAY_NUMBER */, "HAT2_B9");
              }
            }
            else {
              // SCM GOTO → cutscene_skip (not lowered; manual jump required)
              throw new Error("unresolved GOTO cutscene_skip"); // fallback: would break linear control flow
            }
          }
          else {
            Text.PrintNow("HAT2_B8", 5000, 1); //"~r~You have no RC planes left!"
            $.player_run_out_of_planes = 1;
            $.player_run_out_of_planes_timer = $.game_timer + 2000;
            //GOTO mission_haitian2_failed

          }
          $.rc_plane = Rc.GetCar($.player1);
          Rc.SetEnableDetonate(false /* FALSE */);
          Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
          $.player1.clearWantedLevel();
          $.player1.setControl(true /* ON */);
        }
        if ($.player1.isInRemoteMode()) {
          if ($.help_counter_h2 == 0) {
            Text.ClearHelp();
            $.controlmode = Pad.GetControllerMode();
            if ($.controlmode == 3) {
              Text.PrintHelp("PLANE_4"); //plane help text
            }
            else {
              Text.PrintHelp("PLANE_H"); //plane help text
            }
            $.help_counter_h2++;
            $.help_timer_h2 = $.game_timer + 6000;
          }
          if ($.help_counter_h2 == 1) {
            if ($.help_timer_h2 < $.game_timer) {
              Text.ClearHelp();
              $.controlmode = Pad.GetControllerMode();
              if ($.controlmode == 3) {
                Text.PrintHelp("BOLLOX"); //"Press CIRCLE to drop a bomb."
              }
              else {
                Text.PrintHelp("HAT2_B3"); //"Press CIRCLE to drop a bomb."
              }
              $.help_counter_h2++;
            }
          }
          if (!(Car.IsDead($.rc_plane))) {
            if ($.player1.locateInCarCar2D($.rc_plane, 500.0, 750.0, false)) {
              if (!($.player1.locateInCarCar2D($.rc_plane, 450.0, 700.0, false))) {
                Text.PrintNow("HAT2_B6", 100, 1); //"The RC plane is getting too far out of range!"
              }
              $.bomb_is_primed_flag = 0;
              const _res269 = $.rc_plane.getCoordinates();
$.grenade_x = _res269.x;
$.grenade_y = _res269.y;
$.grenade_z = _res269.z;
              if (!(ScriptObject.DoesExist($.primed_bomb_1))) {
                if ($.game_timer > $.next_bomb_timer) {
                  $.primed_bomb_1 = ScriptObject.Create(rcbomb, $.grenade_x, $.grenade_y, $.grenade_z);
                  $.primed_bomb_1.setCollision(false /* FALSE */);
                  $.primed_bomb_1.setDynamic(false /* FALSE */);
                  $.primed_bomb_z = 0.0;
                }
              }
              else {
                $.ground_z = World.GetGroundZFor3DCoord($.grenade_x, $.grenade_y, $.grenade_z);
                $.distance_to_ground = $.grenade_z - $.ground_z;
                if ($.distance_to_ground > 0.5) {
                  World.SetVisibilityOfClosestObjectOfType($.grenade_x, $.grenade_y, $.grenade_z, 10.0, rcbomb, true /* TRUE */);
                  $.primed_bomb_z -= timed(0.05);
                  if ($.primed_bomb_z < -0.5) {
                    $.primed_bomb_z = -0.5;
                    $.bomb_is_primed_flag = 1;
                  }
                }
                else {
                  $.primed_bomb_z = $.distance_to_ground - 1.0;
                  $.primed_bomb_z = $.primed_bomb_z * -1.0;
                  if ($.primed_bomb_z > 0.0) {
                    $.primed_bomb_z = 0.0;
                    World.SetVisibilityOfClosestObjectOfType($.grenade_x, $.grenade_y, $.grenade_z, 10.0, rcbomb, false /* FALSE */);
                  }
                }
                $.primed_bomb_1.placeRelativeToCar($.rc_plane, 0.0, 0.0, $.primed_bomb_z);
              }
              if (Pad.IsInCarFireButtonPressed()) {
                if ($.circle_button_pressed == 0) {
                  if ($.bomb_is_primed_flag == 1) {


                    $.primed_bomb_z = $.primed_bomb_z - 0.5;
                    $.primed_bomb_1.placeRelativeToCar($.rc_plane, 0.0, 0.0, $.primed_bomb_z);
                    $.primed_bomb_1.setDynamic(true /* TRUE */);
                    $.primed_bomb_1.setCollision(true /* TRUE */);
                    $.primed_bomb_1.addToVelocity(0.0, 0.0, 0.0);
                    $.next_bomb_timer = $.game_timer + 500;
                    $.falling_bomb_1 = $.primed_bomb_1;
                    $.primed_bomb_1 = -1;
                    $.falling_bomb_1.setRecordsCollisions(true /* TRUE */);
                    $.circle_button_timer = $.game_timer + 250;
                    $.detonation_timer = $.game_timer + 3000;
                    $.circle_button_pressed = 1;
                  }


                }


              }
              else {
                if ($.circle_button_pressed == 2) {
                  if ($.game_timer > $.circle_button_timer) {
                    $.circle_button_pressed = 0;
                  }
                }
              }


            }
            else {
              if (!($.rc_plane == -1)) {
                Rc.RemoveBuggy();
                $.player1.setControl(false /* OFF */);
                $.primed_bomb_1.markAsNoLongerNeeded();
                $.falling_bomb_1.markAsNoLongerNeeded();
                $.primed_bomb_1 = -1;
                $.falling_bomb_1 = -1;
                $.rc_plane = -1;
                $.circle_button_pressed = 0;
              }
            }
          }
          else {
            if (!($.rc_plane == -1)) {
              Rc.RemoveBuggy();
              //SET_PLAYER_CONTROL player1 OFF
              $.primed_bomb_1.markAsNoLongerNeeded();
              $.falling_bomb_1.markAsNoLongerNeeded();
              $.primed_bomb_1 = -1;
              $.falling_bomb_1 = -1;
              $.rc_plane = -1;
              $.circle_button_pressed = 0;
            }
          }
          if (Pad.IsButtonPressed(0 /* PAD1 */, 15 /* TRIANGLE */)) {
            if ($.button_pressed == 1) {
              if (!($.rc_plane == -1)) {
                //SET_PLAYER_CONTROL player1 OFF
                Text.PrintNow("RCCANX", 2000, 1); //RC plane cancelled.
                Rc.RemoveBuggy();
                $.primed_bomb_1.markAsNoLongerNeeded();
                $.falling_bomb_1.markAsNoLongerNeeded();
                $.primed_bomb_1 = -1;
                $.falling_bomb_1 = -1;
                $.rc_plane = -1;
                $.circle_button_pressed = 0;
              }
              $.button_pressed = 0;
            }


          }
          else {
            if ($.button_pressed == 0) {
              $.button_pressed = 1;
            }
          }
        }


      }
      else {
        if (!($.rc_plane == -1)) {
          //SET_PLAYER_CONTROL player1 OFF
          Rc.RemoveBuggy();
          $.primed_bomb_1.markAsNoLongerNeeded();
          $.falling_bomb_1.markAsNoLongerNeeded();
          $.primed_bomb_1 = -1;
          $.falling_bomb_1 = -1;
          $.rc_plane = -1;
          $.circle_button_pressed = 0;
        }
      }
      if ($.circle_button_pressed == 1) {
        if (ScriptObject.DoesExist($.falling_bomb_1)) {
          const _res270 = $.falling_bomb_1.getCoordinates();
$.grenade_x = _res270.x;
$.grenade_y = _res270.y;
$.grenade_z = _res270.z;
          $.ground_z = World.GetGroundZFor3DCoord($.grenade_x, $.grenade_y, $.grenade_z);
          $.ground_z += 0.5;
          if ($.ground_z < 6.0) {
            $.ground_z = 6.0;
          }
          if ($.falling_bomb_1.hasCollidedWithAnything() || $.game_timer > $.detonation_timer || $.falling_bomb_1.isInWater()) {
            $.falling_bomb_1.setRecordsCollisions(false /* FALSE */);
            Fx.AddExplosion($.grenade_x, $.grenade_y, $.grenade_z, 0 /* EXPLOSION_GRENADE */);
            $.falling_bomb_1.markAsNoLongerNeeded();
            $.falling_bomb_1 = -1;
            $.circle_button_pressed = 2;
          }
        }
      }
      if ($.player_attacking_flag == 0) {
        if (ScriptObject.DoesExist($.falling_bomb_1)) {
          if ($.falling_bomb_1.isInArea3D(-554.2964, -277.5887, 0.0, -492.5130, -212.6366, 20.0, false) || $.player1.isInArea3D(-554.2964, -277.5887, 0.0, -492.5130, -212.6366, 20.0, false)) {
            if (!(Char.IsDead($.cuban_dude01))) {
              $.cuban_dude01_blip = Blip.AddForChar($.cuban_dude01);
              $.cuban_dude01_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude01_blip.changeScale(2);
            }
            if (!(Char.IsDead($.cuban_dude02))) {
              $.cuban_dude02_blip = Blip.AddForChar($.cuban_dude02);
              $.cuban_dude02_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude02_blip.changeScale(2);
            }
            if (!(Char.IsDead($.cuban_dude03))) {
              $.cuban_dude03_blip = Blip.AddForChar($.cuban_dude03);
              $.cuban_dude03_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude03_blip.changeScale(2);
            }
            if (!(Char.IsDead($.cuban_dude04))) {
              $.cuban_dude04_blip = Blip.AddForChar($.cuban_dude04);
              $.cuban_dude04_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude04_blip.changeScale(2);
            }
            if (!(Char.IsDead($.cuban_dude05))) {
              $.cuban_dude05_blip = Blip.AddForChar($.cuban_dude05);
              $.cuban_dude05_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude05_blip.changeScale(2);
            }
            if (!(Char.IsDead($.cuban_dude06))) {
              $.cuban_dude06_blip = Blip.AddForChar($.cuban_dude06);
              $.cuban_dude06_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude06_blip.changeScale(2);
            }
            if (!(Char.IsDead($.cuban_dude07))) {
              $.cuban_dude07_blip = Blip.AddForChar($.cuban_dude07);
              $.cuban_dude07_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude07_blip.changeScale(2);
            }
            if (!(Char.IsDead($.cuban_dude08))) {
              $.cuban_dude08_blip = Blip.AddForChar($.cuban_dude08);
              $.cuban_dude08_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude08_blip.changeScale(2);
            }
            if (!(Car.IsDead($.cuban_jetmax))) {
              $.cuban_jetmax_blip.remove();
              $.cuban_jetmax_blip = Blip.AddForCar($.cuban_jetmax);
            }
            if (!(Car.IsDead($.cuban_speeder))) {
              $.cuban_speeder_blip.remove();
              $.cuban_speeder_blip = Blip.AddForCar($.cuban_speeder);
            }
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_coastg_blip.remove();
              $.cuban_coastg_blip = Blip.AddForCar($.cuban_coastg);
            }
            //				IF NOT IS_CHAR_DEAD	cuban_dude09
            //					ADD_BLIP_FOR_CHAR cuban_dude09 cuban_dude09_blip
            //					CHANGE_BLIP_DISPLAY cuban_dude09_blip BLIP_ONLY
            //					CHANGE_BLIP_SCALE cuban_dude09_blip 2
            //				ENDIF
            //				IF NOT IS_CHAR_DEAD	cuban_dude10
            //					ADD_BLIP_FOR_CHAR cuban_dude10 cuban_dude10_blip
            //					CHANGE_BLIP_DISPLAY cuban_dude10_blip BLIP_ONLY
            //					CHANGE_BLIP_SCALE cuban_dude10_blip 2
            //				ENDIF
            //				IF NOT IS_CHAR_DEAD	cuban_dude11
            //					ADD_BLIP_FOR_CHAR cuban_dude11 cuban_dude11_blip
            //					CHANGE_BLIP_DISPLAY cuban_dude11_blip BLIP_ONLY
            //					CHANGE_BLIP_SCALE cuban_dude11_blip 2
            //				ENDIF
            //				IF NOT IS_CHAR_DEAD	cuban_dude12
            //					ADD_BLIP_FOR_CHAR cuban_dude12 cuban_dude12_blip
            //					CHANGE_BLIP_DISPLAY cuban_dude12_blip BLIP_ONLY
            //					CHANGE_BLIP_SCALE cuban_dude12_blip 2
            //				ENDIF
            if (!(Char.IsDead($.cuban_dude13))) {
              $.cuban_dude13_blip = Blip.AddForChar($.cuban_dude13);
              $.cuban_dude13_blip.changeDisplay(2 /* BLIP_ONLY */);
              $.cuban_dude13_blip.changeScale(2);
            }
            $.player_attacking_flag = 1;
          }
        }
      }
    }
    else {
      if ($.player_run_out_of_planes_timer < $.game_timer) {
        // SCM GOTO → mission_haitian2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_haitian2_failed"); // fallback: would break linear control flow
      }
    }
    $.dead_cubans = 0;

    //cuban_dude01//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude01))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude01_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude01.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude01.setObjDestroyCar($.rc_plane);
            cuban_dude01_timer = $.game_timer + 3500;
            cuban_dude01_flag = 1;
          }
          else {
            cuban_dude01_timer = $.game_timer - 100;
            cuban_dude01_flag = 1;
          }
        }
        if (cuban_dude01_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude01.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude01_timer) {
            if (!(Car.IsDead($.cuban_speeder))) {
              $.cuban_dude01.setObjNoObj();
              $.cuban_dude01.setObjRunToCoord(-535.0269, -230.2825);
              cuban_dude01_timer = $.game_timer + 700;
              cuban_dude01_flag = 2;
            }
            else {
              cuban_dude01_flag = 100;
            }
          }
        }
        if (cuban_dude01_flag == 2) {
          if (!(Car.IsDead($.cuban_speeder))) {
            if ($.cuban_speeder.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude01_timer) {
                $.cuban_dude01.setObjNoObj();
                $.cuban_dude01_blip.remove();
                $.cuban_dude01.delete();
                $.cuban_dude01 = Char.CreateInsideCar($.cuban_speeder, 4 /* PEDTYPE_CIVMALE */, CBA);
                cuban_dude01_flag = 3;
              }
            }
            else {
              cuban_dude01_flag = 100;
            }
          }
          else {
            cuban_dude01_flag = 100;
          }
        }
        if (cuban_dude01_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude01.setObjDestroyCar($.rc_plane);
          }
        }
      }
    }
    else {
      if (!(cuban_dude01_flag == -10)) {
        $.cuban_dude01_blip.remove();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude01_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude02//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude02))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude02_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude02.setWaitState(0 /* WAITSTATE_FALSE */, 17);
            $.cuban_dude02.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude02.setObjDestroyCar($.rc_plane);
            cuban_dude02_timer = $.game_timer + 3700;
            cuban_dude02_flag = 1;
          }
          else {
            cuban_dude02_timer = $.game_timer - 100;
            cuban_dude02_flag = 1;
          }
        }
        if (cuban_dude02_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude02.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude02_timer) {
            if (!(Car.IsDead($.cuban_speeder))) {
              $.cuban_dude02.setObjNoObj();
              $.cuban_dude02.setObjRunToCoord(-537.8747, -233.0850);
              cuban_dude02_flag = 2;
            }
            else {
              cuban_dude02_flag = 100;
            }
          }
        }
        if (cuban_dude02_flag == 2) {
          if ($.cuban_dude02.locateOnFoot2D(-537.8747, -233.0850, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_speeder))) {
              $.cuban_dude02.setObjRunToCoord(-535.1575, -233.1016);
              cuban_dude02_flag = 3;
            }
            else {
              cuban_dude02_flag = 100;
            }
          }
        }
        if (cuban_dude02_flag == 3) {
          if ($.cuban_dude02.locateOnFoot2D(-535.1575, -233.1016, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_speeder))) {
              $.cuban_dude02.setObjRunToCoord(-535.0269, -230.2825);
              cuban_dude02_timer = $.game_timer + 700;
              cuban_dude02_flag = 4;
            }
            else {
              cuban_dude02_flag = 100;
            }
          }
        }
        if (cuban_dude02_flag == 4) {
          if (!(Car.IsDead($.cuban_speeder))) {
            if ($.cuban_speeder.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude02_timer) {
                if (!(Char.IsDead($.cuban_dude01))) {
                  //ATTACH_CHAR_TO_CAR cuban_dude02 cuban_speeder -0.6107 1.4015 1.3205 FACING_BACK 360.0 WEAPONTYPE_RUGER
                  $.cuban_dude02.attachToCar($.cuban_speeder, 0.6462, 1.4897, 1.3333, 2 /* FACING_BACK */, 360.0, WEAPONTYPE_RUGER);
                  $.cuban_dude02_blip.remove();
                  cuban_dude02_flag = 100;
                }
                else {
                  $.cuban_dude02_blip.remove();
                  $.cuban_dude02.delete();
                  $.cuban_dude02 = Char.CreateInsideCar($.cuban_speeder, 4 /* PEDTYPE_CIVMALE */, CBA);
                  cuban_dude02_flag = 5;
                }
              }
            }
            else {
              cuban_dude02_flag = 100;
            }
          }
          else {
            cuban_dude02_flag = 100;
          }
        }
        if (cuban_dude02_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude02.setObjDestroyCar($.rc_plane);
          }
        }
      }
      else {
        $.cuban_dude02.setWaitState(WAITSTATE_USE_ATM, 100);
      }
    }
    else {
      if (!(cuban_dude02_flag == -10)) {
        $.cuban_dude02_blip.remove();
        $.cuban_dude02.detachFromCar();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude02_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude03//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude03))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude03_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude03.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude03.setObjDestroyCar($.rc_plane);
            cuban_dude03_timer = $.game_timer + 3900;
            cuban_dude03_flag = 1;
          }
          else {
            cuban_dude03_timer = $.game_timer - 100;
            cuban_dude03_flag = 1;
          }
        }
        if (cuban_dude03_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude03.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude03_timer) {
            if (!(Car.IsDead($.cuban_speeder))) {
              $.cuban_dude03.setObjNoObj();
              $.cuban_dude03.setObjRunToCoord(-535.1575, -233.1016);
              cuban_dude03_flag = 2;
            }
            else {
              cuban_dude03_flag = 100;
            }
          }
        }
        if (cuban_dude03_flag == 2) {
          if ($.cuban_dude03.locateOnFoot2D(-535.1575, -233.1016, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_speeder))) {
              $.cuban_dude03.setObjRunToCoord(-535.0269, -230.2825);
              cuban_dude03_timer = $.game_timer + 700;
              cuban_dude03_flag = 3;
            }
            else {
              cuban_dude03_flag = 100;
            }
          }
        }
        if (cuban_dude03_flag == 3) {
          if (!(Car.IsDead($.cuban_speeder))) {
            if ($.cuban_speeder.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude03_timer) {
                //OR LOCATE_CHAR_ON_FOOT_2D cuban_dude03 -535.0269 -230.2825 1.0 1.0 0
                if (!(Char.IsDead($.cuban_dude01)) || !(Char.IsDead($.cuban_dude02))) {
                  $.cuban_dude03.attachToCar($.cuban_speeder, -0.6107, 1.4015, 1.3205, 2 /* FACING_BACK */, 360.0, WEAPONTYPE_RUGER);
                  $.cuban_dude03_blip.remove();
                  //ATTACH_CHAR_TO_CAR cuban_dude03 cuban_speeder 0.6462 1.4897 1.3333 FACING_BACK 360.0 WEAPONTYPE_RUGER
                  cuban_dude03_flag = 100;
                }
                else {
                  $.cuban_dude03_blip.remove();
                  $.cuban_dude03.delete();
                  $.cuban_dude03 = Char.CreateInsideCar($.cuban_speeder, 4 /* PEDTYPE_CIVMALE */, CBB);
                  cuban_dude03_flag = 4;
                }
              }
            }
            else {
              cuban_dude03_flag = 100;
            }
          }
          else {
            cuban_dude03_flag = 100;
          }
        }
        if (cuban_dude03_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude03.setObjDestroyCar($.rc_plane);
          }
        }
      }
    }
    else {
      if (!(cuban_dude03_flag == -10)) {
        $.cuban_dude03_blip.remove();
        $.cuban_dude03.detachFromCar();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude03_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude04//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude04))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude04_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude04.setWaitState(0 /* WAITSTATE_FALSE */, 17);
            $.cuban_dude04.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude04.setObjDestroyCar($.rc_plane);
            cuban_dude04_timer = $.game_timer + 1200;
            cuban_dude04_flag = 1;
          }
          else {
            cuban_dude04_timer = $.game_timer - 100;
            cuban_dude04_flag = 1;
          }
        }
        if (cuban_dude04_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude04.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude04_timer) {
            if (!(Car.IsDead($.cuban_jetmax))) {
              $.cuban_dude04.setObjNoObj();
              $.cuban_dude04.setObjRunToCoord(-524.5031, -232.6815);
              cuban_dude04_flag = 2;
            }
            else {
              cuban_dude04_flag = 100;
            }
          }
        }
        if (cuban_dude04_flag == 2) {
          if ($.cuban_dude04.locateOnFoot2D(-524.5031, -232.6815, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_jetmax))) {
              $.cuban_dude04.setObjRunToCoord(-524.4131, -229.7234);
              cuban_dude04_timer = $.game_timer + 700;
              cuban_dude04_flag = 3;
            }
            else {
              cuban_dude04_flag = 100;
            }
          }
        }
        if (cuban_dude04_flag == 3) {
          if (!(Car.IsDead($.cuban_jetmax))) {
            if ($.cuban_jetmax.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude04_timer) {
                $.cuban_dude04_blip.remove();
                $.cuban_dude04.delete();
                $.cuban_dude04 = Char.CreateInsideCar($.cuban_jetmax, 4 /* PEDTYPE_CIVMALE */, CBB);
                cuban_dude04_flag = 4;
              }
            }
            else {
              cuban_dude04_flag = 100;
            }
          }
          else {
            cuban_dude04_flag = 100;
          }
        }
        if (cuban_dude04_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude04.setObjDestroyCar($.rc_plane);
          }
        }
      }
      else {
        $.cuban_dude04.setWaitState(WAITSTATE_SIT_IDLE, 100);
      }
    }
    else {
      if (!(cuban_dude04_flag == -10)) {
        $.cuban_dude04_blip.remove();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude04_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude05//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude05))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude05_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude05.setWaitState(0 /* WAITSTATE_FALSE */, 17);
            $.cuban_dude05.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude05.setObjDestroyCar($.rc_plane);
            cuban_dude05_timer = $.game_timer + 1500;
            cuban_dude05_flag = 1;
          }
          else {
            cuban_dude05_timer = $.game_timer - 100;
            cuban_dude05_flag = 1;
          }
        }
        if (cuban_dude05_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude05.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude05_timer) {
            if (!(Car.IsDead($.cuban_jetmax))) {
              $.cuban_dude05.setObjNoObj();
              $.cuban_dude05.setObjRunToCoord(-524.5031, -232.6815);
              cuban_dude05_flag = 2;
            }
            else {
              cuban_dude05_flag = 100;
            }
          }
        }
        if (cuban_dude05_flag == 2) {
          if ($.cuban_dude05.locateOnFoot2D(-524.5031, -232.6815, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_jetmax))) {
              $.cuban_dude05.setObjRunToCoord(-524.4131, -229.7234);
              cuban_dude05_timer = $.game_timer + 700;
              cuban_dude05_flag = 3;
            }
            else {
              cuban_dude05_flag = 100;
            }
          }
        }
        if (cuban_dude05_flag == 3) {
          if (!(Car.IsDead($.cuban_jetmax))) {
            if ($.cuban_jetmax.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude05_timer) {
                if (!(Char.IsDead($.cuban_dude04))) {
                  $.cuban_dude05.attachToCar($.cuban_jetmax, 0.2534, -0.2957, 1.4395, 2 /* FACING_BACK */, 360.0, WEAPONTYPE_RUGER);
                  $.cuban_dude05_blip.remove();
                  cuban_dude05_flag = 100;
                }
                else {
                  $.cuban_dude05_blip.remove();
                  $.cuban_dude05.delete();
                  $.cuban_dude05 = Char.CreateInsideCar($.cuban_jetmax, 4 /* PEDTYPE_CIVMALE */, CBA);
                  cuban_dude05_flag = 4;
                }
              }
            }
            else {
              cuban_dude05_flag = 100;
            }
          }
          else {
            cuban_dude05_flag = 100;
          }
        }
        if (cuban_dude05_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude05.setObjDestroyCar($.rc_plane);
          }
        }
      }
      else {
        $.cuban_dude05.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 100);
      }
    }
    else {
      if (!(cuban_dude05_flag == -10)) {
        $.cuban_dude05_blip.remove();
        $.cuban_dude05.detachFromCar();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude05_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude06//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude06))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude06_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude06.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude06.setObjDestroyCar($.rc_plane);
            cuban_dude06_timer = $.game_timer + 1800;
            cuban_dude06_flag = 1;
          }
          else {
            cuban_dude06_timer = $.game_timer - 100;
            cuban_dude06_flag = 1;
          }
        }
        if (cuban_dude06_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude06.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude06_timer) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude06.setObjNoObj();
              $.cuban_dude06.setObjRunToCoord(-521.9704, -240.8421);
              cuban_dude06_flag = 2;
            }
            else {
              cuban_dude06_flag = 100;
            }
          }
        }
        if (cuban_dude06_flag == 2) {
          if ($.cuban_dude06.locateOnFoot2D(-521.9704, -240.8421, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude06.setObjRunToCoord(-522.0861, -235.0635);
              cuban_dude06_flag = 3;
            }
            else {
              cuban_dude06_flag = 100;
            }
          }
        }
        if (cuban_dude06_flag == 3) {
          if ($.cuban_dude06.locateOnFoot2D(-522.0861, -235.0635, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude06.setObjRunToCoord(-517.2231, -232.8405);
              cuban_dude06_flag = 4;
            }
            else {
              cuban_dude06_flag = 100;
            }
          }
        }
        if (cuban_dude06_flag == 4) {
          if ($.cuban_dude06.locateOnFoot2D(-517.2231, -232.8405, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude06.setObjRunToCoord(-515.7076, -230.4083);
              cuban_dude06_timer = $.game_timer + 700;
              cuban_dude06_flag = 5;
            }
            else {
              cuban_dude06_flag = 100;
            }
          }
        }
        if (cuban_dude06_flag == 5) {
          if (!(Car.IsDead($.cuban_coastg))) {
            if ($.cuban_coastg.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude06_timer) {
                $.cuban_dude06_blip.remove();
                $.cuban_dude06.delete();
                $.cuban_dude06 = Char.CreateInsideCar($.cuban_coastg, 4 /* PEDTYPE_CIVMALE */, CBA);
                cuban_dude06_flag = 6;
              }
            }
            else {
              cuban_dude06_flag = 100;
            }
          }
          else {
            cuban_dude06_flag = 100;
          }
        }
        if (cuban_dude06_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude06.setObjDestroyCar($.rc_plane);
          }
        }
      }
    }
    else {
      if (!(cuban_dude06_flag == -10)) {
        $.cuban_dude06_blip.remove();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude06_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude07//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude07))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude07_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude07.setWaitState(0 /* WAITSTATE_FALSE */, 17);
            $.cuban_dude07.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude07.setObjDestroyCar($.rc_plane);
            cuban_dude07_timer = $.game_timer + 4100;
            cuban_dude07_flag = 1;
          }
          else {
            cuban_dude07_timer = $.game_timer - 100;
            cuban_dude07_flag = 1;
          }
        }
        if (cuban_dude07_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude07.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude07_timer) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude07.setObjNoObj();
              $.cuban_dude07.setObjRunToCoord(-512.1264, -237.3874);
              cuban_dude07_flag = 2;
            }
            else {
              cuban_dude07_flag = 100;
            }
          }
        }
        if (cuban_dude07_flag == 2) {
          if ($.cuban_dude07.locateOnFoot2D(-512.1264, -237.3874, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude07.setObjRunToCoord(-512.0654, -232.8520);
              cuban_dude07_flag = 3;
            }
            else {
              cuban_dude07_flag = 100;
            }
          }
        }
        if (cuban_dude07_flag == 3) {
          if ($.cuban_dude07.locateOnFoot2D(-512.0654, -232.8520, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude07.setObjRunToCoord(-513.3506, -230.3167);
              cuban_dude07_timer = $.game_timer + 700;
              cuban_dude07_flag = 4;
            }
            else {
              cuban_dude07_flag = 100;
            }
          }
        }
        if (cuban_dude07_flag == 4) {
          if (!(Car.IsDead($.cuban_coastg))) {
            if ($.cuban_coastg.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude07_timer) {
                if (!(Char.IsDead($.cuban_dude06))) {
                  $.cuban_dude07.attachToCar($.cuban_coastg, -0.1968, 2.0053, 0.8746, 2 /* FACING_BACK */, 360.0, WEAPONTYPE_RUGER);
                  $.cuban_dude07_blip.remove();
                  cuban_dude07_flag = 100;
                }
                else {
                  $.cuban_dude07_blip.remove();
                  $.cuban_dude07.delete();
                  $.cuban_dude07 = Char.CreateInsideCar($.cuban_coastg, 4 /* PEDTYPE_CIVMALE */, CBB);
                  cuban_dude07_flag = 5;
                }
              }
            }
            else {
              cuban_dude07_flag = 100;
            }
          }
          else {
            cuban_dude07_flag = 100;
          }
        }
        if (cuban_dude07_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude07.setObjDestroyCar($.rc_plane);
          }
        }
      }
      else {
        $.cuban_dude07.setWaitState(WAITSTATE_USE_ATM, 100);
      }
    }
    else {
      if (!(cuban_dude07_flag == -10)) {
        $.cuban_dude07_blip.remove();
        $.cuban_dude07.detachFromCar();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude07_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude08//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude08))) {
      if ($.player_attacking_flag == 1) {
        if (cuban_dude08_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude08.setWaitState(0 /* WAITSTATE_FALSE */, 17);
            $.cuban_dude08.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude08.setObjDestroyCar($.rc_plane);
            cuban_dude08_timer = $.game_timer + 3400;
            cuban_dude08_flag = 1;
          }
          else {
            cuban_dude08_timer = $.game_timer - 100;
            cuban_dude08_flag = 1;
          }
        }
        if (cuban_dude08_flag == 1) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude08.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > cuban_dude08_timer) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude08.setObjNoObj();
              $.cuban_dude08.setObjRunToCoord(-521.9704, -240.8421);
              cuban_dude08_flag = 2;
            }
            else {
              cuban_dude08_flag = 100;
            }
          }
        }
        if (cuban_dude08_flag == 2) {
          if ($.cuban_dude08.locateOnFoot2D(-521.9704, -240.8421, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude08.setObjRunToCoord(-522.0861, -235.0635);
              cuban_dude08_flag = 3;
            }
            else {
              cuban_dude08_flag = 100;
            }
          }
        }
        if (cuban_dude08_flag == 3) {
          if ($.cuban_dude08.locateOnFoot2D(-522.0861, -235.0635, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude08.setObjRunToCoord(-517.2231, -232.8405);
              cuban_dude08_flag = 4;
            }
            else {
              cuban_dude08_flag = 100;
            }
          }
        }
        if (cuban_dude08_flag == 4) {
          if ($.cuban_dude08.locateOnFoot2D(-517.2231, -232.8405, 1.0, 1.0, false)) {
            if (!(Car.IsDead($.cuban_coastg))) {
              $.cuban_dude08.setObjRunToCoord(-515.7076, -230.4083);
              cuban_dude08_timer = $.game_timer + 700;
              cuban_dude08_flag = 5;
            }
            else {
              cuban_dude08_flag = 100;
            }
          }
        }
        if (cuban_dude08_flag == 5) {
          if (!(Car.IsDead($.cuban_coastg))) {
            if ($.cuban_coastg.isHealthGreater(250)) {
              if ($.game_timer > cuban_dude08_timer) {
                if (!(Char.IsDead($.cuban_dude06)) || !(Char.IsDead($.cuban_dude07))) {
                  $.cuban_dude08.attachToCar($.cuban_coastg, 0.0444, -1.8993, 1.0885, 2 /* FACING_BACK */, 360.0, WEAPONTYPE_RUGER);
                  $.cuban_dude08_blip.remove();
                  cuban_dude08_flag = 100;
                }
                else {
                  $.cuban_dude08_blip.remove();
                  $.cuban_dude08.delete();
                  $.cuban_dude08 = Char.CreateInsideCar($.cuban_coastg, 4 /* PEDTYPE_CIVMALE */, CBB);
                  cuban_dude08_flag = 6;
                }
              }
            }
            else {
              cuban_dude08_flag = 100;
            }
          }
          else {
            cuban_dude08_flag = 100;
          }
        }
        if (cuban_dude08_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude08.setObjDestroyCar($.rc_plane);
          }
        }
      }
    }
    else {
      if (!(cuban_dude08_flag == -10)) {
        $.cuban_dude08_blip.remove();
        $.cuban_dude08.detachFromCar();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        cuban_dude08_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_dude09//////////////////
    ////////////////////////////////
    //	IF NOT IS_CHAR_DEAD	cuban_dude09
    //		IF player_attacking_flag = 1
    //			IF cuban_dude09_flag = 0
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_CROUCH cuban_dude09 FALSE 17
    //					SET_CHAR_WAIT_STATE cuban_dude09 WAITSTATE_FALSE 17
    //					//GIVE_WEAPON_TO_CHAR cuban_dude09 WEAPONTYPE_RUGER 9999
    //					//SET_CHAR_OBJ_DESTROY_CAR cuban_dude09 rc_plane
    //					cuban_dude09_timer = game_timer	+ 3800
    //					cuban_dude09_flag = 1
    //				ELSE
    //					cuban_dude09_timer = game_timer	- 100
    //					cuban_dude09_flag = 1
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude09_flag = 1
    //				IF NOT IS_CAR_DEAD rc_plane
    //					//SET_CHAR_OBJ_DESTROY_CAR cuban_dude09 rc_plane
    //				ENDIF
    //				IF game_timer > cuban_dude09_timer
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_NO_OBJ cuban_dude09
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude09 -504.4402 -245.8328
    //						cuban_dude09_flag = 2
    //					ELSE
    //						cuban_dude09_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude09_flag = 2
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude09 -504.4402 -245.8328 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude09 -522.0377 -241.1093
    //						cuban_dude09_flag = 3
    //					ELSE
    //						cuban_dude09_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude09_flag = 3
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude09 -522.0377 -241.1093 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude09 -522.0453 -235.2250
    //						cuban_dude09_flag = 4
    //					ELSE
    //						cuban_dude09_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude09_flag = 4
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude09 -522.0453 -235.2250 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude09 -516.0430 -234.6717
    //						cuban_dude09_flag = 5
    //					ELSE
    //						cuban_dude09_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude09_flag = 5
    //				IF NOT IS_CAR_DEAD dinghy1
    //					IF IS_CAR_HEALTH_GREATER dinghy1 250
    //						IF LOCATE_CHAR_ON_FOOT_2D cuban_dude09 -516.0430 -234.6717 1.0 1.0 0
    //							REMOVE_BLIP	cuban_dude09_blip
    //							DELETE_CHAR	cuban_dude09
    //							CREATE_CHAR_INSIDE_CAR dinghy1 PEDTYPE_CIVMALE CBA cuban_dude09
    //							cuban_dude09_flag = 6//IN DINGHY1 AS DRIVER
    //						ENDIF
    //					ELSE
    //						cuban_dude09_flag = 100
    //					ENDIF
    //				ELSE
    //					cuban_dude09_flag = 100
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude09_flag = 100
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude09 rc_plane
    //				ENDIF
    //			ENDIF
    //		ELSE
    //			SET_CHAR_CROUCH cuban_dude09 TRUE 100
    //		ENDIF
    //	ELSE
    //		IF NOT cuban_dude09_flag = -10
    //			REMOVE_BLIP cuban_dude09_blip
    //			ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
    //			cuban_dude09_flag = -10
    //		ENDIF
    //		++ dead_cubans
    //	ENDIF

    //cuban_dude10//////////////////
    ////////////////////////////////
    //	IF NOT IS_CHAR_DEAD	cuban_dude10
    //		IF player_attacking_flag = 1
    //			IF cuban_dude10_flag = 0
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_WAIT_STATE cuban_dude10 WAITSTATE_FALSE 17
    //					GIVE_WEAPON_TO_CHAR cuban_dude10 WEAPONTYPE_RUGER 9999
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude10 rc_plane
    //					cuban_dude10_timer = game_timer	+ 4100
    //					cuban_dude10_flag = 1
    //				ELSE
    //					cuban_dude10_timer = game_timer	- 100
    //					cuban_dude10_flag = 1
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude10_flag = 1
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude10 rc_plane
    //				ENDIF
    //				IF game_timer > cuban_dude10_timer
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_NO_OBJ cuban_dude10
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude10 -503.2128 -245.7957
    //						cuban_dude10_flag = 2
    //					ELSE
    //						cuban_dude10_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude10_flag = 2
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude10 -503.2128 -245.7957 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude10 -522.0377 -241.1093
    //						cuban_dude10_flag = 3
    //					ELSE
    //						cuban_dude10_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude10_flag = 3
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude10 -522.0377 -241.1093 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude10 -522.0453 -235.2250
    //						cuban_dude10_flag = 4
    //					ELSE
    //						cuban_dude10_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude10_flag = 4
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude10 -522.0453 -235.2250 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy1
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude10 -516.0430 -234.6717
    //						cuban_dude10_flag = 5
    //					ELSE
    //						cuban_dude10_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude10_flag = 5
    //				IF NOT IS_CAR_DEAD dinghy1
    //					IF IS_CAR_HEALTH_GREATER dinghy1 250
    //						IF LOCATE_CHAR_ON_FOOT_2D cuban_dude10 -516.0430 -234.6717 1.0 1.0 0
    //							IF NOT IS_CHAR_DEAD	cuban_dude09
    //								ATTACH_CHAR_TO_CAR cuban_dude10 dinghy1 0.0742 -0.8961 1.0623 FACING_BACK 360.0 WEAPONTYPE_RUGER
    //								REMOVE_BLIP	cuban_dude10_blip
    //								cuban_dude10_flag = 100
    //							ELSE
    //								REMOVE_BLIP	cuban_dude10_blip
    //								DELETE_CHAR	cuban_dude10
    //								CREATE_CHAR_INSIDE_CAR dinghy1 PEDTYPE_CIVMALE CBA cuban_dude10
    //								cuban_dude10_flag = 6//IN DINGHY1 AS DRIVER
    //							ENDIF
    //						ENDIF
    //					ELSE
    //						cuban_dude10_flag = 100
    //					ENDIF
    //				ELSE
    //					cuban_dude10_flag = 100
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude10_flag = 100
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude10 rc_plane
    //				ENDIF
    //			ENDIF
    //		ENDIF
    //	ELSE
    //		IF NOT cuban_dude10_flag = -10
    //			REMOVE_BLIP cuban_dude10_blip
    //			DETACH_CHAR_FROM_CAR cuban_dude10
    //			ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
    //			cuban_dude10_flag = -10
    //		ENDIF
    //		++ dead_cubans
    //	ENDIF

    //cuban_dude11//////////////////
    ////////////////////////////////
    //	IF NOT IS_CHAR_DEAD	cuban_dude11
    //		IF player_attacking_flag = 1
    //			IF cuban_dude11_flag = 0
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_WAIT_STATE cuban_dude11 WAITSTATE_FALSE 17
    //					//GIVE_WEAPON_TO_CHAR cuban_dude11 WEAPONTYPE_RUGER 9999
    //					//SET_CHAR_OBJ_DESTROY_CAR cuban_dude11 rc_plane
    //					cuban_dude11_timer = game_timer	+ 4500
    //					cuban_dude11_flag = 1
    //				ELSE
    //					cuban_dude11_timer = game_timer	- 100
    //					cuban_dude11_flag = 1
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude11_flag = 1
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude11 rc_plane
    //				ENDIF
    //				IF game_timer > cuban_dude11_timer
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_NO_OBJ cuban_dude11
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude11 -504.4402 -245.8328
    //						cuban_dude11_flag = 2
    //					ELSE
    //						cuban_dude11_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude11_flag = 2
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude11 -504.4402 -245.8328 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude11 -522.0377 -241.1093
    //						cuban_dude11_flag = 3
    //					ELSE
    //						cuban_dude11_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude11_flag = 3
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude11 -522.0377 -241.1093 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude11 -522.0453 -235.2250
    //						cuban_dude11_flag = 4
    //					ELSE
    //						cuban_dude11_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude11_flag = 4
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude11 -522.0453 -235.2250 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude11 -511.2752 -234.5884
    //						cuban_dude11_flag = 5
    //					ELSE
    //						cuban_dude11_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude11_flag = 5
    //				IF NOT IS_CAR_DEAD dinghy2
    //					IF IS_CAR_HEALTH_GREATER dinghy2 250
    //						IF LOCATE_CHAR_ON_FOOT_2D cuban_dude11 -511.2752 -234.5884 1.0 1.0 0
    //							REMOVE_BLIP	cuban_dude11_blip
    //							DELETE_CHAR	cuban_dude11
    //							CREATE_CHAR_INSIDE_CAR dinghy2 PEDTYPE_CIVMALE CBB cuban_dude11
    //							cuban_dude11_flag = 6//IN DINGHY2 AS DRIVER
    //						ENDIF
    //					ELSE
    //						cuban_dude11_flag = 100
    //					ENDIF
    //				ELSE
    //					cuban_dude11_flag = 100
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude11_flag = 100
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude11 rc_plane
    //				ENDIF
    //			ENDIF
    //		ELSE
    //			SET_CHAR_WAIT_STATE cuban_dude11 WAITSTATE_PLAYANIM_CHAT 100
    //		ENDIF
    //	ELSE
    //		IF NOT cuban_dude11_flag = -10
    //			REMOVE_BLIP cuban_dude11_blip
    //			ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
    //			cuban_dude11_flag = -10
    //		ENDIF
    //		++ dead_cubans
    //	ENDIF

    //cuban_dude12//////////////////
    ////////////////////////////////
    //	IF NOT IS_CHAR_DEAD	cuban_dude12
    //		IF player_attacking_flag = 1
    //			IF cuban_dude12_flag = 0
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_WAIT_STATE cuban_dude12 WAITSTATE_FALSE 17
    //					GIVE_WEAPON_TO_CHAR cuban_dude12 WEAPONTYPE_RUGER 9999
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude12 rc_plane
    //					cuban_dude12_timer = game_timer	+ 4800
    //					cuban_dude12_flag = 1
    //				ELSE
    //					cuban_dude12_timer = game_timer	- 100
    //					cuban_dude12_flag = 1
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude12_flag = 1
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude12 rc_plane
    //				ENDIF
    //				IF game_timer > cuban_dude12_timer
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_NO_OBJ cuban_dude12
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude12 -503.2128 -245.7957
    //						cuban_dude12_flag = 2
    //					ELSE
    //						cuban_dude12_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude12_flag = 2
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude12 -503.2128 -245.7957 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude12 -522.0377 -241.1093
    //						cuban_dude12_flag = 3
    //					ELSE
    //						cuban_dude12_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude12_flag = 3
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude12 -522.0377 -241.1093 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude12 -522.0453 -235.2250
    //						cuban_dude12_flag = 4
    //					ELSE
    //						cuban_dude12_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude12_flag = 4
    //				IF LOCATE_CHAR_ON_FOOT_2D cuban_dude12 -522.0453 -235.2250 1.0 1.0 0
    //					IF NOT IS_CAR_DEAD dinghy2
    //						SET_CHAR_OBJ_RUN_TO_COORD cuban_dude12 -511.2752 -234.5884
    //						cuban_dude12_flag = 5
    //					ELSE
    //						cuban_dude12_flag = 100
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude12_flag = 5
    //				IF NOT IS_CAR_DEAD dinghy2
    //					IF IS_CAR_HEALTH_GREATER dinghy2 250
    //						IF LOCATE_CHAR_ON_FOOT_2D cuban_dude12 -511.2752 -234.5884 1.0 1.0 0
    //							IF NOT IS_CHAR_DEAD	cuban_dude11
    //								ATTACH_CHAR_TO_CAR cuban_dude12 dinghy2 0.0742 -0.8961 1.0623 FACING_BACK 360.0 WEAPONTYPE_RUGER
    //								REMOVE_BLIP	cuban_dude12_blip
    //								cuban_dude12_flag = 100
    //							ELSE
    //								REMOVE_BLIP	cuban_dude12_blip
    //								DELETE_CHAR	cuban_dude12
    //								CREATE_CHAR_INSIDE_CAR dinghy2 PEDTYPE_CIVMALE CBA cuban_dude12
    //								cuban_dude12_flag = 6//IN DINGHY2 AS DRIVER
    //							ENDIF
    //						ENDIF
    //					ELSE
    //						cuban_dude12_flag = 100
    //					ENDIF
    //				ELSE
    //					cuban_dude12_flag = 100
    //				ENDIF
    //			ENDIF
    //			IF cuban_dude12_flag = 100
    //				IF NOT IS_CAR_DEAD rc_plane
    //					SET_CHAR_OBJ_DESTROY_CAR cuban_dude12 rc_plane
    //				ENDIF
    //			ENDIF
    //		ENDIF
    //	ELSE
    //		IF NOT cuban_dude12_flag = -10
    //			REMOVE_BLIP cuban_dude12_blip
    //			DETACH_CHAR_FROM_CAR cuban_dude12
    //			ADD_ONE_OFF_SOUND 0.0 0.0 0.0 SOUND_PART_MISSION_COMPLETE
    //			cuban_dude12_flag = -10
    //		ENDIF
    //		++ dead_cubans
    //	ENDIF

    //cuban_dude13//////////////////
    ////////////////////////////////
    if (!(Char.IsDead($.cuban_dude13))) {
      if ($.player_attacking_flag == 1) {
        if ($.cuban_dude13_flag == 0) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude13.setWaitState(0 /* WAITSTATE_FALSE */, 17);
            $.cuban_dude13.giveWeapon(WEAPONTYPE_RUGER, 9999);
            $.cuban_dude13.setObjDestroyCar($.rc_plane);
            $.cuban_dude13_timer = $.game_timer + 7000;
            $.cuban_dude13_flag = 1;
          }
          else {
            $.cuban_dude13_timer = $.game_timer - 100;
            $.cuban_dude13_flag = 1;
          }
        }
        if ($.cuban_dude13_flag == 2) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude13.setObjDestroyCar($.rc_plane);
          }
          if ($.game_timer > $.cuban_dude13_timer) {
            if (!(Car.IsDead($.cubangang_car))) {
              if ($.cubangang_car.isHealthGreater(250)) {
                $.cuban_dude13.setObjNoObj();
                $.cuban_dude13_blip.changeDisplay(3 /* BOTH */);
                $.cuban_dude01_blip.changeScale(3);
                Text.PrintNow("HAT2_B7", 6000, 1); //"One of the Cubans in escaping in a car!"
                $.cuban_dude13.setObjEnterCarAsDriver($.cubangang_car);
                $.cuban_dude13_flag = 3;
              }
              else {
                $.cuban_dude13_flag = 100;
              }
            }
            else {
              $.cuban_dude13_flag = 100;
            }
          }
        }
        if ($.cuban_dude13_flag == 3) {
          if (!(Car.IsDead($.cubangang_car))) {
            if ($.cubangang_car.isHealthGreater(250)) {
              if ($.cuban_dude13.isInCar($.cubangang_car)) {
                $.cuban_dude13_flag = 4;
              }
            }
            else {
              $.cuban_dude13_flag = 100;
            }
          }
          else {
            $.cuban_dude13_flag = 100;
          }
        }
        if ($.cuban_dude13_flag == 100) {
          if (!(Car.IsDead($.rc_plane))) {
            $.cuban_dude13.setObjDestroyCar($.rc_plane);
          }
        }
      }
    }
    else {
      if (!($.cuban_dude13_flag == -10)) {
        $.cuban_dude13_blip.remove();
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.cuban_dude13_flag = -10;
      }
      ++$.dead_cubans;
    }

    //cuban_jetmax//////////////////
    ////////////////////////////////
    if (!(Car.IsDead($.cuban_jetmax))) {
      if ($.cuban_jetmax_flag == 0) {
        if (cuban_dude04_flag == 4 || Char.IsDead($.cuban_dude04)) {
          if (cuban_dude05_flag == 4 || cuban_dude05_flag == 100 || Char.IsDead($.cuban_dude05)) {
            if (cuban_dude04_flag == 4 || cuban_dude05_flag == 4) {
              $.cuban_jetmax_flag = 1;
              Text.PrintNow("HAT2_B5", 5000, 1); //"~g~The Cubans are making a run for it. Don't let them get away!"
              $.cuban_jetmax_blip.remove();
              $.cuban_jetmax_blip = Blip.AddForCar($.cuban_jetmax);
            }
          }
        }
      }
      if ($.cuban_jetmax_flag == 1) {
        $.gosub_boat = $.cuban_jetmax;
        await boat_routes_gosub();  // SCM GOSUB boat_routes_gosub
      }
    }
    else {
      $.cuban_jetmax_blip.remove();
      ++$.dead_cubans;
    }

    //cuban_speeder//////////////////
    ////////////////////////////////
    if (!(Car.IsDead($.cuban_speeder))) {
      if ($.cuban_speeder_flag == 0) {
        if (cuban_dude01_flag == 3 || Char.IsDead($.cuban_dude01)) {
          if (cuban_dude02_flag == 5 || cuban_dude02_flag == 100 || Char.IsDead($.cuban_dude02)) {
            if (cuban_dude03_flag == 4 || cuban_dude03_flag == 100 || Char.IsDead($.cuban_dude03)) {
              if (cuban_dude01_flag == 3 || cuban_dude02_flag == 5 || cuban_dude03_flag == 4) {
                $.cuban_speeder_flag = 1;
                Text.PrintNow("HAT2_B5", 5000, 1); //"~g~The Cubans are making a run for it. Don't let them get away!"
                $.cuban_speeder_blip.remove();
                $.cuban_speeder_blip = Blip.AddForCar($.cuban_speeder);
              }
            }
          }
        }
      }
      if ($.cuban_speeder_flag == 1) {
        if ($.cuban_jetmax_flag > 0 || Car.IsDead($.cuban_jetmax)) {
          if (!(Car.IsDead($.cuban_jetmax))) {
            const _res271 = $.cuban_jetmax.getOffsetInWorldCoords(-10.879, -15.176, 0.0);
$.x = _res271.x;
$.y = _res271.y;
$.z = _res271.z;
            if ($.cuban_speeder.locate3D($.x, $.y, 6.0, 5.0, 5.0, 5.0, false)) {
              $.cuban_speeder.setCruiseSpeed(2.0);
              $.cuban_jetmax_heading = $.cuban_jetmax.getHeading();
              $.cuban_speeder_heading = $.cuban_speeder.getHeading();
              $.heading_diff = $.cuban_jetmax_heading - $.cuban_speeder_heading;
              if ($.heading_diff < -180.0) {
                $.heading_diff += 360.0;
              }
              if ($.heading_diff > 180.0) {
                $.heading_diff -= 360.0;
              }
              if ($.heading_diff < 0.0) {
                $.cuban_speeder_heading += timed(1.0);
              }
              else {
                $.cuban_speeder_heading -= timed(1.0);
              }
              if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                $.cuban_speeder.setHeading($.cuban_speeder_heading);
              }
            }
            else {
              if ($.cuban_speeder.locate2D($.x, $.y, 10.0, 10.0, false)) {
                $.cuban_speeder.setCruiseSpeed(12.0);
                $.cuban_jetmax_heading = $.cuban_jetmax.getHeading();
                $.cuban_speeder_heading = $.cuban_speeder.getHeading();
                $.heading_diff = $.cuban_jetmax_heading - $.cuban_speeder_heading;
                if ($.heading_diff < -180.0) {
                  $.heading_diff += 360.0;
                }
                if ($.heading_diff > 180.0) {
                  $.heading_diff -= 360.0;
                }
                if ($.heading_diff < 0.0) {
                  $.cuban_speeder_heading += timed(1.0);
                }
                else {
                  $.cuban_speeder_heading -= timed(1.0);
                }
                if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                  $.cuban_speeder.setHeading($.cuban_speeder_heading);
                }
              }
              else {
                $.cuban_speeder.setCruiseSpeed(20.0);
              }
            }
            $.cuban_speeder.goto($.x, $.y, 6.0);
          }
          else {
            if (!($.boat_route_counter == 0)) {
              --$.boat_route_counter;
              $.new_boat_using_gosub = 1;
            }
            $.cuban_speeder.setCruiseSpeed(12.0);
            $.cuban_speeder_flag = 2;
          }
        }
      }
      if ($.cuban_speeder_flag == 2) {
        $.gosub_boat = $.cuban_speeder;
        await boat_routes_gosub();  // SCM GOSUB boat_routes_gosub
      }
    }
    else {
      $.cuban_speeder_blip.remove();
      ++$.dead_cubans;
    }

    //cuban_coastg//////////////////
    ////////////////////////////////
    if (!(Car.IsDead($.cuban_coastg))) {
      if ($.cuban_coastg_flag == 0) {
        if (cuban_dude06_flag == 6 || Char.IsDead($.cuban_dude06)) {
          if (cuban_dude07_flag == 7 || cuban_dude07_flag == 100 || Char.IsDead($.cuban_dude07)) {
            if (cuban_dude08_flag == 6 || cuban_dude08_flag == 100 || Char.IsDead($.cuban_dude08)) {
              if (cuban_dude06_flag == 6 || cuban_dude07_flag == 7 || cuban_dude08_flag == 6) {
                $.cuban_coastg_flag = 1;
                Text.PrintNow("HAT2_B5", 5000, 1); //"~g~The Cubans are making a run for it. Don't let them get away!"
                $.cuban_coastg_blip.remove();
                $.cuban_coastg_blip = Blip.AddForCar($.cuban_coastg);
              }
            }
          }
        }
      }
      if ($.cuban_coastg_flag == 1) {
        if (!(Car.IsDead($.cuban_jetmax))) {
          const _res272 = $.cuban_jetmax.getOffsetInWorldCoords(11.702, -13.377, 0.0);
$.x = _res272.x;
$.y = _res272.y;
$.z = _res272.z;
          if ($.cuban_coastg.locate3D($.x, $.y, 6.0, 5.0, 5.0, 5.0, false)) {
            $.cuban_coastg.setCruiseSpeed(2.0);
            $.cuban_jetmax_heading = $.cuban_jetmax.getHeading();
            $.cuban_coastg_heading = $.cuban_coastg.getHeading();
            $.heading_diff = $.cuban_jetmax_heading - $.cuban_coastg_heading;
            if ($.heading_diff < -180.0) {
              $.heading_diff += 360.0;
            }
            if ($.heading_diff > 180.0) {
              $.heading_diff -= 360.0;
            }
            if ($.heading_diff < 0.0) {
              $.cuban_coastg_heading += timed(1.0);
            }
            else {
              $.cuban_coastg_heading -= timed(1.0);
            }
            if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
              $.cuban_coastg.setHeading($.cuban_coastg_heading);
            }
          }
          else {
            if ($.cuban_coastg.locate2D($.x, $.y, 10.0, 10.0, false)) {
              $.cuban_jetmax_heading = $.cuban_jetmax.getHeading();
              $.cuban_coastg_heading = $.cuban_coastg.getHeading();
              $.heading_diff = $.cuban_jetmax_heading - $.cuban_coastg_heading;
              if ($.heading_diff < -180.0) {
                $.heading_diff += 360.0;
              }
              if ($.heading_diff > 180.0) {
                $.heading_diff -= 360.0;
              }
              if ($.heading_diff < 0.0) {
                $.cuban_coastg_heading += timed(1.0);
              }
              else {
                $.cuban_coastg_heading -= timed(1.0);
              }
              if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                $.cuban_coastg.setHeading($.cuban_coastg_heading);
              }
              $.cuban_coastg.setCruiseSpeed(12.0);
            }
            else {
              $.cuban_coastg.setCruiseSpeed(20.0);
            }
          }
          $.cuban_coastg.goto($.x, $.y, 6.0);
        }
        else {
          if (!(Car.IsDead($.cuban_speeder))) {
            const _res273 = $.cuban_speeder.getOffsetInWorldCoords(11.702, -13.377, 0.0);
$.x = _res273.x;
$.y = _res273.y;
$.z = _res273.z;
            if ($.cuban_coastg.locate2D($.x, $.y, 4.0, 4.0, false)) {
              $.cuban_speeder_heading = $.cuban_speeder.getHeading();
              $.cuban_coastg_heading = $.cuban_coastg.getHeading();
              $.heading_diff = $.cuban_speeder_heading - $.cuban_coastg_heading;
              if ($.heading_diff < -180.0) {
                $.heading_diff += 360.0;
              }
              if ($.heading_diff > 180.0) {
                $.heading_diff -= 360.0;
              }
              if ($.heading_diff < 0.0) {
                $.cuban_coastg_heading += timed(1.0);
              }
              else {
                $.cuban_coastg_heading -= timed(1.0);
              }
              if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                $.cuban_coastg.setHeading($.cuban_coastg_heading);
              }
              $.cuban_coastg.setCruiseSpeed(2.0);
            }
            else {
              if ($.cuban_coastg.locate2D($.x, $.y, 10.0, 10.0, false)) {
                $.cuban_speeder_heading = $.cuban_speeder.getHeading();
                $.cuban_coastg_heading = $.cuban_coastg.getHeading();
                $.heading_diff = $.cuban_speeder_heading - $.cuban_coastg_heading;
                if ($.heading_diff < -180.0) {
                  $.heading_diff += 360.0;
                }
                if ($.heading_diff > 180.0) {
                  $.heading_diff -= 360.0;
                }
                if ($.heading_diff < 0.0) {
                  $.cuban_coastg_heading += timed(1.0);
                }
                else {
                  $.cuban_coastg_heading -= timed(1.0);
                }
                if ($.heading_diff > 5.0 && $.heading_diff < -5.0) {
                  $.cuban_coastg.setHeading($.cuban_coastg_heading);
                }
                $.cuban_coastg.setCruiseSpeed(12.0);
              }
              else {
                $.cuban_coastg.setCruiseSpeed(20.0);
              }
            }
            $.cuban_coastg.goto($.x, $.y, 6.0);
          }
          else {
            if (!($.boat_route_counter == 0)) {
              --$.boat_route_counter;
              $.new_boat_using_gosub = 1;
            }
            $.cuban_coastg.setCruiseSpeed(12.0);
            $.cuban_coastg_flag = 2;
          }
        }
      }
      if ($.cuban_coastg_flag == 2) {
        $.gosub_boat = $.cuban_coastg;
        await boat_routes_gosub();  // SCM GOSUB boat_routes_gosub
      }
    }
    else {
      $.cuban_coastg_blip.remove();
      ++$.dead_cubans;
    }

    //dinghy1///////////////////////
    ////////////////////////////////
    //	IF NOT IS_CAR_DEAD dinghy1
    //		IF dinghy1_flag = 0
    //			IF cuban_dude09_flag = 6//IN DINGHY1 AS DRIVER
    //			OR IS_CHAR_DEAD	cuban_dude09
    //				IF cuban_dude10_flag = 6//IN DINGHY1 AS DRIVER
    //				OR cuban_dude10_flag = 100
    //				OR IS_CHAR_DEAD	cuban_dude10
    //					IF cuban_dude09_flag = 6//IN DINGHY1 AS DRIVER
    //					OR cuban_dude10_flag = 6//IN DINGHY1 AS DRIVER
    //						dinghy1_flag = 1
    //						GET_CAR_COORDINATES	dinghy1 x y z
    //						z += 0.5
    //						SET_CAR_COORDINATES	dinghy1	x y z
    //						ADD_BLIP_FOR_CAR dinghy1 dinghy1_blip
    //						SET_CAR_HEADING dinghy1 0.0
    //						SET_CAR_FORWARD_SPEED dinghy1 12.0
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //		ENDIF
    //		IF dinghy1_flag = 1
    //			IF NOT IS_CAR_DEAD cuban_jetmax
    //				GET_OFFSET_FROM_CAR_IN_WORLD_COORDS cuban_jetmax 0.0 -27.077 0.0 x y z
    //				IF LOCATE_CAR_3D dinghy1 x y 6.0 4.0 4.0 4.0 0
    //					SET_BOAT_CRUISE_SPEED dinghy1 2.0
    //				ELSE
    //					IF LOCATE_CAR_2D dinghy1 x y 10.0 10.0 0
    //						SET_BOAT_CRUISE_SPEED dinghy1 12.0
    //					ELSE
    //						SET_BOAT_CRUISE_SPEED dinghy1 20.0
    //					ENDIF
    //				ENDIF
    //				BOAT_GOTO_COORDS dinghy1 x y 6.0
    //			ELSE
    //				IF NOT IS_CAR_DEAD cuban_speeder
    //					GET_OFFSET_FROM_CAR_IN_WORLD_COORDS cuban_speeder 0.0 -27.077 0.0 x y z
    //					IF LOCATE_CAR_2D dinghy1 x y 4.0 4.0 0
    //						SET_BOAT_CRUISE_SPEED dinghy1 2.0
    //					ELSE
    //						IF LOCATE_CAR_2D dinghy1 x y 10.0 10.0 0
    //							SET_BOAT_CRUISE_SPEED dinghy1 12.0
    //						ELSE
    //							SET_BOAT_CRUISE_SPEED dinghy1 20.0
    //						ENDIF
    //					ENDIF
    //					BOAT_GOTO_COORDS dinghy1 x y 6.0
    //				ELSE
    //					IF NOT IS_CAR_DEAD cuban_coastg
    //						GET_OFFSET_FROM_CAR_IN_WORLD_COORDS cuban_coastg 0.0 -27.077 0.0 x y z
    //						IF LOCATE_CAR_2D dinghy1 x y 4.0 4.0 0
    //							SET_BOAT_CRUISE_SPEED dinghy1 2.0
    //						ELSE
    //							IF LOCATE_CAR_2D dinghy1 x y 10.0 10.0 0
    //								SET_BOAT_CRUISE_SPEED dinghy1 12.0
    //							ELSE
    //								SET_BOAT_CRUISE_SPEED dinghy1 20.0
    //							ENDIF
    //						ENDIF
    //						BOAT_GOTO_COORDS dinghy1 x y 6.0
    //					ELSE
    //						IF NOT boat_route_counter = 0
    //							-- boat_route_counter
    //							new_boat_using_gosub = 1
    //						ENDIF
    //						SET_BOAT_CRUISE_SPEED dinghy1 12.0
    //						dinghy1_flag = 2
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //		ENDIF
    //		IF dinghy1_flag = 2
    //			gosub_boat = dinghy1
    //			GOSUB boat_routes_gosub
    //		ENDIF
    //	ELSE
    //		REMOVE_BLIP dinghy1_blip
    //		++ dead_cubans
    //	ENDIF

    //dinghy2///////////////////////
    ////////////////////////////////
    //	IF NOT IS_CAR_DEAD dinghy2
    //		IF dinghy2_flag = 0
    //			IF cuban_dude11_flag = 6//IN DINGHY2 AS DRIVER
    //			OR IS_CHAR_DEAD	cuban_dude11
    //				IF cuban_dude12_flag = 6//IN DINGHY2 AS DRIVER
    //				OR cuban_dude12_flag = 100
    //				OR IS_CHAR_DEAD	cuban_dude12
    //					IF cuban_dude11_flag = 6//IN DINGHY2 AS DRIVER
    //					OR cuban_dude12_flag = 6//IN DINGHY2 AS DRIVER
    //						dinghy2_flag = 1
    //						GET_CAR_COORDINATES	dinghy2 x y z
    //						z += 0.5
    //						SET_CAR_COORDINATES	dinghy2	x y z
    //						ADD_BLIP_FOR_CAR dinghy2 dinghy2_blip
    //						SET_CAR_HEADING dinghy2 0.0
    //						SET_CAR_FORWARD_SPEED dinghy2 12.0
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //		ENDIF
    //		IF dinghy2_flag = 1
    //			IF NOT IS_CAR_DEAD cuban_jetmax
    //				GET_OFFSET_FROM_CAR_IN_WORLD_COORDS cuban_jetmax 8.794 -27.06 0.0 x y z
    //				IF LOCATE_CAR_3D dinghy2 x y 6.0 4.0 4.0 4.0 0
    //					SET_BOAT_CRUISE_SPEED dinghy2 2.0
    //				ELSE
    //					IF LOCATE_CAR_2D dinghy2 x y 10.0 10.0 0
    //						SET_BOAT_CRUISE_SPEED dinghy2 12.0
    //					ELSE
    //						SET_BOAT_CRUISE_SPEED dinghy2 20.0
    //					ENDIF
    //				ENDIF
    //				BOAT_GOTO_COORDS dinghy2 x y 6.0
    //			ELSE
    //				IF NOT IS_CAR_DEAD cuban_speeder
    //					GET_OFFSET_FROM_CAR_IN_WORLD_COORDS cuban_speeder 8.794 -27.06 0.0 x y z
    //					IF LOCATE_CAR_2D dinghy2 x y 4.0 4.0 0
    //						SET_BOAT_CRUISE_SPEED dinghy2 2.0
    //					ELSE
    //						IF LOCATE_CAR_2D dinghy2 x y 10.0 10.0 0
    //							SET_BOAT_CRUISE_SPEED dinghy2 12.0
    //						ELSE
    //							SET_BOAT_CRUISE_SPEED dinghy2 20.0
    //						ENDIF
    //					ENDIF
    //					BOAT_GOTO_COORDS dinghy2 x y 6.0
    //				ELSE
    //					IF NOT IS_CAR_DEAD cuban_coastg
    //						GET_OFFSET_FROM_CAR_IN_WORLD_COORDS cuban_coastg 8.794 -27.06 0.0 x y z
    //						IF LOCATE_CAR_2D dinghy2 x y 4.0 4.0 0
    //							SET_BOAT_CRUISE_SPEED dinghy2 2.0
    //						ELSE
    //							IF LOCATE_CAR_2D dinghy2 x y 10.0 10.0 0
    //								SET_BOAT_CRUISE_SPEED dinghy2 12.0
    //							ELSE
    //								SET_BOAT_CRUISE_SPEED dinghy2 20.0
    //							ENDIF
    //						ENDIF
    //						BOAT_GOTO_COORDS dinghy2 x y 6.0
    //					ELSE
    //						IF NOT IS_CAR_DEAD dinghy1
    //							GET_OFFSET_FROM_CAR_IN_WORLD_COORDS dinghy1 8.794 -27.06 0.0 x y z
    //							IF LOCATE_CAR_2D dinghy2 x y 4.0 4.0 0
    //								SET_BOAT_CRUISE_SPEED dinghy2 2.0
    //							ELSE
    //								IF LOCATE_CAR_2D dinghy2 x y 10.0 10.0 0
    //									SET_BOAT_CRUISE_SPEED dinghy2 12.0
    //								ELSE
    //									SET_BOAT_CRUISE_SPEED dinghy2 20.0
    //								ENDIF
    //							ENDIF
    //							BOAT_GOTO_COORDS dinghy2 x y 6.0
    //						ELSE
    //							IF NOT boat_route_counter = 0
    //								-- boat_route_counter
    //								new_boat_using_gosub = 1
    //							ENDIF
    //							SET_BOAT_CRUISE_SPEED dinghy2 12.0
    //							dinghy2_flag = 2
    //						ENDIF
    //					ENDIF
    //				ENDIF
    //			ENDIF
    //		ENDIF
    //		IF dinghy2_flag = 2
    //			gosub_boat = dinghy2
    //			GOSUB boat_routes_gosub
    //		ENDIF
    //	ELSE
    //		REMOVE_BLIP dinghy2_blip
    //		++ dead_cubans
    //	ENDIF

    //cubangang_car/////////////////
    ////////////////////////////////
    if (!(Car.IsDead($.cubangang_car))) {
      if ($.cubangang_car_flag == 0) {
        if ($.cuban_dude13_flag == 4) {
          if (!(Char.IsDead($.cuban_dude13))) {
            $.cubangang_car.setStraightLineDistance(200);
            $.cubangang_car.gotoCoordinatesAccurate(-508.7597, -311.8881, 10.4693);
            $.cubangang_car.setCruiseSpeed(15.0);
            $.cubangang_car.setDrivingStyle(2);
            $.cubangang_car_flag = 1;
          }
        }
      }
      if ($.cubangang_car_flag == 1) {
        if ($.cubangang_car.locate2D(-508.7597, -311.8881, 6.0, 6.0, false)) {
          $.cubangang_car.gotoCoordinatesAccurate(-523.6951, -342.9825, 10.9509);
          $.cubangang_car_flag = 2;
        }
      }
      if ($.cubangang_car_flag == 2) {
        if ($.cubangang_car.locate2D(-523.6951, -342.9825, 4.0, 4.0, false)) {
          $.cubangang_car.setStraightLineDistance(20);
          $.cubangang_car.setCruiseSpeed(20.0);
          $.cubangang_car.gotoCoordinatesAccurate(-761.7885, -492.0030, 14.0889);
          $.cubangang_car_flag = 3;
        }
      }
      if ($.cubangang_car_flag == 3) {
        if ($.cubangang_car.locate2D(-761.7885, -492.0030, 6.0, 6.0, false)) {
          $.cubangang_car.gotoCoordinatesAccurate(-942.2122, -278.2615, 10.3119);
          $.cubangang_car_flag = 4;
        }
      }
      //START OF LOOP
      if ($.cubangang_car_flag == 4) {
        if ($.cubangang_car.locate2D(-942.2122, -278.2615, 6.0, 6.0, false)) {
          $.cubangang_car.gotoCoordinatesAccurate(-1067.2872, -1.6537, 11.2119);
          $.cubangang_car_flag = 5;
        }
      }
      if ($.cubangang_car_flag == 5) {
        if ($.cubangang_car.locate2D(-1067.2872, -1.6537, 6.0, 6.0, false)) {
          $.cubangang_car.gotoCoordinatesAccurate(-964.8415, 321.9443, 11.0549);
          $.cubangang_car_flag = 6;
        }
      }
      if ($.cubangang_car_flag == 6) {
        if ($.cubangang_car.locate2D(-964.8415, 321.9443, 6.0, 6.0, false)) {
          $.cubangang_car.gotoCoordinatesAccurate(-863.3309, -261.5879, 10.7002);
          $.cubangang_car_flag = 7;
        }
      }
      if ($.cubangang_car_flag == 7) {
        if ($.cubangang_car.locate2D(-863.3309, -261.5879, 6.0, 6.0, false)) {
          $.cubangang_car.gotoCoordinatesAccurate(-942.2122, -278.2615, 10.3119);
          $.cubangang_car_flag = 4;
        }
      }
    }
    if (Car.IsDead($.cuban_jetmax) && Car.IsDead($.cuban_speeder) && Car.IsDead($.cuban_coastg)) {
      if ($.cuban_dude13_flag == 1) {
        $.cuban_dude13_flag = 2;
      }
    }
    if ($.dead_cubans == 12) {
      // SCM GOTO → mission_haitian2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_haitian2_passed"); // fallback: would break linear control flow
    }


  }
}




async function boat_routes_gosub() {


  if ($.boat_route_counter == 0) {
    $.gosub_boat.goto(-555.308, -141.189, 6.0);
    $.boat_route_counter = 1;
    $.new_boat_using_gosub = 0;
  }


  if ($.boat_route_counter == 1) {
    if ($.gosub_boat.locate3D(-555.308, -141.189, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-626.792, -78.237, 6.0);
      $.boat_route_counter = 2;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 2) {
    if ($.gosub_boat.locate3D(-626.792, -78.237, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-649.263, -5.788, 6.0); //BEGINNING OF LOOP
      $.boat_route_counter = 3;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 3) {
    if ($.gosub_boat.locate3D(-649.263, -5.788, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-602.947, 296.718, 6.0);
      $.boat_route_counter = 4;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 4) {
    if ($.gosub_boat.locate3D(-602.947, 296.718, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-587.552, 427.51, 6.0);
      $.boat_route_counter = 5;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 5) {
    if ($.gosub_boat.locate3D(-587.552, 427.51, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-528.738, 507.634, 6.0);
      $.boat_route_counter = 6;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 6) {
    if ($.gosub_boat.locate3D(-528.738, 507.634, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-443.897, 470.554, 6.0);
      $.boat_route_counter = 7;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 7) {
    if ($.gosub_boat.locate3D(-443.897, 470.554, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-490.341, 377.161, 6.0);
      $.boat_route_counter = 8;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 8) {
    if ($.gosub_boat.locate3D(-490.341, 377.161, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-602.947, 296.718, 6.0);
      $.boat_route_counter = 9;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 9) {
    if ($.gosub_boat.locate3D(-602.947, 296.718, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-649.263, -5.788, 6.0);
      $.boat_route_counter = 10;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 10) {
    if ($.gosub_boat.locate3D(-649.263, -5.788, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-749.833, -327.552, 6.0);
      $.boat_route_counter = 11;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 11) {
    if ($.gosub_boat.locate3D(-749.833, -327.552, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-750.703, -447.009, 6.0);
      $.boat_route_counter = 12;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 12) {
    if ($.gosub_boat.locate3D(-750.703, -447.009, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-739.379, -573.229, 6.0);
      $.boat_route_counter = 13;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 13) {
    if ($.gosub_boat.locate3D(-739.379, -573.229, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-743.073, -674.655, 6.0);
      $.boat_route_counter = 14;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 14) {
    if ($.gosub_boat.locate3D(-743.073, -674.655, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-710.041, -787.354, 6.0);
      $.boat_route_counter = 15;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 15) {
    if ($.gosub_boat.locate3D(-710.041, -787.354, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-600.638, -835.484, 6.0);
      $.boat_route_counter = 16;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 16) {
    if ($.gosub_boat.locate3D(-600.638, -835.484, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-509.722, -756.564, 6.0);
      $.boat_route_counter = 17;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 17) {
    if ($.gosub_boat.locate3D(-509.722, -756.564, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-571.734, -697.569, 6.0);
      $.boat_route_counter = 18;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 18) {
    if ($.gosub_boat.locate3D(-571.734, -697.569, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-661.336, -662.576, 6.0);
      $.boat_route_counter = 19;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 19) {
    if ($.gosub_boat.locate3D(-661.336, -662.576, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-739.379, -573.229, 6.0);
      $.boat_route_counter = 20;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 20) {
    if ($.gosub_boat.locate3D(-739.379, -573.229, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-750.703, -447.009, 6.0);
      $.boat_route_counter = 21;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 21) {
    if ($.gosub_boat.locate3D(-750.703, -447.009, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-749.833, -327.552, 6.0);
      $.boat_route_counter = 22;
      $.new_boat_using_gosub = 0;
    }
  }


  if ($.boat_route_counter == 22) {
    if ($.gosub_boat.locate3D(-749.833, -327.552, 6.0, 6.0, 6.0, 6.0, false) || $.new_boat_using_gosub == 1) {
      $.gosub_boat.goto(-649.263, -5.788, 6.0); //BEGINNING OF LOOP
      $.boat_route_counter = 3;
      $.new_boat_using_gosub = 0;
    }
  }
}



// Mission haitian2 failed


async function onFailed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
}




// mission haitian2 passed


async function mission_haitian2_passed() {


  $.flag_haitian_mission2_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 2000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(2000);
  Stat.RegisterMissionPassed("HAT_2");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  if (!(Game.IsGerman())) {
    // START_NEW_SCRIPT haitian_mission3_loop
  }
  else {
    $.haitian_contact_blip.remove();
  }
}




// mission cleanup


async function cleanup() {


  ONMISSION = 0;


  if (!($.rc_plane == -1)) {
    Rc.RemoveBuggy();
    $.primed_bomb_1.markAsNoLongerNeeded();
    $.falling_bomb_1.markAsNoLongerNeeded();
    $.rc_plane = -1;
  }


  if (!(Car.IsDead($.plane_carrier))) {
    $.plane_carrier.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  Streaming.MarkModelAsNoLongerNeeded(TOPFUN);
  Streaming.MarkModelAsNoLongerNeeded(RCBARON);
  Streaming.MarkModelAsNoLongerNeeded(SPEEDER);
  Streaming.MarkModelAsNoLongerNeeded(JETMAX);
  Streaming.MarkModelAsNoLongerNeeded(COASTG);
  Streaming.MarkModelAsNoLongerNeeded(CUBAN);
  Streaming.MarkModelAsNoLongerNeeded(CBA);
  Streaming.MarkModelAsNoLongerNeeded(CBB);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);


  $.plane_carrier_blip.remove();
  $.cuban_jetmax_blip.remove();
  $.cuban_speeder_blip.remove();
  $.cuban_coastg_blip.remove();
  //REMOVE_BLIP dinghy1_blip
  //REMOVE_BLIP dinghy2_blip

  $.cuban_dude01_blip.remove();
  $.cuban_dude02_blip.remove();
  $.cuban_dude03_blip.remove();
  $.cuban_dude04_blip.remove();
  $.cuban_dude05_blip.remove();
  $.cuban_dude06_blip.remove();
  $.cuban_dude07_blip.remove();
  $.cuban_dude08_blip.remove();
  //REMOVE_BLIP cuban_dude09_blip
  //REMOVE_BLIP cuban_dude10_blip
  //REMOVE_BLIP cuban_dude11_blip
  //REMOVE_BLIP cuban_dude12_blip

  $.cuban_dude13_blip.remove();


  $.timer_mobile_start = Clock.GetGameTimer();

  //CLEAR_AREA -817.3 -245.0 11.1 150.0 TRUE


  Hud.ClearCounter($.$id.no_of_rc_planes_left);
  $.flag_player_on_rc_mission = 0;


  Mission.Finish();
}

export async function hait2() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_haitian2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_haitian2_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_haitian2



  // Variables for mission


  //FLAGS TIMERS COUNTERS

  // VAR_INT circle_button_pressed circle_button_timer boat_route_counter
  // VAR_INT player_attacking_flag new_boat_using_gosub no_of_rc_planes_left
  // VAR_INT bomb_is_primed_flag detonation_timer next_bomb_timer dead_cubans
  // VAR_INT cuban_dude13_flag cuban_dude13_timer
  // VAR_INT cuban_jetmax_flag cuban_speeder_flag cuban_coastg_flag cubangang_car_flag
  // VAR_INT help_counter_h2 help_timer_h2
  // VAR_INT player_run_out_of_planes_timer player_run_out_of_planes

  //PEDS VEHICLES OBJECTS

  // VAR_INT rc_plane plane_carrier
  // VAR_INT primed_bomb_1 falling_bomb_1
  // VAR_INT cuban_speeder cuban_jetmax cuban_coastg cubangang_car
  // VAR_INT cuban_dude01 cuban_dude02 cuban_dude03 cuban_dude04 cuban_dude05 cuban_dude06
  // VAR_INT cuban_dude07 cuban_dude08 cuban_dude13
  // VAR_INT cs_drugpak

  //BLIPS

  // VAR_INT plane_carrier_blip cuban_jetmax_blip cuban_speeder_blip
  // VAR_INT cuban_coastg_blip
  // VAR_INT cuban_dude01_blip cuban_dude02_blip cuban_dude03_blip cuban_dude04_blip cuban_dude05_blip
  // VAR_INT cuban_dude06_blip cuban_dude07_blip cuban_dude08_blip
  // VAR_INT cuban_dude13_blip

  //COORD MATHS

  // VAR_FLOAT distance_to_ground
  // VAR_FLOAT grenade_x grenade_y grenade_z
  // VAR_FLOAT primed_bomb_z
  // VAR_FLOAT cuban_jetmax_heading cuban_speeder_heading cuban_coastg_heading heading_diff

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE stuff
  //VAR_INT game_timer timer gosub_boat

  // ****************************************Mission Start************************************


}
