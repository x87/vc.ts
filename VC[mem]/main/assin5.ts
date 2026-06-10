// Generated from main/assin5.sc

import { $ } from "../vars.mts";

async function mission_start_assin5() {


  Stat.RegisterMissionGiven();


  ONMISSION = 1;


  await asyncWait(0);



  Text.LoadMissionText("ASSIN5");
  ///////////////////////////////////////////////////////////////////////////////////////cutscene



  Streaming.RequestModel(SGa);
  Streaming.RequestModel(SGb);
  Streaming.RequestModel(mp5lng);
  Streaming.RequestModel(cellphone);

  //REQUEST_MODEL M4

  Streaming.RequestModel(admiral);
  Streaming.RequestModel(pony);
  Streaming.RequestModel(maverick);

  //REQUEST_MODEL bodyarmour

  Streaming.RequestModel(1344 /* barrel4 */);
  //REQUEST_MODEL health



  while (!(Streaming.HasModelLoaded(SGa)) || !(Streaming.HasModelLoaded(SGb)) || !(Streaming.HasModelLoaded(mp5lng)) || !(Streaming.HasModelLoaded(cellphone))) {
    await asyncWait(0);
  }


  while (!(Streaming.HasModelLoaded(admiral)) || !(Streaming.HasModelLoaded(pony)) || !(Streaming.HasModelLoaded(maverick)) || !(Streaming.HasModelLoaded(1344 /* barrel4 */))) {
    await asyncWait(0);
  }


  Streaming.LoadSpecialCharacter(1, "BGa");
  Streaming.LoadSpecialCharacter(2, "BGb");


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }


  World.SetPedDensityMultiplier(0.0);
  World.SetCarDensityMultiplier(0.0);


  Hud.SwitchWidescreen(true /* ON */);


  World.ClearArea(-977.4625, -530.6680, 9.9113, 4.0, false /* FALSE */);
  World.ClearArea(-989.81897, -524.6922, 11.399216, 3.0, false /* FALSE */);
  World.ClearAreaOfChars(-1475.2427, -832.872, 10.164, -1489.9095, 819.0943, 18.669);


  $.player1.setCoordinates(-977.4625, -530.6680, 9.9113);
  $.player1.setHeading(284.6051);
  $.scplayer.setAnsweringMobile(true /* TRUE */);


  Camera.SetFixedPosition(-981.493103, -531.183716, 11.496208, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player1, 4 /* FOLLOWPED */, 2 /* JUMP_CUT */);
  Camera.SetBehindPlayer();



  while (!($.ice_gate.slide(-973.664, -516.25, 10.092, 0.0, 0.1, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }


  Audio.LoadMissionAudio(1, "job5_1" as any);
  Audio.LoadMissionAudio(2, "job5_2" as any);


  while (!(Audio.HasMissionAudioLoaded(1)) || !(Audio.HasMissionAudioLoaded(2))) {
    await asyncWait(0);
  }




  Camera.DoFade(500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }



  Text.PrintNow("ASM5_A", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm5cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm5cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM5_A");
  Audio.ClearMissionAudio(1);


  Text.PrintNow("ASM5_B", 10000, 1);
  Audio.PlayMissionAudio(2);
  while (!(Audio.HasMissionAudioFinished(2)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm5cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm5cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM5_B");
  Audio.ClearMissionAudio(2);


  Audio.LoadMissionAudio(1, "job5_3" as any);


  while (!(Audio.HasMissionAudioLoaded(1))) {
    await asyncWait(0);
  }


  Camera.SetFixedPosition(-988.175354, -532.674316, 11.893312, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-987.38794, -532.058655, 11.845509, 2 /* JUMP_CUT */);



  Text.PrintNow("ASM5_C", 10000, 1);
  Audio.PlayMissionAudio(1);
  while (!(Audio.HasMissionAudioFinished(1)) && !(Char.IsDead($.scplayer))) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* cross */)) {
      // SCM GOTO → endasm5cs (not lowered; manual jump required)
      throw new Error("unresolved GOTO endasm5cs"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("ASM5_C");
  Audio.ClearMissionAudio(1);
}




async function endasm5cs() {


  Audio.ClearMissionAudio(1);
  Audio.ClearMissionAudio(2);
  Text.ClearSmallPrints();


  await asyncWait(500);


  $.scplayer.setAnsweringMobile(false /* FALSE */);
  Streaming.MarkModelAsNoLongerNeeded(cellphone);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  World.SetPedDensityMultiplier(1.0);
  World.SetCarDensityMultiplier(1.0);


  TIMERA = 0;


  Char.SetThreatReactionRangeMultiplier(2.0);


  Game.SetWantedMultiplier(0.1);


  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  $.player1.setControl(true /* ON */);

  ////////////////////////////////////////////////	FLAGS		//////////////////////////////////////////////////////


  //flags

  $.create_goons = 0;
  $.getguysoutofwheels_a5 = 0;


  $.badguy1_flag = 0;
  $.badguy2_flag = 0;
  $.badguy5_flag = 0;
  $.badguy12_flag = 0;
  $.badguy13_flag = 0;
  $.badguy14_flag = 0;
  $.badguy16_flag = 0;
  $.badguy17_flag = 0;
  $.badguy18_flag = 0;
  $.badguy22_flag = 0;
  $.badguy23_flag = 0;
  $.badguy24_flag = 0;
  $.badguy25_flag = 0;
  $.badguy26_flag = 0;
  $.badguy27_flag = 0;
  $.badguy28_flag = 0;
  $.badguy29_flag = 0;
  $.badguy30_flag = 0;
  $.badguy31_flag = 0;
  $.badguy32_flag = 0;
  $.badguy33_flag = 0;
  $.badguy34_flag = 0;
  $.badguy35_flag = 0;



  $.killplayer1_flag = 0;
  $.killplayer2_flag = 0;
  $.killplayer3_flag = 0;
  $.killplayer5_flag = 0;
  $.killplayer12_flag = 0;
  $.killplayer13_flag = 0;
  $.killplayer14_flag = 0;
  $.killplayer16_flag = 0;
  $.killplayer17_flag = 0;
  $.killplayer18_flag = 0;
  $.killplayer15_flag = 0;
  $.killplayer20_flag = 0;
  $.killplayer21_flag = 0;
  $.killplayer22_flag = 0;
  $.killplayer23_flag = 0;
  $.killplayer24_flag = 0;
  $.killplayer25_flag = 0;
  $.killplayer26_flag = 0;
  $.killplayer27_flag = 0;
  $.killplayer28_flag = 0;
  $.killplayer29_flag = 0;
  $.killplayer30_flag = 0;
  $.killplayer31_flag = 0;
  $.killplayer32_flag = 0;
  $.killplayer33_flag = 0;
  $.killplayer34_flag = 0;
  $.killplayer35_flag = 0;



  $.player_has_got_briefcase_am5 = 0;
  $.displaytext_am5 = 0;



  /////////////////////////////////////////////////		CREATE GOONS 	///////////////////////////////////////////////////

  //the deal guys

  $.badguyboss1 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -888.0087, -516.6854, 28.1699);
  $.badguyboss1.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguyboss1.setHeading(112.8337);
  $.badguyboss1.clearThreatSearch();
  $.badguyboss1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguyboss1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguyboss1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.badguyboss2 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -886.0616, -514.7507, 28.1699);
  $.badguyboss2.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguyboss2.setHeading(105.2930);
  $.badguyboss2.clearThreatSearch();
  $.badguyboss2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguyboss2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguyboss2.setOnlyDamagedByPlayer(true /* TRUE */);


  $.badguyboss3 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -886.1217, -518.1573, 28.16999);
  $.badguyboss3.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguyboss3.setHeading(104.0362);
  $.badguyboss3.clearThreatSearch();
  $.badguyboss3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguyboss3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguyboss3.setOnlyDamagedByPlayer(true /* TRUE */);


  $.otherguy1 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGa, -893.7256, -517.1300, 28.1754);
  $.otherguy1.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.otherguy1.setHeading(279.8910);
  $.otherguy1.clearThreatSearch();
  $.otherguy1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.otherguy1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.otherguy1.setOnlyDamagedByPlayer(true /* TRUE */);


  $.otherguy2 = Char.Create(4 /* PEDTYPE_CIVMALE */, SGb, -894.7341, -515.9601, 28.1754);
  $.otherguy2.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.otherguy2.setHeading(285.9840);
  $.otherguy2.clearThreatSearch();
  $.otherguy2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.otherguy2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.otherguy2.setOnlyDamagedByPlayer(true /* TRUE */);


  Game.SetCharsChatting($.otherguy1, $.badguyboss1, 800000);

  //create barrels

  $.barrel3_a5 = ScriptObject.Create(1344 /* barrel4 */, -927.3963, -528.213, 10.134);
  $.barrel3_a5.makeTargetable();
  $.barrel4_a5 = ScriptObject.Create(1344 /* barrel4 */, -904.3218, -566.7883, 9.7807);

  //create helicopter

  $.helicopter_a5 = Car.Create(maverick, -870.6392, -516.3960, 28.1699);
  $.helicopter_a5.changeColor(7 /* CARCOLOUR_STRIKINGBLUE */, 1 /* CARCOLOUR_WHITE */);
  $.helicopter_a5.setHeading(183.0478);
  $.helicopter_a5.setIdle();

  //create blocking car

  $.car1_a5 = Car.Create(admiral, -941.5502, -513.9277, 9.9197);
  $.car1_a5.changeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
  $.car1_a5.setIdle();
  $.car1_a5.setHeading(5.3408);

  //guys behind car

  $.badguy1 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -939.6057, -512.2731, 9.9113);
  $.badguy1.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy1.setHeading(90.5315);
  $.badguy1.clearThreatSearch();
  $.badguy1.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy1.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy1.setStayInSamePlace(true /* TRUE */);


  $.badguy2 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -939.5907, -516.5395, 9.9532);
  $.badguy2.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy2.setHeading(90.1574);
  $.badguy2.clearThreatSearch();
  $.badguy2.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy2.setStayInSamePlace(true /* TRUE */);


  //stairs

  $.badguy3 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -905.3917, -512.3774, 16.9633);
  $.badguy3.giveWeapon(WEAPONTYPE_MP5, 3000);
  $.badguy3.setHeading(119.0373);
  $.badguy3.clearThreatSearch();
  $.badguy3.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy3.setOnlyDamagedByPlayer(true /* TRUE */);


  $.badguy4 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -900.4265, -545.6013, 21.4256);
  $.badguy4.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy4.setHeading(81.1633);
  $.badguy4.clearThreatSearch();
  $.badguy4.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy4.setOnlyDamagedByPlayer(true /* TRUE */);

  //advertising boards

  $.badguy5 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -919.222, -544.302, 10.490);
  $.badguy5.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy5.setHeading(8.948461);
  $.badguy5.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy5.setStayInSamePlace(true /* TRUE */);


  //parked up van

  $.car3_a5 = Car.Create(pony, -925.0329, -530.9766, 10.1511);
  $.car3_a5.changeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
  $.car3_a5.setHeading(100.6910);
  $.car3_a5.setOnlyDamagedByPlayer(true /* TRUE */);


  $.badguy6 = Char.CreateInsideCar($.car3_a5, 21 /* PEDTYPE_SPECIAL */, SPECIAL01);
  $.badguy6.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy6.clearThreatSearch();
  $.badguy6.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy6.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy6.setAccuracy(10);


  $.badguy7 = Char.CreateAsPassenger($.car3_a5, 21 /* PEDTYPE_SPECIAL */, SPECIAL02, 0);
  $.badguy7.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy7.clearThreatSearch();
  $.badguy7.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy7.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy7.setAccuracy(10);


  $.badguy8 = Char.CreateAsPassenger($.car3_a5, 21 /* PEDTYPE_SPECIAL */, SPECIAL01, 1);
  $.badguy8.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy8.clearThreatSearch();
  $.badguy8.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy8.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy8.setAccuracy(10);


  $.badguy9 = Char.CreateAsPassenger($.car3_a5, 21 /* PEDTYPE_SPECIAL */, SPECIAL01, 2);
  $.badguy9.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy9.clearThreatSearch();
  $.badguy9.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy9.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy9.setAccuracy(10);



  $.car3_a5.setIdle();

  //parked up car

  $.car2_a5 = Car.Create(admiral, -923.2911, -534.3985, 10.1921);
  $.car2_a5.setHeading(95.8270);
  $.car2_a5.changeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
  $.car2_a5.setOnlyDamagedByPlayer(true /* TRUE */);

  //create first set of guys in the first area with boxes

  $.badguy12 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -910.9335, -549.9265, 10.5692); //by crate
  $.badguy12.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy12.setHeading(357.5166);
  $.badguy12.clearThreatSearch();
  $.badguy12.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy12.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy12.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy12.setStayInSamePlace(true /* TRUE */);


  $.badguy13 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -919.4705, -564.1069, 10.1924); //by crate
  $.badguy13.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy13.setHeading(11.0530);
  $.badguy13.clearThreatSearch();
  $.badguy13.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy13.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy13.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy13.setStayInSamePlace(true /* TRUE */);


  $.badguy14 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -907.8641, -562.6886, 10.3168); //by crate
  $.badguy14.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy14.setHeading(354.8635);
  $.badguy14.clearThreatSearch();
  $.badguy14.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy14.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy14.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy14.setStayInSamePlace(true /* TRUE */);


  $.badguy16 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -898.9297, -605.6819, 11.8547); //on the crate
  $.badguy16.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy16.setHeading(182.2136);
  $.badguy16.clearThreatSearch();
  $.badguy16.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy16.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy16.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy16.setStayInSamePlace(true /* TRUE */);


  $.badguy17 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -909.2119, -602.8759, 9.5246); //next to crate
  $.badguy17.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy17.setHeading(12.6305);
  $.badguy17.clearThreatSearch();
  $.badguy17.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy17.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy17.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy17.setStayInSamePlace(true /* TRUE */);


  $.badguy18 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -916.5301, -562.2043, 12.0173); //on the crate
  $.badguy18.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy18.setHeading(137.8030);
  $.badguy18.clearThreatSearch();
  $.badguy18.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy18.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy18.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy18.setStayInSamePlace(true /* TRUE */);


  $.badguy19 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -881.8743, -584.6597, 18.6255); //near two icecreams
  $.badguy19.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy19.setHeading(192.3254);
  $.badguy19.clearThreatSearch();
  $.badguy19.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy19.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy19.setOnlyDamagedByPlayer(true /* TRUE */);


  //////////////////////////////////////////// Second section guys


  $.badguy21 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -931.1354, -585.5306, 9.1849);
  $.badguy21.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy21.setHeading(18.2377);
  $.badguy21.clearThreatSearch();
  $.badguy21.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy21.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy21.setOnlyDamagedByPlayer(true /* TRUE */);


  $.badguy22 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -925.1932, -615.1325, 12.7716); //ducking guy
  $.badguy22.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy22.setHeading(18.3567);
  $.badguy22.clearThreatSearch();
  $.badguy22.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy22.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy22.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy22.setStayInSamePlace(true /* TRUE */);


  $.badguy23 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -929.0777, -614.6532, 14.9469); //ducking guy
  $.badguy23.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy23.setHeading(17.6835);
  $.badguy23.clearThreatSearch();
  $.badguy23.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy23.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy23.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy22.setStayInSamePlace(true /* TRUE */);


  $.badguy24 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -927.3255, -620.7064, 14.9642);
  $.badguy24.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy24.setHeading(1.3416);
  $.badguy24.clearThreatSearch();
  $.badguy24.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy24.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy24.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy24.setStayInSamePlace(true /* TRUE */);


  $.badguy25 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -897.9171, -632.6987, 15.5191); //ducking guy
  $.badguy25.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy25.setHeading(102.1576);
  $.badguy25.clearThreatSearch();
  $.badguy25.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy25.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy25.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy25.setStayInSamePlace(true /* TRUE */);


  $.badguy26 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -878.5259, -624.2981, 14.7945); //ducking guy
  $.badguy26.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy26.setHeading(346.1281);
  $.badguy26.clearThreatSearch();
  $.badguy26.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy26.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy26.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy26.setStayInSamePlace(true /* TRUE */);


  $.badguy27 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -867.2620, -608.2192, 23.1638); //advertising boards
  $.badguy27.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy27.setHeading(138.8068);
  $.badguy27.clearThreatSearch();
  $.badguy27.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy27.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy27.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy27.setStayInSamePlace(true /* TRUE */);


  $.badguy28 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -874.3932, -605.0528, 14.7369); //ducking guy
  $.badguy28.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy28.setHeading(101.4750);
  $.badguy28.clearThreatSearch();
  $.badguy28.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy28.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy28.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy28.setStayInSamePlace(true /* TRUE */);


  $.badguy29 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -924.4441, -575.0138, 9.2581); //ducking guy
  $.badguy29.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy29.setHeading(1.4189);
  $.badguy29.clearThreatSearch();
  $.badguy29.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy29.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy29.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy29.setStayInSamePlace(true /* TRUE */);


  $.badguy30 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -867.9724, -601.2151, 23.1638); //advertising boards
  $.badguy30.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy30.setHeading(127.6761);
  $.badguy30.clearThreatSearch();
  $.badguy30.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy30.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy30.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy30.setStayInSamePlace(true /* TRUE */);


  $.badguy31 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -896.634, -565.709, 12.025); //rear doors of factory
  $.badguy31.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy31.setHeading(37.43);
  $.badguy31.clearThreatSearch();
  $.badguy31.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy31.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy31.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy31.setStayInSamePlace(true /* TRUE */);
  $.badguy31.setAccuracy(90);


  $.badguy32 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL02, -878.1485, -571.4688, 18.6207); //inbetween two icecreams
  $.badguy32.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy32.setHeading(138.0790);
  $.badguy32.clearThreatSearch();
  $.badguy32.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy32.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy32.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy32.setStayInSamePlace(true /* TRUE */);


  $.badguy33 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -892.1982, -552.9963, 23.8094); //inbetween two icecreams stairs
  $.badguy33.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy33.setHeading(190.8916);
  $.badguy33.clearThreatSearch();
  $.badguy33.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy33.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy33.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy33.setStayInSamePlace(true /* TRUE */);



  $.badguy34 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -929.8420, -637.3516, 14.9582); //slant on roof
  $.badguy34.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy34.setHeading(10.5009);
  $.badguy34.clearThreatSearch();
  $.badguy34.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy34.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy34.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy34.setStayInSamePlace(true /* TRUE */);


  $.badguy35 = Char.Create(21 /* PEDTYPE_SPECIAL */, SPECIAL01, -914.1021, -530.2435, 10.1809); //first crate
  $.badguy35.giveWeapon(WEAPONTYPE_MP5, 300000);
  $.badguy35.setHeading(45.0281);
  $.badguy35.clearThreatSearch();
  $.badguy35.setThreatSearch(1 /* THREAT_PLAYER1 */);
  $.badguy35.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.badguy35.setOnlyDamagedByPlayer(true /* TRUE */);
  $.badguy35.setStayInSamePlace(true /* TRUE */);







  //sliding gate

  Camera.DoFade(500, 1 /* FADE_IN */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
}


