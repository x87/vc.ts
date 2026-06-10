// Generated from main/bankj4.sc

import { $ } from "../vars.mts";

async function mission_start_bankjob4() {


  // SCRIPT_NAME bankjo4


  ONMISSION = 1;
  Text.LoadMissionText("BANKJ4");
  Shortcut.SetDropoffPointForMission(512.591, -74.900, 9.573, 189.24);


  $.flag_player_in_malibu = 0;
  Stat.RegisterMissionGiven();
  await asyncWait(0);

  //flag_bank_job = 1

  $.audio_slot = 1;


  $.flag_player_in_car = 0;
  $.flag_arrived_in_car = 0;
  $.flag_intro = 0;
  $.flag_hilary_gone = 0;
  $.flag_player_gun = 0;
  $.flag_bank_mission_failed = 0;


  $.flag_player_leader_phil = 0;
  $.flag_player_leader_hilary = 0;
  $.flag_player_leader_cam = 0;

  //flag_player_on_bank_mission = 1

  $.bank_job_counter = 0;


  $.flag_blip_on_phil = 0;
  $.flag_blip_on_hilary = 0;
  $.flag_blip_on_cam = 0;
  $.flag_blip_on_getaway_car = 0;


  $.locate_dome_flag = 0;
  $.flag_area_check_1 = 0;


  $.flag_phil_at_bank = 0;
  $.flag_hilary_at_bank = 0;
  $.flag_cam_at_bank = 0;
  $.flag_this_is_a_raid = 0;

  //flag_bibble = 0
  //flag_babble = 0
  //flag_bobble = 0


  $.flag_change_waitstate = 0;


  $.flag_cop_4 = 0;
  $.flag_cop_5 = 0;
  $.flag_cop_6 = 0;
  $.flag_cop_7 = 0;
  //flag_launch_cops_1 = 0


  $.flag_surveilance = 0;
  $.flag_surv_cam = 0;
  $.flag_surveilance_trigger = 0;


  $.flag_switcharoo = 0;


  $.counter_conv1 = 0;
  $.counter_conv2 = 0;
  $.counter_conv3 = 0;
  //counter_conv4 = 0


  $.counter_temp1 = 0;
  $.counter_temp2 = 0;
  $.counter_temp3 = 0;
  $.counter_temp4 = 0;


  $.flag_dialogue = 0;
  $.flag_conv3 = 0;
  $.flag_watch_the_car = 0;
  $.flag_stopped = 0;
  $.flag_phil_warp = 0;
  $.flag_swat_rope = 0;
  $.flag_grill_collision = 0;
  $.flag_cam_at_target = 0;
  $.flag_flee = 0;
  $.flag_cam_dead = 0;
  $.phils_target = 0;


  $.flag_cam_dead = 0;


  hostage_casualties = 0;
  flag_hostage1 = 0;
  flag_hostage2 = 0;
  flag_hostage3 = 0;
  flag_hostage4 = 0;
  flag_hostage5 = 0;
  flag_hostage6 = 0;
  flag_hostage7 = 0;
  flag_hostage8 = 0;
  flag_hostage9 = 0;
  flag_hostage10 = 0;
  flag_hostage11 = 0;
  $.flag_launch_hostage_attack = 0;


  $.flag_cam_downstairs = 0;
  //flag_player_in_bank = 0


  $.flag_car_warp = 0;

  // ****************************************START OF CUTSCENE********************************


  Streaming.Switch(false /* OFF */);

  //CLEAR_EXTRA_COLOURS FALSE

  Streaming.SetAreaVisible(VIS_MALIBU_CLUB);
  World.SetCarDensityMultiplier(0.0);
  Streaming.LoadScene(481.03, -64.21, 8.98);



  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSken");
  Streaming.LoadSpecialCharacter(3, "CSphil");
  Streaming.LoadSpecialCharacter(4, "CShlary");
  Streaming.LoadSpecialCharacter(5, "CScamj");


  Streaming.LoadSpecialModel(CUTOBJ01, "gcfan");
  Streaming.LoadSpecialModel(CUTOBJ02, "clchr");



  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);


  }


  Camera.SetNearClip(0.1);


  Cutscene.Load("bank_4");


  Cutscene.SetOffset(476.972, -65.499, 8.943);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("CSken");


  $.cs_phil = CutsceneObject.Create(SPECIAL03);
  $.cs_phil.setAnim("CSphil");


  $.cs_hilary = CutsceneObject.Create(SPECIAL04);
  $.cs_hilary.setAnim("CShlary");

  //CREATE_CUTSCENE_OBJECT SPECIAL05 cs_cam
  //SET_CUTSCENE_ANIM cs_cam CScamj


  $.cs_cam = CutsceneObject.Create(SPECIAL05);
  $.cs_cam.setAnim("CScamj");


  Cutscene.SetAnimToLoop("gcfan");
  $.cs_clubfan = CutsceneObject.Create(CUTOBJ01);
  $.cs_clubfan.setAnim("gcfan");
  Cutscene.SetAnimToLoop("gcfan");


  $.cs_clubchair = CutsceneObject.Create(CUTOBJ02);
  $.cs_clubchair.setAnim("clchr");

  //CREATE_CUTSCENE_HEAD cs_ken CUT_OBJ2 cs_kenhead
  //SET_CUTSCENE_HEAD_ANIM cs_kenhead lawyer

  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player1

  //SET_CUTSCENE_OFFSET 476.972 -65.499 8.943


  Camera.SetNearClip(0.1);


  World.ClearArea(495.12, -83.39, 9.02, 1.0, true /* TRUE */);


  $.player1.setCoordinates(495.12, -83.39, 9.02);


  $.player1.setHeading(223.21);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();



  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 3659) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_A", 10000, 1); // Mission brief


  while ($.cs_time < 7265) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_B", 10000, 1); // Mission brief


  while ($.cs_time < 11744) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_C", 10000, 1); // Mission brief


  while ($.cs_time < 16951) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_D", 10000, 1); // Mission brief


  while ($.cs_time < 18806) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_E", 10000, 1); // Mission brief


  while ($.cs_time < 24030) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_F", 10000, 1); // Mission brief


  while ($.cs_time < 28243) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_G", 10000, 1); // Mission brief


  while ($.cs_time < 34410) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_H", 10000, 1); // Mission brief


  while ($.cs_time < 39555) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_I", 10000, 1); // Mission brief


  while ($.cs_time < 46880) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_J", 10000, 1); // Mission brief


  while ($.cs_time < 49700) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_K", 10000, 1); // Mission brief


  while ($.cs_time < 52105) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("BNK4_L", 10000, 1); // Mission brief


  while ($.cs_time < 55224) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();


  while ($.cs_time < 59584) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }




  Camera.DoFade(1500, 0 /* FADE_OUT */);



  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);

  //SET_AREA_VISIBLE VIS_MAIN_MAP



  // ****************************************END OF CUTSCENE**********************************


  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  World.ClearExtraColors(false /* FALSE */);
  $.flag_player_in_malibu = 0;
  Path.SwitchPedRoadsOff(468.0, -77.0, 0.0, 490.0, -54.0, 30.0);
  Clock.SetTimeOfDay(8, 30);
  World.SetCarDensityMultiplier(1.0);


  Streaming.RequestModel(m4);
  Streaming.RequestModel(mp5lng);
  Streaming.RequestModel(TAXI);
  Streaming.RequestModel(python);

  //LOAD_ALL_MODELS_NOW

  Streaming.LoadScene(496.5, -84.0, 9.8);


  while (!(Streaming.HasModelLoaded(m4)) || !(Streaming.HasModelLoaded(mp5lng)) || !(Streaming.HasModelLoaded(python)) || !(Streaming.HasModelLoaded(TAXI))) {
    await asyncWait(0);
  }

  /*
  LOAD_SPECIAL_CHARACTER 1 phil3
  LOAD_SPECIAL_CHARACTER 2 hlry2
  LOAD_SPECIAL_CHARACTER 3 mike2

  WHILE NOT HAS_SPECIAL_CHARACTER_LOADED 1
  OR NOT HAS_SPECIAL_CHARACTER_LOADED 2
  OR NOT HAS_SPECIAL_CHARACTER_LOADED 3
  WAIT 0
  ENDWHILE
  */


  World.ClearArea(496.5, -84.0, 9.8, 10.0, true /* TRUE */);
  $.getaway_car = Car.Create(TAXI, 496.5, -84.0, 9.8);
  $.getaway_car.setHeading(137.0);
  $.getaway_car.addUpsidedownCheck();


  Streaming.LoadSpecialCharacter(1, "igphil");
  Streaming.LoadSpecialCharacter(2, "ighlary");
  Streaming.LoadSpecialCharacter(3, "igmike");


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);
  }


  $.player1.setControl(false /* OFF */);
  Camera.SetInFrontOfPlayer();
  //GIVE_WEAPON_TO_PLAYER player1 WEAPONTYPE_MP5 120


  $.player1.setCoordinates(491.6465, -80.4476, 10.4539);
  $.player1.setHeading(225.0);


  $.phil = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 490.6913, -79.4378, 10.4539);
  //CREATE_CHAR PEDTYPE_CIVMALE SPECIAL01 490.6913 -79.4378 10.4539 phil

  $.phil.setHeading(225.0);
  $.phil.clearThreatSearch();
  $.phil.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.phil.setAsPlayerFriend($.player1, true /* TRUE */);
  $.phil.setSuffersCriticalHits(false /* FALSE */);
  //SET_CHAR_USE_RANDOM_COMMENTS phil FALSE
  //SET_CHAR_THREAT_SEARCH phil THREAT_COP
  //SET_CHAR_RUNNING phil TRUE


  $.hilary = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL02, 490.0092, -80.1343, 10.4539);
  //CREATE_CHAR PEDTYPE_CIVMALE SPECIAL02 490.0092 -80.1343 10.4539 hilary

  $.hilary.setHeading(225.0);
  $.hilary.clearThreatSearch();
  $.hilary.setAsPlayerFriend($.player1, true /* TRUE */);
  $.hilary.setSuffersCriticalHits(false /* FALSE */);
  //SET_CHAR_USE_RANDOM_COMMENTS hilary FALSE
  //SET_CHAR_RUNNING hilary TRUE


  $.cam = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL03, 491.3710, -78.7345, 10.4539);
  //CREATE_CHAR PEDTYPE_CIVMALE SPECIAL03 491.3710 -78.7345 10.4539 cam

  $.cam.setHeading(225.0);
  $.cam.clearThreatSearch();
  $.cam.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cam.setSuffersCriticalHits(false /* FALSE */);
  //SET_CHAR_USE_RANDOM_COMMENTS cam FALSE
  //SET_CHAR_RUNNING cam TRUE




  $.mission_blip = Blip.AddForCoord(-833.0, -348.0, 11.0);
  $.locate_dome_flag = 1;
  $.flag_area_check_1 = 1;


  Camera.DoFade(750, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  $.player1.setControl(true /* ON */);
  Audio.SetRadioChannel(6, -1);
  Text.PrintBig("BEACH3", 3000, 2); //"Vice Point"


  Audio.LoadMissionAudio(2, "BNK4_3A" as any);


  $.timer_intro_start = Clock.GetGameTimer();
}



async function bank_job_loop1() {
  // SCM GOTO → bank_job_loop1 lowered to endless loop
  while (true) {


    await asyncWait(0);

    //SET_PLAYER_HEALTH player1 100 // test stuff!!!!!


    await car_check();  // SCM GOSUB car_check
    await phil_check();  // SCM GOSUB phil_check
    await cam_check();  // SCM GOSUB cam_check
    await hilary_check();  // SCM GOSUB hilary_check


    if ($.counter_conv1 < 7) {
      await bank_job_timer();  // SCM GOSUB bank_job_timer
      await Conversation_1();  // SCM GOSUB Conversation_1
    }


    if ($.counter_conv2 == 1) {
      await bank_job_timer();  // SCM GOSUB bank_job_timer
      await Conversation_2();  // SCM GOSUB Conversation_2
    }


    if (!(Car.IsDead($.getaway_car))) {
      if (!($.player1.isInCar($.getaway_car)) && $.flag_switcharoo == 1) {
        if ($.flag_stopped == 0) {
          Audio.LoadMissionAudio($.audio_slot, "BNK4_3V" as any);
          await audio_bank_loading();  // SCM GOSUB audio_bank_loading
          Text.PrintNow("BNK4_3v", 10000, 1); //rhubarb rhubarb
          await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
          Text.PrintNow("GETCAR", 4000, 1); // get a car!
          //CLEAR_PRINTS
          $.flag_stopped = 1;
        }
      }
      else {
        $.flag_stopped = 0;
      }
    }



    if (!(Car.IsDead($.getaway_car))) {
      if ($.flag_conv3 == 0 && !($.getaway_car.isHealthGreater(800))) {
        $.audio_slot = 2;
        await audio_bank_loading();  // SCM GOSUB audio_bank_loading
        Text.PrintNow("BNK4_3a", 10000, 1); //rhubarb rhubarb
        await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
        Text.ClearPrints();
        $.flag_conv3 = 1;
      }
    }


    if (!(Car.IsDead($.getaway_car))) {
      if ($.flag_conv3 == 1 && !($.getaway_car.isHealthGreater(650))) {
        await Conversation_3();  // SCM GOSUB Conversation_3
      }
    }


    if ($.flag_blip_on_phil == 1 || $.flag_blip_on_hilary == 1 || $.flag_blip_on_cam == 1) {
      $.locate_dome_flag = 0;
    }
    else {
      if ($.flag_player_in_car == 1) {
        if ($.flag_switcharoo == 0) {
          if (!(Car.IsDead($.getaway_car)) && !(Char.IsDead($.phil))) {
            if ($.phil.isInCar($.getaway_car) && !(Char.IsDead($.cam))) {
              if ($.cam.isInCar($.getaway_car) && !(Char.IsDead($.hilary))) {
                if ($.hilary.isInCar($.getaway_car)) {
                  $.phil.delete();
                  $.cam.delete();
                  $.hilary.delete();
                  $.phil = Char.CreateAsPassenger($.getaway_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL01, 1);
                  $.phil.clearThreatSearch();
                  $.phil.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.phil.setAsPlayerFriend($.player1, true /* TRUE */);
                  $.phil.setSuffersCriticalHits(false /* FALSE */);
                  $.hilary = Char.CreateAsPassenger($.getaway_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL02, 0);
                  $.hilary.clearThreatSearch();
                  $.hilary.setAsPlayerFriend($.player1, true /* TRUE */);
                  $.hilary.setSuffersCriticalHits(false /* FALSE */);
                  $.cam = Char.CreateAsPassenger($.getaway_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL03, 2);
                  $.cam.clearThreatSearch();
                  $.cam.setAsPlayerFriend($.player1, true /* TRUE */);
                  $.cam.setSuffersCriticalHits(false /* FALSE */);
                  $.flag_switcharoo = 1;
                }
              }
            }
          }
        }
        if ($.locate_dome_flag == 0) {
          $.mission_blip = Blip.AddForCoord(-833.0, -348.0, 10.0);
          $.locate_dome_flag = 1;
        }
        if (!(Car.IsDead($.getaway_car)) && $.flag_switcharoo == 1) {
          if ($.getaway_car.locate3D(-833.0, -348.0, 10.0, 4.0, 4.0, 4.0, true /* TRUE */) && $.getaway_car.isStopped() && !($.getaway_car.isUpsidedown())) {
            // SCM GOTO → biffa (not lowered; manual jump required)
            throw new Error("unresolved GOTO biffa"); // fallback: would break linear control flow
          }
        }
      }
      else {
        if ($.flag_switcharoo == 1) {
          if (!(Car.IsDead($.getaway_car)) && !(Char.IsDead($.phil))) {
            if (!($.phil.isInCar($.getaway_car)) && !(Char.IsDead($.cam))) {
              if (!($.cam.isInCar($.getaway_car)) && !(Char.IsDead($.hilary))) {
                if (!($.hilary.isInCar($.getaway_car))) {
                  $.flag_switcharoo = 0;
                }
              }
            }
          }
        }
      }
    }


    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }


  }
}


/////////////////////// First Arrival at Bank /////////////////////////////


async function biffa() {
  $.flag_area_check_1 = 0;
  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  //DELETE_CHAR hilary

  if (!(Car.IsDead($.getaway_car))) {
    $.getaway_car.setHealth(1000);
    const _res70 = $.getaway_car.getCoordinates();
$.cam_x = _res70.x;
$.cam_y = _res70.y;
$.world_z = _res70.z;
  }
  $.cam_x = $.cam_x + 7.0;
  $.world_z = $.world_z + 2.5;


  if (!(Char.IsDead($.hilary))) {
    $.hilary.leaveGroup();
  }


  Camera.SetFixedPosition($.cam_x, $.cam_y, $.world_z, 0.0, 0.0, 0.0);
  //STORE_CAR_PLAYER_IS_IN player1 getaway_car


  const _res71 = $.getaway_car.getOffsetInWorldCoords(0.0, -3.5, 0.0);
$.warp_x = _res71.x;
$.warp_y = _res71.y;
$.warp_z = _res71.z;
  const _res72 = $.getaway_car.getOffsetInWorldCoords(0.0, -3.5, 0.0);
$.world_x = _res72.x;
$.world_y = _res72.y;
$.world_z = _res72.z;
  const _res73 = $.getaway_car.getOffsetInWorldCoords(-1.0, -4.5, 0.0);
$.phil_x = _res73.x;
$.phil_y = _res73.y;
$.world_z = _res73.z;
  const _res74 = $.getaway_car.getOffsetInWorldCoords(1.0, -4.5, 0.0);
$.cam_x = _res74.x;
$.cam_y = _res74.y;
$.world_z = _res74.z;
  //GET_OFFSET_FROM_CAR_IN_WORLD_COORDS getaway_car -4.0 0.0 0.0 waypoint_1_x waypoint_1_y waypoint_z
  //GET_OFFSET_FROM_CAR_IN_WORLD_COORDS getaway_car -4.0 -4.0.0 0.0 waypoint_2_x waypoint_2_y waypoint_z
  //ADD_ROUTE_POINT route_1 waypoint_1_x waypoint_1_y waypoint_z
  //ADD_ROUTE_POINT route_1 waypoint_2_x waypoint_2_y waypoint_z
  //ADD_ROUTE_POINT route_1 world_x world_y world_z

  const _res75 = $.getaway_car.getCoordinates();
$.player_x = _res75.x;
$.player_y = _res75.y;
$.player_z = _res75.z;
  $.player_heading_bj4 = $.getaway_car.getHeading();
  $.flag_intro = 0;
}



