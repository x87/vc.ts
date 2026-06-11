// Generated from main/general1.sc

import { $ } from "../utils/vars.mts";

async function mission_start_general1() {
  Text.ClearThisPrint("M_FAIL");
  ONMISSION = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  Text.LoadMissionText("GENERA1");
  Shortcut.SetDropoffPointForMission(-163.0, -1439.4, 9.0, 201.5);
  // *****************************************Set Flags/variables************************************

  $.where_gonzalez = 0;
  $.move_gonzalez_goons = 0;
  $.help_spray_msg = 0;
  $.gen1_text = 0;
  $.del_peds = 0;

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


  Streaming.LoadSpecialCharacter(1, "CSplay");
  Streaming.LoadSpecialCharacter(2, "CScolo");
  Streaming.LoadSpecialCharacter(3, "Cgona");
  Streaming.LoadSpecialCharacter(4, "cservrb");


  Streaming.LoadSpecialModel(CUTOBJ01, "lobtray");
  Streaming.LoadSpecialModel(CUTOBJ02, "lobster");
  Streaming.LoadSpecialModel(CUTOBJ03, "coknife");
  Streaming.LoadSpecialModel(CUTOBJ04, "coltray");
  Streaming.RequestModel(big_poly_tings);


  const _res188 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res188.x;
$.the_yacht_y = _res188.y;
$.the_yacht_z = _res188.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Streaming.LoadScene($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03)) || !(Streaming.HasModelLoaded(CUTOBJ04)) || !(Streaming.HasModelLoaded(big_poly_tings))) {
    await asyncWait(0);
  }


  const _res189 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res189.x;
$.the_yacht_y = _res189.y;
$.the_yacht_z = _res189.z;
  $.the_yacht3 = ScriptObject.CreateNoOffset(big_poly_tings, $.the_yacht_x, $.the_yacht_y, $.the_yacht_z);


  Cutscene.Load("col_1");


  const _res190 = $.the_yacht.getCoordinates();
