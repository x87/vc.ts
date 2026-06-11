// Generated from main/serg1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_serg1() {


  Stat.RegisterMissionGiven();
  Text.LoadMissionText("serg1");
  Shortcut.SetDropoffPointForMission(252.7968, -230.9387, 9.8638, 333.9001);
  ONMISSION = 1;
  await asyncWait(0);


  await asyncWait(500);


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.undress("player");
    Streaming.LoadAllModelsNow();
    if (!(Char.IsDead($.scplayer))) {
      $.scplayer.dress();
    }


  }

  //DO_FADE 1500 FADE_IN


  // *****************************************Set Flags/variables************************************


  $.has_player_been_to_clothes_shop = 0;
  ///////////////////////////////player_is_at_golf_club = 0

  $.player_is_at_golf_club = 0;


  $.target_in_caddy = 0;
  //char_is_attempting_to_get_in_car = 0

  $.char_is_in_car = 5;
  $.char_is_in_carbg3 = 5;


  $.golfped_targetcheck = 0;
  $.bodyguard3_check = 0;


  $.char_is_in_carbg2 = 5;



  $.bg_is_in_car = 0;
  $.char_outside_golf_club = 0;
  //char_is_not_in_car = 0



  $.char_has_not_been_told = 0;
  $.bodyguard_has_seen_player = 0;
  $.got_out_of_car_flag_s1_dr = 0;

  //////new

  $.no_of_times_picked_a_new_car = 0;
  $.target_state = 0;
  $.char_has_seen_player = 0;
  $.keep_compiler_happy = 0;
  $.got_out_of_car_flag_s1 = 0;
  $.bodyguard5_flag = 0;


  $.bodyguard1_attack = 0;
  $.bodyguard2_attack = 0;
  $.bodyguard3_attack = 0;
  $.bodyguard4_attack = 0;


  $.create_escape_car = 0;
  $.golfped_in_car_as_passenger = 0;
  $.golfped_in_car_as_driver = 0;
  $.got_out_of_car_flag_s1_pass = 0;
  $.got_out_of_car_flag_s1 = 0;


  $.get_next_car = 0;
  $.playingaudio_s1 = 0;
  $.playingaudiostate_s1 = 0;
  $.playingaudio1_s1 = 0;
  $.playingaudiostate1_s1 = 0;
  $.playingaudio2_s1 = 0;
  $.playingaudiostate2_s1 = 0;


  $.niceaudio_s1 = 0;
  $.isnotme_s1 = 0;
  $.startsecgolf = 0;


  $.carwander_randomly_flag = 0;
  $.golfhelptext_s1 = 0;


  $.target_said_first_line = 0;
  $.player_is_shooting_a1 = 0;
  $.remove_guys_a1 = 0;

  // *******************************************Set Coords*****************************************


  $.clothes_shopX = 325.247864;
  $.clothes_shopY = 203.699646;
  $.clothes_shopZ = 10.398813;


  $.golf_x = 94.725;
  $.golf_y = 268.87;
  $.golf_z = 21.764;


  $.escapex_s1 = 101.989;
  $.escapey_s1 = 251.821;
  $.escapez_s1 = 21.77;


  $.bodyguard1x_s1 = 80.339;
  $.bodyguard1y_s1 = 579.956;
  $.bodyguard1z_s1 = 17.442;
  $.bodyguard1_s1heading = 319.5175;


  $.bodyguard2x_s1 = 78.689;
  $.bodyguard2y_s1 = 582.528;
  $.bodyguard2z_s1 = 17.39414;
  $.bodyguard2_s1heading = 308.280;


  $.bodyguard3x_s1 = 85.716;
  $.bodyguard3y_s1 = 572.613;
  $.bodyguard3z_s1 = 17.574642;
  $.bodyguard3_s1heading = 304.955;


  $.bodyguard4x_s1 = 74.674;
  $.bodyguard4y_s1 = 597.314;
  $.bodyguard4z_s1 = 17.574642;
  $.bodyguard4_s1heading = 238.371;


  $.bodyguard_golfcartx = 83.422;
  $.bodyguard_golfcarty = 596.1174;
  $.bodyguard_golfcartz = 12.965;
  $.bodyguard_golfcart_heading = 231.757;


  $.golfped_targetx = 79.1955;
  $.golfped_targety = 580.3671;
  $.golfped_targetz = 17.4168;


  $.golfcart1x_s1 = 93.72506;
  $.golfcart1y_s1 = 563.45;
  $.golfcart1z_s1 = 13.175;


  $.golfcart2x_s1 = 95.591;
  $.golfcart2y_s1 = 561.284;
  $.golfcart2z_s1 = 13.133;


  $.golfcart3x_s1 = 98.84;
  $.golfcart3y_s1 = 557.794;
  $.golfcart3z_s1 = 13.04;


  $.golfcart4x_s1 = 95.518;
  $.golfcart4y_s1 = 573.821;
  $.golfcart4z_s1 = 13.087;


  $.golfcart1heading_s1 = 304.078;
  $.golfcart2heading_s1 = 308.830;
  $.golfcart3heading_s1 = 308.439;
  $.golfcart4heading_s1 = 17.252;
  // *******************************************SCRIPTED CUT ***********************************

  // ********************************** SCRIPTED CUT - AVERY'S STRETCH ARRIVES ***************


  Clock.SetTimeOfDay(10, 0);
  Weather.ForceNow(4 /* WEATHER_EXTRA_SUNNY */);



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
    const _res476 = $.scripted_cut_limo.getCoordinates();