async function biffa_loop() {


  await asyncWait(0);
  if ($.flag_intro == 0) {
    $.timer_intro_start = Clock.GetGameTimer();
    if (!(Car.IsDead($.getaway_car))) {
      Camera.PointAtCar($.getaway_car, 15 /* FIXED */, 2 /* JUMP_CUT */);
      if (!(Char.IsDead($.scplayer))) {
        $.scplayer.setObjLeaveCar($.getaway_car);
      }
      await asyncWait(500);
      if (!(Char.IsDead($.phil)) && !(Car.IsDead($.getaway_car))) {
        $.phil.setObjLeaveCar($.getaway_car);
      }
      await asyncWait(150);
      if (!(Char.IsDead($.cam)) && !(Car.IsDead($.getaway_car))) {
        $.cam.setObjLeaveCar($.getaway_car);
      }
      await asyncWait(500);
      if (!(Char.IsDead($.hilary)) && !(Car.IsDead($.getaway_car))) {
        $.hilary.setObjLeaveCar($.getaway_car);
      }
    }
    $.flag_intro = 1;
  }


  await bank_job_timer();  // SCM GOSUB bank_job_timer


  if ($.flag_intro == 1) {
    if (!(Char.IsDead($.hilary))) {
      if (!($.hilary.isInAnyCar())) {
        $.audio_slot = 1;
        Audio.LoadMissionAudio($.audio_slot, "BNK4_4a" as any);
        await audio_bank_loading();  // SCM GOSUB audio_bank_loading
        Text.PrintNow("BNK4_4a", 3000, 1);
        await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
        //LOAD_MISSION_AUDIO audio_slot BNK4_94
        $.flag_intro = 2;
      }
    }
  }


  if ($.intro_time_lapsed > 2000 && $.flag_intro == 2) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_5" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_5", 3000, 1);
    if (!(Char.IsDead($.hilary)) && !(Car.IsDead($.getaway_car))) {
      $.hilary.setObjEnterCarAsDriver($.getaway_car);
    }
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.setObjGotoCoordOnFoot($.world_x, $.world_y);
      //SET_CHAR_OBJ_FOLLOW_ROUTE scplayer route_1 FOLLOW_ROUTE_ONCE
      //CHAR_FOLLOW_PATH scplayer world_x world_y -100.0 1.0 WALK

    }
    if (!(Char.IsDead($.phil))) {
      $.phil.setObjGotoCoordOnFoot($.phil_x, $.phil_y);
      //CHAR_FOLLOW_PATH scplayer phil_x phil_y -100.0 1.0 WALK

    }
    if (!(Char.IsDead($.cam))) {
      $.cam.setObjGotoCoordOnFoot($.cam_x, $.cam_y);
      //CHAR_FOLLOW_PATH scplayer cam_x cam_y -100.0 1.0 WALK

    }
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.flag_intro = 3;
  }


  if ($.intro_time_lapsed > 4000 && $.flag_intro == 3) {
    if (!(Char.IsDead($.scplayer)) && $.scplayer.locateOnFoot2D($.world_x, $.world_y, 3.0, 3.0, false /* FALSE */)) {
      $.player_z = $.player_z + 0.25;
      Camera.SetFixedPosition($.player_x, $.player_y, $.player_z, 0.0, 0.0, 0.0);
      $.player_z = $.player_z + 2.0;
      $.scplayer.setObjNoObj();
      $.scplayer.setCoordinates($.world_x, $.world_y, -100.0);
      $.scplayer.setHeading($.player_heading_bj4);
      Camera.PointAtChar($.scplayer, 15 /* FIXED */, 2 /* JUMP_CUT */);
      if (!(Char.IsDead($.phil))) {
        $.phil.setObjNoObj();
        $.phil.setCoordinates($.phil_x, $.phil_y, -100.0);
        $.player_heading_bj4 = $.player_heading_bj4 + 70.0;
        $.phil.setHeading($.player_heading_bj4);
      }
      if (!(Char.IsDead($.cam))) {
        $.cam.setObjNoObj();
        $.cam.setCoordinates($.cam_x, $.cam_y, -100.0);
        $.player_heading_bj4 = $.player_heading_bj4 - 140.0;
        $.cam.setHeading($.player_heading_bj4);
      }
      $.timer_intro_start = Clock.GetGameTimer();
      await bank_job_timer();  // SCM GOSUB bank_job_timer
      $.flag_intro = 4;
    }
  }


  if ($.flag_intro == 4 && $.intro_time_lapsed > 2000) {
    if (!(Car.IsDead($.getaway_car))) {
      $.getaway_car.popBootUsingPhysics();
      $.flag_intro = 5;
    }
  }


  if ($.flag_intro == 5 && $.intro_time_lapsed > 4000) {
    $.flag_intro = 6;
  }


  if ($.flag_intro == 6 && $.intro_time_lapsed > 5000) {
    if (!(Car.IsDead($.getaway_car))) {
      const _res76 = $.getaway_car.getOffsetInWorldCoords(-6.0, -3.0, 1.0);
$.world_x = _res76.x;
$.world_y = _res76.y;
$.world_z = _res76.z;
    }
    Camera.SetFixedPosition($.world_x, $.world_y, $.world_z, 0.0, 0.0, 0.0);
    if (!(Char.IsDead($.scplayer))) {
      Camera.PointAtChar($.scplayer, 15 /* FIXED */, 2 /* JUMP_CUT */);
    }
    //LOAD_MISSION_AUDIO audio_slot BNK4_94
    //GOSUB audio_bank_loading
    //PRINT_NOW (BNK4_94) 3000 1
    //GOSUB has_audio_finished_bank
    $.flag_intro = 7;
  }


  if ($.flag_intro == 7 && $.intro_time_lapsed > 7000) {
    if (!(Car.IsDead($.getaway_car)) && !(Char.IsDead($.hilary))) {
      if (!($.hilary.isInCar($.getaway_car))) {
        $.hilary.warpIntoCar($.getaway_car);
      }
      $.hilary.setCantBeDraggedOut(true /* TRUE */);
      $.getaway_car.wanderRandomly();
      $.getaway_car.setCruiseSpeed(15.0);
      $.getaway_car.lockDoors(2 /* CARLOCK_LOCKED */);
    }
    $.flag_intro = 8;
  }


  if ($.flag_intro == 8 && $.intro_time_lapsed > 8000) {
    $.player1.setControl(true /* ON */);
    Hud.SwitchWidescreen(false /* OFF */);
    Camera.RestoreJumpcut();
    $.flag_intro = 9;
  }


  if (!($.flag_intro == 9)) {
    // SCM GOTO → biffa_loop (not lowered; manual jump required)
    throw new Error("unresolved GOTO biffa_loop"); // fallback: would break linear control flow
  }


  $.flag_hilary_gone = 1;
  //ADD_ROUTE_POINT RouteIndex X Y Z
  //SET_CHAR_OBJ_FOLLOW_ROUTE CharID RouteIndex RouteFollowMethod

  $.flag_player_in_car = 0;


  $.player1.setControl(true /* ON */);


  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-894.0, -331.2, 12.45);


  if (!(Char.IsDead($.cam))) {
    $.cam.followPlayer($.player1);
  }
  if (!(Char.IsDead($.phil))) {
    $.phil.followPlayer($.player1);
  }

  //timera = 0

  while (!($.player1.locateOnFoot3D(-894.0, -331.2, 12.45, 2.0, 2.0, 3.0, true /* TRUE */))) {
    await asyncWait(0);
    //GOSUB car_check
    await phil_death_check();  // SCM GOSUB phil_death_check
    await cam_death_check();  // SCM GOSUB cam_death_check
    await hilary_car_check();  // SCM GOSUB hilary_car_check
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
  }


  // OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO CHANGE OF CLOTHES 000000000000000000000000000000000000
  // 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000



  Text.ClearPrints();


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  $.scplayer.setObjGotoCoordOnFoot(-893.9, -324.6);


  Camera.SetFadingColor(0, 0, 1);


  Camera.DoFade(750, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!(Car.IsDead($.getaway_car)) && $.flag_car_warp == 0) {
      //AND timera > 5000
      if (!($.getaway_car.isOnScreen())) {
        $.getaway_car.disarmBomb();
        $.getaway_car.setCoordinates(-903.6, -376.6, 56.7);
        $.getaway_car.setHeading(270.0);
        $.getaway_car.setCruiseSpeed(0.0);
        $.getaway_car.setHealth(1000);
        $.getaway_car.freezePosition(true /* TRUE */);
        $.flag_car_warp = 1;
      }
    }


  }


  World.ClearArea(-894.0, -331.2, 12.45, 10.0, true /* TRUE */);


  $.scplayer.setCoordinates(-893.9, -327.2, 12.45);
  $.scplayer.setHeading(175.0);
  $.phil.delete();
  $.cam.delete();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(3);


  Streaming.LoadSpecialCharacter(1, "igphil3");
  Streaming.LoadSpecialCharacter(3, "igmike2");
  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }


  $.phil = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, -894.1, -325.0, 12.45);
  $.phil.setHeading(175.0);
  $.phil.clearThreatSearch();
  $.phil.setAsPlayerFriend($.player1, true /* TRUE */);
  $.phil.setSuffersCriticalHits(false /* FALSE */);
  $.phil.setPersonality(30 /* PEDSTAT_PSYCHO */);
  $.phil.setHealth(200);
  $.phil.setNeverTargeted(true /* TRUE */);

  //SET_PLAYER_AS_LEADER phil player1


  $.cam = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL03, -894.1, -324.5, 12.45);
  $.cam.setHeading(175.0);
  $.cam.clearThreatSearch();
  $.cam.setAsPlayerFriend($.player1, true /* TRUE */);
  $.cam.setSuffersCriticalHits(false /* FALSE */);
  $.cam.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cam.setHealth(200);
  $.cam.setNeverTargeted(true /* TRUE */);
  //SET_PLAYER_AS_LEADER cam player1


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player7");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }
  }
  /*
  REQUEST_MODEL M4
  WHILE NOT HAS_MODEL_LOADED M4
  WAIT 0
  ENDWHILE
  */

  if (!(Char.IsDead($.scplayer))) {
    if (!(Char.IsDead($.phil))) {
      //TURN_CHAR_TO_FACE_CHAR phil scplayer
      $.phil.giveWeapon(WEAPONTYPE_M4, 9999);
    }
    if (!(Char.IsDead($.cam))) {
      //TURN_CHAR_TO_FACE_CHAR cam scplayer
      $.cam.giveWeapon(WEAPONTYPE_MP5, 9999);
    }
    $.scplayer.giveWeapon(WEAPONTYPE_PYTHON, 24);
  }



  $.audio_slot = 1;
  Audio.LoadMissionAudio($.audio_slot, "BNK4_94" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_94", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  Text.ClearPrints();


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.setObjGotoCoordOnFoot(-894.2, -330.25);
  }


  Camera.SetFixedPosition(-894.05, -331.06, 13.3, 0.0, 0.0, 0.0);
  const _res77 = $.player1.getCoordinates();
$.world_x = _res77.x;
$.world_y = _res77.y;
$.world_z = _res77.z;
  $.world_z = $.world_z + 0.8;
  Camera.PointAtPoint($.world_x, $.world_y, $.world_z, 2 /* JUMP_CUT */);


  Camera.DoFade(750, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    const _res78 = $.player1.getCoordinates();
$.world_x = _res78.x;
$.world_y = _res78.y;
$.world_z = _res78.z;
    $.world_z = $.world_z + 0.8;
    Camera.PointAtPoint($.world_x, $.world_y, $.world_z, 2 /* JUMP_CUT */);
  }



  if (!(Char.IsDead($.cam))) {
    $.cam.setObjGotoCoordOnFoot(-894.7, -328.0);
  }
  if (!(Char.IsDead($.phil))) {
    $.phil.setObjGotoCoordOnFoot(-893.25, -329.5);
  }


  $.timer_intro_start = Clock.GetGameTimer();
  await bank_job_timer();  // SCM GOSUB bank_job_timer


  while ($.intro_time_lapsed < 7000) {
    await asyncWait(0);
    const _res79 = $.player1.getCoordinates();
$.world_x = _res79.x;
$.world_y = _res79.y;
$.world_z = _res79.z;
    $.world_z = $.world_z + 0.8;
    Camera.PointAtPoint($.world_x, $.world_y, $.world_z, 2 /* JUMP_CUT */);
    await bank_job_timer();  // SCM GOSUB bank_job_timer
  }


  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);


  if (!(Char.IsDead($.phil))) {
    $.phil.followPlayer($.player1);
  }
  if (!(Char.IsDead($.cam))) {
    $.cam.followPlayer($.player1);
  }
}



async function bank_job_loop3() {
  while (!($.player1.locateOnFoot3D(-896.0, -341.0, 12.5, 2.0, 2.0, 3.0, true /* TRUE */))) {
    await asyncWait(0);
    await car_check();  // SCM GOSUB car_check
    await cam_death_check();  // SCM GOSUB cam_death_check
    await phil_death_check();  // SCM GOSUB phil_death_check

    //GOSUB plinkety_plonk
    await wait_state_loop();  // SCM GOSUB wait_state_loop
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    if (!($.player1.locateAnyMeans3D(-906.0, -341.0, 12.5, 30.0, 30.0, 10.0, false /* FALSE */))) {
      //AND flag_wandering_psycho = 0
      $.player1.alterWantedLevelNoDrop(4);
      Text.PrintNow("IDIOT", 5000, 1); //That's right, just wander about dressed like a lunatic, IDIOT!
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
  }


  Camera.DoFade(1000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.RequestModel(WFYBU);
  Streaming.RequestModel(HFYBU);
  Streaming.RequestModel(WMORI);
  //REQUEST_MODEL faketarget


  while (!(Streaming.HasModelLoaded(WFYBU)) || !(Streaming.HasModelLoaded(HFYBU)) || !(Streaming.HasModelLoaded(WMORI))) {
    //OR NOT HAS_MODEL_LOADED faketarget
    await asyncWait(0);
  }


  Streaming.RequestModel(GDa);
  Streaming.RequestModel(GDb);
  //REQUEST_MODEL faketarget


  while (!(Streaming.HasModelLoaded(GDa)) || !(Streaming.HasModelLoaded(GDb))) {
    //OR NOT HAS_MODEL_LOADED faketarget
    await asyncWait(0);
  }


  $.cashier1 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -904.7, -328.6, 12.49);
  $.cashier1.setHeading(190.0);
  $.cashier1.clearThreatSearch();
  $.cashier1.setPersonality(20 /* PEDSTAT_GEEK_GIRL */);
  $.cashier1.setNeverTargeted(true /* TRUE */);


  $.cashier2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -910.1, -328.6, 12.49);
  $.cashier2.setHeading(190.0);
  $.cashier2.clearThreatSearch();
  $.cashier2.setPersonality(20 /* PEDSTAT_GEEK_GIRL */);
  $.cashier2.setNeverTargeted(true /* TRUE */);


  $.cashier3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -912.5, -328.6, 12.49);
  $.cashier3.setHeading(190.0);
  $.cashier3.clearThreatSearch();
  $.cashier3.setPersonality(19 /* PEDSTAT_SENSIBLE_GIRL */);
  $.cashier3.setNeverTargeted(true /* TRUE */);


  $.cashier4 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -907.5, -353.6, 12.49);
  $.cashier4.setHeading(10.0);
  $.cashier4.clearThreatSearch();
  $.cashier4.setPersonality(20 /* PEDSTAT_GEEK_GIRL */);
  $.cashier4.setNeverTargeted(true /* TRUE */);


  $.cashier5 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -910.2, -353.6, 12.49);
  $.cashier5.setHeading(10.0);
  $.cashier5.clearThreatSearch();
  $.cashier5.setPersonality(19 /* PEDSTAT_SENSIBLE_GIRL */);
  $.cashier5.setNeverTargeted(true /* TRUE */);


  $.cashier6 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, HFYBU, -915.3, -353.6, 12.49);
  $.cashier6.setHeading(10.0);
  $.cashier6.clearThreatSearch();
  $.cashier6.setPersonality(20 /* PEDSTAT_GEEK_GIRL */);
  $.cashier6.setNeverTargeted(true /* TRUE */);


  $.cashier7 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, WFYBU, -920.36, -343.7, 14.6);
  $.cashier7.setHeading(65.0);
  $.cashier7.clearThreatSearch();
  $.cashier7.setPersonality(19 /* PEDSTAT_SENSIBLE_GIRL */);
  $.cashier7.setNeverTargeted(true /* TRUE */);


  $.cashier8 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMORI, -921.76, -345.15, 12.49);
  $.cashier8.setHeading(310.0);
  $.cashier8.clearThreatSearch();
  $.cashier8.setPersonality(13 /* PEDSTAT_SENSIBLE_GUY */);
  $.cashier8.setNeverTargeted(true /* TRUE */);


  $.bank_cop_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -917.3, -340.0, 12.49);
  $.bank_cop_1.clearThreatSearch();
  $.bank_cop_1.setHeading(270.0);
  $.bank_cop_1.setIdle();
  $.bank_cop_1.setNeverTargeted(true /* TRUE */);


  $.bank_cop_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDb, -908.0, -347.77, 12.49);
  $.bank_cop_2.clearThreatSearch();
  $.bank_cop_2.setHeading(270.0);
  $.bank_cop_2.setIdle();
  $.bank_cop_2.setNeverTargeted(true /* TRUE */);


  $.bank_cop_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -919.14, -336.0, 12.49);
  $.bank_cop_3.clearThreatSearch();
  $.bank_cop_3.setHeading(130.0);
  $.bank_cop_3.setStayInSamePlace(true /* TRUE */);
  $.bank_cop_3.setNeverTargeted(true /* TRUE */);
  //CHAR_WANDER_DIR bank_cop_3 -1


  // SCM GOTO → selkirk (not lowered; manual jump required)
  throw new Error("unresolved GOTO selkirk"); // fallback: would break linear control flow
  $.bank_cop_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -918.7, -353.3, 16.8); // FOOLS COMPILER!!
  $.bank_cop_6.delete();
  $.bank_manager = Char.Create(4 /* PEDTYPE_CIVMALE */, WMORI, -963.28, -337.12, 14.6); // FOOLS COMPILER!!
  $.bank_manager.delete();
}

async function selkirk() {


  $.flag_waitstate_1 = 25;
  $.flag_waitstate_2 = 19;
  $.flag_waitstate_3 = 21;


  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-896.5, -341.0, 12.5);

  //ADD_SPHERE -896.5 -341.0 13.4 2.0 mission_blob
  //flag_bank_job = 1



  Streaming.SetAreaVisible(VIS_BANK);
  World.SwitchRubbish(false /* OFF */);
  Streaming.LoadScene(-903.0, -341.0, 13.4);
  $.flag_player_in_bank = 1;
  World.SetExtraColors(4, false /* FALSE */);


  Text.ClearPrints();
  //REMOVE_SPHERE mission_blob
  //flag_bank_job = 0

  $.flag_player_in_bank = 1;



  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.giveWeapon(WEAPONTYPE_PYTHON, 24);
  $.player1.setCurrentWeapon(WEAPONTYPE_PYTHON);
  //GIVE_WEAPON_TO_PLAYER player1 WEAPONTYPE_PISTOL 600

  World.ClearArea(-890.0, -340.0, 11.0, 10.0, false /* FALSE */);
  //ADD_PEDS_IN_AREA_TO_COLL -911.8 -341.0 15.0 hostage_collective


  Camera.SetNearClip(0.1);


  if (!(Char.IsDead($.phil))) {
    $.phil.leaveGroup();
  }
  if (!(Char.IsDead($.cam))) {
    $.cam.leaveGroup();
  }


  await gob_shite();  // SCM GOSUB gob_shite


  $.flag_intro = 0;
  $.audio_slot = 1;
}

//flag_player_on_bank_mission = 0