////////////////////////////////////////////////////////Flags



//////////////////////////////////////////////////////////////////////////////////////









async function assin5loop() {
  // SCM GOTO → assin5loop lowered to endless loop
  while (true) {


    await asyncWait(0);



    if ($.create_goons == 0) {
      $.bodyarmour_am5 = Pickup.Create(1364 /* bodyarmour */, 3 /* PICKUP_ONCE */, -883.108, -615.856, 11.134);
      $.health_am5 = Pickup.Create(1362 /* health */, 3 /* PICKUP_ONCE */, -867.2684, -615.3924, 15.7369);
      $.briefcase_am5 = Pickup.Create(1319 /* briefcase */, 3 /* PICKUP_ONCE */, -891.4261, -516.9407, 29.1699);
      $.briefcase_am5blip = Blip.AddForPickup($.briefcase_am5);
      $.m4_a5 = Pickup.CreateWithAmmo(M4, 3 /* PICKUP_ONCE */, 130, -973.5544, -518.9319, 10.926);
      $.sg_a5 = Pickup.CreateWithAmmo(shotgspa, 3 /* PICKUP_ONCE */, 50, -898.9763, -549.0946, 22.4320);
      $.create_goons = 1;


    }



    if ($.create_goons == 1) {
      Text.PrintNow("ASM5_1", 7000, 2);
      $.create_goons = 2;


    }





    /////////////////////////////////////////////	GOON BEHAVIOUR		//////////////////////////////////////////////


    /////////////////////////////////////////////////////	GUYS IN VANS		//////////////////////////////////////


    if ($.create_goons == 2) {


      if ($.getguysoutofwheels_a5 == 0) {
        if (!(Car.IsDead($.car2_a5))) {
          $.car2_a5health = $.car2_a5.getHealth();
          if (!(Car.IsDead($.car3_a5))) {
            $.car3_a5health = $.car3_a5.getHealth();
            if ($.player1.locateAnyMeans2D(-914.0022, -533.3141, 12.0, 12.0, false /* FALSE */) || $.car2_a5health < 990 || $.car3_a5health < 990) {


              if (!(Char.IsDead($.badguy6))) {
                $.badguy6.setObjKillPlayerOnFoot($.player1);
              }
              if (!(Char.IsDead($.badguy7))) {
                $.badguy7.setObjKillPlayerOnFoot($.player1);
              }
              if (!(Char.IsDead($.badguy8))) {
                $.badguy8.setObjKillPlayerOnFoot($.player1);
              }
              if (!(Char.IsDead($.badguy9))) {
                $.badguy9.setObjKillPlayerOnFoot($.player1);
              }
              if (!(Car.IsDead($.car2_a5))) {
                $.car2_a5.setOnlyDamagedByPlayer(false /* FALSE */);
              }
              if (!(Car.IsDead($.car3_a5))) {
                $.car3_a5.setOnlyDamagedByPlayer(false /* FALSE */);
              }
              $.getguysoutofwheels_a5 = 1;


            }
          }
        }


      }


      /////////////////////////////////////////////////////	GUY 1 BEHIND CAR	//////////////////////////////////////


      if (!(Char.IsDead($.badguy1))) {
        if ($.badguy1_flag == 0) {
          $.badguy1.setObjKillPlayerOnFoot($.player1);
          $.badguy1_flag = 1;
        }
        if ($.badguy1_flag == 1) {
          if ($.killplayer1_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy1, 5.0, 5.0, false /* FALSE */))) {
                $.bg1timerinit = Clock.GetGameTimer();
                $.badguy1.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg1timerafter = Clock.GetGameTimer();
              $.getupbg1 = $.bg1timerafter - $.bg1timerinit;
              if ($.getupbg1 > 2500) {
                $.badguy1.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer1_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy1, 5.0, 5.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
              $.badguy1.setCrouch(false /* FALSE */, 100);
              $.badguy1.setStayInSamePlace(false /* FALSE */);
              $.badguy1.setObjKillPlayerOnFoot($.player1);
              $.killplayer1_flag = 1;
            }
          }


        }


      }

      /////////////////////////////////////////////////////	GUY 2 BEHIND CAR	//////////////////////////////////////


      if (!(Char.IsDead($.badguy2))) {
        if ($.badguy2_flag == 0) {
          $.badguy2.setObjKillPlayerOnFoot($.player1);
          $.badguy2_flag = 1;
        }
        if ($.badguy2_flag == 1) {
          if ($.killplayer2_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy2, 5.0, 5.0, false /* FALSE */))) {
                $.bg2timerinit = Clock.GetGameTimer();
                $.badguy2.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg2timerafter = Clock.GetGameTimer();
              $.getupbg2 = $.bg2timerafter - $.bg2timerinit;
              if ($.getupbg2 > 2000) {
                $.badguy2.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer2_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy2, 5.0, 5.0, false /* FALSE */)) {
              $.badguy2.setCrouch(false /* FALSE */, 100);
              $.badguy2.setStayInSamePlace(false /* FALSE */);
              $.badguy2.setObjKillPlayerOnFoot($.player1);
              $.killplayer2_flag = 1;
            }
          }



        }


      }



      /////////////////////////////////////////////////////	GUY 5 BEHIND RIGHT CRATE	//////////////////////////////////////


      if (!(Char.IsDead($.badguy5))) {
        if ($.badguy5_flag == 0) {
          $.badguy5.setObjKillPlayerOnFoot($.player1);
          $.badguy5_flag = 1;
        }
        if ($.badguy5_flag == 1) {
          if ($.killplayer5_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy5, 5.0, 5.0, false /* FALSE */))) {
                $.bg5timerinit = Clock.GetGameTimer();
                $.badguy5.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg5timerafter = Clock.GetGameTimer();
              $.getupbg5 = $.bg5timerafter - $.bg5timerinit;
              if ($.getupbg5 > 2500) {
                $.badguy5.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer5_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy5, 7.0, 7.0, false /* FALSE */)) {
              $.badguy5.setCrouch(false /* FALSE */, 100);
              $.badguy5.setStayInSamePlace(false /* FALSE */);
              $.badguy5.setObjKillPlayerOnFoot($.player1);
              $.killplayer5_flag = 1;
            }
          }


        }


      }



      /////////////////////////////////////////////////////	GUY 12 NEXT TO CRATE	//////////////////////////////////////


      if (!(Char.IsDead($.badguy12))) {
        if ($.badguy12_flag == 0) {
          $.badguy12.setObjKillPlayerOnFoot($.player1);
          $.badguy12_flag = 1;
        }
        if ($.badguy12_flag == 1) {
          if ($.killplayer12_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy12, 5.0, 5.0, false /* FALSE */))) {
                $.bg12timerinit = Clock.GetGameTimer();
                $.badguy12.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg12timerafter = Clock.GetGameTimer();
              $.getupbg12 = $.bg12timerafter - $.bg12timerinit;
              if ($.getupbg12 > 3500) {
                $.badguy12.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer12_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy12, 7.0, 7.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy12.setCrouch(false /* FALSE */, 100);
                $.badguy12.setStayInSamePlace(false /* FALSE */);
                $.badguy12.setObjKillPlayerOnFoot($.player1);
                $.killplayer12_flag = 1;
              }
            }
          }


        }


      }


      /////////////////////////////////////////////////////	GUY 13 NEXT TO CRATE	//////////////////////////////////////


      if (!(Char.IsDead($.badguy13))) {
        if ($.badguy13_flag == 0) {
          $.badguy13.setObjKillPlayerOnFoot($.player1);
          $.badguy13_flag = 1;
        }
        if ($.badguy13_flag == 1) {
          if ($.killplayer13_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy13, 5.0, 5.0, false /* FALSE */))) {
                $.bg13timerinit = Clock.GetGameTimer();
                $.badguy13.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg13timerafter = Clock.GetGameTimer();
              $.getupbg13 = $.bg13timerafter - $.bg13timerinit;
              if ($.getupbg13 > 2500) {
                $.badguy13.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer13_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy13, 7.0, 7.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
              $.badguy13.setAccuracy(90);
              $.killplayer13_flag = 1;
            }
          }


        }


      }


      /////////////////////////////////////////////////////	GUY 14 NEXT TO CRATE	//////////////////////////////////////


      if (!(Char.IsDead($.badguy14))) {
        if ($.badguy14_flag == 0) {
          $.badguy14.setObjKillPlayerOnFoot($.player1);
          $.badguy14_flag = 1;
        }
        if ($.badguy14_flag == 1) {
          if ($.killplayer14_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy14, 5.0, 5.0, false /* FALSE */))) {
                $.bg14timerinit = Clock.GetGameTimer();
                $.badguy14.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg14timerafter = Clock.GetGameTimer();
              $.getupbg14 = $.bg14timerafter - $.bg14timerinit;
              if ($.getupbg14 > 3500) {
                $.badguy14.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer14_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy14, 10.0, 10.0, false /* FALSE */)) {
              $.badguy14.setCrouch(false /* FALSE */, 100);
              $.badguy14.setStayInSamePlace(false /* FALSE */);
              $.badguy14.setObjKillPlayerOnFoot($.player1);
              $.killplayer14_flag = 1;
            }
          }


        }


      }


      /////////////////////////////////////////////////////	GUY 17 NEXT TO CRATE	//////////////////////////////////////


      if (!(Char.IsDead($.badguy17))) {
        if ($.badguy17_flag == 0) {
          $.badguy17.setObjKillPlayerOnFoot($.player1);
          $.badguy17_flag = 1;
        }
        if ($.badguy17_flag == 1) {
          if ($.killplayer17_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy17, 5.0, 5.0, false /* FALSE */))) {
                $.bg17timerinit = Clock.GetGameTimer();
                $.badguy17.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg17timerafter = Clock.GetGameTimer();
              $.getupbg17 = $.bg17timerafter - $.bg17timerinit;
              if ($.getupbg17 > 3000) {
                $.badguy17.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer17_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy17, 10.0, 10.0, false /* FALSE */)) {
                $.badguy17.setCrouch(false /* FALSE */, 100);
                $.badguy17.setStayInSamePlace(false /* FALSE */);
                $.badguy17.setObjKillPlayerOnFoot($.player1);
                $.killplayer17_flag = 1;
              }
            }
          }


        }


      }


      /////////////////////////////////////////////////////	GUY 16 and 18 ON CRATE AND SHOTGUN GUY		//////////////////////////////////////


      if (!(Char.IsDead($.badguy16))) {
        if ($.badguy16_flag == 0) {
          $.badguy16.setObjKillPlayerOnFoot($.player1);
          $.badguy16.setCrouch(true /* TRUE */, 800000);
          $.badguy16_flag = 1;
        }

        //run at player continously when close
        if ($.killplayer16_flag == 0) {
          if ($.player1.locateAnyMeansChar2D($.badguy16, 5.0, 5.0, false /* FALSE */)) {
            $.badguy16.setCrouch(false /* FALSE */, 100);
            $.badguy16.setStayInSamePlace(false /* FALSE */);
            $.badguy16.setObjKillPlayerOnFoot($.player1);
            $.killplayer16_flag = 1;
          }
        }


      }
      if (!(Char.IsDead($.badguy18))) {
        if ($.badguy18_flag == 0) {
          $.badguy18.setObjKillPlayerOnFoot($.player1);
          $.badguy18.setCrouch(true /* TRUE */, 800000);
          $.badguy18_flag = 1;
        }

        //run at player continously when close
        if ($.killplayer18_flag == 0) {
          if ($.player1.locateAnyMeansChar2D($.badguy18, 5.0, 5.0, false /* FALSE */)) {
            $.badguy18.setCrouch(false /* FALSE */, 100);
            $.badguy18.setStayInSamePlace(false /* FALSE */);
            $.badguy18.setObjKillPlayerOnFoot($.player1);
            $.killplayer18_flag = 1;
          }
        }


      }
      if ($.killplayer3_flag == 0) {
        if (!(Char.IsDead($.badguy3))) {
          if ($.badguy3.isOnScreen()) {
            if ($.player1.isShooting()) {
              if ($.player1.isShooting()) {
                if ($.player1.locateAnyMeansChar2D($.badguy3, 30.0, 30.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                  $.badguy3.setAccuracy(95);
                  $.killplayer3_flag = 1;
                }
              }
            }
          }
        }
      }



      /////////////////////////////////////////////////////////	SECOND SECTION		/////////////////////////////////////////////////////




      //next
      if (!(Char.IsDead($.badguy22))) {
        if ($.badguy22_flag == 0) {
          $.badguy22.setObjKillPlayerOnFoot($.player1);
          $.badguy22_flag = 1;
        }
        if ($.badguy22_flag == 1) {
          if ($.killplayer22_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy22, 5.0, 5.0, false /* FALSE */))) {
                $.bg22timerinit = Clock.GetGameTimer();
                $.badguy22.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg22timerafter = Clock.GetGameTimer();
              $.getupbg22 = $.bg22timerafter - $.bg22timerinit;
              if ($.getupbg22 > 2000) {
                $.badguy22.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer22_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy22, 10.0, 10.0, false /* FALSE */)) {
                $.badguy22.setCrouch(false /* FALSE */, 100);
                $.badguy22.setStayInSamePlace(false /* FALSE */);
                $.badguy22.setObjKillPlayerOnFoot($.player1);
                $.killplayer22_flag = 1;
              }
            }
          }


        }


      }


      //next
      if (!(Char.IsDead($.badguy23))) {
        if ($.badguy23_flag == 0) {
          $.badguy23.setObjKillPlayerOnFoot($.player1);
          $.badguy23_flag = 1;
        }
        if ($.badguy23_flag == 1) {
          if ($.killplayer23_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy23, 5.0, 5.0, false /* FALSE */))) {
                $.bg23timerinit = Clock.GetGameTimer();
                $.badguy23.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg23timerafter = Clock.GetGameTimer();
              $.getupbg23 = $.bg23timerafter - $.bg23timerinit;
              if ($.getupbg23 > 4000) {
                $.badguy23.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer23_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy23, 10.0, 10.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy23.setAccuracy(90);
                $.killplayer23_flag = 1;
              }
            }
          }


        }


      }


      //
      if (!(Char.IsDead($.badguy24))) {
        if ($.badguy24_flag == 0) {
          $.badguy24.setObjKillPlayerOnFoot($.player1);
          $.badguy24_flag = 1;
        }
        if ($.badguy24_flag == 1) {
          if ($.killplayer24_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy24, 5.0, 5.0, false /* FALSE */))) {
                $.bg24timerinit = Clock.GetGameTimer();
                $.badguy24.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg24timerafter = Clock.GetGameTimer();
              $.getupbg24 = $.bg24timerafter - $.bg24timerinit;
              if ($.getupbg24 > 3500) {
                $.badguy24.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer24_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy24, 7.0, 7.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy24.setAccuracy(90);
                $.killplayer24_flag = 1;
              }
            }
          }


        }


      }




      //next
      if (!(Char.IsDead($.badguy25))) {
        if ($.badguy25_flag == 0) {
          $.badguy25.setObjKillPlayerOnFoot($.player1);
          $.badguy25_flag = 1;
        }
        if ($.badguy25_flag == 1) {
          if ($.killplayer25_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy25, 5.0, 5.0, false /* FALSE */))) {
                $.bg25timerinit = Clock.GetGameTimer();
                $.badguy25.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg25timerafter = Clock.GetGameTimer();
              $.getupbg25 = $.bg25timerafter - $.bg25timerinit;
              if ($.getupbg25 > 4000) {
                $.badguy25.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer25_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy25, 10.0, 10.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy25.setAccuracy(90);
                $.killplayer25_flag = 1;
              }
            }
          }


        }


      }

      //next
      if (!(Char.IsDead($.badguy26))) {
        if ($.badguy26_flag == 0) {
          $.badguy26.setObjKillPlayerOnFoot($.player1);
          $.badguy26_flag = 1;
        }
        if ($.badguy26_flag == 1) {
          if ($.killplayer26_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy26, 5.0, 5.0, false /* FALSE */))) {
                $.bg26timerinit = Clock.GetGameTimer();
                $.badguy26.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg26timerafter = Clock.GetGameTimer();
              $.getupbg26 = $.bg26timerafter - $.bg26timerinit;
              if ($.getupbg26 > 4000) {
                $.badguy26.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer26_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy26, 10.0, 10.0, false /* FALSE */)) {
              $.badguy26.setCrouch(false /* FALSE */, 100);
              $.badguy26.setStayInSamePlace(false /* FALSE */);
              $.badguy26.setObjKillPlayerOnFoot($.player1);
              $.killplayer26_flag = 1;
            }
          }


        }


      }

      //next
      if (!(Char.IsDead($.badguy27))) {
        if ($.badguy27_flag == 0) {
          $.badguy27.setObjKillPlayerOnFoot($.player1);
          $.badguy27_flag = 1;
        }
        if ($.badguy27_flag == 1) {
          if ($.killplayer27_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy27, 5.0, 5.0, false /* FALSE */))) {
                $.bg27timerinit = Clock.GetGameTimer();
                $.badguy27.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg27timerafter = Clock.GetGameTimer();
              $.getupbg27 = $.bg27timerafter - $.bg27timerinit;
              if ($.getupbg27 > 3000) {
                $.badguy27.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer27_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy27, 10.0, 10.0, false /* FALSE */)) {
              $.badguy27.setCrouch(false /* FALSE */, 100);
              $.badguy27.setStayInSamePlace(false /* FALSE */);
              $.badguy27.setObjKillPlayerOnFoot($.player1);
              $.killplayer27_flag = 1;
            }
          }


        }


      }


      //next
      if (!(Char.IsDead($.badguy28))) {
        if ($.badguy28_flag == 0) {
          $.badguy28.setObjKillPlayerOnFoot($.player1);
          $.badguy28_flag = 1;
        }
        if ($.badguy28_flag == 1) {
          if ($.killplayer28_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy28, 5.0, 5.0, false /* FALSE */))) {
                $.bg28timerinit = Clock.GetGameTimer();
                $.badguy28.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg28timerafter = Clock.GetGameTimer();
              $.getupbg28 = $.bg28timerafter - $.bg28timerinit;
              if ($.getupbg28 > 2000) {
                $.badguy28.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer28_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy28, 2.0, 2.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy28.setCrouch(false /* FALSE */, 100);
                $.badguy28.setStayInSamePlace(false /* FALSE */);
                $.badguy28.setObjKillPlayerOnFoot($.player1);
                $.killplayer28_flag = 1;
              }
            }
          }


        }


      }

      //next
      if (!(Char.IsDead($.badguy29))) {
        if ($.badguy29_flag == 0) {
          $.badguy29.setObjKillPlayerOnFoot($.player1);
          $.badguy29_flag = 1;
        }
        if ($.badguy29_flag == 1) {
          if ($.killplayer29_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy29, 5.0, 5.0, false /* FALSE */))) {
                $.bg29timerinit = Clock.GetGameTimer();
                $.badguy29.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg29timerafter = Clock.GetGameTimer();
              $.getupbg29 = $.bg29timerafter - $.bg29timerinit;
              if ($.getupbg29 > 3000) {
                $.badguy29.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer29_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy29, 3.0, 3.0, false /* FALSE */)) {
              $.badguy29.setCrouch(false /* FALSE */, 100);
              $.badguy29.setStayInSamePlace(false /* FALSE */);
              $.badguy29.setObjKillPlayerOnFoot($.player1);
              $.killplayer29_flag = 1;
            }
          }


        }


      }

      //other guys
      if ($.killplayer21_flag == 0) {
        if (!(Char.IsDead($.badguy21))) {
          if ($.badguy21.isOnScreen()) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy21, 20.0, 20.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy21.setAccuracy(90);
                $.killplayer21_flag = 1;
              }
            }
          }
        }
      }

      //next
      if (!(Char.IsDead($.badguy30))) {
        if ($.badguy30_flag == 0) {
          $.badguy30.setObjKillPlayerOnFoot($.player1);
          $.badguy30_flag = 1;
        }
        if ($.badguy30_flag == 1) {
          if ($.killplayer30_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy30, 5.0, 5.0, false /* FALSE */))) {
                $.bg30timerinit = Clock.GetGameTimer();
                $.badguy30.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg30timerafter = Clock.GetGameTimer();
              $.getupbg30 = $.bg30timerafter - $.bg30timerinit;
              if ($.getupbg30 > 2000) {
                $.badguy30.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer30_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy30, 10.0, 10.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy30.setCrouch(false /* FALSE */, 100);
                $.badguy30.setStayInSamePlace(false /* FALSE */);
                $.badguy30.setObjKillPlayerOnFoot($.player1);
                $.killplayer30_flag = 1;
              }
            }
          }


        }


      }


      //next
      if (!(Char.IsDead($.badguy31))) {
        if ($.badguy31_flag == 0) {
          $.badguy31.setObjKillPlayerOnFoot($.player1);
          $.badguy31_flag = 1;
        }
        if ($.badguy31_flag == 1) {
          if ($.killplayer31_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy31, 5.0, 5.0, false /* FALSE */))) {
                $.bg31timerinit = Clock.GetGameTimer();
                $.badguy31.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg31timerafter = Clock.GetGameTimer();
              $.getupbg31 = $.bg31timerafter - $.bg31timerinit;
              if ($.getupbg31 > 2500) {
                $.badguy31.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer31_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy31, 5.0, 5.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy31.setObjKillPlayerOnFoot($.player1);
                $.badguy31.setAccuracy(90);
                $.killplayer31_flag = 1;
              }
            }
          }


        }


      }

      //next
      if (!(Char.IsDead($.badguy32))) {
        if ($.badguy32_flag == 0) {
          $.badguy32.setObjKillPlayerOnFoot($.player1);
          $.badguy32_flag = 1;
        }
        if ($.badguy32_flag == 1) {
          if ($.killplayer32_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy32, 5.0, 5.0, false /* FALSE */))) {
                $.bg32timerinit = Clock.GetGameTimer();
                $.badguy32.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg32timerafter = Clock.GetGameTimer();
              $.getupbg32 = $.bg32timerafter - $.bg32timerinit;
              if ($.getupbg32 > 4000) {
                $.badguy32.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer32_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy32, 7.0, 7.0, false /* FALSE */)) {
              $.badguy32.setCrouch(false /* FALSE */, 100);
              $.badguy32.setStayInSamePlace(false /* FALSE */);
              $.badguy32.setObjKillPlayerOnFoot($.player1);
              $.killplayer32_flag = 1;
            }
          }


        }


      }

      //next
      if (!(Char.IsDead($.badguy33))) {
        if ($.badguy33_flag == 0) {
          $.badguy33.setObjKillPlayerOnFoot($.player1);
          $.badguy33_flag = 1;
        }
        if ($.badguy33_flag == 1) {
          if ($.killplayer33_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy33, 3.0, 3.0, false /* FALSE */))) {
                $.bg33timerinit = Clock.GetGameTimer();
                $.badguy33.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg33timerafter = Clock.GetGameTimer();
              $.getupbg33 = $.bg33timerafter - $.bg33timerinit;
              if ($.getupbg33 > 3000) {
                $.badguy33.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer33_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy33, 3.0, 3.0, false /* FALSE */)) {
              $.badguy33.setCrouch(false /* FALSE */, 100);
              $.badguy33.setStayInSamePlace(false /* FALSE */);
              $.badguy33.setObjKillPlayerOnFoot($.player1);
              $.killplayer33_flag = 1;
            }
          }


        }


      }


      //next
      if (!(Char.IsDead($.badguy34))) {
        if ($.badguy34_flag == 0) {
          $.badguy34.setObjKillPlayerOnFoot($.player1);
          $.badguy34_flag = 1;
        }
        if ($.badguy34_flag == 1) {
          if ($.killplayer34_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy34, 3.0, 3.0, false /* FALSE */))) {
                $.bg34timerinit = Clock.GetGameTimer();
                $.badguy34.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg34timerafter = Clock.GetGameTimer();
              $.getupbg34 = $.bg34timerafter - $.bg34timerinit;
              if ($.getupbg34 > 3000) {
                $.badguy34.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer34_flag == 0) {
            if ($.player1.isShooting()) {
              if ($.player1.locateAnyMeansChar2D($.badguy34, 3.0, 3.0, false /* FALSE */) || $.player1.isCurrentWeapon(WEAPONTYPE_ROCKETLAUNCHER) || $.player1.isCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */) || $.player1.isCurrentWeapon(WEAPONTYPE_LASERSCOPE)) {
                $.badguy34.setAccuracy(95);
                $.killplayer34_flag = 1;
              }
            }
          }


        }


      }


      //next
      if (!(Char.IsDead($.badguy35))) {
        if ($.badguy35_flag == 0) {
          $.badguy35.setObjKillPlayerOnFoot($.player1);
          $.badguy35_flag = 1;
        }
        if ($.badguy35_flag == 1) {
          if ($.killplayer35_flag == 0) {
            if ($.player1.isShooting()) {
              if (!($.player1.locateAnyMeansChar2D($.badguy35, 3.0, 3.0, false /* FALSE */))) {
                $.bg35timerinit = Clock.GetGameTimer();
                $.badguy35.setCrouch(true /* TRUE */, 300000);
              }
            }
            else {
              $.bg35timerafter = Clock.GetGameTimer();
              $.getupbg35 = $.bg35timerafter - $.bg35timerinit;
              if ($.getupbg35 > 3000) {
                $.badguy35.setCrouch(false /* FALSE */, 100);
              }
            }
          }

          //run at player continously when close
          if ($.killplayer35_flag == 0) {
            if ($.player1.locateAnyMeansChar2D($.badguy35, 3.0, 3.0, false /* FALSE */)) {
              $.badguy35.setCrouch(false /* FALSE */, 100);
              $.badguy35.setStayInSamePlace(false /* FALSE */);
              $.badguy35.setObjKillPlayerOnFoot($.player1);
              $.killplayer35_flag = 1;
            }
          }


        }


      }


      if ($.player1.isInArea2D(-896.5784, -551.9854, -879.3575, -504.7460, false /* FALSE */)) {
        if ($.displaytext_am5 == 0) {
          Text.PrintNow("ASM5_2", 7000, 2);
          $.displaytext_am5 = 1;
        }
      }


      if ($.player_has_got_briefcase_am5 == 0) {
        if ($.briefcase_am5.hasBeenCollected()) {
          $.briefcase_am5blip.remove();
          Text.PrintNow("ASM5_3", 7000, 2);
          $.goto_am5blip = Blip.AddForCoord(-1368.395, -1255.998, 17.2);
          $.player_has_got_briefcase_am5 = 1;
        }
      }
      if ($.player_has_got_briefcase_am5 == 1) {
        if ($.player1.locateAnyMeans3D(-1368.395, -1255.998, 17.2, 5.0, 5.0, 4.0, true /* TRUE */)) {
          $.goto_am5blip.remove();
          // SCM GOTO → mission_assin5_passed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_assin5_passed"); // fallback: would break linear control flow
        }
      }



      if (Char.IsDead($.badguy1)) {
        $.badguy1.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy2)) {
        $.badguy2.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy5)) {
        $.badguy5.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy6)) {
        $.badguy6.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy7)) {
        $.badguy7.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy8)) {
        $.badguy8.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy9)) {
        $.badguy9.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy12)) {
        $.badguy12.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy13)) {
        $.badguy13.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy17)) {
        $.badguy17.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy18)) {
        $.badguy18.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy22)) {
        $.badguy22.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy23)) {
        $.badguy23.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy24)) {
        $.badguy24.markAsNoLongerNeeded();
      }
      if (Char.IsDead($.badguy25)) {
        $.badguy25.markAsNoLongerNeeded();
      }
      if (Car.IsDead($.car3_a5)) {
        $.car3_a5.markAsNoLongerNeeded();
        Streaming.MarkModelAsNoLongerNeeded(pony);
      }
      if (Car.IsDead($.car1_a5)) {
        $.car1_a5.markAsNoLongerNeeded();
      }
      if (Car.IsDead($.car2_a5)) {
        $.car2_a5.markAsNoLongerNeeded();
      }



    }



  }
}





