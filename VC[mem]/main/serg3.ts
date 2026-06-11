// Generated from main/serg3.sc

import { $ } from "../utils/vars.mts";

async function mission_start_serg2() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;
  $.flag_player_on_rc_mission = 1;


  await asyncWait(0);



  Text.LoadMissionText("serg3");
  Shortcut.SetDropoffPointForMission(252.7968, -230.9387, 9.8638, 333.9001);


  Camera.DoFade(1500, 1 /* FADE_IN */);

  // *****************************************Set Flags/variables************************************



  // *******************************************Set Coords*****************************************
  // pony van

  $.vanlocx_s3 = 226.9151;
  $.vanlocy_s3 = -352.2110;
  $.vanlocz_s3 = 9.9086;
  $.vanheading_s3 = 79.9842;

  //RCgoblin

  $.rc_goblinx_s3 = 226.1920;
  $.rc_gobliny_s3 = -342.56923;
  $.rc_goblinz_s3 = 10.3744;
  $.rc_goblinheading_s3 = 87.8676;

  //bomb starting locations

  $.timer_bomb1_pickupx_s3 = 229.8516;
  $.timer_bomb1_pickupy_s3 = -347.1100;
  $.timer_bomb1_pickupz_s3 = 10.0998;


  $.timer_bomb2_pickupx_s3 = 229.8516;
  $.timer_bomb2_pickupy_s3 = -344.0284;
  $.timer_bomb2_pickupz_s3 = 10.1517;


  $.timer_bomb3_pickupx_s3 = 229.8516;
  $.timer_bomb3_pickupy_s3 = -341.11006;
  $.timer_bomb3_pickupz_s3 = 10.56018;


  $.timer_bomb4_pickupx_s3 = 229.8516;
  $.timer_bomb4_pickupy_s3 = -338.1100;
  $.timer_bomb4_pickupz_s3 = 10.464787;



  //target locations

  $.target1x_s3 = 97.574;
  $.target1y_s3 = -381.658;
  $.target1z_s3 = 7.6407;


  $.target2x_s3 = 156.5491;
  $.target2y_s3 = -348.0284;
  $.target2z_s3 = 16.8517;


  $.target3x_s3 = 88.1474;
  $.target3y_s3 = -361.8685;
  $.target3z_s3 = 26.0760;


  $.target4x_s3 = 140.0079;
  $.target4y_s3 = -383.1253;
  $.target4z_s3 = 35.3172;

  //builders location



  $.three_more_to_go = 0;
  $.two_more_to_go = 0;
  $.one_more_to_go = 0;
  $.three_more_to_go1 = 0;
  $.two_more_to_go1 = 0;
  $.one_more_to_go1 = 0;
  $.three_more_to_go2 = 0;
  $.two_more_to_go2 = 0;
  $.one_more_to_go2 = 0;

  //flags

  $.player_in_van_for_first_time = 0;
  $.highlight_targets = 0;
  $.bomb1_state = 0;
  $.bomb2_state = 0;
  $.bomb3_state = 0;
  $.bomb4_state = 0;


  $.target1_hit = 0;
  $.target2_hit = 0;
  $.target3_hit = 0;
  $.target4_hit = 0;


  $.bomb1_is_in_zone = 0;


  $.start_timer_on_first_hit = 0;


  $.x_bombs_to_go = 0;


  $.builder1attack = 0;
  $.builder2attack = 0;
  $.builder3attack = 0;
  $.builder5attack = 0;
  $.builder6attack = 0;
  $.builder7attack = 0;
  $.builder8attack = 0;
  $.builder10attack = 0;
  $.builder11attack = 0;
  $.builder12attack = 0;
  $.builder13attack = 0;


  $.builder9attack = 0;
  $.security2_s3attacked = 0;

  //create the rc goblin

  $.spheres3_flag = 0;
  $.camera_s3 = 0;
  $.lock_door_flag_s3 = 0;
  $.targets_to_go = 4;


  $.vancreated_s3 = 0;

  //help flag

  $.print_help_s3 = 0;


  //audio flags

  $.playingaudio_s3 = 0;
  $.playingaudio_s3state = 0;
  $.builder1played = 0;
  $.builder3played = 0;
  $.builder7played = 0;
  $.builder13played = 0;


  $.builder9played = 0;
  $.security2_s3played = 0;

  // ********************************** SCRIPTED CUT - AVERY'S STRETCH ARRIVES ***************


  Weather.ForceNow(4 /* WEATHER_EXTRA_SUNNY */);
  Hud.SwitchWidescreen(true /* ON */);


  World.ClearArea(299.0, -205.0, 10.5, 5.0, true /* TRUE */);
  World.ClearArea(305.0, -219.5, 10.5, 10.0, true /* TRUE */);
  $.player1.setCoordinates(299.0, -205.0, 10.5);
  $.player1.setHeading(230.0);
  Camera.SetFixedPosition(297.0, -204.7, 13.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(318.5, -219.23, 22.4, 2 /* JUMP_CUT */);
  Streaming.RequestModel(stretch);
  Streaming.LoadScene(270.0, -218.0, 13.4);
  while (!(Streaming.HasModelLoaded(stretch))) {
    await asyncWait(0);
  }


  World.ClearArea(306.9, -241.65, 12.3, 15.0, true /* TRUE */);
  $.scripted_cut_limo = Car.Create(stretch, 306.9, -241.65, 12.3);
  $.scripted_cut_limo.changeColor(0, 0);
  $.scripted_cut_limo.setHeading(0.0);



  Camera.DoFade(1500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Car.IsDead($.scripted_cut_limo))) {
    $.scripted_cut_limo.setForwardSpeed(15.0);
    $.scripted_cut_limo.setTempAction(8 /* TEMPACT_GOFORWARD */, 8000);
  }


  TIMERA = 0;
  while (TIMERA < 1000) {
    await asyncWait(0);
  }
  if (!(Car.IsDead($.scripted_cut_limo))) {
    Camera.PointAtCar($.scripted_cut_limo, 15 /* FIXED */, 1 /* INTERPOLATION */);
  }
  TIMERA = 0;
  while (TIMERA < 3000) {
    await asyncWait(0);
  }
  if (!(Car.IsDead($.scripted_cut_limo))) {
    const _res486 = $.scripted_cut_limo.getCoordinates();
$.vect_x = _res486.x;
$.vect_y = _res486.y;
$.vect_z = _res486.z;
    $.scplayer.setObjGotoCoordOnFoot($.vect_x, $.vect_y);
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.scripted_cut_limo.delete();
  Streaming.MarkModelAsNoLongerNeeded(stretch);
  Camera.Restore();
  $.scplayer.setObjNoObj();
  $.scplayer.setIdle();
  TIMERA = 0;


  // ****************************************START OF CUTSCENE********************************


  // VAR_INT cut_limo


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSavery");


  Streaming.LoadSpecialModel(CUTOBJ01, "cs_limo");


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);
  }



  Cutscene.Load("tex_3");


  Cutscene.SetOffset(305.2, -211.9, 11.3);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_avery = CutsceneObject.Create(SPECIAL02);
  $.cs_avery.setAnim("CSavery");


  $.cut_limo = CutsceneObject.Create(CUTOBJ01);

  //hide player

  World.ClearArea(265.129, -234.531, 11.107, 1.0, true /* TRUE */);
  $.player1.setCoordinates(265.129, -234.531, 11.1013);
  $.player1.setHeading(78.218376);
  Streaming.RequestCollision(265.129, -234.531);



  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text



  $.cs_time = Cutscene.GetTime();



  while ($.cs_time < 1378) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_A", 10000, 1); //Now look here, son. I got a problem and I reckon you could help me with.


  while ($.cs_time < 6014) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_B", 10000, 1); //I'm no builder.



  while ($.cs_time < 7125) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_C", 10000, 1); //No, I was thinking more of your demolition skills.


  while ($.cs_time < 11052) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_D", 10000, 1); // Now this here, this is the development as planned and this;


  while ($.cs_time < 15314) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_E", 10000, 1); //this is the property that we're looking at.


  while ($.cs_time < 17674) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_F", 10000, 1); //You're trying to say this new office block is kind of in the way.



  while ($.cs_time < 20508) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_G", 10000, 1); //You catch on quick.



  while ($.cs_time < 22010) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_H", 10000, 1); //Now I'm going to head out of town for a while


  while ($.cs_time < 24331) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_I", 10000, 1); //and if that office development were to face sudden and insurmountable structural problems, then I..


  while ($.cs_time < 30049) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_J", 10000, 1); //As a civil minded individual you'd feel obliged to step in and


  while ($.cs_time < 33978) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_K", 10000, 1); //save the rejuvenation of an important area of the city?


  while ($.cs_time < 37030) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX3_L", 10000, 1); //Where can I get more guys like you?


  while ($.cs_time < 39030) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


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
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Weather.Release();



  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Camera.DoFade(1500, 1 /* FADE_IN */);




  // ******************************************END OF CUTSCENE*********************************




  // Mission

  Streaming.RequestModel(dynamite);
  Streaming.RequestModel(TOPFUN);
  Streaming.RequestModel(WMYCW);
  Streaming.RequestModel(HAMMER);
  Streaming.RequestModel(RCgoblin);
  Streaming.RequestModel(barrel2);
  Streaming.RequestModel(GDa);
  Streaming.RequestModel(colt45);



  while (!(Streaming.HasModelLoaded(dynamite)) || !(Streaming.HasModelLoaded(HAMMER)) || !(Streaming.HasModelLoaded(WMYCW)) || !(Streaming.HasModelLoaded(TOPFUN)) || !(Streaming.HasModelLoaded(barrel2)) || !(Streaming.HasModelLoaded(colt45))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(GDa))) {
    await asyncWait(0);
  }



  //disable detonations

  Rc.SetEnableDetonate(false /* FALSE */);


  //create pony

  World.ClearArea($.vanlocx_s3, $.vanlocy_s3, $.vanlocz_s3, 35.0, false /* FALSE */);
  $.van_s3 = Car.Create(TOPFUN, $.vanlocx_s3, $.vanlocy_s3, $.vanlocz_s3);
  $.vancreated_s3 = 1;
  $.van_s3.setHeading($.vanheading_s3);
  $.vanblip_s3 = Blip.AddForCar($.van_s3);


  Text.PrintNow("TEX3_16", 7000, 2);


  Path.SwitchPedRoadsOff(208.6046, -355.3371, -5.5941, 248.6443, -338.1352, 12.9291);


  $.van_s3.freezePosition(true /* TRUE */);
}



