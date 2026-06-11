// Generated from main/general3.sc

import { $ } from "../utils/vars.mts";

async function mission_start_general3() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  await asyncWait(0);


  Text.LoadMissionText("GENERA3");
  Shortcut.SetDropoffPointForMission(-163.0, -1439.4, 9.0, 201.5);

  //intialiasing flags

  $.protect_deal_flag = 0;

  // Values for coords

  $.gun_g3x = 156.0404;
  $.gun_g3y = -1193.3239;
  $.gun_g3z = 17.8427;



  $.dealcarx_g3goto = 462.29;
  $.dealcary_g3goto = -486.0;
  $.dealcarz_g3goto = 10.48;


  $.dealcarx_g3 = 463.460907;
  $.dealcary_g3 = -461.31783;
  $.dealcarz_g3 = 9.486246;
  $.dealcar_heading = 178.791;


  $.meetingx_s3 = 457.6495;
  $.meetingy_s3 = -512.88;
  $.meetingz_s3 = 9.899857;


  $.roofposx = 454.1362;
  $.roofposy = -503.93733;
  $.roofposz = 16.9188;


  $.lanceposx = 462.877;
  $.lanceposy = -514.963;
  $.lanceposz = 16.951;
  $.lanceheadingpos = 12.838;



  $.otherdeal_carx = 446.7785;
  $.otherdeal_cary = -525.1792;
  $.otherdeal_carz = 9.5282;
  $.otherdealheading = 315.6846;


  $.scriptedcut3 = 0;

  //haiti car 1

  $.createhncar1 = 0;
  $.hncar1x = 497.029999;
  $.hncar1y = -518.829;
  $.hncar1z = 10.6891;
  $.hncar1heading = 163.719;
  $.hncar1xgoto = 455.754;
  $.hncar1ygoto = -528.0207;

  //haiti car 2

  $.createhncar2 = 0;
  $.hncar2x = 423.574;
  $.hncar2y = -513.052;
  $.hncar2z = 9.774;
  $.hncar2heading = 248.0281;
  $.hncar2xgoto = 451.082;
  $.hncar2ygoto = -523.164;
  $.hncar2zgoto = 10.4;

  //haiti car 3

  $.createhncar3 = 0;
  $.hncar3x = 486.535;
  $.hncar3y = -537.118;
  $.hncar3z = 11.191;
  $.hncar3heading = 250.382;

  //haiati car 4

  $.createhncar4 = 0;
  $.hncar4x = 465.478;
  $.hncar4y = -416.186;
  $.hncar4z = 11.2568;
  $.hncar4heading = 172.784;
  $.hncar4xgoto = 459.131;
  $.hncar4ygoto = -485.317;
  $.hncar4zgoto = 11.136;

  //haiti car 5

  $.createhncar5 = 0;
  $.hncar5x = 425.64;
  $.hncar5y = -513.68;
  $.hncar5z = 9.785;
  $.hncar5heading = 245.37;
  $.hncar5xgoto = 451.121;
  $.hncar5ygoto = -519.820;
  $.hncar5zgoto = 10.486;



  $.bust_guy5 = 0;
  $.bust_guy6 = 0;
  $.bust_guy7 = 0;
  $.bust_guy8 = 0;
  $.bust_guy11 = 0;
  $.bust_guy12 = 0;
  $.bust_guy13 = 0;
  $.bust_guy14 = 0;
  $.bust_guy17 = 0;
  $.bust_guy18 = 0;




  $.car1hasgone = 0;
  $.car2hasgone = 0;
  $.car3hasgone = 0;
  $.car4hasgone = 0;
  $.car5hasgone = 0;
  $.introcut = 0;



  $.playingaudio = 0;
  $.playingaudiostate = 0;
  $.cbgooncounter1 = 0;
  $.buddyshootcounter = 0;



  $.player_left_buddy_behind_g3 = 0;
  $.buddy_ingroup_g3 = 0;


  $.got_out_of_car_flag_g3 = 0;



  $.player_is_on_ground = 0;
  $.you_got_the_case_back_g3 = 0;
  $.buddy1help = 0;
  $.bustthedealtext = 0;
  $.removetempblip_g3 = 0;


  $.car1hasgone = 0;

  // reset flags

  $.protect_deal_flag = 0;
  $.diazmoved_g3 = 0;
  $.tommydiaz_audio_flag = 0;
  $.rugerhelp_g3 = 0;
  $.motorbikeshootfwd_help = 0;
  $.monoflag_g3 = 0;

  // ****************************************START OF CUTSCENE********************************


  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp03, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp04, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp05, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp24, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp25, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp28, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp32, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp35, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp41, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp47, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp50, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp51, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp64, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp70, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp71, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp72, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp73, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODargohull2, false /* FALSE */);


  Audio.LoadMissionAudio(1, "mono_9" as any);


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CScolo");


  const _res205 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res205.x;
$.the_yacht_y = _res205.y;
$.the_yacht_z = _res205.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  Streaming.LoadScene($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    //OR NOT HAS_MODEL_LOADED cut_obj1
    //OR NOT HAS_MODEL_LOADED cut_obj2
    await asyncWait(0);


  }


  Camera.SetNearClip(0.1);
  Cutscene.Load("col_3a");
  const _res206 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res206.x;
$.the_yacht_y = _res206.y;
$.the_yacht_z = _res206.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);



  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_colonel = CutsceneObject.Create(SPECIAL02);
  $.cs_colonel.setAnim("CScolo");

  //CREATE_CUTSCENE_HEAD cs_ken CUT_OBJ2 cs_kenhead
  //SET_CUTSCENE_HEAD_ANIM cs_kenhead lawyer

  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player1

  //hide player

  World.ClearArea(-244.2799, -1360.6704, 7.0786, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-244.2799, -1360.6704, 7.0786);
  $.player1.setHeading(279.1362);
  //SET_AREA_VISIBLE VIS_STRIP_CLUB


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);


  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();



  while ($.cs_time < 2880) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_A", 10000, 1); //Thomas I appreciate you coming



  while ($.cs_time < 4968) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_B", 10000, 1); //Forgive for getting straight to business



  while ($.cs_time < 8932) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_C", 10000, 1); //Diaz has asked me to oversee a minor business transaction.



  while ($.cs_time < 11868) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_D", 10000, 1); //Let's hope it goes better than last time


  while ($.cs_time < 13573) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_E", 10000, 1); //Which is why I thought of you, my friend



  while ($.cs_time < 16601) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_F", 10000, 1); //I've dropped some protection at the multistory carpark.



  while ($.cs_time < 19737) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_G", 10000, 1); //Pick it up then go and watch over Diaz's men at the drop off.



  while ($.cs_time < 23717) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN3_H", 10000, 1); //Gracias amigo




  while ($.cs_time < 24768) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }



  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Text.ClearPrints();


  await asyncWait(1000);


  if (!(Cutscene.WasSkipped())) {
    if (Audio.HasMissionAudioLoaded(1)) {
      Audio.PlayMissionAudio(1);
      $.monoflag_g3 = 1;
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


  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp03, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp04, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp05, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp24, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp25, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp28, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp32, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp35, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp41, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp47, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp50, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp51, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp64, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp70, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp71, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp72, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODcargoshp73, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(-647.0, -1323.0, 19.9, 100.0, LODargohull2, true /* TRUE */);


  Streaming.RequestCollision(-244.2799, -1360.6704);
  World.ClearArea(-244.2799, -1360.6704, 7.0786, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-244.2799, -1360.6704, 7.0786);
  $.player1.setHeading(279.1362);
  Camera.SetBehindPlayer();


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  // ****************************************END OF CUTSCENE**********************************


  Streaming.RequestModel(admiral);
  Streaming.RequestModel(CLa); //diaz bg1
  Streaming.RequestModel(CLb); //diaz bg2
  Streaming.RequestModel(INFERNUS);
  Streaming.RequestModel(UZI);
  Streaming.RequestModel(RUGER);


  Streaming.LoadSpecialCharacter(1, "IGbuddy");
  Streaming.LoadSpecialCharacter(2, "IGdiaz");


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }



  while (!(Streaming.HasModelLoaded(admiral)) || !(Streaming.HasModelLoaded(CLa)) || !(Streaming.HasModelLoaded(CLb)) || !(Streaming.HasModelLoaded(INFERNUS)) || !(Streaming.HasModelLoaded(UZI))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(RUGER))) {
    await asyncWait(0);
  }

  ///////////////////////////////////// PC FIX PC FIX PC FIX

  if ($.monoflag_g3 == 1) {
    while (!(Audio.HasMissionAudioFinished(1))) {
      await asyncWait(0);
    }
  }
  //////////////////////////////////// PC FIX PC FIX PC FIX


  Audio.LoadMissionAudio(1, "COL3_1" as any);
  Audio.LoadMissionAudio(2, "COL3_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }



  Weather.ForceNow(4 /* WEATHER_EXTRA_SUNNY */);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  $.gun_g3 = Pickup.CreateWithAmmo(RUGER, 3 /* PICKUP_ONCE */, 210, $.gun_g3x, $.gun_g3y, $.gun_g3z);


  $.gun_g3_blip = Blip.AddForPickup($.gun_g3);


  Text.PrintNow("GEN3_20", 10000, 2);


  Char.SetEnterCarRangeMultiplier(3.0);
}



