// Generated from main/finale.sc

import { $ } from "../vars.mts";

// *****************************************************************************************
// ********************************* Finale mission 2  *************************************
// ************************************ Mob Attack *****************************************
// *****************************************************************************************
// *** The Mob decide to pay the player1 a personal visit.  The player1 has had enough of***
// *** the Mob's bullshit so decides to insult them by paying them off with the first 	 ***
// *** test run of the obviously counterfeit money.  This affront triggers the final 	 ***
// *** showdown! Before the player manages to kill the Mob at the meeting they call in   ***
// *** the backup.  The player1 will have to survive and suppress the Mob's attack, to 	 ***
// *** become the unchallenged ruler of the Miami crime scene.                           ***
// *****************************************************************************************

async function body() {


  ONMISSION = 1;


  Stat.RegisterMissionGiven();
  // SCRIPT_NAME FIN_1


  await asyncWait(0);


  // LVAR_FLOAT mafia_1_stuck_x mafia_1_stuck_y mafia_1_stuck_z
  // LVAR_FLOAT mafia_2_stuck_x mafia_2_stuck_y mafia_2_stuck_z
  // LVAR_FLOAT mafia_3_stuck_x mafia_3_stuck_y mafia_3_stuck_z
  // LVAR_FLOAT mafia_4_stuck_x mafia_4_stuck_y mafia_4_stuck_z
  // LVAR_FLOAT mafia_5_stuck_x mafia_5_stuck_y mafia_5_stuck_z


  $.mansion_closed.delete(); //DEBUG!!!!!!!!!!


  Text.LoadMissionText("FINALE");
  Shortcut.SetDropoffPointForMission(-288.2, -487.5, 9.8, 275.0);


  $.the_safe_x = -373.2288;
  $.the_safe_y = -597.0028;
  $.the_safe_z = 24.7818;


  $.vance_timer = 0;
  $.vance_flag = -1;
  $.sonni_timer = 0;
  $.sonni_flag = 0;


  $.random_mafia = -1;
  $.random_mafia_flag = 0;
  $.random_mafia_timer = 0;
  $.random_mafia_cash = 0;
  $.random_mafia_counter = 0;


  $.random_mafia_x = 0.0;
  $.random_mafia_y = 0.0;
  $.random_mafia_z = 0.0;


  $.mafia_1 = -1;
  $.mafia_1_timer = 0;
  $.mafia_1_cash = 0;
  $.mafia_1_flag = 0;


  $.mafia_2 = -1;
  $.mafia_2_timer = 0;
  $.mafia_2_cash = 0;
  $.mafia_2_flag = 0;


  $.mafia_3 = -1;
  $.mafia_3_timer = 0;
  $.mafia_3_cash = 0;
  $.mafia_3_flag = 0;


  $.mafia_4 = -1;
  $.mafia_4_timer = 0;
  $.mafia_4_cash = 0;
  $.mafia_4_flag = 0;


  $.mafia_5 = -1;
  $.mafia_5_timer = 0;
  $.mafia_5_cash = 0;
  $.mafia_5_flag = 0;


  $.mafia_6 = -1;
  $.mafia_6_timer = 0;
  $.mafia_6_cash = 0;
  $.mafia_6_flag = 0;


  $.mafia_7 = -1;
  $.mafia_7_timer = 0;
  $.mafia_7_cash = 0;
  $.mafia_7_flag = 0;


  $.mafia_8 = -1;
  $.mafia_8_timer = 0;
  $.mafia_8_cash = 0;
  $.mafia_8_flag = 0;


  $.mafia_9 = -1;
  $.mafia_9_timer = 0;
  $.mafia_9_cash = 0;
  $.mafia_9_flag = 0;


  $.player_score = 0;
  $.health_message = 0;
  $.at_safe_message = 0;
  $.health_blip_added = 0;
  $.failed_finale_flag = 0;


  $.stealing_from_safe_a = 0;
  $.stealing_from_safe_b = 0;


  $.audio_bit_flag = 0;
  $.player_at_mansion = 0;


  $.boss_guard1_flag = 0;
  $.boss_guard2_flag = 0;
  $.boss_guard3_flag = 0;
  $.boss_guard4_flag = 0;
  $.boss_guard5_flag = 0;
  $.boss_guard6_flag = 0;
  $.boss_guard7_flag = 0;
  $.boss_guard8_flag = 0;
  $.boss_guard9_flag = 0;
  $.boss_guard10_flag = 0;
  $.boss_guard11_flag = 0;


  $.mafia_1_stuck_timer = 0;
  $.mafia_2_stuck_timer = 0;
  $.mafia_3_stuck_timer = 0;
  $.mafia_4_stuck_timer = 0;
  $.mafia_5_stuck_timer = 0;
  $.mafia_6_stuck_timer = 0;
  $.mafia_7_stuck_timer = 0;
  $.mafia_8_stuck_timer = 0;
  $.mafia_9_stuck_timer = 0;


  mafia_1_stuck_x = 0.0;
  mafia_1_stuck_y = 0.0;
  mafia_1_stuck_z = 0.0;


  mafia_2_stuck_x = 0.0;
  mafia_2_stuck_y = 0.0;
  mafia_2_stuck_z = 0.0;


  mafia_3_stuck_x = 0.0;
  mafia_3_stuck_y = 0.0;
  mafia_3_stuck_z = 0.0;


  mafia_4_stuck_x = 0.0;
  mafia_4_stuck_y = 0.0;
  mafia_4_stuck_z = 0.0;


  mafia_5_stuck_x = 0.0;
  mafia_5_stuck_y = 0.0;
  mafia_5_stuck_z = 0.0;


  $.mafia_6_stuck_x = 0.0;
  $.mafia_6_stuck_y = 0.0;
  $.mafia_6_stuck_z = 0.0;


  $.mafia_7_stuck_x = 0.0;
  $.mafia_7_stuck_y = 0.0;
  $.mafia_7_stuck_z = 0.0;


  $.mafia_8_stuck_x = 0.0;
  $.mafia_8_stuck_y = 0.0;
  $.mafia_8_stuck_z = 0.0;


  $.mafia_9_stuck_x = 0.0;
  $.mafia_9_stuck_y = 0.0;
  $.mafia_9_stuck_z = 0.0;


  $.avoid_a_nasty_crash_flag = 0;


  $.player_in_scripted_cutscene = 0;
  $.credits_shot_counter = 0;
  $.credits_shot_timer = 0;
  $.hold_off_shooting_timer = 0;
  $.someone_taxing_safe = 0;
  $.crouch_timer = 0;
  //flag_faded_out = 0


  $.stored_player_score = $.player1.storeScore();


  Streaming.SetAreaVisible(VIS_MANSION);
  $.flag_player_in_mansion = 1;
  Path.SwitchPedRoadsOff(-522.414, -662.451, -9.357, -222.414, -502.451, 90.643); // ENTIRE MANSION AREA
  World.SwitchRubbish(false /* OFF */);
  World.SetExtraColors(7, false /* FALSE */);
  World.SetPedDensityMultiplier(0.0);
  World.ClearArea(-354.419, -569.529, 30.0, 200.0, false);

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "csken");
  Streaming.LoadSpecialCharacter(3, "csbuddy");


  Streaming.LoadScene(-378.4660, -596.1799, 24.7818);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);
  }


  Cutscene.LoadUncompressedAnim("csplay");
  Cutscene.LoadUncompressedAnim("csken");
  Cutscene.LoadUncompressedAnim("csbuddy");
  Cutscene.Load("FIN");


  Camera.SetNearClip(0.1);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("csken");


  $.cs_buddy = CutsceneObject.Create(SPECIAL03);
  $.cs_buddy.setAnim("csbuddy");


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 1085) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_01", 10000, 1); //What's going on?


  while ($.cs_time < 1924) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_02", 10000, 1); //Tommy! Oh  Good, listen. Uh, listen,


  while ($.cs_time < 5027) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_03", 10000, 1); //I like fish. I love fish.


  while ($.cs_time < 7525) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_04", 10000, 1); //I love them as a pet in the bowls, or as food on the plate,


  while ($.cs_time < 10739) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_05", 10000, 1); //but as much as I love em, I don't want to sleep with them.


  while ($.cs_time < 13469) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_06", 10000, 1); //Okay, but right now your Italian brothers are coming from up there to fit me with these cement shoes, and I...


  while ($.cs_time < 19005) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_07", 10000, 1); //Shut up Ken. Sit down.


  while ($.cs_time < 24137) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_08", 10000, 1); //Lance, what the hell's going on?


  while ($.cs_time < 26080) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_09", 10000, 1); //It's your friends up north Tommy. They ain't too happy you capped their man.


  while ($.cs_time < 30104) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_10", 10000, 1); //They're coming down to see the business today.


  while ($.cs_time < 32108) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_11", 10000, 1); //They took longer than I thought...


  while ($.cs_time < 34187) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_12", 10000, 1); //Guys, we gotta make this final, we gotta leave no doubt that this is my operation.


  while ($.cs_time < 39927) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_13", 10000, 1); //Ken, get the first run of counterfeit cash and put about 3 mil in brief cases.


  while ($.cs_time < 45104) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN1_14", 10000, 1); //Lance, you get the guys together...


  while ($.cs_time < 52998) {
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


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "csken");
  Streaming.LoadSpecialCharacter(3, "csbuddy");
  Streaming.LoadSpecialCharacter(4, "cssonny");
  Streaming.LoadSpecialCharacter(5, "sfrenda");
  Streaming.LoadSpecialCharacter(6, "sgoona");
  Streaming.LoadSpecialCharacter(7, "sgoonb");
  Streaming.LoadSpecialModel(CUTOBJ01, "delcase");


  Streaming.LoadScene(-378.4660, -596.1799, 24.7818);


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasSpecialCharacterLoaded(5)) || !(Streaming.HasSpecialCharacterLoaded(6))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasSpecialCharacterLoaded(7)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);
  }


  Cutscene.Load("FIN_2");


  Camera.SetNearClip(0.1);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("csken");


  $.cs_buddy = CutsceneObject.Create(SPECIAL03);
  $.cs_buddy.setAnim("csbuddy");


  $.cs_sonny = CutsceneObject.Create(SPECIAL04);
  $.cs_sonny.setAnim("cssonny");


  $.cs_sfrenda = CutsceneObject.Create(SPECIAL05);
  $.cs_sfrenda.setAnim("sfrenda");


  $.cs_sgoona = CutsceneObject.Create(SPECIAL06);
  $.cs_sgoona.setAnim("sgoona");


  $.cs_sgoonb = CutsceneObject.Create(SPECIAL07);
  $.cs_sgoonb.setAnim("sgoonb");


  $.cs_lwchara = CutsceneObject.Create(CUTOBJ01);
  $.cs_lwchara.setAnim("delcase");


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 3853) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_01", 10000, 1); //Tommy!


  while ($.cs_time < 6297) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_02", 10000, 1); //What? No big hugs for your old buddy?


  while ($.cs_time < 8417) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_03", 10000, 1); //I've had fifteen years out of the loop;


  while ($.cs_time < 10472) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_04", 10000, 1); //I'm a bit rusty on family etiquette.


  while ($.cs_time < 12387) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_05", 10000, 1); //Always angry, eh Tommy.


  while ($.cs_time < 13627) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_06", 10000, 1); //Didn't I say your temper would get you into trouble, huh?


  while ($.cs_time < 16943) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_07", 10000, 1); //There's twenty mil in the cases.......


  while ($.cs_time < 18730) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_08", 10000, 1); //How many was it? Ten? No, eleven men.


  while ($.cs_time < 22330) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_09", 10000, 1); //That's how you get to be called the Harwood Butcher! Heh-heh-heh!


  while ($.cs_time < 25267) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_10", 10000, 1); //You sent me to kill one man, ONE MAN. They knew I was coming Sonny....


  while ($.cs_time < 30987) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_11", 10000, 1); //Watch your tone.


  while ($.cs_time < 32780) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_12", 10000, 1); //Anyone would think you blame me for that unfortunate set of circumstances.


  while ($.cs_time < 36617) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_13", 10000, 1); //just take the money....


  while ($.cs_time < 37728) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_14", 10000, 1); //Get the damn cash?


  while ($.cs_time < 40994) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_15", 10000, 1); //You know, Tommy? I did what I could for you, I pulled strings, called in favors.


  while ($.cs_time < 45718) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_16", 10000, 1); //I was your friend, Tommy. I hoped you'd see sense, see what's good for business.


  while ($.cs_time < 49615) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_17", 10000, 1); //I trusted you, Tommy, and you disappointed me.


  while ($.cs_time < 53574) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_18", 10000, 1); //But at least someone in your chicken shit organization knows how to do business,


  while ($.cs_time < 58188) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_19", 10000, 1); //Isn't that right, Lance?


  while ($.cs_time < 60272) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_20", 10000, 1); //I'm sorry Tommy. This is Vice City. This is business.


  while ($.cs_time < 66249) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_21", 10000, 1); //You sold us out...


  while ($.cs_time < 68133) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_22", 10000, 1); //No. I sold YOU out, Tommy, I sold YOU out.


  while ($.cs_time < 73431) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_23", 10000, 1); //The real cash is upstairs in the safe.


  while ($.cs_time < 76741) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_24", 10000, 1); //So Tommy, what was the big plan?


  while ($.cs_time < 78116) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_25", 10000, 1); //Did you think I'd just take the fake cash?


  while ($.cs_time < 80094) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_26", 10000, 1); //Save face and run away with my little tail between my legs?!


  while ($.cs_time < 83916) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_27", 10000, 1); //No.


  while ($.cs_time < 84910) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN2_28", 10000, 1); //I just wanted to piss you off before I kill you.


  while ($.cs_time < 86980) {
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


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.UnloadSpecialCharacter(5);
  Streaming.UnloadSpecialCharacter(6);
  Streaming.UnloadSpecialCharacter(7);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);


  World.SetPedDensityMultiplier(1.0);
  World.ClearArea(-354.419, -569.529, 30.0, 200.0, false);

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////

  //IF IS_BUTTON_PRESSED PAD2 DPADUP//DEBUG!!!!!!!!!!
  //	GOTO final_cutscene			//DEBUG!!!!!!!!!!
  //ENDIF							//DEBUG!!!!!!!!!!


  Streaming.RequestModel(STRETCH);
  Streaming.RequestModel(RUGER);
  //REQUEST_MODEL KNIFECUR

  Streaming.RequestModel(TEC9);
  Streaming.RequestModel(173 /* COLT45 */);
  Streaming.LoadSpecialCharacter(1, "IGBUDDY");
  Streaming.LoadSpecialCharacter(2, "IGSONNY");
  Streaming.LoadSpecialCharacter(3, "MBA");
  Streaming.LoadSpecialCharacter(4, "MBB");


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasModelLoaded(STRETCH)) || !(Streaming.HasModelLoaded(TEC9)) || !(Streaming.HasModelLoaded(RUGER)) || !(Streaming.HasModelLoaded(173 /* COLT45 */))) {
    //OR NOT HAS_MODEL_LOADED KNIFECUR
    await asyncWait(0);
  }


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);
  }

  //dirty commands

  Zone.SetPedInfo("GANG1", 1 /* DAY */, 14, 0, 0, 300, 0, 0, 0, 700, 0, 0, 0); // Mansion
  Zone.SetPedInfo("GANG1", 0 /* NIGHT */, 14, 0, 0, 300, 0, 0, 0, 700, 0, 0, 0);
  Game.SetThreatForPedType(PEDTYPE_GANG_PLAYER, THREAT_GANG_STREET);
  Game.SetThreatForPedType(PEDTYPE_GANG_STREET, THREAT_GANG_PLAYER);
  Game.SetThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
  Gang.SetWeapons(GANG_PLAYER, 2 /* WEAPONTYPE_PISTOL */, 2 /* WEAPONTYPE_PISTOL */);
  Gang.SetWeapons(GANG_STREET, 2 /* WEAPONTYPE_PISTOL */, 2 /* WEAPONTYPE_PISTOL */);
  Gang.SetPedModels(GANG_STREET, SPECIAL03, SPECIAL04);
  $.scplayer.setCanBeDamagedByMembersOfGang(GANG_PLAYER, false /* FALSE */);
  //dirty commands


  Streaming.SetAreaVisible(VIS_MANSION);
  $.flag_player_in_mansion = 1;
  World.SwitchRubbish(false /* OFF */);
  World.SetExtraColors(7, false /* FALSE */);
  Streaming.LoadScene(-378.4660, -596.1799, 24.7818);


  Char.SetThreatReactionRangeMultiplier(2.0);


  World.ClearArea(-378.4660, -596.1799, 24.7818, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-378.4660, -596.1799, 24.7818);
  $.player1.setHeading(0.0);
  Camera.SetBehindPlayer();
  $.temp_int = $.player1.getHealth();
  if (!($.temp_int > 100)) {
    $.player1.setHealth(100);
  }
  $.player1.addArmour(200);


  $.mafia_limo_1 = Car.Create(STRETCH, -386.1734, -515.6445, 11.7682); //west limo (1st)
  $.mafia_limo_1.setHeading(123.5502);
  $.mafia_limo_1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.mafia_limo_2 = Car.Create(STRETCH, -375.7929, -514.4023, 11.7776); //centre limo (2nd)
  $.mafia_limo_2.setHeading(75.6302);
  $.mafia_limo_2.setOnlyDamagedByPlayer(true /* TRUE */);


  $.mafia_limo_3 = Car.Create(STRETCH, -366.1754, -517.2399, 11.7561); //east limo	(3rd)
  $.mafia_limo_3.setHeading(60.5286);
  $.mafia_limo_3.setOnlyDamagedByPlayer(true /* TRUE */);


  $.mafia_limo_1.setIdle();
  $.mafia_limo_2.setIdle();
  $.mafia_limo_3.setIdle();
  $.mafia_limo_1.setMission(11 /* MISSION_STOP_FOREVER */);
  $.mafia_limo_2.setMission(11 /* MISSION_STOP_FOREVER */);
  $.mafia_limo_3.setMission(11 /* MISSION_STOP_FOREVER */);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  if (ONMISSION == 0) {
    $.random_mafia = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_1 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_2 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_3 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_4 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_5 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_6 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_7 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_8 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.mafia_9 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard1 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard2 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard3 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard4 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard5 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard6 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard7 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard8 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard9 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard10 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.boss_guard11 = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
    $.health_pickup = Pickup.Create(1362 /* HEALTH */, 2 /* PICKUP_ON_STREET */, -336.6208, -568.9940, 11.6022);
    $.armour_pickup = Pickup.Create(1364 /* BODYARMOUR */, 2 /* PICKUP_ON_STREET */, -336.6208, -570.9940, 11.6022);
    $.python_pickup = Pickup.CreateWithAmmo(TEC9, 2 /* PICKUP_ON_STREET */, 120, -336.6208, -572.9940, 11.6022);
    $.python_pickup2 = Pickup.CreateWithAmmo(TEC9, 2 /* PICKUP_ON_STREET */, 120, -336.6208, -572.9940, 11.6022);
    $.health_pickup2 = Pickup.Create(1362 /* HEALTH */, 2 /* PICKUP_ON_STREET */, -336.6208, -568.9940, 11.6022);
    $.health_pickup_on_roof = Pickup.Create(1362 /* HEALTH */, 2 /* PICKUP_ON_STREET */, -336.6208, -568.9940, 11.6022);
  }


  $.health_pickup.remove();
  $.armour_pickup.remove();
  $.python_pickup.remove();
  $.python_pickup2.remove();
  $.health_pickup = Pickup.Create(1362 /* HEALTH */, 2 /* PICKUP_ON_STREET */, -406.2503, -566.4947, 19.5804);
  $.armour_pickup = Pickup.Create(1364 /* BODYARMOUR */, 2 /* PICKUP_ON_STREET */, -406.2992, -564.5820, 19.5804);
  $.python_pickup = Pickup.CreateWithAmmo(PYTHON, 2 /* PICKUP_ON_STREET */, 120, -401.7512, -566.0168, 19.5804);
  $.python_pickup2 = Pickup.CreateWithAmmo(PYTHON, 3 /* PICKUP_ONCE */, 120, -374.4366, -587.5957, 25.3355);


  $.game_timer = Clock.GetGameTimer();
  $.vance_timer = $.game_timer + 60000;
  $.sonni_timer = $.game_timer + 120000;


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Text.PrintNow("FIN_B3", 5000, 1); //~g~The Mafia are trying to steal your money. Defend the safe.


  $.stored_player_score = $.player1.storeScore();


  $.player1.setMood(PLAYER_MOOD_ANGRY, 60000);
}