$.vect_x = _res476.x;
$.vect_y = _res476.y;
$.vect_z = _res476.z;
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


  // VAR_INT cutscene_limo
  // VAR_INT gpasscut


  Audio.LoadMissionAudio(1, "mono_6" as any);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CSavery");


  Streaming.LoadSpecialModel(CUTOBJ01, "cs_limo");
  Streaming.LoadSpecialModel(CUTOBJ02, "gpass");

  //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH
  //LOAD_SPECIAL_MODEL cut_obj2 LAWYERH

  //LOAD_SCENE 1218.4 -314.5 28.9


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    //OR NOT HAS_MODEL_LOADED cut_obj2
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);
  }



  Cutscene.Load("tex_1");


  Cutscene.SetOffset(305.2, -211.9, 11.3);
  Camera.SetNearClip(0.1);



  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_avery = CutsceneObject.Create(SPECIAL02);
  $.cs_avery.setAnim("CSavery");


  $.cutscene_limo = CutsceneObject.Create(CUTOBJ01);
  $.cutscene_limo.setAnim("cs_limo");


  $.gpasscut = CutsceneObject.Create(CUTOBJ02);
  $.gpasscut.setAnim("gpass");


  //CREATE_CUTSCENE_HEAD cs_ken CUT_OBJ2 cs_kenhead
  //SET_CUTSCENE_HEAD_ANIM cs_kenhead lawyer

  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player1

  //hide player

  World.ClearArea(265.129, -234.531, 11.107, 1.0, true /* TRUE */);
  $.player1.setCoordinates(265.129, -234.531, 11.1013);
  $.player1.setHeading(78.218376);
  Streaming.RequestCollision(265.129, -234.531);

  //SET_AREA_VISIBLE VIS_STRIP_CLUB


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text



  $.cs_time = Cutscene.GetTime();



  while ($.cs_time < 1569) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_A", 10000, 1); //Come in and park yourself on the hide, son.


  while ($.cs_time < 4896) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_B", 10000, 1); //Hell, my daddy used to say, never look a gift horse in the mouth, and by golly, he never did.


  while ($.cs_time < 10768) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_C", 10000, 1); //Would you like a drop of the old Kentucky?


  while ($.cs_time < 12947) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_D", 10000, 1); // No thanks.


  while ($.cs_time < 13927) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_E", 10000, 1); //A clean thinker. I like that in a man!


  while ($.cs_time < 16556) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_F", 10000, 1); //Now, the property business isn't all about high-falootin paper pushing.


  while ($.cs_time < 20072) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_G", 10000, 1); //It's about dirt! And the will to claim that dirt! You with me, son?


  while ($.cs_time < 24493) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_H", 10000, 1); //Oh yeah.


  while ($.cs_time < 25569) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_I", 10000, 1); //Well, I need some tenacious bastard to let go of some dirt.


  while ($.cs_time < 28462) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_J", 10000, 1); //And you look to me the kind of guy to persuade him.



  while ($.cs_time < 31069) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_K", 10000, 1); //Persuasion's my forte


  while ($.cs_time < 32859) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_L", 10000, 1); //Yeh, he'll be down at the country club, down on the golf course.


  while ($.cs_time < 36053) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_M", 10000, 1); //They don't allow guns, so his bodyguards won't be packing lawgivers.


  while ($.cs_time < 40174) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_N", 10000, 1); //Go beat eight tons of crap out of him.


  while ($.cs_time < 42460) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("TEX1_O", 10000, 1); //Here now- I got you a membership, and boy you're going to need more appropriate clothing.



  while ($.cs_time < 47168) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();



  Camera.DoFade(1500, 0 /* FADE_OUT */);



  Text.ClearPrints();


  await asyncWait(1000);


  if (!(Cutscene.WasSkipped())) {
    if (Audio.HasMissionAudioLoaded(1)) {
      Audio.PlayMissionAudio(1);
    }
  }


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);




  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  // ****************************************END OF CUTSCENE**********************************

  //remove clothes picups

  $.mansion_clothes.remove();
  $.safehouse_clothes2.remove();
  $.clothes_pickup1.remove();
  $.clothes_pickup2.remove();
  $.clothes_pickup3.remove();
  $.clothes_pickup4.remove();
  $.clothes_pickup5.remove();
  $.clothes_pickup6.remove();
  $.clothes_pickup7.remove();
  $.clothes_pickup8.remove();
  $.clothes_pickup9.remove();
  $.clothes_pickup13.remove();

  //get golf costume from clothes shop

  if ($.has_player_been_to_clothes_shop == 0) {
    $.clothesblip = Blip.AddSpriteForCoord($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 28 /* RADAR_SPRITE_TSHIRT */);
    Text.PrintNow("TEX1_1", 7000, 2);
    $.has_player_been_to_clothes_shop = 1;
  }



  Streaming.RequestModel(WMYGO);
  Streaming.RequestModel(caddy);
  Streaming.RequestModel(GOLFCLUB);
  Streaming.RequestModel(greenwoo);


  while (!(Streaming.HasModelLoaded(WMYGO)) || !(Streaming.HasModelLoaded(caddy)) || !(Streaming.HasModelLoaded(GOLFCLUB)) || !(Streaming.HasModelLoaded(greenwoo))) {
    await asyncWait(0);
  }


  Streaming.LoadSpecialCharacter(1, "BGa");
  Streaming.LoadSpecialCharacter(2, "BGb");


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  //SWITCH_ROADS_ON 162.0 245.0 18.0 166.0 250.0 25.0 //  Golf Club
  //SWITCH_ROADS_ON 59.0 198.5 18.0 51.0 200.0 25.0 //  Golf Club

  $.golf_gates.delete();
  $.golf_gates = ScriptObject.CreateNoOffset(golf_gatesopen, 107.81, 228.072, 20.989);
  $.golf_gates.dontRemove();


  $.player1.shutUp(true /* TRUE */);



  Char.SetEnterCarRangeMultiplier(2.5);



  if ($.keep_compiler_happy == 1) {
    $.newcar_s1 = Car.Create(caddy, 226.4403, 468.67059, 12.067245);
  }
}