async function general3_mission_loop() {
  // SCM GOTO → general3_mission_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    /////////////////////////////	Get to the weapon and meet Buddy ///////////////////////////

    //////////////////////////////////////

    if ($.player1.locateAnyMeans2D(457.6495, -512.88, 100.0, 100.0, false /* FALSE */)) {
      $.player1.alterWantedLevel(0);
    }



    //create gun and buddy goes to player

    if ($.introcut == 0) {
      if ($.protect_deal_flag == 0) {
        if ($.gun_g3.hasBeenCollected()) {
          $.player1.setControl(false /* OFF */);
          Hud.SwitchWidescreen(true /* ON */);
          Streaming.MarkModelAsNoLongerNeeded(RUGER);
          await asyncWait(100);
          $.buddyscar_g3 = Car.Create(infernus, 132.7045, -1211.9244, 15.2615);
          $.buddyscar_g3.setHeading(358.8415);
          $.buddyscar_g3.changeColor(1 /* CARCOLOUR_WHITE */, 1 /* CARCOLOUR_WHITE */);
          $.buddy_g3 = Char.CreateInsideCar($.buddyscar_g3, 21 /* PEDTYPE_SPECIAL */, SPECIAL01);
          $.buddy_g3.clearThreatSearch();
          $.buddy_g3.setNeverTargeted(true /* TRUE */);
          $.buddyscar_g3.setIdle();
          $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
          $.buddy_g3.setHealth(600);
          $.buddyscar_g3.gotoCoordinatesAccurate(132.4825, -1199.1467, 16.7405);
          $.buddyscar_g3.setCruiseSpeed(15.0);
          World.ClearArea(132.7045, -1211.9244, 15.2615, 30.0, true /* TRUE */);
          Camera.SetFixedPosition(146.456787, -1198.274536, 17.666983, 0.0, 0.0, 0.0);
          Camera.PointAtChar($.buddy_g3, 15 /* FIXED */, 2 /* JUMP_CUT */);
          World.ClearArea(154.7630, -1193.6187, 16.7333, 8.0, true /* TRUE */);
          $.player1.setCoordinates(154.7630, -1193.6187, 16.7333);
          $.player1.setHeading(122.5278);
          $.introcut = 1;
          $.protect_deal_flag = 1;
          TIMERA = 0;
        }
      }
    }





    if ($.introcut == 1) {
      if ($.protect_deal_flag == 1) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!(Car.IsDead($.buddyscar_g3))) {
            if ($.buddyscar_g3.locate3D(132.4825, -1199.1467, 16.7405, 3.0, 3.0, 3.0, false /* FALSE */)) {
              $.player1.setCoordinates(154.7630, -1193.6187, 16.7333);
              $.player1.setHeading(122.5278);
              $.buddyscar_g3.gotoCoordinatesAccurate(151.2979, -1196.1636, 16.7405);
              $.buddyscar_g3.setCruiseSpeed(15.0);
              $.introcut = 2;
              TIMERA = 0;
            }
            else {
              if (TIMERA > 25000) {
                $.buddyscar_g3.setCoordinates(133.0962, -1199.2028, 16.7405); //safety timer
                $.buddyscar_g3.setHeading(272.7057); //safety timer
                TIMERA = 0;
              }
            }
          }
        }
      }
    }



    if ($.introcut == 2) {
      if ($.protect_deal_flag == 1) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!(Car.IsDead($.buddyscar_g3))) {
            if ($.buddyscar_g3.locate3D(151.2979, -1196.1636, 16.7405, 3.0, 3.0, 3.0, false /* FALSE */)) {
              $.buddyscar_g3.setIdle();
              await asyncWait(750);
              Camera.SetFixedPosition(155.740005, -1190.987915, 17.963013, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(155.10318, -1191.756714, 17.906145, 2 /* JUMP_CUT */);
              if (!(Char.IsDead($.buddy_g3))) {
                if (!(Car.IsDead($.buddyscar_g3))) {
                  $.buddy_g3.setObjLeaveCar($.buddyscar_g3);
                  $.player1.turnToFaceChar($.buddy_g3);
                  TIMERA = 0;
                }
              }
              $.introcut = 3;
              TIMERA = 0;
            }
            else {
              if (TIMERA > 25000) {
                $.buddyscar_g3.setCoordinates(151.3173, -1196.1471, 16.7405); //safety timer
                $.buddyscar_g3.setHeading(268.9265); //safety timer
                TIMERA = 0;
              }
            }
          }
        }
      }
    }



    if ($.introcut == 3) {
      if ($.protect_deal_flag == 1) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!($.buddy_g3.isInAnyCar())) {
            $.buddy_g3.setObjWalkToChar($.scplayer);
            TIMERA = 0;
            Text.PrintNow("GEN3_1", 5000, 1); //Hogging all the action I see...
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.buddy_g3))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("GEN3_1");
            $.introcut = 4;
          }
        }
      }
    }



    if (!(Char.IsDead($.buddy_g3))) {
      if ($.introcut == 4) {
        if ($.protect_deal_flag == 1) {
          if ($.buddy_g3.isObjectivePassed() || TIMERA > 20000) {

            //SET_CHAR_WAIT_STATE scplayer WAITSTATE_PLAYANIM_CHAT 10000
            Text.PrintNow("GEN3_2", 5000, 1); //Look, you wanna be some use other than just shadowing me everywhere,
            Audio.PlayMissionAudio(2);
            while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.buddy_g3))) {
              await asyncWait(0);
              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                // SCM GOTO → endguardian1cs (not lowered; manual jump required)
                throw new Error("unresolved GOTO endguardian1cs"); // fallback: would break linear control flow
              }
            }
            Audio.ClearMissionAudio(2);
            Text.ClearThisPrint("GEN3_2");
            //SET_CHAR_WAIT_STATE scplayer WAITSTATE_FALSE 100

            Audio.LoadMissionAudio(1, "COL3_2a" as any);
            Audio.LoadMissionAudio(2, "COL3_2b" as any);
            while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
              await asyncWait(0);
            }
            Camera.SetFixedPosition(156.172348, -1199.139648, 18.431152, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(155.531525, -1198.387207, 18.278060, 2 /* JUMP_CUT */);
            if (!(Char.IsDead($.buddy_g3))) {
              $.buddy_g3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
            }
            Text.PrintNow("GEN3_3", 5000, 1); //I might just do that. The name's Lance, by the way.
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.buddy_g3))) {
              await asyncWait(0);
              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                // SCM GOTO → endguardian1cs (not lowered; manual jump required)
                throw new Error("unresolved GOTO endguardian1cs"); // fallback: would break linear control flow
              }
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("GEN3_3");
            if (!(Char.IsDead($.buddy_g3))) {
              $.buddy_g3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            }

            //SET_CHAR_WAIT_STATE scplayer WAITSTATE_PLAYANIM_CHAT 10000
            Text.PrintNow("GEN3_4", 5000, 1); //Tommy Vercetti...Lets go
            Audio.PlayMissionAudio(2);
            while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.buddy_g3))) {
              await asyncWait(0);
              if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
                // SCM GOTO → endguardian1cs (not lowered; manual jump required)
                throw new Error("unresolved GOTO endguardian1cs"); // fallback: would break linear control flow
              }
            }
            Audio.ClearMissionAudio(2);
            Text.ClearThisPrint("GEN3_4");
            //SET_CHAR_WAIT_STATE scplayer WAITSTATE_FALSE 100

            // SCM label endguardian1cs
            Audio.ClearMissionAudio(1);
            Audio.ClearMissionAudio(2);
            $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100); //skip cutscene
            if (!(Char.IsDead($.buddy_g3))) {
              $.buddy_g3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            }
            Text.ClearSmallPrints();
            Audio.LoadMissionAudio(1, "COL3_3" as any);
            Audio.LoadMissionAudio(2, "COL3_4" as any);
            while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
              await asyncWait(0);
            }
            if (!(Char.IsDead($.buddy_g3))) {
              $.buddy_g3.followPlayer($.player1);
              $.buddy_g3.setAsPlayerFriend($.player1, true /* TRUE */);
              $.buddy_ingroup_g3 = 1;
              $.buddy_g3.setRunning(true /* TRUE */);
            }
            TIMERA = 0;


            Hud.SwitchWidescreen(false /* OFF */);
            $.player1.setControl(true /* ON */);
            Camera.RestoreJumpcut();
            $.meeting_blip_s3 = Blip.AddForCoord($.meetingx_s3, $.meetingy_s3, 11.062);
            Text.PrintNow("GEN3_44", 10000, 2);
            Audio.SetRadioChannel(3 /* FEVER */, -1);
            $.protect_deal_flag = 2;


          }
        }
      }
    }


    if ($.protect_deal_flag == 2) {
      if ($.rugerhelp_g3 == 0) {
        if (TIMERA > 9500) {
          Text.PrintHelp("GEN3_57"); // ruger blah blah
          TIMERA = 0;
          $.rugerhelp_g3 = 1;
        }
      }
    }


    if ($.protect_deal_flag == 2) {
      if ($.rugerhelp_g3 == 1) {
        if (TIMERA > 9500) {
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 3) {
            Text.PrintHelp("GEN3_59"); //target R1, Then fire using the | button
            TIMERA = 0;
            $.rugerhelp_g3 = 2;
          }
          else {
            Text.PrintHelp("GEN3_58"); //target R1, Then fire using the | button
            TIMERA = 0;
            $.rugerhelp_g3 = 2;
          }
        }
      }
    }


    if ($.protect_deal_flag == 2) {
      if ($.rugerhelp_g3 == 2) {
        if (TIMERA > 9500) {
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 3) {
            Text.PrintHelp("GEN3_62"); // Then fire using the circle button
            TIMERA = 0;
            $.rugerhelp_g3 = 3;
          }
          else {
            if ($.controlmode == 2) {
              Text.PrintHelp("GEN3_61"); // Then fire using the circle button
              TIMERA = 0;
              $.rugerhelp_g3 = 3;
            }
            else {
              Text.PrintHelp("GEN3_60"); // Then fire using the circle button
              TIMERA = 0;
              $.rugerhelp_g3 = 3;
            }
          }
        }
      }
    }



    /////////////////////////////	Meet the Coke Baron	/////////////////////////////

    //create the coke baron and his crew

    //Do this bit so the player gets out of his car and then walks towards the coke baron
    //Once the player is within a certain range the coke baron gets out of his car and walks
    //to the player

    //player meets the coke baron

    if ($.protect_deal_flag == 2) {
      if (!(Char.IsDead($.buddy_g3))) {
        if ($.player1.locateStoppedAnyMeans3D($.meetingx_s3, $.meetingy_s3, $.meetingz_s3, 3.0, 3.0, 1.5, true /* TRUE */)) {
          if ($.buddy_g3.locateStoppedAnyMeans3D($.meetingx_s3, $.meetingy_s3, $.meetingz_s3, 3.0, 3.0, 1.5, false /* FALSE */)) {
            Streaming.MarkModelAsNoLongerNeeded(INFERNUS);
            $.buddyscar_g3.markAsNoLongerNeeded();
            Path.SwitchPedRoadsOff(378.103, -785.55, -10.908, 448.572, -365.738, 15.096);
            Path.SwitchRoadsOff(378.103, -785.55, -10.908, 448.572, -365.738, 15.096);
            Path.SwitchPedRoadsOff(461.047, -407.806, -5.549, 470.150, -391.0296, 16.9967);
            Path.SwitchRoadsOff(461.047, -407.806, -5.549, 470.150, -391.0296, 16.9967);
            Path.SwitchPedRoadsOff(435.0, -524.0, 8.06, 471.0, -543.0, 10.22);
            Path.SwitchRoadsOff(435.0, -524.0, 8.06, 471.0, -543.0, 10.22);
            Path.SwitchPedRoadsOff(459.0238, -516.2858, -9.8426, 442.6711, -521.8006, 9.3815);
            Path.SwitchPedRoadsOff(453.8270, -521.7261, -9.8193, 458.1206, -518.6826, 9.8448);
            Path.SwitchPedRoadsOff(463.6935, -522.5222, -9.9304, 458.2091, -523.7589, 9.9072);
            Path.SwitchRoadsOff(360.1251, -718.2709, 5.6599, 358.0144, -714.4711, 15.5665);


            $.player1.setControl(false /* OFF */);
            Hud.SwitchWidescreen(true /* ON */);
            $.meeting_blip_s3.remove();
            $.buddy_ingroup_g3 = 2;
            if ($.player1.isInAnyCar()) {
              $.scplayer.setObjLeaveAnyCar();
            }
            if ($.buddy_g3.isInAnyCar()) {
              $.buddy_g3.setObjLeaveAnyCar();
            }
            World.ClearArea($.dealcarx_g3, $.dealcary_g3, 50.0, 50.0, true /* TRUE */);
            $.coke_barons_car = Car.Create(admiral, $.dealcarx_g3, $.dealcary_g3, $.dealcarz_g3);
            $.coke_barons_car.changeColor(8 /* CARCOLOUR_LIGHTBLUEGREY */, 8 /* CARCOLOUR_LIGHTBLUEGREY */);
            $.coke_barons_car.setHeading($.dealcar_heading);
            $.coke_barons_car.setIdle();
            $.coke_barons_car.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.coke_barons_car.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
            $.coke_barons_car.setCanBurstTires(false /* FALSE */);
            $.coke_baron_g3 = Char.CreateInsideCar($.coke_barons_car, 10 /* PEDTYPE_GANG_DIAZ */, SPECIAL02);
            $.coke_barons_car.setIdle();
            $.coke_baron_g3.clearThreatSearch();
            $.coke_baron_g3.setHealth(500); //coke baron health
            $.coke_baron_g3.setNeverTargeted(true /* TRUE */);
            $.coke_barons_goon1 = Char.CreateAsPassenger($.coke_barons_car, 10 /* PEDTYPE_GANG_DIAZ */, CLb, 0);
            $.coke_barons_goon1.giveWeapon(23 /* WEAPONTYPE_UZI */, 3000);
            $.coke_barons_goon1.clearThreatSearch();
            $.coke_barons_goon1.setHealth(10);
            $.coke_barons_goon1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
            $.coke_barons_goon1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.coke_barons_goon1.setAccuracy(10);
            $.coke_barons_goon1.setNeverTargeted(true /* TRUE */);
            $.coke_barons_goon2 = Char.CreateAsPassenger($.coke_barons_car, 10 /* PEDTYPE_GANG_DIAZ */, CLa, 1);
            $.coke_barons_goon2.giveWeapon(23 /* WEAPONTYPE_UZI */, 3000);
            $.coke_barons_goon2.clearThreatSearch();
            $.coke_barons_goon2.setHealth(10);
            $.coke_barons_goon2.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
            $.coke_barons_goon2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.coke_barons_goon2.setAccuracy(10);
            $.coke_barons_goon2.setNeverTargeted(true /* TRUE */);
            $.coke_barons_car.setCruiseSpeed(14.0);
            $.coke_barons_car.gotoCoordinatesAccurate($.dealcarx_g3goto, $.dealcary_g3goto, $.dealcarz_g3goto);
            Camera.SetFixedPosition(453.441742, -534.789673, 19.791883, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(453.727660, -533.848450, 19.612853, 2 /* JUMP_CUT */);
            $.protect_deal_flag = 3;
            TIMERA = 0;



          }
        }
      }
    }



    if ($.protect_deal_flag == 3) {
      if (!(Char.IsDead($.buddy_g3))) {
        if (!(Char.IsDead($.coke_baron_g3))) {
          if (!(Char.IsDead($.coke_barons_goon1))) {
            if (!(Char.IsDead($.coke_barons_goon2))) {
              if (!(Car.IsDead($.coke_barons_car))) {
                if ($.coke_barons_car.locate2D($.dealcarx_g3goto, $.dealcary_g3goto, 1.3, 1.0, false /* FALSE */)) {
                  Camera.SetFixedPosition(462.343658, -491.151184, 11.731792, 0.0, 0.0, 0.0);
                  Camera.PointAtPoint(462.328552, -490.154297, 11.654379, 2 /* JUMP_CUT */);
                  $.coke_barons_car.setIdle();


                  if (!($.buddy_g3.isInAnyCar())) {
                    if (!($.player1.isInAnyCar())) {
                      World.ClearArea(461.424408, -493.834625, 100.0, 100.0, true /* TRUE */);
                      $.player1.setCoordinates(461.459717, -494.802185, -100.0);
                      $.buddy_g3.setCoordinates(462.499512, -495.662323, -100.0);
                      World.ClearArea(461.424408, -493.834625, 100.0, 100.0, true /* TRUE */);
                      $.player1.turnToFaceChar($.coke_baron_g3);
                      $.buddy_g3.turnToFaceChar($.coke_baron_g3);
                      $.buddy_g3.leaveGroup();
                      $.buddy_g3.setRunning(false /* FALSE */);
                      $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
                      if ($.coke_baron_g3.isInAnyCar()) {
                        $.coke_baron_g3.setObjLeaveAnyCar();
                      }
                      $.coke_baron_g3.setObjGotoCoordOnFoot(461.424408, -493.834625);
                      await asyncWait(350); //NEW
                      $.scriptedcut3 = 1;
                      if (!(Char.IsDead($.coke_barons_goon1))) {
                        if ($.coke_barons_goon1.isInAnyCar()) {
                          $.coke_barons_goon1.setObjLeaveAnyCar();
                          await asyncWait(250); //NEW
                        }
                      }
                      if (!(Char.IsDead($.coke_barons_goon2))) {
                        if ($.coke_barons_goon2.isInAnyCar()) {
                          $.coke_barons_goon2.setObjLeaveAnyCar();
                        }
                      }
                      if (!(Char.IsDead($.coke_barons_goon1))) {
                        $.coke_barons_goon1.setObjGotoCoordOnFoot(460.934236, -492.701843);
                      }
                      if (!(Char.IsDead($.coke_barons_goon2))) {
                        $.coke_barons_goon2.setObjGotoCoordOnFoot(462.725861, -492.773560);
                      }
                      $.protect_deal_flag = 4;
                      TIMERA = 0;



                    }
                  }


                }
                else {
                  if (TIMERA > 20000) {
                    $.coke_barons_car.setCoordinates($.dealcarx_g3goto, $.dealcary_g3goto, -100.0); //safety timer
                    $.coke_barons_car.setHeading($.dealcar_heading); //safety timer
                    TIMERA = 0;
                  }


                }
              }
            }
          }
        }
      }
    }



    if ($.scriptedcut3 == 1) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!($.coke_baron_g3.isOnScreen())) {
            Camera.SetFixedPosition(458.086622, -494.786041, 11.684911, 0.0, 0.0, 0.0);
            Camera.PointAtChar($.coke_baron_g3, 15 /* FIXED */, 2 /* JUMP_CUT */); /////
            $.scriptedcut3 = 2;
          }
        }
      }
    }

    //player meets the coke baron

    if ($.protect_deal_flag == 4) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if ($.player1.locateStoppedOnFoot2D(461.4445, -495.214325, 2.0, 2.0, false /* FALSE */)) {
            if ($.buddy_g3.locateStoppedOnFoot2D(461.4445, -495.214325, 2.0, 2.0, false /* FALSE */)) {
              if ($.coke_baron_g3.locateStoppedOnFoot2D(461.4445, -495.214325, 2.0, 2.0, false /* FALSE */)) {
                if (!(Char.IsDead($.coke_barons_goon1))) {
                  if (!(Char.IsDead($.coke_barons_goon2))) {
                    if (!(Car.IsDead($.coke_barons_car))) {
                      $.buddy_g3.setRunning(false /* FALSE */);
                      $.coke_baron_g3.setObjNoObj();
                      $.scplayer.setObjNoObj();
                      $.coke_baron_g3.turnToFacePlayer($.player1);
                      $.coke_barons_car.freezePosition(true /* TRUE */);
                      $.coke_baron_g3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
                      Text.PrintNow("GEN3_5", 5000, 1); //You must be Cortez's new gun
                      Audio.PlayMissionAudio(1);
                      while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.coke_baron_g3))) {
                        await asyncWait(0);
                      }
                      Audio.ClearMissionAudio(1);
                      Text.ClearThisPrint("GEN3_5");
                      $.coke_baron_g3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
                      $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
                      Text.PrintNow("GEN3_6", 5000, 1); //Until more gainful...
                      Audio.PlayMissionAudio(2);
                      while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.coke_baron_g3))) {
                        await asyncWait(0);
                      }
                      Audio.ClearMissionAudio(2);
                      Text.ClearThisPrint("GEN3_6");
                      $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
                      Audio.LoadMissionAudio(1, "COL3_5" as any);
                      Audio.LoadMissionAudio(2, "COL3_6" as any);
                      while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
                        await asyncWait(0);
                      }
                      TIMERA = 0;
                      $.protect_deal_flag = 5;


                    }
                  }
                }


              }
              else {
                if (TIMERA > 20000) {
                  $.coke_baron_g3.setCoordinates(461.424408, -493.834625, -100.0); //safety timer
                  $.coke_baron_g3.setHeading(169.954); //safety timer
                  TIMERA = 0;
                }
              }
            }
            else {
              if (TIMERA > 20000) {
                $.buddy_g3.setCoordinates(462.499512, -495.662323, -100.0); //safety timer
                $.buddy_g3.setHeading(350.0); //safety timer
                TIMERA = 0;
              }
            }
          }
          else {
            if (TIMERA > 20000) {
              $.player1.setCoordinates(461.459717, -494.802185, -100.0); //safety timer
              $.player1.setHeading(350.0); //safety timer
              TIMERA = 0;
            }
          }
        }
      }
    }

    //player and buddy chat

    if ($.protect_deal_flag == 5) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (TIMERA > 500) {
            $.coke_baron_g3.setStayInSamePlace(true /* TRUE */);
            $.player1.turnToFaceChar($.buddy_g3);
            $.buddy_g3.turnToFacePlayer($.player1);
            Camera.SetFixedPosition(463.020477, -492.50528, 11.515018, 0.0, 0.0, 0.0);
            Camera.PointAtChar($.scplayer, 15 /* FIXED */, 2 /* JUMP_CUT */);
            if (!(Char.IsDead($.coke_barons_goon2))) {
              $.coke_barons_goon2.setVisible(false /* FALSE */);
            }
            $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
            Text.PrintNow("GEN3_7", 5000, 1); //be here any minute
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.coke_baron_g3))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("GEN3_7");
            if (!(Char.IsDead($.scplayer))) {
              $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            }


            if (!(Char.IsDead($.buddy_g3))) {
              $.buddy_g3.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
            }
            Text.PrintNow("GEN3_8", 5000, 1); //You go there etc..
            Audio.PlayMissionAudio(2);
            while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.coke_baron_g3))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(2);
            Text.ClearThisPrint("GEN3_8");
            if (!(Char.IsDead($.buddy_g3))) {
              $.buddy_g3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            }
            $.buddy_g3.leaveGroup();
            TIMERA = 0;
            $.protect_deal_flag = 6;
          }
        }
      }
    }


    //player has to go to roof position	and lance goes to his

    if ($.protect_deal_flag == 6) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!(Char.IsDead($.coke_barons_goon1))) {
            if (!(Char.IsDead($.coke_barons_goon2))) {
              $.coke_baron_g3.giveWeapon(23 /* WEAPONTYPE_UZI */, 3000);
              //					STOP_CHAR_LOOKING coke_barons_goon1
              //					STOP_CHAR_LOOKING coke_barons_goon2
              $.coke_barons_goon2.setVisible(true /* TRUE */);
              Hud.SwitchWidescreen(false /* OFF */);
              Camera.Restore();
              $.player1.setControl(true /* ON */);
              $.roof_blip_g3 = Blip.AddForCoord($.roofposx, $.roofposy, $.roofposz);
              $.buddy_g3.followPath($.lanceposx, $.lanceposy, $.lanceposz, 1.0, 1 /* RUN */);
              $.coke_baron_g3.setStayInSamePlace(true /* TRUE */);
              $.coke_barons_goon1.setStayInSamePlace(true /* TRUE */);
              $.coke_barons_goon2.setStayInSamePlace(true /* TRUE */);

              ////////////////////////////////////////////////////////////////	FOLLOW THE LEADER

              $.coke_baron_g3.setCanBeDamagedByMembersOfGang(3 /* GANG_DIAZ */, false /* FALSE */);
              $.coke_barons_goon1.setCanBeDamagedByMembersOfGang(3 /* GANG_DIAZ */, false /* FALSE */);
              $.coke_barons_goon2.setCanBeDamagedByMembersOfGang(3 /* GANG_DIAZ */, false /* FALSE */);
              TIMERA = 0;
              $.protect_deal_flag = 7;
            }
          }
        }
      }
    }



    if ($.protect_deal_flag == 7) {
      if (!(Char.IsDead($.buddy_g3))) {
        if (!($.buddy_g3.locateOnFoot3D($.lanceposx, $.lanceposy, $.lanceposz, 2.0, 2.0, 2.0, false /* FALSE */))) {
          $.buddy_g3.followPath($.lanceposx, $.lanceposy, $.lanceposz, 1.0, 1 /* RUN */);
        }
      }
    }

    //Diaz and Lance health bar

    if ($.protect_deal_flag > 6) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        $.diaz_health_bar = $.coke_baron_g3.getHealth();
        $.diaz_health_bar = $.diaz_health_bar / 5;
      }
      else {
        $.diaz_health_bar = 0;
      }
      if ($.diaz_health_bar <= 0) {
        Hud.ClearCounter($.$id.diaz_health_bar);
      }

      //lance
      if (!(Char.IsDead($.buddy_g3))) {
        $.lance_health_bar = $.buddy_g3.getHealth();
        $.lance_health_bar = $.lance_health_bar / 6;
      }
      else {
        $.lance_health_bar = 0;
      }
      if ($.lance_health_bar <= 0) {
        Hud.ClearCounter($.$id.lance_health_bar);
      }



    }


    /////////////////////////////////////	LANCE AUDIO		////////////////////////////////////

    if ($.protect_deal_flag > 7 && $.protect_deal_flag < 13) {
      if (!(Char.IsDead($.buddy_g3))) {

        // checks
        if (Char.IsDead($.coke_barons_goon1)) {
          if ($.cbgooncounter1 == 0) {
            if ($.playingaudio == 0) {
              $.playingaudio = 1;
              $.playingaudiostate = 0;
            }


          }
        }


        if ($.buddy1help == 0) {
          if ($.buddy_g3.hasBeenDamagedByWeapon(22 /* WEAPONTYPE_TEC9 */)) {
            $.buddy_g3.clearLastWeaponDamage();
            if ($.playingaudio == 0) {
              $.playingaudio = 3;
              $.playingaudiostate = 0;
            }
          }
        }


        if ($.buddy_g3.isShooting()) {
          if ($.buddyshootcounter == 0) {
            if ($.playingaudio == 0) {
              $.playingaudio = 4;
              $.playingaudiostate = 0;
            }
          }
        }
        if ($.buddy_g3.isShooting()) {
          if ($.buddyshootcounter == 1) {
            if ($.playingaudio == 0) {
              $.playingaudio = 5;
              $.playingaudiostate = 0;
            }
          }
        }

        ////////////////////////////////////////////////////////////////////
        if ($.buddy_g3.isShooting()) {
          if ($.buddyshootcounter == 2) {
            if ($.playingaudio == 0) {
              $.playingaudio = 9;
              $.playingaudiostate = 0;
            }
          }
        }
        ////////////////////////////////////////////////////////////////////

        if ($.buddy1help == 1) {
          if ($.buddy_g3.hasBeenDamagedByWeapon(22 /* WEAPONTYPE_TEC9 */)) {
            $.buddy_g3.clearLastWeaponDamage();
            if ($.playingaudio == 0) {
              $.playingaudio = 6;
              $.playingaudiostate = 0;
            }
          }
        }
        if ($.buddy1help == 2) {
          if ($.buddy_g3.hasBeenDamagedByWeapon(22 /* WEAPONTYPE_TEC9 */)) {
            $.buddy_g3.clearLastWeaponDamage();
            if ($.playingaudio == 0) {
              $.playingaudio = 7;
              $.playingaudiostate = 0;
            }
          }
        }
        if ($.buddy1help == 3) {
          if ($.buddy_g3.hasBeenDamagedByWeapon(22 /* WEAPONTYPE_TEC9 */)) {
            $.buddy_g3.clearLastWeaponDamage();
            if ($.playingaudio == 0) {
              $.playingaudio = 8;
              $.playingaudiostate = 0;
            }
          }
        }


        //playing
        if ($.playingaudio == 1) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_10" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_16", 5000, 1); //Diaz men getting cut down (goon1)
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_16");
                $.cbgooncounter1 = 1;
              }
            }
          }
        }



        if ($.playingaudio == 3) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_8" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_14", 5000, 1); //Tommy! I need help here!
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_14");
                $.buddy1help = 1;
              }
            }
          }
        }


        if ($.playingaudio == 4) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_18" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_46", 5000, 1); //shiit!
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_46");
                $.buddyshootcounter = 1;
              }
            }
          }
        }


        if ($.playingaudio == 5) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_9" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_15", 5000, 1); //I got you covered
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_15");
                $.buddyshootcounter = 2;
              }
            }
          }
        }
        if ($.playingaudio == 6) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_20" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_48", 5000, 1); //DAMN
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_48");
                $.buddy1help = 2;
              }
            }
          }
        }
        if ($.playingaudio == 7) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_17" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_47", 5000, 1); //Tommy!
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_47");
                $.buddy1help = 3;
              }
            }
          }
        }
        if ($.playingaudio == 8) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_19" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_48", 5000, 1); //Damn
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_48");
                $.buddy1help = 4;
              }
            }
          }
        }
        ///////////////////////////////////////////////////////////////////////
        if ($.playingaudio == 9) {
          if ($.playingaudiostate == 0) {
            Audio.LoadMissionAudio(1, "COL3_23" as any);
            $.playingaudiostate = 1;
          }
          else {
            if ($.playingaudiostate == 1) {
              if (Audio.HasMissionAudioLoaded(1)) {
                $.playingaudiostate = 2;
              }
            }
            if ($.playingaudiostate == 2) {
              Text.PrintNow("GEN3_52", 5000, 1); //I got you covered
              Audio.PlayMissionAudio(1);
              $.playingaudiostate = 3;
            }
            if ($.playingaudiostate == 3) {
              if (Audio.HasMissionAudioFinished(1)) {
                $.playingaudiostate = 0;
                $.playingaudio = 0;
                Audio.ClearMissionAudio(1);
                Text.ClearThisPrint("GEN3_52");
                $.buddyshootcounter = 3;
              }
            }
          }
        }
        /////////////////////////////////////////////////////////////////////////


      }
      else {
        if ($.playingaudio == 1) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_16");
          $.cbgooncounter1 = 1;
        }
        if ($.playingaudio == 3) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_14");
          $.buddy1help = 1;
        }


        if ($.playingaudio == 4) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_46");
          $.buddyshootcounter = 1;
        }
        if ($.playingaudio == 5) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_15");
          $.buddyshootcounter = 2;
        }
        if ($.playingaudio == 6) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_48");
          $.buddy1help = 2;
        }
        if ($.playingaudio == 7) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_47");
          $.buddy1help = 3;
        }
        if ($.playingaudio == 8) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_48");
          $.buddy1help = 4;
        }
        /////////////////////////////////////////////////
        if ($.playingaudio == 9) {
          $.playingaudiostate = 0;
          $.playingaudio = 0;
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN3_52");
          $.buddyshootcounter = 3;
        }
        ////////////////////////////////////////////////


      }
    }






    //create cubans

    if ($.protect_deal_flag == 7) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if ($.player1.locateStoppedOnFoot3D($.roofposx, $.roofposy, $.roofposz, 1.0, 1.0, 2.0, true /* TRUE */)) {
            if ($.buddy_g3.locateOnFoot3D($.lanceposx, $.lanceposy, $.lanceposz, 2.0, 2.0, 2.0, false /* FALSE */)) {
              $.player1.setControl(false /* OFF */);
              Hud.SwitchWidescreen(true /* ON */);
              World.SetCarDensityMultiplier(0.0);
              $.buddy_g3.setHeading($.lanceheadingpos);
              $.roof_blip_g3.remove();
              $.coke_baron_g3.setOnlyDamagedByPlayer(true /* TRUE */);
              Streaming.RequestModel(cuban);
              Streaming.RequestModel(CBa); // Cuban model a
              Streaming.RequestModel(HNa); // Haitian model a
              Streaming.RequestModel(HNb); // Haitian model b
              Streaming.RequestModel(burrito); //van
              Streaming.RequestModel(voodoo); //haitian car
              Streaming.RequestModel(TEC9);
              while (!(Streaming.HasModelLoaded(cuban)) || !(Streaming.HasModelLoaded(CBa)) || !(Streaming.HasModelLoaded(voodoo))) {
                await asyncWait(0);
              }
              while (!(Streaming.HasModelLoaded(TEC9)) || !(Streaming.HasModelLoaded(HNa)) || !(Streaming.HasModelLoaded(HNb)) || !(Streaming.HasModelLoaded(burrito))) {
                await asyncWait(0);
              }
              World.ClearArea($.otherdeal_carx, $.otherdeal_cary, 500.0, 500.0, true /* TRUE */);

              //set up camera to view cubans coming in
              $.otherdeal_car = Car.Create(cuban, $.otherdeal_carx, $.otherdeal_cary, $.otherdeal_carz);
              $.otherdeal_car.setCanBurstTires(false /* FALSE */);
              $.otherdeal_car.setOnlyDamagedByPlayer(true /* TRUE */);
              $.otherdeal_car.setStraightLineDistance(3);
              $.otherdeal_car.setHeading($.otherdealheading);
              $.otherdeal_car.setHealth(3500);
              $.cubandrugdealerboss = Char.CreateInsideCar($.otherdeal_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa);
              $.cubandrugdealerboss.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 3000);
              $.otherdeal_car.setIdle();
              $.cubandrugdealerboss.clearThreatSearch();
              $.cubandrugdealerboss.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
              $.cubandrugdealerboss.setHealth(10);
              $.cubandrugdealerboss.setNeverTargeted(true /* TRUE */);
              $.cubandrugdealer1 = Char.CreateAsPassenger($.otherdeal_car, 7 /* PEDTYPE_GANG_CUBAN */, CBa, 0);
              $.cubandrugdealer1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 3000);
              $.cubandrugdealer1.clearThreatSearch();
              $.cubandrugdealer1.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
              $.cubandrugdealer1.setHealth(10);
              $.cubandrugdealer1.followChar($.cubandrugdealerboss);
              $.cubandrugdealer1.setNeverTargeted(true /* TRUE */);
              if (!(Char.IsDead($.coke_baron_g3))) {
                $.coke_baron_g3.turnToFaceChar($.cubandrugdealerboss);
              }
              Camera.SetFixedPosition(461.699866, -476.137939, 18.455095, 0.0, 0.0, 0.0);
              Camera.PointAtPoint(461.576569, -477.068756, 18.110779, 2 /* JUMP_CUT */);
              $.otherdeal_car.setCoordinates(448.6620, -525.4344, 9.5760);
              $.otherdeal_car.setHeading(329.7276);
              $.otherdeal_car.gotoCoordinatesAccurate(465.276642, -496.309357, 10.829483);
              $.otherdeal_car.setCruiseSpeed(8.0);
              $.scplayer.turnToFaceChar($.cubandrugdealerboss);
              Text.PrintNow("GEN3_37", 10000, 2); //make sure Diaz safe
              Hud.DisplayNthCounterWithString($.diaz_health_bar, 1 /* COUNTER_DISPLAY_BAR */, 1, "GEN3_22");
              Hud.DisplayNthCounterWithString($.lance_health_bar, 1 /* COUNTER_DISPLAY_BAR */, 2, "GEN3_49");
              TIMERA = 0;
              $.protect_deal_flag = 8;


            }
            else {
              if (TIMERA > 35000) {
                $.buddy_g3.setCoordinates($.lanceposx, $.lanceposy, $.lanceposz); //safety timer
                TIMERA = 0;
              }
            }
          }
        }
      }
    }





    //cubans arrive at the scene

    if ($.protect_deal_flag == 8) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!(Char.IsDead($.cubandrugdealerboss))) {
            if (!(Char.IsDead($.cubandrugdealer1))) {
              if (!(Car.IsDead($.otherdeal_car))) {
                if ($.otherdeal_car.locate2D(465.276642, -496.309357, 1.5, 1.5, false /* FALSE */)) {
                  $.otherdeal_car.setCruiseSpeed(0.0);
                  $.player1.turnToFaceChar($.cubandrugdealerboss);
                  Hud.SwitchWidescreen(false /* OFF */);
                  $.player1.setControl(true /* ON */);
                  Text.ClearThisPrint("GEN3_37");
                  Camera.RestoreJumpcut();
                  Camera.SetBehindPlayer();
                  $.coke_baron_g3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
                  $.coke_baron_g3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                  $.cubandrugdealerboss.setObjLeaveCar($.otherdeal_car);
                  $.cubandrugdealer1.setObjLeaveCar($.otherdeal_car);
                  $.protect_deal_flag = 9;
                  TIMERA = 0;
                }
                else {
                  if (TIMERA > 20000) {
                    $.otherdeal_car.setCoordinates(465.276642, -496.309357, -100.0); //safety timer
                    $.otherdeal_car.setHeading(349.697); //safety timer
                    TIMERA = 0;
                  }
                }
              }
            }
          }
        }
      }
    }

    //then go to coke baron

    if ($.protect_deal_flag == 9) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!(Char.IsDead($.cubandrugdealerboss))) {
            if (!(Char.IsDead($.cubandrugdealer1))) {
              if (!($.cubandrugdealerboss.isInAnyCar())) {
                if (!($.cubandrugdealer1.isInAnyCar())) {
                  if (!(Car.IsDead($.otherdeal_car))) {
                    $.otherdeal_car.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
                    $.cubandrugdealerboss.setObjGotoCoordOnFoot(461.459717, -494.802185);
                    $.cubandrugdealer1.setObjGotoCoordOnFoot(462.499512, -495.662323);
                    $.protect_deal_flag = 10;
                  }
                }
              }
            }
          }
        }
      }
    }


    if ($.protect_deal_flag == 10) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!(Char.IsDead($.cubandrugdealerboss))) {
            if (!(Char.IsDead($.cubandrugdealer1))) {
              if ($.cubandrugdealerboss.locateStoppedOnFoot2D(461.4445, -495.214325, 2.5, 2.5, false /* FALSE */) || TIMERA > 35000) {
                if ($.cubandrugdealer1.locateStoppedOnFoot2D(461.4445, -495.214325, 3.0, 3.0, false /* FALSE */) || TIMERA > 35000) {
                  const _res207 = $.cubandrugdealerboss.getCoordinates();
$.cbossx_a3 = _res207.x;
$.cbossy_a3 = _res207.y;
$.cbossz_a3 = _res207.z;
                  const _res208 = $.coke_baron_g3.getCoordinates();
$.cokellastx = _res208.x;
$.cokellasty = _res208.y;
$.cokellastz = _res208.z;
                  $.cbossy_a3 = $.cbossy_a3 * -1.0;
                  $.cokellasty = $.cokellasty * -1.0;
                  $.briefcaseobject_g3x = $.cbossx_a3 + $.cokellastx;
                  $.briefcaseobject_g3y = $.cokellasty + $.cbossy_a3;
                  $.briefcaseobject_g3x = $.briefcaseobject_g3x / 2.0;
                  $.briefcaseobject_g3y = $.briefcaseobject_g3y / 2.0;
                  $.briefcaseobject_g3y = $.briefcaseobject_g3y * -1.0;
                  $.briefcase_deal = ScriptObject.Create(BRIEFCASE, $.briefcaseobject_g3x, $.briefcaseobject_g3y, 10.062503);
                  $.coke_baron_g3.setOnlyDamagedByPlayer(false /* FALSE */);
                  $.coke_baron_g3.setSuffersCriticalHits(false /* FALSE */);
                  $.buddy_g3.setSuffersCriticalHits(false /* FALSE */);
                  Game.SetCharsChatting($.cubandrugdealerboss, $.coke_baron_g3, 20000);
                  $.cubandrugdealer1.leaveGroup();
                  $.cubandrugdealer1.setStayInSamePlace(true /* TRUE */);
                  $.cubandrugdealerboss.setStayInSamePlace(true /* TRUE */); //new line
                  TIMERA = 0;
                  $.player1.setMood(2 /* PLAYER_MOOD_ANGRY */, 120000);
                  $.protect_deal_flag = 11;


                }
              }
            }
          }
        }
      }
    }


    if ($.protect_deal_flag == 11) {
      if (TIMERA > 4000) {
        if (!(Char.IsDead($.buddy_g3))) {
          if (!(Char.IsDead($.coke_barons_goon1))) {
            if (!(Char.IsDead($.coke_barons_goon2))) {
              if (!(Char.IsDead($.cubandrugdealer1))) {
                $.buddy_g3.setStayInSamePlace(true /* TRUE */);
                $.buddy_g3.setThreatSearch(256 /* THREAT_GANG_HAITIAN */);
                $.buddy_g3.giveWeapon(23 /* WEAPONTYPE_UZI */, 300000);
                $.buddy_g3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                $.coke_barons_goon1.setStayInSamePlace(false /* FALSE */);
                $.coke_barons_goon2.setStayInSamePlace(false /* FALSE */);
                $.cubandrugdealer1.setStayInSamePlace(false /* FALSE */);
                Text.PrintHelp("HELP45"); // Press the ~h~L3~w~ button to duck. This will increase the accuracy of guns you are holding.
                TIMERA = 0;
                TIMERB = 0;
                $.protect_deal_flag = 12;


              }
            }
          }
        }
      }
    }

    ///////////////////////////////////////////			IF PLAYER HITS DIAZ OR HIS MEN BEFORE HE SHOULD	/////////////////////////////////////////

    ////coke baron crew

    if ($.protect_deal_flag > 5) {
      if ($.protect_deal_flag < 13) {
        if ($.car1hasgone == 0) {
          if ($.coke_baron_g3.hasBeenDamagedByChar($.scplayer) || $.coke_barons_goon1.hasBeenDamagedByChar($.scplayer) || $.coke_barons_goon2.hasBeenDamagedByChar($.scplayer) || Char.IsDead($.coke_barons_goon1) || Char.IsDead($.coke_barons_goon2)) {
            // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
            // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
            // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX

            if (!(Char.IsDead($.coke_baron_g3))) {
              $.coke_baron_g3.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!(Char.IsDead($.coke_barons_goon1))) {
              $.coke_barons_goon1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!(Char.IsDead($.coke_barons_goon2))) {
              $.coke_barons_goon2.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!(Char.IsDead($.coke_baron_g3))) {
              $.coke_baron_g3.clearLastDamageEntity();
            }
            if (!(Char.IsDead($.coke_barons_goon1))) {
              $.coke_barons_goon1.clearLastDamageEntity();
            }
            if (!(Char.IsDead($.coke_barons_goon2))) {
              $.coke_barons_goon2.clearLastDamageEntity();
            }
            Text.PrintNow("GEN3_33", 7000, 1);
            // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow


          }
        }
      }
    }


    //cubans

    if ($.protect_deal_flag > 7) {
      if ($.protect_deal_flag < 13) {
        if ($.car1hasgone == 0) {
          if ($.cubandrugdealerboss.hasBeenDamagedByChar($.scplayer) || $.cubandrugdealer1.hasBeenDamagedByChar($.scplayer)) {
            if (!(Char.IsDead($.cubandrugdealerboss))) {
              $.cubandrugdealerboss.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!(Char.IsDead($.cubandrugdealer1))) {
              $.cubandrugdealer1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            Text.PrintNow("GEN3_34", 7000, 1);
            if (!(Char.IsDead($.cubandrugdealerboss))) {
              $.coke_baron_g3.clearLastDamageEntity();
            }
            if (!(Char.IsDead($.cubandrugdealer1))) {
              $.coke_barons_goon1.clearLastDamageEntity();
            }
            // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow


          }
        }
      }
    }
    ///////////////////////////////////////////			DIAZ TAKING COVER		/////////////////////////////////////////



    if ($.bustthedealtext == 1) {
      if ($.protect_deal_flag == 12) {
        if (!(Char.IsDead($.coke_baron_g3))) {
          if ($.diazmoved_g3 == 0) {
            $.coke_baron_g3.setStayInSamePlace(false /* FALSE */);
            $.coke_baron_g3.setObjRunToCoord(463.2771, -495.5872);
            $.diazmoved_g3 = 1;
            $.bustthedealtext = 2;
          }
        }
      }
    }


    if ($.bustthedealtext == 2) {
      if ($.protect_deal_flag == 12) {
        if (!(Char.IsDead($.coke_baron_g3))) {
          if ($.coke_baron_g3.locateOnFoot2D(463.2771, -495.5872, 1.0, 1.0, false /* FALSE */)) {
            $.coke_baron_g3.setStayInSamePlace(true /* TRUE */);
            $.coke_baron_g3.setHeading(69.0);
            $.bustthedealtext = 3;
          }
        }
      }
    }


    if ($.protect_deal_flag == 12) {
      if ($.bustthedealtext == 3) {
        if (!(Char.IsDead($.coke_baron_g3))) {
          if (!(Char.IsDead($.buddy_g3))) {
            if ($.buddy_g3.isShooting()) {
              $.coke_baron_g3.setCrouch(true /* TRUE */, 5000);
            }
          }
        }
      }
    }


    ///////////////////////////////////////////			PLAYER GOES OUT OF AREA		/////////////////////////////////////////


    if ($.protect_deal_flag == 12) {
      if (!($.player1.isInAngledArea2D(453.5544, -461.5191, 441.1417, -531.2878, 33.5, false /* FALSE */))) {
        if (!(Char.IsDead($.coke_baron_g3))) {
          if (!($.coke_baron_g3.isOnScreen())) {
            if (!($.car5hasgone == 1)) {
              if (!($.car4hasgone == 1)) {
                $.coke_baron_g3.explodeHead();
                Text.PrintNow("GEN3_56", 5000, 1);
                // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow
              }
            }
          }
        }
      }


    }


    ///////////////////////////////////////////			FIRST GUYS FROM THE RIGHT		/////////////////////////////////////////


    if ($.protect_deal_flag == 12) {
      if (TIMERA > 5000) {
        if ($.createhncar1 == 0) {
          //IF NOT IS_POINT_ON_SCREEN hncar1x hncar1y hncar1z 1.0

          World.ClearArea($.hncar1x, $.hncar1y, $.hncar1z, 5.0, false /* FALSE */);
          $.hncar1 = Car.Create(voodoo, $.hncar1x, $.hncar1y, $.hncar1z);
          $.hncar1.setCanBurstTires(false /* FALSE */);
          $.hncar1.setOnlyDamagedByPlayer(true /* TRUE */);
          $.hncar1.setHeading($.hncar1heading);
          $.haiti_bust_guy1 = Char.CreateInsideCar($.hncar1, 8 /* PEDTYPE_GANG_HAITIAN */, HNa);
          $.haiti_bust_guy1.setCanBeShotInVehicle(false /* FALSE */);
          $.haiti_bust_guy1.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
          $.haiti_bust_guy1.clearThreatSearch();
          $.haiti_bust_guy1.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
          $.haiti_bust_guy1.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
          $.haiti_bust_guy1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.haiti_bust_guy1blip = Blip.AddForCharOld($.haiti_bust_guy1, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
          $.haiti_bust_guy1blip.changeScale(2);
          $.haiti_bust_guy1.setHealth(150);
          $.haiti_bust_guy2 = Char.CreateAsPassenger($.hncar1, 8 /* PEDTYPE_GANG_HAITIAN */, HNb, 0);
          $.haiti_bust_guy2.setCanBeShotInVehicle(false /* FALSE */);
          $.haiti_bust_guy2.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
          $.haiti_bust_guy2.clearThreatSearch();
          $.haiti_bust_guy2.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
          $.haiti_bust_guy2.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
          $.haiti_bust_guy2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.haiti_bust_guy2blip = Blip.AddForCharOld($.haiti_bust_guy2, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
          $.haiti_bust_guy2blip.changeScale(2);
          $.haiti_bust_guy2.setHealth(150);
          $.hncar1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
          $.hncar1.setHealth(5000);
          $.hncar1.setIdle();
          $.car1hasgone = 1;
          $.createhncar1 = 1;
          //ENDIF

        }
        if ($.createhncar1 == 1) {
          if (!(Car.IsDead($.hncar1))) {
            $.hncar1.gotoCoordinatesAccurate(462.3186, -503.633484, 10.777666); //hncar1xgoto hncar1ygoto
            $.hncar1.setCruiseSpeed(24.0);
            $.hncar1.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.createhncar1 = 2;
          }
        }
        if ($.createhncar1 == 2) {
          if (!(Car.IsDead($.hncar1))) {
            if ($.hncar1.locate2D($.hncar1xgoto, $.hncar1ygoto, 4.0, 4.0, false /* FALSE */)) {
              $.createhncar1 = 3;
            }
          }
        }
        if ($.createhncar1 == 3) {
          if (!(Car.IsDead($.hncar1))) {
            $.createhncar1 = 4;
          }
        }
        if ($.createhncar1 == 4) {
          if (!(Car.IsDead($.hncar1))) {
            if (!(Char.IsDead($.haiti_bust_guy1))) {
              if (!(Char.IsDead($.haiti_bust_guy2))) {
                if ($.hncar1.locate2D(462.3186, -503.633484, 3.0, 3.0, false /* FALSE */)) {
                  if ($.bustthedealtext == 0) {
                    Text.PrintNow("GEN3_19", 7000, 2);
                    $.bustthedealtext = 1;
                  }
                  $.hncar1.setIdle();
                  $.hncar1.setHealth(1000);
                  $.hncar1.setOnlyDamagedByPlayer(true /* TRUE */);
                  $.haiti_bust_guy1.setObjLeaveAnyCar();
                  $.haiti_bust_guy2.setObjLeaveAnyCar();
                  if (!(Char.IsDead($.cubandrugdealer1))) {
                    $.cubandrugdealer1.turnToFaceChar($.haiti_bust_guy1);
                  }
                  if (!(Char.IsDead($.cubandrugdealerboss))) {
                    $.cubandrugdealerboss.turnToFaceChar($.haiti_bust_guy2);
                  }
                  $.createhncar1 = 5;
                }
              }
            }
          }
        }


        if (!(Char.IsDead($.haiti_bust_guy1))) {
          if (!($.haiti_bust_guy1.isInAnyCar())) {
            if ($.createhncar1 == 5) {


              if ($.player1.isShooting()) {
                if (!($.player1.locateAnyMeansChar2D($.haiti_bust_guy1, 5.0, 5.0, false /* FALSE */))) {
                  $.hg1timerinit = Clock.GetGameTimer();
                  $.haiti_bust_guy1.setCrouch(true /* TRUE */, 300000);
                }
              }
              else {
                $.hg1timerafter = Clock.GetGameTimer();
                $.getuphg1 = $.hg1timerafter - $.hg1timerinit;
                if ($.getuphg1 > 1000) {
                  $.haiti_bust_guy1.setCrouch(false /* FALSE */, 100);
                }
              }


            }
          }
        }





      }

      ///////////////////////////////////////////////////	SECOND GUYS	///////////////////////////////////////////////////

      if (TIMERB > 14000) {
        if ($.createhncar2 == 0) {
          if ($.car1hasgone == 1) {
            if ($.createhncar1 > 3 || Car.IsDead($.hncar1)) {

              //IF NOT IS_POINT_ON_SCREEN hncar2x hncar2y hncar2z 1.0

              World.ClearArea($.hncar2x, $.hncar2y, $.hncar2z, 3.0, false /* FALSE */);
              $.hncar2 = Car.Create(voodoo, $.hncar2x, $.hncar2y, $.hncar2z);
              $.hncar2.setCanBurstTires(false /* FALSE */);
              $.hncar2.setOnlyDamagedByPlayer(true /* TRUE */);
              $.hncar2.setHeading($.hncar2heading);
              $.haiti_bust_guy3 = Char.CreateInsideCar($.hncar2, 8 /* PEDTYPE_GANG_HAITIAN */, HNb);
              $.haiti_bust_guy3.setCanBeShotInVehicle(false /* FALSE */);
              $.haiti_bust_guy3.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
              $.haiti_bust_guy3.clearThreatSearch();
              $.haiti_bust_guy3.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
              $.haiti_bust_guy3.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
              $.haiti_bust_guy3.setThreatSearch(8192 /* THREAT_GANG_PLAYER */);
              $.haiti_bust_guy3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              $.haiti_bust_guy3blip = Blip.AddForCharOld($.haiti_bust_guy3, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
              $.haiti_bust_guy3blip.changeScale(2);
              $.haiti_bust_guy3.setHealth(130);
              $.haiti_bust_guy4 = Char.CreateAsPassenger($.hncar2, 8 /* PEDTYPE_GANG_HAITIAN */, HNa, 0);
              $.haiti_bust_guy4.setCanBeShotInVehicle(false /* FALSE */);
              $.haiti_bust_guy4.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
              $.haiti_bust_guy4.clearThreatSearch();
              $.haiti_bust_guy4.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
              $.haiti_bust_guy4.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
              $.haiti_bust_guy4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              $.haiti_bust_guy4blip = Blip.AddForCharOld($.haiti_bust_guy4, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
              $.haiti_bust_guy4blip.changeScale(2);
              $.haiti_bust_guy4.setHealth(130);
              $.hncar2.setIdle();
              $.hncar2.setHealth(5000);
              $.car2hasgone = 1;
              $.hncar2.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
              $.createhncar2 = 1;

              //ENDIF


            }
          }
        }
        if ($.createhncar2 == 1) {
          if (!(Car.IsDead($.hncar2))) {
            $.hncar2.gotoCoordinates($.hncar2xgoto, $.hncar2ygoto, $.hncar2zgoto);
            $.hncar2.setCruiseSpeed(30.0); //35.0
            $.hncar2.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.createhncar2 = 2;
          }
        }
        if ($.createhncar2 == 2) {
          if (!(Car.IsDead($.hncar2))) {
            $.createhncar2 = 3;
          }
        }
        if ($.createhncar2 == 3) {
          if (!(Car.IsDead($.hncar2))) {
            $.hncar2.gotoCoordinatesAccurate(458.637, -512.0005, 10.6906);
            $.hncar2.setCruiseSpeed(30.0);
            $.createhncar2 = 4;
          }
        }
        if ($.createhncar2 == 4) {
          if (!(Car.IsDead($.hncar2))) {
            if ($.hncar2.locate2D(459.637, -512.0005, 3.0, 3.0, false /* FALSE */)) {
              $.hncar2.setIdle();
              $.hncar2.setHealth(1000);
              if ($.bustthedealtext == 0) {
                Text.PrintNow("GEN3_19", 7000, 2);
                $.bustthedealtext = 1;
              }


              if (!(Char.IsDead($.haiti_bust_guy3))) {
                $.haiti_bust_guy3.setObjLeaveAnyCar();
              }
              if (!(Char.IsDead($.haiti_bust_guy4))) {
                $.haiti_bust_guy4.setObjLeaveAnyCar();
                $.createhncar2 = 5;
              }


            }
          }
        }


      }



      //				//////////////////////////////////////// 3rd car and its a reversing van ///////////////////////////////////

      //IF car2hasgone = 1
      if (TIMERB > 24000) {
        if ($.createhncar3 == 0) {
          //IF NOT IS_POINT_ON_SCREEN hncar3x hncar3y hncar3z 2.0
          if ($.car2hasgone == 1) {
            if ($.createhncar2 > 3 || Car.IsDead($.hncar2)) {
              World.ClearArea($.hncar3x, $.hncar3y, $.hncar3z, 3.0, false /* FALSE */);
              $.hncar3 = Car.Create(burrito, $.hncar3x, $.hncar3y, $.hncar3z);
              $.hncar3.setCanBurstTires(false /* FALSE */);
              $.hncar3.setOnlyDamagedByPlayer(true /* TRUE */);
              $.hncar3.setHeading($.hncar3heading);
              $.haiti_bust_guy5 = Char.CreateInsideCar($.hncar3, 8 /* PEDTYPE_GANG_HAITIAN */, HNa);
              $.haiti_bust_guy5.setCanBeShotInVehicle(false /* FALSE */);
              $.haiti_bust_guy5.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
              $.haiti_bust_guy5.clearThreatSearch();
              $.haiti_bust_guy5.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
              $.haiti_bust_guy5.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
              $.haiti_bust_guy5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              $.haiti_bust_guy5.setHealth(150);
              $.haiti_bust_guy5blip = Blip.AddForCharOld($.haiti_bust_guy5, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
              $.haiti_bust_guy5blip.changeScale(2);
              $.haiti_bust_guy6 = Char.CreateAsPassenger($.hncar3, 8 /* PEDTYPE_GANG_HAITIAN */, HNb, 0);
              $.haiti_bust_guy6.setCanBeShotInVehicle(false /* FALSE */);
              $.haiti_bust_guy6.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
              $.haiti_bust_guy6.clearThreatSearch();
              $.haiti_bust_guy6.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
              $.haiti_bust_guy6.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
              $.haiti_bust_guy6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              $.haiti_bust_guy6blip = Blip.AddForCharOld($.haiti_bust_guy6, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
              $.haiti_bust_guy6blip.changeScale(2);
              $.haiti_bust_guy7 = Char.CreateAsPassenger($.hncar3, 8 /* PEDTYPE_GANG_HAITIAN */, HNb, 1);
              $.haiti_bust_guy7.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
              $.haiti_bust_guy7.clearThreatSearch();
              $.haiti_bust_guy7.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
              $.haiti_bust_guy7.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
              $.haiti_bust_guy7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              $.haiti_bust_guy7blip = Blip.AddForCharOld($.haiti_bust_guy7, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
              $.haiti_bust_guy7blip.changeScale(2);
              $.haiti_bust_guy8 = Char.CreateAsPassenger($.hncar3, 8 /* PEDTYPE_GANG_HAITIAN */, HNa, 2);
              $.haiti_bust_guy8.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
              $.haiti_bust_guy8.clearThreatSearch();
              $.haiti_bust_guy8.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
              $.haiti_bust_guy8.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
              //SET_CHAR_THREAT_SEARCH haiti_bust_guy8 THREAT_PLAYER1
              $.haiti_bust_guy8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
              $.haiti_bust_guy8blip = Blip.AddForCharOld($.haiti_bust_guy8, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
              $.haiti_bust_guy8blip.changeScale(2);
              $.hncar3.setIdle();
              $.hncar3.setHealth(1000);
              $.hncar3.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
              $.car3hasgone = 1;
              $.createhncar3 = 1;


            }
          }
          //ENDIF

        }
        if ($.createhncar3 == 1) {
          if (!(Car.IsDead($.hncar3))) {
            $.hncar3.setTempAction(2 /* TEMPACT_REVERSE */, 4000);
            $.b4hb3 = Clock.GetGameTimer();
            $.createhncar3 = 2;
          }
        }
        if ($.createhncar3 == 2) {
          if (!(Car.IsDead($.hncar3))) {
            $.a4hb3 = Clock.GetGameTimer();
            $.time_diff_g33 = $.a4hb3 - $.b4hb3;
            if ($.time_diff_g33 > 3999 || $.hncar3.isOnFire()) {



              if (!(Char.IsDead($.haiti_bust_guy5))) {
                $.haiti_bust_guy5.setObjLeaveAnyCar();
              }
              if (!(Char.IsDead($.haiti_bust_guy6))) {
                $.haiti_bust_guy6.setObjLeaveAnyCar();
              }
              if (!(Char.IsDead($.haiti_bust_guy7))) {
                $.haiti_bust_guy7.setObjLeaveAnyCar();
              }
              if (!(Char.IsDead($.haiti_bust_guy8))) {
                $.haiti_bust_guy8.setObjLeaveAnyCar();
              }


              $.createhncar3 = 3;


            }
          }
        }
        if ($.createhncar3 == 3) {


          if ($.bust_guy5 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy5))) {
              if (!($.haiti_bust_guy5.isInAnyCar())) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy5.setRunning(true /* TRUE */);
                  $.haiti_bust_guy5.setObjRunToCoord(472.158997, -528.148987);
                  $.haiti_bust_guy5.setUsePednodeSeek(false /* FALSE */);
                  $.bust_guy5 = 1;
                }
              }
            }
          }
          if ($.bust_guy5 == 1) {
            if (!(Char.IsDead($.haiti_bust_guy5))) {
              if ($.haiti_bust_guy5.locateOnFoot2D(472.158997, -528.148987, 1.0, 1.0, false /* FALSE */)) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy5.setObjRunToCoord(473.942139, -522.498840);
                  $.haiti_bust_guy5.setUsePednodeSeek(false /* FALSE */);
                  $.bust_guy5 = 2;
                }
              }
            }
          }
          if ($.bust_guy5 == 2) {
            if (!(Char.IsDead($.haiti_bust_guy5))) {
              if ($.haiti_bust_guy5.locateOnFoot2D(473.942139, -522.498840, 1.0, 1.0, false /* FALSE */)) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy5.setObjRunToCoord(461.870697, -519.924255);
                  $.haiti_bust_guy5.setUsePednodeSeek(false /* FALSE */);
                  $.bust_guy5 = 3;
                }
              }
            }
          }
          if ($.bust_guy5 == 3) {
            if (!(Char.IsDead($.haiti_bust_guy5))) {
              if ($.haiti_bust_guy5.locateOnFoot2D(461.870697, -519.924255, 1.0, 1.0, false /* FALSE */)) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy5.setObjKillCharOnFoot($.buddy_g3);
                  $.bust_guy5 = 4;
                }
              }
            }
          }


          if ($.bust_guy6 == 0) {
            if (!(Car.IsDead($.hncar3))) {
              if (!(Char.IsDead($.haiti_bust_guy6))) {
                if (!($.haiti_bust_guy6.isInAnyCar())) {
                  if (!(Char.IsDead($.coke_baron_g3))) {
                    if ($.haiti_bust_guy6.locateAnyMeansChar2D($.coke_baron_g3, 100.0, 100.0, false /* FALSE */)) {
                      $.haiti_bust_guy6.setObjKillCharOnFoot($.coke_baron_g3);
                      $.bust_guy6 = 1;
                    }
                  }
                }
              }
            }
          }


          if ($.bust_guy7 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy7))) {
              if (!($.haiti_bust_guy7.isInAnyCar())) {
                if (!(Char.IsDead($.coke_baron_g3))) {
                  $.haiti_bust_guy7.setObjKillCharOnFoot($.coke_baron_g3);
                  $.bust_guy7 = 1;
                }
              }
            }
          }
          if ($.bust_guy8 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy8))) {
              if (!($.haiti_bust_guy8.isInAnyCar())) {
                if (!(Char.IsDead($.coke_baron_g3))) {
                  $.haiti_bust_guy8.setObjKillCharOnFoot($.coke_baron_g3);
                  $.bust_guy8 = 1;
                }
              }
            }
          }


        }


      }
      //
      //		   //////////////////////////////////////////// 1st van down the alley   ///////////////////////////////////


      if (TIMERB > 41000) {
        if ($.createhncar4 == 0) {
          if ($.car2hasgone == 1) {
            //IF NOT IS_POINT_ON_SCREEN hncar4x hncar4y hncar4z 2.0

            World.ClearArea($.hncar4x, $.hncar4y, $.hncar4z, 3.0, false /* FALSE */);
            $.hncar4 = Car.Create(burrito, $.hncar4x, $.hncar4y, $.hncar4z);
            $.hncar4.setCanBurstTires(false /* FALSE */);
            $.hncar4.setOnlyDamagedByPlayer(true /* TRUE */);
            $.hncar4.setHeading($.hncar4heading);
            $.haiti_bust_guy11 = Char.CreateInsideCar($.hncar4, 8 /* PEDTYPE_GANG_HAITIAN */, HNb);
            $.haiti_bust_guy11.setCanBeShotInVehicle(false /* FALSE */);
            $.haiti_bust_guy11.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
            $.haiti_bust_guy11.clearThreatSearch();
            $.haiti_bust_guy11.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
            $.haiti_bust_guy11.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
            $.haiti_bust_guy11.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.haiti_bust_guy11blip = Blip.AddForCharOld($.haiti_bust_guy11, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
            $.haiti_bust_guy11blip.changeScale(2);
            $.haiti_bust_guy12 = Char.CreateAsPassenger($.hncar4, 8 /* PEDTYPE_GANG_HAITIAN */, HNa, 0);
            $.haiti_bust_guy12.setCanBeShotInVehicle(false /* FALSE */);
            $.haiti_bust_guy12.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
            $.haiti_bust_guy12.clearThreatSearch();
            $.haiti_bust_guy12.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
            $.haiti_bust_guy12.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
            $.haiti_bust_guy12.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.haiti_bust_guy12.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.haiti_bust_guy12blip = Blip.AddForCharOld($.haiti_bust_guy12, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
            $.haiti_bust_guy12.setHealth(130);
            $.haiti_bust_guy12blip.changeScale(2);
            $.haiti_bust_guy13 = Char.CreateAsPassenger($.hncar4, 8 /* PEDTYPE_GANG_HAITIAN */, HNb, 1);
            $.haiti_bust_guy13.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
            $.haiti_bust_guy13.clearThreatSearch();
            $.haiti_bust_guy13.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.haiti_bust_guy13.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
            $.haiti_bust_guy13.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
            $.haiti_bust_guy13.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.haiti_bust_guy13blip = Blip.AddForCharOld($.haiti_bust_guy13, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
            $.haiti_bust_guy13.setHealth(130);
            $.haiti_bust_guy13blip.changeScale(2);
            $.haiti_bust_guy14 = Char.CreateAsPassenger($.hncar4, 8 /* PEDTYPE_GANG_HAITIAN */, HNa, 2);
            $.haiti_bust_guy14.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
            $.haiti_bust_guy14.clearThreatSearch();
            $.haiti_bust_guy14.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
            $.haiti_bust_guy14.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
            $.haiti_bust_guy14.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.haiti_bust_guy14.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.haiti_bust_guy14blip = Blip.AddForCharOld($.haiti_bust_guy14, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
            $.haiti_bust_guy14blip.changeScale(2);
            $.hncar4.setIdle();
            $.hncar4.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.createhncar4 = 1;

            //ENDIF

          }
        }
        if ($.createhncar4 == 1) {
          if (!(Car.IsDead($.hncar4))) {
            $.hncar4.gotoCoordinates($.hncar4xgoto, $.hncar4ygoto, $.hncar4zgoto);
            $.hncar4.setCruiseSpeed(22.0);
            $.hncar4.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.car4hasgone = 1;
            $.createhncar4 = 2;
          }
        }


        if (!(Car.IsDead($.hncar4))) {
          if ($.hncar4.locate2D($.hncar4xgoto, $.hncar4ygoto, 10.0, 10.0, false /* FALSE */) || $.hncar4.isOnFire()) {
            if ($.createhncar4 == 2) {


              $.hncar4.setIdle();
              if (!(Char.IsDead($.haiti_bust_guy11))) {
                $.haiti_bust_guy11.setObjLeaveAnyCar();
              }
              if (!(Char.IsDead($.haiti_bust_guy12))) {
                $.haiti_bust_guy12.setObjLeaveAnyCar();
              }
              if (!(Char.IsDead($.haiti_bust_guy13))) {
                $.haiti_bust_guy13.setObjLeaveAnyCar();
              }
              if (!(Char.IsDead($.haiti_bust_guy14))) {
                $.haiti_bust_guy14.setObjLeaveAnyCar();
              }

              //TIMERB = 0
              $.createhncar4 = 3;



            }
          }
        }
        if ($.createhncar4 == 3) {


          if ($.bust_guy11 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy11))) {
              if (!($.haiti_bust_guy11.isInAnyCar())) {
                if (!(Char.IsDead($.coke_baron_g3))) {
                  if ($.haiti_bust_guy11.locateAnyMeansChar2D($.coke_baron_g3, 50.0, 100.0, false /* FALSE */)) {
                    $.haiti_bust_guy11.setObjKillCharOnFoot($.coke_baron_g3);
                    $.bust_guy11 = 1;
                  }
                }
              }
            }
          }


          if ($.bust_guy12 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy12))) {
              if (!($.haiti_bust_guy12.isInAnyCar())) {
                if (!(Char.IsDead($.coke_baron_g3))) {
                  if ($.haiti_bust_guy12.locateAnyMeansChar2D($.coke_baron_g3, 100.0, 100.0, false /* FALSE */)) {
                    $.haiti_bust_guy12.setObjKillCharOnFoot($.coke_baron_g3);
                    $.bust_guy12 = 1;
                  }
                }
              }
            }
          }


          if ($.bust_guy13 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy13))) {
              if (!($.haiti_bust_guy13.isInAnyCar())) {
                $.haiti_bust_guy13.setObjKillPlayerOnFoot($.player1);
                $.bust_guy13 = 1;
              }
            }
          }


          if ($.bust_guy14 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy14))) {
              if (!($.haiti_bust_guy14.isInAnyCar())) {
                if (!(Char.IsDead($.coke_baron_g3))) {
                  $.haiti_bust_guy14.setObjKillCharOnFoot($.coke_baron_g3);
                  $.bust_guy14 = 1;
                }
              }
            }
          }


          if (!(Char.IsDead($.haiti_bust_guy11))) {
            if ($.bust_guy11 == 1) {


              if ($.player1.isShooting()) {
                if (!($.player1.locateAnyMeansChar2D($.haiti_bust_guy11, 5.0, 5.0, false /* FALSE */))) {
                  $.hg11timerinit = Clock.GetGameTimer();
                  $.haiti_bust_guy11.setCrouch(true /* TRUE */, 300000);
                }
              }
              else {
                $.hg11timerafter = Clock.GetGameTimer();
                $.getuphg11 = $.hg11timerafter - $.hg11timerinit;
                if ($.getuphg11 > 500) {
                  $.haiti_bust_guy11.setCrouch(false /* FALSE */, 100);
                }
              }



            }
          }
          if (!(Char.IsDead($.haiti_bust_guy12))) {
            if ($.bust_guy12 == 1) {


              if ($.player1.isShooting()) {
                if (!($.player1.locateAnyMeansChar2D($.haiti_bust_guy12, 5.0, 5.0, false /* FALSE */))) {
                  $.hg12timerinit = Clock.GetGameTimer();
                  $.haiti_bust_guy12.setCrouch(true /* TRUE */, 300000);
                }
              }
              else {
                $.hg12timerafter = Clock.GetGameTimer();
                $.getuphg12 = $.hg12timerafter - $.hg12timerinit;
                if ($.getuphg12 > 1000) {
                  $.haiti_bust_guy12.setCrouch(false /* FALSE */, 100);
                }
              }



            }
          }




        }


      }

      //
      //					  //////////////////////////////////////////// Haitian car final ///////////////////////////////////
      //
      if (TIMERB > 56000) {
        if ($.createhncar5 == 0) {
          //IF NOT IS_POINT_ON_SCREEN hncar5x hncar5y hncar5z 2.0
          if ($.car3hasgone == 1) {
            if ($.car2hasgone == 1) {
              if ($.createhncar2 > 3 || Car.IsDead($.hncar2)) {
                World.ClearArea($.hncar5x, $.hncar5y, $.hncar5z, 3.0, false /* FALSE */);
                $.hncar5 = Car.Create(voodoo, $.hncar5x, $.hncar5y, $.hncar5z);
                $.hncar5.setCanBurstTires(false /* FALSE */);
                $.hncar5.setOnlyDamagedByPlayer(true /* TRUE */);
                $.hncar5.setHeading($.hncar5heading);
                $.haiti_bust_guy17 = Char.CreateInsideCar($.hncar5, 8 /* PEDTYPE_GANG_HAITIAN */, HNb);
                $.haiti_bust_guy17.setCanBeShotInVehicle(false /* FALSE */);
                $.haiti_bust_guy17.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
                $.haiti_bust_guy17.clearThreatSearch();
                $.haiti_bust_guy17.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
                $.haiti_bust_guy17.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
                $.haiti_bust_guy17.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.haiti_bust_guy17.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                $.haiti_bust_guy17blip = Blip.AddForCharOld($.haiti_bust_guy17, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
                $.haiti_bust_guy17blip.changeScale(2);
                $.haiti_bust_guy18 = Char.CreateAsPassenger($.hncar5, 8 /* PEDTYPE_GANG_HAITIAN */, HNa, 0);
                $.haiti_bust_guy18.setHealth(130);
                $.haiti_bust_guy18.setCanBeShotInVehicle(false /* FALSE */);
                $.haiti_bust_guy18.giveWeapon(22 /* WEAPONTYPE_TEC9 */, 300000);
                $.haiti_bust_guy18.clearThreatSearch();
                $.haiti_bust_guy18.setThreatSearch(1024 /* THREAT_GANG_DIAZ */);
                $.haiti_bust_guy18.setThreatSearch(128 /* THREAT_GANG_CUBAN */);
                $.haiti_bust_guy18.setThreatSearch(1 /* THREAT_PLAYER1 */);
                $.haiti_bust_guy18.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                $.haiti_bust_guy18blip = Blip.AddForCharOld($.haiti_bust_guy18, 4 /* YELLOW */, 2 /* BLIP_ONLY */);
                $.haiti_bust_guy18blip.changeScale(2);
                $.hncar5.setIdle();
                $.hncar5.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
                $.car5hasgone = 1;
                $.createhncar5 = 1;


              }
            }
          }
          //ENDIF

        }
        if ($.createhncar5 == 1) {
          if (!(Car.IsDead($.hncar5))) {
            $.hncar5.gotoCoordinates($.hncar5xgoto, $.hncar5ygoto, $.hncar5zgoto);
            $.hncar5.setCruiseSpeed(30.0);
            $.hncar5.setDrivingStyle(3 /* DRIVINGMODE_PLOUGHTHROUGH */);
            $.createhncar5 = 2;
          }
        }


        if ($.createhncar5 == 2) {
          if (!(Car.IsDead($.hncar5))) {
            if ($.hncar5.locate2D($.hncar5xgoto, $.hncar5ygoto, 3.5, 3.5, false /* FALSE */) || $.hncar5.isOnFire()) {
              $.hncar5.setIdle();
              if (!(Char.IsDead($.haiti_bust_guy17))) {
                if ($.haiti_bust_guy17.isInAnyCar()) {
                  $.haiti_bust_guy17.setObjLeaveAnyCar();
                }
              }
              if (!(Char.IsDead($.haiti_bust_guy18))) {
                if ($.haiti_bust_guy18.isInAnyCar()) {
                  $.haiti_bust_guy18.setObjLeaveAnyCar();
                }
              }
              $.createhncar5 = 3;


            }
          }
        }
        if ($.createhncar5 == 3) {
          if ($.bust_guy17 == 0) {
            if (!(Car.IsDead($.hncar5))) {
              if (!(Char.IsDead($.haiti_bust_guy17))) {
                if (!($.haiti_bust_guy17.isInAnyCar())) {
                  if (!(Char.IsDead($.coke_baron_g3))) {
                    if ($.haiti_bust_guy17.locateAnyMeansChar2D($.coke_baron_g3, 50.0, 50.0, false /* FALSE */)) {
                      $.haiti_bust_guy17.setObjKillCharOnFoot($.coke_baron_g3);
                      $.bust_guy17 = 1;
                    }
                  }
                }
              }
            }
          }
          if ($.bust_guy18 == 0) {
            if (!(Char.IsDead($.haiti_bust_guy18))) {
              if (!($.haiti_bust_guy18.isInAnyCar())) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy18.setRunning(true /* TRUE */);
                  $.haiti_bust_guy18.setObjRunToCoord(456.27, -524.856);
                  $.haiti_bust_guy18.setUsePednodeSeek(false /* FALSE */);
                  $.bust_guy18 = 1;
                }
              }
            }
          }
          if ($.bust_guy18 == 1) {
            if (!(Char.IsDead($.haiti_bust_guy18))) {
              if ($.haiti_bust_guy18.locateOnFoot2D(456.27, -524.856, 1.0, 1.0, false /* FALSE */)) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy18.setRunning(true /* TRUE */);
                  $.haiti_bust_guy18.setObjRunToCoord(472.158997, -528.148987);
                  $.haiti_bust_guy18.setUsePednodeSeek(false /* FALSE */);
                  $.bust_guy18 = 2;
                }
              }
            }
          }



          if ($.bust_guy18 == 2) {
            if (!(Char.IsDead($.haiti_bust_guy18))) {
              if ($.haiti_bust_guy18.locateOnFoot2D(472.158997, -528.148987, 1.0, 1.0, false /* FALSE */)) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy18.setObjRunToCoord(473.942139, -522.498840);
                  $.haiti_bust_guy18.setUsePednodeSeek(false /* FALSE */);
                  $.bust_guy18 = 3;
                }
              }
            }
          }
          if ($.bust_guy18 == 3) {
            if (!(Char.IsDead($.haiti_bust_guy18))) {
              if ($.haiti_bust_guy18.locateOnFoot2D(473.942139, -522.498840, 1.0, 1.0, false /* FALSE */)) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy18.setObjRunToCoord(461.870697, -519.924255);
                  $.haiti_bust_guy18.setUsePednodeSeek(false /* FALSE */);
                  $.bust_guy18 = 4;
                }
              }
            }
          }
          if ($.bust_guy18 == 4) {
            if (!(Char.IsDead($.haiti_bust_guy18))) {
              if ($.haiti_bust_guy18.locateOnFoot2D(461.870697, -519.924255, 1.0, 1.0, false /* FALSE */)) {
                if (!(Char.IsDead($.buddy_g3))) {
                  $.haiti_bust_guy18.setObjKillCharOnFoot($.buddy_g3);
                  $.bust_guy18 = 5;
                }
              }
            }
          }



        }



      }



      //mark cars as no longer needed if dead
      if (Car.IsDead($.hncar1)) {
        $.hncar1.markAsNoLongerNeeded();
      }
      if (Car.IsDead($.hncar2)) {
        $.hncar2.markAsNoLongerNeeded();
      }
      if (Car.IsDead($.hncar3)) {
        $.hncar3.markAsNoLongerNeeded();
      }



    }


    //kill all the dudes

    if ($.protect_deal_flag == 12) {
      if ($.car5hasgone == 1) {
        if (Char.IsDead($.haiti_bust_guy1)) {
          if (Char.IsDead($.haiti_bust_guy2)) {
            if (Char.IsDead($.haiti_bust_guy3)) {
              if (Char.IsDead($.haiti_bust_guy4)) {
                if (Char.IsDead($.haiti_bust_guy5)) {
                  if (Char.IsDead($.haiti_bust_guy6)) {
                    if (Char.IsDead($.haiti_bust_guy7)) {
                      if (Char.IsDead($.haiti_bust_guy8)) {
                        if (Char.IsDead($.haiti_bust_guy11)) {
                          if (Char.IsDead($.haiti_bust_guy12)) {
                            if (Char.IsDead($.haiti_bust_guy13)) {
                              if (Char.IsDead($.haiti_bust_guy14)) {
                                if (Char.IsDead($.haiti_bust_guy17)) {
                                  if (Char.IsDead($.haiti_bust_guy18)) {
                                    Text.ClearPrints();
                                    $.protect_deal_flag = 13;
                                    TIMERA = 0;
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
              }
            }
          }
        }
      }
    }




    if ($.protect_deal_flag == 13) {
      if (TIMERA > 100) {
        $.player1.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        Streaming.RequestModel(sanchez);
        while (!(Streaming.HasModelLoaded(sanchez))) {
          await asyncWait(0);
        }

        ///////////////////////////////////////////////////////////////////////AUDIO
        Audio.LoadMissionAudio(1, "sniper" as any);
        Audio.LoadMissionAudio(2, "COL3_24" as any);
        while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
          await asyncWait(0);
        }
        $.bike1_g3 = Car.Create(sanchez, 467.9877, -432.7724, 9.5777);
        $.bike1_g3.changeColor(6 /* CARCOLOUR_TAXIYELLOW */, 6 /* CARCOLOUR_TAXIYELLOW */);
        $.bike1_g3.setHeading(176.3589);
        $.biker1_g3 = Char.CreateInsideCar($.bike1_g3, 8 /* PEDTYPE_GANG_HAITIAN */, HNb);
        $.biker1_g3.clearThreatSearch();
        $.biker1_g3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.bike1_g3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.bike1_g3.setIdle();
        $.bike1_g3.setCruiseSpeed(20.0);
        $.bike1_g3.gotoCoordinatesAccurate(461.5507, -495.9435, 10.06);
        $.bike1_g3.setStraightLineDistance(5);
        $.bike1_g3.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
        $.bike2_g3 = Car.Create(sanchez, 465.3870, -430.1095, 9.53);
        $.bike2_g3.changeColor(6 /* CARCOLOUR_TAXIYELLOW */, 6 /* CARCOLOUR_TAXIYELLOW */);
        $.bike2_g3.setHeading(176.3589);
        $.biker2_g3 = Char.CreateInsideCar($.bike2_g3, 8 /* PEDTYPE_GANG_HAITIAN */, HNb);


        $.biker2_g3.clearThreatSearch();
        $.biker2_g3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.bike2_g3.setOnlyDamagedByPlayer(true /* TRUE */); //create them
        $.bike2_g3.setIdle();
        $.bike2_g3.setCruiseSpeed(30.0);
        $.bike2_g3.gotoCoordinatesAccurate(449.048, -548.812, 9.71657);
        $.bike2_g3.setStraightLineDistance(5);
        World.ClearArea(459.170, -384.687, 300.0, 300.0, false /* FALSE */);
        if (!(Car.IsDead($.coke_barons_car))) {
          $.coke_barons_car.freezePosition(false /* FALSE */);
        }
        $.otherdeal_car.delete();
        $.hncar1.delete();
        $.hncar2.delete();
        $.hncar3.delete();
        $.hncar4.delete();
        $.hncar5.delete();
        $.coke_barons_car.delete();
        $.briefcase_deal.delete();
        $.cubandrugdealerboss.delete();
        $.cubandrugdealer1.delete();
        Streaming.MarkModelAsNoLongerNeeded(CBa); // Cuban model a
        Streaming.MarkModelAsNoLongerNeeded(burrito);
        Streaming.MarkModelAsNoLongerNeeded(HNa);
        $.coke_barons_car = Car.Create(admiral, 462.859056, -482.477783, 10.090549);
        $.coke_barons_car.setHeading(177.317093);
        $.coke_barons_car.changeColor(8 /* CARCOLOUR_LIGHTBLUEGREY */, 8 /* CARCOLOUR_LIGHTBLUEGREY */);
        $.coke_barons_car.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
        $.coke_barons_car.setOnlyDamagedByPlayer(true /* TRUE */);
        $.coke_barons_car.setCanBurstTires(false /* FALSE */);
        $.otherdeal_car = Car.Create(cuban, 466.887604, -495.259917, 10.793473);
        $.otherdeal_car.setHeading(339.889345);
        $.otherdeal_car.setCanBurstTires(false /* FALSE */);
        $.hncar1 = Car.Create(voodoo, 464.6875, -501.688837, 10.793473);
        $.hncar1.setHeading(327.731);
        $.hncar1.setCanBurstTires(false /* FALSE */);
        $.briefcase_deal = ScriptObject.Create(briefcase, 461.5507, -495.9435, 10.06);
        Streaming.MarkModelAsNoLongerNeeded(cuban);
        Streaming.MarkModelAsNoLongerNeeded(voodoo);
        Streaming.MarkModelAsNoLongerNeeded(tec9);
        if ($.player1.isInArea3D(452.2447, -472.5703, -5.0, 462.9531, -541.2667, 12.7430, false /* FALSE */)) {
          $.player_is_on_ground = 1;
        }
        if ($.player_is_on_ground == 1) {
          $.player1.setCoordinates(453.3544, -508.6663, 9.9747);
          $.player1.setHeading(174.4280);
        }
        else {
          $.player1.setCoordinates(454.1120, -503.8624, 16.9188);
          $.player1.setHeading(162.0138);
        }

        //move coke baron
        if (!(Char.IsDead($.coke_baron_g3))) {
          $.coke_baron_g3.setCrouch(false /* FALSE */, 100);
          $.coke_baron_g3.setOnlyDamagedByPlayer(true /* TRUE */);
          $.coke_baron_g3.setCoordinates(463.8191, -496.5726, 10.0225);
          $.coke_baron_g3.setHeading(154.3421);
          $.coke_baron_g3.setAccuracy(70);
        }


        //move guards if alive
        if (!(Char.IsDead($.coke_barons_goon1))) {
          $.coke_barons_goon1.setCoordinates(464.8956, -493.4782, 10.0225);
          $.coke_barons_goon1.setHeading(167.2020);
          $.coke_barons_goon1.setStayInSamePlace(true /* TRUE */);
          $.coke_barons_goon1.setAccuracy(70);
          $.coke_barons_goon1.setOnlyDamagedByPlayer(true /* TRUE */);
        }
        else {
          $.coke_barons_goon1.delete();
          Streaming.MarkModelAsNoLongerNeeded(CLa);
        }
        if (!(Char.IsDead($.coke_barons_goon2))) {
          $.coke_barons_goon2.setCoordinates(463.9327, -505.5049, 9.9656);
          $.coke_barons_goon2.setHeading(90.4333);
          $.coke_barons_goon2.setStayInSamePlace(true /* TRUE */);
          $.coke_barons_goon2.setAccuracy(60);
          $.coke_barons_goon2.setOnlyDamagedByPlayer(true /* TRUE */);
        }
        else {
          $.coke_barons_goon2.delete();
          Streaming.MarkModelAsNoLongerNeeded(CLb);
        }
        Hud.ClearCounter($.$id.diaz_health_bar);
        Hud.ClearCounter($.$id.lance_health_bar);
        $.protect_deal_flag = 14;
        TIMERA = 0;


      }
    }


    if ($.protect_deal_flag == 14) {
      if (!(Char.IsDead($.biker1_g3))) {
        if (!(Car.IsDead($.bike1_g3))) {
          if ($.biker1_g3.isInCar($.bike1_g3)) {
            if (!(Char.IsDead($.biker2_g3))) {
              if (!(Car.IsDead($.bike2_g3))) {
                if ($.biker2_g3.isInCar($.bike2_g3)) {
                  Camera.PointAtCar($.bike2_g3, 14 /* WHEELCAM */, 2 /* JUMP_CUT */);
                  TIMERA = 0;
                  $.protect_deal_flag = 15;


                }
              }
            }
          }
        }
      }
    }



    if ($.protect_deal_flag == 15) {
      if (!(Char.IsDead($.biker1_g3))) {
        if (!(Car.IsDead($.bike1_g3))) {
          if ($.biker1_g3.isInCar($.bike1_g3)) {
            if (!(Char.IsDead($.biker2_g3))) {
              if (!(Car.IsDead($.bike2_g3))) {
                if ($.biker2_g3.isInCar($.bike2_g3)) {
                  if ($.bike1_g3.locate2D(460.9107, -477.6669, 5.0, 5.0, false /* FALSE */)) {
                    Camera.SetFixedPosition(454.526390, -507.1066, 13.649254, 0.0, 0.0, 0.0);
                    Camera.PointAtCar($.bike1_g3, 15 /* FIXED */, 2 /* JUMP_CUT */);
                    $.protect_deal_flag = 16;
                    TIMERA = 0;
                  }
                  else {
                    if (TIMERA > 15000) {
                      $.bike1_g3.setCoordinates(460.9107, -477.6669, -100.0); //safety timer
                      $.bike1_g3.setHeading(169.954); //safety heading
                      if (!($.biker1_g3.isSittingInCar($.bike1_g3))) {
                        $.biker1_g3.warpIntoCar($.bike1_g3); //safety timer
                      }
                      $.bike1_g3.gotoCoordinatesAccurate(461.5507, -495.9435, 10.06); //safety timer
                      TIMERA = 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }



    if ($.protect_deal_flag == 16) {
      if (!(Char.IsDead($.biker1_g3))) {
        if (!(Car.IsDead($.bike1_g3))) {
          if ($.biker1_g3.isInCar($.bike1_g3)) {
            if ($.bike1_g3.locate2D(461.5507, -495.9435, 1.5, 1.5, false /* FALSE */)) {
              $.briefcase_deal.delete();
              Text.PrintNow("GEN3_35", 7000, 2); //he has got Diaz's money
              $.biker_blip_g3 = Blip.AddForChar($.biker1_g3);
              $.bike1_g3.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
              $.bike1_g3.setCruiseSpeed(16.0);
              $.bike1_g3.gotoCoordinatesAccurate(449.048, -548.812, 9.71657);
              if (!(Char.IsDead($.coke_baron_g3))) {
                if (!(Char.IsDead($.biker1_g3))) {
                  $.coke_baron_g3.setObjKillCharOnFoot($.biker1_g3);
                }
              }
              if (!(Char.IsDead($.buddy_g3))) {
                if (!(Char.IsDead($.biker2_g3))) {
                  $.buddy_g3.setObjKillCharOnFoot($.biker2_g3);
                }
              }
              Text.PrintNow("GEN3_53", 5000, 1);
              Audio.PlayMissionAudio(2); //////////////////////////////	MY MONEY
              while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.coke_baron_g3))) {
                await asyncWait(0);
              }
              Audio.ClearMissionAudio(2);
              Text.ClearThisPrint("GEN3_53");
              $.protect_deal_flag = 17;
              TIMERA = 0;
            }
            else {
              if (TIMERA > 15000) {
                $.bike1_g3.setCoordinates(461.5507, -495.9435, -100.0); //safety timer
                $.bike1_g3.setHeading(169.954); //safety heading
                if (!($.biker1_g3.isSittingInCar($.bike1_g3))) {
                  $.biker1_g3.warpIntoCar($.bike1_g3); //safety timer
                }
                TIMERA = 0;
              }
            }
          }
        }
      }
    }


    if ($.protect_deal_flag == 17) {
      if (!(Char.IsDead($.biker1_g3))) {
        if (!(Car.IsDead($.bike1_g3))) {
          if ($.biker1_g3.isInCar($.bike1_g3)) {
            if (!(Char.IsDead($.coke_baron_g3))) {
              if ($.bike1_g3.locate2D(449.048, -548.812, 7.5, 7.5, false /* FALSE */)) {
                if (!(Car.IsDead($.bike2_g3))) {
                  //CAR_SET_IDLE bike2_g3
                  $.bike2_g3.setMission(10 /* MISSION_EMERGENCYVEHICLE_STOP */);
                }
                Audio.PlayMissionAudio(1); //////////////////////////////	SNIPER AUDIO	SNIPER AUDIO	SNIPER AUDIO
                if (!(Char.IsDead($.biker2_g3))) {
                  $.biker2_g3.explodeHead();
                }
                while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.coke_baron_g3))) {
                  await asyncWait(0);
                }
                Audio.ClearMissionAudio(1);


                if (!(Car.IsDead($.coke_barons_car))) {
                  $.coke_baron_g3.warpIntoCar($.coke_barons_car);
                  // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                  // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                  // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                  $.coke_baron_g3.setCanBeShotInVehicle(false /* FALSE */);
                  // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                  // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX
                  // PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX PC VERSION FIX

                }
                await asyncWait(0);
                if (!(Car.IsDead($.coke_barons_car))) {
                  $.coke_barons_car.setCoordinates(460.7918, -488.6781, 10.0225);
                  $.coke_barons_car.setHeading(177.0297);
                  $.coke_barons_car.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
                }
                $.coke_barons_goon1.delete();
                Streaming.MarkModelAsNoLongerNeeded(CLa);
                $.coke_barons_goon2.delete();
                Streaming.MarkModelAsNoLongerNeeded(CLb);
                if (!(Car.IsDead($.bike2_g3))) {
                  $.bike2_g3.setCoordinates(453.3230, -541.0601, 9.7917);
                  $.bike2_g3.setHeading(161.5261);
                }
                Hud.SwitchWidescreen(false /* OFF */);
                $.player1.setControl(true /* ON */);
                Camera.RestoreJumpcut();
                Camera.SetBehindPlayer();
                World.SetCarDensityMultiplier(1.0);
                $.gun2_g3 = Pickup.CreateWithAmmo(UZI, 3 /* PICKUP_ONCE */, 90, 455.9854, -531.2479, 10.7576);
                if (!(Car.IsDead($.bike2_g3))) {
                  $.tempblip_g3 = Blip.AddForCarOld($.bike2_g3, 0 /* RED */, 1 /* MARKER_ONLY */);
                }
                if (!(Car.IsDead($.coke_barons_car))) {
                  $.coke_barons_car.freezePosition(true /* TRUE */);
                }
                TIMERA = 0;
                $.got_out_of_car_flag_g3 = 1;
                $.protect_deal_flag = 18;
              }
              else {
                if (TIMERA > 25000) {
                  $.bike1_g3.setCoordinates(449.048, -548.812, -100.0); //safety timer
                  $.bike1_g3.setHeading(169.954); //safety heading
                  if (!($.biker1_g3.isSittingInCar($.bike1_g3))) {
                    $.biker1_g3.warpIntoCar($.bike1_g3); //safety timer
                  }
                  TIMERA = 0;
                }
              }
            }
          }
        }
      }
    }


    if ($.protect_deal_flag == 18) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if ($.tommydiaz_audio_flag == 0) {
          Audio.LoadMissionAudio(1, "COL3_25" as any); //chase them down!
          $.tommydiaz_audio_flag = 1;
        }
        if ($.tommydiaz_audio_flag == 1) {
          if (Audio.HasMissionAudioLoaded(1)) {
            $.tommydiaz_audio_flag = 2;
          }
        }
        if ($.tommydiaz_audio_flag == 2) {
          Text.PrintNow("GEN3_54", 5000, 1);
          Audio.PlayMissionAudio(1); /////////////////////////////////////////////////////////////////////AUDIO
          $.tommydiaz_audio_flag = 3;
        }
        if ($.tommydiaz_audio_flag == 3) {
          if (Audio.HasMissionAudioFinished(1)) {
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("GEN3_54");
            Text.PrintNow("GEN3_36", 7000, 2); //he has got Diaz's money
            $.tommydiaz_audio_flag = 4;
          }
        }


      }
      else {
        Audio.ClearMissionAudio(1);
      }
    }

    ///////////////////////////////////////////////////////////////// shooting forward on bike help

    if (!(Car.IsDead($.bike2_g3))) {
      if ($.player1.isSittingInCar($.bike2_g3)) {
        if ($.motorbikeshootfwd_help == 0) {
          if (TIMERA > 9500) {
            Text.PrintHelp("GEN3_63");
            TIMERA = 0;
            $.motorbikeshootfwd_help = 1;
          }
        }
        if ($.motorbikeshootfwd_help == 1) {
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 3) {
            Text.PrintHelp("GEN3_66"); //target R1, Then fire using the | button
            TIMERA = 0;
            $.motorbikeshootfwd_help = 2;
          }
          else {
            Text.PrintHelp("GEN3_64"); //target R1, Then fire using the | button
            TIMERA = 0;
            $.motorbikeshootfwd_help = 2;
          }


        }
        if ($.motorbikeshootfwd_help == 2) {
          if (TIMERA > 9500) {
            Text.PrintHelp("GEN3_67"); //you must have a sub machine gun to perform this move
            TIMERA = 0;
            $.motorbikeshootfwd_help = 3;
          }
        }


      }
    }




    if ($.removetempblip_g3 == 0) {
      if ($.protect_deal_flag > 17) {
        if (!($.protect_deal_flag == 50)) {
          if (!(Car.IsDead($.bike2_g3))) {
            if ($.player1.isSittingInAnyCar() || !($.player1.locateAnyMeansCar2D($.bike2_g3, 65.0, 65.0, false /* FALSE */)) || $.you_got_the_case_back_g3 > 0) {
              $.tempblip_g3.remove();
              $.removetempblip_g3 = 1;
            }
          }
        }
      }
    }


    ///////////////////////////////////////////// speed of motorbike the player has to chase

    if ($.protect_deal_flag > 17) {
      if ($.protect_deal_flag < 20) {
        if (!(Char.IsDead($.biker1_g3))) {
          if (!(Car.IsDead($.bike1_g3))) {
            if ($.biker1_g3.isOnScreen()) {
              if ($.biker1_g3.isSittingInCar($.bike1_g3)) {
                if ($.player1.locateInCarChar2D($.biker1_g3, 50.0, 50.0, false /* FALSE */)) {
                  $.bike1_g3.setCruiseSpeed(30.0);
                }
                else {
                  $.bike1_g3.setCruiseSpeed(22.0);
                }
              }
            }
          }
        }
      }
    }



    if ($.protect_deal_flag == 18) {
      if (!(Char.IsDead($.biker1_g3))) {
        await biker_on_bike_check();  // SCM GOSUB biker_on_bike_check
        if (!(Car.IsDead($.bike1_g3))) {
          if ($.biker1_g3.isInCar($.bike1_g3)) {
            if ($.bike1_g3.locate2D(258.262, -957.993, 10.0, 10.0, false /* FALSE */)) {
              $.got_out_of_car_flag_g3 = 1;
              $.protect_deal_flag = 19;
            }
          }
        }


      }
    }






    if ($.protect_deal_flag == 19) {
      if (!(Char.IsDead($.biker1_g3))) {
        await biker_on_bike_check();  // SCM GOSUB biker_on_bike_check
        if (!(Car.IsDead($.bike1_g3))) {
          if ($.biker1_g3.isInCar($.bike1_g3)) {
            if ($.bike1_g3.locate2D(191.64, -1305.0, 10.0, 10.0, false /* FALSE */)) {
              $.got_out_of_car_flag_g3 = 1;
              $.protect_deal_flag = 20;
            }
          }
        }


      }
    }



    if ($.protect_deal_flag == 20) {
      if (!(Char.IsDead($.biker1_g3))) {
        await biker_on_bike_check();  // SCM GOSUB biker_on_bike_check


      }
    }



    if ($.protect_deal_flag > 17) {
      if (!($.protect_deal_flag == 50)) {
        if ($.you_got_the_case_back_g3 == 0) {
          if (Char.IsDead($.biker1_g3)) {
            if (Char.DoesExist($.biker1_g3)) {
              $.biker_blip_g3.remove();
              const _res209 = World.GetDeadCharPickupCoords($.biker1_g3);
$.biker1x_g3 = _res209.x;
$.biker1y_g3 = _res209.y;
$.biker1z_g3 = _res209.z;
              $.briefcase_g3 = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, $.biker1x_g3, $.biker1y_g3, $.biker1z_g3);
              $.briefcase_g3blip = Blip.AddForPickup($.briefcase_g3);
              Text.PrintNow("GEN3_29", 7000, 2); //Collect the case and take it back
              $.you_got_the_case_back_g3 = 1;
            }
            else {
              Text.PrintNow("GEN3_50", 5000, 1); //"You lost Diaz's money, try not to reduce it to ashes!"
              $.you_got_the_case_back_g3 = 1;
              // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow
            }
          }
        }
      }
    }





    if ($.you_got_the_case_back_g3 == 1) {
      if ($.briefcase_g3.hasBeenCollected()) {
        $.briefcase_g3blip.remove();
        Text.PrintNow("GEN3_28", 7000, 2); //Take case back to Diaz
        $.finaldiazblip = Blip.AddForCoord(461.1141, -483.7427, 10.0225);
        $.you_got_the_case_back_g3 = 2;
      }
    }

    ///////////////////////////////////////// 	FINAL CUTSCENE	and move buddy away	/////////////////////////////////



    if ($.you_got_the_case_back_g3 == 2) {
      if ($.player1.locateStoppedOnFoot2D(462.846466, -488.8573, 1.0, 1.0, true /* TRUE */)) {
        if (!(Char.IsDead($.coke_baron_g3))) {
          if (!(Car.IsDead($.coke_barons_car))) {


            World.ClearArea(461.1141, -483.7427, 50.0, 50.0, true /* TRUE */);
            $.finaldiazblip.remove();
            Hud.SwitchWidescreen(true /* ON */);
            $.player1.setControl(false /* OFF */);
            $.coke_barons_car.freezePosition(false /* FALSE */);
            Camera.SetFixedPosition(458.359741, -492.029907, 11.408049, 0.0, 0.0, 0.0); //2nd cam angle
            Camera.PointAtPoint(459.023193, -491.319061, 11.174602, 2 /* JUMP_CUT */);
            $.coke_baron_g3.lookAtPlayerAlways($.player1);
            $.player1.lookAtCharAlways($.coke_baron_g3);
            World.ClearArea(459.03, -492.26, 50.0, 50.0, false /* FALSE */);
            $.player1.setCoordinates(462.3976, -488.8137, 10.0225);
            $.player1.setHeading(94.7362);
            $.player1.lookAtCharAlways($.coke_baron_g3);
            $.coke_baron_g3.turnToFacePlayer($.player1);
            $.player1.turnToFaceChar($.coke_baron_g3);
            $.player1.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
            $.coke_baron_g3.setCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
            $.otherdeal_car.markAsNoLongerNeeded();
            $.hncar1.markAsNoLongerNeeded();
            $.bike1_g3.delete();
            $.bike2_g3.delete();
            World.ClearArea(462.582916, -507.508911, 10.622159, 1.0, false /* FALSE */);
            $.bike1_g3 = Car.Create(sanchez, 462.582916, -507.508911, 10.622159);
            $.bike1_g3.setHeading(345.749);
            $.bike1_g3.changeColor(6 /* CARCOLOUR_TAXIYELLOW */, 6 /* CARCOLOUR_TAXIYELLOW */);
            $.otherdeal_car.markAsNoLongerNeeded();
            $.hncar1.markAsNoLongerNeeded();
            World.ClearArea(460.8782, -495.8145, 10.018, 2.0, true /* TRUE */);
            World.ClearArea(460.3542, -498.9017, 9.9931, 2.0, true /* TRUE */);
            World.ClearArea(459.4139, -503.3691, 9.9561, 2.0, true /* TRUE */);
            World.ClearArea(458.4541, -507.1656, 9.9158, 2.0, true /* TRUE */);
            World.ClearArea(457.2427, -513.5924, 9.8549, 2.0, true /* TRUE */);
            Audio.LoadMissionAudio(1, "COL3_12" as any);
            Audio.LoadMissionAudio(2, "COL3_13" as any);
            while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
              await asyncWait(0);
            }
            Text.PrintNow("GEN3_9", 5000, 1); //I live! Dickheads! And it's all down to you! What is your name?
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.coke_baron_g3))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("GEN3_9");
            if (!(Car.IsDead($.coke_barons_car))) {
              Camera.PointAtCar($.coke_barons_car, 14 /* WHEELCAM */, 2 /* JUMP_CUT */);
            }
            Camera.SetFixedPosition(464.582764, -484.943939, 11.91287, 0.0, 0.0, 0.0); //2nd cam angle
            Camera.PointAtPoint(463.841675, -485.576874, 11.68894, 2 /* JUMP_CUT */);
            Text.PrintNow("GEN3_10", 5000, 1); //Tommy.
            Audio.PlayMissionAudio(2);
            while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.scplayer))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(2);
            Text.ClearThisPrint("GEN3_10");
            Audio.LoadMissionAudio(1, "COL3_14" as any);
            Audio.LoadMissionAudio(2, "COL3_15" as any);
            while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
              await asyncWait(0);
            }


            Text.PrintNow("GEN3_11", 5000, 1); //We will meet again soon I think!
            Audio.PlayMissionAudio(1);
            while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.coke_baron_g3))) {
              await asyncWait(0);
            }
            Audio.ClearMissionAudio(1);
            Text.ClearThisPrint("GEN3_11");
            $.you_got_the_case_back_g3 = 3;
            $.buddy_g3.delete();
          }
        }
      }
    }



    if ($.you_got_the_case_back_g3 == 3) {
      if (!(Char.IsDead($.coke_baron_g3))) {
        if (!(Car.IsDead($.coke_barons_car))) {
          if ($.coke_baron_g3.isSittingInCar($.coke_barons_car)) {
            $.coke_barons_car.setCruiseSpeed(20.0);
            $.coke_barons_car.gotoCoordinates(454.0, -629.2, 9.65577);
            $.coke_barons_car.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
            TIMERA = 0;
            $.you_got_the_case_back_g3 = 4;
          }
        }
      }
    }


    if ($.you_got_the_case_back_g3 == 4) {
      if (!(Car.IsDead($.coke_barons_car))) {
        if (!($.player1.locateAnyMeansCar2D($.coke_barons_car, 30.0, 30.0, false /* FALSE */)) || TIMERA > 15000) {
          $.player1.stopLooking();
          $.scplayer.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 2000);
          Text.PrintNow("GEN3_12", 5000, 1); //Now where'd Lance get to? Shit...
          Audio.PlayMissionAudio(2);
          while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.scplayer))) {
            await asyncWait(0);
          }
          Audio.ClearMissionAudio(2);
          Text.ClearThisPrint("GEN3_12");
          $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
          if (!(Char.IsDead($.coke_baron_g3))) {
            $.coke_baron_g3.stopLooking();
          }
          Camera.RestoreJumpcut();
          Hud.SwitchWidescreen(false /* OFF */);
          $.player1.setControl(true /* ON */);
          // SCM GOTO → mission_general3_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general3_passed"); // fallback: would break linear control flow
          $.you_got_the_case_back_g3 = 5;
        }
      }
    }





    ////////////////////////////////////////////////////////// YOU HAVE LEFT LANCE BEHIND	/////////////////////////////////


    if ($.buddy_ingroup_g3 == 1) {
      if (!(Char.IsDead($.buddy_g3))) {
        if (!($.buddy_g3.isInPlayersGroup($.player1))) {
          if ($.player_left_buddy_behind_g3 == 0) {
            Text.PrintNow("GEN3_23", 10000, 1); //You've left Lance behind, go and get him.
            $.meeting_blip_s3.remove();
            $.buddy_g3blip = Blip.AddForChar($.buddy_g3);
            $.protect_deal_flag = 50;
            $.player_left_buddy_behind_g3 = 1;
          }
        }
      }
    }


    if ($.protect_deal_flag == 50) {
      if (!(Char.IsDead($.buddy_g3))) {
        if ($.buddy_g3.isInPlayersGroup($.player1)) {
          if ($.player_left_buddy_behind_g3 == 1) {
            $.meeting_blip_s3 = Blip.AddForCoord($.meetingx_s3, $.meetingy_s3, 11.062);
            $.buddy_g3blip.remove();
            Text.ClearThisPrint("GEN3_23");
            Text.PrintNow("GEN3_44", 5000, 2);
            $.player_left_buddy_behind_g3 = 0;
            $.protect_deal_flag = 2;
          }
        }
      }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////





    //


    ///////// bug checks


    if ($.protect_deal_flag > 11) {
      if (Char.IsDead($.cubandrugdealerboss)) {
        $.cubandrugdealerboss.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.cubandrugdealer1)) {
        $.cubandrugdealer1.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.coke_barons_goon1)) {
        $.coke_barons_goon1.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.coke_barons_goon2)) {
        $.coke_barons_goon2.markAsNoLongerNeeded();
      }


    }




    if ($.createhncar1 > 1) {
      if (Char.IsDead($.haiti_bust_guy1)) {
        $.haiti_bust_guy1blip.remove();
        $.haiti_bust_guy1.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy2)) {
        $.haiti_bust_guy2blip.remove();
        $.haiti_bust_guy2.markAsNoLongerNeeded();
      }


    }

    ////////


    if ($.createhncar2 > 1) {
      if (Char.IsDead($.haiti_bust_guy3)) {
        $.haiti_bust_guy3blip.remove();
        $.haiti_bust_guy3.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy4)) {
        $.haiti_bust_guy4blip.remove();
        $.haiti_bust_guy4.markAsNoLongerNeeded();
      }


    }

    /////////////////


    if ($.createhncar3 > 1) {
      if (Char.IsDead($.haiti_bust_guy5)) {
        $.haiti_bust_guy5blip.remove();
        $.haiti_bust_guy5.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy6)) {
        $.haiti_bust_guy6blip.remove();
        $.haiti_bust_guy6.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy7)) {
        $.haiti_bust_guy7blip.remove();
        $.haiti_bust_guy7.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy8)) {
        $.haiti_bust_guy8blip.remove();
        $.haiti_bust_guy8.markAsNoLongerNeeded();
      }


    }





    if ($.createhncar4 > 1) {
      if (Char.IsDead($.haiti_bust_guy11)) {
        $.haiti_bust_guy11blip.remove();
        $.haiti_bust_guy11.markAsNoLongerNeeded();
      }


      if (Char.IsDead($.haiti_bust_guy12)) {
        $.haiti_bust_guy12blip.remove();
        $.haiti_bust_guy12.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy13)) {
        $.haiti_bust_guy13blip.remove();
        $.haiti_bust_guy13.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy14)) {
        $.haiti_bust_guy14blip.remove();
        $.haiti_bust_guy14.markAsNoLongerNeeded();
      }


    }



    if ($.createhncar5 > 1) {
      if (Char.IsDead($.haiti_bust_guy17)) {
        $.haiti_bust_guy17blip.remove();
        $.haiti_bust_guy17.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.haiti_bust_guy18)) {
        $.haiti_bust_guy18blip.remove();
        $.haiti_bust_guy18.markAsNoLongerNeeded();
      }


    }


    //////////////




    if ($.protect_deal_flag > 1) {
      if ($.protect_deal_flag < 21) {
        if ($.you_got_the_case_back_g3 < 3) {
          if (Char.IsDead($.buddy_g3)) {
            Text.PrintNow("GEN3_25", 5000, 1);
            // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow
          }
        }
      }
    }


    if ($.protect_deal_flag == 50) {
      if (Char.IsDead($.buddy_g3)) {
        Text.PrintNow("GEN3_25", 5000, 1);
        // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow
      }
    }


    if ($.protect_deal_flag > 3) {
      if ($.protect_deal_flag < 50) {
        if (Char.IsDead($.coke_baron_g3)) {
          Text.PrintNow("GEN3_38", 5000, 1);
          // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow
        }
      }
    }


    if ($.you_got_the_case_back_g3 == 0) {
      if ($.protect_deal_flag > 17) {
        if (!($.protect_deal_flag == 50)) {
          if (!(Char.IsDead($.biker1_g3))) {
            if (!($.player1.locateAnyMeansChar2D($.biker1_g3, 300.0, 300.0, false /* FALSE */))) {
              Text.PrintNow("GEN3_30", 5000, 1);
              // SCM GOTO → mission_general3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_general3_failed"); // fallback: would break linear control flow


            }
          }
        }
      }
    }




  }
}



