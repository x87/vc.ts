// Generated from main/intro.sc

import { $ } from "../utils/vars.mts";

async function mission_start_intro() {


  ONMISSION = 1;
  $.skip_flag = 0;


  await asyncWait(0);





  Camera.DoFade(0, 0 /* FADE_OUT */);


  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  $.player1.setControl(false /* OFF */);
  Streaming.Switch(false /* OFF */);


  World.SwitchRubbish(false /* OFF */);


  Text.LoadMissionText("INTRO");

  // ************************************START**********************************


  $.player1.makeSafeForCutscene();


  Hud.LoadSplash("intro1");


  Camera.SetFadingColor(2, 2, 2);


  await asyncWait(250);


  Streaming.LoadSpecialCharacter(1, "sfrenda");
  Streaming.LoadSpecialCharacter(2, "sfrendb");
  Streaming.LoadSpecialCharacter(3, "CSsonny");
  Streaming.LoadSpecialCharacter(4, "sgoona");
  Streaming.LoadSpecialCharacter(5, "sgoonb");


  Streaming.LoadSpecialModel(CUTOBJ01, "svntray");
  Streaming.LoadSpecialModel(CUTOBJ02, "drink");
  Streaming.LoadSpecialModel(CUTOBJ03, "mbtbemp");
  Streaming.LoadSpecialModel(CUTOBJ04, "schair");


  Streaming.Switch(false /* OFF */);


  World.SwitchRubbish(false /* OFF */);


  Streaming.SetAreaVisible(1 /* VIS_HOTEL */);


  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_mobroom2, true /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_detailsb, true /* TRUE */);


  Streaming.LoadScene(231.4, -1277.7, 19.0);


  World.SetExtraColors(16, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5))) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03)) || !(Streaming.HasModelLoaded(CUTOBJ04))) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Cutscene.Load("int_a");


  Cutscene.SetOffset(231.411, -1277.707, 19.069);
  Camera.SetNearClip(0.1);


  $.cs_sfrenda = CutsceneObject.Create(SPECIAL01);
  $.cs_sfrenda.setAnim("sfrenda");


  $.cs_sfrendb = CutsceneObject.Create(SPECIAL02);
  $.cs_sfrendb.setAnim("sfrendb");


  $.cs_sonny = CutsceneObject.Create(SPECIAL03);
  $.cs_sonny.setAnim("CSsonny");


  $.cs_sgoona = CutsceneObject.Create(SPECIAL04);
  $.cs_sgoona.setAnim("sgoona");


  $.cs_sgoonb = CutsceneObject.Create(SPECIAL05);
  $.cs_sgoonb.setAnim("sgoonb");


  $.cs_svntray = CutsceneObject.Create(CUTOBJ01);
  $.cs_svntray.setAnim("svntray");


  $.cs_drinka = CutsceneObject.Create(CUTOBJ02);
  $.cs_drinka.setAnim("drink01");


  $.cs_drinkb = CutsceneObject.Create(CUTOBJ02);
  $.cs_drinkb.setAnim("drink02");


  $.cs_drinkc = CutsceneObject.Create(CUTOBJ02);
  $.cs_drinkc.setAnim("drink03");


  $.cs_mobtable = CutsceneObject.Create(CUTOBJ03);
  $.cs_mobtable.setAnim("mbtbemp");


  $.cs_schair = CutsceneObject.Create(CUTOBJ04);
  $.cs_schair.setAnim("schair");


  Camera.DoFade(2000, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1246) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_A", 10000, 1); //"Tommy Vercetti


  while ($.cs_time < 2708) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_B", 10000, 1); // Mission brief


  while ($.cs_time < 4796) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_C", 10000, 1); // Mission brief


  while ($.cs_time < 7086) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_D", 10000, 1); // Mission brief


  while ($.cs_time < 8404) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_E", 10000, 1); //"Mission Brief"


  while ($.cs_time < 10756) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_F", 10000, 1); // Mission brief


  while ($.cs_time < 12614) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_G", 10000, 1); // Mission brief


  while ($.cs_time < 14813) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_H", 10000, 1); // Mission brief


  while ($.cs_time < 18741) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_I", 10000, 1); // Mission brief


  while ($.cs_time < 21294) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_J", 10000, 1); // Mission brief


  while ($.cs_time < 24399) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_K", 10000, 1); // Mission brief


  while ($.cs_time < 26496) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_L", 10000, 1); // Mission brief


  while ($.cs_time < 31264) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_M", 10000, 1); // Mission brief


  while ($.cs_time < 32904) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_N", 10000, 1); // Mission brief


  while ($.cs_time < 35200) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_O", 10000, 1); // Mission brief


  while ($.cs_time < 36522) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_P", 10000, 1); // Mission brief


  while ($.cs_time < 41196) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_Q", 10000, 1); // Mission brief


  while ($.cs_time < 45232) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_R", 10000, 1); // Mission brief


  while ($.cs_time < 48992) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_S", 10000, 1); // Mission brief


  while ($.cs_time < 50206) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_T", 10000, 1); // Mission brief


  while ($.cs_time < 52509) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_U", 10000, 1); // Mission brief


  while ($.cs_time < 54340) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_V", 10000, 1); // Mission brief


  while ($.cs_time < 56291) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_W", 10000, 1); // Mission brief


  while ($.cs_time < 57900) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_X", 10000, 1); // Mission brief


  while ($.cs_time < 61168) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_Y", 10000, 1); // Mission brief


  while ($.cs_time < 62518) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_Z", 10000, 1); // Mission brief


  while ($.cs_time < 64169) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_A1", 10000, 1); // Mission brief


  while ($.cs_time < 65706) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT1_A2", 10000, 1); // Mission brief


  while ($.cs_time < 66784) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.ClearPrints();


  while ($.cs_time < 68240) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.ClearPrints();


  Camera.SetFadingColor(1, 1, 1);


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Cutscene.Clear();
  World.ClearExtraColors(false /* FALSE */);


  World.SwitchRubbish(true /* ON */);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);


  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_mobroom2, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_detailsb, false /* FALSE */);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  await asyncWait(0);

  // ************************************************THE AIRPORT******************************


  Cutscene.DisableShadows();


  Hud.LoadSplash("intro2");


  Camera.SetFadingColor(2, 2, 2);


  await asyncWait(250);


  Weather.ForceNow(4 /* WEATHER_EXTRA_SUNNY */);
  Clock.SetTimeOfDay(12, 0);


  Streaming.LoadSpecialCharacter(1, "CSken");
  Streaming.LoadSpecialCharacter(2, "CSplay");
  Streaming.LoadSpecialCharacter(3, "sgoona");
  Streaming.LoadSpecialCharacter(4, "sgoonb");
  Streaming.LoadSpecialModel(CUTOBJ01, "airplan");
  Streaming.LoadSpecialModel(CUTOBJ02, "merced");
  Streaming.LoadSpecialModel(CUTOBJ03, "brfcase");


  Streaming.RequestModel(ap_radar1_01);
  Streaming.RequestModel(veg_palm04);


  Streaming.LoadScene(-1592.0, -545.0, 15.0);
  Streaming.RequestCollision(-1654.0, -1388.0);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02))) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  while (!(Streaming.HasModelLoaded(CUTOBJ03)) || !(Streaming.HasModelLoaded(ap_radar1_01)) || !(Streaming.HasModelLoaded(veg_palm04))) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  $.player1.setCoordinates(-1654.0, -1388.0, -100.0);


  Cutscene.LoadUncompressedAnim("airplan");


  Cutscene.Load("int_m");


  Cutscene.SetOffset(-1601.536, -548.298, 13.679); // 13.673
  //SET_NEAR_CLIP 0.1


  $.cs_ken = CutsceneObject.Create(SPECIAL01);
  $.cs_ken.setAnim("csken");


  $.cs_player = CutsceneObject.Create(SPECIAL02);
  $.cs_player.setAnim("csplay");


  $.cs_sgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_sgoona.setAnim("sgoona");


  $.cs_sgoonb = CutsceneObject.Create(SPECIAL04);
  $.cs_sgoonb.setAnim("sgoonb");


  $.cs_plane = CutsceneObject.Create(CUTOBJ01);
  $.cs_plane.setAnim("airplan");


  $.cs_introcar = CutsceneObject.Create(CUTOBJ02);
  $.cs_introcar.setAnim("merced");
  $.cs_introcar.setDrawLast(true /* TRUE */);


  $.cs_case1 = CutsceneObject.Create(CUTOBJ03);
  $.cs_case1.setAnim("brfcase");


  $.cs_ken.attachToComponent($.cs_introcar, "mercbod");
  $.cs_player.attachToComponent($.cs_introcar, "mercbod");
  $.cs_sgoona.attachToComponent($.cs_introcar, "mercbod");
  $.cs_sgoonb.attachToComponent($.cs_introcar, "mercbod");

  //ATTACH_CUTSCENE_OBJECT_TO_COMPONENT ObjectID ParentObjectID Mercbod


  Camera.DoFade(3000, 1 /* FADE_IN */);


  Streaming.Switch(true /* ON */);


  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4860) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_A", 10000, 1); //"Tommy Vercetti


  while ($.cs_time < 6400) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Camera.SetNearClip(0.15); // 0.1 Aaron test


  while ($.cs_time < 9600) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_B", 10000, 1); // Mission brief


  while ($.cs_time < 12342) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_C", 10000, 1); // Mission brief


  while ($.cs_time < 15840) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_D", 10000, 1); // Mission brief


  while ($.cs_time < 17556) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_E", 10000, 1); //"Mission Brief"


  while ($.cs_time < 20640) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_F", 10000, 1); // Mission brief


  while ($.cs_time < 23018) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_G", 10000, 1); // Mission brief


  while ($.cs_time < 25863) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_H", 10000, 1); // Mission brief


  while ($.cs_time < 26000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  while ($.cs_time < 27624) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_I", 10000, 1); // Mission brief


  while ($.cs_time < 29348) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT2_J", 10000, 1); // Mission brief


  while ($.cs_time < 30300) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.ClearPrints();

  //PRINT_NOW (INT2_K ) 10000 1 // Mission brief

  /*
  WHILE cs_time <  //32004
  WAIT 0
  GET_CUTSCENE_TIME cs_time

  GOSUB skip_intro_button

  IF skip_flag = 2
  GOTO skip_intro_here
  ENDIF

  ENDWHILE

  */


  Camera.SetFadingColor(1, 1, 1);


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    if ($.cs_time >= 33300) {
      Text.ClearPrints();
    }
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.ClearPrints();


  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);


  Streaming.MarkModelAsNoLongerNeeded(ap_radar1_01);
  Streaming.MarkModelAsNoLongerNeeded(veg_palm04);


  await asyncWait(0);

  // **********************************************THE DEAL***********************************


  Hud.LoadSplash("intro3");


  Camera.SetFadingColor(2, 2, 2);


  await asyncWait(250);


  Weather.ForceNow(0 /* WEATHER_SUNNY */);
  Clock.SetTimeOfDay(20, 0);


  Streaming.LoadSpecialCharacter(1, "CSken");
  Streaming.LoadSpecialCharacter(2, "CSdeal");
  Streaming.LoadSpecialCharacter(3, "sgoona");
  Streaming.LoadSpecialCharacter(4, "sgoonb");
  Streaming.LoadSpecialCharacter(5, "CSassa");
  Streaming.LoadSpecialCharacter(6, "CSassb");
  Streaming.LoadSpecialCharacter(7, "CSassc");
  Streaming.LoadSpecialCharacter(8, "CSplay");


  Streaming.LoadSpecialModel(CUTOBJ01, "cs_chop");
  Streaming.LoadSpecialModel(CUTOBJ02, "brfcase");
  Streaming.LoadSpecialModel(CUTOBJ03, "delcase");
  Streaming.LoadSpecialModel(CUTOBJ04, "merced");


  Streaming.RequestModel(doc_craneeggs04);
  Streaming.RequestModel(doc_crane_cab04);
  Streaming.RequestModel(dockfuel07);


  Streaming.RequestCollision(-692.0, -1559.0);
  $.player1.setCoordinates(-683.145, -1581.747, 11.530);


  Streaming.LoadScene(-692.0, -1559.0, 12.0);


  World.SetExtraColors(14, false /* FALSE */);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5)) || !(Streaming.HasSpecialCharacterLoaded(6))) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  while (!(Streaming.HasSpecialCharacterLoaded(7)) || !(Streaming.HasSpecialCharacterLoaded(8)) || !(Streaming.HasModelLoaded(CUTOBJ01)) || !(Streaming.HasModelLoaded(CUTOBJ02)) || !(Streaming.HasModelLoaded(CUTOBJ03)) || !(Streaming.HasModelLoaded(CUTOBJ04))) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  while (!(Streaming.HasModelLoaded(doc_craneeggs04)) || !(Streaming.HasModelLoaded(doc_crane_cab04)) || !(Streaming.HasModelLoaded(dockfuel07))) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Cutscene.LoadUncompressedAnim("cs_chop");


  Cutscene.Load("int_d");
  Cutscene.SetOffset(-690.0, -1568.0, 11.44); // 11.4

  //SET_NEAR_CLIP 0.2 // Les asked for this


  $.cs_player = CutsceneObject.Create(SPECIAL08);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL01);
  $.cs_ken.setAnim("CSken");


  $.cs_dealer = CutsceneObject.Create(SPECIAL02);
  $.cs_dealer.setAnim("CSdeal");


  $.cs_sgoona = CutsceneObject.Create(SPECIAL03);
  $.cs_sgoona.setAnim("sgoona");


  $.cs_sgoonb = CutsceneObject.Create(SPECIAL04);
  $.cs_sgoonb.setAnim("sgoonb");


  $.cs_assas1 = CutsceneObject.Create(SPECIAL05);
  $.cs_assas1.setAnim("CSassa");


  $.cs_assas2 = CutsceneObject.Create(SPECIAL06);
  $.cs_assas2.setAnim("CSassb");


  $.cs_assas3 = CutsceneObject.Create(SPECIAL07);
  $.cs_assas3.setAnim("CSassc");


  $.cs_chopper = CutsceneObject.Create(CUTOBJ01);
  $.cs_chopper.setAnim("cs_chop");
  $.cs_chopper.setDrawLast(true /* TRUE */);


  $.cs_case1 = CutsceneObject.Create(CUTOBJ02);
  $.cs_case1.setAnim("brfcase");


  $.cs_case2 = CutsceneObject.Create(CUTOBJ03);
  $.cs_case2.setAnim("delcase");


  $.cs_introcar = CutsceneObject.Create(CUTOBJ04);
  $.cs_introcar.setAnim("merced");
  $.cs_introcar.setDrawLast(true /* TRUE */);


  $.cs_ken.attachToComponent($.cs_introcar, "Mercbod");


  Camera.DoFade(2000, 1 /* FADE_IN */);


  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 6500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 8743) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  Text.PrintNow("INT3_A", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 10784) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  Text.PrintNow("INT3_B", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 12040) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  Text.PrintNow("INT3_C", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 14488) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  Text.PrintNow("INT3_D", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 17072) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  Text.ClearThisPrint("INT3_D");


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 20384) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }

  //PRINT_NOW ( INT3_E ) 10000 1 // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 23200) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }

  //PRINT_NOW ( INT3_F ) 10000 1 // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 35596) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  Text.PrintNow("INT3_G", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 36430) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  Text.PrintNow("INT3_H", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 39824) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  Text.PrintNow("INT3_M", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 40896) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  Text.PrintNow("INT3_I", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 42518) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  Text.PrintNow("INT3_J", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 46872) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  Text.PrintNow("INT3_K", 10000, 1); // Mission brief


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51233) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51366) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
    Fx.AddBigGunFlash(-696.522, -1577.432, 12.826, -696.492, -1577.354, 12.815);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51633) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51733) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-696.442, -1577.358, 12.765, -696.402, -1577.286, 12.749);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51766) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51900) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 51966) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-696.448, -1577.274, 12.666, -696.405, -1577.206, 12.643);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 52033) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
    Fx.AddBigGunFlash(-696.354, -1578.122, 13.060, -695.836, -1577.301, 13.020);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  while ($.cs_time < 52166) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 4);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 6);


  while ($.cs_time < 52200) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 6);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-696.437, -1577.235, 12.658, -696.391, -1577.170, 12.635);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 6);


  while ($.cs_time < 52256) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  Text.PrintNow("INT3_N", 2000, 1); //Oh shit!


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52300) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
    Fx.AddBigGunFlash(-696.439, -1577.222, 12.653, -696.391, -1577.158, 12.630);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52566) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52666) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-696.465, -1577.189, 12.648, -696.419, -1577.213, 12.625);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52700) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52833) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52900) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-696.576, -1577.111, 12.686, -696.538, -1577.040, 12.667);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 52966) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 53100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 53133) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-696.692, -1577.050, 12.703, -696.665, -1576.973, 12.686);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 53233) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 53366) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
    Fx.AddBigGunFlash(-696.354, -1578.122, 13.060, -695.836, -1577.301, 13.020);
    Fx.AddBigGunFlash(-696.781, -1576.899, 12.688, -696.676, -1576.918, 12.670);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 53500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  if (!(Cutscene.WasSkipped())) {
    Fx.AddBigGunFlash(-684.222, -1577.189, 12.384, -695.416, -1576.626, 12.415);
  }


  Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  while ($.cs_time < 57000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Cutscene.CreateDustEffectForHeli($.cs_chopper, 10.0, 8);


  }


  while ($.cs_time < 58736) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.PrintNow("INT3_L", 10000, 1); // Mission brief


  while ($.cs_time < 60800) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Text.ClearPrints();


  while ($.cs_time < 63212) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  Camera.SetFadingColor(1, 1, 1);


  Camera.DoFade(2000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    await skip_intro_button();  // SCM GOSUB skip_intro_button
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }


  }


  World.ClearExtraColors(false /* FALSE */);


  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Streaming.UnloadSpecialCharacter(6);
  Streaming.UnloadSpecialCharacter(7);
  Streaming.UnloadSpecialCharacter(8);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);


  Streaming.MarkModelAsNoLongerNeeded(doc_craneeggs04);
  Streaming.MarkModelAsNoLongerNeeded(doc_crane_cab04);
  Streaming.MarkModelAsNoLongerNeeded(dockfuel07);


  await asyncWait(0);
}