//SCARFACE ROOM AREA
//-386.507 -600.089 24.286 -370.542 -583.413 31.667
//-378.671 -591.947 28.17 8.5 8.5 4.0
//LOCATE TO CREATE BUDDY & SONNI
//IF LOCATE_PLAYER_ANY_MEANS_3D player1 -378.671 -588.595 28.17 8.5 13.0 4.0 0



//SECURITY CAMERA COORDINATES
//-361.3727 -582.8584 32.6401 -361.9797 -582.1804 32.2257
//-382.2143 -554.8763 22.9362 -381.9367 -554.0642 22.4229
//-371.1070 -598.7102 31.8273 -371.7275 -598.1949 31.2361
//-398.9712 -567.0131 21.9549 -399.7347 -566.4696 21.6064
//-315.8591 -583.2792 22.6796 -316.4446 -582.8118 22.0173


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

async function mission_finale2_loop() {
  // SCM GOTO → mission_finale2_loop lowered to endless loop
  while (true) {
    //////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////


    await asyncWait(0);


    $.game_timer = Clock.GetGameTimer();
    //SET_PLAYER_HEALTH player1 100


    if ($.player1.locateAnyMeans3D(-354.419, -569.529, 30.0, 200.0, 120.0, 30.0, false)) {
      $.player1.alterWantedLevel(0);
      if ($.player_at_mansion == 0) {
        $.player_at_mansion = 1;
      }
    }
    else {
      if ($.player_at_mansion == 1) {
        $.player_at_mansion = 0;
      }
    }


    if (!($.player1.isHealthGreater(70))) {
      if ($.health_message == 1) {
        Text.PrintNow("FIN_B4", 6000, 1); //"~g~You are close to death, get some ~w~health~g~ from downstairs."
        if ($.health_blip_added == 0) {
          $.health_blip = Blip.AddForCoord(-406.2503, -566.4947, 19.5804);
          $.health_blip.changeColor(3 /* WHITE */);
          $.health_blip2 = Blip.AddForCoord(-335.6250, -571.7700, 11.0);
          $.health_blip2.changeColor(3 /* WHITE */);
          $.health_blip_added = 1;
        }
        $.health_message = 0;
      }
    }
    else {
      if ($.health_message == 0) {
        $.health_message = 1;
      }
    }


    if ($.mafia_1_flag == 2 || $.mafia_2_flag == 2 || $.mafia_3_flag == 2 || $.mafia_4_flag == 2 || $.mafia_5_flag == 2) {
      $.stealing_from_safe_a = 1;
    }
    else {
      $.stealing_from_safe_a = 0;
    }


    if ($.mafia_6_flag == 2 || $.mafia_7_flag == 2 || $.mafia_8_flag == 2 || $.mafia_9_flag == 2) {
      $.stealing_from_safe_b = 1;
    }
    else {
      $.stealing_from_safe_b = 0;
    }


    if ($.stealing_from_safe_a == 1 || $.stealing_from_safe_b == 1) {
      if ($.at_safe_message == 1) {
        Text.PrintNow("FIN_B5", 5000, 1); //~g~Someone is taxing your money, protect the ~c~safe
        $.safe_blip = Blip.AddForCoord($.the_safe_x, $.the_safe_y, $.the_safe_z);
        $.safe_blip.changeColor(6 /* CYAN */);
        $.at_safe_message = 0;
      }
    }
    else {
      if ($.at_safe_message == 0) {
        $.safe_blip.remove();
        $.at_safe_message = 1;
      }
    }


    if ($.vance_flag == -1) {
      if ($.game_timer > $.vance_timer) {
        if ($.player1.locateAnyMeans3D(-378.523, -579.67, 27.284, 6.0, 4.0, 3.0, false)) {
          $.vance_flag = 0;
        }
        else {
          if ($.player1.locateAnyMeans3D(-378.551, -591.784, 28.232, 8.114, 8.0, 3.44, false)) {
            Text.PrintNow("FIN_B1", 200, 1); //Kill the backstabber ~y~Lance Vance~g~.
          }
          else {
            Text.PrintNow("DEFSAFE", 200, 1); //Get back to the safe and defend it.
          }
        }
      }
    }


    if ($.vance_flag == 0) {
      //IF NOT IS_POINT_OBSCURED_BY_A_MISSION_ENTITY -357.6711 -559.5632 26.5411 1.0 1.0 2.0
      //OR NOT IS_POINT_ON_SCREEN -357.6711 -559.5632 26.5411 3.0
      $.mafia_1.delete();
      $.mafia_2.delete();
      $.mafia_3.delete();
      $.mafia_4.delete();
      $.mafia_5.delete();
      $.mafia_6.delete();
      $.mafia_7.delete();
      $.mafia_8.delete();
      $.mafia_9.delete();
      $.boss_guard1.delete();
      $.boss_guard2.delete();
      $.boss_guard3.delete();
      $.boss_guard4.delete();
      $.boss_guard5.delete();
      $.boss_guard6.delete();
      $.boss_guard7.delete();
      $.boss_guard8.delete();
      $.boss_guard9.delete();
      $.boss_guard10.delete();
      $.boss_guard11.delete();
      $.vance = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -357.6711, -559.5632, 26.5411);
      await set_up_vance_shite();  // SCM GOSUB set_up_vance_shite
      //ADD_BLIP_FOR_CHAR vance vance_blip
      //CHANGE_BLIP_COLOUR vance_blip YELLOW
      Audio.LoadMissionAudio(1, "FIN_3" as any); //Lance:  No one to cover your ass now, eh Tommy?
      Audio.LoadMissionAudio(2, "FIN_1b" as any); //Player: Youre going down, you back stabbing prick!
      $.vance.setObjRunToCoord(-362.1062, -559.4869);
      $.vance.setUsePednodeSeek(false /* FALSE */);
      $.player1.setControl(false /* OFF */);
      Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
      Hud.SwitchWidescreen(true /* ON */);
      Game.SetAllCarsCanBeDamaged(false /* FALSE */);
      $.player_in_scripted_cutscene = 1;
      World.ClearArea(-378.0434, -579.1422, 18.5385, 2.0, true);
      $.player1.setCoordinates(-378.0434, -579.1422, 18.5385);
      $.dummy_player = Char.Create(4 /* PEDTYPE_CIVMALE */, NULL, -378.4288, -582.1033, 24.2735);
      $.dummy_player.giveWeapon(WEAPONTYPE_PYTHON, 9);
      //		SET_CHAR_HEADING dummy_player 168.0084
      $.dummy_player.turnToFaceChar($.vance);
      $.dummy_player.clearThreatSearch();
      $.dummy_player.shutUp(true /* TRUE */);
      Camera.SetFixedPosition(-379.2380, -583.7946, 26.1261, 0.0, 0.0, 0.0); //FROM SCARFACE ROOM AT PLAYER & BUDDY
      Camera.PointAtPoint(-378.7026, -582.9524, 26.0619, 2 /* JUMP_CUT */);
      $.vance_flag = 1;
      //ENDIF

    }


    if ($.vance_flag > 0) {
      if (!(Char.IsDead($.vance))) {
        if ($.vance_flag < 12 && $.vance_flag > 4) {
          if ($.vance_timer < $.game_timer) {
            Text.PrintNow("FIN_B1", 5000, 1); //Kill the backstabber ~y~Lance Vance~g~.
            $.vance_timer = $.game_timer + 10000;
          }
        }
        if ($.vance_flag == 1) {
          if ($.vance.locateStoppedOnFoot2D(-362.1062, -559.4869, 1.0, 1.0, false)) {
            if (Audio.HasMissionAudioLoaded(1)) {
              if (!(Char.IsDead($.dummy_player))) {
                $.vance.setObjAimGunAtChar($.dummy_player);
              }
              Audio.PlayMissionAudio(1);
              Text.PrintNow("FIN_3", 5000, 1); //Lance:  No one to cover your ass now, eh Tommy?
              //SET_CHAR_WAIT_STATE scplayer WAITSTATE_CROSS_ROAD_LOOK 900
              $.vance_timer = $.game_timer + 500;
              $.vance_flag = 2;
            }
          }
        }
        if ($.vance_flag == 2) {
          if ($.vance_timer < $.game_timer) {
            if (!(Char.IsDead($.dummy_player))) {
              $.player_heading = $.dummy_player.getHeading();
            }
            $.player_heading += 12.0;
            if ($.player_heading > 325.2151) {
              $.player_heading = 325.2151;
              if (Audio.HasMissionAudioFinished(1) && Audio.HasMissionAudioLoaded(2)) {
                Audio.PlayMissionAudio(2);
                Text.PrintNow("FIN_1b", 5000, 1); //Player: Youre going down, you back stabbing prick!
                if (!(Char.IsDead($.dummy_player))) {
                  $.dummy_player.setObjAimGunAtChar($.vance);
                }
                Audio.LoadMissionAudio(1, "FIN_2b" as any); //Lance:  Oh you think so!
                $.vance_flag = 3;
              }
            }
            if (!(Char.IsDead($.dummy_player))) {
              $.dummy_player.setHeading($.player_heading);
              $.dummy_player.stopLooking();
              $.dummy_player.lookAtCharAlways($.vance);
            }
          }
        }
        if ($.vance_flag == 3) {
          if (Audio.HasMissionAudioFinished(2) && Audio.HasMissionAudioLoaded(1)) {
            //SET_FIXED_CAMERA_POSITION -363.5046 -557.9782 27.5867 0.0 0.0 0.0
            //POINT_CAMERA_AT_POINT -363.4895 -558.9763 27.6460 JUMP_CUT
            Camera.SetFixedPosition(-362.8571, -557.6577, 28.1980, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-362.9028, -558.6328, 27.9812, 2 /* JUMP_CUT */);
            Audio.PlayMissionAudio(1);
            Text.PrintNow("FIN_2b", 5000, 1); //Lance:  Oh you think so!
            Audio.LoadMissionAudio(2, "FIN_1a" as any); //Player: Come here you double-crossing piece of shit!
            if (!(Char.IsDead($.dummy_player))) {
              $.dummy_player.stopLooking();
            }
            $.vance_timer = $.game_timer + 1100;
            $.vance_flag = 4;
          }
        }
        if ($.vance_flag == 4) {
          if (Audio.HasMissionAudioFinished(1)) {
            if ($.vance_timer < $.game_timer) {
              $.scplayer.setObjNoObj();
              Audio.LoadMissionAudio(1, "FIN_4" as any); //Lance:  Youre history, Tommy, history
              $.vance_flag = 5;
            }
          }
        }
        if ($.vance_flag == 5) {
          if ($.avoid_a_nasty_crash_flag == 2) {
            $.dummy_player.delete();
            World.ClearArea(-378.4288, -582.1033, 24.2735, 2.0, true);
            $.player1.setCoordinates(-378.4288, -582.1033, 24.2735); //TOP OF STAIRS
            $.player1.setHeading($.player_heading);
            $.player1.setControl(true /* ON */);
            $.player1.setHealth(200);
            $.player1.addArmour(200);
            Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
            Hud.SwitchWidescreen(false /* OFF */);
            Game.SetAllCarsCanBeDamaged(true /* TRUE */);
            Camera.SetBehindPlayer();
            Camera.RestoreJumpcut();
            $.hold_off_shooting_timer = $.game_timer + 400;
            $.player_in_scripted_cutscene = 0;
            Text.PrintNow("FIN_B1", 10000, 1); //Kill the backstabber ~y~Lance Vance~g~.
          }
          $.avoid_a_nasty_crash_flag++;
          if ($.avoid_a_nasty_crash_flag > 2) {
            if ($.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON) || $.player1.locateAnyMeans3D(-378.523, -561.41, 29.034, 18.0, 6.0, 2.5, false)) {
              $.vance.setObjSprintToCoord(-335.4508, -560.4796);
              $.vance.setUsePednodeSeek(false /* FALSE */);
              $.vance_flag = 6;
            }
            else {
              if ($.hold_off_shooting_timer < $.game_timer) {
                $.vance.setObjKillPlayerOnFoot($.player1);
              }
            }
          }
        }
        if ($.vance_flag == 6) {
          if ($.vance.locateOnFoot2D(-347.6153, -559.3744, 2.0, 2.0, false)) {
            $.vance.delete();
            $.vance = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -335.4508, -560.4796, 26.5380);
            await set_up_vance_shite();  // SCM GOSUB set_up_vance_shite
            $.vance.setObjKillPlayerOnFoot($.player1);
            $.vance_flag = 7;
          }
        }
        if ($.vance_flag == 7) {
          if ($.vance.isShooting()) {
            //vance_timer	= game_timer + 1000
            $.vance_flag = 8;
          }
          if ($.player1.locateAnyMeans3D(-347.4754, -559.3594, 27.5816, 2.0, 2.0, 2.0, false) || $.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
            //vance_timer	= game_timer - 1000
            $.vance_flag = 8;
          }
          if ($.player1.locateAnyMeans3D(-330.993, -578.541, 20.332, 3.134, 1.732, 1.81, false) || $.player1.locateAnyMeans3D(-330.8983, -578.8625, 11.6069, 2.0, 2.0, 2.0, false)) {
            $.vance_timer = -9999;
            $.vance_flag = 12;
          }
        }
        if ($.vance_flag == 8) {
          //IF vance_timer < game_timer
          if ($.player1.locateAnyMeans3D(-347.4754, -559.3594, 27.5816, 2.0, 2.0, 2.0, false) || $.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
            $.vance.setObjSprintToCoord(-334.3681, -579.2608);
            $.vance.setUsePednodeSeek(false /* FALSE */);
            $.vance_flag = 9;
          }
          if ($.player1.locateAnyMeans3D(-330.993, -578.541, 20.332, 3.134, 1.732, 1.81, false) || $.player1.locateAnyMeans3D(-330.8983, -578.8625, 11.6069, 2.0, 2.0, 2.0, false)) {
            $.vance_timer = -9999;
            $.vance_flag = 12;
          }
        }
        if ($.vance_flag == 9) {
          if ($.vance.locateOnFoot2D(-336.1350, -567.6742, 2.0, 2.0, false)) {
            $.vance.delete();
            $.vance = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -334.3681, -579.2608, 26.5109);
            await set_up_vance_shite();  // SCM GOSUB set_up_vance_shite
            $.vance.setObjKillPlayerOnFoot($.player1);
            $.vance_flag = 10;
          }
        }
        if ($.vance_flag == 10) {
          if ($.vance.isShooting()) {
            //vance_timer	= game_timer + 1000
            $.vance_flag = 11;
          }
          if ($.player1.locateAnyMeans3D(-336.1548, -565.9336, 27.5698, 2.0, 2.0, 2.0, false) || $.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
            //vance_timer	= game_timer - 1000
            $.vance_flag = 11;
          }
          if ($.player1.locateAnyMeans3D(-330.993, -578.541, 20.332, 3.134, 1.732, 1.81, false) || $.player1.locateAnyMeans3D(-330.8983, -578.8625, 11.6069, 2.0, 2.0, 2.0, false)) {
            $.vance_timer = -9999;
            $.vance_flag = 12;
          }
        }
        if ($.vance_flag == 11) {
          //IF vance_timer < game_timer
          if ($.player1.locateAnyMeans3D(-336.1548, -565.9336, 27.5698, 2.0, 2.0, 2.0, false) || $.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
            $.vance.setObjSprintToCoord(-325.5564, -578.9694);
            $.vance.setUsePednodeSeek(false /* FALSE */);
            $.vance_flag = 12;
          }
          if ($.player1.locateAnyMeans3D(-330.993, -578.541, 20.332, 3.134, 1.732, 1.81, false) || $.player1.locateAnyMeans3D(-330.8983, -578.8625, 11.6069, 2.0, 2.0, 2.0, false)) {
            $.vance_timer = -9999;
            $.vance_flag = 12;
          }
        }
        if ($.vance_flag == 12) {
          if ($.vance.locateOnFoot2D(-330.0031, -578.9820, 2.0, 2.0, false) || $.vance_timer == -9999) {
            $.vance.delete();
            $.vance = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -317.6072, -580.8336, 32.5255);
            $.vance.setHeading(80.6458);
            $.vance.setCrouch(true /* TRUE */, 999999);
            await set_up_vance_shite();  // SCM GOSUB set_up_vance_shite
            $.vance.setObjKillPlayerOnFoot($.player1);
            $.vance_flag = 13;
          }
        }
        if ($.vance_flag == 13) {
          //			IF IS_CHAR_SHOOTING	vance
          //				vance_timer	= game_timer + 1000
          //				vance_flag = 14
          //				SET_CHAR_CROUCH	vance FALSE 200
          //				IF audio_bit_flag = 0
          //					audio_bit_flag = 1
          //				ENDIF
          //			ENDIF
          if ($.player1.locateAnyMeans3D(-323.0355, -573.3547, 28.5367, 2.0, 2.0, 2.0, false) || $.player1.locateAnyMeans3D(-330.993, -578.541, 20.332, 3.134, 1.732, 1.81, false) || $.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON) || $.player1.locateAnyMeans3D(-330.8983, -578.8625, 11.6069, 2.0, 2.0, 2.0, false)) {
            $.vance.setCrouch(false /* FALSE */, 200);
            $.vance_timer = $.game_timer - 1000;
            $.vance_flag = 14;
            if ($.audio_bit_flag == 0) {
              $.audio_bit_flag = 1;
            }
          }
        }
        if ($.vance_flag == 14) {
          //IF vance_timer < game_timer
          if ($.player1.locateAnyMeans3D(-323.0355, -573.3547, 28.5367, 2.0, 2.0, 2.0, false) || $.player1.locateAnyMeans3D(-330.993, -578.541, 20.332, 3.134, 1.732, 1.81, false) || $.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON) || $.player1.locateAnyMeans3D(-330.8983, -578.8625, 11.6069, 2.0, 2.0, 2.0, false)) {
            $.vance.setCrouch(false /* FALSE */, 200);
            $.vance.setObjSprintToCoord(-318.4535, -583.2459); //BACK OF STAIRS
            $.vance.setUsePednodeSeek(false /* FALSE */);
            if ($.audio_bit_flag == 0) {
              $.audio_bit_flag = 1;
            }
            $.vance_flag = 15;
          }
        }
        if ($.vance_flag == 15) {
          if ($.vance.locateOnFoot2D(-318.4535, -583.2459, 1.0, 1.0, false)) {
            $.vance.setObjSprintToCoord(-330.3770, -582.4593); //TOP OF STAIRS ON CORNER
            $.vance.setUsePednodeSeek(false /* FALSE */);
            $.vance_flag = 16;
          }
        }
        if ($.vance_flag == 16) {
          if ($.vance.locateOnFoot2D(-330.3770, -582.4593, 1.0, 1.0, false)) {
            $.vance.setObjSprintToCoord(-330.2176, -576.3726); //END OF CORRIDOR LEADING TO ROOF
            $.vance.setUsePednodeSeek(false /* FALSE */);
            $.vance_flag = 17;
          }
        }
        if ($.vance_flag > 4 && $.vance_flag < 18) {
          const _res179 = $.player1.getCoordinates();
$.player_x = _res179.x;
$.player_y = _res179.y;
$.player_z = _res179.z;
          if ($.player_z > 35.9013) {
            $.vance_timer = -9999;
            $.vance_flag = 17;
          }
        }
        if ($.vance_flag == 17) {
          if ($.vance.locateOnFoot2D(-330.2176, -576.3726, 2.0, 2.0, false) || $.vance_timer == -9999) {
            $.boss_guard1.delete();
            $.boss_guard2.delete();
            $.boss_guard3.delete();
            $.boss_guard4.delete();
            $.boss_guard5.delete();
            $.boss_guard6.delete();
            $.boss_guard7.delete();
            $.boss_guard8.delete();
            $.boss_guard9.delete();
            $.boss_guard10.delete();
            $.boss_guard11.delete();
            $.vance.delete();
            $.vance = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -361.9369, -571.6255, 35.9036);
            await set_up_vance_shite();  // SCM GOSUB set_up_vance_shite
            $.vance.setHealth(500);
            $.vance.setObjKillPlayerOnFoot($.player1);
            $.boss_guard1 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -358.9860, -573.5510, 35.9023); //kill player
            $.random_mafia = $.boss_guard1;
            await setup_goon_shite();  // SCM GOSUB setup_goon_shite
            $.boss_guard1.setStayInSamePlace(false /* FALSE */);
            $.boss_guard1.setObjKillPlayerOnFoot($.player1);
            $.boss_guard2 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -360.4153, -581.7871, 35.9036); //crouching
            $.random_mafia = $.boss_guard2;
            await setup_goon_shite();  // SCM GOSUB setup_goon_shite
            $.boss_guard2.setObjKillPlayerOnFoot($.player1);
            $.boss_guard4 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -358.8662, -572.5509, 35.9024); //crouch
            $.random_mafia = $.boss_guard4;
            await setup_goon_shite();  // SCM GOSUB setup_goon_shite
            $.boss_guard4.setCrouch(true /* TRUE */, 99999999);
            $.boss_guard4.setObjKillPlayerOnFoot($.player1);
            $.boss_guard5 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -360.1348, -576.5894, 35.9036); //kill player
            $.random_mafia = $.boss_guard5;
            await setup_goon_shite();  // SCM GOSUB setup_goon_shite
            $.boss_guard5.setObjKillPlayerOnFoot($.player1);
            $.boss_guard6 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -359.1239, -578.4683, 35.9022); //kill player
            $.random_mafia = $.boss_guard6;
            await setup_goon_shite();  // SCM GOSUB setup_goon_shite
            $.boss_guard6.setStayInSamePlace(false /* FALSE */);
            $.boss_guard6.setObjKillPlayerOnFoot($.player1);
            $.boss_guard7 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -357.0746, -575.2473, 35.9037); //kill player
            $.random_mafia = $.boss_guard7;
            await setup_goon_shite();  // SCM GOSUB setup_goon_shite
            $.boss_guard7.setObjKillPlayerOnFoot($.player1);
            $.barrel01 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -359.73, -580.773, 36.291);
            $.barrel01.setDynamic(false /* FALSE */);
            $.barrel02 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -358.514, -581.288, 36.291);
            $.barrel02.setDynamic(false /* FALSE */);
            $.barrel03 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -358.991, -582.344, 36.291);
            $.barrel03.setDynamic(false /* FALSE */);
            $.barrel04 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -360.921, -573.17, 37.412);
            $.barrel04.setDynamic(false /* FALSE */);
            $.barrel05 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -361.612, -573.052, 36.291);
            $.barrel05.setDynamic(false /* FALSE */);
            $.barrel06 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -360.718, -573.451, 36.291);
            $.barrel06.setDynamic(false /* FALSE */);
            $.barrel07 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -361.612, -573.947, 36.291);
            $.barrel07.setDynamic(false /* FALSE */);
            $.barrel08 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -360.917, -572.457, 36.291);
            $.barrel08.setDynamic(false /* FALSE */);
            $.barrel09 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -360.024, -571.964, 36.291);
            $.barrel09.setDynamic(false /* FALSE */);
            $.barrel10 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -360.917, -571.564, 36.291);
            $.barrel10.setDynamic(false /* FALSE */);
            $.barrel11 = ScriptObject.CreateNoOffset(1344 /* barrel4 */, -365.268, -581.761, 36.281);
            $.barrel11.setDynamic(false /* FALSE */);
            $.barrel11.makeTargetable();

            //CREATE_OBJECT_NO_OFFSET barrel4 -360.862 -558.764 36.291 barrel11
            //SET_OBJECT_DYNAMIC barrel11 FALSE
            //CREATE_OBJECT_NO_OFFSET barrel2 -360.798 -557.664 36.291 barrel12
            //SET_OBJECT_DYNAMIC barrel12 FALSE
            //CREATE_OBJECT_NO_OFFSET barrel2 -359.451 -558.796 36.291 barrel13
            //SET_OBJECT_DYNAMIC barrel13 FALSE

            $.barrel14 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -344.03, -574.41, 36.291);
            $.barrel14.setDynamic(false /* FALSE */);
            $.barrel15 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -344.646, -575.077, 36.291);
            $.barrel15.setDynamic(false /* FALSE */);
            $.barrel16 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -344.081, -575.753, 36.291);
            $.barrel16.setDynamic(false /* FALSE */);
            $.barrel17 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -343.878, -576.62, 36.291);
            $.barrel17.setDynamic(false /* FALSE */);
            $.barrel18 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -344.491, -577.278, 36.291);
            $.barrel18.setDynamic(false /* FALSE */);
            $.barrel19 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -344.317, -576.168, 37.412);
            $.barrel19.setDynamic(false /* FALSE */);
            $.barrel20 = ScriptObject.CreateNoOffset(1336 /* barrel2 */, -344.691, -576.371, 36.291);
            $.barrel20.setDynamic(false /* FALSE */);
            $.health_pickup_on_roof.remove();
            $.health_pickup_on_roof = Pickup.Create(1362 /* HEALTH */, 2 /* PICKUP_ON_STREET */, -408.2314, -586.6186, 38.5);
            $.vance_flag = 18;
          }
        }
        if ($.vance_flag == 18) {
          if ($.vance.hasBeenDamagedByWeapon(WEAPONTYPE_ANYWEAPON)) {
            if ($.audio_bit_flag == 3) {
              $.audio_bit_flag = 4;
            }
          }
        }
        if ($.vance_flag > 17) {
          if (Char.IsDead($.boss_guard1)) {
            $.boss_guard1.markAsNoLongerNeeded();
          }
        }
        if ($.vance_flag > 17) {
          if (Char.IsDead($.boss_guard2)) {
            $.boss_guard2.markAsNoLongerNeeded();
          }
        }
        if ($.vance_flag > 17) {
          if (Char.IsDead($.boss_guard3)) {
            $.boss_guard3.markAsNoLongerNeeded();
          }
        }
        if ($.vance_flag > 17) {
          if (Char.IsDead($.boss_guard4)) {
            $.boss_guard4.markAsNoLongerNeeded();
          }
        }
        if ($.vance_flag > 17) {
          if (Char.IsDead($.boss_guard5)) {
            $.boss_guard5.markAsNoLongerNeeded();
          }
        }
        if ($.vance_flag > 17) {
          if (Char.IsDead($.boss_guard6)) {
            $.boss_guard6.markAsNoLongerNeeded();
          }
        }
        if ($.vance_flag > 17) {
          if (Char.IsDead($.boss_guard7)) {
            $.boss_guard7.markAsNoLongerNeeded();
          }
        }
        if ($.audio_bit_flag == 1) {
          if (Audio.HasMissionAudioLoaded(2)) {
            Audio.PlayMissionAudio(2);
            Text.PrintNow("FIN_1a", 5000, 1); //Player: Come here you double-crossing piece of shit!
            $.audio_bit_flag = 2;
          }
        }
        if ($.audio_bit_flag == 2) {
          if (Audio.HasMissionAudioFinished(2) && Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("FIN_4", 5000, 1); //Lance:  Youre history, Tommy, history
            Audio.LoadMissionAudio(2, "FIN_1c" as any); //Player: This is the last dance for lance vance!
            $.audio_bit_flag = 3;
          }
        }
        if ($.audio_bit_flag == 4) {
          if (Audio.HasMissionAudioFinished(1) && Audio.HasMissionAudioLoaded(2)) {
            Audio.PlayMissionAudio(2);
            Text.PrintNow("FIN_1c", 5000, 1); //Player: This is the last dance for lance vance!
            Audio.LoadMissionAudio(1, "FIN_2c" as any); //Lance:  I said I had enough of that at school!
            $.audio_bit_flag = 5;
          }
        }
        if ($.audio_bit_flag == 5) {
          if (Audio.HasMissionAudioFinished(2) && Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("FIN_2c", 5000, 1); //Lance:  I said I had enough of that at school!
            Audio.LoadMissionAudio(2, "FIN_5" as any); //You picked the wrong side, Lance...
            $.audio_bit_flag = 6;
          }
        }
        $.vance.clearLastWeaponDamage();
      }
      else {
        if (!($.vance_flag == -11)) {
          //REMOVE_BLIP vance_blip
          if ($.audio_bit_flag == 6) {
            if (Audio.HasMissionAudioLoaded(2)) {
              Audio.PlayMissionAudio(2);
              Text.PrintNow("FIN_5", 5000, 1); //You picked the wrong side, Lance...
              $.audio_bit_flag = 7;
            }
          }
          $.vance.markAsNoLongerNeeded();
          $.boss_guard1.markAsNoLongerNeeded();
          $.boss_guard2.markAsNoLongerNeeded();
          $.boss_guard3.markAsNoLongerNeeded();
          $.boss_guard4.markAsNoLongerNeeded();
          $.boss_guard5.markAsNoLongerNeeded();
          $.boss_guard6.markAsNoLongerNeeded();
          $.boss_guard7.markAsNoLongerNeeded();
          $.vance_timer = $.game_timer + 3000;
          $.vance_flag = -11;
        }
      }
    }


    //IN TIME ORDER
    //LANCE FIGHT
    //player coordinates: -378.4288 -582.1033 24.2735 168.0084
    //first shot: -379.2380 -583.7946 26.1261 -378.7026 -582.9524 26.0619
    //FIN_3		//Lance:  No one to cover your ass now, eh Tommy?
    //FIN_1b	//Player: Youre going down, you back stabbing prick!
    //-360.5664 -558.0118 28.8631 -361.1595 -558.7521 28.5465
    //ALTERNATE1: -363.5046 -557.9782 27.5867 -363.4895 -558.9763 27.6460
    //FIN_2b	//Lance:  Oh you think so!

    //FIN_1a	//Player: Come here you double-crossing piece of shit!
    //FIN_4		//Lance:  Youre history, Tommy, history

    //FIN_1c	//Player: This is the last dance for lance vance!
    //FIN_2c	//Lance:  I said I had enough of that at school!

    //FIN_5		//Player: You picked the wrong side, Lance... (When Lance is killed)

    //IF vance_flag = 1
    //	IF NOT IS_CHAR_DEAD	vance
    //		IF game_timer > vance_timer
    //			GET_PLAYER_COORDINATES player1 player_x player_y player_z
    //			CHAR_FOLLOW_PATH vance player_x player_y player_z 3.0 0
    //			vance_timer = game_timer + 500
    //		ENDIF
    //	ELSE
    //		MARK_CHA
    //		REMOVE_BLIP	vance_blip
    //		vance_timer = game_timer + 3000
    //		vance_flag = -11
    //	ENDIF
    //ENDIF






    if ($.boss_guard7_flag > 1 || $.boss_guard7_flag == -1) {
      if ($.boss_guard8_flag == 0) {
        $.boss_guard8 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -357.9117, -560.4049, 18.5529); //GOONS BOTTOM CORRIDOR
        $.boss_guard8.setStayInSamePlace(true /* TRUE */);
        $.boss_guard8.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard8.setAccuracy(75);
        $.boss_guard8.clearThreatSearch();
        $.boss_guard8.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard8.setHeedThreats(true /* TRUE */);
        $.boss_guard8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard8.setObjRunToCoord(-365.2909, -557.8369); //BEHIND FAR RIGHT PILLAR
        $.boss_guard8.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard8_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard8))) {
        if ($.boss_guard8_flag == 1) {
          if ($.boss_guard8.locateStoppedOnFoot2D(-365.2909, -557.8369, 1.0, 1.0, false)) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard8.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard8_flag = 2;
          }
        }
        if ($.boss_guard8_flag == 10) {
          $.boss_guard8.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard8.markAsNoLongerNeeded();
        $.boss_guard8_flag = -1;
      }
    }


    if ($.boss_guard7_flag > 1 || $.boss_guard7_flag == -1) {
      if ($.boss_guard9_flag == 0) {
        $.boss_guard9 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -358.5610, -560.1335, 26.5396); //GOONS UPPER CORRIDOR
        $.boss_guard9.setStayInSamePlace(true /* TRUE */);
        $.boss_guard9.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard9.setAccuracy(75);
        $.boss_guard9.clearThreatSearch();
        $.boss_guard9.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard9.setHeedThreats(true /* TRUE */);
        $.boss_guard9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard9.setObjRunToCoord(-380.1727, -560.6678); //FURTHEST FROM CORRIDOR
        $.boss_guard9.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard9_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard9))) {
        if ($.boss_guard9_flag == 1) {
          if ($.boss_guard9.locateStoppedOnFoot2D(-380.1727, -560.6678, 1.0, 1.0, false)) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard9.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard9_flag = 2;
          }
        }
        if ($.boss_guard9_flag == 10) {
          $.boss_guard9.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard9.markAsNoLongerNeeded();
        $.boss_guard9_flag = -1;
      }
    }


    if ($.boss_guard9_flag > 0 || $.boss_guard9_flag == -1) {
      if ($.boss_guard10_flag == 0) {
        if (!(World.IsPointObscuredByAMissionEntity(-358.5610, -560.1335, 26.5396, 1.0, 1.0, 2.0))) {
          $.boss_guard10 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -358.5610, -560.1335, 26.5396); //GOONS UPPER CORRIDOR
          $.boss_guard10.setStayInSamePlace(true /* TRUE */);
          $.boss_guard10.giveWeapon(WEAPONTYPE_TEC9, 9999);
          $.boss_guard10.setAccuracy(75);
          $.boss_guard10.clearThreatSearch();
          $.boss_guard10.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.boss_guard10.setHeedThreats(true /* TRUE */);
          $.boss_guard10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.boss_guard10.setObjRunToCoord(-375.5527, -560.7495); //MEDIUM FROM CORRIDOR
          $.boss_guard10.setUsePednodeSeek(false /* FALSE */);
          $.boss_guard10_flag = 1;
        }
      }
      if ($.boss_guard10_flag > 0) {
        if (!(Char.IsDead($.boss_guard10))) {
          if ($.boss_guard10_flag == 1) {
            if ($.boss_guard10.locateStoppedOnFoot2D(-375.5527, -560.7495, 1.0, 1.0, false)) {
              if (!(Char.IsDead($.dummy_player))) {
                $.boss_guard10.setObjAimGunAtChar($.dummy_player);
              }
              $.boss_guard10_flag = 2;
            }
          }
          if ($.boss_guard10_flag == 10) {
            $.boss_guard10.setObjKillPlayerOnFoot($.player1);
          }
        }
        else {
          $.boss_guard10.markAsNoLongerNeeded();
          $.boss_guard10_flag = -1;
        }
      }
    }


    if ($.boss_guard10_flag > 1 || $.boss_guard10_flag == -1) {
      if ($.boss_guard11_flag == 0) {
        $.boss_guard11 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -358.5610, -560.1335, 26.5396); //GOONS UPPER CORRIDOR
        $.boss_guard11.setStayInSamePlace(true /* TRUE */);
        $.boss_guard11.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard11.setAccuracy(75);
        $.boss_guard11.clearThreatSearch();
        $.boss_guard11.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard11.setHeedThreats(true /* TRUE */);
        $.boss_guard11.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard11.setObjRunToCoord(-365.4941, -560.3325); //CLOSEST TO CORRIDOR CROUCHED
        $.boss_guard11.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard11_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard11))) {
        if ($.boss_guard11_flag == 1) {
          if ($.boss_guard11.locateStoppedOnFoot2D(-365.4941, -560.3325, 1.0, 1.0, false)) {
            $.boss_guard11.setCrouch(true /* TRUE */, 15000);
            $.boss_guard11_timer = $.game_timer + 800;
            $.boss_guard11_flag = 2;
          }
        }
        if ($.boss_guard11_flag == 2) {
          if ($.boss_guard11_timer < $.game_timer) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard11.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard11_flag = 3;
          }
        }
        if ($.boss_guard11_flag == 10) {
          $.boss_guard11.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard11.markAsNoLongerNeeded();
        $.boss_guard11_flag = -1;
      }
    }


    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    //-378.4445 -556.8553 18.5385 182.3547 //SONNI
    //-378.4255 -558.4648 //GOTO FOR EFFECT

    if ($.sonni_flag == 0 && $.vance_flag == -11) {
      if ($.game_timer > $.sonni_timer) {
        if ($.player1.locateAnyMeans3D(-378.671, -588.595, 28.17, 8.5, 13.0, 4.0, false)) {

          //SHUT_CHAR_UP scplayer TRUE

          $.mafia_1.delete();
          $.mafia_2.delete();
          $.mafia_3.delete();
          $.mafia_4.delete();
          $.mafia_5.delete();
          $.mafia_6.delete();
          $.mafia_7.delete();
          $.mafia_8.delete();
          $.mafia_9.delete();
          $.boss_guard1.delete();
          $.boss_guard2.delete();
          $.boss_guard3.delete();
          $.boss_guard4.delete();
          $.boss_guard5.delete();
          $.boss_guard6.delete();
          $.boss_guard7.delete();
          $.boss_guard8.delete();
          $.boss_guard9.delete();
          $.boss_guard10.delete();
          $.boss_guard11.delete();
          $.player_in_scripted_cutscene = 1;
          $.sonni = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -378.4445, -556.8553, 18.5385);
          $.sonni.setHeading(180.0);
          $.sonni.clearThreatSearch();
          $.sonni.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          //SET_CHAR_THREAT_SEARCH sonni THREAT_PLAYER1
          //SET_CHAR_THREAT_SEARCH sonni THREAT_GANG_PLAYER
          $.sonni.giveWeapon(WEAPONTYPE_RUGER, 9999);
          $.sonni.setStayInSamePlace(true /* TRUE */);
          $.sonni.setHealth(1000);
          $.sonni.setAccuracy(100);
          $.sonni.setOnlyDamagedByPlayer(true /* TRUE */);
          $.sonni.setHeedThreats(true /* TRUE */);
          $.sonni.setAsPlayerFriend($.player1, true /* TRUE */);
          $.sonni.setSuffersCriticalHits(false /* FALSE */);
          $.sonni.setCanBeShotInVehicle(false /* FALSE */);
          $.sonni.setCanBeDamagedByMembersOfGang(GANG_PLAYER, false /* FALSE */);
          $.sonni.setCanBeDamagedByMembersOfGang(GANG_STREET, false /* FALSE */);
          Audio.LoadMissionAudio(1, "FIN_11a" as any); //Player: You took fifteen years from me Sonny...
          Audio.LoadMissionAudio(2, "FIN_11b" as any); //Player: And now Im gonna make you pay!
          $.player1.setControl(false /* OFF */);
          Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
          Hud.SwitchWidescreen(true /* ON */);
          Game.SetAllCarsCanBeDamaged(false /* FALSE */);
          World.SetPedDensityMultiplier(0.0);
          World.ClearArea(-354.419, -569.529, 30.0, 200.0, false);
          World.ClearArea(-378.0434, -579.1422, 18.5385, 2.0, true);
          $.player1.setCoordinates(-378.0434, -579.1422, 18.5385);
          $.dummy_player = Char.Create(4 /* PEDTYPE_CIVMALE */, NULL, -378.7225, -581.9664, 24.2737);
          $.dummy_player.giveWeapon(WEAPONTYPE_PYTHON, 9);
          $.dummy_player.clearThreatSearch();
          $.dummy_player.setObjGotoCoordOnFoot(-378.7615, -578.0532);
          $.dummy_player.setUsePednodeSeek(false /* FALSE */);
          $.dummy_player.shutUp(true /* TRUE */);
          $.boss_guard1 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -377.4021, -556.0059, 18.6338); //RHS DOORWAY GOTO 2
          $.boss_guard1.setStayInSamePlace(true /* TRUE */);
          $.boss_guard1.giveWeapon(WEAPONTYPE_TEC9, 9999);
          $.boss_guard1.setAccuracy(75);
          $.boss_guard1.clearThreatSearch();
          $.boss_guard1.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.boss_guard1.setHeedThreats(true /* TRUE */);
          $.boss_guard1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.boss_guard1.setObjAimGunAtChar($.dummy_player);


          $.boss_guard2 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -379.5223, -556.0323, 18.6338); //LHS DOORWAY GOTO 2
          $.boss_guard2.setStayInSamePlace(true /* TRUE */);
          $.boss_guard2.giveWeapon(WEAPONTYPE_TEC9, 9999);
          $.boss_guard2.setAccuracy(75);
          $.boss_guard2.clearThreatSearch();
          $.boss_guard2.setThreatSearch(1 /* THREAT_PLAYER1 */);
          $.boss_guard2.setHeedThreats(true /* TRUE */);
          $.boss_guard2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          Audio.LoadMissionAudio(1, "FIN_11a" as any); //Player: You took fifteen years from me Sonny...
          Audio.LoadMissionAudio(2, "FIN_11b" as any); //Player: And now Im gonna make you pay!
          $.boss_guard2.setObjAimGunAtChar($.dummy_player);
          Camera.SetFixedPosition(-380.8234, -580.5767, 26.8352, 0.0, 0.0, 0.0); //FROM SCARFACE ROOM BEHIND PLAYER
          Camera.PointAtPoint(-380.5664, -579.6381, 26.6052, 2 /* JUMP_CUT */);
          $.boss_guard1_flag = 1;
          $.boss_guard1_timer = $.game_timer + 1500;
          $.boss_guard2_flag = 1;
          $.boss_guard2_timer = $.game_timer + 2000;
          $.boss_guard3_flag = 0;
          $.boss_guard4_flag = 0;
          $.boss_guard5_flag = 0;
          $.boss_guard6_flag = 0;
          $.boss_guard7_flag = 0;
          $.boss_guard8_flag = 0;
          $.boss_guard9_flag = 0;
          $.boss_guard10_flag = 0;
          $.boss_guard11_flag = 0;
          $.sonni.setObjKillPlayerOnFoot($.player1);
          $.sonni_flag = 1;
        }
      }
    }
    if ($.sonni_flag > 0) {
      if (!(Char.IsDead($.sonni))) {
        if ($.sonni_flag == 1) {
          if (!(Char.IsDead($.dummy_player))) {
            if ($.dummy_player.locateOnFoot2D(-378.7615, -578.0532, 1.0, 1.0, false)) {
              $.sonni_flag = 2;
            }
          }
        }
        if ($.sonni_flag == 2) {
          if (Audio.HasMissionAudioLoaded(1)) {
            Audio.PlayMissionAudio(1);
            Text.PrintNow("FIN_11a", 5000, 1); //Player: You took fifteen years from me Sonny...
            $.sonni_flag = 3;
          }
        }
        if ($.sonni_flag == 3) {
          if (Audio.HasMissionAudioLoaded(2) && Audio.HasMissionAudioFinished(1)) {
            Audio.PlayMissionAudio(2);
            Text.PrintNow("FIN_11b", 5000, 1); //Player: And now Im gonna make you pay!
            if (!(Char.IsDead($.dummy_player))) {
              $.dummy_player.setObjAimGunAtChar($.sonni);
            }
            Audio.LoadMissionAudio(1, "FIN_12a" as any); //Sonny:  You still dont get it do you!
            $.sonni_flag = 4;
          }
        }
        if ($.sonni_flag == 4) {
          if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioFinished(2)) {
            Camera.SetFixedPosition(-382.2642, -559.3823, 20.6255, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-381.3100, -559.3243, 20.3318, 2 /* JUMP_CUT */);
            $.sonni.setObjGotoCoordOnFoot(-378.5504, -558.9965);
            Audio.PlayMissionAudio(1);
            Text.PrintNow("FIN_12a", 5000, 1); //Sonny:  You still dont get it do you!
            Audio.LoadMissionAudio(2, "FIN_12b" as any); //Sonny:  I OWN you, Tommy.
            $.sonni_flag = 5;
          }
        }
        if ($.sonni_flag == 5) {
          if (Audio.HasMissionAudioLoaded(2) && Audio.HasMissionAudioFinished(1)) {
            Audio.PlayMissionAudio(2);
            Text.PrintNow("FIN_12b", 5000, 1); //Sonny:  I OWN you, Tommy.
            Audio.LoadMissionAudio(1, "FIN_12c" as any); //Sonny:  Those fifteen years were mine to spend!
            $.sonni_flag = 6;
          }
        }
        if ($.sonni_flag == 6) {
          if (Audio.HasMissionAudioLoaded(1) && Audio.HasMissionAudioFinished(2)) {
            $.sonni.setObjGotoCoordOnFoot(-378.5504, -558.9965);
            Audio.PlayMissionAudio(1);
            Camera.SetFixedPosition(-381.7876, -555.2700, 20.6022, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(-381.1512, -556.0339, 20.4956, 2 /* JUMP_CUT */);
            Text.PrintNow("FIN_12c", 5000, 1); //Sonny:  Those fifteen years were mine to spend!
            Audio.LoadMissionAudio(2, "FIN_13" as any); //Sonny:  Get him boys, he never understood a thing.
            $.sonni_flag = 7;
          }
        }
        if ($.sonni_flag == 7) {
          if (Audio.HasMissionAudioLoaded(2) && Audio.HasMissionAudioFinished(1)) {
            $.sonni_timer = $.game_timer + 2000;
            $.sonni.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 2000);
            $.sonni_flag = 8;
          }
        }
        if ($.sonni_flag == 8) {
          if ($.sonni_timer < $.game_timer) {
            Audio.PlayMissionAudio(2);
            Text.PrintNow("FIN_13", 5000, 1); //Sonny:  Get him boys, he never understood a thing.
            Audio.LoadMissionAudio(1, "FINKILL" as any); //Sonny:  Ok boys, kill him!
            $.hold_off_shooting_timer = $.game_timer + 500;
            $.dummy_player.delete();
            World.ClearArea(-378.7374, -578.8705, 24.2774, 2.0, true);
            $.player1.setCoordinates(-378.7374, -578.8705, 24.2774); //TOP OF STAIRS
            $.player1.setHeading(0.0);
            $.player1.setHealth(200);
            $.player1.addArmour(200);
            Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
            $.player1.setControl(true /* ON */);
            Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
            Hud.SwitchWidescreen(false /* OFF */);
            Game.SetAllCarsCanBeDamaged(true /* TRUE */);
            Camera.SetBehindPlayer();
            Camera.RestoreJumpcut();
            if (!(Char.IsDead($.boss_guard1))) {
              $.boss_guard1.setObjNoObj();
              //boss_guard1_flag = 10

            }
            if (!(Char.IsDead($.boss_guard2))) {
              $.boss_guard2.setObjNoObj();
              //boss_guard2_flag = 10

            }
            if (!(Char.IsDead($.boss_guard3))) {
              $.boss_guard3.setObjNoObj();
              //boss_guard3_flag = 10

            }
            if (!(Char.IsDead($.boss_guard4))) {
              $.boss_guard4.setObjNoObj();
              //boss_guard4_flag = 10

            }
            if (!(Char.IsDead($.boss_guard5))) {
              $.boss_guard5.setObjNoObj();
              //boss_guard5_flag = 10

            }
            if (!(Char.IsDead($.boss_guard6))) {
              $.boss_guard6.setObjNoObj();
              //boss_guard6_flag = 10

            }
            if (!(Char.IsDead($.boss_guard7))) {
              $.boss_guard7.setObjNoObj();
              //boss_guard7_flag = 10

            }
            if (!(Char.IsDead($.boss_guard8))) {
              $.boss_guard8.setObjNoObj();
              //boss_guard8_flag = 10

            }
            if (!(Char.IsDead($.boss_guard9))) {
              $.boss_guard9.setObjNoObj();
              //boss_guard9_flag = 10

            }
            if (!(Char.IsDead($.boss_guard10))) {
              $.boss_guard10.setObjNoObj();
              //boss_guard10_flag = 10

            }
            if (!(Char.IsDead($.boss_guard11))) {
              $.boss_guard11.setObjNoObj();
              //boss_guard11_flag = 10

            }

            //SHUT_CHAR_UP scplayer FALSE

            $.player_in_scripted_cutscene = 0;
            $.health_pickup2.remove();
            $.health_pickup2 = Pickup.Create(1362 /* HEALTH */, 2 /* PICKUP_ON_STREET */, -378.5680, -598.7501, 25.4); //SCARFACE ROOM
            $.python_pickup2.remove();
            $.python_pickup2 = Pickup.CreateWithAmmo(SHOTGSPA, 3 /* PICKUP_ONCE */, 400, -374.4366, -587.5957, 25.3355);
            Text.Print("FIN_B2", 5000, 1); //~p~Sonni~g~ is coming to kill you.
            $.sonni_flag = 9;
          }
        }
        if ($.sonni_flag == 9) {
          if ($.hold_off_shooting_timer < $.game_timer) {
            $.boss_guard1_flag = 10;
            $.boss_guard2_flag = 10;
            $.boss_guard3_flag = 10;
            $.boss_guard4_flag = 10;
            $.boss_guard5_flag = 10;
            $.boss_guard6_flag = 10;
            $.boss_guard7_flag = 10;
            $.boss_guard8_flag = 10;
            $.boss_guard9_flag = 10;
            $.boss_guard10_flag = 10;
            $.boss_guard11_flag = 10;
            $.sonni.setObjKillPlayerOnFoot($.player1);
            $.sonni_flag = 10;
          }
        }
      }
      else {
        if (!($.sonni_flag == -11)) {
          $.sonni.markAsNoLongerNeeded();
          $.boss_guard1.markAsNoLongerNeeded();
          $.boss_guard2.markAsNoLongerNeeded();
          $.boss_guard3.markAsNoLongerNeeded();
          $.boss_guard4.markAsNoLongerNeeded();
          $.boss_guard5.markAsNoLongerNeeded();
          $.boss_guard6.markAsNoLongerNeeded();
          $.boss_guard7.markAsNoLongerNeeded();
          $.boss_guard8.markAsNoLongerNeeded();
          $.boss_guard9.markAsNoLongerNeeded();
          $.boss_guard10.markAsNoLongerNeeded();
          $.boss_guard11.markAsNoLongerNeeded();
          $.sonni_timer = $.game_timer + 3000;
          $.sonni_flag = -11;
        }
      }
    }

    //SONNI FIGHT
    //FIN_11a   //Player: You took fifteen years from me Sonny...
    //FIN_11b	//Player: And now Im gonna make you pay!
    //FIN_12a	//Sonny:  You still dont get it do you!
    //FIN_12b	//Sonny:  I OWN you, Tommy.
    //FIN_12c	//Sonny:  Those fifteen years were mine to spend!
    //FIN_13	//Sonny:  Get him boys, he never understood a thing.

    //FINKILL	//Sonny:  Ok boys, kill him!
    //FIN_10	//Player: Sonny? SONNY! Im coming for ya! (When player gets close to Sonni)


    if (!(Char.IsDead($.boss_guard1))) {
      if ($.boss_guard1_flag == 1) {
        if ($.boss_guard1_timer < $.game_timer) {
          $.boss_guard1.setObjRunToCoord(-376.9825, -559.1848); //CROUCH BY SONNI
          $.boss_guard1.setUsePednodeSeek(false /* FALSE */);
          $.boss_guard1_flag = 2;
        }
      }
      if ($.boss_guard1_flag == 2) {
        if ($.boss_guard1.locateStoppedOnFoot2D(-376.9825, -559.1848, 1.0, 1.0, false)) {
          $.boss_guard1.setCrouch(true /* TRUE */, 15000);
          $.boss_guard1_timer = $.game_timer + 800;
          $.boss_guard1_flag = 3;
        }
      }
      if ($.boss_guard1_flag == 3) {
        if ($.boss_guard1_timer < $.game_timer) {
          if (!(Char.IsDead($.dummy_player))) {
            $.boss_guard1.setObjAimGunAtChar($.dummy_player);
          }
          $.boss_guard1_flag = 4;
        }
      }
      if ($.boss_guard1_flag == 10) {
        $.boss_guard1.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.boss_guard1.markAsNoLongerNeeded();
      $.boss_guard1_flag = -1;
    }


    if (!(Char.IsDead($.boss_guard2))) {
      if ($.boss_guard2_flag == 1) {
        if ($.boss_guard2_timer < $.game_timer) {
          $.boss_guard2.setObjRunToCoord(-382.3959, -563.7010); //AT BOTTOM OF STEPS
          $.boss_guard2.setUsePednodeSeek(false /* FALSE */);
          $.boss_guard2_flag = 2;
        }
      }
      if ($.boss_guard2_flag == 2) {
        if ($.boss_guard2.locateStoppedOnFoot2D(-382.3959, -563.7010, 1.0, 1.0, false)) {
          if (!(Char.IsDead($.dummy_player))) {
            $.boss_guard2.setObjAimGunAtChar($.dummy_player);
          }
          $.boss_guard2_flag = 3;
        }
      }
      if ($.boss_guard2_flag == 10) {
        $.boss_guard2.setObjKillPlayerOnFoot($.player1);
      }
    }
    else {
      $.boss_guard2.markAsNoLongerNeeded();
      $.boss_guard2_flag = -1;
    }


    if ($.boss_guard2_flag > 1 || $.boss_guard2_flag == -1) {
      if ($.boss_guard3_flag == 0) {
        $.boss_guard3 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -384.1820, -553.5216, 18.5431); //LHS DOORWAY GOON
        $.boss_guard3.setStayInSamePlace(true /* TRUE */);
        $.boss_guard3.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard3.setAccuracy(75);
        $.boss_guard3.clearThreatSearch();
        $.boss_guard3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard3.setHeedThreats(true /* TRUE */);
        $.boss_guard3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard3.setObjRunToCoord(-379.5186, -553.2346); //LHS DOORWAY GOTO 1
        $.boss_guard3.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard3_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard3))) {
        if ($.boss_guard3_flag == 1) {
          if ($.boss_guard3.locateOnFoot2D(-379.5186, -553.2346, 1.0, 1.0, false)) {
            $.boss_guard3.setObjRunToCoord(-379.5223, -556.0323); //LHS DOORWAY GOTO 2
            $.boss_guard3.setUsePednodeSeek(false /* FALSE */);
            $.boss_guard3_flag = 2;
          }
        }
        if ($.boss_guard3_flag == 2) {
          if ($.boss_guard3.locateOnFoot2D(-379.5223, -556.0323, 1.0, 1.0, false)) {
            $.boss_guard3.setObjRunToCoord(-383.4772, -558.1151); //BEHIND LEFT PILLAR
            $.boss_guard3.setUsePednodeSeek(false /* FALSE */);
            $.boss_guard3_flag = 3;
          }
        }
        if ($.boss_guard3_flag == 3) {
          if ($.boss_guard3.locateStoppedOnFoot2D(-383.4772, -558.1151, 1.0, 1.0, false)) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard3.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard3_flag = 4;
          }
        }
        if ($.boss_guard3_flag == 10) {
          $.boss_guard3.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard3.markAsNoLongerNeeded();
        $.boss_guard3_flag = -1;
      }
    }


    if ($.boss_guard1_flag > 1 || $.boss_guard1_flag == -1) {
      if ($.boss_guard4_flag == 0) {
        $.boss_guard4 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -373.9800, -553.4843, 18.5448); //RHS DOORWAY GOON
        $.boss_guard4.setStayInSamePlace(true /* TRUE */);
        $.boss_guard4.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard4.setAccuracy(75);
        $.boss_guard4.clearThreatSearch();
        $.boss_guard4.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard4.setHeedThreats(true /* TRUE */);
        $.boss_guard4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard4.setObjRunToCoord(-377.2835, -553.6105); //RHS DOORWAY GOTO 1
        $.boss_guard4.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard4_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard4))) {
        if ($.boss_guard4_flag == 1) {
          if ($.boss_guard4.locateOnFoot2D(-377.2835, -553.6105, 1.0, 1.0, false)) {
            $.boss_guard4.setObjRunToCoord(-377.4021, -556.0059); //RHS DOORWAY GOTO 2
            $.boss_guard4.setUsePednodeSeek(false /* FALSE */);
            $.boss_guard4_flag = 2;
          }
        }
        if ($.boss_guard4_flag == 2) {
          if ($.boss_guard4.locateOnFoot2D(-377.4021, -556.0059, 1.0, 1.0, false)) {
            $.boss_guard4.setObjRunToCoord(-373.7734, -558.1152); //BEHIND RIGHT PILLAR
            $.boss_guard4.setUsePednodeSeek(false /* FALSE */);
            $.boss_guard4_flag = 3;
          }
        }
        if ($.boss_guard4_flag == 3) {
          if ($.boss_guard4.locateStoppedOnFoot2D(-373.7734, -558.1152, 1.0, 1.0, false)) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard4.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard4_flag = 4;
          }
        }
        if ($.boss_guard4_flag == 10) {
          $.boss_guard4.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard4.markAsNoLongerNeeded();
        $.boss_guard4_flag = -1;
      }
    }


    if ($.boss_guard4_flag > 1 || $.boss_guard4_flag == -1) {
      if ($.boss_guard5_flag == 0) {
        $.boss_guard5 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -373.9800, -553.4843, 18.5448); //RHS DOORWAY GOON
        $.boss_guard5.setStayInSamePlace(true /* TRUE */);
        $.boss_guard5.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard5.setAccuracy(75);
        $.boss_guard5.clearThreatSearch();
        $.boss_guard5.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard5.setHeedThreats(true /* TRUE */);
        $.boss_guard5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard5.setObjRunToCoord(-377.2835, -553.6105); //RHS DOORWAY GOTO 1
        $.boss_guard5.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard5_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard5))) {
        if ($.boss_guard5_flag == 1) {
          if ($.boss_guard5.locateOnFoot2D(-377.2835, -553.6105, 1.0, 1.0, false)) {
            $.boss_guard5.setObjRunToCoord(-377.4021, -556.0059); //RHS DOORWAY GOTO 2
            $.boss_guard5.setUsePednodeSeek(false /* FALSE */);
            $.boss_guard5_flag = 2;
          }
        }
        if ($.boss_guard5_flag == 2) {
          if ($.boss_guard5.locateStoppedOnFoot2D(-377.4021, -556.0059, 1.0, 1.0, false)) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard5.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard5_flag = 3;
          }
        }
        if ($.boss_guard5_flag == 10) {
          $.boss_guard5.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard5.markAsNoLongerNeeded();
        $.boss_guard5_flag = -1;
      }
    }


    if ($.boss_guard3_flag > 1 || $.boss_guard3_flag == -1) {
      if ($.boss_guard6_flag == 0) {
        $.boss_guard6 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -384.1820, -553.5216, 18.5431); //LHS DOORWAY GOON
        $.boss_guard6.setStayInSamePlace(true /* TRUE */);
        $.boss_guard6.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard6.setAccuracy(75);
        $.boss_guard6.clearThreatSearch();
        $.boss_guard6.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard6.setHeedThreats(true /* TRUE */);
        $.boss_guard6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard6.setObjRunToCoord(-379.5186, -553.2346); //LHS DOORWAY GOTO 1
        $.boss_guard6.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard6_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard6))) {
        if ($.boss_guard6_flag == 1) {
          if ($.boss_guard6.locateOnFoot2D(-379.5186, -553.2346, 1.0, 1.0, false)) {
            $.boss_guard6.setObjRunToCoord(-379.5223, -556.0323); //LHS DOORWAY GOTO 2
            $.boss_guard6.setUsePednodeSeek(false /* FALSE */);
            $.boss_guard6_flag = 2;
          }
        }
        if ($.boss_guard6_flag == 2) {
          if ($.boss_guard6.locateStoppedOnFoot2D(-379.5223, -556.0323, 1.0, 1.0, false)) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard6.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard6_flag = 3;
          }
        }
        if ($.boss_guard6_flag == 10) {
          $.boss_guard6.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard6.markAsNoLongerNeeded();
        $.boss_guard6_flag = -1;
      }
    }


    if ($.boss_guard4_flag > 2 || $.boss_guard4_flag == -1) {
      if ($.boss_guard7_flag == 0) {
        $.boss_guard7 = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -357.9117, -560.4049, 18.5529); //GOONS BOTTOM CORRIDOR
        $.boss_guard7.setStayInSamePlace(true /* TRUE */);
        $.boss_guard7.giveWeapon(WEAPONTYPE_TEC9, 9999);
        $.boss_guard7.setAccuracy(75);
        $.boss_guard7.clearThreatSearch();
        $.boss_guard7.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.boss_guard7.setHeedThreats(true /* TRUE */);
        $.boss_guard7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.boss_guard7.setObjRunToCoord(-370.8983, -561.2952); //MIDDLE OF RHS FLOOR AREA CROUCHED
        $.boss_guard7.setUsePednodeSeek(false /* FALSE */);
        $.boss_guard7_flag = 1;
      }
      if (!(Char.IsDead($.boss_guard7))) {
        if ($.boss_guard7_flag == 1) {
          if ($.boss_guard7.locateStoppedOnFoot2D(-370.8983, -561.2952, 1.0, 1.0, false)) {
            $.boss_guard7.setCrouch(true /* TRUE */, 15000);
            $.boss_guard7_timer = $.game_timer + 800;
            $.boss_guard7_flag = 2;
          }
        }
        if ($.boss_guard7_flag == 2) {
          if ($.boss_guard7_timer < $.game_timer) {
            if (!(Char.IsDead($.dummy_player))) {
              $.boss_guard7.setObjAimGunAtChar($.dummy_player);
            }
            $.boss_guard7_flag = 3;
          }
        }
        if ($.boss_guard7_flag == 10) {
          $.boss_guard7.setObjKillPlayerOnFoot($.player1);
        }
      }
      else {
        $.boss_guard7.markAsNoLongerNeeded();
        $.boss_guard7_flag = -1;
      }
    }



    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    //-384.1820 -553.5216 18.5431 //LHS DOORWAY GOON		 //
    //-379.5186 -553.2346 //LHS DOORWAY GOTO 1				 //
    //-379.5223 -556.0323 //LHS DOORWAY GOTO 2 //18.6338	 //
    ///////////////////////////////////////////////////////////
    //-373.9800 -553.4843 18.5448 //RHS DOORWAY GOON		 //
    //-377.2835 -553.6105 //RHS DOORWAY GOTO 1				 //
    //-377.4021 -556.0059 //RHS DOORWAY GOTO 2 //18.6338	 //
    ///////////////////////////////////////////////////////////
    //-384.4772 -558.1151 //BEHIND LEFT PILLAR				 //
    //-372.7734 -558.1152 //BEHIND RIGHT PILLAR				 //
    //-376.9825 -559.1848 //CROUCH BY SONNI	boss_guard1		 //
    //-382.3959 -563.7010 //AT BOTTOM OF STEPS boss_guard2	 //
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    //-357.9117 -560.4049 18.5529 //GOONS BOTTOM CORRIDOR	 //
    //-365.2909 -557.8369 //BEHIND FAR RIGHT PILLAR			 //
    //-370.8983 -561.2952 //MIDDLE OF RHS FLOOR AREA CROUCHED//
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    //-358.5610 -560.1335 26.5396 //GOONS UPPER CORRIDOR	 //
    //-380.1727 -560.6678//FURTHEST FROM CORRIDOR			 //
    //-375.5527 -560.7495//MEDIUM FROM CORRIDOR				 //
    //-365.4941 -560.3325//CLOSEST TO CORRIDOR CROUCHED		 //
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    //-378.5680 -598.7501 25.4//HEALTH PICKUP SCARFACE ROOM	 //
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////

    //IF sonni_flag = 1
    //	IF NOT IS_CHAR_DEAD	sonni
    //		IF game_timer > sonni_timer
    //			GET_PLAYER_COORDINATES player1 player_x player_y player_z
    //			//CHAR_FOLLOW_PATH sonni player_x player_y player_z 3.0 0
    //			sonni_timer = game_timer + 500
    //		ENDIF
    //	ELSE
    ////		REMOVE_BLIP	sonni_blip
    //		sonni_timer = game_timer + 3000
    //		sonni_flag = -11
    //	ENDIF
    //ENDIF


    if ($.sonni_flag == -11 && $.vance_flag == -11) {
      if ($.game_timer > $.sonni_timer && $.game_timer > $.vance_timer) {
        // SCM GOTO → final_cutscene (not lowered; manual jump required)
        throw new Error("unresolved GOTO final_cutscene"); // fallback: would break linear control flow
      }
    }


    if ($.player_in_scripted_cutscene == 0) {
      if (!(Char.IsDead($.mafia_1))) {
        $.random_mafia = $.mafia_1;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_1.markAsNoLongerNeeded();
        $.mafia_1 = -1;
        $.mafia_1_timer = 0;
        $.mafia_1_cash = 0;
        $.mafia_1_flag = 0;
        $.random_mafia = $.mafia_1;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_1 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_2))) {
        $.random_mafia = $.mafia_2;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_2.markAsNoLongerNeeded();
        $.mafia_2 = -1;
        $.mafia_2_timer = 0;
        $.mafia_2_cash = 0;
        $.mafia_2_flag = 0;
        $.random_mafia = $.mafia_2;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_2 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_3))) {
        $.random_mafia = $.mafia_3;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_3.markAsNoLongerNeeded();
        $.mafia_3 = -1;
        $.mafia_3_timer = 0;
        $.mafia_3_cash = 0;
        $.mafia_3_flag = 0;
        $.random_mafia = $.mafia_3;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_3 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_4))) {
        $.random_mafia = $.mafia_4;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_4.markAsNoLongerNeeded();
        $.mafia_4 = -1;
        $.mafia_4_timer = 0;
        $.mafia_4_cash = 0;
        $.mafia_4_flag = 0;
        $.random_mafia = $.mafia_4;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_4 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_5))) {
        $.random_mafia = $.mafia_5;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_5.markAsNoLongerNeeded();
        $.mafia_5 = -1;
        $.mafia_5_timer = 0;
        $.mafia_5_cash = 0;
        $.mafia_5_flag = 0;
        $.random_mafia = $.mafia_5;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_5 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_6))) {
        $.random_mafia = $.mafia_6;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_6.markAsNoLongerNeeded();
        $.mafia_6 = -1;
        $.mafia_6_timer = 0;
        $.mafia_6_cash = 0;
        $.mafia_6_flag = 0;
        $.random_mafia = $.mafia_6;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_6 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_7))) {
        $.random_mafia = $.mafia_7;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_7.markAsNoLongerNeeded();
        $.mafia_7 = -1;
        $.mafia_7_timer = 0;
        $.mafia_7_cash = 0;
        $.mafia_7_flag = 0;
        $.random_mafia = $.mafia_7;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_7 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_8))) {
        $.random_mafia = $.mafia_8;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_8.markAsNoLongerNeeded();
        $.mafia_8 = -1;
        $.mafia_8_timer = 0;
        $.mafia_8_cash = 0;
        $.mafia_8_flag = 0;
        $.random_mafia = $.mafia_8;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_8 = $.random_mafia;
      }
      if (!(Char.IsDead($.mafia_9))) {
        $.random_mafia = $.mafia_9;
        await run_to_the_safe();  // SCM GOSUB run_to_the_safe
        if ($.failed_finale_flag == 1) {
          // SCM GOTO → mission_finale2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_finale2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.mafia_9.markAsNoLongerNeeded();
        $.mafia_9 = -1;
        $.mafia_9_timer = 0;
        $.mafia_9_cash = 0;
        $.mafia_9_flag = 0;
        $.random_mafia = $.mafia_9;
        await generate_new_ped();  // SCM GOSUB generate_new_ped
        $.mafia_9 = $.random_mafia;
      }
    }


  }
}