// **************************************** Mission assassin5 failed ************************


async function mission_assin5_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"


  while (!($.ice_gate.slide(-973.664, -519.65, 10.092, 0.0, 1.0, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
}




// **************************************** mission assassin5 passed ************************


async function mission_assin5_passed() {


  $.flag_assin_mission5_passed = 1;
  Stat.RegisterMissionPassed("JOB_5");
  $.ice_gate.markAsNoLongerNeeded();
  Text.PrintWithNumberBig("M_PASS", 16000, 5000, 1); //"Mission Passed!"
  $.player1.clearWantedLevel();
  $.player1.addScore(16000);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  Stat.AddNumberOfAssassinations(1);
  $.assasin_contact_blip.remove();
}




// ********************************** mission cleanup **************************************


async function mission_cleanup_assin5() {
  ONMISSION = 0;
  $.bodyarmour_am5.remove();
  $.m4_a5.remove();
  $.sg_a5.remove();
  $.health_am5.remove();
  $.briefcase_am5.remove();


  $.briefcase_am5blip.remove();
  $.goto_am5blip.remove();


  Streaming.MarkModelAsNoLongerNeeded(SGa);
  Streaming.MarkModelAsNoLongerNeeded(SGb);
  Streaming.MarkModelAsNoLongerNeeded(mp5lng);
  Streaming.MarkModelAsNoLongerNeeded(admiral);
  Streaming.MarkModelAsNoLongerNeeded(pony);
  Streaming.MarkModelAsNoLongerNeeded(maverick);
  Streaming.MarkModelAsNoLongerNeeded(1344 /* barrel4 */);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);


  $.badguy1.removeElegantly();
  $.badguy2.removeElegantly();
  $.badguy3.removeElegantly();
  $.badguy4.removeElegantly();
  $.badguy5.removeElegantly();
  $.badguy6.removeElegantly();
  $.badguy7.removeElegantly();
  $.badguy8.removeElegantly();
  $.badguy9.removeElegantly();
  $.badguy12.removeElegantly();
  $.badguy13.removeElegantly();
  $.badguy14.removeElegantly();
  $.badguy16.removeElegantly();
  $.badguy17.removeElegantly();
  $.badguy18.removeElegantly();
  $.badguy19.removeElegantly();
  $.badguy21.removeElegantly();
  $.badguy22.removeElegantly();
  $.badguy23.removeElegantly();
  $.badguy24.removeElegantly();
  $.badguy25.removeElegantly();
  $.badguy26.removeElegantly();
  $.badguy27.removeElegantly();
  $.badguy28.removeElegantly();
  $.badguy29.removeElegantly();
  $.badguy30.removeElegantly();
  $.badguy31.removeElegantly();
  $.badguy32.removeElegantly();
  $.badguy33.removeElegantly();
  $.badguy34.removeElegantly();
  $.badguy35.removeElegantly();


  $.barrel3_a5.delete();
  $.barrel4_a5.delete();


  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}

export async function assin5() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ****************************		Assin5 - Loose Ends			  **************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************




  // SCRIPT_NAME assin5

  // Mission start stuff

  await mission_start_assin5();  // SCM GOSUB mission_start_assin5


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_assin5_failed();  // SCM GOSUB mission_assin5_failed
  }


  await mission_cleanup_assin5();  // SCM GOSUB mission_cleanup_assin5


  // MissionBoundary

  // Variables for mission

  //helicopter

  // VAR_INT helicopter_a5

  //briefcase

  // VAR_INT briefcase_am5
  // VAR_INT briefcase_am5blip



  //goons

  // VAR_INT badguy1
  // VAR_INT badguy2
  // VAR_INT badguy3
  // VAR_INT badguy4
  // VAR_INT badguy5
  // VAR_INT badguy6
  // VAR_INT badguy7
  // VAR_INT badguy8
  // VAR_INT badguy9
  // VAR_INT badguy12
  // VAR_INT badguy13
  // VAR_INT badguy14
  // VAR_INT badguy16
  // VAR_INT badguy17
  // VAR_INT badguy18
  // VAR_INT badguy19
  // VAR_INT badguy21
  // VAR_INT badguy22
  // VAR_INT badguy23
  // VAR_INT badguy24
  // VAR_INT badguy25
  // VAR_INT badguy26
  // VAR_INT badguy27
  // VAR_INT badguy28
  // VAR_INT badguy29
  // VAR_INT badguy30
  // VAR_INT badguy31
  // VAR_INT badguy32
  // VAR_INT badguy33
  // VAR_INT badguy34
  // VAR_INT badguy35
  // VAR_INT badguyboss1 badguyboss2 badguyboss3 otherguy1 otherguy2

  //cars

  // VAR_INT car1_a5
  // VAR_INT car2_a5
  // VAR_INT car3_a5
  // VAR_INT car2_a5health
  // VAR_INT car3_a5health


  //pickups

  // VAR_INT bodyarmour_am5 m4_a5 sg_a5 health_am5

  //blips

  // VAR_INT goto_am5blip

  //barrels

  // VAR_INT barrel3_a5
  // VAR_INT barrel4_a5



  //timer stuff

  // VAR_INT bg1timerafter getupbg1 bg1timerinit
  // VAR_INT bg2timerafter getupbg2 bg2timerinit
  // VAR_INT bg5timerafter getupbg5 bg5timerinit
  // VAR_INT bg12timerafter getupbg12 bg12timerinit
  // VAR_INT bg13timerafter getupbg13 bg13timerinit
  // VAR_INT bg14timerafter getupbg14 bg14timerinit
  // VAR_INT bg17timerafter getupbg17 bg17timerinit
  // VAR_INT bg22timerafter getupbg22 bg22timerinit
  // VAR_INT bg23timerafter getupbg23 bg23timerinit
  // VAR_INT bg24timerafter getupbg24 bg24timerinit
  // VAR_INT bg25timerafter getupbg25 bg25timerinit
  // VAR_INT bg26timerafter getupbg26 bg26timerinit
  // VAR_INT bg27timerafter getupbg27 bg27timerinit
  // VAR_INT bg28timerafter getupbg28 bg28timerinit
  // VAR_INT bg29timerafter getupbg29 bg29timerinit
  // VAR_INT bg30timerafter getupbg30 bg30timerinit
  // VAR_INT bg31timerafter getupbg31 bg31timerinit
  // VAR_INT bg32timerafter getupbg32 bg32timerinit
  // VAR_INT bg33timerafter getupbg33 bg33timerinit
  // VAR_INT bg34timerafter getupbg34 bg34timerinit
  // VAR_INT bg35timerafter getupbg35 bg35timerinit


  //flags

  // VAR_INT create_goons
  // VAR_INT getguysoutofwheels_a5


  // VAR_INT badguy1_flag
  // VAR_INT badguy2_flag
  // VAR_INT badguy5_flag
  // VAR_INT badguy12_flag
  // VAR_INT badguy13_flag
  // VAR_INT badguy14_flag
  // VAR_INT badguy16_flag
  // VAR_INT badguy17_flag
  // VAR_INT badguy18_flag
  // VAR_INT badguy22_flag
  // VAR_INT badguy23_flag
  // VAR_INT badguy24_flag
  // VAR_INT badguy25_flag
  // VAR_INT badguy26_flag
  // VAR_INT badguy27_flag
  // VAR_INT badguy28_flag
  // VAR_INT badguy29_flag
  // VAR_INT badguy30_flag
  // VAR_INT badguy31_flag
  // VAR_INT badguy32_flag
  // VAR_INT badguy33_flag
  // VAR_INT badguy34_flag
  // VAR_INT badguy35_flag


  // VAR_INT killplayer1_flag
  // VAR_INT killplayer2_flag
  // VAR_INT killplayer5_flag
  // VAR_INT killplayer12_flag
  // VAR_INT killplayer13_flag
  // VAR_INT killplayer14_flag
  // VAR_INT killplayer16_flag
  // VAR_INT killplayer17_flag
  // VAR_INT killplayer18_flag
  // VAR_INT killplayer15_flag
  // VAR_INT killplayer3_flag
  // VAR_INT killplayer20_flag
  // VAR_INT killplayer21_flag
  // VAR_INT killplayer22_flag
  // VAR_INT killplayer23_flag
  // VAR_INT killplayer24_flag
  // VAR_INT killplayer25_flag
  // VAR_INT killplayer26_flag
  // VAR_INT killplayer27_flag
  // VAR_INT killplayer28_flag
  // VAR_INT killplayer29_flag
  // VAR_INT killplayer30_flag
  // VAR_INT killplayer31_flag
  // VAR_INT killplayer32_flag
  // VAR_INT killplayer33_flag
  // VAR_INT killplayer34_flag
  // VAR_INT killplayer35_flag


  // VAR_INT player_has_got_briefcase_am5 displaytext_am5






  // **************************************** Mission Start **********************************


}