// Player has pressed to skip entire intro


async function skip_intro_here() {


  Hud.LoadSplash("intro4");


  Camera.SetFadingColor(2, 2, 2);


  if ($.skip_flag == 2) {
    Camera.DoFade(1000, 0 /* FADE_OUT */);
    Text.ClearPrints();
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);


    }


  }


  Weather.Release();
  Clock.SetTimeOfDay(21, 0);


  Cutscene.Clear();


  World.ClearExtraColors(false /* FALSE */);


  Streaming.SetAreaVisible(0 /* VIS_MAIN_MAP */);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Streaming.UnloadSpecialCharacter(6);
  Streaming.UnloadSpecialCharacter(7);
  Streaming.UnloadSpecialCharacter(8);
  Streaming.UnloadSpecialCharacter(9);
  Streaming.UnloadSpecialCharacter(10);
  Streaming.UnloadSpecialCharacter(11);
  Streaming.UnloadSpecialCharacter(12);
  Streaming.UnloadSpecialCharacter(13);
  Streaming.UnloadSpecialCharacter(14);
  Streaming.UnloadSpecialCharacter(15);
  Streaming.UnloadSpecialCharacter(16);
  Streaming.UnloadSpecialCharacter(17);
  Streaming.UnloadSpecialCharacter(18);
  Streaming.UnloadSpecialCharacter(19);
  Streaming.UnloadSpecialCharacter(20);
  Streaming.UnloadSpecialCharacter(21);


  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ02);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ03);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ04);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ05);


  Streaming.MarkModelAsNoLongerNeeded(doc_craneeggs04);
  Streaming.MarkModelAsNoLongerNeeded(doc_crane_cab04);
  Streaming.MarkModelAsNoLongerNeeded(dockfuel07);


  Streaming.MarkModelAsNoLongerNeeded(ap_radar1_01);
  Streaming.MarkModelAsNoLongerNeeded(veg_palm04);


  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_mobroom2, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(231.4, -1277.7, 19.0, 50.0, mob_detailsb, false /* FALSE */);


  await asyncWait(0);


  Weather.Release();
  Clock.SetTimeOfDay(21, 0);


  // LVAR_INT intro_car
  // LVAR_INT intro_bike
  // LVAR_INT lawyer_intro
  // LVAR_INT play_audio_intro
  // LVAR_INT car_in_position_intro
  // LVAR_INT lawyer_running_intro
  // LVAR_INT flag_moved_camera_intro
  play_audio_intro = 0;
  car_in_position_intro = 0;
  lawyer_running_intro = 0;
  flag_moved_camera_intro = 0;


  Hud.SwitchWidescreen(true /* ON */);
  $.player1.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);


  Audio.LoadMissionAudio(1, "intro1" as any);
  Audio.LoadMissionAudio(2, "intro2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);


  }


  Streaming.RequestModel(admiral);
  Streaming.RequestModel(faggio);
  Streaming.LoadSpecialCharacter(10, "IGKEN");
  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(admiral)) || !(Streaming.HasModelLoaded(faggio)) || !(Streaming.HasSpecialCharacterLoaded(10))) {
    await asyncWait(0);


  }


  World.ClearArea(114.2, -823.3, 9.7, 1.0, false /* FALSE */);
  Streaming.RequestCollision(86.428, -852.238);
  Streaming.LoadScene(114.2, -823.3, 9.7); //New lawyer start
  World.ClearArea(86.428, -852.238, 9.325, 50.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  World.SetCarDensityMultiplier(0.0);
  $.player1.setCoordinates(86.428, -852.238, 9.325);
  World.ClearArea(86.485, -851.933, 10.0, 10.0, true /* TRUE */);
  intro_car = Car.Create(admiral, 83.540, -851.669, 10.0);
  intro_car.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
  intro_car.setHeading(330.0);
  $.scplayer.setObjEnterCarAsPassenger(intro_car);
  lawyer_intro = Char.CreateInsideCar(intro_car, 4 /* PEDTYPE_CIVMALE */, SPECIAL10);
  lawyer_intro.clearThreatSearch();
  lawyer_intro.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
  intro_car.setIdle();
  intro_car.changeColor(84, 84);
  intro_bike = Car.Create(faggio, 127.4, -818.5, 9.5);
  intro_bike.setHeading(250.6);
  Audio.SetRadioChannel(9, -1);
  Streaming.MarkModelAsNoLongerNeeded(admiral);
  Streaming.MarkModelAsNoLongerNeeded(faggio);


  while (!($.scplayer.isInAnyCar())) {
    await asyncWait(0);
    if (Car.IsDead(intro_car)) {
    }


  }


  Camera.DoFade(1000, 1 /* FADE_IN */);


  World.ClearArea(116.583, -796.821, 11.423, 1.0, true /* TRUE */);
  Camera.SetFixedPosition(116.583, -796.821, 11.423, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(116.573, -797.821, 11.414, 2 /* JUMP_CUT */);


  if (!(Car.IsDead(intro_car))) {
    intro_car.setForwardSpeed(20.0);
    intro_car.gotoCoordinates(103.1, -832.3, 9.317); //-833.3
    intro_car.setCruiseSpeed(30.0);
    intro_car.setDrivingStyle(2);
    car_in_position_intro = 1;
  }


  TIMERA = 0;
  TIMERB = 0;


  while (!(play_audio_intro == 8) || !(car_in_position_intro == 4)) {
    await asyncWait(0);
    if (Car.IsDead(intro_car)) {
    }
    else {
      if (car_in_position_intro == 1) {
        if (TIMERB >= 30000) {
          if (!(Car.IsDead(intro_car))) {
            if (!(intro_car.locate3D(132.600, -818.278, 9.446, 3.0, 3.0, 4.0, false /* FALSE */))) {
              car_in_position_intro = 3;
              intro_car.setCoordinates(132.600, -818.278, 9.446);
              intro_car.setHeading(206.0214);
            }


          }


        }


      }
      if (car_in_position_intro == 1) {
        if (intro_car.locate3D(103.1, -832.3, 9.317, 4.0, 4.0, 4.0, false /* FALSE */)) {
          intro_car.gotoCoordinates(113.371, -819.078, 9.317);
          car_in_position_intro = 2;
        }


      }
      if (car_in_position_intro == 2) {
        if (intro_car.locate3D(113.371, -819.078, 9.317, 4.0, 4.0, 4.0, false /* FALSE */)) {
          intro_car.gotoCoordinates(132.600, -818.278, 9.446);
          car_in_position_intro = 3;
        }


      }
      if (car_in_position_intro == 3) {
        if (intro_car.locate3D(132.600, -818.278, 9.446, 3.0, 3.0, 4.0, false /* FALSE */)) {
          if (!(Car.IsDead(intro_car))) {
            //SET_CAR_TEMP_ACTION intro_car TEMPACT_HANDBRAKESTRAIGHT 30
            intro_car.setCruiseSpeed(0.0);
            intro_car.setIdle();
            car_in_position_intro = 4;
          }


        }


      }


    }
    if (Char.IsDead(lawyer_intro)) {
    }
    if (play_audio_intro == 0) {
      Audio.PlayMissionAudio(1);
      Text.PrintNow("INTRO1", 10000, 1); //"
      TIMERA = 0;
      TIMERB = 0;
      play_audio_intro = 1;
    }
    if (flag_moved_camera_intro == 0) {
      if (TIMERB >= 2000) {
        World.ClearArea(104.880, -808.433, 12.108, 1.0, false /* FALSE */);
        Camera.SetFixedPosition(104.880, -808.433, 12.108, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(105.771, -808.888, 12.091, 2 /* JUMP_CUT */);
        TIMERB = 0;
        flag_moved_camera_intro = 1;
      }


    }
    if (play_audio_intro == 1) {
      if (Audio.HasMissionAudioFinished(1)) {
        Text.ClearThisPrint("INTRO1");
        if (TIMERA >= 1000) {
          Audio.PlayMissionAudio(2);
          Text.PrintNow("INTRO2", 10000, 1); //""
          play_audio_intro = 2;
        }


      }


    }
    if (play_audio_intro == 2) {
      Audio.LoadMissionAudio(1, "intro3" as any);
      play_audio_intro = 3;
    }
    if (play_audio_intro == 3) {
      if (Audio.HasMissionAudioFinished(2)) {
        Text.ClearThisPrint("INTRO2");
        play_audio_intro = 4;
      }


    }
    if (play_audio_intro == 4) {
      if (Audio.HasMissionAudioLoaded(1)) {
        Audio.LoadMissionAudio(2, "intro4" as any);
        TIMERA = 0;
        play_audio_intro = 5;
      }


    }
    if (play_audio_intro == 5) {
      if (TIMERA >= 900) {
        Audio.PlayMissionAudio(1);
        Text.PrintNow("INTRO3", 10000, 1); //" "
        play_audio_intro = 6;
      }


    }
    if (play_audio_intro == 6) {
      if (Audio.HasMissionAudioFinished(1)) {
        Text.ClearThisPrint("INTRO3");
        play_audio_intro = 7;
      }


    }
    if (play_audio_intro == 7) {
      if (Audio.HasMissionAudioLoaded(2)) {
        TIMERA = 0;
        play_audio_intro = 8;
      }


    }


  }


  while (TIMERA < 300) {
    await asyncWait(0);
    if (Car.IsDead(intro_car)) {
    }
    if (Char.IsDead(lawyer_intro)) {
    }


  }


  Audio.PlayMissionAudio(2);
  Text.PrintNow("INTRO4", 10000, 1); //" "


  await asyncWait(400);


  if (Car.IsDead(intro_car)) {
  }


  if (Char.IsDead(lawyer_intro)) {
  }


  while (!(Audio.HasMissionAudioFinished(2))) {
    await asyncWait(0);
    if (Car.IsDead(intro_car)) {
    }
    if (Char.IsDead(lawyer_intro)) {
    }


  }


  Text.ClearThisPrint("INTRO4");


  if (!(Car.IsDead(intro_car))) {
    if (!(Char.IsDead(lawyer_intro))) {
      lawyer_intro.setObjLeaveCar(intro_car);
    }


  }


  if (!(Char.IsDead(lawyer_intro))) {
    while (lawyer_intro.isInAnyCar()) {
      await asyncWait(0);
      if (Car.IsDead(intro_car)) {
      }
      if (Char.IsDead(lawyer_intro)) {
      }


    }


  }


  if (!(Char.IsDead(lawyer_intro))) {
    lawyer_intro.setObjGotoCoordOnFoot(125.809, -815.263);
    lawyer_intro.setRunning(true /* TRUE */);
  }


  TIMERA = 0;


  while (TIMERA < 1500) {
    await asyncWait(0);
    if (!(Char.IsDead(lawyer_intro))) {
    }


  }


  World.ClearArea(113.655, -815.814, 11.029, 1.0, false /* FALSE */);
  Camera.SetFixedPosition(113.655, -815.814, 11.029, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(114.307, -816.570, 11.083, 2 /* JUMP_CUT */);


  if (!(Char.IsDead(lawyer_intro))) {
    lawyer_intro.setIdle();
    lawyer_intro.setObjNoObj();
    lawyer_intro.setCoordinates(125.809, -815.263, 9.444);
  }


  if (!(Char.IsDead(lawyer_intro))) {
    lawyer_intro.setObjGotoCoordOnFoot(116.269, -825.438);
    lawyer_intro.setRunning(true /* TRUE */);
    lawyer_running_intro = 1;
  }


  if (!($.scplayer.isInAnyCar())) {
    $.scplayer.setCoordinates(136.457, -817.37, 9.44);
    $.scplayer.setHeading(225.495);
  }
  else {
    $.scplayer.warpFromCarToCoord(136.457, -817.37, 9.44);
  }


  if (!($.scplayer.isInAnyCar())) {
    $.scplayer.setHeading(225.495);
  }


  TIMERB = 0;


  while (TIMERB < 1350) {
    await asyncWait(0);
    if (!(Char.IsDead(lawyer_intro))) {
    }


  }


  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  Text.ClearThisPrint("INTRO4");


  Audio.SetRadioChannel(1 /* FLASH_FM */, -1);


  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  World.SwitchRubbish(true /* ON */);
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  intro_car.markAsNoLongerNeeded();
  intro_bike.markAsNoLongerNeeded();
  $.gen_car83.switch(101);


  lawyer_intro.delete();


  $.flag_intro_passed = 1;
  ONMISSION = 0;


  if (!(Car.IsDead(intro_car))) {
    intro_car.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
  }


  Streaming.UnloadSpecialCharacter(10);
  Streaming.MarkModelAsNoLongerNeeded(admiral);
  Streaming.MarkModelAsNoLongerNeeded(faggio);


  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);


  Hud.LoadSplash("splash1");


  Camera.SetFadingColor(0, 0, 0);


  Mission.Finish();
  // MissionBoundary
}


// Skip intro button check


async function skip_intro_button() {
  if ($.skip_flag == 0) {
    if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) && !(Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */))) {
      $.skip_flag = 1;
    }
  }


  if ($.skip_flag == 1) {
    if (Cutscene.WasSkipped()) {
      $.skip_flag = 2;
    }
  }
}

export async function intro() {
  // MissionBoundary
  // *****************************************************************************************
  // ************************************   The Intro    *************************************
  // *****************************************************************************************


  // SCRIPT_NAME intro

  // ****************************************Mission Start************************************


}