//////////////////////////////////////////////////////////////////////////////////////////

async function set_up_vance_shite() {
  //////////////////////////////////////////////////////////////////////////////////////////

  $.vance.shutUp(true /* TRUE */);
  $.vance.clearThreatSearch();
  $.vance.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.vance.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.vance.giveWeapon(WEAPONTYPE_RUGER, 9999);
  $.vance.setHealth(1000);
  $.vance.setAccuracy(85);
  $.vance.setStayInSamePlace(true /* TRUE */);
  $.vance.setOnlyDamagedByPlayer(true /* TRUE */);
  $.vance.setCanBeDamagedByMembersOfGang(GANG_PLAYER, false /* FALSE */);
  $.vance.setCanBeDamagedByMembersOfGang(GANG_STREET, false /* FALSE */);
  $.vance.setSuffersCriticalHits(false /* FALSE */);
  $.vance.setCanBeShotInVehicle(false /* FALSE */);
}



//////////////////////////////////////////////////////////////////////////////////////////

async function setup_goon_shite() {
  //////////////////////////////////////////////////////////////////////////////////////////

  $.random_mafia.setStayInSamePlace(true /* TRUE */);
  $.random_mafia.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 9999);
  $.random_mafia.clearThreatSearch();
  $.random_mafia.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.random_mafia.setHeedThreats(true /* TRUE */);
  $.random_mafia.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.random_mafia.turnToFaceChar($.scplayer);
}