$.the_yacht_x = _res190.x;
$.the_yacht_y = _res190.y;
$.the_yacht_z = _res190.z;
  $.the_yacht_x = $.the_yacht_x + 0.003;
  $.the_yacht_y = $.the_yacht_y - 1.381;
  $.the_yacht_z = $.the_yacht_z + 3.149;
  Cutscene.SetOffset($.the_yacht_x, $.the_yacht_y, $.the_yacht_z);
  Camera.SetNearClip(0.1);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("CSplay");


  $.cs_colonel = CutsceneObject.Create(SPECIAL02);
  $.cs_colonel.setAnim("CScolo");


  $.cs_dgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_dgoona.setAnim("cgona");


  $.cs_mserver = CutsceneObject.Create(SPECIAL04);
  $.cs_mserver.setAnim("cservrb");


  $.cs_lobtray = CutsceneObject.Create(CUTOBJ01);
  $.cs_lobtray.setAnim("lobtray");


  $.cs_lobster = CutsceneObject.Create(CUTOBJ02);
  $.cs_lobster.setAnim("lobster");


  $.cs_coknife = CutsceneObject.Create(CUTOBJ03);
  $.cs_coknife.setAnim("coknife");


  $.cs_coltray = CutsceneObject.Create(CUTOBJ04);
  $.cs_coltray.setAnim("coltray");


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1250) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_A", 10000, 1); // Mr. Vercetti!


  while ($.cs_time < 3050) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_B", 10000, 1); // Colonel.


  while ($.cs_time < 4110) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_C", 10000, 1); // Thank you for coming. Lobster?


  while ($.cs_time < 8180) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_D", 10000, 1); // No thanks.


  while ($.cs_time < 10130) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_E", 10000, 1); // I'm ashamed to admit that one of the causes of our mutual problem appears to have been the loose tongue of a man I used to trust.


  while ($.cs_time < 17220) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_F", 10000, 1); // I've been carrying Gonzalez for years, but now his incompetence reaches new heights


  while ($.cs_time < 23040) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_G", 10000, 1); // Is only right that you kill Gonzalez...


  while ($.cs_time < 25170) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_H", 10000, 1); // Did he do it? It’s the money that’s important to me.


  while ($.cs_time < 28100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_I", 10000, 1); // But this kindness will reward you, and then we will find your money together.


  while ($.cs_time < 34160) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("GEN1_J", 10000, 1); // He will be at his Penthouse, half drunk probably.


  while ($.cs_time < 37160) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 42112) {
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


  $.the_yacht3.delete();
  Streaming.MarkModelAsNoLongerNeeded(big_poly_tings);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);


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
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);

  // ******************************************END OF CUTSCENE********************************

  Camera.SetFadingColor(0, 0, 0);
  await asyncWait(500);
  Camera.SetBehindPlayer();

  //------------------ REQUEST_MODELS ------------------------------

  $.player1.setMood(1 /* PLAYER_MOOD_PISSED_OFF */, 60000);
  Weather.ForceNow(4 /* WEATHER_EXTRA_SUNNY */);


  Streaming.RequestModel(chnsaw);
  Streaming.RequestModel(CLa);


  while (!(Streaming.HasModelLoaded(chnsaw)) || !(Streaming.HasModelLoaded(CLa))) {
    await asyncWait(0);
  }


  Streaming.LoadSpecialCharacter(1, "IGGonz");
  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }
  Streaming.LoadAllModelsNow();
  Path.SwitchPedRoadsOff(479.9, -1.4, 11.0, 450.3, 59.5, 40.0);


  $.player1.giveWeapon(11 /* WEAPONTYPE_CHAINSAW */, 1);


  $.gonzalez_house = Blip.AddForCoord(476.8, 30.4, 11.0);



  //creating random chars

  $.ped_dead1 = Char.CreateRandom(-242.8, -1342.5, 7.1);
  $.ped_dead1.setHeading(204.5);


  $.ped_dead2 = Char.CreateRandom(-240.8, -1344.1, 7.1);
  $.ped_dead2.setHeading(89.6);


  $.ped_dead3 = Char.CreateRandom(-242.3, -1344.7, 7.1);
  $.ped_dead3.setHeading(349.2);


  Game.SetCharsChatting($.ped_dead1, $.ped_dead2, 86400000);
  Game.SetCharsChatting($.ped_dead3, $.ped_dead2, 86400000);


  $.bottom_sexpad_doors.delete();
  $.bottom_sexpad_doors_open = ScriptObject.CreateNoOffset(spad_dr_open3, 464.663, 30.336, 23.881);
  $.bottom_sexpad_doors_open.dontRemove();


  $.middle_sexpad_doors.delete();
  $.middle_sexpad_doors_open = ScriptObject.CreateNoOffset(spad_dr_open2, 461.961, 31.436, 31.24);
  $.middle_sexpad_doors_open.dontRemove();


  $.top_sexpad_doors.delete();
  $.top_sexpad_doors_open = ScriptObject.CreateNoOffset(spad_dr_open1, 454.321, 31.436, 35.198);
  $.top_sexpad_doors_open.dontRemove();


  $.pool_cover = ScriptObject.CreateNoOffset(sexypoolcover, 470.68, 30.336, 30.19);
  $.pool_cover.dontRemove();


  Camera.DoFade(1500, 1 /* FADE_IN */);


  TIMERB = 0;
  Text.PrintNow("GEN1_05", 5000, 1); //Go and kill Gonzalez.


  while (!($.player1.isInArea3D(476.5, 27.3, 11.28, 474.8, 33.0, 14.3, false /* FALSE */))) {
    await asyncWait(0);
    if ($.del_peds == 0) {
      if (!($.player1.isInZone("BEACH1"))) {
        $.ped_dead1.markAsNoLongerNeeded();
        $.ped_dead2.markAsNoLongerNeeded();
        $.ped_dead3.markAsNoLongerNeeded();
        $.del_peds = 1;
      }
    }
    if (!(Char.IsDead($.ped_dead1))) {
      if ($.player1.isShooting()) {
        $.ped_dead1.markAsNoLongerNeeded();
      }
    }
    if (!(Char.IsDead($.ped_dead2))) {
      if ($.player1.isShooting()) {
        $.ped_dead2.markAsNoLongerNeeded();
      }
    }
    if (!(Char.IsDead($.ped_dead3))) {
      if ($.player1.isShooting()) {
        $.ped_dead3.markAsNoLongerNeeded();
      }
    }
    Sphere.Draw(475.5, 30.3, 11.0, 3.0);

    /*
    IF help_spray = 0
    IF gen1_text = 0
    IF timerb < 5000
    IF help_spray_msg = 0

    PRINT_HELP ( GEN1_01 ) //When jogging, press and hold the Circle button to prepare a melee attack
    help_spray_msg = 1

    ENDIF
    ELSE
    gen1_text = 1
    timerb = 0
    help_spray_msg = 0
    ENDIF
    ENDIF

    IF gen1_text = 1
    IF timerb < 5000
    IF help_spray_msg = 0

    PRINT_HELP ( GEN1_14 ) //Release the Circle button to make the attack.
    help_spray_msg = 1

    ENDIF
    ELSE
    help_spray = 1
    gen1_text = 2
    help_spray_msg = 0
    ENDIF
    ENDIF
    ELSE
    IF gen1_text < 2
    gen1_text = 2
    ENDIF
    ENDIF



    */
    //IF gen1_text = 2
    //PRINT_NOW ( GEN1_05 ) 5000 1 //Go and kill Gonzalez.
    //	gen1_text = 3
    //ENDIF

    /*
    IF gen1_text = 3
    IF LOCATE_PLAYER_ANY_MEANS_3D player1 476.8 30.4 9.0 15.0 15.0 15.0 FALSE
    IF help_spray_msg = 0
    PRINT_NOW ( GEN1_04 ) 5000 1 //Walk into the doorway to gain access to Gonzalez' rooftop pad.
    help_spray_msg = 1
    gen1_text = 4
    ENDIF
    ENDIF
    ENDIF
    */

  }



  Text.ClearPrints();
  $.gonzalez_house.remove();
  // *****************************START OF CUTSCENE player1 going up to see Gonzalez*******************

  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);


  $.player1.giveWeapon(11 /* WEAPONTYPE_CHAINSAW */, 1);
  $.player1.setCurrentWeapon(11 /* WEAPONTYPE_CHAINSAW */);


  $.gonzalez = Char.Create(4 /* PEDTYPE_CIVMALE */, SPECIAL01, 466.0, 38.2, 32.0);
  $.gonzalez.clearThreatSearch();
  $.gonzalez.setHealth(150);
  $.gonzalez.setOnlyDamagedByPlayer(true /* TRUE */);
  $.gonzalez.setAnimGroup(50 /* ANIM_PANIC_CHUNKYPED */);



  $.gonzalez_goon1 = Char.Create(4 /* PEDTYPE_CIVMALE */, CLa, 466.1, 40.1, 32.0);
  $.gonzalez_goon1.clearThreatSearch();
  $.gonzalez_goon1.setHeading(180.0);


  Game.SetCharsChatting($.gonzalez, $.gonzalez_goon1, 9999999);


  $.gonzalez_goon2 = Char.Create(4 /* PEDTYPE_CIVMALE */, CLa, 464.3, 43.7, 32.0);
  $.gonzalez_goon2.clearThreatSearch();


  $.scplayer.setObjRunToCoord(475.7, 30.3);


  TIMERA = 0;
}