async function mission_sergio1_loop() {
  // SCM GOTO → mission_sergio1_loop lowered to endless loop
  while (true) {



    await asyncWait(0);



    if ($.has_player_been_to_clothes_shop == 1) {
      if ($.player1.locateOnFoot3D($.clothes_shopX, $.clothes_shopY, $.clothes_shopZ, 1.5, 1.5, 2.0, true /* TRUE */)) {
        $.clothesblip.remove();


        $.player1.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);

        //SET_FIXED_CAMERA_POSITION 331.071655 191.194565 13.007007 0.0 0.0 0.0
        //POINT_CAMERA_AT_POINT 330.835541 192.16037 12.90005 JUMP_CUT

        Camera.SetFixedPosition(322.194458, 201.577209, 14.570996, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(322.922852, 202.132980, 14.170328, 2 /* JUMP_CUT */);
        $.scplayer.setObjGotoCoordOnFoot(328.338348, 206.056854);
        await asyncWait(1300);


        Camera.DoFade(1500, 0 /* FADE_OUT */);
        await asyncWait(1500);


        if (!(Char.IsDead($.scplayer))) {
          $.scplayer.undress("player4");
          Streaming.LoadAllModelsNow();
          if (!(Char.IsDead($.scplayer))) {
            $.scplayer.dress();
          }


        }



        Audio.LoadMissionAudio(1, "TEX1_3" as any);
        Audio.LoadMissionAudio(2, "TEX1_4" as any);
        while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
          await asyncWait(0);
        }
        World.ClearArea(325.247864, 283.699646, 1.0, 1.0, false /* FALSE */);
        World.ClearArea(324.861084, 203.391327, 1.0, 1.0, false /* FALSE */);
        World.ClearAreaOfChars(316.5, 207.966, 9.23, 335.827728, 190.550858, 11.3988);
        $.scplayer.setObjNoObj();
        $.player1.setCoordinates(325.926544, 204.200043, 10.398813);
        $.player1.setHeading(128.112198);
        $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
        Camera.DoFade(1500, 1 /* FADE_IN */);
        Camera.SetFixedPosition(324.861084, 203.391327, 11.268425, 0.0, 0.0, 0.0); //ROTATE UP
        Camera.PointAtPoint(325.552673, 203.925049, 10.781707, 2 /* JUMP_CUT */);
        await asyncWait(1000);
        Camera.SetInterpolationParameters(5.0, 3000);
        Camera.SetFixedPosition(324.8610, 203.391327, 11.268425, 0.0, 0.0, 0.0); //ROTATE UP
        Camera.PointAtPoint(325.5336, 203.910339, 11.795979, 1 /* INTERPOLATION */);


        TIMERB = 0;
        while (!(TIMERB > 5000)) {
          await asyncWait(0);
          if (TIMERB > 450) {
            if ($.niceaudio_s1 == 0) {
              Text.PrintNow("TEX1_7", 5000, 2);
              if ($.playingaudiostate1_s1 == 0) {
                Audio.PlayMissionAudio(1);
                $.playingaudiostate1_s1 = 1;
              }
              if ($.playingaudiostate1_s1 == 1) {
                if (Audio.HasMissionAudioFinished(1)) {
                  $.playingaudiostate1_s1 = 0;
                  Audio.ClearMissionAudio(1);
                  $.playingaudio1_s1 = 1;
                  $.niceaudio_s1 = 1;
                }
              }
            }
          }


          if ($.niceaudio_s1 == 1) {
            if ($.isnotme_s1 == 0) {
              Audio.SetMissionAudioPosition(1, 311.06, 218.27, 11.74);
              Text.PrintNow("TEX1_6", 5000, 2);
              if ($.playingaudiostate2_s1 == 0) {
                Audio.PlayMissionAudio(2);
                $.playingaudiostate2_s1 = 1;
              }
              if ($.playingaudiostate2_s1 == 1) {
                if (Audio.HasMissionAudioFinished(1)) {
                  $.playingaudiostate2_s1 = 0;
                  Audio.ClearMissionAudio(1);
                  $.playingaudio2_s1 = 1;
                  $.isnotme_s1 = 1;
                }
              }
            }
          }


          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
            // SCM GOTO → endgolfchange (not lowered; manual jump required)
            throw new Error("unresolved GOTO endgolfchange"); // fallback: would break linear control flow
          }


        }





        // SCM label endgolfchange
        if (!($.player1.isWantedLevelGreater(2))) {
          $.player1.clearWantedLevel();
        }
        $.scplayer.setObjNoObj();
        Text.ClearSmallPrints();
        Audio.ClearMissionAudio(1);
        Audio.ClearMissionAudio(2);
        $.has_player_been_to_clothes_shop = 2;


      }
    }


    //get to golf club

    if ($.has_player_been_to_clothes_shop == 2) {
      if (TIMERA > 4000) {
        $.player1.stopLooking();
        Camera.SetInFrontOfPlayer();
        Camera.RestoreJumpcut();
        $.player1.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        $.golfblip = Blip.AddForCoord(100.5953, 251.2470, 20.7290);
        //	CHANGE_BLIP_COLOUR golfblip GREEN
        Text.PrintNow("TEX1_2", 7000, 2);
        $.has_player_been_to_clothes_shop = 3;
      }
    }


    if ($.has_player_been_to_clothes_shop == 3) {
      //IF LOCATE_PLAYER_ANY_MEANS_3D player1 97.818901 259.234283 20.75886/*golf_x golf_y golf_z*/ 5.0 5.0 5.0 FALSE
      if ($.player_is_at_golf_club == 0) {
        if ($.player1.locateAnyMeans3D(100.5953, 251.2470, 20.7290, 2.0, 2.0, 3.0, true /* TRUE */)) {
          $.golfblip.remove();
          Hud.SwitchWidescreen(true /* ON */);
          $.player1.setControl(false /* OFF */);
          $.player_is_at_golf_club = 1;
        }
      }
    }


    if ($.golfhelptext_s1 == 0) {
      if ($.player1.isInModel(caddy)) {
        Text.PrintHelp("TEX1_8");
        Audio.SetRadioChannel(6 /* RADIO_ESPANTOSO */, -1);
        $.golfhelptext_s1 = 1;
      }
    }



    //create the target and his bodyguards

    if ($.player_is_at_golf_club == 1) {
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Game.SetWantedMultiplier(0.1);
      $.player1.alterWantedLevel(0);
      $.bodyguard1_s1 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, $.bodyguard1x_s1, $.bodyguard1y_s1, $.bodyguard1z_s1);
      $.bodyguard1_s1.giveWeapon(3 /* WEAPONTYPE_GOLFCLUB */, 3000);
      $.bodyguard1_s1.setOnlyDamagedByPlayer(true /* TRUE */);
      $.bodyguard1_s1.setHealth(250);
      $.bodyguard1_s1.setHeading($.bodyguard1_s1heading);
      $.bodyguard2_s1 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, $.bodyguard2x_s1, $.bodyguard2y_s1, $.bodyguard2z_s1);
      $.bodyguard2_s1.giveWeapon(3 /* WEAPONTYPE_GOLFCLUB */, 3000);
      $.bodyguard2_s1.setOnlyDamagedByPlayer(true /* TRUE */);
      $.bodyguard2_s1.setHealth(250);
      $.bodyguard2_s1.setHeading($.bodyguard1_s1heading);
      $.bodyguard3_s1 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, $.bodyguard3x_s1, $.bodyguard3y_s1, $.bodyguard3z_s1);
      $.bodyguard3_s1.giveWeapon(3 /* WEAPONTYPE_GOLFCLUB */, 3000);
      $.bodyguard3_s1.setOnlyDamagedByPlayer(true /* TRUE */);
      $.bodyguard3_s1.setHealth(250);
      $.bodyguard3_s1.setHeading($.bodyguard1_s1heading);
      $.bodyguard4_s1 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, $.bodyguard4x_s1, $.bodyguard4y_s1, $.bodyguard4z_s1);
      $.bodyguard4_s1.giveWeapon(3 /* WEAPONTYPE_GOLFCLUB */, 3000);
      $.bodyguard4_s1.setOnlyDamagedByPlayer(true /* TRUE */);
      $.bodyguard4_s1.setHealth(250);
      $.bodyguard4_s1.setHeading($.bodyguard1_s1heading);
      $.golfped_target = Char.Create(4 /* PEDTYPE_CIVMALE */, WMYGO, $.golfped_targetx, $.golfped_targety, $.golfped_targetz);
      $.golfped_target.giveWeapon(3 /* WEAPONTYPE_GOLFCLUB */, 3000);
      $.golfped_target.clearThreatSearch();
      $.golfped_target.setHealth(250);
      $.golfped_target.setOnlyDamagedByPlayer(true /* TRUE */);
      $.golfped_target_blip = Blip.AddForChar($.golfped_target);
      $.golfped_target.setHeading(56.6491);
      $.golfcart1_s1 = Car.Create(caddy, $.golfcart1x_s1, $.golfcart1y_s1, $.golfcart1z_s1);
      $.golfcart1_s1.setIdle();
      $.golfcart1_s1.setHeading($.golfcart1heading_s1);
      $.golfcart2_s1 = Car.Create(caddy, $.golfcart2x_s1, $.golfcart2y_s1, $.golfcart2z_s1);
      $.golfcart2_s1.setIdle();
      $.golfcart2_s1.setHeading($.golfcart2heading_s1);
      $.golfcart3_s1 = Car.Create(caddy, $.golfcart3x_s1, $.golfcart3y_s1, $.golfcart3z_s1);
      $.golfcart3_s1.setIdle();
      $.golfcart3_s1.setHeading($.golfcart3heading_s1);
      $.golfcart4_s1 = Car.Create(caddy, $.golfcart4x_s1, $.golfcart4y_s1, $.golfcart4z_s1);
      $.golfcart4_s1.setIdle();
      $.golfcart4_s1.setHeading($.golfcart4heading_s1);
      $.bodyguard_golfcart = Car.Create(caddy, $.bodyguard_golfcartx, $.bodyguard_golfcarty, $.bodyguard_golfcartz);
      $.bodyguard5_s1 = Char.CreateInsideCar($.bodyguard_golfcart, 21 /* PEDTYPE_SPECIAL */, SPECIAL01);
      $.bodyguard5_s1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.bodyguard_golfcart.setIdle();
      $.bodyguard_golfcart.setHeading($.bodyguard_golfcart_heading);
      $.caddy2_s1 = Car.Create(caddy, 96.9997, 301.46, 19.448);
      Streaming.LoadScene(109.957672, 573.540283, 16.592073);
      await asyncWait(500);
      Camera.DoFade(1000, 1 /* FADE_IN */);
      Camera.SetFixedPosition(108.709763, 563.467224, 16.374695, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(107.773109, 563.7945507, 16.250055, 2 /* JUMP_CUT */);
      TIMERA = 0;
      while (TIMERA < 3000) {
        await asyncWait(0);
        Text.PrintNow("TEX1_0", 10000, 2);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */) && TIMERA > 1000) {
          // SCM GOTO → end_of_golf_cutscene (not lowered; manual jump required)
          throw new Error("unresolved GOTO end_of_golf_cutscene"); // fallback: would break linear control flow
        }


      }
      Camera.SetFixedPosition(82.779160, 583.353394, 18.749277, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(81.941216, 582.814148, 18.665253, 2 /* JUMP_CUT */);
      TIMERA = 0;
      if (!(Char.IsDead($.golfped_target))) {
        $.golfped_target.setWaitState(33 /* WAITSTATE_GROUND_ATTACK */, -1);
      }
      while (TIMERA < 2500) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
          // SCM GOTO → end_of_golf_cutscene (not lowered; manual jump required)
          throw new Error("unresolved GOTO end_of_golf_cutscene"); // fallback: would break linear control flow
        }


      }



      // SCM label end_of_golf_cutscene


      World.ClearArea(100.1102, 254.2736, 20.7242, 1.0, false /* FALSE */);
      Text.ClearThisPrint("TEX1_0");
      Camera.RestoreJumpcut();
      Camera.SetBehindPlayer();
      if (!(Char.IsDead($.golfped_target))) {
        $.golfped_target.setWaitState(0 /* WAITSTATE_FALSE */, 100);
      }
      Hud.SwitchWidescreen(false /* OFF */);
      $.player1.setControl(true /* ON */);
      $.player_is_at_golf_club = 2;


    }



    //////////////////////////////////////////////////		BODYGUARD AUDIO		////////////////////////////////////////////////

    if ($.player_is_at_golf_club == 2) {
      if (!(Char.IsDead($.bodyguard1_s1))) {

        //first comment
        if ($.playingaudio_s1 == 0) {
          if ($.target_said_first_line == 1) {
            $.playingaudio_s1 = 2;
            $.playingaudiostate_s1 = 0;
          }
        }

        //second comment
        if ($.playingaudio_s1 == 0) {
          if ($.target_said_first_line == 2) {
            $.playingaudio_s1 = 3;
            $.playingaudiostate_s1 = 0;
          }
        }



        if ($.playingaudio_s1 == 2) {
          if ($.playingaudiostate_s1 == 0) {
            Audio.LoadMissionAudio(1, "TEX1_5" as any);
            $.playingaudiostate_s1 = 1;
          }
          else {
            if ($.playingaudiostate_s1 == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate_s1 = 2;
              }
            }
            if ($.playingaudiostate_s1 == 2) {
              Text.PrintNow("TEX1_9", 5000, 1); //Get him!
              Audio.PlayMissionAudio(1);
              $.playingaudiostate_s1 = 3;
            }
            if ($.playingaudiostate_s1 == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate_s1 = 0;
                $.playingaudio_s1 = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("TEX1_9");
                $.target_said_first_line = 2;
              }
            }
          }
        }
        if ($.playingaudio_s1 == 3) {
          if ($.playingaudiostate_s1 == 0) {
            Audio.LoadMissionAudio(1, "TEX1_6" as any);
            $.playingaudiostate_s1 = 1;
          }
          else {
            if ($.playingaudiostate_s1 == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate_s1 = 2;
              }
            }
            if ($.playingaudiostate_s1 == 2) {
              Text.PrintNow("TEX1_10", 5000, 1); //Kill that Psycho!
              Audio.PlayMissionAudio(1);
              $.playingaudiostate_s1 = 3;
            }
            if ($.playingaudiostate_s1 == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate_s1 = 0;
                $.playingaudio_s1 = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("TEX1_10");
                $.target_said_first_line = 3;
              }
            }
          }
        }



      }
      else {
        if ($.playingaudio_s1 == 2) {
          $.playingaudiostate_s1 = 0;
          $.playingaudio_s1 = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("TEX1_9");
          $.target_said_first_line = 2;
        }
        if ($.playingaudio_s1 == 3) {
          $.playingaudiostate_s1 = 0;
          $.playingaudio_s1 = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("TEX1_10");
          $.target_said_first_line = 3;
        }


      }
    }


    ////////////////////////////////////////////////////	SWINGING HIS CLUB	////////////////////////////////////////////////////

    if ($.player_is_at_golf_club == 2) {
      if ($.char_has_seen_player == 0) {
        if (TIMERA > 1500) {
          if (!(Char.IsDead($.golfped_target))) {
            $.golfped_target.setWaitState(33 /* WAITSTATE_GROUND_ATTACK */, -1);
          }
        }
        if (TIMERA > 4000) {
          if (!(Char.IsDead($.golfped_target))) {
            $.golfped_target.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            TIMERA = 0;
          }
        }


      }
    }

    ///////////////// GETTING THE TARGET TO LEG IT INTO THE NEAREST GOLFCART TO THE CAR AND OUT OF THE GOLF CLUB ////////////////

    /*
    target_state
    0 - neutral
    1 - attempting to get in a car
    2 - in car for the first time
    3 - in car and driving
    4 - goto coord on foot
    5 - goto exit direct
    */


    if (!(Char.IsDead($.golfped_target))) {
      if ($.player_is_at_golf_club == 2) {

        //has seen player so makes a run for it
        if ($.char_has_seen_player == 0) {
          if ($.player1.locateAnyMeansChar3D($.golfped_target, 9.5, 9.5, 1.0, false /* FALSE */) || $.bodyguard_has_seen_player == 1) {
            $.golfped_target.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            $.golfped_target.setObjRunToCoord(86.6450, 584.7784);
            $.playingaudio_s1 = 1;
            $.char_has_seen_player = 1;
            $.bodyguard_has_seen_player = 1;
            TIMERB = 0;
            TIMERA = 0;
          }
        }


        //playing audio
        if ($.playingaudio_s1 == 1) {
          if (!(Char.IsDead($.golfped_target))) {
            if ($.playingaudiostate_s1 == 0) {
              Audio.LoadMissionAudio(1, "TEX1_1" as any);
              $.playingaudiostate_s1 = 1;
            }
            else {
              if ($.playingaudiostate_s1 == 1) {
                if (Audio.HasMissionAudioLoaded(1)) {
                  $.playingaudiostate_s1 = 2;
                }
              }
              if ($.playingaudiostate_s1 == 2) {
                Text.PrintNow("TEX1_3", 5000, 1); //Who is this guy? Boys deal with him!
                Audio.PlayMissionAudio(1);
                $.playingaudiostate_s1 = 3;
              }
              if ($.playingaudiostate_s1 == 3) {
                if (Audio.HasMissionAudioFinished(1)) {
                  $.playingaudiostate_s1 = 0;
                  Audio.ClearMissionAudio(1);
                  Text.ClearThisPrint("TEX1_3");
                  $.playingaudio_s1 = 0;
                  $.target_said_first_line = 1;
                }
              }
            }


          }
          else {
            if ($.playingaudio_s1 == 1) {
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("TEX1_3");
              $.char_has_seen_player = 1;
              $.playingaudiostate_s1 = 0;
              $.playingaudio_s1 = 0;
              $.target_said_first_line = 1;
            }
          }


        }





        //guy is at steps tell him to pick a car
        if ($.char_has_seen_player == 1) {
          if ($.golfped_target.locateOnFoot3D(86.6450, 584.7784, 13.3303, 7.0, 7.0, 2.0, false /* FALSE */)) {
            $.char_has_seen_player = 2;
            await pick_a_car();  // SCM GOSUB pick_a_car


          }
        }


        //get in a car if not in car at first attempt
        if ($.char_has_seen_player == 2) {
          if ($.target_state == 1) {
            if ($.golfped_target.isOnFoot()) {
              await pick_a_car();  // SCM GOSUB pick_a_car
            }
            else {
              if (!(Car.IsDead($.newcar_s1))) {
                if ($.golfped_target.isSittingInCar($.newcar_s1)) {
                  $.newcar_s1.setCruiseSpeed(22.0);
                  $.newcar_s1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                  $.newcar_s1.wanderRandomly();
                  TIMERA = 0;
                  $.target_state = 3;
                }
                else {
                  if (!($.golfped_target.locateOnFootCar2D($.newcar_s1, 35.0, 35.0, false /* FALSE */))) {
                    await pick_a_car();  // SCM GOSUB pick_a_car
                  }
                  if (!(Car.IsDead($.newcar_s1))) {
                    if ($.player1.isInCar($.newcar_s1) && !($.golfped_target.locateOnFootCar2D($.newcar_s1, 5.0, 5.0, false /* FALSE */))) {
                      await pick_a_car();  // SCM GOSUB pick_a_car
                    }
                  }


                }
              }
            }
          }


          if ($.target_state == 3) {
            if (!(Car.IsDead($.newcar_s1))) {
              if (!($.golfped_target.isInCar($.newcar_s1))) {
                await pick_a_car();  // SCM GOSUB pick_a_car
              }
            }
          }

          //out of car
          if ($.target_state == 4) {
            if (TIMERB > 1000) {
              if (!(Char.IsDead($.golfped_target))) {
                $.golfped_target.followPath($.golf_x, $.golf_y, $.golf_z, 2.0, 1 /* RUN */);
              }
              TIMERB = 0;
            }
          }

          //located near the exit
          if ($.target_state == 4) {
            if ($.golfped_target.locateAnyMeans2D(96.0986, 265.837, 27.0, 27.0, false /* FALSE */)) {
              $.target_state = 5;
            }
          }

          //in a car wander around for a bit
          if ($.target_state == 3) {
            if (TIMERA > 75000) {
              if (!(Car.IsDead($.newcar_s1))) {
                if ($.golfped_target.isSittingInCar($.newcar_s1)) {
                  $.newcar_s1.gotoCoordinates(88.973, 280.343994, 21.395437); //escapex_s1 escapey_s1 escapez_s1
                }
              }
            }
          }


          //located near exit in caddy
          if ($.target_state == 3) {
            if ($.golfped_target.locateAnyMeans2D(96.0986, 265.837, 27.0, 27.0, false /* FALSE */)) {
              if ($.golfped_target.isInAnyCar()) {
                $.golfped_target.setObjLeaveAnyCar();
                $.golfped_target.setRunning(true /* TRUE */);
                $.target_state = 5;
              }
            }
          }

          //run through exit
          if ($.target_state == 5) {
            if (!(Char.IsDead($.golfped_target))) {
              if (!($.golfped_target.isInAnyCar())) {
                if (TIMERA > 1000) {
                  $.golfped_target.followPath($.escapex_s1, $.escapey_s1, $.escapez_s1, 1.0, 1 /* RUN */);
                  TIMERA = 0;
                }
              }
            }
          }
          if ($.target_state == 5) {
            if ($.startsecgolf == 0) {
              if (!(Char.IsDead($.security_bloke1))) {
                $.security_bloke1.setHealth(89);
              }
              if (!(Char.IsDead($.security_bloke2))) {
                $.security_bloke2.setHealth(89);
              }
              $.startsecgolf = 1;
            }
          }





        }


      }
    }



    ////////////////////////	BODYGUARDS ATTEMPT TO GET PLAYER IF HE CLOSES IN   ///////////////////////////////


    if ($.bodyguard1_attack == 0) {
      if (!(Char.IsDead($.bodyguard1_s1))) {
        if ($.player1.locateAnyMeansChar3D($.bodyguard1_s1, 10.0, 10.0, 0.6, false /* FALSE */) || $.bodyguard_has_seen_player == 1 || Char.IsDead($.bodyguard2_s1) || Char.IsDead($.bodyguard3_s1) || Char.IsDead($.bodyguard4_s1)) {
          $.bodyguard1_s1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.bodyguard1_s1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.bodyguard1_s1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.bodyguard1_s1.setObjKillPlayerOnFoot($.player1);
          $.bodyguard1_attack = 1;
        }
      }
    }


    if ($.bodyguard2_attack == 0) {
      if (!(Char.IsDead($.bodyguard2_s1))) {
        if ($.player1.locateAnyMeansChar3D($.bodyguard2_s1, 10.0, 10.0, 0.6, false /* FALSE */) || $.bodyguard_has_seen_player == 1 || Char.IsDead($.bodyguard1_s1) || Char.IsDead($.bodyguard3_s1) || Char.IsDead($.bodyguard4_s1)) {
          $.bodyguard2_s1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.bodyguard2_s1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.bodyguard2_s1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.bodyguard2_s1.setObjKillPlayerOnFoot($.player1);
          $.bodyguard2_attack = 1;
        }
      }
    }


    if ($.bodyguard3_attack == 0) {
      if (!(Char.IsDead($.bodyguard3_s1))) {
        if ($.player1.locateAnyMeansChar3D($.bodyguard3_s1, 5.0, 5.0, 0.6, false /* FALSE */) || $.bodyguard_has_seen_player == 1 || Char.IsDead($.bodyguard1_s1) || Char.IsDead($.bodyguard2_s1) || Char.IsDead($.bodyguard4_s1)) {
          $.bodyguard_has_seen_player = 1;
          $.bodyguard3_s1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.bodyguard3_s1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.bodyguard3_s1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.bodyguard3_s1.setObjKillPlayerOnFoot($.player1);
          $.bodyguard3_attack = 1;
        }
      }
    }


    if ($.bodyguard4_attack == 0) {
      if (!(Char.IsDead($.bodyguard4_s1))) {
        if ($.player1.locateAnyMeansChar3D($.bodyguard4_s1, 5.0, 5.0, 0.6, false /* FALSE */) || $.bodyguard_has_seen_player == 1 || Char.IsDead($.bodyguard1_s1) || Char.IsDead($.bodyguard2_s1) || Char.IsDead($.bodyguard3_s1)) {
          $.bodyguard4_s1.setWaitState(0 /* WAITSTATE_FALSE */, 0);
          $.bodyguard4_s1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.bodyguard4_s1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.bodyguard4_s1.setObjKillPlayerOnFoot($.player1);
          $.bodyguard_has_seen_player = 1;
          $.bodyguard4_attack = 1;
        }
      }
    }


    //player shoots in angled area

    if ($.player_is_at_golf_club == 2) {
      if ($.player1.isInAngledArea2D(64.8222, 613.6588, 96.7488, 550.3496, 20.0, false /* FALSE */)) {
        if ($.player1.isShooting()) {
          if ($.player_is_shooting_a1 == 0) {
            $.bodyguard_has_seen_player = 1;
            $.player_is_shooting_a1 = 1;
          }
        }
      }
    }



    //bodyguard 5 in car only attacks once conditions are passed

    if ($.bodyguard5_flag == 0) {
      if (!(Char.IsDead($.golfped_target))) {
        if (!(Char.IsDead($.bodyguard5_s1))) {
          if (!(Car.IsDead($.bodyguard_golfcart))) {
            if ($.bodyguard5_s1.isInCar($.bodyguard_golfcart)) {
              if (!($.bodyguard5_s1.locateAnyMeansChar3D($.golfped_target, 30.0, 30.0, 30.0, false /* FALSE */))) {
                if ($.player1.locateAnyMeansChar3D($.bodyguard5_s1, 25.0, 25.0, 6.0, false /* FALSE */) || $.bodyguard_has_seen_player == 1 || !($.bodyguard5_s1.locateAnyMeans2D($.bodyguard_golfcartx, $.bodyguard_golfcarty, 1.5, 1.5, false /* FALSE */))) {
                  $.bodyguard_golfcart.setCruiseSpeed(24.0);
                  $.bodyguard_golfcart.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                  $.bodyguard5_flag = 1;
                  $.bodyguard_has_seen_player = 1;
                }
              }
            }
            else {
              $.bodyguard5_s1.setObjKillPlayerOnFoot($.player1); //if player drags him out before he is told to attack
              $.bodyguard5_flag = 1;
              $.bodyguard_has_seen_player = 1;
            }
          }
        }
      }
    }

    //target gets out of his golf cart when near exit

    if ($.bodyguard5_flag == 1) {
      if (!(Char.IsDead($.bodyguard5_s1))) {
        if ($.bodyguard5_s1.locateInCar2D(96.0986, 265.837, 35.0, 35.0, false /* FALSE */)) {
          $.bodyguard5_s1.setObjLeaveAnyCar();
        }
      }
      if (!(Char.IsDead($.bodyguard5_s1))) {
        if (!($.bodyguard5_s1.isInAnyCar())) {
          $.bodyguard5_s1.setObjKillPlayerOnFoot($.player1);
          $.bodyguard5_flag = 2;
        }
      }


    }





    ///////////////////////////////	CREATE AND CONTROL ESCAPE CAR FOR TARGET	/////////////////////


    if ($.create_escape_car == 0) {
      if ($.char_has_seen_player > 0) {
        World.ClearArea(102.908, 246.514, 21.6, 3.0, false /* FALSE */);
        $.golfdriver_car_s1 = Car.Create(greenwoo, 102.111, 248.316, 21.5);
        $.golfdriver_car_s1.setHeading(290.299);
        $.golfdriver_s1 = Char.CreateInsideCar($.golfdriver_car_s1, 21 /* PEDTYPE_SPECIAL */, SPECIAL02);
        $.golfdriver_s1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.golfdriver_car_s1.setIdle();
        $.golfdriver_car_s1.setOnlyDamagedByPlayer(true /* TRUE */);
        $.create_escape_car = 1;


      }
    }




    if ($.target_state == 5) {
      if (!(Char.IsDead($.golfped_target))) {
        if (!(Car.IsDead($.golfdriver_car_s1))) {
          if ($.golfped_target.locateOnFoot2D($.escapex_s1, $.escapey_s1, 5.0, 5.0, false /* FALSE */)) {
            if ($.golfped_target.locateAnyMeansCar2D($.golfdriver_car_s1, 20.0, 20.0, false /* FALSE */)) {
              if (!(Char.IsDead($.golfdriver_s1))) {
                if ($.golfdriver_s1.isSittingInCar($.golfdriver_car_s1)) {
                  $.golfped_target.setObjEnterCarAsPassenger($.golfdriver_car_s1);
                  $.golfped_in_car_as_passenger = 1;
                  $.target_state = 6;
                }
                else {
                  $.golfped_in_car_as_driver = 1;
                  $.target_state = 6;
                }
              }
              else {
                $.golfped_in_car_as_driver = 1;
                $.target_state = 6;
              }
            }
            else {
              $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
              $.target_state = 6;
            }


          }
        }
        else {
          $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
          $.target_state = 6;
        }
      }
    }

    //get in car as passenger

    if ($.golfped_in_car_as_passenger == 1) {
      if (!(Char.IsDead($.golfped_target))) {
        if ($.got_out_of_car_flag_s1_pass == 0) {
          if (!(Car.IsDead($.golfdriver_car_s1))) {
            if (!($.player1.isInCar($.golfdriver_car_s1))) {
              if (!(Char.IsDead($.golfdriver_s1))) {
                if ($.golfdriver_s1.isSittingInCar($.golfdriver_car_s1)) {
                  if ($.golfped_target.isSittingInCar($.golfdriver_car_s1)) {
                    $.golfdriver_car_s1.setCruiseSpeed(26.5);
                    $.golfdriver_car_s1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
                    $.golfdriver_car_s1.gotoCoordinates(18.47, -1420.258, 10.318);
                    $.got_out_of_car_flag_s1_pass = 1;
                  }
                }
              }
            }
            else {
              $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
            }
          }
        }
        if ($.got_out_of_car_flag_s1_pass == 1 || $.got_out_of_car_flag_s1_pass == 2) {
          if (!($.golfped_target.isInAnyCar())) {
            $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
          }
        }
        if ($.got_out_of_car_flag_s1_pass == 1) {
          if (!(Car.IsDead($.golfdriver_car_s1))) {
            if (!(Char.IsDead($.golfdriver_s1))) {
              if ($.golfdriver_s1.isSittingInCar($.golfdriver_car_s1)) {
                if (!(Char.IsDead($.golfped_target))) {
                  if ($.golfped_target.isSittingInCar($.golfdriver_car_s1)) {
                    if ($.golfdriver_car_s1.locate2D(18.47, -1420.258, 15.0, 15.0, false /* FALSE */)) {
                      $.golfdriver_car_s1.wanderRandomly();
                      $.got_out_of_car_flag_s1_pass = 2;
                    }
                  }
                }
              }
            }
          }
        }


      }
    }


    //get in car as driver

    if ($.golfped_in_car_as_driver == 1) {
      if (!(Char.IsDead($.golfped_target))) {
        if ($.got_out_of_car_flag_s1_dr == 0) {
          if (!($.golfped_target.isInAnyCar())) {
            if (!(Car.IsDead($.golfdriver_car_s1))) {
              if (!($.player1.isInCar($.golfdriver_car_s1))) {
                $.golfped_target.setObjEnterCarAsDriver($.golfdriver_car_s1);
                $.golfped_target.setRunning(true /* TRUE */);
                $.got_out_of_car_flag_s1_dr = 1;
              }
              else {
                $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
              }
            }
            else {
              $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
            }
          }
        }


        if ($.got_out_of_car_flag_s1_dr == 1) {
          if (!(Car.IsDead($.golfdriver_car_s1))) {
            if ($.golfped_target.isInCar($.golfdriver_car_s1)) {
              $.golfdriver_car_s1.setCruiseSpeed(24.0);
              $.golfdriver_car_s1.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
              $.golfdriver_car_s1.gotoCoordinates(18.47, -1420.258, 10.318);
              $.got_out_of_car_flag_s1_dr = 2;
            }
            else {
              $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
            }
          }
        }
        if ($.got_out_of_car_flag_s1_dr == 2) {
          if (!(Car.IsDead($.golfdriver_car_s1))) {
            if ($.golfped_target.isSittingInCar($.golfdriver_car_s1)) {
              if ($.golfdriver_car_s1.locate2D(18.47, -1420.258, 15.0, 15.0, false /* FALSE */)) {
                $.golfdriver_car_s1.wanderRandomly();
                $.got_out_of_car_flag_s1_dr = 3;
              }
            }
          }
        }
        if ($.got_out_of_car_flag_s1_dr == 2 || $.got_out_of_car_flag_s1_dr == 3) {
          if (!($.golfped_target.isInAnyCar())) {
            $.golfped_target.setObjFleePlayerOnFootAlways($.player1);
          }
        }


      }
    }


    //if the driver is out of the car

    if (!(Char.IsDead($.golfdriver_s1))) {
      if (!($.golfdriver_s1.isInAnyCar())) {
        $.golfdriver_s1.setObjKillPlayerAnyMeans($.player1);
        $.golfdriver_s1.setRunning(true /* TRUE */);
      }
    }

    /////////////////////////// MOVE GUYS IF NOT IN GOLF ZONE	/////////////////////////


    if ($.target_state == 6) {
      if ($.remove_guys_a1 == 0) {
        if (!($.player1.isInZone("GOLFC"))) {
          $.golfcart1_s1.markAsNoLongerNeeded();
          $.golfcart2_s1.markAsNoLongerNeeded();
          $.golfcart3_s1.markAsNoLongerNeeded();
          $.golfcart4_s1.markAsNoLongerNeeded();
          $.caddy2_s1.markAsNoLongerNeeded();
          $.bodyguard_golfcart.markAsNoLongerNeeded();
          $.bodyguard1_s1.markAsNoLongerNeeded();
          $.bodyguard2_s1.markAsNoLongerNeeded();
          $.bodyguard3_s1.markAsNoLongerNeeded();
          $.bodyguard4_s1.markAsNoLongerNeeded();
          $.bodyguard5_s1.markAsNoLongerNeeded();
          $.remove_guys_a1 = 1;
        }
      }
    }

    ///////////////////////////	MISSION PASS AND FAIL STUFF //////////////////////////////

    //player wins if they kill him

    if (Char.IsDead($.golfped_target)) {
      if ($.player_is_at_golf_club > 1) {
        // SCM GOTO → mission_serg1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_serg1_passed"); // fallback: would break linear control flow
      }
    }

    //goes out of range

    if ($.target_state > 5) {
      if (!(Char.IsDead($.golfped_target))) {
        if (!($.player1.locateAnyMeansChar2D($.golfped_target, 210.0, 210.0, false /* FALSE */))) {
          if (!($.golfped_target.isOnScreen())) {
            Text.PrintNow("TEX1_5", 5000, 1);
            // SCM GOTO → mission_serg1_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_serg1_failed"); // fallback: would break linear control flow
          }
        }
      }
    }


  }
}