//////////////////////////////////////////////////////////////////////////////////////////

async function generate_new_ped() {
  //////////////////////////////////////////////////////////////////////////////////////////

  $.random_mafia_counter = Math.RandomIntInRange(0, 11);
  if ($.random_mafia_counter == 0) {
    if (!(Car.IsDead($.mafia_limo_1))) {
      if ($.mafia_limo_1.isPassengerSeatFree(1)) {
        const _res180 = $.mafia_limo_1.getCoordinates();
$.x = _res180.x;
$.y = _res180.y;
$.z = _res180.z;
        if (!(Camera.IsPointOnScreen($.x, $.y, $.z, 4.0))) {
          $.random_mafia = Char.CreateAsPassenger($.mafia_limo_1, PEDTYPE_GANG_STREET, SPECIAL03, 1);
          $.random_mafia_counter = -1;
        }
        else {
          return;
        }
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 1) {
    if (!(Car.IsDead($.mafia_limo_2))) {
      if ($.mafia_limo_2.isPassengerSeatFree(1)) {
        const _res181 = $.mafia_limo_2.getCoordinates();
$.x = _res181.x;
$.y = _res181.y;
$.z = _res181.z;
        if (!(Camera.IsPointOnScreen($.x, $.y, $.z, 4.0))) {
          $.random_mafia = Char.CreateAsPassenger($.mafia_limo_2, PEDTYPE_GANG_STREET, SPECIAL04, 1);
          $.random_mafia_counter = -1;
        }
        else {
          return;
        }
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 2) {
    if (!(Car.IsDead($.mafia_limo_3))) {
      if ($.mafia_limo_3.isPassengerSeatFree(1)) {
        const _res182 = $.mafia_limo_3.getCoordinates();
$.x = _res182.x;
$.y = _res182.y;
$.z = _res182.z;
        if (!(Camera.IsPointOnScreen($.x, $.y, $.z, 4.0))) {
          $.random_mafia = Char.CreateAsPassenger($.mafia_limo_3, PEDTYPE_GANG_STREET, SPECIAL03, 1);
          $.random_mafia_counter = -1;
        }
        else {
          return;
        }
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 3) {
    if (!(World.IsPointObscuredByAMissionEntity(-354.0382, -527.9669, 11.7155, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-354.0382, -527.9669, 11.7155, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -354.0382, -527.9669, 11.7155);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 4) {
    if (!(World.IsPointObscuredByAMissionEntity(-390.1438, -541.0243, 16.2431, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-390.1438, -541.0243, 16.2431, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -390.1438, -541.0243, 16.2431);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 5) {
    if (!(World.IsPointObscuredByAMissionEntity(-458.3071, -606.5378, 11.7988, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-458.3071, -606.5378, 11.7988, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -458.3071, -606.5378, 11.7988);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 6) {
    if (!(World.IsPointObscuredByAMissionEntity(-455.4113, -561.6190, 11.7620, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-455.4113, -561.6190, 11.7620, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -455.4113, -561.6190, 11.7620);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 7) {
    if (!(World.IsPointObscuredByAMissionEntity(-412.1893, -605.7213, 16.2433, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-412.1893, -605.7213, 16.2433, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -412.1893, -605.7213, 16.2433);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 8) {
    if (!(World.IsPointObscuredByAMissionEntity(-370.0882, -615.1937, 9.3386, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-370.0882, -615.1937, 9.3386, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -370.0882, -615.1937, 9.3386);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  //IF random_mafia_counter	= 9
  //	IF NOT IS_POINT_OBSCURED_BY_A_MISSION_ENTITY -402.7597 -561.5503 17.9388 1.0 1.0 2.0
  //		IF NOT IS_POINT_ON_SCREEN -402.7597 -561.5503 17.9388 2.0
  //	    	CREATE_CHAR PEDTYPE_GANG_STREET SPECIAL04 -402.7597 -561.5503 17.9388 random_mafia
  //			random_mafia_counter = -1
  //		ELSE
  //			RETURN		 -403.0056 -560.2985 17.9388
  //		ENDIF
  //	ELSE
  //		RETURN
  //	ENDIF
  //ENDIF

  if ($.random_mafia_counter == 9) {
    if (!(World.IsPointObscuredByAMissionEntity(-335.9248, -579.0020, 18.5231, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-335.9248, -579.0020, 18.5231, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL03, -335.9248, -579.0020, 18.5231);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == 10) {
    if (!(World.IsPointObscuredByAMissionEntity(-329.9831, -582.3398, 34.5103, 1.0, 1.0, 2.0))) {
      if (!(Camera.IsPointOnScreen(-329.9831, -582.3398, 34.5103, 2.0))) {
        $.random_mafia = Char.Create(PEDTYPE_GANG_STREET, SPECIAL04, -329.9831, -582.3398, 34.5103);
        $.random_mafia_counter = -1;
      }
      else {
        return;
      }
    }
    else {
      return;
    }
  }
  if ($.random_mafia_counter == -1) {
    $.random_mafia.setStayInSamePlace(true /* TRUE */);
    $.random_mafia.giveWeapon(WEAPONTYPE_TEC9, 9999);
    $.random_mafia.clearThreatSearch();
    $.random_mafia.setThreatSearch(1 /* THREAT_PLAYER1 */);
    $.random_mafia.setCeaseAttackTimer(1500);
    $.random_mafia.setHeedThreats(true /* TRUE */);
    $.random_mafia.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.random_mafia.setAccuracy(75);
  }
}



//////////////////////////////////////////////////////////////////////////////////////////

async function run_to_the_safe() {
  //////////////////////////////////////////////////////////////////////////////////////////

  if ($.random_mafia == $.mafia_1) {
    $.random_mafia_timer = $.mafia_1_timer;
    $.random_mafia_cash = $.mafia_1_cash;
    $.random_mafia_flag = $.mafia_1_flag;
    $.random_mafia_x = -373.7542;
    $.random_mafia_y = -590.6248;
    $.random_mafia_z = 24.2896;
    $.mafia_stuck_timer = $.mafia_1_stuck_timer;
    $.mafia_stuck_x = mafia_1_stuck_x;
    $.mafia_stuck_y = mafia_1_stuck_y;
    $.mafia_stuck_z = mafia_1_stuck_z;
  }


  if ($.random_mafia == $.mafia_2) {
    $.random_mafia_timer = $.mafia_2_timer;
    $.random_mafia_cash = $.mafia_2_cash;
    $.random_mafia_flag = $.mafia_2_flag;
    $.random_mafia_x = -381.0802;
    $.random_mafia_y = -595.4677;
    $.random_mafia_z = 24.7818;
    $.mafia_stuck_timer = $.mafia_2_stuck_timer;
    $.mafia_stuck_x = mafia_2_stuck_x;
    $.mafia_stuck_y = mafia_2_stuck_y;
    $.mafia_stuck_z = mafia_2_stuck_z;
  }


  if ($.random_mafia == $.mafia_3) {
    $.random_mafia_timer = $.mafia_3_timer;
    $.random_mafia_cash = $.mafia_3_cash;
    $.random_mafia_flag = $.mafia_3_flag;
    $.random_mafia_x = -378.6870;
    $.random_mafia_y = -597.9142;
    $.random_mafia_z = 24.7818;
    $.mafia_stuck_timer = $.mafia_3_stuck_timer;
    $.mafia_stuck_x = mafia_3_stuck_x;
    $.mafia_stuck_y = mafia_3_stuck_y;
    $.mafia_stuck_z = mafia_3_stuck_z;
  }


  if ($.random_mafia == $.mafia_4) {
    $.random_mafia_timer = $.mafia_4_timer;
    $.random_mafia_cash = $.mafia_4_cash;
    $.random_mafia_flag = $.mafia_4_flag;
    $.random_mafia_x = -382.3163;
    $.random_mafia_y = -589.9626;
    $.random_mafia_z = 24.2934;
    $.mafia_stuck_timer = $.mafia_4_stuck_timer;
    $.mafia_stuck_x = mafia_4_stuck_x;
    $.mafia_stuck_y = mafia_4_stuck_y;
    $.mafia_stuck_z = mafia_4_stuck_z;
  }


  if ($.random_mafia == $.mafia_5) {
    $.random_mafia_timer = $.mafia_5_timer;
    $.random_mafia_cash = $.mafia_5_cash;
    $.random_mafia_flag = $.mafia_5_flag;
    $.random_mafia_x = -379.9821;
    $.random_mafia_y = -591.7104;
    $.random_mafia_z = 24.5318;
    $.mafia_stuck_timer = $.mafia_5_stuck_timer;
    $.mafia_stuck_x = mafia_5_stuck_x;
    $.mafia_stuck_y = mafia_5_stuck_y;
    $.mafia_stuck_z = mafia_5_stuck_z;
  }


  if ($.random_mafia == $.mafia_6) {
    $.random_mafia_timer = $.mafia_6_timer;
    $.random_mafia_cash = $.mafia_6_cash;
    $.random_mafia_flag = $.mafia_6_flag;
    $.random_mafia_x = -380.1006;
    $.random_mafia_y = -586.4345;
    $.random_mafia_z = 24.2804;
    $.mafia_stuck_timer = $.mafia_6_stuck_timer;
    $.mafia_stuck_x = $.mafia_6_stuck_x;
    $.mafia_stuck_y = $.mafia_6_stuck_y;
    $.mafia_stuck_z = $.mafia_6_stuck_z;
  }


  if ($.random_mafia == $.mafia_7) {
    $.random_mafia_timer = $.mafia_7_timer;
    $.random_mafia_cash = $.mafia_7_cash;
    $.random_mafia_flag = $.mafia_7_flag;
    $.random_mafia_x = -374.6616;
    $.random_mafia_y = -586.1156;
    $.random_mafia_z = 24.2952;
    $.mafia_stuck_timer = $.mafia_7_stuck_timer;
    $.mafia_stuck_x = $.mafia_7_stuck_x;
    $.mafia_stuck_y = $.mafia_7_stuck_y;
    $.mafia_stuck_z = $.mafia_7_stuck_z;
  }


  if ($.random_mafia == $.mafia_8) {
    $.random_mafia_timer = $.mafia_8_timer;
    $.random_mafia_cash = $.mafia_8_cash;
    $.random_mafia_flag = $.mafia_8_flag;
    $.random_mafia_x = -376.7446;
    $.random_mafia_y = -586.6362;
    $.random_mafia_z = 24.2921;
    $.mafia_stuck_timer = $.mafia_8_stuck_timer;
    $.mafia_stuck_x = $.mafia_8_stuck_x;
    $.mafia_stuck_y = $.mafia_8_stuck_y;
    $.mafia_stuck_z = $.mafia_8_stuck_z;
  }


  if ($.random_mafia == $.mafia_9) {
    $.random_mafia_timer = $.mafia_9_timer;
    $.random_mafia_cash = $.mafia_9_cash;
    $.random_mafia_flag = $.mafia_9_flag;
    $.random_mafia_x = -378.8374;
    $.random_mafia_y = -591.7079;
    $.random_mafia_z = 24.5318;
    $.mafia_stuck_timer = $.mafia_9_stuck_timer;
    $.mafia_stuck_x = $.mafia_9_stuck_x;
    $.mafia_stuck_y = $.mafia_9_stuck_y;
    $.mafia_stuck_z = $.mafia_9_stuck_z;
  }


  if ($.random_mafia_flag == 0) {
    if ($.random_mafia.locateOnFoot3D($.the_safe_x, $.the_safe_y, $.the_safe_z, 1.0, 1.0, 2.0, false)) {
      if ($.random_mafia.isObjNoObj()) {
        //IF NOT IS_CHAR_SHOOTING	random_mafia
        $.random_mafia.setHeading(226.1973);
        $.random_mafia.setMoney($.random_mafia_cash);
        $.random_mafia.clearFollowPath();
        $.random_mafia.setIdle();
        $.random_mafia.setObjNoObj();
        $.random_mafia.setCrouch(true /* TRUE */, 999999999);
        $.crouch_timer = $.game_timer + 1000;
        $.random_mafia_flag = 2;
        //ENDIF

      }
    }
  }


  if ($.random_mafia_flag == 0) {
    if ($.game_timer > $.random_mafia_timer) {
      if (!($.random_mafia.isInAnyCar())) {
        $.someone_taxing_safe = 0;
        if ($.mafia_1_flag == 2 || $.mafia_2_flag == 2 || $.mafia_3_flag == 2 || $.mafia_4_flag == 2 || $.mafia_5_flag == 2) {
          $.someone_taxing_safe = 1;
        }
        if ($.mafia_6_flag == 2 || $.mafia_7_flag == 2 || $.mafia_8_flag == 2 || $.mafia_9_flag == 2) {
          $.someone_taxing_safe = 1;
        }
        if ($.someone_taxing_safe == 0) {
          $.random_mafia.followPath($.the_safe_x, $.the_safe_y, $.the_safe_z, 4.0, 1);
        }
        else {
          $.random_mafia.followPath($.random_mafia_x, $.random_mafia_y, $.random_mafia_z, 3.0, 1);
        }
        //			IF NOT IS_POINT_OBSCURED_BY_A_MISSION_ENTITY the_safe_x the_safe_y the_safe_z 1.0 1.0 2.0
        //				CHAR_FOLLOW_PATH random_mafia the_safe_x the_safe_y the_safe_z 4.0 1
        //			ELSE
        //				CHAR_FOLLOW_PATH random_mafia random_mafia_x random_mafia_y random_mafia_z 3.0 1
        //			ENDIF
        $.random_mafia_timer = $.game_timer + 1000;
      }
      else {
        $.random_mafia.setObjLeaveAnyCar();
      }
    }
    if (!($.random_mafia_x == 0.0)) {
      if ($.random_mafia.locateOnFoot3D($.random_mafia_x, $.random_mafia_y, $.random_mafia_z, 1.0, 1.0, 2.0, false)) {
        $.random_mafia.setObjNoObj();
        $.random_mafia.clearFollowPath();
        $.random_mafia.setIdle();
        if (!($.player1.isInArea3D(-386.123, -599.355, 24.786, -370.926, -584.437, 31.667, false))) {
          $.random_mafia.turnToFaceCoord(-378.4397, -582.1611, 24.2722);
        }
        else {
          $.random_mafia.setObjKillPlayerOnFoot($.player1);
        }
        $.random_mafia_timer = $.game_timer + 3000;
        $.random_mafia_flag = 3;
      }
    }
  }


  if ($.random_mafia_flag == 2) {
    if ($.random_mafia.locateOnFoot3D($.the_safe_x, $.the_safe_y, $.the_safe_z, 1.0, 1.0, 2.0, false)) {
      //	CLEAR_CHAR_FOLLOW_PATH random_mafia
      if ($.random_mafia.isObjNoObj()) {
        //		CHAR_SET_IDLE random_mafia
        //		SET_CHAR_OBJ_NO_OBJ	random_mafia
        //IF NOT IS_CHAR_SHOOTING	random_mafia
        //GET_CHAR_HEADING random_mafia heading
        //			SET_CHAR_HEED_THREATS random_mafia FALSE
        //			CLEAR_CHAR_THREAT_SEARCH random_mafia
        //IF NOT heading = 226.1973
        //SET_CHAR_HEADING random_mafia 226.1973
        //SET_CHAR_CROUCH	random_mafia TRUE 99999999
        //ENDIF
        if ($.crouch_timer < $.game_timer) {
          $.random_mafia.setCrouch(true /* TRUE */, 999999999);
        }
        $.player_score = $.player1.storeScore();
        if ($.player_score < 1) {
          Text.PrintNow("FIN_B7", 5000, 1); //~r~The mafia has stolen all your money.
          $.failed_finale_flag = 1;
          return;
        }
        $.player1.addScore(-1);
        ++$.random_mafia_cash;
        $.random_mafia.setMoney($.random_mafia_cash);
        //ENDIF

      }
      //ELSE
      //SET_CHAR_OBJ_RUN_TO_COORD random_mafia the_safe_x the_safe_y
      // 	SET_CHAR_USE_PEDNODE_SEEK random_mafia FALSE

    }
  }
  else {
    if (!($.random_mafia.isInArea3D(-386.507, -600.089, 24.286, -370.542, -583.413, 31.667, false))) {
      if ($.random_mafia.locateOnFoot3D($.mafia_stuck_x, $.mafia_stuck_y, $.mafia_stuck_z, 2.0, 2.0, 2.0, false)) {
        if ($.mafia_stuck_timer > $.game_timer) {
          $.random_mafia.markAsNoLongerNeeded();
        }
      }
      else {
        $.mafia_stuck_timer = $.game_timer + 5000;
        const _res183 = $.random_mafia.getCoordinates();
$.mafia_stuck_x = _res183.x;
$.mafia_stuck_y = _res183.y;
$.mafia_stuck_z = _res183.z;
      }
    }
  }

  //IF random_mafia_flag = 3
  //	IF game_timer > random_mafia_timer
  //		IF IS_POINT_OBSCURED_BY_A_MISSION_ENTITY the_safe_x the_safe_y the_safe_z 1.0 1.0 2.0
  //			MARK_CHAR_AS_NO_LONGER_NEEDED random_mafia
  //		ENDIF
  //		random_mafia_timer = 0
  //		random_mafia_flag = 0
  //	ENDIF
  //ENDIF


  if ($.random_mafia == $.mafia_1) {
    $.mafia_1_timer = $.random_mafia_timer;
    $.mafia_1_cash = $.random_mafia_cash;
    $.mafia_1_flag = $.random_mafia_flag;
    $.mafia_1_stuck_timer = $.mafia_stuck_timer;
    mafia_1_stuck_x = $.mafia_stuck_x;
    mafia_1_stuck_y = $.mafia_stuck_y;
    mafia_1_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_2) {
    $.mafia_2_timer = $.random_mafia_timer;
    $.mafia_2_cash = $.random_mafia_cash;
    $.mafia_2_flag = $.random_mafia_flag;
    $.mafia_2_stuck_timer = $.mafia_stuck_timer;
    mafia_2_stuck_x = $.mafia_stuck_x;
    mafia_2_stuck_y = $.mafia_stuck_y;
    mafia_2_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_3) {
    $.mafia_3_timer = $.random_mafia_timer;
    $.mafia_3_cash = $.random_mafia_cash;
    $.mafia_3_flag = $.random_mafia_flag;
    $.mafia_3_stuck_timer = $.mafia_stuck_timer;
    mafia_3_stuck_x = $.mafia_stuck_x;
    mafia_3_stuck_y = $.mafia_stuck_y;
    mafia_3_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_4) {
    $.mafia_4_timer = $.random_mafia_timer;
    $.mafia_4_cash = $.random_mafia_cash;
    $.mafia_4_flag = $.random_mafia_flag;
    $.mafia_4_stuck_timer = $.mafia_stuck_timer;
    mafia_4_stuck_x = $.mafia_stuck_x;
    mafia_4_stuck_y = $.mafia_stuck_y;
    mafia_4_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_5) {
    $.mafia_5_timer = $.random_mafia_timer;
    $.mafia_5_cash = $.random_mafia_cash;
    $.mafia_5_flag = $.random_mafia_flag;
    $.mafia_5_stuck_timer = $.mafia_stuck_timer;
    mafia_5_stuck_x = $.mafia_stuck_x;
    mafia_5_stuck_y = $.mafia_stuck_y;
    mafia_5_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_6) {
    $.mafia_6_timer = $.random_mafia_timer;
    $.mafia_6_cash = $.random_mafia_cash;
    $.mafia_6_flag = $.random_mafia_flag;
    $.mafia_6_stuck_timer = $.mafia_stuck_timer;
    $.mafia_6_stuck_x = $.mafia_stuck_x;
    $.mafia_6_stuck_y = $.mafia_stuck_y;
    $.mafia_6_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_7) {
    $.mafia_7_timer = $.random_mafia_timer;
    $.mafia_7_cash = $.random_mafia_cash;
    $.mafia_7_flag = $.random_mafia_flag;
    $.mafia_7_stuck_timer = $.mafia_stuck_timer;
    $.mafia_7_stuck_x = $.mafia_stuck_x;
    $.mafia_7_stuck_y = $.mafia_stuck_y;
    $.mafia_7_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_8) {
    $.mafia_8_timer = $.random_mafia_timer;
    $.mafia_8_cash = $.random_mafia_cash;
    $.mafia_8_flag = $.random_mafia_flag;
    $.mafia_8_stuck_timer = $.mafia_stuck_timer;
    $.mafia_8_stuck_x = $.mafia_stuck_x;
    $.mafia_8_stuck_y = $.mafia_stuck_y;
    $.mafia_8_stuck_z = $.mafia_stuck_z;
  }


  if ($.random_mafia == $.mafia_9) {
    $.mafia_9_timer = $.random_mafia_timer;
    $.mafia_9_cash = $.random_mafia_cash;
    $.mafia_9_flag = $.random_mafia_flag;
    $.mafia_9_stuck_timer = $.mafia_stuck_timer;
    $.mafia_9_stuck_x = $.mafia_stuck_x;
    $.mafia_9_stuck_y = $.mafia_stuck_y;
    $.mafia_9_stuck_z = $.mafia_stuck_z;
  }
}




async function final_cutscene() {


  $.player1.makeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(false /* OFF */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SetPedDensityMultiplier(0.0);
  World.ClearArea(-354.419, -569.529, 30.0, 200.0, false);

  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


  $.mafia_1.delete();
  $.mafia_2.delete();
  $.mafia_3.delete();
  $.mafia_4.delete();
  $.mafia_5.delete();
  $.mafia_6.delete();
  $.mafia_7.delete();
  $.mafia_8.delete();
  $.mafia_9.delete();
  $.sonni.delete();
  $.vance.delete();
  $.boss_guard1.delete();
  $.boss_guard2.delete();
  $.boss_guard3.delete();
  $.boss_guard4.delete();
  $.boss_guard5.delete();
  $.boss_guard6.delete();
  $.boss_guard7.delete();
  $.boss_guard8.delete();
  $.boss_guard9.delete();
  $.boss_guard10.delete();
  $.boss_guard11.delete();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  Streaming.LoadSpecialCharacter(1, "csplay");
  Streaming.LoadSpecialCharacter(2, "csken");


  Streaming.LoadSpecialModel(CUTOBJ01, "mfour");


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(CUTOBJ01))) {
    await asyncWait(0);
  }


  Cutscene.Load("FINALE");
  Audio.LoadEndOfGameTune();


  Camera.SetNearClip(0.1);
  Cutscene.SetOffset(-378.62, -552.676, 18.534);


  Streaming.SetAreaVisible(VIS_MANSION);
  $.flag_player_in_mansion = 1;
  World.SwitchRubbish(false /* OFF */);
  World.SetExtraColors(7, false /* FALSE */);
  Streaming.LoadScene(-378.4660, -596.1799, 24.7818);


  $.cs_player = CutsceneObject.Create(SPECIAL01);
  $.cs_player.setAnim("csplay");


  $.cs_ken = CutsceneObject.Create(SPECIAL02);
  $.cs_ken.setAnim("csken");


  $.cs_lwchara = CutsceneObject.Create(CUTOBJ01);
  $.cs_lwchara.setAnim("mfour01");


  $.player1.setHeading(270.0);


  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();
  Audio.PlayEndOfGameTune();
  Audio.SetMusicDoesFade(false /* FALSE */);


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 12797) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_01", 10000, 1); //Tommy?


  while ($.cs_time < 14715) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_02", 10000, 1); //Oh my god, Tommy! What happened?


  while ($.cs_time < 17875) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_03", 10000, 1); //What does it look like?


  while ($.cs_time < 19401) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_04", 10000, 1); //It looks like you ruined your suit!


  while ($.cs_time < 21176) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_05", 10000, 1); //and Tommy, that was a beautiful suit! Tommy, what happened?


  while ($.cs_time < 26212) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_06", 10000, 1); //I had a disagreement with a business associate, you know how it is.


  while ($.cs_time < 29463) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_07", 10000, 1); //Tommy, I have a disagreement with a business associate, I send them an angry letter.


  while ($.cs_time < 32477) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_08", 10000, 1); //Maybe I pee in their mailbox. I don't start world war three.


  while ($.cs_time < 36719) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_09", 10000, 1); //You know, maybe you should speak to my shrink...


  while ($.cs_time < 39025) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_10", 10000, 1); //That stupid prick, Lance...


  while ($.cs_time < 41031) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_11", 10000, 1); //Tommy. I never liked that guy, okay?


  while ($.cs_time < 43337) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_12", 10000, 1); //He's neurotic, he's insecure, he's self-centered- that guy's an asshole!


  while ($.cs_time < 47738) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_13", 10000, 1); //I'm glad that you took him out!


  while ($.cs_time < 49016) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_14", 10000, 1); //I don't think we're gonna be getting any more heat from up north either...


  while ($.cs_time < 54048) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_15", 10000, 1); //...'cause there ain't no 'up north', anymore.


  while ($.cs_time < 57610) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_16", 10000, 1); //It's all down south now.


  while ($.cs_time < 59960) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_17", 10000, 1); //Wait, does that mean what I think it means, Tommy baby?


  while ($.cs_time < 62722) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_18", 10000, 1); //What do you think it means?


  while ($.cs_time < 64406) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_19", 10000, 1); //That we're in charge...  I mean, that you're in charge. Oh, Tommy...


  while ($.cs_time < 69535) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_20", 10000, 1); //You know, Ken, this could be the beginning of a beautiful business relationship....


  while ($.cs_time < 74550) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_21", 10000, 1); //After all, you're a conniving, backstabbing, two-bit thief


  while ($.cs_time < 77761) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_22", 10000, 1); //and I'm a convicted psychotic killer and drug dealer.


  while ($.cs_time < 81486) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FIN3_23", 10000, 1); //I know. Ain't it beautiful?


  while ($.cs_time < 86784) {
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


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(CUTOBJ01);


  $.player1.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* TRUE */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  $.flag_player_in_mansion = 0;
  World.SwitchRubbish(true /* ON */);
  World.ClearExtraColors(false /* FALSE */);
  $.player1.setCoordinates(198.4252, -434.6284, 9.5332);


  Credits.Start();
  $.button_pressed = 0;


  Camera.SetGenerateCarsAround(true /* TRUE */);
  $.game_timer = Clock.GetGameTimer();
  await asyncWait(0);
  await asyncWait(0);
  Hud.SwitchWidescreen(true /* ON */);
  $.game_timer = Clock.GetGameTimer();
  $.credits_shot_timer = $.game_timer;
  Weather.ForceNow(0 /* WEATHER_SUNNY */);


  while (!(Credits.AreFinished())) {
    await asyncWait(0);
    $.game_timer = Clock.GetGameTimer();
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      if ($.button_pressed == 1) {
        Credits.Stop();
      }
    }
    else {
      $.button_pressed = 1;
    }
    if ($.credits_shot_counter == 0) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFixedPosition(315.4413, -606.3295, 10.9994, 0.0, 0.0, 0.0); //BASKETBALL COURTS
        Camera.PointAtPoint(315.8044, -605.4032, 11.1004, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(18, 0);
        $.random_mafia.delete();
        $.random_mafia = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 315.4413, -606.3295, 10.9994);
        //			GET_GROUND_Z_FOR_3D_COORD 315.4413 -606.3295 10.9994 ground_z
        //			SET_PLAYER_COORDINATES player1 315.4413 -606.3295 10.9994
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
        //flag_faded_out = 1

      }
    }
    if ($.credits_shot_counter == 1) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 1 /* FADE_IN */);
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
        //flag_faded_out = 0

      }
    }
    if ($.credits_shot_counter == 2) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 0 /* FADE_OUT */);
        $.credits_shot_timer = $.game_timer + 3500;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 3) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFixedPosition(-57.0090, -1579.4728, 11.6604, 0.0, 0.0, 0.0); //washington south daytime
        Camera.PointAtPoint(-57.1214, -1578.4846, 11.7650, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(14, 0);
        $.random_mafia.delete();
        $.random_mafia = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, -57.0090, -1579.4728, 11.6604);
        //			SET_PLAYER_COORDINATES player1 -57.0090 -1579.4728 11.6604
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
        //flag_faded_out = 1

      }
    }
    if ($.credits_shot_counter == 4) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 1 /* FADE_IN */);
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
        //flag_faded_out = 0

      }
    }
    if ($.credits_shot_counter == 5) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 0 /* FADE_OUT */);
        $.credits_shot_timer = $.game_timer + 3500;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 6) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFixedPosition(-31.4477, -942.5128, 11.2897, 0.0, 0.0, 0.0); //small mall
        Camera.PointAtPoint(-30.4814, -942.2845, 11.4088, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(15, 0);
        $.random_mafia.delete();
        $.random_mafia = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, -31.4477, -942.5128, 11.2897);
        //			SET_PLAYER_COORDINATES player1 -31.4477 -942.5128 11.2897
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
        //flag_faded_out = 1

      }
    }
    if ($.credits_shot_counter == 7) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 1 /* FADE_IN */);
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
        //flag_faded_out = 0

      }
    }
    if ($.credits_shot_counter == 8) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 0 /* FADE_OUT */);
        $.credits_shot_timer = $.game_timer + 3500;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 9) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFixedPosition(527.1948, -1101.6581, 12.3979, 0.0, 0.0, 0.0); //BEACH DAYTIME
        Camera.PointAtPoint(526.1959, -1101.6124, 12.4088, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(12, 0);
        $.random_mafia.delete();
        $.random_mafia = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 527.1948, -1101.6581, 12.3979);
        //			SET_PLAYER_COORDINATES player1 527.1948 -1101.6581 12.3979
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 10) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 1 /* FADE_IN */);
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 11) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 0 /* FADE_OUT */);
        $.credits_shot_timer = $.game_timer + 3500;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 12) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFixedPosition(329.8244, -1123.4187, 29.4180, 0.0, 0.0, 0.0); //ocean drive nighttime
        Camera.PointAtPoint(329.5483, -1122.4576, 29.4027, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(2, 0);
        $.random_mafia.delete();
        $.random_mafia = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 329.8244, -1123.4187, 29.4180);
        //			SET_PLAYER_COORDINATES player1 329.8244 -1123.4187 29.4180
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 13) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 1 /* FADE_IN */);
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 14) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 0 /* FADE_OUT */);
        $.credits_shot_timer = $.game_timer + 3500;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 15) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFixedPosition(420.3749, -179.7319, 12.2077, 0.0, 0.0, 0.0); //RIVER MIDDAY
        Camera.PointAtPoint(420.3214, -178.7335, 12.1930, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(11, 0);
        $.random_mafia.delete();
        $.random_mafia = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, 420.3749, -179.7319, 12.2077);
        //			SET_PLAYER_COORDINATES player1 420.3749 -179.7319 12.2077
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 16) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 1 /* FADE_IN */);
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 17) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 0 /* FADE_OUT */);
        $.credits_shot_timer = $.game_timer + 3500;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 18) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFixedPosition(-397.3825, 22.9746, 47.9553, 0.0, 0.0, 0.0); //RIVER MIDDAY
        Camera.PointAtPoint(-396.5451, 23.4814, 47.7505, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(5, 45);
        $.random_mafia.delete();
        $.random_mafia = Char.Create(4 /* PEDTYPE_CIVMALE */, MALE01, -391.2471, 26.5135, 25.2721);
        //			SET_PLAYER_COORDINATES player1 420.3749 -179.7319 12.2077
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 19) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 1 /* FADE_IN */);
        $.credits_shot_timer = $.game_timer + 20000;
        ++$.credits_shot_counter;
      }
    }
    if ($.credits_shot_counter == 20) {
      if ($.credits_shot_timer < $.game_timer) {
        Camera.SetFadingColor(0, 0, 1);
        Camera.DoFade(3000, 0 /* FADE_OUT */);
        $.credits_shot_timer = $.game_timer + 3500;
        $.credits_shot_counter = 21;
      }
    }



  }


  Audio.SetMusicDoesFade(true /* TRUE */);
  //DO_FADE 1500 FADE_OUT
  //WAIT 1500
  //WHILE GET_FADING_STATUS
  //	WAIT 0
  //ENDWHILE


  Audio.StopEndOfGameTune();
  $.random_mafia.delete();
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.SetGenerateCarsAround(false /* FALSE */);
  Weather.Release();


  World.ClearArea(-379.2, -536.4, 16.2, 1.0, true /* TRUE */);
  $.player1.setCoordinates(-379.2, -536.4, 16.2);
  $.player1.setHeading(0.0);
  Camera.SetBehindPlayer();
  Streaming.SetAreaVisible(VIS_MAIN_MAP);
  $.flag_player_in_mansion = 0;
  World.SwitchRubbish(true /* ON */);
  World.ClearExtraColors(false /* FALSE */);
  Streaming.LoadScene(-379.2, -536.4, 16.2);
  Camera.SetFadingColor(0, 0, 1);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.player1.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();
  World.SetPedDensityMultiplier(1.0);
  World.ClearArea(-354.419, -569.529, 30.0, 200.0, false);


  $.player1.setMood(PLAYER_MOOD_CALM, 60000);


  /////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////


  // SCM GOTO → mission_finale2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_finale2_passed"); // fallback: would break linear control flow
}