async function mini_gen1_loop() {
  // SCM GOTO → mini_gen1_loop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if (TIMERA > 5000) {
      // SCM GOTO → mini_gen1_loop2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mini_gen1_loop2"); // fallback: would break linear control flow
    }


    if (!(Char.IsDead($.scplayer))) {
      if ($.scplayer.isObjectivePassed()) {
        $.scplayer.setObjWaitOnFoot();
        // SCM GOTO → mini_gen1_loop2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mini_gen1_loop2"); // fallback: would break linear control flow
      }
    }


  }
}

async function mini_gen1_loop2() {


  $.scplayer.setObjNoObj();


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  $.player1.setCoordinates(454.4, 31.3, 33.86);
  $.player1.setHeading(270.0);


  Camera.SetFixedPosition(468.1, 41.0, 33.5, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(461.0, 32.8, 33.0, 2 /* JUMP_CUT */);


  Camera.DoFade(500, 1 /* FADE_IN */);


  TIMERA = 0;


  if (!(Char.IsDead($.scplayer))) {
    $.scplayer.setObjGotoCoordOnFoot(460.7, 27.5);
  }


  while (!($.player1.locateAnyMeans2D(460.7, 27.5, 0.5, 0.5, false /* FALSE */)) && TIMERA < 5000) {
    await asyncWait(0);
    if ($.player1.locateAnyMeans2D(460.7, 27.5, 4.0, 4.0, false /* FALSE */)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        if ($.button_pressed == 1) {
          $.button_pressed = 0;
          // SCM GOTO → end_cut_gen1_1 (not lowered; manual jump required)
          throw new Error("unresolved GOTO end_cut_gen1_1"); // fallback: would break linear control flow
        }
      }
      else {
        if ($.button_pressed == 0) {
          $.button_pressed = 1;
        }
      }
    }
  }


  if (!(Char.IsDead($.gonzalez))) {
    $.scplayer.setObjNoObj();
    $.player1.turnToFaceChar($.gonzalez);
  }


  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  Audio.LoadMissionAudio(1, "COL1_5" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }
  Text.PrintNow("GEN1_10", 4000, 1); //I'm going to shut that big mouth of yours!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → end_cut_gen1_1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO end_cut_gen1_1"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("GEN1_10");


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);


  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.setWaitState(0 /* WAITSTATE_FALSE */, 100);
    $.gonzalez.turnToFacePlayer($.player1);
    $.gonzalez.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  }


  if (!(Char.IsDead($.gonzalez_goon1))) {
    $.gonzalez_goon1.setObjNoObj();
  }


  Camera.SetFixedPosition(462.4, 23.3, 36.2, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(459.2, 33.1, 34.0, 2 /* JUMP_CUT */);


  Audio.LoadMissionAudio(1, "COL1_1" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }
  Text.PrintNow("GEN1_06", 4000, 1); //Eeek! He's got a blade!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → end_cut_gen1_1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO end_cut_gen1_1"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("GEN1_06");


  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.setWaitState(0 /* WAITSTATE_FALSE */, 100);
    $.gonzalez.setObjRunToCoord(466.1, 42.7);
  }


  if (!(Char.IsDead($.gonzalez_goon1))) {
    $.gonzalez_goon1.setObjKillPlayerOnFoot($.player1);
  }


  if (!(Char.IsDead($.gonzalez_goon2))) {
    $.gonzalez_goon2.setObjKillPlayerOnFoot($.player1);
  }


  $.scplayer.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);


  Audio.LoadMissionAudio(1, "COL1_6" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }
  Text.PrintNow("GEN1_11", 4000, 1); //Stop running you fat slimeball!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        $.button_pressed = 0;
        // SCM GOTO → end_cut_gen1_1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO end_cut_gen1_1"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.button_pressed == 0) {
        $.button_pressed = 1;
      }
    }
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("GEN1_11");


  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
}



async function end_cut_gen1_1() {
  $.top_sexpad_doors.delete();
  $.top_sexpad_doors_open.delete();
  $.top_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed1, 465.375, 30.336, 33.181);
  $.top_sexpad_doors.dontRemove();
  $.player1.setCoordinates(460.7, 27.5, 33.8);
  Text.ClearPrints();
  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  $.scplayer.setObjNoObj();
  $.scplayer.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  if (!(Char.IsDead($.gonzalez_goon1))) {
    $.gonzalez_goon1.setObjKillPlayerOnFoot($.player1);
  }


  if (!(Char.IsDead($.gonzalez_goon2))) {
    $.gonzalez_goon2.setObjKillPlayerOnFoot($.player1);
  }
  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.setWaitState(0 /* WAITSTATE_FALSE */, 100);
    $.gonzalez_blip = Blip.AddForChar($.gonzalez);
  }
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  TIMERA = 0;
  TIMERB = 250;
}

// *****************************END OF CUTSCENE player1 going up to see Gonzalez*************