async function tha_inner() {


  await asyncWait(0);


  await wait_state_loop();  // SCM GOSUB wait_state_loop


  if ($.flag_intro == 0) {
    $.timer_intro_start = Clock.GetGameTimer();
    //DO_FADE 1000 FADE_OUT
    //WHILE GET_FADING_STATUS
    //	WAIT 0
    //ENDWHILE
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.setCoordinates(-911.8, -341.0, 12.5);
      $.scplayer.setHeading(90.0);
    }
    if (!(Char.IsDead($.phil))) {
      $.phil.setCoordinates(-909.8, -339.0, 12.5);
      $.phil.setHealth(100);
      $.phil.setIdle();
    }
    if (!(Char.IsDead($.cam))) {
      $.cam.setCoordinates(-909.55, -341.6, 12.5);
      $.cam.setHealth(100);
      $.cam.setIdle();
    }
    Camera.SetFixedPosition(-914.5, -341.1, 12.7, 0.0, 0.0, 0.0);
    Camera.PointAtPlayer($.player1, 15 /* FIXED */, 2);
    $.flag_intro = 1;
    Audio.LoadMissionAudio($.audio_slot, "BNK4_6" as any);
  }


  await bank_job_timer();  // SCM GOSUB bank_job_timer


  await phil_death_check();  // SCM GOSUB phil_death_check
  await cam_death_check();  // SCM GOSUB cam_death_check
  if ($.flag_bank_mission_failed == 1) {
    // SCM GOTO → botty_head (not lowered; manual jump required)
    throw new Error("unresolved GOTO botty_head"); // fallback: would break linear control flow
  }


  if ($.intro_time_lapsed > 1000 && $.flag_intro == 1) {
    if (!(Char.IsDead($.bank_cop_3)) && !(Char.IsDead($.phil))) {
      $.bank_cop_3.turnToFaceChar($.phil);
      $.phil.turnToFaceChar($.bank_cop_3);
      //CHAR_LOOK_AT_CHAR_ALWAYS bank_cop_3 phil

    }
    if (!(Char.IsDead($.bank_cop_2)) && !(Char.IsDead($.cam))) {
      $.bank_cop_2.turnToFaceChar($.cam);
      $.cam.turnToFaceChar($.bank_cop_2);
      //CHAR_LOOK_AT_CHAR_ALWAYS bank_cop_2 cam

    }
    Camera.DoFade(1000, 1 /* FADE_IN */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
    $.flag_intro = 2;
  }

  // ******* THIS IS A RAID!!!!

  if ($.intro_time_lapsed > 2000 && $.flag_intro == 2) {
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    if (!(Char.IsDead($.bank_cop_1))) {
      $.scplayer.setObjAimGunAtChar($.bank_cop_1);
    }
    Text.PrintNow("BNK4_6", 3000, 1);
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_7" as any);
    $.flag_intro = 3;
  }

  // *********** NO BODY MOVE!!!!!!!

  if ($.intro_time_lapsed > 3000 && $.flag_intro == 3) {
    $.flag_change_waitstate = 0;
    $.flag_waitstate_1 = 0;
    $.flag_waitstate_2 = 0;
    $.flag_waitstate_3 = 0;
    await wait_state_loop();  // SCM GOSUB wait_state_loop
    $.flag_change_waitstate = 0;
    $.flag_waitstate_1 = 35;
    $.flag_waitstate_2 = 35;
    $.flag_waitstate_3 = 35;
    await wait_state_loop();  // SCM GOSUB wait_state_loop
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    if (!(Char.IsDead($.phil)) && !(Char.IsDead($.bank_cop_3))) {
      $.phil.setObjAimGunAtChar($.bank_cop_3);
    }
    if (!(Char.IsDead($.cam)) && !(Char.IsDead($.bank_cop_2))) {
      $.cam.setObjAimGunAtChar($.bank_cop_2);
    }
    Text.PrintNow("BNK4_7", 5000, 1);
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_8" as any);
    $.flag_intro = 4;
  }


  if ($.intro_time_lapsed > 4000 && $.flag_intro == 4) {
    $.flag_intro = 5;
  }

  // *********** EVERYBODY UP AGAINST THE WALLS!!!!!!

  if ($.intro_time_lapsed > 5000 && $.flag_intro == 5) {
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Camera.SetFixedPosition(-908.8, -340.2, 14.0, 0.0, 0.0, 0.0);
    if (!(Char.IsDead($.bank_cop_1))) {
      Camera.PointAtChar($.bank_cop_1, 15 /* FIXED */, 2 /* JUMP_CUT */);
    }
    Text.PrintNow("BNK4_8", 5000, 1);
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_9" as any);
    $.flag_intro = 6;
  }

  // *****************PEDS MOVE TO CORNER Pt1****************

  if ($.intro_time_lapsed > 6500 && $.flag_intro == 6) {
    Camera.SetFixedPosition(-919.2, -330.0, 18.75, 0.0, 0.0, 0.0);
    if (!(Char.IsDead($.scplayer))) {
      Camera.PointAtChar($.scplayer, 15 /* FIXED */, 2 /* JUMP_CUT */);
    }
    $.flag_change_waitstate = 0;
    $.flag_waitstate_1 = 0;
    $.flag_waitstate_2 = 0;
    $.flag_waitstate_3 = 0;
    $.flag_intro = 7;
  }

  // *****************PEDS MOVE TO CORNER Pt2****************	cashier1

  if ($.intro_time_lapsed > 7000 && $.flag_intro == 7) {
    if (!(Char.IsDead($.bank_cop_3))) {
      $.bank_cop_3.setObjRunToCoord(-923.0, -335.8);
    }
    if (!(Char.IsDead($.bank_cop_2))) {
      $.bank_cop_2.setObjRunToCoord(-923.0, -335.8);
    }
    if (!(Char.IsDead($.bank_cop_1))) {
      $.bank_cop_1.setObjRunToCoord(-923.0, -335.8);
    }
    if (!(Char.IsDead($.cashier1))) {
      $.cashier1.setObjRunToCoord(-923.0, -335.8);
    }
    if (!(Char.IsDead($.cashier2))) {
      $.cashier2.setObjRunToCoord(-923.0, -335.8);
    }
    if (!(Char.IsDead($.cashier3))) {
      $.cashier3.setObjRunToCoord(-923.0, -335.8);
    }
    if (!(Char.IsDead($.cashier4))) {
      $.cashier4.setObjRunToCoord(-918.2, -342.0);
    }
    if (!(Char.IsDead($.cashier5))) {
      $.cashier5.setObjRunToCoord(-918.0, -344.0);
    }
    if (!(Char.IsDead($.cashier6))) {
      $.cashier6.setObjRunToCoord(-917.8, -346.0);
    }
    if (!(Char.IsDead($.cashier7))) {
      $.cashier7.setObjRunToCoord(-917.0, -345.0);
    }
    if (!(Char.IsDead($.cashier8))) {
      $.cashier8.setObjRunToCoord(-917.0, -343.0);
    }
    $.flag_intro = 8;
  }


  if ($.intro_time_lapsed > 9000 && $.flag_intro == 8) {
    if (!(Char.IsDead($.bank_cop_3))) {
      $.bank_cop_3.setObjNoObj();
      $.bank_cop_3.setHeading(84.0);
      $.bank_cop_3.setIdle();
      $.bank_cop_3.setStayInSamePlace(true /* TRUE */);
      $.bank_cop_3.setCoordinates(-924.0, -339.6, 12.4);
      if (!(Char.IsDead($.phil))) {
        $.phil.setCoordinates(-918.87, -336.2, 12.4);
        $.phil.setHeading(146.0);
        $.phil.setObjAimGunAtChar($.bank_cop_3);
      }
    }
    if (!(Char.IsDead($.bank_cop_2))) {
      $.bank_cop_2.setObjNoObj();
      $.bank_cop_2.setHeading(93.0);
      $.bank_cop_2.setIdle();
      $.bank_cop_2.setStayInSamePlace(true /* TRUE */);
      $.bank_cop_2.setCoordinates(-923.5, -338.6, 12.4);
    }
    if (!(Char.IsDead($.bank_cop_1))) {
      $.bank_cop_1.setObjNoObj();
      $.bank_cop_1.setHeading(90.0);
      $.bank_cop_1.setIdle();
      $.bank_cop_1.setStayInSamePlace(true /* TRUE */);
      $.bank_cop_1.setCoordinates(-923.0, -337.7, 12.4);
    }
    if (!(Char.IsDead($.cashier1))) {
      $.cashier1.setObjNoObj();
      $.cashier1.setHeading(88.0);
      $.cashier1.setIdle();
      $.cashier1.setStayInSamePlace(true /* TRUE */);
      $.cashier1.setCoordinates(-923.4, -336.6, 12.4);
    }
    if (!(Char.IsDead($.cashier2))) {
      $.cashier2.setObjNoObj();
      $.cashier2.setHeading(98.0);
      $.cashier2.setIdle();
      $.cashier2.setStayInSamePlace(true /* TRUE */);
      $.cashier2.setCoordinates(-923.0, -335.6, 12.4);
    }
    if (!(Char.IsDead($.cashier3))) {
      $.cashier3.setObjNoObj();
      $.cashier3.setHeading(90.0);
      $.cashier3.setIdle();
      $.cashier3.setStayInSamePlace(true /* TRUE */);
      $.cashier3.setCoordinates(-923.8, -334.3, 12.4);
    }
    if (!(Char.IsDead($.cashier4))) {
      $.cashier4.setObjNoObj();
      $.cashier4.setHeading(82.0);
      $.cashier4.setIdle();
      $.cashier4.setStayInSamePlace(true /* TRUE */);
      $.cashier4.setCoordinates(-918.2, -342.0, 12.4);
    }
    if (!(Char.IsDead($.cashier5))) {
      $.cashier5.setObjNoObj();
      $.cashier5.setHeading(90.0);
      $.cashier5.setIdle();
      $.cashier5.setStayInSamePlace(true /* TRUE */);
      $.cashier5.setCoordinates(-918.0, -344.0, 12.4);
    }
    if (!(Char.IsDead($.cashier6))) {
      $.cashier6.setObjNoObj();
      $.cashier6.setHeading(93.0);
      $.cashier6.setIdle();
      $.cashier6.setStayInSamePlace(true /* TRUE */);
      $.cashier6.setCoordinates(-917.8, -346.0, 12.4);
    }
    if (!(Char.IsDead($.cashier7))) {
      $.cashier7.setObjNoObj();
      $.cashier7.setHeading(93.0);
      $.cashier7.setIdle();
      $.cashier7.setStayInSamePlace(true /* TRUE */);
      $.cashier7.setCoordinates(-917.0, -345.0, 12.4);
    }
    if (!(Char.IsDead($.cashier8))) {
      $.cashier8.setObjNoObj();
      $.cashier8.setHeading(93.0);
      $.cashier8.setIdle();
      $.cashier8.setStayInSamePlace(true /* TRUE */);
      $.cashier8.setCoordinates(-917.0, -343.0, 12.4);
      if (!(Char.IsDead($.cam))) {
        $.cam.setCoordinates(-916.0, -340.0, 12.4);
        $.cam.setHeading(120.0);
        $.cam.setObjAimGunAtChar($.cashier8);
      }
    }
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.setCoordinates(-918.55, -337.8, 13.5);
      $.scplayer.setHeading(80.0);
    }
    Camera.SetFixedPosition(-911.5, -344.0, 15.0, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(-922.0, -344.295, 13.94, 2 /* JUMP_CUT */);
    $.flag_change_waitstate = 0;
    $.flag_waitstate_1 = 35;
    $.flag_waitstate_2 = 35;
    $.flag_waitstate_3 = 35;
    await wait_state_loop();  // SCM GOSUB wait_state_loop
    $.flag_intro = 9;
  }


  if ($.intro_time_lapsed > 11500 && $.flag_intro == 9) {
    Camera.SetFixedPosition(-917.8, -329.8, 15.8, 0.0, 0.0, 0.0);
    Camera.PointAtChar($.scplayer, 15 /* FIXED */, 2 /* JUMP_CUT */);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_9", 5000, 1);
    await wait_state_loop();  // SCM GOSUB wait_state_loop
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_10" as any);
    $.flag_intro = 10;
  }


  if ($.intro_time_lapsed > 12000 && $.flag_intro == 10) {
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_10", 5000, 1);
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_11" as any);
    $.flag_intro = 11;
  }


  if ($.intro_time_lapsed > 14000 && $.flag_intro == 11) {
    /*
    IF NOT IS_CHAR_DEAD phil
    SET_CHAR_OBJ_NO_OBJ phil
    SET_CHAR_STAY_IN_SAME_PLACE phil FALSE
    SET_CHAR_OBJ_RUN_TO_COORD phil -908.0 -346.5
    SET_CHAR_THREAT_SEARCH phil THREAT_COP
    ENDIF
    */
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_11", 5000, 1);
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    //LOAD_MISSION_AUDIO audio_slot BNK4_11
    $.flag_intro = 12;
  }

  /*
  IF intro_time_lapsed > 9500
  AND flag_intro = 3
  DO_FADE 1000 FADE_OUT
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  CLEAR_PRINTS
  GET_PLAYER_COORDINATES player1 player_x player_y player_z
  LOAD_SCENE player_x player_y player_z
  RESTORE_CAMERA_JUMPCUT
  SWITCH_WIDESCREEN off
  SET_PLAYER_CONTROL player1 on
  IF NOT IS_CAR_DEAD player_4x4
  LOCK_CAR_DOORS player_4x4 CARLOCK_UNLOCKED
  ENDIF
  ALTER_WANTED_LEVEL player1 wanted_4x4
  DO_FADE 1000 FADE_IN
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  SET_MUSIC_DOES_FADE TRUE
  flag_intro = 4
  flag_intro1_before = 1
  ENDIF
  */

  if (!($.flag_intro == 12)) {
    // SCM GOTO → tha_inner (not lowered; manual jump required)
    throw new Error("unresolved GOTO tha_inner"); // fallback: would break linear control flow
  }



  $.scplayer.setObjNoObj();
  $.scplayer.stopLooking();
  $.scplayer.setIdle();
  $.scplayer.clearWaitState();
  $.player1.setControl(true /* ON */);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(false /* OFF */);
  if (!(Char.IsDead($.phil))) {
    $.phil.leaveGroup();
    $.phil.setRunning(false /* FALSE */);
    $.phil.setObjNoObj();
  }
  if (!(Char.IsDead($.cam))) {
    $.cam.setObjNoObj();
    $.cam.stopLooking();
    $.cam.followPlayer($.player1);
    //SET_CHAR_THREAT_SEARCH cam THREAT_GANG_SECURITY

  }
}

async function botty_head() {
  if ($.flag_bank_mission_failed == 1) {
    // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
  }


  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-938.56, -351.5, 16.8);



  $.bank_cop_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -961.75, -329.1, 14.6); // managers office & surveillance room
  $.bank_cop_4.clearThreatSearch();
  $.bank_cop_4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.bank_cop_4.setHeading(240.0);
  //SET_CHAR_CROUCH bank_cop_4 TRUE 9999
  //CHAR_SET_IDLE bank_cop_4

  $.bank_cop_4.giveWeapon(WEAPONTYPE_MP5, 9999);


  $.bank_cop_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDb, -956.75, -340.4, 14.6); // managers office & surveillance room
  $.bank_cop_5.clearThreatSearch();
  $.bank_cop_5.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.bank_cop_5.setHeading(10.0);
  //SET_CHAR_CROUCH bank_cop_5 TRUE 9999
  //CHAR_SET_IDLE bank_cop_5

  $.bank_cop_5.giveWeapon(WEAPONTYPE_MP5, 9999);


  $.bank_cop_7 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -935.73, -348.3, 16.8); // by the lift
  $.bank_cop_7.clearThreatSearch();
  $.bank_cop_7.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.bank_cop_7.setHeading(266.0);
  $.bank_cop_7.setCrouch(true /* TRUE */, 300000);
  //CHAR_SET_IDLE bank_cop_5

  $.bank_cop_7.giveWeapon(WEAPONTYPE_MP5, 9999);


  $.bank_cop_8 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDb, -943.0, -343.9, 6.3); // bank vault
  $.bank_cop_8.clearThreatSearch();
  $.bank_cop_8.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.bank_cop_8.setThreatSearch(524288 /* THREAT_SPECIAL */);
  $.bank_cop_8.setHeedThreats(true /* TRUE */);
  $.bank_cop_8.setHeading(270.0);
  //SET_CHAR_CROUCH bank_cop_8 TRUE 9999
  //CHAR_SET_IDLE bank_cop_8

  $.bank_cop_8.giveWeapon(WEAPONTYPE_MP5, 9999);


  Path.AddRoutePoint(1, -943.0, -343.9, 6.3);
  Path.AddRoutePoint(1, -934.8, -343.9, 6.3);
  //ADD_ROUTE_POINT 1 -934.8 -351.7 6.3


  $.bank_cop_8.setObjFollowRoute(1, 3 /* FOLLOW_ROUTE_LOOP */);
  //SET_CHAR_USE_PEDNODE_SEEK bank_cop_8 FALSE

  //REQUEST_MODEL bnk_lft_door1
  //REQUEST_MODEL bnk_lft_door2

  //LOAD_ALL_MODELS_NOW

  //WHILE NOT HAS_MODEL_LOADED bnk_lft_door1
  //OR NOT HAS_MODEL_LOADED bnk_lft_door2
  //	WAIT 0
  //ENDWHILE


  $.lift_door_1 = ScriptObject.Create(bnk_lft_door1, -936.964, -349.488, 3.235);
  $.lift_door_2 = ScriptObject.Create(bnk_lft_door2, -936.964, -353.369, 3.235);

  //CREATE_PICKUP_WITH_AMMO ModelIndex PickUpType Ammo X Y Z PickupID

  $.bank_health = Pickup.Create(1362 /* health */, 3 /* PICKUP_ONCE */, -959.3, -335.97, 15.59);
  $.bank_armour = Pickup.Create(1364 /* bodyarmour */, 3 /* PICKUP_ONCE */, -956.7, -337.64, 15.6);


  while (!($.player1.locateOnFoot3D(-938.56, -351.5, 16.8, 1.5, 1.5, 1.5, true /* TRUE */))) {
    await asyncWait(0);
    await stairs_cam();  // SCM GOSUB stairs_cam
    await cam_death_check();  // SCM GOSUB cam_death_check
    await phil_death_check();  // SCM GOSUB phil_death_check
    await surveilance();  // SCM GOSUB surveilance
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    await hostage_checker();  // SCM GOSUB hostage_checker
    if ($.flag_cop_6 == 1) {
      await banK_manager_death_check();  // SCM GOSUB banK_manager_death_check
    }
    if ($.player1.locateOnFoot3D(-942.5, -331.3, 14.6, 3.0, 3.0, 3.0, false /* FALSE */)) {
      await wait_state_loop();  // SCM GOSUB wait_state_loop
      if (!(Char.IsDead($.bank_cop_5))) {
        if ($.flag_cop_5 == 0) {
          $.bank_cop_5.setObjRunToCoord(-952.8, -334.6);
          $.flag_cop_5 = 1;
        }
      }
      else {
        $.bank_cop_5.markAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.bank_cop_4))) {
        if ($.flag_cop_4 == 0) {
          $.bank_cop_4.setObjRunToCoord(-956.8, -331.3);
          $.flag_cop_4 = 1;
        }
      }
      else {
        $.bank_cop_4.markAsNoLongerNeeded();
      }
    }
    if (!(Char.IsDead($.bank_cop_4)) && $.flag_cop_4 == 1) {
      if ($.bank_cop_4.locateOnFoot3D(-956.8, -331.3, 15.6, 2.0, 2.0, 2.0, false /* FALSE */)) {
        $.bank_cop_4.setStayInSamePlace(true /* TRUE */);
        $.bank_cop_4.setObjKillPlayerOnFoot($.player1);
        $.flag_cop_4 = 2;
      }
    }
    if ($.flag_cop_6 == 1) {
      if ($.player1.locateOnFoot3D(-922.3, -333.0, 17.8, 3.0, 3.0, 1.5, false /* FALSE */)) {
        await bank_job_timer();  // SCM GOSUB bank_job_timer
        if ($.intro_time_lapsed > $.rand_crouch_time) {
          if (!(Char.IsDead($.bank_cop_6))) {
            $.bank_cop_6.setCrouch(false /* FALSE */, 0);
            $.bank_cop_6.setStayInSamePlace(true /* TRUE */);
            $.bank_cop_6.setObjKillPlayerOnFoot($.player1);
          }
        }
        if ($.intro_time_lapsed > 4000) {
          if (!(Char.IsDead($.bank_cop_6))) {
            $.bank_cop_6.setCrouch(true /* TRUE */, 2000);
            $.timer_intro_start = Clock.GetGameTimer();
            $.rand_crouch_time = Math.RandomIntInRange(0, 4000);
          }
        }
        if ($.flag_cop_7 == 0) {
          if (!(Char.IsDead($.bank_cop_7))) {
            $.bank_cop_7.setObjRunToCoord(-923.7, -348.25);
            $.flag_cop_7 = 1;
          }
        }
      }
    }
    if (!(Char.IsDead($.bank_cop_7)) && $.flag_cop_7 == 1) {
      if ($.bank_cop_7.locateOnFoot3D(-923.7, -348.25, 16.8, 2.0, 2.0, 2.0, false /* FALSE */)) {
        $.bank_cop_7.setStayInSamePlace(true /* TRUE */);
        $.bank_cop_7.setObjKillPlayerOnFoot($.player1);
        $.flag_cop_7 = 2;
      }
    }
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }


  }

  // ************************************** PLAYER GOING DOWN IN LIFT ***********************************


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  if (!(Char.IsDead($.cam))) {
    $.cam.leaveGroup();
    $.cam.followPath(-938.56, -351.5, 16.8, 0.5, RUN);
    //SET_CHAR_OBJ_RUN_TO_COORD cam -938.56 -351.5

  }
}



async function cunty() {
  if (!(Char.IsDead($.cam))) {
    TIMERA = 0;
    while (!($.cam.locateOnFoot3D(-938.56, -351.5, 16.8, 1.5, 1.5, 3.0, false /* FALSE */))) {
      await asyncWait(0);
      if (TIMERA > 2500) {
        if (!(Char.IsDead($.cam))) {
          $.cam.setCoordinates(-932.9, -351.3, 16.8);
          $.cam.setHeading(90.0);
          $.cam.followPath(-938.56, -351.5, 16.8, 0.5, RUN);
          //SET_CHAR_OBJ_RUN_TO_COORD cam -938.56 -351.5

        }
        TIMERA = 0;
      }
      if (Char.IsDead($.cam)) {
        // SCM GOTO → cunty (not lowered; manual jump required)
        throw new Error("unresolved GOTO cunty"); // fallback: would break linear control flow
      }
    }
  }
  else {
    Text.PrintNow("C_DEAD", 5000, 1); //"cam's dead"
    // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
  }


  if (!(Char.IsDead($.cam))) {
    $.cam.setStayInSamePlace(true /* TRUE */);
    $.cam.setObjNoObj();
  }
}



async function aaarrrgghh() {


  await going_down_pt1();  // SCM GOSUB going_down_pt1


  if (!(Char.IsDead($.cam))) {
    $.cam.setCoordinates(-939.1, -351.12, 6.23);
    $.cam.setHeading(260.0);
    $.cam.followPlayer($.player1);
  }


  if (!(Char.IsDead($.bank_cop_8))) {
    $.bank_cop_8.setCoordinates(-943.0, -343.9, 6.3);
    $.bank_cop_8.setObjFollowRoute(1, 3 /* FOLLOW_ROUTE_LOOP */);
    $.bank_cop_8.setThreatSearch(1 /* THREAT_PLAYER1 */);
  }


  await going_down_pt2();  // SCM GOSUB going_down_pt2



  if (!(Char.IsDead($.cam))) {
    $.cam.setStayInSamePlace(false /* FALSE */);
  }

  // ***************************************************************************************************


  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-944.5, -341.58, 6.3);


  $.flag_cam_downstairs = 1;


  while (!(Char.IsDead($.bank_cop_8))) {
    await asyncWait(0);
    await cam_death_check();  // SCM GOSUB cam_death_check
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    await banK_manager_death_check();  // SCM GOSUB banK_manager_death_check
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
  }


  while (!($.player1.locateOnFoot3D(-944.5, -341.58, 6.3, 1.0, 1.0, 1.5, true /* TRUE */))) {
    await asyncWait(0);
    await cam_death_check();  // SCM GOSUB cam_death_check
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    await banK_manager_death_check();  // SCM GOSUB banK_manager_death_check
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
  }


  $.mission_blip.remove();

  // ************************** CAM INSPECTS VAULT ********************************


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);


  $.scplayer.turnToFaceCoord(-944.5, -344.12, 8.0);


  Camera.SetFixedPosition(-940.2, -343.6, 8.6, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-944.5, -343.8, 7.45, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.cam))) {
    $.cam.leaveGroup();
    $.cam.setObjRunToCoord(-944.5, -344.12);
  }
}