// Mission general3 failed


async function mission_general3_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
  Game.SetMaxWantedLevel(4);
}




////////////////////////////////////////////////////// mission general3 passed


async function mission_general3_passed() {


  $.flag_general_mission3_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 1000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(1000);
  Stat.PlayerMadeProgress(1);


  Game.SetMaxWantedLevel(5); /////////////////////////////////////////TO BE CHANGED


  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed("COL_3");
  $.ruger_in_stock = 1;
  $.general_contact_blip.remove();
}




// mission cleanup

async function mission_cleanup_general3() {


  ONMISSION = 0;
  $.gun_g3_blip.remove();
  $.meeting_blip_s3.remove();
  $.roof_blip_g3.remove();
  $.finaldiazblip.remove();
  //REMOVE_BLIP dealblip_g3

  $.gun_g3.remove();
  $.gun2_g3.remove();


  $.coke_baron_g3.removeElegantly();
  $.buddy_g3.removeElegantly();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  $.briefcase_deal.delete();


  if (!(Car.IsDead($.otherdeal_car))) {
    $.otherdeal_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  if (!(Car.IsDead($.hncar1))) {
    $.hncar1.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  if (!(Car.IsDead($.coke_barons_car))) {
    $.coke_barons_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
    $.coke_barons_car.freezePosition(false /* FALSE */);
  }



  Streaming.MarkModelAsNoLongerNeeded(admiral);
  Streaming.MarkModelAsNoLongerNeeded(CLa); //diaz bg1
  Streaming.MarkModelAsNoLongerNeeded(CLb); //diaz bg2
  Streaming.MarkModelAsNoLongerNeeded(cuban);
  Streaming.MarkModelAsNoLongerNeeded(HNa); // Haitian model a
  Streaming.MarkModelAsNoLongerNeeded(HNb); // Haitian model b
  Streaming.MarkModelAsNoLongerNeeded(CBa); // Cuban model a
  Streaming.MarkModelAsNoLongerNeeded(burrito);
  Streaming.MarkModelAsNoLongerNeeded(voodoo);
  Streaming.MarkModelAsNoLongerNeeded(TEC9);
  Streaming.MarkModelAsNoLongerNeeded(sanchez);
  Streaming.MarkModelAsNoLongerNeeded(UZI);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);
  Streaming.MarkModelAsNoLongerNeeded(infernus);


  $.haiti_bust_guy1blip.remove();
  $.haiti_bust_guy2blip.remove();
  $.haiti_bust_guy3blip.remove();
  $.haiti_bust_guy4blip.remove();
  $.haiti_bust_guy5blip.remove();
  $.haiti_bust_guy6blip.remove();
  $.haiti_bust_guy7blip.remove();
  $.haiti_bust_guy8blip.remove();
  $.haiti_bust_guy11blip.remove();
  $.haiti_bust_guy12blip.remove();
  $.haiti_bust_guy13blip.remove();
  $.haiti_bust_guy14blip.remove();
  $.haiti_bust_guy17blip.remove();
  $.haiti_bust_guy18blip.remove();
  $.biker_blip_g3.remove();
  $.briefcase_g3blip.remove();
  $.briefcase_g3.remove();
  $.tempblip_g3.remove();


  Path.SwitchRoadsOn(360.1251, -718.2709, 5.6599, 358.0144, -714.4711, 15.5665);


  Path.SwitchPedRoadsOn(378.103, -785.55, -10.908, 448.572, -365.738, 15.096);


  Path.SwitchPedRoadsOn(461.047, -407.806, -5.549, 470.150, -391.0296, 16.9967);


  Path.SwitchPedRoadsOn(435.0, -524.0, 8.06, 471.0, -543.0, 10.22);


  Path.SwitchPedRoadsOn(459.0238, -516.2858, -9.8426, 442.6711, -521.8006, 9.3815);


  Path.SwitchRoadsOn(378.103, -785.55, -10.908, 448.572, -365.738, 15.096);
  Path.SwitchRoadsOn(461.047, -407.806, -5.549, 470.150, -391.0296, 16.9967);
  Path.SwitchRoadsOn(435.0, -524.0, 8.06, 471.0, -543.0, 10.22);


  Path.SwitchPedRoadsOn(453.8270, -521.7261, -9.8193, 458.1206, -518.6826, 9.8448);


  Path.SwitchPedRoadsOff(448.1194, -547.5710, -9.5965, 451.8866, -545.3828, 9.7703);
  Path.SwitchPedRoadsOff(363.3187, -740.4727, -9.8304, 358.7317, -742.9393, 9.8132);
  Path.SwitchPedRoadsOff(363.3187, -740.4727, -9.8304, 358.7317, -742.9393, 9.8132);
  Path.SwitchPedRoadsOff(252.7259, -1010.6981, -9.3932, 247.8766, -1015.8472, 9.4152);


  Path.SwitchRoadsOff(448.1194, -547.5710, -9.5965, 451.8866, -545.3828, 9.7703);
  Path.SwitchRoadsOff(363.3187, -740.4727, -9.8304, 358.7317, -742.9393, 9.8132);
  Path.SwitchRoadsOff(363.3187, -740.4727, -9.8304, 358.7317, -742.9393, 9.8132);
  Path.SwitchRoadsOff(252.7259, -1010.6981, -9.3932, 247.8766, -1015.8472, 9.4152);
  Path.SwitchRoadsOff(458.3911, -489.0092, -10.0225, 463.1796, -482.4622, 10.0225);


  Path.SwitchRoadsOff(433.9177, -580.8214, -9.7481, 430.8031, -571.5383, 9.6440);
  Path.SwitchPedRoadsOff(433.9177, -580.8214, -9.7481, 430.8031, -571.5383, 9.6440);


  Path.SwitchPedRoadsOff(461.4449, -458.5997, -9.5192, 466.4395, -452.1389, 9.5569);
  Path.SwitchPedRoadsOff(409.9822, -628.7527, -9.6987, 401.5934, -633.8622, 9.7065);
  Path.SwitchPedRoadsOff(397.3751, -659.5804, -9.9223, 392.3924, -652.4006, 12.6895);
  Path.SwitchPedRoadsOff(451.3571, -549.2508, -9.7200, 371.0886, -706.9174, 12.9341);


  Path.SwitchPedRoadsOn(467.4480, -562.4217, 10.0455, 498.3176, -559.6038, 10.0255);
  Path.SwitchPedRoadsOn(463.6935, -522.5222, -9.9304, 458.2091, -523.7589, 9.9072);


  Path.SwitchPedRoadsOn(403.895782, -706.78685, 5.047491, 401.164642, -707.573608, 12.059977);
  Path.SwitchPedRoadsOn(512.522766, -414.838806, 5.066745, 515.015991, -419.548131, 12.066745);


  Path.SwitchPedRoadsOn(409.067291, -567.91864, 5.203645, 407.802521, -563.997375, 11.118168);


  Path.SwitchPedRoadsOn(387.940216, -553.2854, 5.080599, 388.572418, -557.278259, 11.06856);
  //SWITCH_PED_ROADS_ON 373.236664 -563.343201 9.100934 368.959656 -563.005432 11.123937

  Path.SwitchPedRoadsOn(369.0032, -563.5308, 8.19, 374.34494, -563.174072, 10.099979);



  Weather.Release();


  Hud.ClearCounter($.$id.diaz_health_bar);
  Hud.ClearCounter($.$id.lance_health_bar);
  $.buddy_g3blip.remove();
  $.tempblip_g3.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}




////////////////////////////GOSUB

async function biker_on_bike_check() {


  if ($.got_out_of_car_flag_g3 < 2) {
    if (!(Car.IsDead($.bike1_g3))) {
      if (!($.player1.isInCar($.bike1_g3))) {
        if ($.bike1_g3.isInWater()) {
          $.got_out_of_car_flag_g3 = 2;
        }
      }
      else {
        $.got_out_of_car_flag_g3 = 2;
      }
    }
    else {
      $.got_out_of_car_flag_g3 = 2;
    }
  }


  if ($.got_out_of_car_flag_g3 == 0) {
    if (!($.biker1_g3.isInAnyCar())) {
      $.biker1_g3.setObjEnterCarAsDriver($.bike1_g3);
      $.biker1_g3.setRunning(true /* TRUE */);
      $.got_out_of_car_flag_g3 = 1;
    }
  }



  if ($.got_out_of_car_flag_g3 == 1) {
    if ($.biker1_g3.isSittingInCar($.bike1_g3)) {
      $.bike1_g3.setCruiseSpeed(30.0);
      $.bike1_g3.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
      if ($.protect_deal_flag == 18) {
        $.bike1_g3.gotoCoordinatesAccurate(256.0, -969.15, 9.622);
      }
      else {
        if ($.protect_deal_flag == 19) {
          $.bike1_g3.gotoCoordinatesAccurate(191.64, -1305.0, 9.101);
        }
        else {
          $.bike1_g3.wanderRandomly();
        }
      }
      $.got_out_of_car_flag_g3 = 0;
    }
  }



  if ($.got_out_of_car_flag_g3 == 2) {
    if ($.biker1_g3.isOnFoot() || Car.IsDead($.bike1_g3)) {
      $.biker1_g3.setObjNoObj();
      $.biker1_g3.setObjFleePlayerOnFootAlways($.player1);
      $.got_out_of_car_flag_g3 = 3;
    }
    else {
      if ($.biker1_g3.isSittingInAnyCar()) {
        $.biker1_g3.setObjLeaveAnyCar();
      }
    }
  }
}

export async function general3() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // ************************************ General Mission 3 **********************************
  // ************************************ Protect the Deal ***********************************
  // *****************************************************************************************
  // *** The General is brokering a deal for the Coke Baron.  The player1 and buddy are 	 ***
  // *** watching over the deal with M-16s.  The deal goes wrong.  The player1 must protect***
  // *** the buddy and the Coke Baron while he escapes. (Alternating between the deal, and ***
  // *** the balcony that the buddy's on)*****************************************************
  // *****************************************************************************************
  // *****************************************************************************************



  // SCRIPT_NAME GENERL3
  // Mission start stuff


  await mission_start_general3();  // SCM GOSUB mission_start_general3


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_general3_failed();  // SCM GOSUB mission_general3_failed
  }


  await mission_cleanup_general3();  // SCM GOSUB mission_cleanup_general3


  // MissionBoundary

  /////////////////////////////////////////////////Variables

  // VAR_INT gun_g3 player_left_buddy_behind_g3
  // VAR_INT buddy_g3 buddy_g3blip
  // VAR_INT coke_barons_goon1 coke_barons_goon2
  // VAR_INT coke_baron_g3
  // VAR_INT coke_barons_car
  // VAR_INT briefcase_g3 briefcase_g3blip
  // VAR_INT diaz_health_bar


  // VAR_INT introcut got_out_of_car_flag_g3


  //cubans

  // VAR_INT otherdeal_car
  // VAR_FLOAT otherdeal_carx
  // VAR_FLOAT otherdeal_cary
  // VAR_FLOAT otherdeal_carz
  // VAR_FLOAT otherdealheading


  // VAR_INT cubandrugdealerboss
  // VAR_INT cubandrugdealer1


  //first meeting coords

  // VAR_FLOAT meetingx_s3
  // VAR_FLOAT meetingy_s3
  // VAR_FLOAT meetingz_s3


  // VAR_FLOAT roofposx
  // VAR_FLOAT roofposy
  // VAR_FLOAT roofposz
  // VAR_INT roof_blip_g3


  // VAR_FLOAT lanceposx
  // VAR_FLOAT lanceposy
  // VAR_FLOAT lanceposz
  // VAR_FLOAT lanceheadingpos

  //Haitians

  // VAR_INT haiti_bust_guy1
  // VAR_INT haiti_bust_guy2
  // VAR_INT haiti_bust_guy3
  // VAR_INT haiti_bust_guy4
  // VAR_INT haiti_bust_guy5
  // VAR_INT haiti_bust_guy6
  // VAR_INT haiti_bust_guy7
  // VAR_INT haiti_bust_guy8


  // VAR_INT haiti_bust_guy11
  // VAR_INT haiti_bust_guy12
  // VAR_INT haiti_bust_guy13
  // VAR_INT haiti_bust_guy14


  // VAR_INT haiti_bust_guy17
  // VAR_INT haiti_bust_guy18

  //flags

  // VAR_INT bust_guy5
  // VAR_INT bust_guy6
  // VAR_INT bust_guy7
  // VAR_INT bust_guy8
  // VAR_INT bust_guy11
  // VAR_INT bust_guy12
  // VAR_INT bust_guy13
  // VAR_INT bust_guy14
  // VAR_INT bust_guy17
  // VAR_INT bust_guy18

  //blips

  // VAR_INT haiti_bust_guy1blip
  // VAR_INT haiti_bust_guy2blip
  // VAR_INT haiti_bust_guy3blip
  // VAR_INT haiti_bust_guy4blip
  // VAR_INT haiti_bust_guy5blip
  // VAR_INT haiti_bust_guy6blip
  // VAR_INT haiti_bust_guy7blip
  // VAR_INT haiti_bust_guy8blip
  // VAR_INT haiti_bust_guy11blip
  // VAR_INT haiti_bust_guy12blip
  // VAR_INT haiti_bust_guy13blip
  // VAR_INT haiti_bust_guy14blip
  // VAR_INT haiti_bust_guy17blip
  // VAR_INT haiti_bust_guy18blip

  //blips

  // VAR_INT gun_g3_blip
  // VAR_INT meeting_blip_s3
  //flags

  // VAR_INT protect_deal_flag

  //coords

  // VAR_FLOAT gun_g3x gun_g3y gun_g3z
  // VAR_FLOAT dealcarx_g3 dealcary_g3 dealcarz_g3 dealcar_heading
  // VAR_FLOAT dealcarx_g3goto dealcary_g3goto dealcarz_g3goto

  //scripted cut scenes flags

  // VAR_INT scriptedcut3



  //cars that bust the deal

  // VAR_INT hncar1 createhncar1
  // VAR_FLOAT hncar1x hncar1y hncar1z
  // VAR_FLOAT hncar1heading
  // VAR_FLOAT hncar1xgoto hncar1ygoto


  // VAR_INT hncar2 createhncar2
  // VAR_FLOAT hncar2x hncar2y hncar2z
  // VAR_FLOAT hncar2heading
  // VAR_FLOAT hncar2xgoto hncar2ygoto hncar2zgoto


  // VAR_INT hncar3 createhncar3
  // VAR_FLOAT hncar3x hncar3y hncar3z
  // VAR_FLOAT hncar3heading


  // VAR_INT hncar4 createhncar4
  // VAR_FLOAT hncar4x hncar4y hncar4z
  // VAR_FLOAT hncar4heading
  // VAR_FLOAT hncar4xgoto hncar4ygoto hncar4zgoto


  // VAR_INT hncar5 createhncar5
  // VAR_FLOAT hncar5x hncar5y hncar5z
  // VAR_FLOAT hncar5heading
  // VAR_FLOAT hncar5xgoto hncar5ygoto hncar5zgoto



  //third car

  // VAR_INT a4hb3
  // VAR_INT time_diff_g33
  // VAR_INT b4hb3


  // VAR_INT car1hasgone
  // VAR_INT car2hasgone
  // VAR_INT car3hasgone
  // VAR_INT car4hasgone
  // VAR_INT car5hasgone

  //bikes

  // VAR_INT bike1_g3 biker_blip_g3
  // VAR_INT biker1_g3


  // VAR_INT bike2_g3
  // VAR_INT biker2_g3


  // VAR_INT playingaudio
  // VAR_INT playingaudiostate
  // VAR_INT cbgooncounter1
  // VAR_INT buddyshootcounter


  // VAR_INT buddy_ingroup_g3


  // VAR_INT you_got_the_case_back_g3
  // VAR_INT finaldiazblip


  //cuban deal

  // VAR_INT briefcase_deal player_is_on_ground
  // VAR_FLOAT cbossx_a3 cbossy_a3 cbossz_a3
  // VAR_FLOAT cokellastx cokellasty cokellastz
  // VAR_FLOAT briefcaseobject_g3x briefcaseobject_g3y

  //

  // VAR_FLOAT biker1x_g3 biker1y_g3 biker1z_g3
  // VAR_INT buddyscar_g3


  //ducking stuff

  // VAR_INT hg1timerinit
  // VAR_INT hg1timerafter
  // VAR_INT getuphg1


  // VAR_INT hg11timerinit
  // VAR_INT hg11timerafter
  // VAR_INT getuphg11


  // VAR_INT hg12timerinit
  // VAR_INT hg12timerafter
  // VAR_INT getuphg12


  //buddy audio

  // VAR_INT buddy1help bustthedealtext

  //help

  // VAR_INT removetempblip_g3 tempblip_g3


  // VAR_INT lance_health_bar diazmoved_g3 gun2_g3 tommydiaz_audio_flag rugerhelp_g3 motorbikeshootfwd_help


  //////////////// PC VERSION FIX

  // VAR_INT monoflag_g3


  ////////////////////////////////////////////////TEMP STUFF TO BE TAKEN OUT






  // ****************************************Mission Start************************************


}