/////////////////////////Chasing Gonzalez upstairs//////////////////////////////////////////

async function gen1_main_loop() {
  // SCM GOTO → gen1_main_loop lowered to endless loop
  while (true) {
    await asyncWait(0);
    //GOSUB warpy_player


    if (!(Char.IsDead($.gonzalez))) {
      if ($.where_gonzalez == 0) {
        if (!(Char.IsDead($.gonzalez))) {
          if ($.gonzalez.locateAnyMeans2D(466.1, 42.7, 1.0, 1.0, false /* FALSE */)) {
            $.gonzalez.setObjRunToCoord(472.3, 42.8);
            $.where_gonzalez = 1;
          }
          else {
            $.gonzalez.setObjRunToCoord(466.1, 42.7);
          }
        }
      }
      if ($.where_gonzalez == 1) {
        if (!(Char.IsDead($.gonzalez))) {
          if ($.gonzalez.locateAnyMeans2D(472.3, 42.8, 1.0, 1.0, false /* FALSE */)) {
            $.gonzalez.setObjRunToCoord(472.5, 35.9);
            $.where_gonzalez = 2;
          }
          else {
            $.gonzalez.setObjRunToCoord(472.3, 42.8);
          }
        }
      }
      if ($.where_gonzalez == 2) {
        if (!(Char.IsDead($.gonzalez))) {
          if ($.gonzalez.locateAnyMeans2D(472.5, 35.9, 1.0, 1.0, false /* FALSE */)) {
            if ($.player1.isInArea3D(434.7, 51.5, 45.6, 480.4, 12.0, 24.0, false /* FALSE */)) {
              Audio.LoadMissionAudio(1, "COL1_2" as any);
              while (!(Audio.HasMissionAudioLoaded(1))) {
                await asyncWait(0);
                //GOSUB warpy_player

              }
              Text.PrintNow("GEN1_07", 4000, 1); //Keep away from me you cheap bastard!
              Audio.PlayMissionAudio(1);
              while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.gonzalez))) {
                await asyncWait(0);
                //GOSUB warpy_player

              }
              Audio.ClearMissionAudio(1);
              Text.ClearThisPrint("GEN1_07");
            }
            if (!(Char.IsDead($.gonzalez))) {
              $.gonzalez.setObjRunToCoord(464.0, 35.6);
            }
            $.where_gonzalez = 3;
          }
          else {
            $.gonzalez.setObjRunToCoord(472.5, 35.9);
          }
        }
      }
      if ($.where_gonzalez == 3) {
        if (!(Char.IsDead($.gonzalez))) {
          if ($.gonzalez.locateAnyMeans2D(464.0, 35.6, 1.0, 1.0, false /* FALSE */)) {
            $.gonzalez.setObjRunToCoord(463.0, 31.6);
            $.where_gonzalez = 4;
          }
          else {
            $.gonzalez.setObjRunToCoord(464.0, 35.6);
          }
        }
      }
      if ($.where_gonzalez == 4) {
        if (!(Char.IsDead($.gonzalez))) {
          if ($.gonzalez.locateAnyMeans2D(463.0, 31.6, 1.0, 1.0, false /* FALSE */)) {
            $.gonzalez.setObjNoObj();
            $.gonzalez.setStayInSamePlace(true /* TRUE */);
            // SCM GOTO → gonzalez_going_down (not lowered; manual jump required)
            throw new Error("unresolved GOTO gonzalez_going_down"); // fallback: would break linear control flow
          }
        }
      }
    }
    else {
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      Text.PrintNow("GEN1_19", 5000, 1); //The Vice City Police are on to you!
      $.player1.alterWantedLevelNoDrop(2);
      if ($.respray_garage4.hasResprayHappened() || $.respray_garage5.hasResprayHappened()) {
      }
      // SCM GOTO → getting_a_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO getting_a_car"); // fallback: would break linear control flow
    }


    await bodyg_attack_player();  // SCM GOSUB bodyg_attack_player
  }
}

// *****************************START OF CUTSCENE Gonzalez legging it down the street*******************