// **********************************************Mission Serg1 failed*****************************************

async function mission_serg1_failed() {


  Text.PrintBig("M_FAIL", 5000, 1);
}




// **********************************************Mission Serg1 passed*****************************************


async function mission_serg1_passed() {


  $.flag_sergio_mission1_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 500, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(500);
  Stat.RegisterMissionPassed("TEX_1");
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT serg_mission2_loop 
  $.clothes_pickup4 = Pickup.CreateClothes(106.5, 253.0, 21.7, 4);
  $.clothes4_created = 1;
  // START_NEW_SCRIPT cloth3 
}




// **********************************************Mission cleanup***********************************************


async function mission_cleanup_serg1() {


  ONMISSION = 0;
  $.player1.shutUp(false /* FALSE */);
  $.player1.setControl(true /* on */);
  //SWITCH_ROADS_ON 100.0 246.0 21.787 109.868 243.785 21.787

  Streaming.MarkModelAsNoLongerNeeded(WMYGO);
  Streaming.MarkModelAsNoLongerNeeded(caddy);
  Streaming.MarkModelAsNoLongerNeeded(golfclub);
  Streaming.MarkModelAsNoLongerNeeded(greenwoo);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  $.golfped_target_blip.remove();
  $.clothesblip.remove();
  $.golfblip.remove();
  Weather.Release();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);


  if ($.mansion_clothes_created == 1) {
    $.mansion_clothes = Pickup.CreateClothes(-384.5, -591.9, 25.3, 1);
  }


  if ($.hotel_clothes_created == 1) {
    $.clothes_pickup1 = Pickup.CreateClothes(226.4, -1265.6, 20.1, 1);
  }


  if ($.safehouse_created2 == 1) {
    $.safehouse_clothes2 = Pickup.CreateClothes(-820.2, 1364.1, 66.4, 1);
  }


  if ($.clothes2_created == 1) {
    $.clothes_pickup2 = Pickup.CreateClothes(97.5, -1133.6, 10.4, 2);
  }


  if ($.clothes3_created == 1) {
    $.clothes_pickup3 = Pickup.CreateClothes(364.2, 1086.1, 19.0, 3);
  }


  if ($.clothes4_created == 1) {
    if (!($.flag_sergio_mission1_passed == 1)) {
      $.clothes_pickup4 = Pickup.CreateClothes(106.5, 253.0, 21.7, 4);
    }
  }


  if ($.clothes5_created == 1) {
    $.clothes_pickup5 = Pickup.CreateClothes(-1024.5, -433.9, 10.9, 5);
  }


  if ($.clothes6_created == 1) {
    $.clothes_pickup6 = Pickup.CreateClothes(405.7, -485.6, 12.3, 6);
  }


  if ($.clothes7_created == 1) {
    $.clothes_pickup7 = Pickup.CreateClothes(414.3, 1042.0, 25.4, 8);
  }


  if ($.clothes8_created == 1) {
    $.clothes_pickup8 = Pickup.CreateClothes(158.3, -1275.9, 10.6, 9);
  }


  if ($.clothes9_created == 1) {
    $.clothes_pickup9 = Pickup.CreateClothes(-917.4, 885.1, 11.0, 10);
  }


  if ($.clothes13_created == 1) {
    $.clothes_pickup13 = Pickup.CreateClothes(465.3, -57.4, 15.7, 7);
  }






  Mission.Finish();
}