async function labia() {
  if (!(Char.IsDead($.cam))) {
    TIMERA = 0;
    while (!($.cam.locateOnFoot3D(-944.5, -344.12, 7.0, 1.5, 1.5, 3.0, false /* FALSE */))) {
      await asyncWait(0);
      if (TIMERA > 2000) {
        if (!(Char.IsDead($.cam))) {
          //				IF NOT IS_CHAR_ON_SCREEN cam
          $.cam.setCoordinates(-937.0, -343.6, 7.0);
          $.cam.setHeading(90.0);
          $.cam.setObjRunToCoord(-944.5, -344.12);
          //				ENDIF

        }
        TIMERA = 0;
      }
      if (Char.IsDead($.cam)) {
        // SCM GOTO → labia (not lowered; manual jump required)
        throw new Error("unresolved GOTO labia"); // fallback: would break linear control flow
      }
    }
  }
  else {
    Text.PrintNow("C_DEAD", 5000, 1); //"~r~Phil died!"
    // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
  }





  if (!(Char.IsDead($.cam))) {
    $.cam.setHeading(90.0);
    $.cam.setCrouch(true /* TRUE */, 300000);
    $.scplayer.turnToFaceChar($.cam);
  }



  $.audio_slot = 1;
  Audio.LoadMissionAudio($.audio_slot, "BK4_12a" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_12a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BK4_12b" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_12b", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BK4_12c" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_12c", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.cam))) {
    $.cam.setCrouch(false /* FALSE */, 0);
  }


  Audio.LoadMissionAudio($.audio_slot, "BNK4_13" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_13", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  Text.ClearPrints();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();

  //WHILE NOT LOCATE_PLAYER_ON_FOOT_3D player1 -937.84 -351.73 6.23 1.5 1.6 1.5 FALSE

  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-964.0, -335.0, 14.6);


  while (!($.player1.locateOnFoot3D(-939.84, -351.73, 6.23, 1.5, 1.5, 1.5, false /* FALSE */))) {
    await asyncWait(0);
    await cam_death_check();  // SCM GOSUB cam_death_check
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
  }

  // ********************************* PLAYER GOING UP IN LIFT TO FIND BANK MANAGER **********************


  await going_up();  // SCM GOSUB going_up
  await wait_state_loop();  // SCM GOSUB wait_state_loop
  // ******************************************************************************************************


  while (!($.player1.locateOnFoot3D(-964.0, -337.0, 14.6, 3.0, 3.0, 3.0, false /* FALSE */))) {
    await asyncWait(0);
    await stairs_cam();  // SCM GOSUB stairs_cam
    await cam_death_check();  // SCM GOSUB cam_death_check
    await phil_death_check();  // SCM GOSUB phil_death_check
    await surveilance();  // SCM GOSUB surveilance
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    await banK_manager_death_check();  // SCM GOSUB banK_manager_death_check
    await hostage_checker();  // SCM GOSUB hostage_checker
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateOnFoot3D(-922.3, -348.2, 16.6, 3.0, 3.0, 3.0, false /* FALSE */) && $.flag_dialogue == 0) {
      $.audio_slot = 1;
      Audio.LoadMissionAudio($.audio_slot, "BK4_14b" as any);
      await audio_bank_loading();  // SCM GOSUB audio_bank_loading
      Text.PrintNow("BK4_14a", 10000, 1); //rhubarb rhubarb
      await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
      Audio.LoadMissionAudio($.audio_slot, "BNK4_15" as any);
      await audio_bank_loading();  // SCM GOSUB audio_bank_loading
      Text.PrintNow("BNK4_15", 10000, 1); //Sure, everything's real quiet (text has a typo).
      await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
      Text.ClearPrints();
      $.flag_dialogue = 1;
    }


  }
  $.flag_dialogue = 0;

  // ********************** PLAYER GETS MANAGER ********************************


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);
  if (!(Char.IsDead($.bank_manager))) {
    $.scplayer.setObjAimGunAtChar($.bank_manager);
    Camera.SetFixedPosition(-961.3, -330.8, 16.6, 0.0, 0.0, 0.0);
    Camera.PointAtChar($.bank_manager, 15 /* FIXED */, 1 /* INTERPOLATION */);
  }


  $.audio_slot = 1;
  Audio.LoadMissionAudio($.audio_slot, "BNK4_16" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_16", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setCrouch(false /* FALSE */, 0);
    $.bank_manager.clearThreatSearch();
    $.bank_manager.turnToFaceChar($.scplayer);
    $.bank_manager.setWaitState(17, 300000);
  }


  Audio.LoadMissionAudio($.audio_slot, "BNK4_17" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_17", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  Text.ClearPrints();


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setWaitState(0, 0);
    $.bank_manager.followPlayer($.player1);
  }


  $.scplayer.setObjNoObj();
  $.scplayer.stopLooking();
  $.scplayer.setIdle();
  $.scplayer.clearWaitState();


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.Restore();


  // ************* PLAYER MUST TAKE MANAGER TO VAULT ****************************

  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-944.36, -342.0, 6.3);


  while (!($.player1.locateOnFoot3D(-938.56, -351.5, 16.8, 1.5, 1.5, 1.5, true /* TRUE */))) {
    await asyncWait(0);
    await stairs_cam();  // SCM GOSUB stairs_cam
    await surveilance();  // SCM GOSUB surveilance
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    await cam_death_check();  // SCM GOSUB cam_death_check
    await phil_death_check();  // SCM GOSUB phil_death_check
    await banK_manager_death_check();  // SCM GOSUB banK_manager_death_check
    await hostage_checker();  // SCM GOSUB hostage_checker
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateOnFoot3D(-922.3, -348.3, 17.8, 3.0, 3.0, 3.0, false /* FALSE */) && $.flag_dialogue == 0) {
      $.audio_slot = 1;
      Audio.LoadMissionAudio($.audio_slot, "BNK4_18" as any);
      await audio_bank_loading();  // SCM GOSUB audio_bank_loading
      Text.PrintNow("BNK4_18", 10000, 1); //rhubarb rhubarb
      await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
      $.flag_dialogue = 1;
    }
  }

  // ************************************** PLAYER GOING DOWN IN LIFT WITH MANAGER ***********************************


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.leaveGroup();
    $.bank_manager.followPath(-938.56, -351.5, 16.8, 0.5, RUN);
  }
}



async function ooooogggg() {
  if (!(Char.IsDead($.bank_manager))) {
    TIMERA = 0;
    while (!($.bank_manager.locateOnFoot3D(-938.56, -351.5, 16.8, 1.5, 1.5, 3.0, false /* FALSE */))) {
      await asyncWait(0);
      if (TIMERA > 2500) {
        if (!(Char.IsDead($.bank_manager))) {
          //				IF NOT IS_CHAR_ON_SCREEN bank_manager
          $.bank_manager.setCoordinates(-932.9, -351.3, 16.8);
          $.bank_manager.setHeading(90.0);
          $.bank_manager.followPath(-938.56, -351.5, 16.8, 0.5, RUN);
          //SET_CHAR_OBJ_RUN_TO_COORD bank_manager -938.56 -351.5
          //				ENDIF

        }
        TIMERA = 0;
      }
      if (Char.IsDead($.bank_manager)) {
        // SCM GOTO → ooooogggg (not lowered; manual jump required)
        throw new Error("unresolved GOTO ooooogggg"); // fallback: would break linear control flow
      }
    }
  }
  else {
    Text.PrintNow("BM_DEAD", 5000, 1); //"bank manager dead"
    // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
  }


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setStayInSamePlace(true /* TRUE */);
    $.bank_manager.setObjNoObj();
  }


  await going_down_pt1();  // SCM GOSUB going_down_pt1


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setCoordinates(-939.1, -351.12, 6.23);
    $.bank_manager.setHeading(260.0);
    $.bank_manager.followPlayer($.player1);
  }


  await going_down_pt2();  // SCM GOSUB going_down_pt2


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setStayInSamePlace(false /* FALSE */);
  }


  // ***************************************************************************************************


  while (!($.player1.locateOnFoot3D(-944.5, -341.58, 6.3, 1.0, 1.0, 1.5, true /* TRUE */))) {
    await asyncWait(0);
    await cam_death_check();  // SCM GOSUB cam_death_check
    await banK_manager_death_check();  // SCM GOSUB banK_manager_death_check
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
  }


  // ************** MANAGER, CAM AND PLAYER AT VAULT *************************************************


  $.mission_blip.remove();


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);

  //TURN_CHAR_TO_FACE_COORD scplayer -944.5 -344.12	8.0


  Camera.SetFixedPosition(-940.2, -343.6, 8.6, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-944.5, -343.8, 7.45, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.cam)) && !(Char.IsDead($.bank_manager))) {
    $.cam.turnToFaceChar($.bank_manager);
    $.cam.lookAtCharAlways($.bank_manager);
  }


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.leaveGroup();
    $.bank_manager.clearThreatSearch();
    $.bank_manager.setObjRunToCoord(-943.68, -343.47);
  }
}