async function gonzalez_going_down() {
  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  Camera.SetFixedPosition(470.2, 37.1, 34.2, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(460.1, 31.0, 32.0, 2 /* JUMP_CUT */);
  TIMERA = 0;
}



async function getting_gonzalez_out_door() {
  // SCM GOTO → getting_gonzalez_out_door lowered to endless loop
  while (true) {
    await asyncWait(0);


    if (!(Char.IsDead($.gonzalez))) {
      if ($.gonzalez.locateAnyMeans2D(457.8, 31.4, 1.0, 1.0, false /* FALSE */)) {
        $.gonzalez.setObjNoObj();
        // SCM GOTO → downstairs_shot (not lowered; manual jump required)
        throw new Error("unresolved GOTO downstairs_shot"); // fallback: would break linear control flow
      }
      else {
        $.gonzalez.setObjRunToCoord(457.8, 31.4);
      }
    }


    if (TIMERA > 3000) {
      // SCM GOTO → downstairs_shot (not lowered; manual jump required)
      throw new Error("unresolved GOTO downstairs_shot"); // fallback: would break linear control flow
    }


  }
}



async function downstairs_shot() {
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.setCoordinates(474.7, 29.9, 11.07);
    $.gonzalez.setHeading(92.5);
  }


  Camera.DoFade(500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(484.2, 37.0, 12.8, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(479.7, 27.5, 11.5, 2 /* JUMP_CUT */);


  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.setStayInSamePlace(false /* FALSE */);
    $.gonzalez.setObjRunToCoord(482.8, 30.9);
  }


  Audio.LoadMissionAudio(1, "COL1_3" as any);
  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }
  Text.PrintNow("GEN1_08", 4000, 1); //Oh sweet Jesus, I've wasted my life and my looks!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.gonzalez))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("GEN1_08");


  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.turnToFaceCoord(474.7, 29.9, 11.07);
  }


  await asyncWait(1000);


  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.setObjRunToCoord(402.1, -462.2);
  }


  if ($.player1.isInArea3D(434.7, 51.5, 45.6, 480.4, 12.0, 24.0, false /* FALSE */)) {
    $.scplayer.setCoordinates(474.7, 29.9, 11.07);
    $.scplayer.setHeading(92.5);
  }


  $.scplayer.setStayInSamePlace(false /* FALSE */);
  $.scplayer.setObjRunToCoord(482.8, 30.9);


  Audio.LoadMissionAudio(1, "COL1_7" as any);
  while (!(Audio.HasMissionAudioLoaded(1)) && !(Char.IsDead($.gonzalez))) {
    await asyncWait(0);
  }
  Text.PrintNow("GEN1_12", 4000, 1); //Stand still and I'll make it quick!
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.gonzalez))) {
    await asyncWait(0);
  }
  Audio.ClearMissionAudio(1);
  Text.ClearThisPrint("GEN1_12");


  await asyncWait(1500);


  $.bottom_sexpad_doors_open.delete();
  $.bottom_sexpad_doors.delete();
  $.bottom_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed3, 464.663, 30.336, 23.881);
  $.bottom_sexpad_doors.dontRemove();


  $.scplayer.setObjNoObj();
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Hud.SwitchWidescreen(false /* OFF */);
  // *****************************END OF CUTSCENE Gonzalez legging it down the street*******************


  //IF IS_PLAYER_IN_AREA_3D player1 434.7 51.5 45.6 480.4 12.0 24.0 FALSE
  //PRINT_NOW ( GEN1_17 ) 7000 1 //Gonzalez is making his escape!  Follow him through the doors and finish him.
  //ELSE

  Text.PrintNow("GEN1_05", 5000, 1); //Go and kill Gonzalez.
  //ENDIF


  TIMERA = 0;
  TIMERB = 250;
}

async function gonzalez_running_away() {
  // SCM GOTO → gonzalez_running_away lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!(Char.IsDead($.gonzalez))) {
      if (TIMERA > 500) {
        if (!($.gonzalez.isWanderPathClear(402.1, -462.2, 10.1, 1.0))) {
          $.gonzalez.followPath(402.1, -462.2, 10.1, 1.0, 1 /* RUN */);
        }
        else {
          $.gonzalez.setObjRunToCoord(402.1, -462.2);
        }
        if (!(Char.IsDead($.gonzalez_goon1))) {
          if (!($.player1.locateAnyMeansChar3D($.gonzalez_goon1, 5.0, 5.0, 5.0, false /* FALSE */))) {
            const _res191 = $.player1.getCoordinates();
$.player_x = _res191.x;
$.player_y = _res191.y;
$.player_z = _res191.z;
            if (!($.gonzalez_goon1.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
              $.gonzalez_goon1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
            }
            else {
              $.gonzalez_goon1.setObjRunToCoord($.player_x, $.player_y);
            }
          }
          else {
            $.gonzalez_goon1.setObjKillPlayerOnFoot($.player1);
          }
        }
        TIMERA = 0;
      }
      if (TIMERB > 500) {
        if (!(Char.IsDead($.gonzalez_goon2))) {
          if (!($.player1.locateAnyMeansChar3D($.gonzalez_goon2, 5.0, 5.0, 5.0, false /* FALSE */))) {
            const _res192 = $.player1.getCoordinates();
$.player_x = _res192.x;
$.player_y = _res192.y;
$.player_z = _res192.z;
            if (!($.gonzalez_goon2.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
              $.gonzalez_goon2.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
            }
            else {
              $.gonzalez_goon2.setObjRunToCoord($.player_x, $.player_y);
            }
          }
          else {
            $.gonzalez_goon2.setObjKillPlayerOnFoot($.player1);
          }
        }
        TIMERB = 0;
      }
      if ($.move_gonzalez_goons == 0) {
        if (!($.player1.isInArea3D(434.7, 51.5, 45.6, 480.4, 12.0, 24.0, false /* FALSE */))) {
          if (!(Char.IsDead($.gonzalez_goon1))) {
            $.gonzalez_goon1.setCoordinates(477.0, 28.7, 11.0);
            $.gonzalez_goon1.setHeading(272.4);
          }
          if (!(Char.IsDead($.gonzalez_goon2))) {
            $.gonzalez_goon2.setCoordinates(477.0, 32.7, 11.0);
            $.gonzalez_goon2.setHeading(272.4);
          }
          $.move_gonzalez_goons = 1;
        }
      }
      if ($.player1.locateAnyMeansChar2D($.gonzalez, 5.0, 5.0, false /* FALSE */)) {
        if ($.where_gonzalez == 4) {
          $.where_gonzalez = 5;
        }
        if ($.where_gonzalez == 6) {
          $.where_gonzalez = 7;
        }
      }
      if ($.where_gonzalez == 5) {
        Audio.LoadMissionAudio(1, "COL1_4" as any);
        while (!(Audio.HasMissionAudioLoaded(1))) {
          await asyncWait(0);
          //GOSUB warpy_player

        }
        Text.PrintNow("GEN1_09", 4000, 1); //I pay you double! DOUBLE!
        Audio.PlayMissionAudio(1);
        while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.gonzalez))) {
          await asyncWait(0);
          //GOSUB warpy_player

        }
        Audio.ClearMissionAudio(1);
        Text.ClearThisPrint("GEN1_09");
        $.where_gonzalez = 6;
      }
      if (Char.IsDead($.gonzalez)) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("GEN1_19", 5000, 1); //The Vice City Police are on to you!
        $.player1.alterWantedLevelNoDrop(2);
        if ($.respray_garage4.hasResprayHappened() || $.respray_garage5.hasResprayHappened()) {
        }
        // SCM GOTO → getting_a_car (not lowered; manual jump required)
        throw new Error("unresolved GOTO getting_a_car"); // fallback: would break linear control flow
      }
      if ($.where_gonzalez == 7) {
        if ($.player1.locateAnyMeansChar2D($.gonzalez, 5.0, 5.0, false /* FALSE */)) {
          Audio.LoadMissionAudio(1, "COL1_8" as any);
          while (!(Audio.HasMissionAudioLoaded(1))) {
            await asyncWait(0);
            //GOSUB warpy_player

          }
          Text.PrintNow("GEN1_13", 4000, 1); //Quit your squealing, no one cares, fatso!
          Audio.PlayMissionAudio(1);
          while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.gonzalez))) {
            await asyncWait(0);
            //GOSUB warpy_player

          }
          Audio.ClearMissionAudio(1);
          Text.ClearThisPrint("GEN1_13");
        }
        $.where_gonzalez = 8;
      }
      if (!(Char.IsDead($.gonzalez))) {
        if ($.gonzalez.locateAnyMeans3D(398.3, -469.8, 11.9, 15.0, 15.0, 15.0, false /* FALSE */)) {
          // SCM GOTO → gonzalez_at_police_station (not lowered; manual jump required)
          throw new Error("unresolved GOTO gonzalez_at_police_station"); // fallback: would break linear control flow
        }
      }


    }
    else {
      Sound.AddOneOffSound(0.0, 0.0, 0.0, 1 /* SOUND_PART_MISSION_COMPLETE */);
      Text.PrintNow("GEN1_19", 5000, 1); //The Vice City Police are on to you!
      $.player1.alterWantedLevelNoDrop(2);
      if ($.respray_garage4.hasResprayHappened() || $.respray_garage5.hasResprayHappened()) {
      }
      // SCM GOTO → getting_a_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO getting_a_car"); // fallback: would break linear control flow
    }

    //GOSUB warpy_player


  }
}