////////////////////////////////////////////////	GOSUB pick the cars //////////////////////////////////////////////

async function pick_a_car() {


  if (!(Char.IsDead($.golfped_target))) {
    $.shortest_dist_s1 = 99999.9;
    $.newcar_s1 = -1;


    const _res477 = $.golfped_target.getCoordinates();
$.golfped_lx = _res477.x;
$.golfped_ly = _res477.y;
$.golfped_lz = _res477.z;
    if (!(Car.IsDead($.golfcart1_s1))) {
      if (!($.golfcart1_s1.isInWater())) {
        $.driver_s1 = $.golfcart1_s1.getDriver(); //driver_s1 driver_s1 driver_s1
        if ($.driver_s1 == -1) {
          if ($.golfped_target.locateOnFootCar2D($.golfcart1_s1, 35.0, 35.0, false /* FALSE */)) {
            const _res478 = $.golfcart1_s1.getCoordinates();
$.golfcaddyx_s1 = _res478.x;
$.golfcaddyy_s1 = _res478.y;
$.golfcaddyz_s1 = _res478.z;
            $.distancetocarx_s1 = $.golfcaddyx_s1 - $.golfped_lx;
            $.distancetocary_s1 = $.golfcaddyy_s1 - $.golfped_ly;
            $.distance_to_car_s1x = $.distancetocarx_s1 * $.distancetocarx_s1;
            $.distance_to_car_s1y = $.distancetocary_s1 * $.distancetocary_s1;
            $.how_far_is_car = $.distance_to_car_s1y + $.distance_to_car_s1x;
            if ($.how_far_is_car < $.shortest_dist_s1) {
              $.shortest_dist_s1 = $.how_far_is_car;
              $.newcar_s1 = $.golfcart1_s1;
            }
          }
        }
      }
    }


    if (!(Car.IsDead($.golfcart2_s1))) {
      if (!($.golfcart2_s1.isInWater())) {
        $.driver_s1 = $.golfcart2_s1.getDriver(); //driver_s1 driver_s1 driver_s1
        if ($.driver_s1 == -1) {
          if ($.golfped_target.locateOnFootCar2D($.golfcart2_s1, 35.0, 35.0, false /* FALSE */)) {
            const _res479 = $.golfcart2_s1.getCoordinates();
$.golfcaddyx_s1 = _res479.x;
$.golfcaddyy_s1 = _res479.y;
$.golfcaddyz_s1 = _res479.z;
            $.distancetocarx_s1 = $.golfcaddyx_s1 - $.golfped_lx;
            $.distancetocary_s1 = $.golfcaddyy_s1 - $.golfped_ly;
            $.distance_to_car_s1x = $.distancetocarx_s1 * $.distancetocarx_s1;
            $.distance_to_car_s1y = $.distancetocary_s1 * $.distancetocary_s1;
            $.how_far_is_car = $.distance_to_car_s1y + $.distance_to_car_s1x;
            if ($.how_far_is_car < $.shortest_dist_s1) {
              $.shortest_dist_s1 = $.how_far_is_car;
              $.newcar_s1 = $.golfcart2_s1;
            }
          }
        }
      }
    }


    if (!(Car.IsDead($.golfcart3_s1))) {
      if (!($.golfcart3_s1.isInWater())) {
        $.driver_s1 = $.golfcart3_s1.getDriver(); //driver_s1 driver_s1 driver_s1
        if ($.driver_s1 == -1) {
          if ($.golfped_target.locateOnFootCar2D($.golfcart3_s1, 35.0, 35.0, false /* FALSE */)) {
            const _res480 = $.golfcart3_s1.getCoordinates();
$.golfcaddyx_s1 = _res480.x;
$.golfcaddyy_s1 = _res480.y;
$.golfcaddyz_s1 = _res480.z;
            $.distancetocarx_s1 = $.golfcaddyx_s1 - $.golfped_lx;
            $.distancetocary_s1 = $.golfcaddyy_s1 - $.golfped_ly;
            $.distance_to_car_s1x = $.distancetocarx_s1 * $.distancetocarx_s1;
            $.distance_to_car_s1y = $.distancetocary_s1 * $.distancetocary_s1;
            $.how_far_is_car = $.distance_to_car_s1y + $.distance_to_car_s1x;
            if ($.how_far_is_car < $.shortest_dist_s1) {
              $.shortest_dist_s1 = $.how_far_is_car;
              $.newcar_s1 = $.golfcart3_s1;
            }
          }
        }
      }
    }
    if (!(Car.IsDead($.golfcart4_s1))) {
      if (!($.golfcart4_s1.isInWater())) {
        $.driver_s1 = $.golfcart4_s1.getDriver(); //driver_s1 driver_s1 driver_s1
        if ($.driver_s1 == -1) {
          if ($.golfped_target.locateOnFootCar2D($.golfcart4_s1, 35.0, 35.0, false /* FALSE */)) {
            const _res481 = $.golfcart4_s1.getCoordinates();
$.golfcaddyx_s1 = _res481.x;
$.golfcaddyy_s1 = _res481.y;
$.golfcaddyz_s1 = _res481.z;
            $.distancetocarx_s1 = $.golfcaddyx_s1 - $.golfped_lx;
            $.distancetocary_s1 = $.golfcaddyy_s1 - $.golfped_ly;
            $.distance_to_car_s1x = $.distancetocarx_s1 * $.distancetocarx_s1;
            $.distance_to_car_s1y = $.distancetocary_s1 * $.distancetocary_s1;
            $.how_far_is_car = $.distance_to_car_s1y + $.distance_to_car_s1x;
            if ($.how_far_is_car < $.shortest_dist_s1) {
              $.shortest_dist_s1 = $.how_far_is_car;
              $.newcar_s1 = $.golfcart4_s1;
            }
          }
        }
      }
    }
    if ($.newcar_s1 == -1 || $.no_of_times_picked_a_new_car > 3) {
      $.golfped_target.setObjNoObj();
      $.golfped_target.followPath($.golf_x, $.golf_y, $.golf_z, 15.0, 1 /* RUN */);
      $.golfped_target.setRunning(true /* TRUE */);
      $.target_state = 4;
      TIMERB = 0;
    }
    else {
      $.golfped_target.setObjEnterCarAsDriver($.newcar_s1);
      $.golfped_target.setRunning(true /* TRUE */);
      $.target_state = 1;
      $.no_of_times_picked_a_new_car++;
    }


  }
}