async function aaaagggg() {
  if (!(Char.IsDead($.bank_manager))) {
    TIMERA = 0;
    while (!($.bank_manager.locateOnFoot3D(-943.5, -343.5, 6.2, 1.5, 1.5, 3.0, false /* FALSE */))) {
      await asyncWait(0);
      if (TIMERA > 2500) {
        if (!(Char.IsDead($.bank_manager))) {
          //				IF NOT IS_CHAR_ON_SCREEN bank_manager
          $.bank_manager.setCoordinates(-937.0, -343.5, 6.2);
          $.bank_manager.setHeading(90.0);
          $.bank_manager.setObjRunToCoord(-943.68, -343.47);
          //				ENDIF

        }
        TIMERA = 0;
      }
      if (Char.IsDead($.bank_manager)) {
        // SCM GOTO → aaaagggg (not lowered; manual jump required)
        throw new Error("unresolved GOTO aaaagggg"); // fallback: would break linear control flow
      }
    }
  }
  else {
    Text.PrintNow("BM_DEAD", 5000, 1); //"bank manager dead"
    // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
  }



  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setStayInSamePlace(true /* TRUE */);
    $.bank_manager.setHeading(90.0);
    $.scplayer.turnToFaceChar($.bank_manager);
    $.scplayer.setObjAimGunAtChar($.bank_manager);
    //SET_CHAR_COORDINATES bank_manager world_x world_y world_z
    //world_z = world_z + 1.0
    //SET_CHAR_WAIT_STATE bank_manager 17 300000

  }



  $.audio_slot = 1;
  Audio.LoadMissionAudio($.audio_slot, "BK4_19a" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_19a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BK4_19b" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_19b", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank

  //DELETE_CHAR bank_manager


  if (!(Char.IsDead($.cam)) && !(Char.IsDead($.scplayer)) && !(Char.IsDead($.bank_manager))) {
    $.cam.turnToFaceChar($.scplayer);
    //CHAR_LOOK_AT_CHAR_ALWAYS cam bank_manager

    //GET_CHAR_COORDINATES bank_manager world_x world_y world_z
    //world_z = world_z + 0.5
    //SET_FIXED_CAMERA_POSITION world_x world_y world_z 0.0 0.0 0.0

    Camera.SetFixedPosition(-943.0, -343.6, 7.9, 0.0, 0.0, 0.0);
    $.bank_manager.setCoordinates(-941.0, -345.2, 6.23);
    const _res80 = $.cam.getCoordinates();
$.world_x = _res80.x;
$.world_y = _res80.y;
$.world_z = _res80.z;
    $.world_z = $.world_z + 0.6;
    Camera.PointAtPoint($.world_x, $.world_y, $.world_z, 2 /* JUMP_CUT */);
    Camera.SetNearClip(0.02);
    //SET_CHAR_WAIT_STATE bank_manager 19 300000 // CHAT

  }


  Audio.LoadMissionAudio($.audio_slot, "BK4_20a" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_20a", 10000, 1); // Hell, I can bypass the time lock,
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.cam)) && !(Char.IsDead($.bank_manager))) {
    $.cam.stopLooking();
    $.bank_manager.setCoordinates(-941.8, -342.9, 6.23);
    $.cam.turnToFaceChar($.bank_manager);
    $.cam.lookAtCharAlways($.bank_manager);
  }


  Audio.LoadMissionAudio($.audio_slot, "BK4_20b" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_20b", 10000, 1); // Then we just need your key code and we're good!
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.cam)) && !(Char.IsDead($.scplayer))) {
    $.cam.stopLooking();
    //TURN_CHAR_TO_FACE_CHAR cam scplayer
    //CHAR_LOOK_AT_CHAR_ALWAYS cam scplayer
    $.cam.setWaitState(0, 0); // NONE
  }


  if (!(Char.IsDead($.scplayer))) {
    const _res81 = $.scplayer.getCoordinates();
$.world_x = _res81.x;
$.world_y = _res81.y;
$.world_z = _res81.z;
    $.world_z = $.world_z + 0.6;
  }
  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setCoordinates(-942.37, -345.2, 6.23);
  }


  Camera.PointAtPoint($.world_x, $.world_y, $.world_z, 1 /* INTERPOLATION */);
  //SET_CHAR_WAIT_STATE bank_manager 19 300000 // CHAT



  Audio.LoadMissionAudio($.audio_slot, "BNK4_21" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_21", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  /*
  LOAD_MISSION_AUDIO audio_slot BNK422A
  GOSUB audio_bank_loading
  PRINT_NOW ( BNK422A ) 10000 1//rhubarb rhubarb
  GOSUB has_audio_finished_bank

  IF NOT IS_CHAR_DEAD cam
  GET_CHAR_COORDINATES cam world_x world_y world_z
  world_z = world_z + 0.6
  ENDIF

  POINT_CAMERA_AT_POINT world_x world_y world_z INTERPOLATION
  //SET_CHAR_WAIT_STATE bank_manager 19 300000 // CHAT


  LOAD_MISSION_AUDIO audio_slot BK4_23b
  GOSUB audio_bank_loading
  PRINT_NOW ( BK4_23a ) 10000 1//rhubarb rhubarb
  GOSUB has_audio_finished_bank
  IF NOT IS_CHAR_DEAD scplayer
  GET_CHAR_COORDINATES scplayer world_x world_y world_z
  world_z = world_z + 0.6
  ENDIF

  POINT_CAMERA_AT_POINT world_x world_y world_z INTERPOLATION
  */


  Audio.LoadMissionAudio($.audio_slot, "BK4_24a" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_24a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  Text.ClearPrints();


  $.scplayer.setObjNoObj();
  $.scplayer.stopLooking();
  $.scplayer.setIdle();
  $.scplayer.clearWaitState();


  if (!(Char.IsDead($.bank_manager))) {
    $.bank_manager.setCoordinates(-943.0, -343.6, 6.23);
  }


  Camera.RestoreJumpcut();
  //SET_NEAR_CLIP 0.1

  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Hud.SwitchWidescreen(false /* OFF */);


  $.mission_blip.remove();
  //IF NOT IS_CHAR_DEAD phil
  //	ADD_BLIP_FOR_CHAR phil mission_blip
  //ENDIF


  while (!($.player1.locateOnFoot3D(-939.84, -351.73, 6.23, 1.5, 1.5, 1.5, false /* FALSE */))) {
    await asyncWait(0);
    await cam_death_check();  // SCM GOSUB cam_death_check
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    await banK_manager_death_check();  // SCM GOSUB banK_manager_death_check
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
  }

  // ********************************* PLAYER GOING UP IN LIFT TO CHECK ON PHIL **********************


  await going_up();  // SCM GOSUB going_up


  await wait_state_loop();  // SCM GOSUB wait_state_loop
  // ******************************************************************************************************


  while (!($.player1.locateOnFoot3D(-922.3, -348.3, 17.8, 3.0, 3.0, 3.0, false /* FALSE */))) {
    await asyncWait(0);
    //GOSUB cam_death_check
    //GOSUB banK_manager_death_check
    await phil_death_check();  // SCM GOSUB phil_death_check
    await stairs_cam();  // SCM GOSUB stairs_cam
    await surveilance();  // SCM GOSUB surveilance
    await wanted_malarkey();  // SCM GOSUB wanted_malarkey
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
  }

  // *********************** ALARM GOES OFF, PHIL SHOOTS GUARD **********************************************


  $.player1.alterWantedLevelNoDrop(3);


  $.bank_alarm = Sound.AddContinuous(-916.0, -340.0, 15.0, SOUND_BANK_ALARM_LOOP);
  Audio.LoadMissionAudio($.audio_slot, "BK4_24b" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_24b", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  Text.ClearPrints();


  $.target_ped = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -920.6, -340.0, 13.4);
  $.target_ped.setHealth(50);
  $.target_ped.setHeading(270.0);
  $.target_ped.setObjRunToCoord(-902.0, -340.0);


  if (!(Char.IsDead($.phil))) {
    $.phil.setObjKillCharOnFoot($.target_ped);
    $.phil.setAccuracy(80);
  }


  while (!(Char.IsDead($.target_ped))) {
    await asyncWait(0);
    //GOSUB cam_death_check
    await phil_death_check();  // SCM GOSUB phil_death_check
    await stairs_cam();  // SCM GOSUB stairs_cam
    await surveilance();  // SCM GOSUB surveilance
    //GOSUB wanted_malarkey
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
  }


  Audio.LoadMissionAudio($.audio_slot, "BNK4_25" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_25", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BNK4_27" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_27", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-907.8, -345.87, 12.4);


  while (!($.player1.locateOnFoot3D(-907.8, -345.87, 12.4, 1.5, 1.5, 1.5, true /* TRUE */))) {
    await asyncWait(0);
    //GOSUB cam_death_check
    //GOSUB banK_manager_death_check
    await stairs_cam();  // SCM GOSUB stairs_cam
    await surveilance();  // SCM GOSUB surveilance
    await phil_death_check();  // SCM GOSUB phil_death_check
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await hostage_checker();  // SCM GOSUB hostage_checker
    if (!(Char.IsDead($.phil))) {
      if (!($.phil.isOnScreen()) && $.flag_phil_warp == 0) {
        if (!(Camera.IsPointOnScreen(-917.6, -337.57, 13.46, 2.0))) {
          $.phil.setCoordinates(-917.6, -337.57, 13.46);
          $.phil.setHeading(272.0);
          $.phil.setCrouch(true /* TRUE */, 999999);
          $.phil.setStayInSamePlace(true /* TRUE */);
          $.flag_phil_warp = 1;
        }
      }
    }
  }

  // ****************************** PLAYER IN POSITION ******************************************************


  if (!(Char.IsDead($.phil))) {
    $.phil.leaveGroup();
  }



  $.mission_blip.remove();
  /*
  IF NOT IS_CHAR_DEAD phil
  SET_CHAR_THREAT_SEARCH phil THREAT_COP
  ENDIF
  */

  $.target_ped = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -897.0, -341.1, 12.4);
  $.target_ped.setStayInSamePlace(true /* TRUE */);


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.setObjAimGunAtChar($.target_ped);
  }



  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);



  Camera.SetFixedPosition(-914.5, -347.25, 15.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-902.2, -341.9, 12.69, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio($.audio_slot, "BNK4_28" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_28", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.phil))) {
    Camera.SetFixedPosition(-915.8, -335.0, 13.8, 0.0, 0.0, 0.0);
    Camera.PointAtChar($.phil, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }


  Audio.LoadMissionAudio($.audio_slot, "BNK4_29" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_29", 10000, 1); //surrounded, ha hah ah .
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BNK4_30" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_30", 10000, 1); //crapping etc
  if (!(Char.IsDead($.phil)) && !(Char.IsDead($.target_ped))) {
    $.phil.setObjAimGunAtChar($.target_ped);
  }
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.cam))) {
    $.cam.setCoordinates(-920.0, -347.0, 16.8);
    $.cam.setHeading(290.0);
    Camera.SetFixedPosition(-914.3, -345.25, 15.8, 0.0, 0.0, 0.0);
    Camera.PointAtChar($.cam, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.flag_cam_downstairs = 0;
  }


  Audio.LoadMissionAudio($.audio_slot, "BK4_31b" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_31a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Camera.SetFixedPosition(-905.76, -345.84, 14.0, 0.0, 0.0, 0.0);
  Camera.PointAtChar($.scplayer, 15 /* FIXED */, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio($.audio_slot, "BK4_34a" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_34a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Camera.SetFixedPosition(-914.5, -347.25, 15.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-902.2, -341.9, 12.69, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio($.audio_slot, "BK4_34b" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_34b", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.phil))) {
    Camera.SetFixedPosition(-915.8, -335.0, 13.8, 0.0, 0.0, 0.0);
    Camera.PointAtChar($.phil, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }


  Audio.LoadMissionAudio($.audio_slot, "BK4_35a" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_35a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BK4_35b" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_35b", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.setObjNoObj();
    Camera.SetBehindPlayer();
  }


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();


  if (!(Char.IsDead($.phil))) {
    $.phil.setObjNoObj();
    $.phil.setThreatSearch(64 /* THREAT_COP */);
  }


  $.target_ped.delete();
  $.bank_manager.delete();
  // ********************************* SWAT STORM BANK!!! *************************************************

  $.flag_phil_warp = 0;
  //REMOVE_SOUND bank_alarm


  if (!(Char.IsDead($.phil))) {
    $.phil.setObjNoObj();
    $.phil.setStayInSamePlace(true /* TRUE */);
    $.phil.setHealth(200);
    $.phil.setThreatSearch(64 /* THREAT_COP */);
    $.phil.setHeedThreats(true /* TRUE */);
  }


  Streaming.RequestModel(swat);
  Streaming.RequestModel(gasgrenade);


  while (!(Streaming.HasModelLoaded(swat)) || !(Streaming.HasModelLoaded(gasgrenade))) {
    await asyncWait(0);
  }


  $.flag_waitstate_1 = 0;
  $.flag_waitstate_2 = 0;
  $.flag_waitstate_3 = 0;
  $.flag_change_waitstate = 0;
  await wait_state_loop();  // SCM GOSUB wait_state_loop
  $.flag_waitstate_1 = 15;
  $.flag_waitstate_2 = 15;
  $.flag_waitstate_3 = 15;
  $.flag_change_waitstate = 0;
  await wait_state_loop();  // SCM GOSUB wait_state_loop
  //GOSUB flee_bank


  /*
  -899.214 -333.656 21.233  grill_1
  -899.214 -348.466 21.233  grill_2
  -907.307 -336.618 23.987  grill_3
  -907.307 -345.504 23.987  grill_4
  -915.401 -336.6184 23.987 grill_5
  -915.401 -345.50 23.987   grill_6
  */

  $.grill_1.setDynamic(true /* TRUE */);
  //ADD_TO_OBJECT_VELOCITY grill_1 0.0 0.0 -0.1


  $.grill_2.setDynamic(true /* TRUE */);
  //ADD_TO_OBJECT_VELOCITY grill_2 0.0 0.0 -0.1


  $.grill_3.setDynamic(true /* TRUE */);
  //ADD_TO_OBJECT_VELOCITY grill_3 0.0 0.0 -0.1


  $.grill_4.setDynamic(true /* TRUE */);
  //ADD_TO_OBJECT_VELOCITY grill_4 0.0 0.0 -0.1


  $.grill_5.setDynamic(true /* TRUE */);
  //ADD_TO_OBJECT_VELOCITY grill_5 0.0 0.0 -0.1


  $.grill_6.setDynamic(true /* TRUE */);
  //ADD_TO_OBJECT_VELOCITY grill_6 0.0 0.0 -0.1


  $.grill_1.setCollision(true /* TRUE */);
  $.grill_2.setCollision(true /* TRUE */);
  $.grill_3.setCollision(true /* TRUE */);
  $.grill_4.setCollision(true /* TRUE */);
  $.grill_5.setCollision(true /* TRUE */);
  $.grill_6.setCollision(true /* TRUE */);


  $.audio_slot = 2;
  Audio.LoadMissionAudio($.audio_slot, "bloroof" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  $.audio_slot = 1;



  Path.RemoveRoute(1);
  Path.RemoveRoute(2);


  TIMERA = 0;


  while ($.player1.isPlaying()) {
    //AND flag_cam_at_target < 2
    await asyncWait(0);

    //SET_PLAYER_HEALTH player1 100

    await phil_death_check();  // SCM GOSUB phil_death_check
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    await surveilance();  // SCM GOSUB surveilance
    await hostage_checker();  // SCM GOSUB hostage_checker
    if (!(Char.IsDead($.phil)) && $.flag_swat_rope > 1) {
      if ($.phils_target == 0) {
        $.target_ped1 = World.GetRandomCopInArea(-919.5, -329.8, -901.5, -351.45, false, true, false, false, false);
        $.target_ped2 = World.GetRandomCopInArea(-919.5, -329.8, -901.5, -351.45, false, true, false, false, false);
        $.target_ped3 = World.GetRandomCopInArea(-919.5, -329.8, -901.5, -351.45, false, true, false, false, false);
        $.target_ped4 = World.GetRandomCopInArea(-919.5, -329.8, -901.5, -351.45, false, true, false, false, false);
        $.phils_target = 1;
      }
      else {
        if (!(Char.IsDead($.target_ped1))) {
          if ($.phils_target == 1) {
            $.phil.setObjKillCharOnFoot($.target_ped1);
            $.phils_target = 2;
          }
        }
        else {
          $.target_ped1.markAsNoLongerNeeded();
          if (!(Char.IsDead($.target_ped2))) {
            if ($.phils_target == 2) {
              $.phil.setObjKillCharOnFoot($.target_ped2);
              $.phils_target = 3;
            }
          }
          else {
            $.target_ped2.markAsNoLongerNeeded();
            if (!(Char.IsDead($.target_ped3))) {
              if ($.phils_target == 3) {
                $.phil.setObjKillCharOnFoot($.target_ped3);
                $.phils_target = 4;
              }
            }
            else {
              $.target_ped3.markAsNoLongerNeeded();
              if (!(Char.IsDead($.target_ped4))) {
                if ($.phils_target == 4) {
                  $.phil.setObjKillCharOnFoot($.target_ped4);
                  $.phils_target = 5;
                }
              }
              else {
                $.target_ped4.markAsNoLongerNeeded();
                $.phils_target = 6;
              }
            }
          }
        }
      }
    }


    if ($.flag_grill_collision < 2) {
      const _res82 = $.grill_3.getCoordinates();
$.warp_x = _res82.x;
$.warp_y = _res82.y;
$.warp_z = _res82.z;
      if ($.flag_grill_collision == 0 && TIMERA > 2000) {
        $.bank_windows.delete();
        $.bank_windows = ScriptObject.CreateNoOffset(rocketed_win1, -899.851, -341.061, 14.318);
        $.bank_windows.dontRemove();
        $.gas_1 = ScriptObject.CreateNoOffset(gasgrenade, -900.7, -333.88, 14.73);
        $.gas_1.setDynamic(true /* TRUE */);
        $.gas_1.setCollision(true /* TRUE */);
        $.gas_1.addToVelocity(-0.5, 0.0, 0.0);
        //ADD_BLIP_FOR_OBJECT gas_3 test_blip1 // TEST TO COME OUT !!!!!

        $.gas_2 = ScriptObject.CreateNoOffset(gasgrenade, -900.7, -348.4, 14.73);
        $.gas_2.setDynamic(true /* TRUE */);
        $.gas_2.setCollision(true /* TRUE */);
        $.gas_2.addToVelocity(-0.5, 0.0, 0.0);

        //ADD_BLIP_FOR_OBJECT gas_4 test_blip2 // TEST TO COME OUT !!!!!

        $.gas_3 = ScriptObject.CreateNoOffset(gasgrenade, -907.307, -336.618, 18.0);
        $.gas_3.setDynamic(true /* TRUE */);
        $.gas_3.setCollision(true /* TRUE */);

        //ADD_BLIP_FOR_OBJECT gas_3 test_blip1 // TEST TO COME OUT !!!!!

        $.gas_4 = ScriptObject.CreateNoOffset(gasgrenade, -907.307, -345.504, 18.0);
        $.gas_4.setDynamic(true /* TRUE */);
        $.gas_4.setCollision(true /* TRUE */);

        //ADD_BLIP_FOR_OBJECT gas_4 test_blip2 // TEST TO COME OUT !!!!!

        $.gas_5 = ScriptObject.CreateNoOffset(gasgrenade, -915.401, -336.6184, 18.0);
        $.gas_5.setDynamic(true /* TRUE */);
        $.gas_5.setCollision(true /* TRUE */);

        //ADD_BLIP_FOR_OBJECT gas_5 test_blip3 // TEST TO COME OUT !!!!!

        $.gas_6 = ScriptObject.CreateNoOffset(gasgrenade, -915.401, -345.50, 18.0);
        $.gas_6.setDynamic(true /* TRUE */);
        $.gas_6.setCollision(true /* TRUE */);

        //ADD_BLIP_FOR_OBJECT gas_6 test_blip4 // TEST TO COME OUT !!!!!

        $.flag_grill_collision = 1;
        TIMERB = 0;
      }
      /*
      IF warp_z < 20.0
      AND flag_grill_collision = 0
      SET_OBJECT_COLLISION grill_1 TRUE
      SET_OBJECT_COLLISION grill_2 TRUE
      SET_OBJECT_COLLISION grill_3 TRUE
      SET_OBJECT_COLLISION grill_4 TRUE
      SET_OBJECT_COLLISION grill_5 TRUE
      SET_OBJECT_COLLISION grill_6 TRUE
      flag_grill_collision = 1
      ENDIF
      */

    }
    if ($.flag_grill_collision == 1) {
      if (TIMERB > 50) {
        TIMERB = 0;
        await gas_canisters();  // SCM GOSUB gas_canisters
      }
    }
    if ($.flag_swat_rope == 0 && TIMERA > 2000) {
      World.CreateSwatRope(-907.307, -336.618, 26.0);
      World.CreateSwatRope(-907.307, -345.504, 26.0);
      World.CreateSwatRope(-915.401, -336.6184, 26.0);
      World.CreateSwatRope(-915.401, -345.50, 26.0);
      $.flag_swat_rope = 1;
    }
    if (TIMERA > 4000 && $.flag_swat_rope == 1) {
      /*
      DELETE_OBJECT bank_windows
      CREATE_OBJECT_NO_OFFSET rocketed_win1 -899.851 -341.061 14.318 bank_windows
      DONT_REMOVE_OBJECT bank_windows
      */
      $.flag_swat_rope = 2;
    }
    if (TIMERA > 5000 && $.flag_swat_rope == 2) {
      //SET_OBJECT_DYNAMIC grill_1 TRUE
      $.swat_1 = Char.Create(6 /* PEDTYPE_COP */, swat, -899.214, -333.656, 23.0);
      $.swat_1.setHeading(0.0);
      $.swat_1.giveWeapon(WEAPONTYPE_MP5, 9999);

      //SET_OBJECT_DYNAMIC grill_2 TRUE
      $.swat_2 = Char.Create(6 /* PEDTYPE_COP */, swat, -899.214, -348.466, 23.0);
      $.swat_2.setHeading(180.0);
      $.swat_2.giveWeapon(WEAPONTYPE_MP5, 9999);
      if (!(Char.IsDead($.cam))) {
        $.swat_1.setObjKillCharOnFoot($.cam);
        $.swat_2.setObjKillCharOnFoot($.cam);
        Path.AddRoutePoint(1, -921.5, -347.1, 17.0);
        Path.AddRoutePoint(1, -923.0, -334.3, 17.0);
        Path.AddRoutePoint(1, -937.2, -333.8, 15.0);
        Path.AddRoutePoint(1, -935.0, -329.6, 15.0);
        Path.AddRoutePoint(1, -927.3, -328.5, 13.0);
        Path.AddRoutePoint(1, -921.1, -326.5, 13.0);
        Path.AddRoutePoint(1, -920.7, -339.0, 13.0);
        Path.AddRoutePoint(1, -910.6, -346.6, 13.0);
        $.cam.setObjFollowRoute(1, 1 /* FOLLOW_ROUTE_ONCE */);
        $.cam.setUsePednodeSeek(false /* FALSE */);
        $.cam.setThreatSearch(64 /* THREAT_COP */);
      }
      $.flag_swat_rope = 3;
    }
    if (!(Char.IsDead($.cam))) {
      const _res83 = $.cam.getCoordinates();
$.world_x = _res83.x;
$.world_y = _res83.y;
$.world_z = _res83.z;
      const _res84 = $.player1.getCoordinates();
$.player_x = _res84.x;
$.player_y = _res84.y;
$.player_z = _res84.z;
      if ($.flag_cam_at_target == 0) {
        if ($.cam.locateOnFoot3D($.player_x, $.player_y, $.player_z, 5.0, 5.0, 2.0, false /* FALSE */) || $.cam.locateOnFoot3D(-910.6, -346.6, 13.0, 10.0, 10.0, 2.0, false /* FALSE */)) {
          $.cam.setObjNoObj();
          //SET_CHAR_STAY_IN_SAME_PLACE cam TRUE
          //SET_CHAR_HEADING cam 340.0
          $.cam.setThreatSearch(64 /* THREAT_COP */);
          $.cam.setHeedThreats(true /* TRUE */);
          $.cam.followPlayer($.player1);
          $.flag_cam_at_target = 1;
        }
      }
    }
    else {
      if ($.flag_cam_dead == 0) {
        $.cam.markAsNoLongerNeeded();
        Text.PrintNow("C_DEAD", 5000, 1); //Cam's dead!
        $.retirement = Pickup.Create(1319 /* briefcase */, 3 /* PICKUP_ONCE */, $.world_x, $.world_y, $.world_z);
        $.mission_blip.remove();
        $.mission_blip = Blip.AddForPickup($.retirement);
        $.flag_cam_dead = 1;
        $.flag_cam_at_target = 0;
      }
    }
    if ($.flag_cam_dead == 1) {
      if ($.retirement.hasBeenCollected() && $.flag_cam_at_target < 2) {
        $.flag_cam_at_target = 1;
      }
    }
    if ($.flag_cam_at_target == 1) {
      if ($.phils_target == 6) {
        Audio.LoadMissionAudio($.audio_slot, "BNK4_38" as any);
        await audio_bank_loading();  // SCM GOSUB audio_bank_loading
        Text.PrintNow("BNK4_38", 10000, 1); //rhubarb rhubarb
        await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
        if (!(Char.IsDead($.phil))) {
          $.phil.setCrouch(false /* FALSE */, 0);
          $.phil.followPlayer($.player1);
        }
        $.mission_blip.remove();
        $.mission_blip = Blip.AddForCoord(-900.0, -341.0, 13.4);
        $.flag_cam_at_target = 2;
      }
    }
    if ($.flag_cam_at_target == 2) {
      if ($.player1.locateAnyMeans3D(-900.0, -341.0, 13.4, 1.4, 1.4, 3.0, true /* TRUE */)) {
        // SCM GOTO → outside_the_bank (not lowered; manual jump required)
        throw new Error("unresolved GOTO outside_the_bank"); // fallback: would break linear control flow
      }
    }

    //	IF flag_grill_collision > 1
    //		GET_OBJECT_COORDINATES gas_3 warp_x warp_y warp_z
    //		IF LOCATE_PLAYER_ANY_MEANS_3D player1 warp_x warp_y warp_z 10.0 10.0 10.0 TRUE
    //		ENDIF
    //	ENDIF

  }
}



// *********************************** MAKE BREAK FOR THE DOOR !!! *******************************************
// 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// ***********************************************************************************************************


async function outside_the_bank() {

  //ADD_SPHERE -900.0 -340.9 13.4 2.0 mission_blob
  //flag_bank_job = 1
  //flag_player_on_bank_mission = 1

  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);


  await exit_bank();  // SCM GOSUB exit_bank

  // ******************************************************* OUTSIDE *******************************************
  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  // ***********************************************************************************************************


  Path.SwitchPedRoadsOff(-956.0, -355.0, 5.0, -898.0, -328.0, 25.0); //bank interior
  Path.SwitchPedRoadsOff(-877.0, -368.0, 5.0, -832.0, -317.0, 25.0); //side walks outside bank


  $.mission_blip.remove();
  //REMOVE_SPHERE mission_blob



  World.ClearArea(-863.0, -340.9, 12.19, 30.0, true /* TRUE */);
  await delete_routine();  // SCM GOSUB delete_routine
  Camera.SetFixedPosition(-889.57, -341.42, 15.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-894.3, -346.0, 13.4, 2 /* JUMP_CUT */);


  $.scplayer.setCoordinates(-892.1, -349.47, 12.0);
  $.scplayer.setHeading(12.0);
  $.scplayer.setCrouch(true /* TRUE */, 999999);
  $.flag_player_in_bank = 0;


  if (!(Char.IsDead($.phil))) {
    $.phil.setObjNoObj();
    $.phil.setCoordinates(-892.8, -349.37, 12.7);
    $.phil.setHeading(317.0);
    $.phil.setCrouch(true /* TRUE */, 999999);
  }
  if (!(Char.IsDead($.cam))) {
    $.cam.setObjNoObj();
    $.cam.setCoordinates(-894.3, -349.5, 12.5);
    $.cam.setHeading(330.0);
    $.cam.setCrouch(true /* TRUE */, 999999);
  }
  else {
    $.cam.markAsNoLongerNeeded();
    $.flag_cam_dead = 1;
  }


  Streaming.RequestModel(enforcer);
  while (!(Streaming.HasModelLoaded(enforcer))) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.phil))) {
    Camera.PointAtChar($.phil, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }


  $.bank_cop_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, swat, -875.9, -334.0, 10.3);
  $.bank_cop_1.clearThreatSearch();
  $.bank_cop_1.setHeading(137.0);
  $.bank_cop_1.giveWeapon(WEAPONTYPE_MP5, 9999);
  $.bank_cop_1.setCrouch(true /* TRUE */, 9999);
  $.bank_cop_1.setObjKillPlayerAnyMeans($.player1);
  $.bank_cop_1.setStayInSamePlace(true /* TRUE */);
  //SET_CHAR_THREAT_SEARCH bank_cop_1 THREAT_PLAYER1
  //SET_CHAR_HEED_THREATS bank_cop_1 TRUE



  $.bank_cop_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, swat, -876.39, -347.45, 10.3);
  $.bank_cop_2.clearThreatSearch();
  $.bank_cop_2.setHeading(130.0);
  $.bank_cop_2.giveWeapon(WEAPONTYPE_MP5, 9999);
  $.bank_cop_2.setCrouch(true /* TRUE */, 9999);
  $.bank_cop_2.setObjKillPlayerAnyMeans($.player1);
  $.bank_cop_2.setStayInSamePlace(true /* TRUE */);
  //SET_CHAR_THREAT_SEARCH bank_cop_2 THREAT_PLAYER1
  //SET_CHAR_HEED_THREATS bank_cop_2 TRUE


  $.bank_cop_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, swat, -864.6, -341.0, 9.9);
  $.bank_cop_3.clearThreatSearch();
  $.bank_cop_3.setHeading(95.0);
  $.bank_cop_3.giveWeapon(WEAPONTYPE_MP5, 9999);
  $.bank_cop_3.setObjKillPlayerAnyMeans($.player1);
  $.bank_cop_3.setStayInSamePlace(true /* TRUE */);
  //SET_CHAR_THREAT_SEARCH bank_cop_3 THREAT_PLAYER1
  //SET_CHAR_HEED_THREATS bank_cop_3 TRUE


  $.bank_cop_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, swat, -868.4, -339.98, 9.9);
  $.bank_cop_4.clearThreatSearch();
  $.bank_cop_4.setHeading(90.0);
  $.bank_cop_4.giveWeapon(WEAPONTYPE_MP5, 9999);
  $.bank_cop_4.setCrouch(true /* TRUE */, 9999);
  $.bank_cop_4.setObjKillPlayerAnyMeans($.player1);
  $.bank_cop_4.setStayInSamePlace(true /* TRUE */);
  //SET_CHAR_THREAT_SEARCH bank_cop_4 THREAT_PLAYER1
  //SET_CHAR_HEED_THREATS bank_cop_4 TRUE


  $.bank_cop_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, swat, -856.3, -294.7, 10.1);
  $.bank_cop_5.clearThreatSearch();
  $.bank_cop_5.setHeading(167.0);
  $.bank_cop_5.giveWeapon(WEAPONTYPE_MP5, 9999);
  $.bank_cop_5.setCrouch(true /* TRUE */, 9999);
  //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS bank_cop_5 player1
  //SET_CHAR_STAY_IN_SAME_PLACE bank_cop_5 TRUE

  $.bank_cop_5.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.bank_cop_5.setHeedThreats(true /* TRUE */);


  $.bank_cop_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, swat, -852.1, -304.3, 10.1);
  $.bank_cop_6.clearThreatSearch();
  $.bank_cop_6.setHeading(140.0);
  $.bank_cop_6.giveWeapon(WEAPONTYPE_MP5, 9999);
  $.bank_cop_6.setCrouch(true /* TRUE */, 9999);
  //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS bank_cop_6 player1
  //SET_CHAR_STAY_IN_SAME_PLACE bank_cop_6 TRUE

  $.bank_cop_6.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.bank_cop_6.setHeedThreats(true /* TRUE */);


  $.cop_car1 = Car.Create(enforcer, -870.0, -344.5, 10.2);
  $.cop_car1.setHeading(124.0);
  $.cop_car1.lockDoors(1 /* CARLOCK_UNLOCKED */);


  $.cop_car2 = Car.Create(enforcer, -869.43, -336.3, 10.2);
  $.cop_car2.setHeading(43.0);
  $.cop_car2.lockDoors(1 /* CARLOCK_UNLOCKED */);


  $.cop_car3 = Car.Create(enforcer, -852.73, -298.3, 10.2);
  $.cop_car3.setHeading(30.0);
  $.cop_car3.lockDoors(1 /* CARLOCK_UNLOCKED */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }

  //flag_bank_job = 0


  if ($.flag_cam_dead == 1) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_36" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_36", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Camera.PointAtChar($.scplayer, 15 /* FIXED */, 2 /* JUMP_CUT */);
    Audio.LoadMissionAudio($.audio_slot, "BNK4_37" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_37", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  }



  Audio.LoadMissionAudio($.audio_slot, "BNK_39" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK_39", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Camera.SetFixedPosition(-888.25, -341.4, 13.9, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-863.0, -340.9, 12.19, 2 /* JUMP_CUT */);

  //IF flag_cam_dead = 1

  Audio.LoadMissionAudio($.audio_slot, "BK4_40a" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BK4_40a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  /*
  ELSE
  LOAD_MISSION_AUDIO audio_slot BK4_40b
  GOSUB audio_bank_loading
  PRINT_NOW ( BK4_40a ) 10000 1//rhubarb rhubarb
  GOSUB has_audio_finished_bank
  ENDIF
  */


  if (!(Car.IsDead($.getaway_car))) {
    $.getaway_car.setCoordinates(-884.1, -311.3, 10.8);
    $.getaway_car.setHeading(180.0);
    $.getaway_car.setHealth(1000);
    $.getaway_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  $.hilary.delete();



  Streaming.UnloadSpecialCharacter(2);


  Streaming.LoadSpecialCharacter(2, "ighlry2");
  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.getaway_car))) {
    $.hilary = Char.CreateInsideCar($.getaway_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL02);
    $.hilary.clearThreatSearch();
    $.hilary.setAsPlayerFriend($.player1, true /* TRUE */);
    $.hilary.setSuffersCriticalHits(false /* FALSE */);
    $.hilary.setPersonality(30 /* PEDSTAT_PSYCHO */);
    $.hilary.giveWeapon(WEAPONTYPE_MP5, 9999);
    $.getaway_car.freezePosition(false /* FALSE */);
    $.getaway_car.setTempAction(8 /* TEMPACT_GOFORWARD */, 3000);
    $.getaway_car.setForwardSpeed(30.0);
  }


  Camera.SetFixedPosition(-873.12, -348.1, 13.96, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-879.4, -341.7, 10.75, 2 /* JUMP_CUT */);


  while (!(Car.IsDead($.getaway_car))) {
    if ($.getaway_car.locate3D(-884.8, -334.2, 10.0, 3.0, 3.0, 3.0, false /* FALSE */)) {
      // SCM GOTO → skid_stop (not lowered; manual jump required)
      throw new Error("unresolved GOTO skid_stop"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
}



async function skid_stop() {
  $.getaway_car.setTempAction(0 /* TEMPACT_NONE */, 0);
  $.getaway_car.setTempAction(3 /* TEMPACT_HANDBRAKETURNLEFT */, 3000);


  TIMERA = 0;
  while (TIMERA < 1000) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.hilary)) && !(Car.IsDead($.getaway_car))) {
    $.hilary.setObjLeaveCar($.getaway_car);
  }


  while (!(Char.IsDead($.hilary))) {
    if ($.hilary.isOnFoot()) {
      $.hilary.setHeading(280.0);
      $.hilary.setThreatSearch(64 /* THREAT_COP */);
      $.hilary.setHeedThreats(true /* TRUE */);
      //IF NOT IS_CHAR_DEAD bank_cop_1
      //SET_CHAR_OBJ_AIM_GUN_AT_CHAR hilary bank_cop_1
      //ENDIF
      // SCM GOTO → covering_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO covering_fire"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
}



async function covering_fire() {


  if (!(Car.IsDead($.getaway_car))) {
    const _res85 = $.getaway_car.getOffsetInWorldCoords(-2.0, 3.5, -0.2);
$.warp_x = _res85.x;
$.warp_y = _res85.y;
$.warp_z = _res85.z;
  }


  Camera.SetFixedPosition($.warp_x, $.warp_y, $.warp_z, 0.0, 0.0, 0.0);


  if (!(Char.IsDead($.hilary))) {
    Camera.PointAtChar($.hilary, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }


  Audio.LoadMissionAudio($.audio_slot, "BNK4_42" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_42", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if (!(Char.IsDead($.bank_cop_1)) && !(Char.IsDead($.hilary))) {
    $.hilary.setHealth(100);
    $.bank_cop_1.setObjKillCharAnyMeans($.hilary);
    $.hilary.setObjKillCharAnyMeans($.bank_cop_1);
  }


  TIMERA = 0;
  while (TIMERA < 2000) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.hilary))) {
    $.hilary.explodeHead();
  }


  TIMERA = 0;
  while (TIMERA < 1000) {
    await asyncWait(0);
  }



  $.scplayer.setCrouch(false /* FALSE */, 0);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();

  // ************************************ THE GETAWAY !!!! *********************************************
  // ***************************************************************************************************
  // ***************************************************************************************************


  Audio.SetRadioChannel(6, -1);


  if (!(Char.IsDead($.phil))) {
    $.phil.setCrouch(false /* FALSE */, 0);
    $.phil.followPlayer($.player1);
    $.phil.setThreatSearch(64 /* THREAT_COP */);
    $.phil.setHeedThreats(true /* TRUE */);
    $.phil.setRunning(true /* TRUE */);
  }


  if (!(Char.IsDead($.hilary))) {
    $.hilary.setObjNoObj();
    $.hilary.setThreatSearch(64 /* THREAT_COP */);
    $.hilary.setHeedThreats(true /* TRUE */);
    $.hilary.followPlayer($.player1);
  }


  if (!(Char.IsDead($.cam))) {
    $.cam.setObjNoObj();
    $.cam.setThreatSearch(64 /* THREAT_COP */);
    $.cam.setHeedThreats(true /* TRUE */);
    $.cam.followPlayer($.player1);
    $.cam.setRunning(true /* TRUE */);
  }


  $.flag_blip_on_phil = 0;


  if (!(Char.IsDead($.bank_cop_1))) {
    $.bank_cop_1.setStayInSamePlace(false /* FALSE */);
    $.bank_cop_1.setObjKillPlayerAnyMeans($.player1);
  }
  if (!(Char.IsDead($.bank_cop_2))) {
    $.bank_cop_2.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.bank_cop_3))) {
    $.bank_cop_3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.bank_cop_4))) {
    $.bank_cop_4.setStayInSamePlace(false /* FALSE */);
  }


  $.getaway_car.markAsNoLongerNeeded();
}