// *****************************START OF CUTSCENE Gonzalez getting to police station*******************

async function gonzalez_at_police_station() {
  $.player1.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);
  $.flag_player_on_colonel1_mission = 1;
  Streaming.LoadScene(393.5, -476.4, 12.3);


  World.ClearArea(405.5, -473.2, 9.0, 30.0, true /* TRUE */);


  Camera.SetFixedPosition(403.96, -463.42, 15.2, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(396.33, -472.82, 11.80, 2 /* JUMP_CUT */);

  //player near police station

  if ($.player1.locateAnyMeans3D(398.3, -469.8, 11.9, 15.0, 15.0, 15.0, false /* FALSE */)) {
    $.player1.setCoordinates(401.6179, -464.7001, 9.6664);
  }

  //player on rooftop

  if ($.player1.isInArea3D(434.7, 51.5, 45.6, 480.4, 12.0, 24.0, false /* FALSE */)) {
    $.player1.setCoordinates(479.5, 30.11, 10.07);
    $.player1.setHeading(274.5);
  }


  if (!(Char.IsDead($.gonzalez))) {
    $.gonzalez.setObjNoObj();
    $.gonzalez.setCoordinates(405.5, -473.2, 9.0);
    $.gonzalez.setHeading(49.0);
  }


  await asyncWait(1000);


  if (!(Char.IsDead($.gonzalez))) {
    if (!($.gonzalez.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
      $.gonzalez.followPath(393.5, -476.4, 12.3, 1.0, 1 /* RUN */);
    }
    else {
      $.gonzalez.setObjRunToCoord(393.5, -476.4);
    }
  }


  await asyncWait(3000);


  $.flag_player_on_colonel1_mission = 0;
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();
  $.player1.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  $.gonzalez.delete();
  Hud.SwitchWidescreen(false /* OFF */);
  Text.PrintNow("GEN1_18", 5000, 1); //Gonzalez has made it safely to the Police Station!
  // SCM GOTO → mission_failed_general1 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_failed_general1"); // fallback: would break linear control flow
}

// *****************************END OF CUTSCENE Gonzalez getting to police station*******************




///////////////////////////////////wating for player to get a car ///////////////////////////////////

async function getting_a_car() {
  $.gonzalez_blip.remove();
  if (!($.where_gonzalez == 1)) {
    $.where_gonzalez = 0;
  }


  if ($.player1.isInArea3D(434.7, 51.5, 45.6, 480.4, 12.0, 24.0, false /* FALSE */)) {
    $.top_sexpad_doors.delete();
    $.top_sexpad_doors_open = ScriptObject.CreateNoOffset(spad_dr_open1, 454.321, 31.436, 35.198);
    $.top_sexpad_doors_open.dontRemove();
  }


  Text.Print("GEN1_23", 10000, 1); //Go back through the doors to return to the lower level.



  while ($.player1.isInArea3D(434.7, 51.5, 45.6, 480.4, 12.0, 24.0, false /* FALSE */)) {
    await asyncWait(0);
    Sphere.Draw(461.7, 31.5, 29.9, 3.0); //middle
    Sphere.Draw(454.1, 31.3, 33.8, 3.0); //top
    if ($.player1.isInArea3D(463.22, 32.4, 30.2, 462.04, 30.47, 32.5, false /* FALSE */) || $.player1.isInArea3D(455.90, 30.33, 33.83, 454.15, 32.56, 36.57, false /* FALSE */)) {
      Camera.SetFadingColor(0, 0, 1);
      Camera.DoFade(500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.top_sexpad_doors_open.delete();
      $.middle_sexpad_doors_open.delete();
      $.bottom_sexpad_doors_open.delete();
      $.top_sexpad_doors.delete();
      $.middle_sexpad_doors.delete();
      $.bottom_sexpad_doors.delete();
      $.top_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed1, 465.375, 30.336, 33.181);
      $.top_sexpad_doors.dontRemove();
      $.middle_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed2, 465.375, 30.336, 33.181);
      $.middle_sexpad_doors.dontRemove();
      $.bottom_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed3, 464.663, 30.336, 23.881);
      $.bottom_sexpad_doors.dontRemove();
      $.player1.setCoordinates(479.5, 30.11, 10.07);
      $.player1.setHeading(274.5);
      Camera.DoFade(500, 1 /* FADE_IN */);
    }
  }



  Text.ClearThisPrint("GEN1_23");


  Text.Print("GEN1_20", 10000, 1); //Get into a car.
  while (!($.player1.isInAnyCar())) {
    await asyncWait(0);
    //GOSUB warpy_player
    await bodyg_attack_player();  // SCM GOSUB bodyg_attack_player
  }
  Text.ClearThisPrint("GEN1_20");


  Text.Print("GEN1_21", 5000, 1); //Get to the Pay N Spray in Vice Point.
}