export async function serg1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Sergio 1****************************************
  // *****************************************Four Iron***************************************

  // This mission is actually Avery Carrington 1 : Four Iron.

  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************





  // SCRIPT_NAME serg1


  // Mission start stuff


  await mission_start_serg1();  // SCM GOSUB mission_start_serg1


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_serg1_failed();  // SCM GOSUB mission_serg1_failed
  }


  await mission_cleanup_serg1();  // SCM GOSUB mission_cleanup_serg1


  // MissionBoundary

  // Variables for mission

  // VAR_INT golfblip
  // VAR_INT bodyguard1_s1 bodyguard2_s1 bodyguard3_s1 bodyguard4_s1 bodyguard5_s1 golfped_target
  // VAR_INT clothesblip
  // VAR_INT target_caddy other_caddy
  // VAR_INT caddy2_s1
  // VAR_INT golfped_target_blip
  // VAR_INT golfattendant
  // VAR_INT golfer1
  // VAR_INT golfer2
  // VAR_INT golfer3
  // VAR_INT golfer4
  // VAR_INT golfer5
  // VAR_INT golfer6
  // VAR_INT golfdriver_s1
  // VAR_INT golfdriver_car_s1


  // VAR_FLOAT escapex_s1 escapey_s1 escapez_s1


  // VAR_INT golfcart1_s1
  // VAR_INT golfcart2_s1
  // VAR_INT golfcart3_s1
  // VAR_INT golfcart4_s1
  // VAR_INT bodyguard_golfcart


  //VAR_FLOAT clothes_shopX clothes_shopY clothes_shopZ

  // VAR_FLOAT golf_x golf_y golf_z
  // VAR_FLOAT bodyguard1x_s1 bodyguard1y_s1 bodyguard1z_s1
  // VAR_FLOAT bodyguard2x_s1 bodyguard2y_s1 bodyguard2z_s1
  // VAR_FLOAT bodyguard3x_s1 bodyguard3y_s1 bodyguard3z_s1
  // VAR_FLOAT bodyguard4x_s1 bodyguard4y_s1 bodyguard4z_s1
  // VAR_FLOAT bodyguard_golfcartx bodyguard_golfcarty bodyguard_golfcartz bodyguard_golfcart_heading
  // VAR_FLOAT bodyguard1_s1heading bodyguard2_s1heading bodyguard3_s1heading bodyguard4_s1heading


  // VAR_FLOAT golfped_targetx golfped_targety golfped_targetz
  // VAR_FLOAT loc_golfped_targetx loc_golfped_targety loc_golfped_targetz
  // VAR_FLOAT ped_zed


  // VAR_FLOAT golfcart1x_s1 golfcart1y_s1 golfcart1z_s1
  // VAR_FLOAT golfcart2x_s1 golfcart2y_s1 golfcart2z_s1
  // VAR_FLOAT golfcart3x_s1 golfcart3y_s1 golfcart3z_s1
  // VAR_FLOAT golfcart4x_s1 golfcart4y_s1 golfcart4z_s1
  // VAR_FLOAT golfcart1heading_s1
  // VAR_FLOAT golfcart2heading_s1
  // VAR_FLOAT golfcart3heading_s1
  // VAR_FLOAT golfcart4heading_s1

  //find car
  //VAR_FLOAT findcarx_s1 findcary_s1 findcarz_s1 findcarx2_s1 findcary2_s1
  //VAR_INT newcar_s1 return_car_model_s1 playercar_s1

  //rogue variables

  // VAR_FLOAT ped1_x ped1_y ped2_x ped2_y ped3_x ped3_y
  // VAR_INT mission_blip1

  //flags

  // VAR_INT has_player_been_to_clothes_shop
  // VAR_INT player_is_at_golf_club
  // VAR_INT target_in_caddy newcar_s1


  // VAR_INT get_next_car
  //VAR_INT char_is_attempting_to_get_in_car

  // VAR_INT char_is_in_car
  // VAR_INT bg_is_in_car
  // VAR_INT char_outside_golf_club
  //VAR_INT char_is_not_in_car

  //bodyguard 3 get in car stuff

  // VAR_INT char_is_in_carbg3 newcarbg3_s1
  // VAR_INT golfped_targetcheck bodyguard3_check

  //bodyguard 2 get in car stuff

  // VAR_INT char_is_in_carbg2 newcarbg2_s1 char_has_not_been_told

  //bodyguard 5 stuff

  // VAR_INT got_out_of_car_flag_s1 bodyguard5_flag


  // VAR_INT bodyguard1_attack bodyguard2_attack bodyguard3_attack bodyguard4_attack

  //////New get in car stuff

  // VAR_INT no_of_times_picked_a_new_car target_state char_has_seen_player keep_compiler_happy driver_s1 bodyguard_has_seen_player
  // VAR_FLOAT distancetocarx_s1 distancetocary_s1 distance_to_car_s1y distance_to_car_s1x
  // VAR_FLOAT golfcaddyx_s1 golfcaddyy_s1 golfcaddyz_s1
  // VAR_FLOAT golfped_lx golfped_ly golfped_lz
  // VAR_FLOAT how_far_is_car shortest_dist_s1




  // VAR_INT golfped_in_car_as_passenger
  // VAR_INT golfped_in_car_as_driver
  // VAR_INT got_out_of_car_flag_s1_pass
  // VAR_INT got_out_of_car_flag_s1_dr
  // VAR_INT create_escape_car


  // VAR_INT playingaudio_s1
  // VAR_INT playingaudiostate_s1




  // VAR_INT niceaudio_s1 isnotme_s1
  // VAR_INT playingaudio1_s1
  // VAR_INT playingaudiostate1_s1
  // VAR_INT playingaudio2_s1
  // VAR_INT playingaudiostate2_s1 startsecgolf carwander_randomly_flag golfhelptext_s1 target_said_first_line player_is_shooting_a1
  // VAR_INT remove_guys_a1


  //TEMP
  //VAR_FLOAT clothes_shopX clothes_shopY clothes_shopZ



  //timera

  TIMERA = 0;

  // ****************************************Mission Start************************************


}