async function mission_serg2_loop() {
  // SCM GOTO → mission_serg2_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if (!(Car.IsDead($.van_s3))) {
      if ($.player1.isSittingInCar($.van_s3)) {
        if ($.lock_door_flag_s3 == 0) {
          $.van_s3.lockDoors(2 /* CARLOCK_LOCKED */);
          await asyncWait(1000);
          $.lock_door_flag_s3 = 1;
        }
      }
    }


    if (!(Car.IsDead($.van_s3))) {
      if (!($.player1.isSittingInCar($.van_s3))) {
        if ($.lock_door_flag_s3 == 1) {
          $.van_s3.lockDoors(1 /* CARLOCK_UNLOCKED */);
          $.lock_door_flag_s3 = 0;
        }
      }
    }

    ////////////////// MISSION START //////////////////

    //remove blip and lock doors when player gets in and create van

    if (!(Car.IsDead($.van_s3))) {
      if ($.player1.isInCar($.van_s3)) {
        if ($.player_in_van_for_first_time == 0 && $.lock_door_flag_s3 == 1) {

          ///////////////////CREATING BUILDERS

          Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
          $.dmbarrel1 = ScriptObject.Create(barrel2, 97.574, -381.658, 7.9721);
          $.dmbarrel2 = ScriptObject.Create(barrel2, 156.5491, -348.0284, 16.8517);
          $.dmbarrel3 = ScriptObject.Create(barrel2, 88.1474, -361.8685, 26.0760);
          $.dmbarrel4 = ScriptObject.Create(barrel2, 140.0079, -383.1253, 35.3172);
          $.builder1 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 121.4188, -371.5533, 7.6307); //doing nothing
          $.builder1.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder1.setHeading(189.9082);
          $.builder1.setRunning(true /* TRUE */);
          $.builder2 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 160.0738, -375.7540, 7.6307); //hammer
          $.builder2.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder2.setHeading(268.8645);
          $.builder2.setRunning(true /* TRUE */);
          $.builder3 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 116.1989, -348.1792, 16.8494); //chatting
          $.builder3.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder3.setHeading(288.6831);
          $.builder3.setRunning(true /* TRUE */);
          $.builder4 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 117.5286, -348.1254, 16.8494); //chatting
          $.builder4.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder4.setHeading(110.9578);
          $.builder4.setRunning(true /* TRUE */);
          Game.SetCharsChatting($.builder4, $.builder3, 800000);
          $.builder5 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 160.1008, -356.3203, 16.8517); //hammer
          $.builder5.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder5.setHeading(277.8673);
          $.builder5.setRunning(true /* TRUE */);
          $.builder5.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
          $.builder6 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 160.3129, -375.7929, 16.8517); //hammer
          $.builder6.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder6.setHeading(261.6740);
          $.builder6.setRunning(true /* TRUE */);
          $.builder6.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
          $.builder7 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 81.4138, -356.4398, 26.0760); //hammer
          $.builder7.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder7.setHeading(87.3059);
          $.builder7.setRunning(true /* TRUE */);
          $.builder7.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
          $.builder8 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 81.5607, -354.9395, 26.0760); //chat waitstate
          $.builder8.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder8.setHeading(176.8125);
          $.builder8.setRunning(true /* TRUE */);
          $.builder8.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 800000);
          $.builder9 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 121.0359, -379.1090, 26.0805); //wander  //SECURITY GUARD
          $.builder9.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 300000);
          $.builder9.setHeading(15.4943);
          $.builder9.setRunning(true /* TRUE */);
          $.builder9.shutUp(true /* TRUE */);
          $.builder10 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 112.2413, -356.3021, 35.3172); //hammer
          $.builder10.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder10.setHeading(278.5729);
          $.builder10.setRunning(true /* TRUE */);
          $.builder11 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 98.2973, -376.0110, 35.3172); //hammer
          $.builder11.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder11.setHeading(76.4463);
          $.builder11.setRunning(true /* TRUE */);
          $.builder12 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 160.5181, -356.3491, 35.3172); //hammer
          $.builder12.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder12.setHeading(278.5729);
          $.builder12.setRunning(true /* TRUE */);
          $.builder13 = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYCW, 129.3469, -366.2533, 35.3172); //hammer
          $.builder13.giveWeapon(7 /* WEAPONTYPE_HAMMER */, 1);
          $.builder13.setHeading(84.4686);
          $.builder13.setRunning(true /* TRUE */);
          $.security1_s3 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 120.1059, -346.0308, 35.3104); //gun
          $.security1_s3.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 300000);
          $.security1_s3.setHeading(185.8660);
          $.security1_s3.setRunning(true /* TRUE */);
          $.security1_s3.setAccuracy(80);
          $.security1_s3.shutUp(true /* TRUE */);
          $.security2_s3 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 123.3658, -380.2271, 35.3172); //gun
          $.security2_s3.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 300000);
          $.security2_s3.setHeading(358.9169);
          $.security2_s3.setRunning(true /* TRUE */);
          $.security2_s3.shutUp(true /* TRUE */);
          $.security3_s3 = Char.Create(4 /* PEDTYPE_CIVMALE */, GDa, 104.143, -346.1777, 26.268); //gun
          $.security3_s3.giveWeapon(17 /* WEAPONTYPE_PISTOL */, 300000);
          $.security3_s3.setHeading(185.8660);
          $.security3_s3.setRunning(true /* TRUE */);
          $.security3_s3.shutUp(true /* TRUE */);
          $.vanblip_s3.remove();
          Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
          $.wanted_level_s3 = $.player1.storeWantedLevel();
          $.player1.clearWantedLevel();
          Hud.SwitchWidescreen(true /* ON */);
          $.player1.setControl(false /* OFF */);

          //give player remote copter
          Rc.GiveModelToPlayer($.player1, $.rc_goblinx_s3, $.rc_gobliny_s3, $.rc_goblinz_s3, $.rc_goblinheading_s3, RCgoblin);
          $.rc_goblin_s3 = Rc.GetCar($.player1);
          $.rc_goblin_s3.setHealth(1400);

          //create timer bombs
          $.timer_bomb1_s3 = ScriptObject.Create(dynamite, $.timer_bomb1_pickupx_s3, $.timer_bomb1_pickupy_s3, $.timer_bomb1_pickupz_s3);
          $.timer_bomb1_s3.setCollision(true /* TRUE */);
          $.timer_bomb1_s3.setDynamic(true /* TRUE */);
          $.timer_bomb1_blip_s3 = Blip.AddForObject($.timer_bomb1_s3);


          $.timer_bomb2_s3 = ScriptObject.Create(dynamite, $.timer_bomb2_pickupx_s3, $.timer_bomb2_pickupy_s3, $.timer_bomb2_pickupz_s3);
          $.timer_bomb2_s3.setCollision(true /* TRUE */);
          $.timer_bomb2_s3.setDynamic(true /* TRUE */);
          //SET_OBJECT_RECORDS_COLLISIONS timer_bomb2_s3 TRUE
          $.timer_bomb2_blip_s3 = Blip.AddForObject($.timer_bomb2_s3);
          $.timer_bomb3_s3 = ScriptObject.Create(dynamite, $.timer_bomb3_pickupx_s3, $.timer_bomb3_pickupy_s3, $.timer_bomb3_pickupz_s3);
          $.timer_bomb3_s3.setCollision(true /* TRUE */);
          $.timer_bomb3_s3.setDynamic(true /* TRUE */);
          //SET_OBJECT_RECORDS_COLLISIONS timer_bomb3_s3 TRUE
          $.timer_bomb3_blip_s3 = Blip.AddForObject($.timer_bomb3_s3);


          $.timer_bomb4_s3 = ScriptObject.Create(dynamite, $.timer_bomb4_pickupx_s3, $.timer_bomb4_pickupy_s3, $.timer_bomb4_pickupz_s3);
          $.timer_bomb4_s3.setCollision(true /* TRUE */);
          $.timer_bomb4_s3.setDynamic(true /* TRUE */);
          //SET_OBJECT_RECORDS_COLLISIONS timer_bomb4_s3 TRUE
          $.timer_bomb4_blip_s3 = Blip.AddForObject($.timer_bomb4_s3);
          $.dmbarrel1.freezePosition(true /* TRUE */);
          $.dmbarrel2.freezePosition(true /* TRUE */);
          $.dmbarrel3.freezePosition(true /* TRUE */);
          $.dmbarrel4.freezePosition(true /* TRUE */);


          Camera.SetFixedPosition(275.698853, -255.776352, 35.368149, 0.0, 0.0, 0.0); //building shot
          Camera.PointAtPoint(274.904907, -256.375183, 35.47337, 2 /* JUMP_CUT */);
          World.ClearArea($.rc_goblinx_s3, $.rc_gobliny_s3, $.rc_goblinz_s3, 15.0, false /* FALSE */);
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            Text.PrintNow("TEX3_1", 5000, 2);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */) && TIMERA > 1000) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }



          }
          Camera.SetFixedPosition(221.931839, -347.825348, 14.86874, 0.0, 0.0, 0.0); //heli shot
          Camera.PointAtPoint(222.581650, -347.262512, 14.357430, 2 /* JUMP_CUT */);


          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            Text.PrintNow("TEX3_2", 5000, 2);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }



          }
          Camera.SetFixedPosition(229.985306, -348.742728, 11.148973, 0.0, 0.0, 0.0); //bomb shot
          Camera.PointAtPoint(229.951279, -347.861328, 10.677962, 2 /* JUMP_CUT */);
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            Text.PrintNow("TEX3_30", 5000, 2);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }


          }


          Camera.SetFixedPosition(94.208, -381.946, 8.67, 0.0, 0.0, 0.0); //1st target
          Camera.PointAtPoint(95.284414, -381.862, 8.660458, 2 /* JUMP_CUT */);
          World.ClearArea($.rc_goblinx_s3, $.rc_gobliny_s3, $.rc_goblinz_s3, 10.0, false /* FALSE */);
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            $.controlmode = Pad.GetControllerMode();
            if ($.controlmode == 3) {
              Text.PrintNow("TEX3_39", 5000, 2); //circle
            }
            else {
              Text.PrintNow("TEX3_4", 5000, 2); //circle
            }


            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }


          }
          Camera.SetFixedPosition(153.356705, -365.005096, 17.809898, 0.0, 0.0, 0.0); //2nd target
          Camera.PointAtPoint(153.537766, -364.021729, 17.823509, 2 /* JUMP_CUT */);
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            Text.PrintNow("TEX3_5", 5000, 2);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }
            if (!(Char.IsDead($.builder5))) {
              $.builder5.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
            }
            if (!(Char.IsDead($.builder6))) {
              $.builder6.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
            }


          }
          Camera.SetFixedPosition(93.859215, -360.954346, 27.008280, 0.0, 0.0, 0.0); //3rd target
          Camera.PointAtPoint(92.861099, -361.013611, 26.992144, 2 /* JUMP_CUT */);
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            Text.PrintNow("TEX3_6", 5000, 2);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }
            if (!(Char.IsDead($.builder7))) {
              $.builder7.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
            }


          }


          Camera.SetFixedPosition(120.766960, -377.225586, 35.945694, 0.0, 0.0, 0.0); //4th target
          Camera.PointAtPoint(121.699638, -377.580963, 36.007435, 2 /* JUMP_CUT */);
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            Text.PrintNow("TEX3_7", 5000, 2);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }



          }
          Camera.SetFixedPosition(117.722252, -388.837280, 10.207084, 0.0, 0.0, 0.0); //stairs
          Camera.PointAtPoint(117.743431, -387.838593, 10.258373, 2 /* JUMP_CUT */);
          TIMERA = 0;
          while (TIMERA < 5000) {
            await asyncWait(0);
            Text.PrintNow("TEX3_27", 5000, 2);
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
              // SCM GOTO → end_of_demolition_cutscene (not lowered; manual jump required)
              throw new Error("unresolved GOTO end_of_demolition_cutscene"); // fallback: would break linear control flow
            }



          }


          // SCM label end_of_demolition_cutscene
          await asyncWait(0);
          Text.ClearPrints();
          Hud.SwitchWidescreen(false /* OFF */);
          $.player1.setControl(true /* ON */);
          if (!(Car.IsDead($.rc_goblin_s3))) {
            Camera.PointAtCar($.rc_goblin_s3, 18 /* CAM_ON_A_STRING */, 2 /* JUMP_CUT */);
            await asyncWait(0);
            Camera.SetZoom(0);
          }
          Hud.DisplayCounterWithString($.$id.targets_to_go, 0 /* COUNTER_DISPLAY_NUMBER */, "TEX3_11");
          //PRINT NOW use your copter etc. to bomb and then CUT TO BUILDING SITE AND SHOW BOMB LOCATIONS

          $.player_in_van_for_first_time = 1;
        }
      }
    }

    ////////////////// HELP TEXT //////////////////

    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 0) {
        TIMERA = 0;
        Text.PrintHelp("TEX3_22");
        $.print_help_s3 = 1;
      }
    }


    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 1) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_23"); // Push the ~h~left analog stick~w~ to tilt the helicopter in the direction you wish to maneuver it.
          TIMERA = 0;
          $.print_help_s3 = 2;
        }
      }
    }


    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 2) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_25"); // Press the ~h~R2 ~w~button to rotate the helicopter clockwise.
          TIMERA = 0;
          $.print_help_s3 = 3;
        }
      }
    }


    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 3) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_24"); // Press the ~h~L2 ~w~button to rotate the helicopter counter-clockwise.
          TIMERA = 0;
          $.print_help_s3 = 4;
        }
      }
    }
    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 4) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_26");
          TIMERA = 0;
          $.print_help_s3 = 5;
        }
      }
    }


    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 5) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_32");
          TIMERA = 0;
          $.print_help_s3 = 6;
        }
      }
    }


    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 6) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_28");
          TIMERA = 0;
          $.print_help_s3 = 7;
        }
      }
    }
    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 7) {
        if (TIMERA > 9500) {
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 3) {
            Text.PrintHelp("TEX3_40"); //circle
          }
          else {
            Text.PrintHelp("TEX3_29"); //circle
          }
          TIMERA = 0;
          $.print_help_s3 = 8;
        }
      }
    }
    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 8) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_33");
          TIMERA = 0;
          $.print_help_s3 = 9;
        }
      }
    }
    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 9) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_34");
          TIMERA = 0;
          $.print_help_s3 = 10;
        }
      }
    }
    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 10) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_35");
          TIMERA = 0;
          $.print_help_s3 = 11;
        }
      }
    }
    if ($.player_in_van_for_first_time == 1) {
      if ($.print_help_s3 == 11) {
        if (TIMERA > 9500) {
          Text.PrintHelp("TEX3_36");
          TIMERA = 0;
          $.print_help_s3 = 12;
        }
      }
    }






    ////////////////// CHECKING if heli in range ////////////////
    //warning

    if ($.player_in_van_for_first_time == 1) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if (!($.player1.locateAnyMeansCar2D($.rc_goblin_s3, 200.0, 200.0, false /* FALSE */))) {
          if ($.player1.locateAnyMeansCar2D($.rc_goblin_s3, 249.0, 249.0, false /* FALSE */)) {
            Text.PrintNow("TEX3_20", 1000, 1);
          }
        }
      }
    }





    ////////////////// ADDING AND REMOVING BLIPS //////////////////

    //get players coords when they have a bomb

    if (!(Car.IsDead($.rc_goblin_s3))) {
      if ($.player1.isInRemoteMode()) {
        const _res487 = $.timer_bomb1_s3.getCoordinates();
$.current_bomb1_pickupx_s3 = _res487.x;
$.current_bomb1_pickupy_s3 = _res487.y;
$.current_bomb1_pickupz_s3 = _res487.z;
        const _res488 = $.timer_bomb2_s3.getCoordinates();
$.current_bomb2_pickupx_s3 = _res488.x;
$.current_bomb2_pickupy_s3 = _res488.y;
$.current_bomb2_pickupz_s3 = _res488.z;
        const _res489 = $.timer_bomb3_s3.getCoordinates();
$.current_bomb3_pickupx_s3 = _res489.x;
$.current_bomb3_pickupy_s3 = _res489.y;
$.current_bomb3_pickupz_s3 = _res489.z;
        const _res490 = $.timer_bomb4_s3.getCoordinates();
$.current_bomb4_pickupx_s3 = _res490.x;
$.current_bomb4_pickupy_s3 = _res490.y;
$.current_bomb4_pickupz_s3 = _res490.z;


      }
    }




    /* bomb states

    bomb_state 	= 0  -	grounded
    = 1	 -	on copter
    = 2	 -	has been dropped
    = 3	 -	in 'target zone'

    */


    //bomb1

    if ($.bomb1_state == 2) {
      if ($.timer_bomb1_s3.hasCollidedWithAnything()) {
        $.timer_bomb1_s3.setDynamic(false /* FALSE */);
        $.timer_bomb1_s3.setCollision(false /* FALSE */);
        $.timer_bomb1_s3.setRecordsCollisions(false /* FALSE */);
        $.bomb1_state = 0;
        await check_if_bomb1_has_hit_target();  // SCM GOSUB check_if_bomb1_has_hit_target
        await add_bomb_blips_remove_target_blips();  // SCM GOSUB add_bomb_blips_remove_target_blips



      }
    }

    //bomb2

    if ($.bomb2_state == 2) {
      if ($.timer_bomb2_s3.hasCollidedWithAnything()) {
        $.timer_bomb2_s3.setDynamic(false /* FALSE */);
        $.timer_bomb2_s3.setCollision(false /* FALSE */);
        $.timer_bomb2_s3.setRecordsCollisions(false /* FALSE */);
        $.bomb2_state = 0;
        await check_if_bomb2_has_hit_target();  // SCM GOSUB check_if_bomb2_has_hit_target
        await add_bomb_blips_remove_target_blips();  // SCM GOSUB add_bomb_blips_remove_target_blips


      }
    }

    //bomb3

    if ($.bomb3_state == 2) {
      if ($.timer_bomb3_s3.hasCollidedWithAnything()) {
        $.timer_bomb3_s3.setDynamic(false /* FALSE */);
        $.timer_bomb3_s3.setCollision(false /* FALSE */);
        $.timer_bomb3_s3.setRecordsCollisions(false /* FALSE */);
        $.bomb3_state = 0;
        await check_if_bomb3_has_hit_target();  // SCM GOSUB check_if_bomb3_has_hit_target
        await add_bomb_blips_remove_target_blips();  // SCM GOSUB add_bomb_blips_remove_target_blips


      }
    }

    //bomb4

    if ($.bomb4_state == 2) {
      if ($.timer_bomb4_s3.hasCollidedWithAnything()) {
        $.timer_bomb4_s3.setDynamic(false /* FALSE */);
        $.timer_bomb4_s3.setCollision(false /* FALSE */);
        $.timer_bomb4_s3.setRecordsCollisions(false /* FALSE */);
        $.bomb4_state = 0;
        await check_if_bomb4_has_hit_target();  // SCM GOSUB check_if_bomb4_has_hit_target
        await add_bomb_blips_remove_target_blips();  // SCM GOSUB add_bomb_blips_remove_target_blips


      }
    }





    ////////////////// PICKING UP AND DROPPING BOMBS	//////////////////

    //pickup bomb 1

    if (!(Car.IsDead($.rc_goblin_s3))) {
      if ($.player1.isInRemoteMode()) {
        if ($.bomb2_state == 0 || $.bomb2_state == 3) {
          if ($.bomb3_state == 0 || $.bomb3_state == 3) {
            if ($.bomb4_state == 0 || $.bomb4_state == 3) {
              if ($.bomb1_state < 2) {
                if ($.rc_goblin_s3.locate3D($.current_bomb1_pickupx_s3, $.current_bomb1_pickupy_s3, $.current_bomb1_pickupz_s3, 0.7, 0.7, 0.7, false /* FALSE */) || $.bomb1_state == 1) {
                  const _res491 = $.rc_goblin_s3.getCoordinates();
$.current_goblinx_s3 = _res491.x;
$.current_gobliny_s3 = _res491.y;
$.current_goblinz_s3 = _res491.z;
                  $.timer_bomb1_s3.placeRelativeToCar($.rc_goblin_s3, 0.0, 0.0, -0.4);

                  //start it on first bomb landing
                  if ($.start_timer_on_first_hit == 0) {
                    $.start_timer_on_first_hit = 1;
                    $.timer_s3 = 420000;
                  }
                  $.timer_bomb1_s3.setCollision(false /* FALSE */);
                  $.timer_bomb1_s3.setDynamic(false /* FALSE */);
                  //minimum distance check
                  $.minimum_dist1_s3 = World.GetGroundZFor3DCoord($.current_goblinx_s3, $.current_gobliny_s3, $.current_goblinz_s3);
                  $.bomb1_ready = $.current_goblinz_s3 - $.minimum_dist1_s3;
                  if ($.bomb1_state == 0) {
                    await add_target_blips_remove_bomb_blips();  // SCM GOSUB add_target_blips_remove_bomb_blips
                  }
                  $.bomb1_state = 1;
                  if ($.bomb1_state == 1) {
                    if ($.bomb1_ready > 1.2) {
                      if (Pad.IsInCarFireButtonPressed()) {
                        $.bomb1_state = 2;
                        $.timer_bomb1_s3.setDynamic(true /* TRUE */);
                        $.timer_bomb1_s3.setCollision(true /* TRUE */);
                        $.timer_bomb1_s3.setRecordsCollisions(true /* TRUE */); //add all the collisions to make it drop and record it
                        $.timer_bomb1_s3.sortOutCollisionWithCar($.rc_goblin_s3);
                        $.timer_bomb1_s3.setVelocity(0.0, 0.0, -1.0);
                      }
                    }
                  }


                }
              }
            }
          }
        }
      }
    }



    //pickup bomb 2

    if (!(Car.IsDead($.rc_goblin_s3))) {
      if ($.player1.isInRemoteMode()) {
        if ($.bomb1_state == 0 || $.bomb1_state == 3) {
          if ($.bomb3_state == 0 || $.bomb3_state == 3) {
            if ($.bomb4_state == 0 || $.bomb4_state == 3) {
              if ($.bomb2_state < 2) {
                if ($.rc_goblin_s3.locate3D($.current_bomb2_pickupx_s3, $.current_bomb2_pickupy_s3, $.current_bomb2_pickupz_s3, 0.7, 0.7, 0.7, false /* FALSE */) || $.bomb2_state == 1) {
                  const _res492 = $.rc_goblin_s3.getCoordinates();
$.current_goblinx_s3 = _res492.x;
$.current_gobliny_s3 = _res492.y;
$.current_goblinz_s3 = _res492.z;
                  $.timer_bomb2_s3.placeRelativeToCar($.rc_goblin_s3, 0.0, 0.0, -0.4);

                  //start it on first bomb landing
                  if ($.start_timer_on_first_hit == 0) {
                    $.start_timer_on_first_hit = 1;
                    $.timer_s3 = 420000;
                  }
                  $.timer_bomb2_s3.setCollision(false /* FALSE */);
                  $.timer_bomb2_s3.setDynamic(false /* FALSE */);
                  $.minimum_dist2_s3 = World.GetGroundZFor3DCoord($.current_goblinx_s3, $.current_gobliny_s3, $.current_goblinz_s3);
                  $.bomb2_ready = $.current_goblinz_s3 - $.minimum_dist2_s3;


                  if ($.bomb2_state == 0) {
                    await add_target_blips_remove_bomb_blips();  // SCM GOSUB add_target_blips_remove_bomb_blips
                  }
                  $.bomb2_state = 1;
                  if ($.bomb2_state == 1) {
                    if ($.bomb2_ready > 1.2) {
                      if (Pad.IsInCarFireButtonPressed()) {
                        $.bomb2_state = 2;
                        $.timer_bomb2_s3.setRecordsCollisions(true /* TRUE */);
                        $.timer_bomb2_s3.setDynamic(true /* TRUE */);
                        $.timer_bomb2_s3.setCollision(true /* TRUE */);
                        $.timer_bomb2_s3.sortOutCollisionWithCar($.rc_goblin_s3);
                        //if +ve subtract from -0.6
                        $.timer_bomb2_s3.setVelocity(0.0, 0.0, -1.0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //pickup bomb 3

    if (!(Car.IsDead($.rc_goblin_s3))) {
      if ($.player1.isInRemoteMode()) {
        if ($.bomb1_state == 0 || $.bomb1_state == 3) {
          if ($.bomb2_state == 0 || $.bomb2_state == 3) {
            if ($.bomb4_state == 0 || $.bomb4_state == 3) {
              if ($.bomb3_state < 2) {
                if ($.rc_goblin_s3.locate3D($.current_bomb3_pickupx_s3, $.current_bomb3_pickupy_s3, $.current_bomb3_pickupz_s3, 0.7, 0.7, 0.7, false /* FALSE */) || $.bomb3_state == 1) {
                  const _res493 = $.rc_goblin_s3.getCoordinates();
$.current_goblinx_s3 = _res493.x;
$.current_gobliny_s3 = _res493.y;
$.current_goblinz_s3 = _res493.z;
                  $.timer_bomb3_s3.placeRelativeToCar($.rc_goblin_s3, 0.0, 0.0, -0.4);

                  //start it on first bomb landing
                  if ($.start_timer_on_first_hit == 0) {
                    $.start_timer_on_first_hit = 1;
                    $.timer_s3 = 420000;
                  }
                  $.timer_bomb3_s3.setCollision(false /* FALSE */);
                  $.timer_bomb3_s3.setDynamic(false /* FALSE */);
                  $.minimum_dist3_s3 = World.GetGroundZFor3DCoord($.current_goblinx_s3, $.current_gobliny_s3, $.current_goblinz_s3);
                  $.bomb3_ready = $.current_goblinz_s3 - $.minimum_dist3_s3;
                  if ($.bomb3_state == 0) {
                    await add_target_blips_remove_bomb_blips();  // SCM GOSUB add_target_blips_remove_bomb_blips
                  }
                  $.bomb3_state = 1;
                  if ($.bomb3_state == 1) {
                    if ($.bomb3_ready > 1.2) {
                      if (Pad.IsInCarFireButtonPressed()) {
                        $.bomb3_state = 2;
                        $.timer_bomb3_s3.setRecordsCollisions(true /* TRUE */);
                        $.timer_bomb3_s3.setDynamic(true /* TRUE */);
                        $.timer_bomb3_s3.setCollision(true /* TRUE */);
                        $.timer_bomb3_s3.sortOutCollisionWithCar($.rc_goblin_s3);
                        $.timer_bomb3_s3.setVelocity(0.0, 0.0, -1.0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }




    //pickup bomb 4

    if (!(Car.IsDead($.rc_goblin_s3))) {
      if ($.player1.isInRemoteMode()) {
        if ($.bomb1_state == 0 || $.bomb1_state == 3) {
          if ($.bomb2_state == 0 || $.bomb2_state == 3) {
            if ($.bomb3_state == 0 || $.bomb3_state == 3) {
              if ($.bomb4_state < 2) {
                if ($.rc_goblin_s3.locate3D($.current_bomb4_pickupx_s3, $.current_bomb4_pickupy_s3, $.current_bomb4_pickupz_s3, 0.7, 0.7, 0.7, false /* FALSE */) || $.bomb4_state == 1) {
                  const _res494 = $.rc_goblin_s3.getCoordinates();
$.current_goblinx_s3 = _res494.x;
$.current_gobliny_s3 = _res494.y;
$.current_goblinz_s3 = _res494.z;
                  $.timer_bomb4_s3.placeRelativeToCar($.rc_goblin_s3, 0.0, 0.0, -0.4);

                  //start it on first bomb landing
                  if ($.start_timer_on_first_hit == 0) {
                    $.start_timer_on_first_hit = 1;
                    $.timer_s3 = 420000;
                  }
                  $.timer_bomb4_s3.setCollision(false /* FALSE */);
                  $.timer_bomb4_s3.setDynamic(false /* FALSE */);
                  $.minimum_dist4_s3 = World.GetGroundZFor3DCoord($.current_goblinx_s3, $.current_gobliny_s3, $.current_goblinz_s3);
                  $.bomb4_ready = $.current_goblinz_s3 - $.minimum_dist4_s3;
                  if ($.bomb4_state == 0) {
                    await add_target_blips_remove_bomb_blips();  // SCM GOSUB add_target_blips_remove_bomb_blips
                  }
                  $.bomb4_state = 1;
                  if ($.bomb4_state == 1) {
                    if ($.bomb4_ready > 1.2) {
                      if (Pad.IsInCarFireButtonPressed()) {
                        $.bomb4_state = 2;
                        $.timer_bomb4_s3.setRecordsCollisions(true /* TRUE */);
                        $.timer_bomb4_s3.setDynamic(true /* TRUE */);
                        $.timer_bomb4_s3.setCollision(true /* TRUE */);
                        $.timer_bomb4_s3.sortOutCollisionWithCar($.rc_goblin_s3);
                        $.timer_bomb4_s3.setVelocity(0.0, 0.0, -1.0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    //bring up location markers

    if ($.player_in_van_for_first_time == 1) {
      if (!($.target1_hit == 1)) {
        $.timer_bomb1_s3.locate3D($.target1x_s3, $.target1y_s3, $.target1z_s3, 3.5, 3.5, 3.5, true /* TRUE */);
      }
      if (!($.target2_hit == 1)) {
        $.timer_bomb1_s3.locate3D($.target2x_s3, $.target2y_s3, $.target2z_s3, 3.5, 3.5, 3.5, true /* TRUE */);
      }
      if (!($.target3_hit == 1)) {
        $.timer_bomb1_s3.locate3D($.target3x_s3, $.target3y_s3, $.target3z_s3, 3.5, 3.5, 3.5, true /* TRUE */);
      }
      if (!($.target4_hit == 1)) {
        $.timer_bomb1_s3.locate3D($.target4x_s3, $.target4y_s3, $.target4z_s3, 3.5, 3.5, 3.5, true /* TRUE */);
      }


    }
    //////////////////////////////	BUILDERS IDLE ANIMS	//////////////////////////////////


    if (!(Char.IsDead($.builder1))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder1attack == 0) {
          $.builder1.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder2))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder2attack == 0) {
          $.builder2.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder5))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder5attack == 0) {
          $.builder5.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder6))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder6attack == 0) {
          $.builder6.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder7))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder7attack == 0) {
          $.builder7.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder9))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder9attack == 0) {
          $.builder9.setWaitState(13 /* WAITSTATE_LOOK_ABOUT */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder10))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder10attack == 0) {
          $.builder10.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder11))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder11attack == 0) {
          $.builder11.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder12))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder12attack == 0) {
          $.builder12.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }


    if (!(Char.IsDead($.builder13))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder13attack == 0) {
          $.builder13.setWaitState(25 /* WAITSTATE_USE_ATM */, 300000);
        }
      }
    }





    //////////////////////////////	BUILDERS ATTACK COPTER	//////////////////////////////////




    if (!(Char.IsDead($.builder1))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder1.locateAnyMeansCar3D($.rc_goblin_s3, 7.0, 7.0, 6.0, false /* FALSE */)) {
          $.builder1.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder1.setObjDestroyCar($.rc_goblin_s3);
          $.builder1.setRunning(true /* TRUE */);
          $.builder1attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder2))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder2.locateAnyMeansCar3D($.rc_goblin_s3, 12.0, 12.0, 6.0, false /* FALSE */)) {
          $.builder2.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder2.setObjDestroyCar($.rc_goblin_s3);
          $.builder2.setRunning(true /* TRUE */);
          $.builder2attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder3))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder3.locateAnyMeansCar3D($.rc_goblin_s3, 10.0, 10.0, 3.0, false /* FALSE */)) {
          $.builder3.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder3.setObjDestroyCar($.rc_goblin_s3);
          $.builder3.setRunning(true /* TRUE */);
          $.builder3attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder4))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder4.locateAnyMeansCar3D($.rc_goblin_s3, 10.0, 10.0, 3.0, false /* FALSE */)) {
          $.builder4.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder4.setObjDestroyCar($.rc_goblin_s3);
          $.builder4.setRunning(true /* TRUE */);
        }
      }
    }


    if (!(Char.IsDead($.builder5))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder5.locateAnyMeansCar3D($.rc_goblin_s3, 7.0, 7.0, 5.0, false /* FALSE */)) {
          $.builder5.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder5.setObjDestroyCar($.rc_goblin_s3);
          $.builder5.setRunning(true /* TRUE */);
          $.builder5attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder6))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder6.locateAnyMeansCar3D($.rc_goblin_s3, 15.0, 15.0, 4.0, false /* FALSE */)) {
          $.builder6.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder6.setObjDestroyCar($.rc_goblin_s3);
          $.builder6.setRunning(true /* TRUE */);
          $.builder6attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder7))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder7.locateAnyMeansCar3D($.rc_goblin_s3, 15.0, 15.0, 3.0, false /* FALSE */)) {
          $.builder7.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder7.setObjDestroyCar($.rc_goblin_s3);
          $.builder7.setRunning(true /* TRUE */);
          $.builder7attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder8))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder8.locateAnyMeansCar3D($.rc_goblin_s3, 15.0, 15.0, 6.0, false /* FALSE */)) {
          $.builder8.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder8.setObjDestroyCar($.rc_goblin_s3);
          $.builder8.setRunning(true /* TRUE */);
          $.builder8attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder9))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder9.locateAnyMeansCar3D($.rc_goblin_s3, 18.0, 18.0, 3.0, false /* FALSE */)) {
          $.builder9.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder9.setObjDestroyCar($.rc_goblin_s3);
          $.builder9.setRunning(true /* TRUE */);
          $.builder9attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder10))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder10.locateAnyMeansCar3D($.rc_goblin_s3, 15.0, 15.0, 6.0, false /* FALSE */)) {
          $.builder10.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder10.setObjDestroyCar($.rc_goblin_s3);
          $.builder10.setRunning(true /* TRUE */);
          $.builder10attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder11))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder11.locateAnyMeansCar3D($.rc_goblin_s3, 15.0, 15.0, 4.0, false /* FALSE */)) {
          $.builder11.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder11.setObjDestroyCar($.rc_goblin_s3);
          $.builder11.setRunning(true /* TRUE */);
          $.builder11attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder12))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder12.locateAnyMeansCar3D($.rc_goblin_s3, 15.0, 15.0, 6.0, false /* FALSE */)) {
          $.builder12.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder12.setObjDestroyCar($.rc_goblin_s3);
          $.builder12.setRunning(true /* TRUE */);
          $.builder12attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.builder13))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.builder13.locateAnyMeansCar3D($.rc_goblin_s3, 10.0, 10.0, 4.0, false /* FALSE */)) {
          $.builder13.setWaitState(0 /* WAITSTATE_FALSE */, 300);
          $.builder13.setObjDestroyCar($.rc_goblin_s3);
          $.builder13.setRunning(true /* TRUE */);
          $.builder13attack = 1;
        }
      }
    }


    if (!(Char.IsDead($.security1_s3))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.security1_s3.locateAnyMeansCar3D($.rc_goblin_s3, 18.0, 18.0, 3.0, false /* FALSE */)) {
          $.security1_s3.setObjDestroyCar($.rc_goblin_s3);
        }
      }
    }


    if (!(Char.IsDead($.security2_s3))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.security2_s3.locateAnyMeansCar3D($.rc_goblin_s3, 18.0, 18.0, 3.0, false /* FALSE */)) {
          $.security2_s3.setObjDestroyCar($.rc_goblin_s3);
          $.security2_s3attacked = 1;
        }
      }
    }


    if (!(Char.IsDead($.security3_s3))) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if ($.security3_s3.locateAnyMeansCar3D($.rc_goblin_s3, 18.0, 18.0, 3.0, false /* FALSE */)) {
          $.security3_s3.setObjDestroyCar($.rc_goblin_s3);
        }
      }
    }



    //////////////////////////////	MISSION AUDIO	//////////////////////////////////


    ///////////////////////////////////////builder1


    if (!(Char.IsDead($.builder1))) {
      if ($.builder1attack == 1) {
        if ($.builder1played == 0) {
          if ($.playingaudio_s3 == 0) {
            $.playingaudio_s3 = 1;
            $.playingaudio_s3state = 0;
          }


        }
      }

      //playing what the...
      if ($.playingaudio_s3 == 1) {
        if ($.playingaudio_s3state == 0) {
          Audio.LoadMissionAudio(1, "TEX3_2" as any);
          $.playingaudio_s3state = 1;
        }
        else {
          if ($.playingaudio_s3state == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              $.playingaudio_s3state = 2;
            }
          }
          if ($.playingaudio_s3state == 2) {
            Audio.PlayMissionAudio(1);
            $.playingaudio_s3state = 3;
          }
          if ($.playingaudio_s3state == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              $.playingaudio_s3state = 0;
              $.playingaudio_s3 = 0;
              Audio.ClearMissionAudio(1);
              $.builder1played = 1;
            }
          }
        }
      }


    }
    else {
      if ($.playingaudio_s3 == 1) {
        $.playingaudio_s3state = 0;
        $.playingaudio_s3 = 0;
        Audio.ClearMissionAudio(1);
        $.builder1played = 1;
      }


    }



    ///////////////////////////////////////builder3


    if (!(Char.IsDead($.builder3))) {
      if ($.builder3attack == 1) {
        if ($.builder3played == 0) {
          if ($.playingaudio_s3 == 0) {
            $.playingaudio_s3 = 2;
            $.playingaudio_s3state = 0;
          }


        }
      }

      //playing what the was that...
      if ($.playingaudio_s3 == 2) {
        if ($.playingaudio_s3state == 0) {
          Audio.LoadMissionAudio(1, "TEX3_1" as any);
          $.playingaudio_s3state = 1;
        }
        else {
          if ($.playingaudio_s3state == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              $.playingaudio_s3state = 2;
            }
          }
          if ($.playingaudio_s3state == 2) {
            Audio.PlayMissionAudio(1);
            $.playingaudio_s3state = 3;
          }
          if ($.playingaudio_s3state == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              $.playingaudio_s3state = 0;
              $.playingaudio_s3 = 0;
              Audio.ClearMissionAudio(1);
              $.builder3played = 1;
            }
          }
        }
      }


    }
    else {
      if ($.playingaudio_s3 == 2) {
        $.playingaudio_s3state = 0;
        $.playingaudio_s3 = 0;
        Audio.ClearMissionAudio(1);
        $.builder3played = 1;
      }


    }

    ///////////////////////////////////////builder7


    if (!(Char.IsDead($.builder7))) {
      if ($.builder7attack == 1) {
        if ($.builder7played == 0) {
          if ($.playingaudio_s3 == 0) {
            $.playingaudio_s3 = 3;
            $.playingaudio_s3state = 0;
          }


        }
      }

      //playing want me to drill you
      if ($.playingaudio_s3 == 3) {
        if ($.playingaudio_s3state == 0) {
          Audio.LoadMissionAudio(1, "TEX3_3" as any);
          $.playingaudio_s3state = 1;
        }
        else {
          if ($.playingaudio_s3state == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              $.playingaudio_s3state = 2;
            }
          }
          if ($.playingaudio_s3state == 2) {
            Audio.PlayMissionAudio(1);
            $.playingaudio_s3state = 3;
          }
          if ($.playingaudio_s3state == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              $.playingaudio_s3state = 0;
              $.playingaudio_s3 = 0;
              Audio.ClearMissionAudio(1);
              $.builder7played = 1;
            }
          }
        }
      }


    }
    else {
      if ($.playingaudio_s3 == 3) {
        $.playingaudio_s3state = 0;
        $.playingaudio_s3 = 0;
        Audio.ClearMissionAudio(1);
        $.builder7played = 1;
      }


    }

    ///////////////////////////////////////builder13


    if (!(Char.IsDead($.builder13))) {
      if ($.builder13attack == 1) {
        if ($.builder13played == 0) {
          if ($.playingaudio_s3 == 0) {
            $.playingaudio_s3 = 4;
            $.playingaudio_s3state = 0;
          }


        }
      }

      //playing death destruction
      if ($.playingaudio_s3 == 4) {
        if ($.playingaudio_s3state == 0) {
          Audio.LoadMissionAudio(1, "TEX3_4" as any);
          $.playingaudio_s3state = 1;
        }
        else {
          if ($.playingaudio_s3state == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              $.playingaudio_s3state = 2;
            }
          }
          if ($.playingaudio_s3state == 2) {
            Audio.PlayMissionAudio(1);
            $.playingaudio_s3state = 3;
          }
          if ($.playingaudio_s3state == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              $.playingaudio_s3state = 0;
              $.playingaudio_s3 = 0;
              Audio.ClearMissionAudio(1);
              $.builder13played = 1;
            }
          }
        }
      }


    }
    else {
      if ($.playingaudio_s3 == 4) {
        $.playingaudio_s3state = 0;
        $.playingaudio_s3 = 0;
        Audio.ClearMissionAudio(1);
        $.builder13played = 1;
      }


    }

    ///////////////////////////////////////first security guard


    if (!(Char.IsDead($.builder9))) {
      if ($.builder9attack == 1) {
        if ($.builder9played == 0) {
          if ($.playingaudio_s3 == 0) {
            $.playingaudio_s3 = 5;
            $.playingaudio_s3state = 0;
          }


        }
      }

      //I gotta lay off those pills
      if ($.playingaudio_s3 == 5) {
        if ($.playingaudio_s3state == 0) {
          Audio.LoadMissionAudio(1, "TEX3_8" as any);
          $.playingaudio_s3state = 1;
        }
        else {
          if ($.playingaudio_s3state == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              $.playingaudio_s3state = 2;
            }
          }
          if ($.playingaudio_s3state == 2) {
            Audio.PlayMissionAudio(1);
            $.playingaudio_s3state = 3;
          }
          if ($.playingaudio_s3state == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              $.playingaudio_s3state = 0;
              $.playingaudio_s3 = 0;
              Audio.ClearMissionAudio(1);
              $.builder9played = 1;
            }
          }
        }
      }


    }
    else {
      if ($.playingaudio_s3 == 5) {
        $.playingaudio_s3state = 0;
        $.playingaudio_s3 = 0;
        Audio.ClearMissionAudio(1);
        $.builder9played = 1;
      }


    }

    ///////////////////////////////////////second security guard


    if (!(Char.IsDead($.security2_s3))) {
      if ($.security2_s3attacked == 1) {
        if ($.security2_s3played == 0) {
          if ($.playingaudio_s3 == 0) {
            $.playingaudio_s3 = 6;
            $.playingaudio_s3state = 0;
          }


        }
      }

      //some guy messing around i'll bust your toy
      if ($.playingaudio_s3 == 6) {
        if ($.playingaudio_s3state == 0) {
          Audio.LoadMissionAudio(1, "TEX3_6" as any);
          $.playingaudio_s3state = 1;
        }
        else {
          if ($.playingaudio_s3state == 1) {
            if (Audio.HasMissionAudioLoaded(1)) {
              $.playingaudio_s3state = 2;
            }
          }
          if ($.playingaudio_s3state == 2) {
            Audio.PlayMissionAudio(1);
            $.playingaudio_s3state = 3;
          }
          if ($.playingaudio_s3state == 3) {
            if (Audio.HasMissionAudioFinished(1)) {
              $.playingaudio_s3state = 0;
              $.playingaudio_s3 = 0;
              Audio.ClearMissionAudio(1);
              $.security2_s3played = 1;
            }
          }
        }
      }


    }
    else {
      if ($.playingaudio_s3 == 6) {
        $.playingaudio_s3state = 0;
        $.playingaudio_s3 = 0;
        Audio.ClearMissionAudio(1);
        $.security2_s3played = 1;
      }


    }




    //////////////////////////////	MISSION TIMER	//////////////////////////////////

    //display on screen

    if ($.start_timer_on_first_hit == 1) {
      if (!($.timer_s3 == 0)) {
        Hud.DisplayTimerWithString($.$id.timer_s3, 1 /* TIMER_DOWN */, "RACES"); //Time:
        Text.PrintNow("TEX3_15", 7000, 1);
        $.start_timer_on_first_hit = 2;
      }
    }


    //////////////////////////////	MISSION BOMB TEXT	//////////////////////////////////



    //printing messages "x more to go etc...."

    //3 more to go

    if ($.x_bombs_to_go == 0) {
      $.three_more_to_go1 = $.target1_hit + $.target2_hit;
      $.three_more_to_go2 = $.target3_hit + $.target4_hit;
      $.three_more_to_go = $.three_more_to_go1 + $.three_more_to_go2;
      if ($.three_more_to_go == 1) {
        $.targets_to_go = 3;
        $.x_bombs_to_go = 1;
        Text.PrintNow("TEX3_12", 5000, 2);
      }
    }

    //2 more to go

    if ($.x_bombs_to_go == 1) {
      $.two_more_to_go1 = $.target1_hit + $.target2_hit;
      $.two_more_to_go2 = $.target3_hit + $.target4_hit;
      $.two_more_to_go = $.two_more_to_go1 + $.two_more_to_go2;
      if ($.two_more_to_go == 2) {
        $.targets_to_go = 2;
        $.x_bombs_to_go = 2;
        Text.PrintNow("TEX3_13", 5000, 2);
      }
    }

    //1 more to go

    if ($.x_bombs_to_go == 2) {
      $.one_more_to_go1 = $.target1_hit + $.target2_hit;
      $.one_more_to_go2 = $.target3_hit + $.target4_hit;
      $.one_more_to_go = $.one_more_to_go1 + $.one_more_to_go2;
      if ($.one_more_to_go == 3) {
        $.targets_to_go = 1;
        $.x_bombs_to_go = 3;
        Text.PrintNow("TEX3_14", 5000, 2);
      }
    }




    //////////////////////////////	MISSION PASS/FAIL CONDITIONS	//////////////////////////////////

    //mission passed

    if ($.target1_hit == 1 && $.target2_hit == 1 && $.target3_hit == 1 && $.target4_hit == 1) {
      // SCM GOTO → demolish_building (not lowered; manual jump required)
      throw new Error("unresolved GOTO demolish_building"); // fallback: would break linear control flow


    }


    //mission failed - out of time

    if ($.timer_s3 < 1) {
      if ($.start_timer_on_first_hit == 2) {
        Text.PrintNow("TEX3_17", 5000, 1);
        // SCM GOTO → mission_serg2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_serg2_failed"); // fallback: would break linear control flow
      }
    }

    //mission failed - rcgoblin has been destroyed

    if (Car.IsDead($.rc_goblin_s3)) {
      if ($.player_in_van_for_first_time == 1) {
        Text.PrintNow("TEX3_18", 5000, 2);
        // SCM GOTO → mission_serg2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_serg2_failed"); // fallback: would break linear control flow
      }
    }

    //out of range

    if ($.player_in_van_for_first_time == 1) {
      if (!(Car.IsDead($.rc_goblin_s3))) {
        if (!($.player1.locateAnyMeansCar2D($.rc_goblin_s3, 250.0, 250.0, false /* FALSE */))) {
          Text.PrintNow("TEX3_21", 5000, 1);
          // SCM GOTO → mission_serg2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_serg2_failed"); // fallback: would break linear control flow
        }
      }
    }

    //bomb in water

    if ($.player_in_van_for_first_time == 1) {
      if ($.timer_bomb1_s3.isInWater() || $.timer_bomb2_s3.isInWater() || $.timer_bomb3_s3.isInWater() || $.timer_bomb4_s3.isInWater()) {
        Text.PrintNow("TEX3_19", 5000, 1);
        // SCM GOTO → mission_serg2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_serg2_failed"); // fallback: would break linear control flow
      }
    }

    //player destroys van before he gets in

    if ($.player_in_van_for_first_time == 0) {
      if ($.vancreated_s3 == 1) {
        if (Car.IsDead($.van_s3)) {
          Text.PrintNow("TEX3_31", 5000, 1);
          // SCM GOTO → mission_serg2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_serg2_failed"); // fallback: would break linear control flow
        }
      }
    }



  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////	   Demolish Building		/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////