/////////////////////////showing player how to use paint n spray//////////////////////////////////////////

async function paint_n_spray_setup() {


  Game.SetFreeResprays(true /* ON */);
  $.gen1_spray_shop_blip = Blip.AddForCoord(327.2, 429.9, 10.3);
}



async function paint_n_spray_loop() {
  // SCM GOTO → paint_n_spray_loop lowered to endless loop
  while (true) {
    await asyncWait(0);


    if ($.respray_garage4.hasResprayHappened() || $.respray_garage5.hasResprayHappened()) {
      $.gen1_spray_shop_blip.remove();
      await asyncWait(4000);
      Text.ClearThisPrint("GEN1_22");
      // SCM GOTO → mission_passed_general1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_general1"); // fallback: would break linear control flow
    }
    else {
      if (!($.player1.isWantedLevelGreater(0))) {
        // SCM GOTO → mission_passed_general1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_passed_general1"); // fallback: would break linear control flow
      }
    }


    if ($.where_gonzalez == 0) {
      if ($.player1.locateAnyMeans3D(327.2, 429.9, 10.3, 2.5, 2.5, 2.5, true /* TRUE */) && $.player1.isInAnyCar()) {
        Text.PrintHelp("GEN1_22"); // Drive your vehicle into the spray shop to lose your ~h~wanted level~w~, ~h~repair ~w~and ~h~respray ~w~your vehicle. Cost - ~h~$100~w~. This time it's free.
        $.where_gonzalez = 1;
      }
    }


    if (!($.player1.isInAnyCar())) {
      $.gen1_spray_shop_blip.remove();
      // SCM GOTO → getting_a_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO getting_a_car"); // fallback: would break linear control flow
    }

    //GOSUB warpy_player

    await bodyg_attack_player();  // SCM GOSUB bodyg_attack_player
  }
}


// Mission failed

async function mission_failed_general1() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// mission passed

async function mission_passed_general1() {


  Text.ClearPrints();
  Text.PrintWithNumberBig("M_PASS", 250, 5000, 1); //"Mission Passed!"
  $.clothes_pickup7 = Pickup.CreateClothes(414.3, 1042.0, 25.4, 8);
  $.clothes7_created = 1;
  // START_NEW_SCRIPT cloth6 
  Audio.PlayMissionPassedTune(1);
  $.player1.clearWantedLevel();
  $.player1.addScore(250);
  Stat.RegisterMissionPassed("COL_1");
  Stat.PlayerMadeProgress(1);
  $.machete_in_stock = 1;
  // START_NEW_SCRIPT general_mission2_loop 
  $.flag_general_mission1_passed = 1;
}




// mission cleanup

async function mission_cleanup_general1() {


  ONMISSION = 0;
  $.player1.setControl(true /* on */);
  $.gonzalez.removeElegantly();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(CLa);
  Streaming.MarkModelAsNoLongerNeeded(chnsaw);
  Game.SetFreeResprays(false /* OFF */);
  Weather.Release();
  $.flag_player_on_colonel1_mission = 0;
  $.top_sexpad_doors_open.delete();
  $.middle_sexpad_doors_open.delete();
  $.bottom_sexpad_doors_open.delete();
  $.top_sexpad_doors.delete();
  $.middle_sexpad_doors.delete();
  $.bottom_sexpad_doors.delete();
  $.top_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed1, 465.375, 30.336, 33.181);
  $.top_sexpad_doors.dontRemove();
  $.middle_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed2, 465.375, 30.336, 33.181);
  $.middle_sexpad_doors.dontRemove();
  $.bottom_sexpad_doors = ScriptObject.CreateNoOffset(spad_dr_closed3, 464.663, 30.336, 23.881);
  $.bottom_sexpad_doors.dontRemove();
  $.pool_cover.delete();
  $.gonzalez_house.remove();
  $.gonzalez_blip.remove();
  $.gen1_spray_shop_blip.remove();
  $.timer_mobile_start = Clock.GetGameTimer();
  Path.SwitchPedRoadsOn(479.9, -1.4, 11.0, 450.3, 59.5, 40.0);
  Mission.Finish();
}