//////////////////////////////////////////////////////////////////////////////////////////

async function onFailed() {
  //////////////////////////////////////////////////////////////////////////////////////////

  Text.PrintBig("M_FAIL", 5000, 1);

  // handle when the player dies and he has killed sonny

  Game.ClearThreatForPedType(PEDTYPE_GANG_PLAYER, THREAT_GANG_STREET);
  Game.ClearThreatForPedType(PEDTYPE_GANG_STREET, THREAT_GANG_PLAYER);
  Game.ClearThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
  Gang.SetWeapons(GANG_PLAYER, WEAPONTYPE_TEC9, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetWeapons(GANG_STREET, 2 /* WEAPONTYPE_PISTOL */, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetPedModels(GANG_STREET, SGA, SGB);
  $.scplayer.setCanBeDamagedByMembersOfGang(GANG_PLAYER, true /* TRUE */);
  $.player_score = $.player1.storeScore();
  $.player_score *= -1;
  $.player1.addScore($.player_score);
  $.player1.addScore($.stored_player_score);
}




//////////////////////////////////////////////////////////////////////////////////////////

async function mission_finale2_passed() {
  //////////////////////////////////////////////////////////////////////////////////////////


  $.flag_finale_mission2_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 30000, 5000, 1);
  $.player1.addScore(30000);
  $.player1.clearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed("FIN_1");
  Stat.PlayerMadeProgress(1);
  Game.ClearThreatForPedType(PEDTYPE_GANG_PLAYER, THREAT_GANG_STREET);
  Game.ClearThreatForPedType(PEDTYPE_GANG_STREET, THREAT_GANG_PLAYER);
  Game.ClearThreatForPedType(PEDTYPE_GANG_STREET, 1 /* THREAT_PLAYER1 */);
  Gang.SetWeapons(GANG_PLAYER, 3 /* WEAPONTYPE_UZI */, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetWeapons(GANG_STREET, 2 /* WEAPONTYPE_PISTOL */, 0 /* WEAPONTYPE_UNARMED */);
  Gang.SetPedModels(GANG_STREET, SGA, SGB);
  $.scplayer.setCanBeDamagedByMembersOfGang(GANG_PLAYER, true /* TRUE */);
  // START_NEW_SCRIPT gang_member_loop
  Weather.SetAllowHurricanes(true /* TRUE */);


  $.baron_contact_blip.remove();
  $.protect_contact_blip.remove();
  $.protect_contact_blip = Blip.AddShortRangeSpriteForCoord(-378.3, -579.8, 24.5, RADAR_SPRITE_TOMMY);


  World.SetPedDensityMultiplier(1.0);


  if ($.hunter_created == 0) {
    Text.PrintHelp("PICK10"); //Hunter now available from the Army Barracks!
    //CREATE_CAR_GENERATOR -1681.2 -103.7 14.7 180.0 hunter -1 -1 0 0 0 0 10000 gen_car150 //at army barracks
    $.gen_car150.switch(101);
    $.hunter_created = 1;
  }
  else {
    Text.PrintHelp("APACHE");
    //CREATE_CAR_GENERATOR -72.4 -1607.9 12.7 0.0 hunter -1 -1 0 0 0 0 10000 south_beach_hunter //at army barracks
    $.south_beach_hunter.switch(101);
  }
}




//////////////////////////////////////////////////////////////////////////////////////////

async function cleanup() {
  //////////////////////////////////////////////////////////////////////////////////////////
  // handle when the player dies and he has killed sonny

  $.health_blip.remove();
  $.safe_blip.remove();
  $.health_blip2.remove();

  //SET_ZONE_PED_INFO ZONE DAY RATIO 0 1 2 3 4 5 6    7 8 Police

  Zone.SetPedInfo("GANG1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0); // Mansion
  Zone.SetPedInfo("GANG1", 0 /* NIGHT */, 12, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0);


  Path.SwitchPedRoadsOn(-522.414, -662.451, -9.357, -222.414, -502.451, 90.643); // ENTIRE MANSION AREA


  Streaming.MarkModelAsNoLongerNeeded(STRETCH);
  Streaming.MarkModelAsNoLongerNeeded(173 /* COLT45 */);
  Streaming.MarkModelAsNoLongerNeeded(RUGER);
  //MARK_MODEL_AS_NO_LONGER_NEEDED KNIFECUR

  Streaming.MarkModelAsNoLongerNeeded(TEC9);


  $.mafia_1.removeElegantly();
  $.mafia_2.removeElegantly();
  $.mafia_3.removeElegantly();
  $.mafia_4.removeElegantly();
  $.mafia_5.removeElegantly();
  $.mafia_6.removeElegantly();
  $.mafia_7.removeElegantly();
  $.mafia_8.removeElegantly();
  $.mafia_9.removeElegantly();
  $.sonni.removeElegantly();
  $.vance.removeElegantly();
  $.boss_guard1.removeElegantly();
  $.boss_guard2.removeElegantly();
  $.boss_guard3.removeElegantly();
  $.boss_guard4.removeElegantly();
  $.boss_guard5.removeElegantly();
  $.boss_guard6.removeElegantly();
  $.boss_guard7.removeElegantly();
  $.boss_guard8.removeElegantly();
  $.boss_guard9.removeElegantly();
  $.boss_guard10.removeElegantly();
  $.boss_guard11.removeElegantly();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);


  $.health_pickup_on_roof.remove();
  $.health_pickup2.remove();
  $.python_pickup2.remove();


  $.timer_mobile_start = Clock.GetGameTimer();


  ONMISSION = 0;


  Mission.Finish();
}

export async function finale() {
  // Mission start stuff


  await body();  // SCM GOSUB mission_start_finale2


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await onFailed();  // SCM GOSUB mission_finale2_failed
  }


  await cleanup();  // SCM GOSUB mission_cleanup_finale2



  // Variables for mission

  // VAR_INT mafia_limo_1 mafia_limo_2 mafia_limo_3 player_score failed_finale_flag player_in_scripted_cutscene
  // VAR_INT armour_pickup python_pickup health_blip_added python_pickup2 dummy_player health_blip2
  // VAR_INT health_message at_safe_message stored_player_score health_blip safe_blip health_pickup2
  // VAR_INT stealing_from_safe_a stealing_from_safe_b audio_bit_flag player_at_mansion health_pickup_on_roof
  // VAR_INT barrel01 barrel02 barrel03 barrel04 barrel05 barrel06 barrel07 barrel08 barrel09 barrel10
  // VAR_INT barrel11 barrel12 barrel13 barrel14 barrel15 barrel16 barrel17 barrel18 barrel19 barrel20
  // VAR_FLOAT the_safe_x the_safe_y the_safe_z


  // VAR_INT vance vance_timer vance_flag avoid_a_nasty_crash_flag someone_taxing_safe crouch_timer
  // VAR_INT sonni sonni_timer sonni_flag hold_off_shooting_timer


  // VAR_INT random_mafia random_mafia_flag random_mafia_timer random_mafia_cash random_mafia_counter mafia_stuck_timer
  // VAR_FLOAT random_mafia_x random_mafia_y random_mafia_z mafia_stuck_x mafia_stuck_y mafia_stuck_z


  // VAR_INT credits_shot_counter credits_shot_timer
  // VAR_INT boss_guard1 boss_guard2 boss_guard3 boss_guard4 boss_guard5
  // VAR_INT boss_guard6 boss_guard7 boss_guard8 boss_guard9 boss_guard10 boss_guard11
  // VAR_INT boss_guard1_flag boss_guard1_timer
  // VAR_INT boss_guard2_flag boss_guard2_timer
  // VAR_INT boss_guard3_flag
  // VAR_INT boss_guard4_flag
  // VAR_INT boss_guard5_flag
  // VAR_INT boss_guard6_flag
  // VAR_INT boss_guard7_flag boss_guard7_timer
  // VAR_INT boss_guard8_flag
  // VAR_INT boss_guard9_flag
  // VAR_INT boss_guard10_flag
  // VAR_INT boss_guard11_flag boss_guard11_timer
  // VAR_INT mafia_1 mafia_1_timer mafia_1_cash mafia_1_flag mafia_1_stuck_timer
  // VAR_INT mafia_2 mafia_2_timer mafia_2_cash mafia_2_flag mafia_2_stuck_timer
  // VAR_INT mafia_3 mafia_3_timer mafia_3_cash mafia_3_flag mafia_3_stuck_timer
  // VAR_INT mafia_4 mafia_4_timer mafia_4_cash mafia_4_flag mafia_4_stuck_timer
  // VAR_INT mafia_5 mafia_5_timer mafia_5_cash mafia_5_flag mafia_5_stuck_timer
  // VAR_INT mafia_6 mafia_6_timer mafia_6_cash mafia_6_flag mafia_6_stuck_timer
  // VAR_INT mafia_7 mafia_7_timer mafia_7_cash mafia_7_flag mafia_7_stuck_timer
  // VAR_INT mafia_8 mafia_8_timer mafia_8_cash mafia_8_flag mafia_8_stuck_timer
  // VAR_INT mafia_9 mafia_9_timer mafia_9_cash mafia_9_flag mafia_9_stuck_timer
  // VAR_FLOAT mafia_6_stuck_x mafia_6_stuck_y mafia_6_stuck_z
  // VAR_FLOAT mafia_7_stuck_x mafia_7_stuck_y mafia_7_stuck_z
  // VAR_FLOAT mafia_8_stuck_x mafia_8_stuck_y mafia_8_stuck_z
  // VAR_FLOAT mafia_9_stuck_x mafia_9_stuck_y mafia_9_stuck_z

  //LOAD_AND_LAUNCH_MISSION_EXCLUSIVE stuff
  //VAR_INT game_timer temp_int
  //VAR_FLOAT heading

  // ****************************************Mission Start************************************


}