//DELETE_OBJECT cams_door
//CREATE_OBJECT_NO_OFFSET dk_camjonesdoor -837.134 -901.672 12.03 cams_door
//CREATE_OBJECT_NO_OFFSET dk_camjonesdoor -837.134 -901.672 15.03 cams_door
//DONT_REMOVE_OBJECT cams_door


async function get_a_car_you_prat() {


  while ($.flag_blip_on_phil == 1) {
    await asyncWait(0);
    await phil_death_check_2();  // SCM GOSUB phil_death_check_2
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    //	IF LOCATE_PLAYER_ANY_MEANS_3D player1 -854.5 -337.8 11.5 20.0 20.0 20.0 FALSE
    //		ALTER_WANTED_LEVEL_NO_DROP player1 3
    //	ENDIF

  }
}



async function lose_wanted_level() {


  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-871.57, -118.5, 10.0);


  while ($.player1.isWantedLevelGreater(0)) {
    await asyncWait(0);
    await phil_death_check_2();  // SCM GOSUB phil_death_check_2
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-879.57, -114.5, 10.0, 3.0, 3.0, 2.0, true /* TRUE */)) {
    }
    if ($.flag_blip_on_phil == 1) {
      // SCM GOTO → get_a_car_you_prat (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_a_car_you_prat"); // fallback: would break linear control flow
    }
    //	IF LOCATE_PLAYER_ANY_MEANS_3D player1 -854.5 -337.8 11.5 20.0 20.0 20.0 FALSE
    //		ALTER_WANTED_LEVEL_NO_DROP player1 3
    //	ENDIF
    if (!($.player1.locateAnyMeans3D(-844.95, -901.0, 10.0, 15.0, 15.0, 15.0, false /* FALSE */))) {
      $.cams_door.slide(-837.134, -901.672, 12.03, 0.0, 0.0, 0.025, false /* FALSE */);
    }
  }
}



async function get_to_cams() {


  $.mission_blip.remove();
  $.mission_blip = Blip.AddForCoord(-832.2, -901.0, 10.0);

  //SET_OBJECT_COORDINATES cams_door -837.134 -901.672 15.03


  while (!($.player1.isWantedLevelGreater(0))) {
    await asyncWait(0);
    await phil_death_check_2();  // SCM GOSUB phil_death_check_2
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-832.2, -901.0, 10.0, 3.0, 3.0, 2.0, true /* TRUE */) && $.phil.locateAnyMeans3D(-832.2, -901.0, 10.0, 3.0, 3.0, 2.0, false /* FALSE */)) {
      // SCM GOTO → home_and_dry (not lowered; manual jump required)
      throw new Error("unresolved GOTO home_and_dry"); // fallback: would break linear control flow
    }
    if ($.flag_blip_on_phil == 1) {
      // SCM GOTO → get_a_car_you_prat (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_a_car_you_prat"); // fallback: would break linear control flow
    }
    //	IF LOCATE_PLAYER_ANY_MEANS_3D player1 -854.5 -337.8 11.5 20.0 20.0 20.0 FALSE
    //		ALTER_WANTED_LEVEL_NO_DROP player1 3
    //	ENDIF
    if (!($.player1.locateAnyMeans3D(-844.95, -901.0, 10.0, 15.0, 15.0, 15.0, false /* FALSE */))) {
      $.cams_door.slide(-837.134, -901.672, 12.03, 0.0, 0.0, 0.025, false /* FALSE */);
    }
  }


  // SCM GOTO → lose_wanted_level (not lowered; manual jump required)
  throw new Error("unresolved GOTO lose_wanted_level"); // fallback: would break linear control flow
}



async function home_and_dry() {


  while ($.player1.isPlaying()) {
    await asyncWait(0);
    $.cams_door.slide(-837.134, -901.672, 15.03, 0.0, 0.0, 0.025, false /* FALSE */);
    await phil_death_check_2();  // SCM GOSUB phil_death_check_2
    if ($.flag_bank_mission_failed == 1) {
      // SCM GOTO → mission_bankjob4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_bankjob4_failed"); // fallback: would break linear control flow
    }
    if ($.flag_blip_on_phil == 1) {
      // SCM GOTO → get_a_car_you_prat (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_a_car_you_prat"); // fallback: would break linear control flow
    }
    if ($.player1.isWantedLevelGreater(0)) {
      // SCM GOTO → lose_wanted_level (not lowered; manual jump required)
      throw new Error("unresolved GOTO lose_wanted_level"); // fallback: would break linear control flow
    }
    if ($.player1.locateAnyMeans3D(-844.95, -901.0, 10.0, 3.5, 3.5, 3.5, true /* TRUE */)) {
      // SCM GOTO → home_free (not lowered; manual jump required)
      throw new Error("unresolved GOTO home_free"); // fallback: would break linear control flow
    }
    if (!($.player1.locateAnyMeans3D(-844.95, -901.0, 10.0, 15.0, 15.0, 15.0, false /* FALSE */))) {
      // SCM GOTO → get_to_cams (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_to_cams"); // fallback: would break linear control flow
    }
  }
}



async function home_free() {


  $.mission_blip.remove();



  // SCM GOTO → mission_bankjob4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_bankjob4_passed"); // fallback: would break linear control flow
}










// +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
//      +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
// +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
//      +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
// +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
//      +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
// +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
//      +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
// +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
//      +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
// +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
//      +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
// +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++
//      +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++    +++++++





async function mission_bankjob4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"


  Camera.SetFadingColor(0, 0, 1);
  Path.SwitchPedRoadsOff(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0);


  while ($.player1.isInArea3D(-852.8, -915.0, 10.0, -837.5, -897.2, 13.0, false /* FALSE */)) {
    await asyncWait(0);
  }


  if ($.player1.isPlaying() && $.flag_player_in_bank == 1) {
    //flag_bank_job = 1
    //flag_player_on_bank_mission = 0
    await exit_bank();  // SCM GOSUB exit_bank
    Camera.DoFade(1500, 1 /* FADE_IN */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
  }
}



// mission bankjob4 passed