/*
///////////////////////////////////////////////////////////////////////////////////////////
warpy_player://////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
DRAW_SPHERE 475.5 30.3 11.0 3.0  //downstairs
DRAW_SPHERE 461.7 31.5 29.9 3.0	 //middle
DRAW_SPHERE 454.1 31.3 33.8 3.0	 //top

IF IS_PLAYER_IN_AREA_3D player1 463.22 32.4 30.2 462.04 30.47 32.5 FALSE
OR IS_PLAYER_IN_AREA_3D player1 455.90 30.33 33.83 454.15 32.56 36.57 FALSE
SET_FADING_COLOUR 0 0 1
DO_FADE 500 FADE_OUT
WHILE GET_FADING_STATUS
WAIT 0
ENDWHILE

SET_PLAYER_COORDINATES player1 479.5 30.11 10.07
SET_PLAYER_HEADING player1 274.5

DO_FADE 500 FADE_IN
ENDIF

IF IS_PLAYER_IN_AREA_3D player1 476.5 27.3 11.28 474.8 33.0 14.3 FALSE
SET_FADING_COLOUR 0 0 1
DO_FADE 500 FADE_OUT
WHILE GET_FADING_STATUS
WAIT 0
ENDWHILE

SET_PLAYER_COORDINATES player1 457.1 31.6 33.8
SET_PLAYER_HEADING player1 279.5

DO_FADE 500 FADE_IN
ENDIF
///////////////////////////////////////////////////////////////////////////////////////////
RETURN/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
*/
///////////////////////////////////////////////////////////////////////////////////////////

async function bodyg_attack_player() {
  ///////////////////////////////////////////////////////////////////////////////////////////

  if (TIMERA > 500) {
    if (!(Char.IsDead($.gonzalez_goon1))) {
      if (!($.player1.locateAnyMeansChar3D($.gonzalez_goon1, 7.0, 7.0, 7.0, false /* FALSE */))) {
        const _res193 = $.player1.getCoordinates();
$.player_x = _res193.x;
$.player_y = _res193.y;
$.player_z = _res193.z;
        if (!($.gonzalez_goon1.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
          $.gonzalez_goon1.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
        }
        else {
          $.gonzalez_goon1.setObjRunToCoord($.player_x, $.player_y);
        }
      }
      else {
        $.gonzalez_goon1.setObjKillPlayerOnFoot($.player1);
      }
    }
    TIMERA = 0;
  }


  if (TIMERB > 500) {
    if (!(Char.IsDead($.gonzalez_goon2))) {
      if (!($.player1.locateAnyMeansChar3D($.gonzalez_goon2, 7.0, 7.0, 7.0, false /* FALSE */))) {
        const _res194 = $.player1.getCoordinates();
$.player_x = _res194.x;
$.player_y = _res194.y;
$.player_z = _res194.z;
        if (!($.gonzalez_goon2.isWanderPathClear($.player_x, $.player_y, $.player_z, 1.0))) {
          $.gonzalez_goon2.followPath($.player_x, $.player_y, $.player_z, 1.0, 1 /* RUN */);
        }
        else {
          $.gonzalez_goon2.setObjRunToCoord($.player_x, $.player_y);
        }
      }
      else {
        $.gonzalez_goon2.setObjKillPlayerOnFoot($.player1);
      }
    }
    TIMERB = 0;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////

  return;
  ///////////////////////////////////////////////////////////////////////////////////////////











}

export async function general1() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************General 1***************************************
  // *****************************************Knife Gonzalez**********************************
  // *****************************************************************************************
  // *****************************************************************************************

  // SCRIPT_NAME GENERL1
  // Mission start stuff

  await mission_start_general1();  // SCM GOSUB mission_start_general1
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_failed_general1();  // SCM GOSUB mission_failed_general1
  }
  await mission_cleanup_general1();  // SCM GOSUB mission_cleanup_general1
  // MissionBoundary

  // Variables for mission
  //people & places

  // VAR_INT gonzalez
  // VAR_INT gonzalez_goon1
  // VAR_INT gonzalez_goon2
  // VAR_INT bottom_sexpad_doors_open
  // VAR_INT middle_sexpad_doors_open
  // VAR_INT top_sexpad_doors_open
  // VAR_INT pool_cover
  // VAR_INT ped_dead1
  // VAR_INT ped_dead2
  // VAR_INT ped_dead3

  //blips

  // VAR_INT gonzalez_house
  // VAR_INT gonzalez_blip
  // VAR_INT gen1_spray_shop_blip

  //flags

  // VAR_INT where_gonzalez
  // VAR_INT move_gonzalez_goons
  // VAR_INT help_spray
  // VAR_INT help_spray_msg
  // VAR_INT gen1_text
  // VAR_INT del_peds

  // ****************************************Mission Start************************************

}