async function demolish_building() {


  Hud.ClearTimer($.$id.timer_s3);
  Hud.ClearCounter($.$id.targets_to_go);


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);



  Streaming.MarkModelAsNoLongerNeeded(dynamite);
  Streaming.MarkModelAsNoLongerNeeded(HAMMER);
  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(GDa);


  $.builder1.delete();
  $.builder2.delete();
  $.builder3.delete();
  $.builder4.delete();
  $.builder5.delete();
  $.builder6.delete();
  $.builder7.delete();
  $.builder8.delete();
  $.builder9.delete();
  $.builder10.delete();
  $.security1_s3.delete();
  $.security2_s3.delete();
  $.security3_s3.delete();


  if (!(Car.IsDead($.van_s3))) {
    $.van_s3.freezePosition(false /* FALSE */);
  }



  Camera.SetFixedPosition(27.198, -352.651, 12.977, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(28.1425, -352.8275, 13.2567, 2 /* JUMP_CUT */);


  Streaming.RequestModel(bldngst2meshdam);


  while (!(Streaming.HasModelLoaded(bldngst2meshdam))) {
    await asyncWait(0);
  }


  Camera.Shake(2500);


  Fx.AddExplosionNoSound(69.420, -371.249, 30.28, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(69.420, -371.249, 30.28, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(69.420, -371.249, 30.28, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(69.420, -371.249, 30.28, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosion(71.554, -356.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 6 /* EXPLOSION_HELI */);


  await asyncWait(10);


  World.SwapNearestBuildingModel(117.991, -362.461, 10.179, 80.0, bldngst2mesh, bldngst2meshdam);


  await asyncWait(250);


  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(72.875, -360.392, 23.922, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(71.554, -356.053, 24.468, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(73.180, -368.699, 13.236, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(73.180, -368.699, 13.236, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(73.180, -368.699, 13.236, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(72.875, -361.392, 23.922, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);
  await asyncWait(105);


  Fx.AddExplosionNoSound(73.180, -368.699, 13.236, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(73.180, -368.699, 13.236, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(73.180, -368.699, 13.236, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(73.180, -368.699, 13.236, 6 /* EXPLOSION_HELI */);


  Streaming.MarkModelAsNoLongerNeeded(bldngst2meshdam);


  await asyncWait(105);
  await asyncWait(105);


  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(71.554, -354.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(69.420, -371.249, 30.28, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(69.420, -371.249, 30.28, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(69.420, -371.249, 30.28, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(69.420, -371.249, 30.28, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);


  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(73.180, -366.699, 13.236, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 73.180, -366.699, 13.236, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);


  await asyncWait(105);


  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(71.554, -356.053, 24.468, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(69.420, -370.249, 30.28, 6 /* EXPLOSION_HELI */);


  await asyncWait(300);


  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(72.875, -361.392, 23.922, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(72.875, -361.392, 23.922, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 69.420, -370.249, 30.28, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);


  await asyncWait(105);


  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(71.554, -354.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(71.554, -354.053, 24.468, 6 /* EXPLOSION_HELI */);


  await asyncWait(400);


  Fx.AddExplosion(67.421, -374.562, 25.85, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(67.421, -374.562, 25.85, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(67.421, -374.562, 25.85, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(67.421, -374.562, 25.85, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(71.875, -360.392, 30.092, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(71.875, -360.392, 30.092, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.875, -360.392, 30.092, 6 /* EXPLOSION_HELI */);



  await asyncWait(300);


  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(73.180, -366.699, 13.236, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 6 /* EXPLOSION_HELI */);


  await asyncWait(300);


  Fx.AddExplosionNoSound(69.224, -371.249, 26.28, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(69.224, -371.249, 26.28, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(69.224, -371.249, 26.28, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 69.224, -371.249, 26.28, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 5000);


  await asyncWait(200);



  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(72.875, -360.392, 23.922, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(72.875, -360.392, 23.922, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 72.875, -360.392, 23.922, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 5000);
  await asyncWait(100);



  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(73.180, -366.699, 13.236, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(73.180, -366.699, 13.236, 6 /* EXPLOSION_HELI */);


  await asyncWait(50);


  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(71.554, -356.053, 24.468, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(71.554, -356.053, 24.468, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 71.554, -356.053, 24.468, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 5000);


  await asyncWait(250);


  Streaming.RequestModel(bldngst2mesh);


  while (!(Streaming.HasModelLoaded(bldngst2mesh))) {
    await asyncWait(0);
  }

  ///////////////////////////////////////////////SECOND EXPLOSION


  World.SwapNearestBuildingModel(117.991, -362.461, 10.179, 80.0, bldngst2meshdam, bldngst2mesh);
  Camera.SetFixedPosition(95.427841, -431.41298, 66.258308, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(96.135971, -430.912842, 65.759521, 2 /* JUMP_CUT */);
  World.RemoveAllScriptFires();



  Streaming.MarkModelAsNoLongerNeeded(bldngst2mesh);


  Streaming.RequestModel(bldngst2meshdam);


  while (!(Streaming.HasModelLoaded(bldngst2meshdam))) {
    await asyncWait(0);
  }



  Camera.Shake(2500);


  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(138.234, -398.796, 49.419, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(146.365, -401.270, 45.175, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(146.365, -401.270, 45.175, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(146.365, -401.270, 45.175, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(145.540, -400.172, 32.071, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(145.540, -400.172, 32.071, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(145.540, -400.172, 32.071, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(145.540, -400.172, 32.071, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);


  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(130.865, -399.556, 45.108, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 6 /* EXPLOSION_HELI */);


  await asyncWait(50);


  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(138.234, -398.796, 49.419, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);
  await asyncWait(105);


  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(138.693, -399.751, 45.107, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(138.693, -399.751, 45.107, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(138.693, -399.751, 45.107, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(139.529, -400.04, 34.706, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(139.529, -397.04, 34.706, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(139.529, -397.04, 34.706, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(139.529, -397.04, 34.706, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosion(135.62, -399.95996, 41.42, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(140.531, -399.216644, 26.636, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(139.529, -400.04, 34.706, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(139.529, -397.04, 34.706, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(139.529, -397.04, 34.706, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(139.529, -397.04, 34.706, 6 /* EXPLOSION_HELI */);


  World.SwapNearestBuildingModel(117.991, -362.461, 10.179, 80.0, bldngst2mesh, bldngst2meshdam);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 135.271, -390.00, 31.704, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);


  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(135.271, -390.00, 31.704, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(130.865, -399.556, 45.108, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(130.865, -399.556, 45.108, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 135.271, -390.00, 31.704, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);


  Streaming.MarkModelAsNoLongerNeeded(bldngst2meshdam);


  await asyncWait(105);
  await asyncWait(105);


  Fx.AddExplosionNoSound(138.693, -399.751, 45.107, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(138.693, -399.751, 45.107, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(138.693, -399.751, 45.107, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(138.693, -399.751, 45.107, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);


  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);


  await asyncWait(100);


  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(135.62, -399.95996, 41.42, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 6 /* EXPLOSION_HELI */);


  await asyncWait(250);


  Fx.AddExplosion(140.531, -399.216644, 26.636, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 139.529, -400.04, 34.706, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);


  await asyncWait(105);
  await asyncWait(105);


  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(138.234, -398.796, 49.419, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(138.234, -398.796, 49.419, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);
  await asyncWait(105);


  await asyncWait(50);


  Fx.AddExplosionNoSound(139.529, -400.04, 34.706, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(139.529, -397.04, 34.706, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(139.529, -397.04, 34.706, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(139.529, -397.04, 34.706, 6 /* EXPLOSION_HELI */);


  await asyncWait(250);


  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.271, -390.00, 31.704, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(130.865, -399.556, 45.108, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(135.62, -399.95996, 41.42, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(135.62, -399.95996, 41.42, 6 /* EXPLOSION_HELI */);


  await asyncWait(50);


  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(140.531, -399.216644, 26.636, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 130.865, -399.556, 45.108, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 5000);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 139.529, -400.04, 34.706, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 5000);


  await asyncWait(100);
  ////////////////////////////////////////////



  ///////////////////////////////////////////////THIRD EXPLOSION


  Streaming.RequestModel(bldngst2mesh);


  while (!(Streaming.HasModelLoaded(bldngst2mesh))) {
    await asyncWait(0);
  }



  World.SwapNearestBuildingModel(117.991, -362.461, 10.179, 80.0, bldngst2meshdam, bldngst2mesh);
  Camera.SetFixedPosition(202.0835, -305.277, 12.0866, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(201.496, -305.966, 12.247, 2 /* JUMP_CUT */);
  World.RemoveAllScriptFires();


  Streaming.MarkModelAsNoLongerNeeded(bldngst2mesh);



  await asyncWait(750);


  Fx.AddExplosionNoSound(168.166, -361.913, 15.148, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.166, -366.913, 15.206, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(164.8878, -340.893311, 16.268, 6 /* EXPLOSION_HELI */);


  Camera.Shake(2000);


  Fx.AddExplosionNoSound(168.166, -361.913, 15.148, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.166, -366.913, 15.206, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(164.8878, -340.893311, 16.268, 6 /* EXPLOSION_HELI */);


  Streaming.RequestModel(bldngst2meshdam);


  while (!(Streaming.HasModelLoaded(bldngst2meshdam))) {
    await asyncWait(0);
  }


  Fx.AddExplosionNoSound(168.166, -361.913, 15.148, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(168.166, -366.913, 15.206, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(164.8878, -340.893311, 16.268, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);


  Fx.AddExplosionNoSound(168.166, -361.913, 15.148, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(168.166, -366.913, 15.206, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(167.0835, -350.057, 16.283, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(164.8878, -340.893311, 16.268, 6 /* EXPLOSION_HELI */);


  await asyncWait(50);


  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosion(143.1712, -335.231, 22.164, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(143.1712, -335.231, 22.164, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(143.1712, -335.231, 22.164, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(168.692, -336.464, 19.678, 6 /* EXPLOSION_HELI */);


  World.SwapNearestBuildingModel(117.991, -362.461, 10.179, 80.0, bldngst2mesh, bldngst2meshdam);


  Fx.AddExplosion(168.166, -361.913, 15.148, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.166, -366.913, 15.206, 11 /* EXPLOSION_HELI_BOMB */);


  Fx.AddExplosionNoSound(164.8878, -340.893311, 16.268, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(168.166, -361.913, 15.148, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(168.166, -366.913, 15.206, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(167.0835, -350.057, 16.283, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(164.8878, -340.893311, 16.268, 6 /* EXPLOSION_HELI */);


  await asyncWait(50);


  Fx.AddExplosionNoSound(168.477, -335.314, 22.231, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.477, -335.314, 22.231, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.477, -335.314, 22.231, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(168.477, -335.314, 22.231, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(169.708, -337.357, 19.075, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(169.708, -337.357, 19.075, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(169.708, -337.357, 19.075, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(169.708, -351.357, 18.075, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(169.708, -351.357, 18.075, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(169.708, -351.357, 18.075, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(169.708, -351.357, 18.075, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);


  await asyncWait(300);


  Fx.AddExplosionNoSound(168.282, -335.453, 18.769, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.282, -335.453, 18.769, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.282, -335.453, 18.769, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosion(168.692, -336.464, 19.678, 6 /* EXPLOSION_HELI */);


  Streaming.MarkModelAsNoLongerNeeded(bldngst2meshdam);


  await asyncWait(105);


  Fx.AddExplosionNoSound(169.708, -351.357, 18.075, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(169.708, -351.357, 18.075, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(169.708, -351.357, 18.075, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(169.708, -351.357, 18.075, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(134.058, -335.45, 22.873, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(134.058, -335.45, 22.873, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(134.058, -335.45, 22.873, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);


  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(158.365, -335.0422, 21.805, 6 /* EXPLOSION_HELI */);


  await asyncWait(300);


  Fx.AddExplosionNoSound(154.231, -335.0846, 20.826, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(154.231, -335.0846, 20.826, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosion(154.231, -335.0846, 20.826, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 154.231, -335.0846, 20.826, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 11000);


  Fx.AddExplosionNoSound(169.335, -337.878, 19.478, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(169.335, -337.878, 19.478, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(169.335, -337.878, 19.478, 6 /* EXPLOSION_HELI */);


  await asyncWait(500);


  Fx.AddExplosion(164.531, -334.908, 19.209, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(164.531, -334.908, 19.209, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(164.531, -334.908, 19.209, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(164.531, -334.908, 19.209, 6 /* EXPLOSION_HELI */);


  await asyncWait(105);
  await asyncWait(105);
  await asyncWait(105);
  await asyncWait(105);


  Fx.AddExplosion(168.692, -336.464, 19.678, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(146.933, -331.328, 23.657, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(146.933, -331.328, 23.657, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(146.933, -331.328, 23.657, 6 /* EXPLOSION_HELI */);


  await asyncWait(300);


  Fx.AddExplosion(169.335, -337.878, 19.478, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(169.335, -337.878, 19.478, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(169.335, -337.878, 19.478, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(168.282, -335.453, 18.769, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.282, -335.453, 18.769, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.282, -335.453, 18.769, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(168.282, -335.453, 18.769, 6 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 168.282, -335.453, 18.769, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 5000);


  await asyncWait(500);


  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 6 /* EXPLOSION_HELI */);


  Fx.AddExplosionNoSound(143.1712, -335.231, 22.164, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(143.1712, -335.231, 22.164, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(143.1712, -335.231, 22.164, 6 /* EXPLOSION_HELI */);


  await asyncWait(500);


  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(168.692, -336.464, 19.678, 6 /* EXPLOSION_HELI */);


  await asyncWait(250);


  Fx.AddExplosionNoSound(164.531, -334.908, 19.209, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosionNoSound(164.531, -334.908, 19.209, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddExplosionNoSound(164.531, -334.908, 19.209, 1 /* EXPLOSION_MOLOTOV */);
  Fx.AddExplosionNoSound(164.531, -334.908, 19.209, 6 /* EXPLOSION_HELI */);


  await asyncWait(50);


  Fx.AddExplosionNoSound(158.365, -335.0422, 21.805, 2 /* EXPLOSION_ROCKET */);
  Fx.AddExplosion(158.365, -335.0422, 21.805, 11 /* EXPLOSION_HELI_BOMB */);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 149.742294, -398.409, 8.639, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 14000);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 168.692, -336.464, 19.678, 16.0, 0.0, 0.1, 10.0, 0, 0, 0, 14000);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 149.742294, -398.409, 8.639, 16.0, 0.0, 0.1, 5.0, 0, 0, 0, 14000);
  Fx.AddMovingParticleEffect(4 /* POBJECT_DARK_SMOKE */, 169.335, -337.878, 19.478, 16.0, 0.0, 0.1, 10.0, 0, 0, 0, 14000);
  await asyncWait(3500);



  // SCM GOTO → mission_serg2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_serg2_passed"); // fallback: would break linear control flow
}


//////////////////////////////////






// Mission Serg failed


async function mission_serg2_failed() {
  $.player1.alterWantedLevel($.wanted_level_s3);
  Text.PrintBig("M_FAIL", 2000, 1);
}






//Mission Serg passed

async function mission_serg2_passed() {


  $.flag_sergio_mission2_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(1000);
  Stat.RegisterMissionPassed("TEX_3");
  Stat.PlayerMadeProgress(1);
  $.sergio_contact_blip.remove();
}






///////////////////////////////////////		GOSUB'S		/////////////////////////////////////


async function add_target_blips_remove_bomb_blips() {



  if (!($.target1_hit == 1)) {
    $.target1_blip_s3 = Blip.AddForCoord($.target1x_s3, $.target1y_s3, $.target1z_s3);
  }


  if (!($.target2_hit == 1)) {
    $.target2_blip_s3 = Blip.AddForCoord($.target2x_s3, $.target2y_s3, $.target2z_s3);
  }


  if (!($.target3_hit == 1)) {
    $.target3_blip_s3 = Blip.AddForCoord($.target3x_s3, $.target3y_s3, $.target3z_s3);
  }


  if (!($.target4_hit == 1)) {
    $.target4_blip_s3 = Blip.AddForCoord($.target4x_s3, $.target4y_s3, $.target4z_s3);
  }


  $.timer_bomb1_blip_s3.remove();


  $.timer_bomb2_blip_s3.remove();


  $.timer_bomb3_blip_s3.remove();


  $.timer_bomb4_blip_s3.remove();


  Text.PrintNow("TEX3_10", 2000, 2); //go drop it at a target
}





async function add_bomb_blips_remove_target_blips() {



  if (!($.bomb1_state == 3)) {
    $.timer_bomb1_blip_s3 = Blip.AddForObject($.timer_bomb1_s3);
  }


  if (!($.bomb2_state == 3)) {
    $.timer_bomb2_blip_s3 = Blip.AddForObject($.timer_bomb2_s3);
  }


  if (!($.bomb3_state == 3)) {
    $.timer_bomb3_blip_s3 = Blip.AddForObject($.timer_bomb3_s3);
  }


  if (!($.bomb4_state == 3)) {
    $.timer_bomb4_blip_s3 = Blip.AddForObject($.timer_bomb4_s3);
  }


  $.target1_blip_s3.remove();


  $.target2_blip_s3.remove();


  $.target3_blip_s3.remove();


  $.target4_blip_s3.remove();
}



/////////////////////// CHECK IF BOMBS HAVE HIT TARGET /////////////////////


async function check_if_bomb1_has_hit_target() {

  //bomb1 checks

  if ($.bomb1_state == 0) {

    //target 1
    if ($.target1_hit == 0) {
      if ($.timer_bomb1_s3.locate3D($.target1x_s3, $.target1y_s3, $.target1z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target1x_s3, $.target1y_s3, $.target1z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb1_state = 3;
        $.target1_hit = 1;
        $.timer_bomb1_s3.setCoordinates(97.574, -381.658, 9.2721);
        $.timer_bomb1_s3.setCollision(false /* FALSE */);
        $.timer_bomb1_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 2
    if ($.target2_hit == 0) {
      if ($.timer_bomb1_s3.locate3D($.target2x_s3, $.target2y_s3, $.target2z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target2x_s3, $.target2y_s3, $.target2z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb1_state = 3;
        $.target2_hit = 1;
        $.timer_bomb1_s3.setCoordinates(156.5491, -348.0284, 18.1517);
        $.timer_bomb1_s3.setCollision(false /* FALSE */);
        $.timer_bomb1_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 3
    if ($.target3_hit == 0) {
      if ($.timer_bomb1_s3.locate3D($.target3x_s3, $.target3y_s3, $.target3z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target3x_s3, $.target3y_s3, $.target3z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb1_state = 3;
        $.target3_hit = 1;
        $.timer_bomb1_s3.setCoordinates(88.1474, -361.8685, 27.376);
        $.timer_bomb1_s3.setCollision(false /* FALSE */);
        $.timer_bomb1_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 4
    if ($.target4_hit == 0) {
      if ($.timer_bomb1_s3.locate3D($.target4x_s3, $.target4y_s3, $.target4z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target4x_s3, $.target4y_s3, $.target4z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb1_state = 3;
        $.target4_hit = 1;
        $.timer_bomb1_s3.setCoordinates(140.0079, -383.1253, 36.6172);
        $.timer_bomb1_s3.setCollision(false /* FALSE */);
        $.timer_bomb1_s3.setDynamic(false /* FALSE */);
      }
    }

    //print you missed a target if player misses all targets when dropping bomb
    if (!($.bomb1_state == 3)) {
      Text.PrintNow("TEX3_8", 3000, 2);
    }



  }
}





async function check_if_bomb2_has_hit_target() {

  //bomb2 checks

  if ($.bomb2_state == 0) {

    //target 1
    if ($.target1_hit == 0) {
      if ($.timer_bomb2_s3.locate3D($.target1x_s3, $.target1y_s3, $.target1z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target1x_s3, $.target1y_s3, $.target1z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb2_state = 3;
        $.target1_hit = 1;
        $.timer_bomb2_s3.setCoordinates(97.574, -381.658, 9.2721);
        $.timer_bomb2_s3.setCollision(false /* FALSE */);
        $.timer_bomb2_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 2
    if ($.target2_hit == 0) {
      if ($.timer_bomb2_s3.locate3D($.target2x_s3, $.target2y_s3, $.target2z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target2x_s3, $.target2y_s3, $.target2z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb2_state = 3;
        $.target2_hit = 1;
        $.timer_bomb2_s3.setCoordinates(156.5491, -348.0284, 18.1517);
        $.timer_bomb2_s3.setCollision(false /* FALSE */);
        $.timer_bomb2_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 3
    if ($.target3_hit == 0) {
      if ($.timer_bomb2_s3.locate3D($.target3x_s3, $.target3y_s3, $.target3z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target3x_s3, $.target3y_s3, $.target3z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb2_state = 3;
        $.target3_hit = 1;
        $.timer_bomb2_s3.setCoordinates(88.1474, -361.8685, 27.376);
        $.timer_bomb2_s3.setCollision(false /* FALSE */);
        $.timer_bomb2_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 4
    if ($.target4_hit == 0) {
      if ($.timer_bomb2_s3.locate3D($.target4x_s3, $.target4y_s3, $.target4z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target4x_s3, $.target4y_s3, $.target4z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb2_state = 3;
        $.target4_hit = 1;
        $.timer_bomb2_s3.setCoordinates(140.0079, -383.1253, 36.6172);
        $.timer_bomb2_s3.setCollision(false /* FALSE */);
        $.timer_bomb2_s3.setDynamic(false /* FALSE */);
      }
    }

    //print you missed a target if player misses all targets when dropping bomb
    if (!($.bomb2_state == 3)) {
      Text.PrintNow("TEX3_8", 3000, 2);
    }




  }
}




async function check_if_bomb3_has_hit_target() {

  //bomb3 checks

  if ($.bomb3_state == 0) {

    //target 1
    if ($.target1_hit == 0) {
      if ($.timer_bomb3_s3.locate3D($.target1x_s3, $.target1y_s3, $.target1z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target1x_s3, $.target1y_s3, $.target1z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb3_state = 3;
        $.target1_hit = 1;
        $.timer_bomb3_s3.setCoordinates(97.574, -381.658, 9.2721);
        $.timer_bomb3_s3.setCollision(false /* FALSE */);
        $.timer_bomb3_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 2
    if ($.target2_hit == 0) {
      if ($.timer_bomb3_s3.locate3D($.target2x_s3, $.target2y_s3, $.target2z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target2x_s3, $.target2y_s3, $.target2z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb3_state = 3;
        $.target2_hit = 1;
        $.timer_bomb3_s3.setCoordinates(156.5491, -348.0284, 18.1517);
        $.timer_bomb3_s3.setCollision(false /* FALSE */);
        $.timer_bomb3_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 3
    if ($.target3_hit == 0) {
      if ($.timer_bomb3_s3.locate3D($.target3x_s3, $.target3y_s3, $.target3z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target3x_s3, $.target3y_s3, $.target3z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb3_state = 3;
        $.target3_hit = 1;
        $.timer_bomb3_s3.setCoordinates(88.1474, -361.8685, 27.376);
        $.timer_bomb3_s3.setCollision(false /* FALSE */);
        $.timer_bomb3_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 4
    if ($.target4_hit == 0) {
      if ($.timer_bomb3_s3.locate3D($.target4x_s3, $.target4y_s3, $.target4z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target4x_s3, $.target4y_s3, $.target4z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb3_state = 3;
        $.target4_hit = 1;
        $.timer_bomb3_s3.setCoordinates(140.0079, -383.1253, 36.6172);
        $.timer_bomb3_s3.setCollision(false /* FALSE */);
        $.timer_bomb3_s3.setDynamic(false /* FALSE */);
      }
    }

    //print you missed a target if player misses all targets when dropping bomb
    if (!($.bomb3_state == 3)) {
      Text.PrintNow("TEX3_8", 3000, 2);
    }




  }
}




async function check_if_bomb4_has_hit_target() {

  //bomb4 checks

  if ($.bomb4_state == 0) {

    //target 1
    if ($.target1_hit == 0) {
      if ($.timer_bomb4_s3.locate3D($.target1x_s3, $.target1y_s3, $.target1z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target1x_s3, $.target1y_s3, $.target1z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb4_state = 3;
        $.target1_hit = 1;
        $.timer_bomb4_s3.setCoordinates(97.574, -381.658, 9.2721);
        $.timer_bomb4_s3.setCollision(false /* FALSE */);
        $.timer_bomb4_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 2
    if ($.target2_hit == 0) {
      if ($.timer_bomb4_s3.locate3D($.target2x_s3, $.target2y_s3, $.target2z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target2x_s3, $.target2y_s3, $.target2z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb4_state = 3;
        $.target2_hit = 1;
        $.timer_bomb4_s3.setCoordinates(156.5491, -348.0284, 18.1517);
        $.timer_bomb4_s3.setCollision(false /* FALSE */);
        $.timer_bomb4_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 3
    if ($.target3_hit == 0) {
      if ($.timer_bomb4_s3.locate3D($.target3x_s3, $.target3y_s3, $.target3z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target3x_s3, $.target3y_s3, $.target3z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb4_state = 3;
        $.target3_hit = 1;
        $.timer_bomb4_s3.setCoordinates(88.1474, -361.8685, 27.376);
        $.timer_bomb4_s3.setCollision(false /* FALSE */);
        $.timer_bomb4_s3.setDynamic(false /* FALSE */);
      }
    }

    //target 4
    if ($.target4_hit == 0) {
      if ($.timer_bomb4_s3.locate3D($.target4x_s3, $.target4y_s3, $.target4z_s3, 3.5, 3.5, 2.0, false /* FALSE */)) {
        Sound.AddOneOffSound($.target4x_s3, $.target4y_s3, $.target4z_s3, 16 /* SOUND_IMRAN_ARM_BOMB */);
        $.bomb4_state = 3;
        $.target4_hit = 1;
        $.timer_bomb4_s3.setCoordinates(140.0079, -383.1253, 36.6172);
        $.timer_bomb4_s3.setCollision(false /* FALSE */);
        $.timer_bomb4_s3.setDynamic(false /* FALSE */);
      }
    }

    //print you missed a target if player misses all targets when dropping bomb
    if (!($.bomb4_state == 3)) {
      Text.PrintNow("TEX3_8", 3000, 2);
    }


  }
}



// **************************************	mission cleanup

async function mission_cleanup_serg2() {


  ONMISSION = 0;
  Hud.SwitchWidescreen(false /* OFF */);
  $.player1.setControl(true /* ON */);
  Rc.RemoveBuggy();


  $.flag_player_on_rc_mission = 0;


  $.vanblip_s3.remove();


  $.target1_blip_s3.remove();
  $.target2_blip_s3.remove();
  $.target3_blip_s3.remove();
  $.target4_blip_s3.remove();


  $.timer_bomb1_blip_s3.remove();
  $.timer_bomb2_blip_s3.remove();
  $.timer_bomb3_blip_s3.remove();
  $.timer_bomb4_blip_s3.remove();


  $.builder1.delete();
  $.builder2.delete();
  $.builder3.delete();
  $.builder4.delete();
  $.builder5.delete();
  $.builder6.delete();
  $.builder7.delete();
  $.builder8.delete();
  $.builder9.delete();
  $.builder10.delete();


  Hud.ClearTimer($.$id.timer_s3);
  Hud.ClearCounter($.$id.targets_to_go);


  if (!(Car.IsDead($.van_s3))) {
    $.van_s3.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);


  if (!(Car.IsDead($.van_s3))) {
    $.van_s3.freezePosition(false /* FALSE */);
  }


  $.timer_bomb1_s3.delete();
  $.timer_bomb2_s3.delete();
  $.timer_bomb3_s3.delete();
  $.timer_bomb4_s3.delete();


  $.dmbarrel1.delete();
  $.dmbarrel2.delete();
  $.dmbarrel3.delete();
  $.dmbarrel4.delete();


  Streaming.MarkModelAsNoLongerNeeded(dynamite);
  Streaming.MarkModelAsNoLongerNeeded(TOPFUN);
  Streaming.MarkModelAsNoLongerNeeded(WMYCW);
  Streaming.MarkModelAsNoLongerNeeded(HAMMER);
  Streaming.MarkModelAsNoLongerNeeded(RCGoblin);
  Streaming.MarkModelAsNoLongerNeeded(barrel2);
  Streaming.MarkModelAsNoLongerNeeded(GDa);
  Streaming.MarkModelAsNoLongerNeeded(colt45);


  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  World.RemoveAllScriptFires();
  Mission.Finish();
}

export async function serg3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Sergio3*****************************************
  // *****************************************************************************************

  // This mission is actually Avery Carrington 2 : Demolition man.

  // *****************************************************************************************
  // *****************************************************************************************





  // SCRIPT_NAME serg3

  // Mission start stuff


  await mission_start_serg2();  // SCM GOSUB mission_start_serg2
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_serg2_failed();  // SCM GOSUB mission_serg2_failed
  }
  await mission_cleanup_serg2();  // SCM GOSUB mission_cleanup_serg2
  // MissionBoundary

  //vans location

  // VAR_FLOAT vanlocx_s3 vanlocy_s3 vanlocz_s3 vanheading_s3

  // variables for mission

  // VAR_INT vanblip_s3 targets_to_go
  // VAR_INT van_s3
  // VAR_INT players_wanted_level_s3 wanted_level_s3

  //builders guarding the site

  // VAR_INT builder1
  // VAR_INT builder2
  // VAR_INT builder3
  // VAR_INT builder4
  // VAR_INT builder5
  // VAR_INT builder6
  // VAR_INT builder7
  // VAR_INT builder8
  // VAR_INT builder9
  // VAR_INT builder10
  // VAR_INT builder11
  // VAR_INT builder12
  // VAR_INT builder13
  // VAR_INT security1_s3
  // VAR_INT security2_s3
  // VAR_INT security3_s3

  //the copter

  // VAR_INT rc_goblin_s3

  //copter's starting coords

  // VAR_FLOAT rc_goblinx_s3
  // VAR_FLOAT rc_gobliny_s3
  // VAR_FLOAT rc_goblinz_s3
  // VAR_FLOAT rc_goblinheading_s3

  //copter's current coords

  // VAR_FLOAT current_goblinx_s3
  // VAR_FLOAT current_gobliny_s3
  // VAR_FLOAT current_goblinz_s3

  //the bombs

  // VAR_INT timer_bomb1_s3
  // VAR_INT timer_bomb2_s3
  // VAR_INT timer_bomb3_s3
  // VAR_INT timer_bomb4_s3
  // VAR_INT timer_bomb1_blip_s3
  // VAR_INT timer_bomb2_blip_s3
  // VAR_INT timer_bomb3_blip_s3
  // VAR_INT timer_bomb4_blip_s3

  //bombs location

  // VAR_FLOAT timer_bomb1_pickupx_s3
  // VAR_FLOAT timer_bomb1_pickupy_s3
  // VAR_FLOAT timer_bomb1_pickupz_s3


  // VAR_FLOAT timer_bomb2_pickupx_s3
  // VAR_FLOAT timer_bomb2_pickupy_s3
  // VAR_FLOAT timer_bomb2_pickupz_s3


  // VAR_FLOAT timer_bomb3_pickupx_s3
  // VAR_FLOAT timer_bomb3_pickupy_s3
  // VAR_FLOAT timer_bomb3_pickupz_s3


  // VAR_FLOAT timer_bomb4_pickupx_s3
  // VAR_FLOAT timer_bomb4_pickupy_s3
  // VAR_FLOAT timer_bomb4_pickupz_s3


  //bombs current locations

  // VAR_FLOAT current_bomb1_pickupx_s3
  // VAR_FLOAT current_bomb1_pickupy_s3
  // VAR_FLOAT current_bomb1_pickupz_s3


  // VAR_FLOAT current_bomb2_pickupx_s3
  // VAR_FLOAT current_bomb2_pickupy_s3
  // VAR_FLOAT current_bomb2_pickupz_s3


  // VAR_FLOAT current_bomb3_pickupx_s3
  // VAR_FLOAT current_bomb3_pickupy_s3
  // VAR_FLOAT current_bomb3_pickupz_s3


  // VAR_FLOAT current_bomb4_pickupx_s3
  // VAR_FLOAT current_bomb4_pickupy_s3
  // VAR_FLOAT current_bomb4_pickupz_s3


  //targets that player has to eliminate

  // VAR_FLOAT target1x_s3
  // VAR_FLOAT target1y_s3
  // VAR_FLOAT target1z_s3


  // VAR_FLOAT target2x_s3
  // VAR_FLOAT target2y_s3
  // VAR_FLOAT target2z_s3


  // VAR_FLOAT target3x_s3
  // VAR_FLOAT target3y_s3
  // VAR_FLOAT target3z_s3


  // VAR_FLOAT target4x_s3
  // VAR_FLOAT target4y_s3
  // VAR_FLOAT target4z_s3


  // VAR_INT target1_blip_s3
  // VAR_INT target2_blip_s3
  // VAR_INT target3_blip_s3
  // VAR_INT target4_blip_s3

  //checks to see whether player can drop bomb

  // VAR_FLOAT bomb1_ready
  // VAR_FLOAT bomb2_ready
  // VAR_FLOAT bomb3_ready
  // VAR_FLOAT bomb4_ready


  // VAR_FLOAT minimum_dist1_s3
  // VAR_FLOAT minimum_dist2_s3
  // VAR_FLOAT minimum_dist3_s3
  // VAR_FLOAT minimum_dist4_s3


  //flags

  // VAR_INT player_in_van_for_first_time


  // VAR_INT bomb1_state
  // VAR_INT bomb2_state
  // VAR_INT bomb3_state
  // VAR_INT bomb4_state


  // VAR_INT target1_hit
  // VAR_INT target2_hit
  // VAR_INT target3_hit
  // VAR_INT target4_hit
  // VAR_INT highlight_targets
  // VAR_INT bomb1_is_in_zone
  // VAR_INT timer_s3


  // VAR_INT start_timer_on_first_hit


  // VAR_INT x_bombs_to_go


  // VAR_INT three_more_to_go
  // VAR_INT two_more_to_go
  // VAR_INT one_more_to_go
  // VAR_INT three_more_to_go1
  // VAR_INT two_more_to_go1
  // VAR_INT one_more_to_go1
  // VAR_INT three_more_to_go2
  // VAR_INT two_more_to_go2
  // VAR_INT one_more_to_go2
  //REMOVE WHEN GET COMMAND TO LOCATE OBJECTS

  // VAR_INT camera_s3


  // VAR_FLOAT locate_t1_b1x
  // VAR_FLOAT locate_t1_b1y
  // VAR_FLOAT locate_t1_b1z
  // VAR_INT builder1_blip
  // VAR_INT builder2_blip
  // VAR_INT builder3_blip
  // VAR_INT builder4_blip


  // VAR_INT dmbarrel1
  // VAR_INT dmbarrel2
  // VAR_INT dmbarrel3
  // VAR_INT dmbarrel4


  // VAR_INT builder1attack
  // VAR_INT builder2attack
  // VAR_INT builder3attack
  // VAR_INT builder5attack
  // VAR_INT builder6attack
  // VAR_INT builder7attack
  // VAR_INT builder8attack
  // VAR_INT builder9attack
  // VAR_INT builder10attack
  // VAR_INT builder11attack
  // VAR_INT builder12attack
  // VAR_INT builder13attack


  // VAR_INT sphere1_s3
  // VAR_INT spheres3_flag lock_door_flag_s3 print_help_s3


  // VAR_INT playingaudio_s3
  // VAR_INT playingaudio_s3state
  // VAR_INT builder1played
  // VAR_INT builder3played
  // VAR_INT builder7played
  // VAR_INT builder13played
  // VAR_INT builder9played



  // VAR_INT fire3_s3
  // VAR_INT fire4_s3
  // VAR_INT fire5_s3
  // VAR_INT fire6_s3


  // VAR_INT firea_s3
  // VAR_INT fireb_s3
  // VAR_INT firec_s3
  // VAR_INT fired_s3 vancreated_s3

  //security audio

  // VAR_INT security2_s3played
  // VAR_INT security2_s3attacked


  // ****************************************Mission Start************************************


}