async function mission_bankjob4_passed() {


  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);


  if ($.player1.isInAnyCar() && !(Car.IsDead($.getaway_car))) {
    $.scplayer.setObjLeaveCar($.getaway_car);
  }


  Audio.SetRadioChannel(3, -1);
  Audio.SetMusicDoesFade(false /* FALSE */);


  Camera.SetFadingColor(0, 0, 1);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    $.cams_door.slide(-837.134, -901.672, 12.03, 0.0, 0.0, 0.025, false /* FALSE */);
  }


  Camera.SetFixedPosition(-827.5, -894.2, 22.5, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-833.15, -899.4, 17.6, 2 /* JUMP_CUT */);


  Camera.DoFade(500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  $.phil.delete();
  $.cam.delete();


  Text.PrintWithNumberBig("M_PASS", 50000, 5000, 1); //"Mission Passed"
  $.player1.addScore(50000);
  Audio.PlayMissionPassedTune(1);


  Audio.LoadMissionAudio($.audio_slot, "BNK4_44" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_44", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  if ($.flag_cam_dead == 1) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_45" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_45", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_46" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_46", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_47" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_47", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
  }


  Audio.LoadMissionAudio($.audio_slot, "BNK4_48" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_48", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BNK4_49" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK4_49", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BNK450A" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK450a", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Audio.LoadMissionAudio($.audio_slot, "BNK450B" as any);
  await audio_bank_loading();  // SCM GOSUB audio_bank_loading
  Text.PrintNow("BNK450b", 10000, 1); //rhubarb rhubarb
  await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank


  Camera.SetFadingColor(0, 0, 1);


  Camera.DoFade(500, 0 /* FADE_OUT */);


  Streaming.RequestModel(od_clubout_dy);
  Streaming.RequestModel(od_clubout_nt);
  Streaming.RequestModel(od_clubneon);
  Streaming.RequestModel(od_clubdoors);
  Streaming.RequestModel(od_clbdr_close);
  Streaming.RequestModel(od_clbdr_open);
  Streaming.RequestModel(veg_palmkbb11);
  Streaming.RequestModel(odNroad01_nt);
  Streaming.RequestModel(odNroad01_dy);
  Streaming.RequestModel(od_clubback);
  Streaming.RequestModel(miamiodnroadxa);
  Streaming.RequestModel(lodd_build2);
  Streaming.RequestModel(spad_buildnew);
  Streaming.RequestModel(veg_palmbig14);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  while (!(Streaming.HasModelLoaded(od_clubout_dy))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(od_clubout_nt))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(od_clubneon))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(od_clubdoors))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(od_clbdr_close))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(od_clbdr_open))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(veg_palmkbb11))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(odNroad01_nt))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(odNroad01_dy))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(od_clubback))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(miamiodnroadxa))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(lodd_build2))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(spad_buildnew))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(veg_palmbig14))) {
    await asyncWait(0);
  }

  //SET_PLAYER_COORDINATES player1 528.5 -95.5 9.6
  //LOAD_SCENE 504.0 -95.25 11.4

  Camera.SetFixedPosition(513.5, -44.5, 22.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(502.0, -60.5, 14.0, 2 /* JUMP_CUT */);


  $.bankjob_contact_blip.remove();
  $.bankjob_contact_blip = Blip.AddShortRangeSpriteForCoord($.bankbuyx, $.bankbuyy, $.bankbuyz, $.the_bankjob_blip);
  $.malibu_cash_pickup = Pickup.CreateProtection($.bankbuyX, $.bankbuyY, $.bankbuyZ, $.malibu_revenue, $.malibu_revenue);


  Clock.SetTimeOfDay(21, 30);


  Camera.DoFade(1000, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  TIMERA = 0;
  while (TIMERA < 2000) {
    await asyncWait(0);
  }
  Text.PrintBig("ASSET_A", 10000, 6); //BANK HEIST ASSET COMPLETED!
  Text.PrintWithNumberNow("ASSET_B", $.malibu_revenue, 10000, 1);


  Camera.SetFixedPosition(493.6, -87.0, 10.8, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(492.6, -77.4, 13.2, 2 /* JUMP_CUT */);


  TIMERA = 0;
  while (TIMERA < 1500) {
    await asyncWait(0);
  }


  Camera.PointAtPoint($.bankbuyX, $.bankbuyY, $.bankbuyZ, 1 /* INTERPOLATION */);


  TIMERA = 0;
  while (TIMERA < 1000) {
    await asyncWait(0);
  }

  //PLAY_MISSION_PASSED_TUNE 1


  TIMERA = 0;
  while (TIMERA < 5000) {
    await asyncWait(0);
  }


  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Streaming.LoadScene(-833.6, -908.5, 11.11);


  World.ClearArea(-833.6, -908.5, 11.11, 2.0, true /* TRUE */);


  if ($.player1.isInAnyCar()) {
    $.player1.warpFromCarToCoord(-833.6, -908.5, 11.11);
  }
  else {
    $.player1.setCoordinates(-833.6, -908.5, 11.11);
  }


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player2");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }
  }


  $.player1.setHeading(345.0);


  $.cams_door.setCoordinates(-837.134, -901.672, 12.03);


  Camera.RestoreJumpcut();


  Text.ClearPrints();


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Audio.SetMusicDoesFade(true /* TRUE */);
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  $.player1.setMood(PLAYER_MOOD_WISECRACKING, 60000);
  Hud.SwitchWidescreen(false /* OFF */);


  Stat.RegisterMissionPassed("BANK_4");
  $.malibu_asset_acquired = 1;
  ++$.counter_60_percent;
  $.flag_bankjob_mission4_passed = 1;
  $.player1.clearWantedLevel();
  Stat.PlayerMadeProgress(1);


  $.clothes_pickup13 = Pickup.CreateClothes(465.3, -57.4, 15.7, 7);
  $.jason_knife = Pickup.Create(knifecur, 2 /* PICKUP_ON_STREET */, 468.5, -54.2, 15.7);
  $.clothes13_created = 1;
  // START_NEW_SCRIPT cloth9
  // START_NEW_SCRIPT ambient_bank_loop
}



// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ************************************************** GOSUBS GOSUBS GOSUBS GOSUBS ****************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************
// ***********************************************************************************************************************************



async function exit_bank() {
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  World.ClearExtraColors(false /* FALSE */);
  World.SetCarDensityMultiplier(1.0);
  World.SwitchRubbish(true /* ON */);
  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  Path.SwitchPedRoadsOff(-956.0, -355.0, 5.0, -898.0, -328.0, 25.0);
  World.ClearArea(-893.0, -341.0, 13.5, 1.0, false /* FALSE */);
  Streaming.LoadScene(-893.0, -341.0, 13.5);
  $.player1.setCoordinates(-893.0, -341.0, 12.0);
  $.flag_player_in_bank = 0;
  $.player1.setHeading(270.0);
  Camera.SetInFrontOfPlayer();
}




async function hilary_car_check() {
  if (Char.IsDead($.hilary)) {
    Text.PrintNow("H_DEAD", 5000, 1); //Hilary's dead!
    $.flag_bank_mission_failed = 1;
    return;
  }
  if (Car.IsDead($.getaway_car)) {
    Text.PrintNow("TRASHED", 5000, 1);
    $.flag_bank_mission_failed = 1;
  }
}




async function car_check() {
  if ($.flag_hilary_gone == 0) {
    if (!(Car.IsDead($.getaway_car))) {
      if (!($.player1.isInCar($.getaway_car))) {
        $.flag_player_in_car = 0;
        const _res86 = $.player1.getCoordinates();
$.player_x = _res86.x;
$.player_y = _res86.y;
$.player_z = _res86.z;
        if ($.flag_hilary_gone == 0 && $.flag_blip_on_getaway_car == 0) {
          $.blip_getaway_car = Blip.AddForCar($.getaway_car);
          $.flag_blip_on_getaway_car = 1;
        }
        if ($.locate_dome_flag == 1) {
          $.mission_blip.remove();
          $.locate_dome_flag = 0;
        }
      }
      else {
        $.flag_player_in_car = 1;
        if ($.flag_blip_on_getaway_car == 1) {
          $.blip_getaway_car.remove();
          $.flag_blip_on_getaway_car = 0;
        }
      }
      if ($.getaway_car.isUpsidedown() && $.getaway_car.isStopped()) {
        $.flag_bank_mission_failed = 1;
      }
    }
    else {
      Text.PrintNow("TRASHED", 5000, 1);
      $.flag_bank_mission_failed = 1;
    }
  }
}





async function phil_check() {
  if (!(Car.IsDead($.getaway_car))) {
    if (Char.IsDead($.phil)) {
      Text.PrintNow("P_DEAD", 5000, 1); //"~r~Phil died!"
      $.flag_bank_mission_failed = 1;
    }
    else {
      if ($.flag_player_in_car == 1) {
        if (!($.phil.isInCar($.getaway_car))) {
          $.phil.setObjEnterCarAsPassenger($.getaway_car);
          if ($.phil.locateAnyMeansCar3D($.getaway_car, 2.5, 2.5, 2.5, false /* FALSE */) && !($.player1.isWantedLevelGreater(0))) {
            $.phil.setRunning(false /* FALSE */);
          }
          else {
            $.phil.setRunning(true /* TRUE */);
          }
        }
      }
      else {
        if ($.player1.locateAnyMeansChar2D($.phil, 4.0, 4.0, false /* FALSE */)) {
          if ($.flag_player_leader_phil == 0) {
            $.phil.setObjNoObj();
            $.phil.followPlayer($.player1);
            $.flag_player_leader_phil = 1;
          }
        }
        else {
          $.phil.leaveGroup();
          $.phil.setObjRunToCoord($.player_x, $.player_y); //player_z
          $.flag_player_leader_phil = 0;
        }
      }
      if (!($.player1.locateAnyMeansChar2D($.phil, 20.0, 20.0, false /* FALSE */))) {
        if ($.flag_blip_on_phil == 0) {
          Text.PrintNow("P_HIND", 5000, 1); //"You have left Phil behind!"
          $.mission_blip.remove();
          $.phil_blip = Blip.AddForChar($.phil);
          $.flag_blip_on_phil = 1;
        }
      }
      else {
        if ($.flag_blip_on_phil == 1) {
          //SET_PLAYER_AS_LEADER phil player1
          $.phil_blip.remove();
          $.flag_blip_on_phil = 0;
        }
      }
    }
  }
}





async function cam_check() {
  if (!(Car.IsDead($.getaway_car))) {
    if (Char.IsDead($.cam)) {
      Text.PrintNow("C_DEAD", 5000, 1); //"~r~Phil died!"
      $.flag_bank_mission_failed = 1;
    }
    else {
      if ($.flag_player_in_car == 1) {
        if (!($.cam.isInCar($.getaway_car))) {
          $.cam.setObjEnterCarAsPassenger($.getaway_car);
          if ($.cam.locateAnyMeansCar3D($.getaway_car, 2.5, 2.5, 2.5, false /* FALSE */) && !($.player1.isWantedLevelGreater(0))) {
            $.cam.setRunning(false /* FALSE */);
          }
          else {
            $.cam.setRunning(true /* TRUE */);
          }
        }
      }
      else {
        if ($.player1.locateAnyMeansChar2D($.cam, 4.0, 4.0, false /* FALSE */)) {
          if ($.flag_player_leader_cam == 0) {
            $.cam.setObjNoObj();
            $.cam.followPlayer($.player1);
            $.flag_player_leader_cam = 1;
          }
        }
        else {
          $.cam.leaveGroup();
          $.cam.setObjRunToCoord($.player_x, $.player_y); //player_z
          $.flag_player_leader_cam = 0;
        }
      }
      if (!($.player1.locateAnyMeansChar2D($.cam, 20.0, 20.0, false /* FALSE */))) {
        if ($.flag_blip_on_cam == 0) {
          Text.PrintNow("C_HIND", 5000, 1); //"You have left Phil behind!"
          $.mission_blip.remove();
          $.cam_blip = Blip.AddForChar($.cam);
          $.flag_blip_on_cam = 1;
        }
      }
      else {
        if ($.flag_blip_on_cam == 1) {
          //SET_PLAYER_AS_LEADER cam player1
          $.cam_blip.remove();
          $.flag_blip_on_cam = 0;
        }
      }
    }
  }
}





async function hilary_check() {


  if ($.flag_hilary_gone == 0 && !(Car.IsDead($.getaway_car))) {
    if (Char.IsDead($.hilary)) {
      Text.PrintNow("H_DEAD", 5000, 1); //"~r~Phil died!"
      $.flag_bank_mission_failed = 1;
    }
    else {
      if ($.flag_player_in_car == 1) {
        if (!($.hilary.isInCar($.getaway_car))) {
          $.hilary.setObjEnterCarAsPassenger($.getaway_car);
          if ($.hilary.locateAnyMeansCar3D($.getaway_car, 2.5, 2.5, 2.5, false /* FALSE */) && !($.player1.isWantedLevelGreater(0))) {
            $.hilary.setRunning(false /* FALSE */);
          }
          else {
            $.hilary.setRunning(true /* TRUE */);
          }
        }
      }
      else {
        if ($.player1.locateAnyMeansChar2D($.hilary, 4.0, 4.0, false /* FALSE */)) {
          if ($.flag_player_leader_hilary == 0) {
            $.hilary.setObjNoObj();
            $.hilary.followPlayer($.player1);
            $.flag_player_leader_hilary = 1;
          }
        }
        else {
          $.hilary.leaveGroup();
          $.hilary.setObjRunToCoord($.player_x, $.player_y); //player_z
          $.flag_player_leader_hilary = 0;
        }
      }
      if (!($.player1.locateAnyMeansChar2D($.hilary, 20.0, 20.0, false /* FALSE */))) {
        if ($.flag_blip_on_hilary == 0) {
          Text.PrintNow("H_HIND", 5000, 1); //"You have left Phil behind!"
          $.mission_blip.remove();
          $.hilary_blip = Blip.AddForChar($.hilary);
          $.flag_blip_on_hilary = 1;
        }
      }
      else {
        if ($.flag_blip_on_hilary == 1) {
          //SET_PLAYER_AS_LEADER hilary player1
          $.hilary_blip.remove();
          $.flag_blip_on_hilary = 0;
        }
      }
    }
  }
}





async function plinkety_plonk() {
  if ($.flag_blip_on_phil == 1 || $.flag_blip_on_hilary == 1 || $.flag_blip_on_cam == 1) {
    $.locate_dome_flag = 0;
  }
  else {
    if ($.flag_player_in_car == 1) {
      if ($.locate_dome_flag == 0) {
        $.mission_blip = Blip.AddForCoord(-896.5, -341.0, 13.4);
        $.locate_dome_flag = 1;
      }
    }
  }
}


// OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----
// ----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO
// OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----
// ----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO
// OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----
// ----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO
// OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----
// ----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO
// OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----
// ----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO----OOOO

// mission cleanup


async function mission_cleanup_bankjob4() {
  $.timer_mobile_start = Clock.GetGameTimer();


  await asyncWait(5);


  $.mission_blip.remove();
  $.phil_blip.remove();
  $.cam_blip.remove();
  $.hilary_blip.remove();
  $.blip_getaway_car.remove();
  //REMOVE_SPHERE mission_blob


  Path.RemoveRoute(1);
  Path.RemoveRoute(2);
  $.bank_alarm.remove();



  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.setObjNoObj();
  }
  if ($.player1.isPlaying()) {
    $.player1.setControl(true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  }
  Camera.RestoreJumpcut();


  $.cams_door.setCoordinates(-837.134, -901.672, 12.03);
  Path.SwitchPedRoadsOn(-877.0, -368.0, 5.0, -832.0, -317.0, 25.0); //side walks outside bank


  Audio.SetMusicDoesFade(true /* TRUE */);
  World.ClearExtraColors(false /* FALSE */);
  /*
  REQUEST_MODEL m4
  REQUEST_MODEL mp5lng
  REQUEST_MODEL TAXI
  REQUEST_MODEL python
  */

  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(GDb);
  Streaming.MarkModelAsNoLongerNeeded(swat);
  Streaming.MarkModelAsNoLongerNeeded(gasgrenade);
  Streaming.MarkModelAsNoLongerNeeded(m4);
  Streaming.MarkModelAsNoLongerNeeded(mp5lng);
  Streaming.MarkModelAsNoLongerNeeded(TAXI);
  Streaming.MarkModelAsNoLongerNeeded(python);
  Streaming.MarkModelAsNoLongerNeeded(enforcer);
  Streaming.MarkModelAsNoLongerNeeded(WFYBU);
  Streaming.MarkModelAsNoLongerNeeded(HFYBU);
  Streaming.MarkModelAsNoLongerNeeded(WMORI);


  Streaming.MarkModelAsNoLongerNeeded(od_clubout_dy);
  Streaming.MarkModelAsNoLongerNeeded(od_clubout_nt);
  Streaming.MarkModelAsNoLongerNeeded(od_clubneon);
  Streaming.MarkModelAsNoLongerNeeded(od_clubdoors);
  Streaming.MarkModelAsNoLongerNeeded(od_clbdr_close);
  Streaming.MarkModelAsNoLongerNeeded(od_clbdr_open);
  Streaming.MarkModelAsNoLongerNeeded(veg_palmkbb11);
  Streaming.MarkModelAsNoLongerNeeded(odNroad01_nt);
  Streaming.MarkModelAsNoLongerNeeded(odNroad01_dy);
  Streaming.MarkModelAsNoLongerNeeded(od_clubback);
  Streaming.MarkModelAsNoLongerNeeded(miamiodnroadxa);
  Streaming.MarkModelAsNoLongerNeeded(lodd_build2);
  Streaming.MarkModelAsNoLongerNeeded(spad_buildnew);
  Streaming.MarkModelAsNoLongerNeeded(veg_palmbig14);



  $.phil.removeElegantly();
  $.cam.removeElegantly();
  $.hilary.removeElegantly();
  $.bank_manager.removeElegantly();


  $.retirement.remove();


  $.bank_cop_1.markAsNoLongerNeeded();
  $.bank_cop_2.markAsNoLongerNeeded();
  $.bank_cop_3.markAsNoLongerNeeded();
  $.bank_cop_4.markAsNoLongerNeeded();
  $.bank_cop_5.markAsNoLongerNeeded();
  $.bank_cop_6.markAsNoLongerNeeded();
  $.cop_car1.markAsNoLongerNeeded();
  $.cop_car2.markAsNoLongerNeeded();
  $.cop_car3.markAsNoLongerNeeded();
  $.getaway_car.markAsNoLongerNeeded();



  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  //SET_NEAR_CLIP 1.0

  //Bank windows

  await delete_routine();  // SCM GOSUB delete_routine
  //DELETE_OBJECT bank_windows

  $.bank_windows = ScriptObject.CreateNoOffset(unrocketed_win1, -899.851, -341.061, 14.318);
  $.bank_windows.dontRemove();
  //Bank Grills

  $.grill_1 = ScriptObject.CreateNoOffset(Bnk_grill01, -899.214, -333.656, 21.0);
  $.grill_1.setDynamic(false /* FALSE */);
  $.grill_1.dontRemove();
  $.grill_1.setAreaVisible(VIS_BANK);


  $.grill_2 = ScriptObject.CreateNoOffset(Bnk_grill01, -899.214, -348.466, 21.03);
  $.grill_2.setDynamic(false /* FALSE */);
  $.grill_2.dontRemove();
  $.grill_2.setAreaVisible(VIS_BANK);


  $.grill_3 = ScriptObject.CreateNoOffset(Bnk_grill01, -907.307, -336.618, 23.7);
  $.grill_3.setDynamic(false /* FALSE */);
  $.grill_3.dontRemove();
  $.grill_3.setAreaVisible(VIS_BANK);


  $.grill_4 = ScriptObject.CreateNoOffset(Bnk_grill01, -907.307, -345.504, 23.7);
  $.grill_4.setDynamic(false /* FALSE */);
  $.grill_4.dontRemove();
  $.grill_4.setAreaVisible(VIS_BANK);


  $.grill_5 = ScriptObject.CreateNoOffset(Bnk_grill01, -915.401, -336.6184, 23.7);
  $.grill_5.setDynamic(false /* FALSE */);
  $.grill_5.dontRemove();
  $.grill_5.setAreaVisible(VIS_BANK);


  $.grill_6 = ScriptObject.CreateNoOffset(Bnk_grill01, -915.401, -345.50, 23.7);
  $.grill_6.setDynamic(false /* FALSE */);
  $.grill_6.dontRemove();
  $.grill_6.setAreaVisible(VIS_BANK);

  //flag_player_on_bank_mission = 0
  //flag_bank_job = 0

  ONMISSION = 0;



  Mission.Finish();
}



async function delete_routine() {
  $.bank_windows.delete();
  $.grill_1.delete();
  $.grill_2.delete();
  $.grill_3.delete();
  $.grill_4.delete();
  $.grill_5.delete();
  $.grill_6.delete();
  $.cashier1.delete();
  $.cashier2.delete();
  $.cashier3.delete();
  $.cashier4.delete();
  $.cashier5.delete();
  $.cashier6.delete();
  $.cashier7.delete();
  $.cashier8.delete();

  //MARK_CAR_AS_NO_LONGER_NEEDED getaway_car


  $.bank_cop_1.delete();
  $.bank_cop_2.delete();
  $.bank_cop_3.delete();
  $.bank_cop_4.delete();
  $.bank_cop_5.delete();
  $.bank_cop_6.delete();
  $.bank_cop_7.delete();
  $.bank_cop_8.delete();


  $.target_ped1.delete();
  $.target_ped2.delete();
  $.target_ped3.delete();
  $.target_ped4.delete();


  $.bank_health.remove();
  $.bank_armour.remove();


  $.lift_door_1.delete();
  $.lift_door_2.delete();
}



async function bank_job_timer() {
  $.timer_intro_now = Clock.GetGameTimer();
  $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
}





async function audio_bank_loading() {
  while (!(Audio.HasMissionAudioLoaded($.audio_slot))) {
    await asyncWait(0);
    if ($.flag_area_check_1 == 1) {
      if ($.player1.locateAnyMeans3D(-833.0, -348.0, 10.0, 4.0, 4.0, 4.0, true /* TRUE */)) {
      }
      //GOSUB car_check
      //GOSUB phil_check
      //GOSUB cam_check
      //GOSUB hilary_check

    }
  }
  Audio.PlayMissionAudio($.audio_slot);
}






async function has_audio_finished_bank() {
  while (!(Audio.HasMissionAudioFinished($.audio_slot))) {
    await asyncWait(0);
    if ($.flag_area_check_1 == 1) {
      if ($.player1.locateAnyMeans3D(-833.0, -348.0, 10.0, 4.0, 4.0, 4.0, true /* TRUE */)) {
      }
      //GOSUB car_check
      //GOSUB phil_check
      //GOSUB cam_check
      //GOSUB hilary_check

    }
  }
  Text.ClearPrints();
}






async function wait_state_loop() {


  if ($.flag_change_waitstate == 0) {
    if (!(Char.IsDead($.cashier1))) {
      $.cashier1.setWaitState(0, 0);
      $.cashier1.setWaitState($.flag_waitstate_1, 999999);
    }
    if (!(Char.IsDead($.cashier2))) {
      $.cashier2.setWaitState(0, 0);
      $.cashier2.setWaitState($.flag_waitstate_2, 999999);
    }
    if (!(Char.IsDead($.cashier3))) {
      $.cashier3.setWaitState(0, 0);
      $.cashier3.setWaitState($.flag_waitstate_1, 999999);
    }
    if (!(Char.IsDead($.cashier4))) {
      $.cashier4.setWaitState(0, 0);
      $.cashier4.setWaitState($.flag_waitstate_2, 999999);
    }
    if (!(Char.IsDead($.cashier5))) {
      $.cashier5.setWaitState(0, 0);
      $.cashier5.setWaitState($.flag_waitstate_2, 999999);
    }
    if (!(Char.IsDead($.cashier6))) {
      $.cashier6.setWaitState(0, 0);
      $.cashier6.setWaitState($.flag_waitstate_1, 999999);
    }
    if (!(Char.IsDead($.cashier7))) {
      $.cashier7.setWaitState(0, 0);
      $.cashier7.setWaitState($.flag_waitstate_2, 999999);
    }
    if (!(Char.IsDead($.cashier8))) {
      $.cashier8.setWaitState(0, 0);
      $.cashier8.setWaitState($.flag_waitstate_1, 999999);
    }

    //IF flag_this_is_a_raid = 1
    if (!(Char.IsDead($.bank_cop_3))) {
      $.bank_cop_3.setWaitState(0, 0);
      $.bank_cop_3.setWaitState($.flag_waitstate_3, 999999);
    }
    if (!(Char.IsDead($.bank_cop_2))) {
      $.bank_cop_2.setWaitState(0, 0);
      $.bank_cop_2.setWaitState($.flag_waitstate_3, 999999);
    }
    if (!(Char.IsDead($.bank_cop_1))) {
      $.bank_cop_1.setWaitState(0, 0);
      $.bank_cop_1.setWaitState($.flag_waitstate_3, 999999);
    }
    //ENDIF

    if (!(Char.IsDead($.bank_manager))) {
      if ($.flag_cop_6 == 1) {
        //SET_CHAR_WAIT_STATE bank_manager 14 999999 //COWER!
        $.bank_manager.setCrouch(true /* TRUE */, 999999);
      }
      else {
        $.bank_manager.setCrouch(false /* FALSE */, 0);
      }
    }


    $.flag_change_waitstate = 1;


  }
}



async function hostage_checker() {
  if (Char.IsDead($.cashier1) && flag_hostage1 == 0) {
    ++hostage_casualties;
    flag_hostage1 = 1;
  }
  if (Char.IsDead($.cashier2) && flag_hostage2 == 0) {
    ++hostage_casualties;
    flag_hostage2 = 1;
  }
  if (Char.IsDead($.cashier3) && flag_hostage3 == 0) {
    ++hostage_casualties;
    flag_hostage3 = 1;
  }
  if (Char.IsDead($.cashier4) && flag_hostage4 == 0) {
    ++hostage_casualties;
    flag_hostage4 = 1;
  }
  if (Char.IsDead($.cashier5) && flag_hostage5 == 0) {
    ++hostage_casualties;
    flag_hostage5 = 1;
  }
  if (Char.IsDead($.cashier6) && flag_hostage6 == 0) {
    ++hostage_casualties;
    flag_hostage6 = 1;
  }
  if (Char.IsDead($.cashier7) && flag_hostage7 == 0) {
    ++hostage_casualties;
    flag_hostage7 = 1;
  }
  if (Char.IsDead($.cashier8) && flag_hostage8 == 0) {
    ++hostage_casualties;
    flag_hostage8 = 1;
  }


  if (Char.IsDead($.bank_cop_3) && flag_hostage9 == 0) {
    ++hostage_casualties;
    flag_hostage9 = 1;
  }
  if (Char.IsDead($.bank_cop_2) && flag_hostage10 == 0) {
    ++hostage_casualties;
    flag_hostage10 = 1;
  }
  if (Char.IsDead($.bank_cop_1) && flag_hostage11 == 0) {
    ++hostage_casualties;
    flag_hostage11 = 1;
  }
  if (hostage_casualties > 2 && $.flag_launch_hostage_attack == 0) {
    $.var_hostage = $.cashier1;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.cashier2;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.cashier3;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.cashier4;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.cashier5;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.cashier6;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.cashier7;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.cashier8;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.bank_cop_1;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.bank_cop_2;
    await hostage_attack();  // SCM GOSUB hostage_attack
    $.var_hostage = $.bank_cop_3;
    await hostage_attack();  // SCM GOSUB hostage_attack
    if (!(Char.IsDead($.phil))) {
      $.phil.setThreatSearch(THREAT_GANG_SECURITY);
      $.phil.setThreatSearch(64 /* THREAT_COP */);
      $.phil.setHeedThreats(true /* TRUE */);
      $.phil.followPlayer($.player1);
    }
    if (!(Char.IsDead($.cam)) && $.flag_cam_downstairs == 0) {
      $.cam.setThreatSearch(THREAT_GANG_SECURITY);
      $.cam.setThreatSearch(64 /* THREAT_COP */);
      $.cam.setHeedThreats(true /* TRUE */);
      $.cam.followPlayer($.player1);
    }
    $.player1.alterWantedLevelNoDrop(3);
    Path.SwitchPedRoadsOn(-414.0, -597.0, 12.0, -332.0, -555.0, 30.0);
    //flag_bank_mission_failed = 1
    $.flag_launch_hostage_attack = 1;
  }
}



async function hostage_attack() {
  if (!(Char.IsDead($.var_hostage))) {
    $.hostage_int = Math.RandomIntInRange(0, 2);
    if ($.hostage_int == 0) {
      if (!(Char.IsDead($.phil))) {
        $.var_hostage.setWaitState(0, 0);
        $.var_hostage.setObjKillCharAnyMeans($.phil);
        $.var_hostage.setStayInSamePlace(false /* FALSE */);
      }
    }
    else {
      if (!(Char.IsDead($.cam))) {
        $.var_hostage.setWaitState(0, 0);
        $.var_hostage.setObjKillCharAnyMeans($.cam);
        $.var_hostage.setStayInSamePlace(false /* FALSE */);
      }
    }
  }
}



async function gob_shite() {
  $.phil_blip.remove();
  $.cam_blip.remove();
}





async function stairs_cam() {


  if ($.player1.isInArea3D(-926.3, -330.0, 12.4, -929.0, -327.67, 15.0, false /* FALSE */)) {
    //flag_launch_cops_1 = 1
    /*
    GET_PLAYER_HEADING player1 player_heading_bj4
    IF player_heading_bj4 > 0.0
    AND player_heading_bj4 < 181.0
    //SET_CAMERA_ZOOM CAM_ZOOM_ONE
    SET_FIXED_CAMERA_POSITION -925.6 -329.3 13.9 0.0 0.0 0.0
    POINT_CAMERA_AT_PLAYER player1 FIXED JUMP_CUT
    ELSE
    //SET_CAMERA_ZOOM CAM_ZOOM_THREE
    RESTORE_CAMERA
    ENDIF
    */
    if ($.flag_cop_6 == 0) {
      $.bank_cop_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, -918.7, -353.3, 16.8);
      $.bank_cop_6.clearThreatSearch();
      $.bank_cop_6.setThreatSearch(1 /* THREAT_PLAYER1 */);
      $.bank_cop_6.setHeading(60.0);
      $.bank_cop_6.setCrouch(true /* TRUE */, 300000);
      //CHAR_SET_IDLE bank_cop_6
      $.bank_cop_6.giveWeapon(WEAPONTYPE_MP5, 9999);
      $.timer_intro_start = Clock.GetGameTimer();
      if (!(Char.IsDead($.phil))) {
        Path.AddRoutePoint(2, -921.0, -340.0, 13.4);
        Path.AddRoutePoint(2, -921.0, -333.0, 13.4);
        //ADD_ROUTE_POINT 2 -917.7 -340.0 12.4
        $.phil.setCoordinates(-921.0, -340.0, 12.4);
        $.phil.setObjFollowRoute(2, 3 /* FOLLOW_ROUTE_LOOP */);
        $.phil.setUsePednodeSeek(false /* FALSE */);
        //SET_CHAR_HEADING phil 320.0
        //SET_CHAR_STAY_IN_SAME_PLACE phil TRUE
        $.phil.setThreatSearch(64 /* THREAT_COP */);
      }
      $.bank_manager = Char.Create(4 /* PEDTYPE_CIVMALE */, WMORI, -963.8, -336.43, 14.6);
      $.bank_manager.shutUp(true /* TRUE */);
      $.bank_manager.setHeading(205.0);
      $.bank_manager.clearThreatSearch();
      $.bank_manager.setCrouch(true /* TRUE */, 300000);
      //SET_CHAR_PERSONALITY bank_manager PEDSTAT_SUIT_GUY
      $.bank_manager.setPersonality(13 /* PEDSTAT_SENSIBLE_GUY */);
      $.flag_cop_6 = 1;
    }
    await wait_state_loop();  // SCM GOSUB wait_state_loop
  }
  /*
  IF IS_PLAYER_IN_AREA_3D player1 -932.3 -330.5 14.4 -933.5 -327.5 17.0 FALSE
  GET_PLAYER_HEADING player1 player_heading_bj4
  IF player_heading_bj4 < 360.0
  AND player_heading_bj4 > 181.0
  //SET_CAMERA_ZOOM CAM_ZOOM_ONE
  SET_FIXED_CAMERA_POSITION -936.0 -329.4 17.35 0.0 0.0 0.0
  POINT_CAMERA_AT_PLAYER player1 FIXED JUMP_CUT
  ELSE
  //SET_CAMERA_ZOOM CAM_ZOOM_THREE
  RESTORE_CAMERA
  ENDIF
  ENDIF
  */
}





async function cam_death_check() {
  if (Char.IsDead($.cam)) {
    $.flag_bank_mission_failed = 1;
    Text.PrintNow("C_DEAD", 5000, 1);
  }
}





async function phil_death_check() {
  if (Char.IsDead($.phil)) {
    Text.PrintNow("P_DEAD", 5000, 1);
    $.flag_bank_mission_failed = 1;
  }
}



async function phil_death_check_2() {
  if (!(Char.IsDead($.phil))) {
    if ($.player1.locateAnyMeansChar3D($.phil, 10.0, 10.0, 10.0, false /* FALSE */)) {
      if ($.flag_blip_on_phil == 1) {
        $.phil_blip.remove();
        $.flag_blip_on_phil = 0;
      }
    }
    else {
      if ($.flag_blip_on_phil == 0) {
        $.phil_blip.remove();
        $.phil_blip = Blip.AddForChar($.phil);
        Text.PrintNow("P_HIND", 5000, 1); //"You have left Phil behind!"
        $.flag_blip_on_phil = 1;
      }
    }
  }
  else {
    Text.PrintNow("P_DEAD", 5000, 1);
    $.flag_bank_mission_failed = 1;
  }
  if (Char.IsDead($.cam)) {
    $.flag_cam_dead = 1;
  }
}




async function banK_manager_death_check() {
  if (Char.IsDead($.bank_manager)) {
    Text.PrintNow("BM_DEAD", 5000, 1);
    $.flag_bank_mission_failed = 1;
  }
}



async function surveilance() {


  if ($.player1.locateOnFoot3D(-954.5, -341.87, 14.6, 1.5, 1.5, 2.0, false /* FALSE */)) {
    if ($.flag_surveilance_trigger == 0) {
      $.player1.setControl(false /* OFF */);
      Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
      Hud.SwitchWidescreen(true /* ON */);
      Camera.SetFadingColor(0, 0, 1);
      Camera.DoFade(250, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.timer_intro_start = Clock.GetGameTimer();
      Camera.SetFixedPosition(-916.4, -330.55, 15.86, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-922.5, -338.75, 13.44, 2 /* JUMP_CUT */);
      Camera.SwitchSecurity(true /* ON */);
      Camera.DoFade(250, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.PrintNow("EXIT_1", 5000, 1);
      while ($.flag_surveilance == 0) {
        await asyncWait(0);
        await banK_job_timer();  // SCM GOSUB banK_job_timer
        if ($.intro_time_lapsed > 2000 && $.flag_surv_cam == 0) {
          Camera.SetFixedPosition(-910.7, -351.9, 16.0, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-901.5, -342.45, 13.7, 2 /* JUMP_CUT */);
          $.flag_surv_cam = 1;
        }
        if ($.intro_time_lapsed > 4000 && $.flag_surv_cam == 1) {
          Camera.SetFixedPosition(-926.3, -339.6, 20.5, 0.0, 0.0, 0.0);
          //SET_FIXED_CAMERA_POSITION -955.2 -328.0 18.1 0.0 0.0 0.0
          Camera.PointAtPoint(-931.0, -345.9, 17.47, 2 /* JUMP_CUT */);
          //POINT_CAMERA_AT_POINT -945.8 -331.5 15.2 JUMP_CUT
          $.flag_surv_cam = 2;
        }
        if ($.intro_time_lapsed > 6000 && $.flag_surv_cam == 2) {
          Camera.SetFixedPosition(-959.0, -328.4, 17.85, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-963.5, -334.6, 15.6, 2 /* JUMP_CUT */);
          $.flag_surv_cam = 3;
        }
        if ($.intro_time_lapsed > 8000 && $.flag_surv_cam == 3) {
          Camera.SetFixedPosition(-933.4, -340.23, 9.5, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-936.67, -344.34, 7.8, 2 /* JUMP_CUT */);
          $.flag_surv_cam = 4;
        }
        if ($.intro_time_lapsed > 10000 && $.flag_surv_cam == 4) {
          Camera.SetFixedPosition(-936.8, -343.7, 9.1, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-942.15, -343.74, 7.4, 2 /* JUMP_CUT */);
          $.flag_surv_cam = 5;
        }
        if ($.intro_time_lapsed > 12000 && $.flag_surv_cam == 5) {
          Camera.SetFixedPosition(-916.4, -330.55, 15.86, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(-922.5, -338.75, 13.44, 2 /* JUMP_CUT */);
          $.timer_intro_start = Clock.GetGameTimer();
          $.flag_surv_cam = 0;
        }
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          $.flag_surveilance = 1;
        }
      }
      while (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        await asyncWait(0);
      }
      Camera.DoFade(250, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Camera.RestoreJumpcut();
      $.player1.setControl(true /* ON */);
      Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
      Hud.SwitchWidescreen(false /* OFF */);
      Camera.SwitchSecurity(false /* OFF */);
      $.flag_surveilance = 0;
      $.flag_surveilance_trigger = 1;
      Camera.DoFade(250, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
    }
  }
  else {
    $.flag_surveilance_trigger = 0;
  }
}





async function wanted_malarkey() {
  if ($.flag_launch_hostage_attack == 0) {
    $.player1.clearWantedLevel();
  }
}




async function Conversation_1() {
  $.audio_slot = 1;


  if ($.counter_conv1 == 0) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_1" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_1", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Audio.LoadMissionAudio($.audio_slot, "BNK4_2" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_2", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Text.ClearPrints();
    $.counter_conv1 = 1;
  }
  if (!(Car.IsDead($.getaway_car)) && $.intro_time_lapsed > 20000) {
    if ($.player1.isInCar($.getaway_car) && !(Char.IsDead($.phil))) {
      if ($.phil.isInCar($.getaway_car) && !(Char.IsDead($.hilary))) {
        if ($.hilary.isInCar($.getaway_car) && !(Char.IsDead($.cam))) {
          if ($.cam.isInCar($.getaway_car)) {
            if ($.counter_conv1 == 6) {
              if ($.counter_conv2 < 1) {
                $.counter_conv2 = 1;
              }
              $.counter_conv1 = 7;
              $.timer_intro_start = Clock.GetGameTimer();
            }
            if ($.counter_conv1 == 5) {
              Audio.LoadMissionAudio($.audio_slot, "BNK4_3F" as any);
              await audio_bank_loading();  // SCM GOSUB audio_bank_loading
              Text.PrintNow("BNK4_3f", 10000, 1); //rhubarb rhubarb
              await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
              Text.ClearPrints();
              $.counter_conv1 = 6;
            }
            if ($.counter_conv1 == 4) {
              Audio.LoadMissionAudio($.audio_slot, "BNK4_3E" as any);
              await audio_bank_loading();  // SCM GOSUB audio_bank_loading
              Text.PrintNow("BNK4_3e", 10000, 1); //rhubarb rhubarb
              await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
              $.counter_conv1 = 5;
            }
            if ($.counter_conv1 == 3) {
              Audio.LoadMissionAudio($.audio_slot, "BNK4_3D" as any);
              await audio_bank_loading();  // SCM GOSUB audio_bank_loading
              Text.PrintNow("BNK4_3d", 10000, 1); //rhubarb rhubarb
              await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
              $.counter_conv1 = 4;
            }
            if ($.counter_conv1 == 2) {
              Audio.LoadMissionAudio($.audio_slot, "BNK4_3C" as any);
              await audio_bank_loading();  // SCM GOSUB audio_bank_loading
              Text.PrintNow("BNK4_3c", 10000, 1); //rhubarb rhubarb
              await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
              $.counter_conv1 = 3;
            }
            if ($.counter_conv1 == 1) {
              Audio.LoadMissionAudio($.audio_slot, "BNK4_3B" as any);
              await audio_bank_loading();  // SCM GOSUB audio_bank_loading
              Text.PrintNow("BNK4_3b", 10000, 1); //rhubarb rhubarb
              await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
              $.counter_conv1 = 2;
            }
          }
          else {
            if ($.counter_conv1 < 6 && $.counter_conv1 > 1) {
              $.counter_conv1 = 7;
              if ($.counter_conv2 < 1) {
                $.counter_conv2 = 1;
                $.timer_intro_start = Clock.GetGameTimer();
              }
            }
          }
        }
      }
    }
  }
}





async function Conversation_2() {
  $.audio_slot = 1;
  if ($.intro_time_lapsed > 40000 && $.counter_conv2 > 0) {
    if (!(Car.IsDead($.getaway_car))) {
      if ($.player1.isInCar($.getaway_car) && !(Char.IsDead($.phil))) {
        if ($.phil.isInCar($.getaway_car) && !(Char.IsDead($.hilary))) {
          if ($.hilary.isInCar($.getaway_car) && !(Char.IsDead($.cam))) {
            if ($.cam.isInCar($.getaway_car)) {
              if ($.counter_conv2 == 2) {
                Audio.LoadMissionAudio($.audio_slot, "BNK4_3J" as any);
                await audio_bank_loading();  // SCM GOSUB audio_bank_loading
                Text.PrintNow("BNK4_3j", 10000, 1); //rhubarb rhubarb
                await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
                $.counter_conv2 = 3;
              }
              if ($.counter_conv2 == 1) {
                Audio.LoadMissionAudio($.audio_slot, "BNK4_3I" as any);
                await audio_bank_loading();  // SCM GOSUB audio_bank_loading
                Text.PrintNow("BNK4_3i", 10000, 1); //rhubarb rhubarb
                await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
                Text.ClearPrints();
                $.counter_conv2 = 2;
              }
            }
          }
        }
      }
    }
  }
}






async function Conversation_3() {
  $.audio_slot = 1;


  $.counter_temp1 = $.counter_conv1;
  $.counter_conv1 = 10;
  $.counter_temp2 = $.counter_conv2;
  $.counter_conv2 = 10;


  if ($.counter_conv3 == 7) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3U" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3u", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.flag_conv3 = 1;
    $.counter_conv1 = $.counter_temp1;
    $.counter_conv2 = $.counter_temp2;
    $.counter_conv3 = 8;
  }
  if ($.counter_conv3 == 6) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3T" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3t", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.counter_conv3 = 7;
  }
  if ($.counter_conv3 == 5) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3S" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3s", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    Text.ClearPrints();
    $.counter_conv3 = 6;
  }
  if ($.counter_conv3 == 4) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3R" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3r", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.counter_conv3 = 5;
  }
  if ($.counter_conv3 == 3) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3Q" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3q", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.counter_conv3 = 4;
  }
  if ($.counter_conv3 == 2) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3P" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3p", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.counter_conv3 = 3;
  }
  if ($.counter_conv3 == 1) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3O" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3o", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.counter_conv3 = 2;
  }
  if ($.counter_conv3 == 0) {
    Audio.LoadMissionAudio($.audio_slot, "BNK4_3M" as any);
    await audio_bank_loading();  // SCM GOSUB audio_bank_loading
    Text.PrintNow("BNK4_3m", 10000, 1); //rhubarb rhubarb
    await has_audio_finished_bank();  // SCM GOSUB has_audio_finished_bank
    $.counter_conv3 = 1;
  }
}




async function gas_canisters() {
  $.var_gas = $.gas_1;
  await gas_generator();  // SCM GOSUB gas_generator
  $.var_gas = $.gas_2;
  await gas_generator();  // SCM GOSUB gas_generator
  $.var_gas = $.gas_3;
  await gas_generator();  // SCM GOSUB gas_generator
  $.var_gas = $.gas_4;
  await gas_generator();  // SCM GOSUB gas_generator
  $.var_gas = $.gas_5;
  await gas_generator();  // SCM GOSUB gas_generator
  $.var_gas = $.gas_6;
  await gas_generator();  // SCM GOSUB gas_generator
}



async function gas_generator() {
  const _res87 = $.var_gas.getCoordinates();
$.gas_x = _res87.x;
$.gas_y = _res87.y;
$.gas_z = _res87.z;
  //ADD_MOVING_PARTICLE_EFFECT POBJECT_DRY_ICE gas_x gas_y gas_z 0.0 0.0 0.0 0.3 0 0 0 200


  const _res88 = $.var_gas.getOffsetInWorldCoords(0.0, 0.0, 0.2);
$.gas_world_x = _res88.x;
$.gas_world_y = _res88.y;
$.gas_world_z = _res88.z;
  $.gas_vect_x = $.gas_world_x - $.gas_x;
  $.gas_vect_y = $.gas_world_y - $.gas_y;
  $.gas_vect_z = $.gas_world_z - $.gas_z;
  //ADD_MOVING_PARTICLE_EFFECT POBJECT_DRY_ICE gas_world_x gas_world_y gas_world_z 0.0 0.0 0.0 0.3 0 0 0 200

  Fx.CreateSingleParticle(PARTICLE_TEARGAS, $.gas_x, $.gas_y, $.gas_z, $.gas_vect_x, $.gas_vect_y, $.gas_vect_z, 0.3);
}

//ADD_MOVING_PARTICLE_EFFECT MovingParticleType X Y Z XSpeed YSpeed ZSpeed Radius R G B Time


async function going_up() {
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  Camera.SetFadingColor(0, 0, 1);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    $.lift_door_1.slide(-936.964, -350.688, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
    $.lift_door_2.slide(-936.964, -352.169, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
  }



  $.player1.setCoordinates(-938.56, -351.5, 16.8);
  $.player1.setHeading(280.0);
  Camera.SetInFrontOfPlayer();


  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    $.lift_door_1.slide(-936.964, -349.488, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
    $.lift_door_2.slide(-936.964, -353.369, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
  }


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
}



async function going_down_pt1() {
  Camera.SetFadingColor(0, 0, 1);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    $.lift_door_1.slide(-936.964, -350.688, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
    $.lift_door_2.slide(-936.964, -352.169, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
  }



  $.player1.setCoordinates(-937.84, -351.73, 6.23);
  $.player1.setHeading(280.0);
  Camera.SetInFrontOfPlayer();
}



async function going_down_pt2() {
  Camera.DoFade(1500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    $.lift_door_1.slide(-936.964, -349.488, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
    $.lift_door_2.slide(-936.964, -353.369, 3.235, 0.0, 0.025, 0.0, false /* FALSE */);
  }


  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  return;
  /*
  flee_bank:
  IF flag_flee = 1
  IF NOT IS_CHAR_DEAD cashier1
  bank_manager = cashier1
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD cashier2
  bank_manager = cashier2
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD cashier3
  bank_manager = cashier3
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD cashier4
  bank_manager = cashier4
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD cashier5
  bank_manager = cashier5
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD cashier6
  bank_manager = cashier6
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD cashier7
  bank_manager = cashier7
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD cashier8
  bank_manager = cashier8
  GOSUB area_check_flee
  ENDIF

  IF NOT IS_CHAR_DEAD bank_cop_3
  bank_manager = bank_cop_3
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD bank_cop_2
  bank_manager = bank_cop_2
  GOSUB area_check_flee
  ENDIF
  IF NOT IS_CHAR_DEAD bank_cop_1
  bank_manager = bank_cop_1
  GOSUB area_check_flee
  ENDIF
  ENDIF
  IF flag_flee = 0
  ADD_ROUTE_POINT 2 -923.0 -337.24 12.4
  ADD_ROUTE_POINT 2 -920.74 -339.78 12.4
  ADD_ROUTE_POINT 2 -900.0 -340.9 12.4
  IF NOT IS_CHAR_DEAD cashier1
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier1 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD cashier2
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier2 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD cashier3
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier3 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD cashier4
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier4 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD cashier5
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier5 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD cashier6
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier6 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD cashier7
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier7 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD cashier8
  SET_CHAR_OBJ_FOLLOW_ROUTE cashier8 2 FOLLOW_ROUTE_ONCE
  ENDIF

  IF NOT IS_CHAR_DEAD bank_cop_3
  SET_CHAR_OBJ_FOLLOW_ROUTE bank_cop_3 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD bank_cop_2
  SET_CHAR_OBJ_FOLLOW_ROUTE bank_cop_2 2 FOLLOW_ROUTE_ONCE
  ENDIF
  IF NOT IS_CHAR_DEAD bank_cop_1
  SET_CHAR_OBJ_FOLLOW_ROUTE bank_cop_1 2 FOLLOW_ROUTE_ONCE
  ENDIF
  flag_flee = 1
  ENDIF

  RETURN

  area_check_flee:
  IF LOCATE_CHAR_ON_FOOT_3D bank_manager -900.0 -340.9 13.4 2.0 2.0 2.0 FALSE
  REMOVE_CHAR_ELEGANTLY bank_manager
  ENDIF
  RETURN
  */




}

export async function bankj4() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // **************************************** Bank Job ***************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // Mission start stuff




  await mission_start_bankjob4();  // SCM GOSUB mission_start_bankjob4


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_bankjob4_failed();  // SCM GOSUB mission_bankjob4_failed
  }


  await mission_cleanup_bankjob4();  // SCM GOSUB mission_cleanup_bankjob4


  // MissionBoundary

  // Variables for mission
  //VAR_INT flag_bank_job

  // VAR_INT audio_slot cs_gun


  // VAR_INT flag_player_in_car flag_arrived_in_car flag_this_is_a_raid
  //VAR_INT hostage_collective

  // VAR_INT flag_hilary_gone flag_bank_mission_failed
  // VAR_INT flag_player_gun
  //VAR_INT flag_bibble flag_bobble flag_babble


  // VAR_INT bank_cop_1 bank_cop_2 bank_cop_3
  // VAR_INT bank_cop_4 bank_cop_5 bank_cop_6
  // VAR_INT bank_cop_7 bank_cop_8
  //VAR_INT bank_cop_9 bank_cop_10 bank_cop_11 bank_cop_12


  // VAR_INT target_ped phils_target bank_alarm
  // VAR_INT target_ped1 target_ped2 target_ped3 target_ped4
  // VAR_INT bank_manager


  // VAR_INT bank_job_counter flag_blip_on_phil flag_blip_on_hilary flag_blip_on_cam random_int
  // VAR_INT phil hilary cam phil_blip hilary_blip cam_blip locate_dome_flag
  // VAR_INT getaway_car blip_getaway_car flag_blip_on_getaway_car



  // VAR_INT cashier1 cashier2 cashier3 cashier4 cashier5 cashier6 cashier7 cashier8
  //VAR_INT clerk_1 clerk_2 clerk_3 clerk_4
  //VAR_INT punter_1 punter_2 punter_3 punter_4 punter_5 punter_6 punter_7 punter_8

  // VAR_INT cop_car1 cop_car2 cop_car3


  // VAR_INT bank_armour bank_health


  // VAR_INT lift_door_1 lift_door_2


  // VAR_INT counter_conv1 counter_conv2 counter_conv3
  // VAR_INT counter_temp1 counter_temp2 counter_temp3 counter_temp4
  // VAR_INT flag_conv3 flag_watch_the_car flag_stopped


  // VAR_INT flag_cam_downstairs
  // VAR_INT gas_1 gas_2 gas_3 gas_4 gas_5 gas_6 var_gas
  // VAR_FLOAT gas_x gas_y gas_z gas_vect_x gas_vect_y gas_vect_z
  // VAR_FLOAT gas_world_x gas_world_y gas_world_z


  // VAR_INT swat_1 swat_2
  // VAR_INT flag_swat_rope flag_grill_collision
  // VAR_INT flag_player_leader_phil flag_player_leader_hilary flag_player_leader_cam


  // LVAR_INT hostage_casualties
  // LVAR_INT flag_hostage1 flag_hostage2 flag_hostage3 flag_hostage4
  // LVAR_INT flag_hostage5 flag_hostage6 flag_hostage7 flag_hostage8
  // LVAR_INT flag_hostage9 flag_hostage10 flag_hostage11
  // VAR_INT flag_launch_hostage_attack var_hostage hostage_int
  //VAR_INT flag_cam_dead
  //VAR_INT guard1 guard2 guard3 guard4	guard5 guard6
  //VAR_INT guard1_routine_counter guard2_routine_counter guard3_routine_counter guard4_routine_counter guard5_routine_counter guard6_routine_counter
  //VAR_INT cam_routine_counter phil_routine_counter


  // VAR_INT flag_car_warp


  // VAR_INT mission_blip flag_switcharoo
  // VAR_INT rand_crouch_time
  // VAR_INT flag_surveilance flag_surv_cam flag_surveilance_trigger


  // VAR_INT flag_phil_at_bank
  // VAR_INT flag_hilary_at_bank
  // VAR_INT flag_cam_at_bank flag_cam_dead
  // VAR_INT flag_dialogue
  // VAR_INT retirement
  // VAR_INT flag_flee

  //VAR_INT flag_launch_cops_1

  // VAR_INT flag_cop_4 flag_cop_5 flag_cop_6 flag_cop_7
  // VAR_INT flag_waitstate_1 flag_waitstate_2 flag_waitstate_3 flag_change_waitstate

  //VAR_INT route_1	route_2

  // VAR_INT flag_area_check_1 flag_phil_warp flag_cam_at_target

  //VAR_INT flag_player_in_bank

  // VAR_FLOAT warp_x warp_y warp_z
  // VAR_FLOAT world_x world_y world_z
  //VAR_FLOAT waypoint_1_x waypoint_1_y waypoint_2_x waypoint_2_y waypoint_z

  // VAR_FLOAT phil_x phil_y cam_x cam_y
  // VAR_FLOAT player_heading_bj4

  // ******** TEST FLAGS FOR 'LOAD AND LAUNCH EXCLUSIVE' **********************************

  //VAR_INT flag_intro  timer_intro_start intro_time_lapsed	timer_intro_now
  //VAR_INT test_blip1 test_blip2 test_blip3 test_blip4
  // ****************************************Mission Start************************************


}
