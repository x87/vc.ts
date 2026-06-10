// Generated from main/kickstart.sc

import { $ } from "../vars.mts";

async function mission_start_kickstart() {


  ONMISSION = 1;


  if ($.flag_kickstart_passed_1stime == 0) {
    Stat.RegisterMissionGiven();
  }


  $.player_checkpoint_kickstart = 0;


  $.race_timer_kickstart = 0;


  $.time_left_to_find_bike_ks = 30000;

  // Checkpoint1 small jump over 3 burnt out cars


  $.checkpoint1_x_kickstart = -1484.643;


  $.checkpoint1_y_kickstart = 1488.02;


  $.checkpoint1_z_kickstart = 302.654;


  $.flag_done_checkpoint1_kickstart = 0;

  // Checkpoint 2 fire jump left hand side


  $.checkpoint2_x_kickstart = -1333.700;


  $.checkpoint2_y_kickstart = 1478.770;


  $.checkpoint2_z_kickstart = 302.50;


  $.flag_done_checkpoint2_kickstart = 0;

  // Checkpoint 3 placed in the middle of a small pile of cars left hand side


  $.checkpoint3_x_kickstart = -1335.735;


  $.checkpoint3_y_kickstart = 1519.111;


  $.checkpoint3_z_kickstart = 300.748;


  $.flag_done_checkpoint3_kickstart = 0;

  // Checkpoint 4 on top of first bus roof


  $.checkpoint4_x_kickstart = -1304.975;


  $.checkpoint4_y_kickstart = 1494.277;


  $.checkpoint4_z_kickstart = 302.124;


  $.flag_done_checkpoint4_kickstart = 0;

  // Checkpoint 5 ontop of the second bus


  $.checkpoint5_x_kickstart = -1302.957;


  $.checkpoint5_y_kickstart = 1514.426;


  $.checkpoint5_z_kickstart = 302.18;


  $.flag_done_checkpoint5_kickstart = 0;

  // Checkpoint 6 fire jump in middle of course


  $.checkpoint6_x_kickstart = -1388.630;


  $.checkpoint6_y_kickstart = 1486.478;


  $.checkpoint6_z_kickstart = 305.919;


  $.flag_done_checkpoint6_kickstart = 0;

  // Checkpoint 7 loop the loop right hand side of middle fire jump


  $.checkpoint7_x_kickstart = -1437.116;


  $.checkpoint7_y_kickstart = 1434.815;


  $.checkpoint7_z_kickstart = 315.836;


  $.flag_done_checkpoint7_kickstart = 0;

  // Checkpoint 8 loop the loop beside fire jump


  $.checkpoint8_x_kickstart = -1417.707;


  $.checkpoint8_y_kickstart = 1544.800;


  $.checkpoint8_z_kickstart = 302.693;


  $.flag_done_checkpoint8_kickstart = 0;

  // Checkpoint 9 on top of pile of cars by bus jump


  $.checkpoint9_x_kickstart = -1313.301;


  $.checkpoint9_y_kickstart = 1502.544;


  $.checkpoint9_z_kickstart = 301.162;


  $.flag_done_checkpoint9_kickstart = 0;

  // Checkpoint 10 on top of second pile of cars by bus jump


  $.checkpoint10_x_kickstart = -1312.470;


  $.checkpoint10_y_kickstart = 1512.856;


  $.checkpoint10_z_kickstart = 302.067;


  $.flag_done_checkpoint10_kickstart = 0;

  // Checkpoint 11 wall beside fire jump and bus


  $.checkpoint11_x_kickstart = -1323.204;


  $.checkpoint11_y_kickstart = 1492.103;


  $.checkpoint11_z_kickstart = 303.936;


  $.flag_done_checkpoint11_kickstart = 0;

  // Checkpoint 12 wall beside fire jump and bus highest one


  $.checkpoint12_x_kickstart = -1323.245;


  $.checkpoint12_y_kickstart = 1477.574;


  $.checkpoint12_z_kickstart = 305.774;


  $.flag_done_checkpoint12_kickstart = 0;

  // Checkpoint 13 wall opposite fire jump on left by bus


  $.checkpoint13_x_kickstart = -1344.384;


  $.checkpoint13_y_kickstart = 1533.452;


  $.checkpoint13_z_kickstart = 303.0;


  $.flag_done_checkpoint13_kickstart = 0;

  // Checkpoint 14 track one


  $.checkpoint14_x_kickstart = -1348.278;


  $.checkpoint14_y_kickstart = 1511.859;


  $.checkpoint14_z_kickstart = 298.644;


  $.flag_done_checkpoint14_kickstart = 0;

  // Checkpoint 15 track two


  $.checkpoint15_x_kickstart = -1378.509;


  $.checkpoint15_y_kickstart = 1509.739;


  $.checkpoint15_z_kickstart = 300.0;


  $.flag_done_checkpoint15_kickstart = 0;

  // Checkpoint 16 track three


  $.checkpoint16_x_kickstart = -1388.155;


  $.checkpoint16_y_kickstart = 1527.837;


  $.checkpoint16_z_kickstart = 300.929;


  $.flag_done_checkpoint16_kickstart = 0;

  // Checkpoint 17 track four


  $.checkpoint17_x_kickstart = -1409.253;


  $.checkpoint17_y_kickstart = 1522.967;


  $.checkpoint17_z_kickstart = 298.37;


  $.flag_done_checkpoint17_kickstart = 0;

  // Checkpoint 18 track five over jump one


  $.checkpoint18_x_kickstart = -1426.424;


  $.checkpoint18_y_kickstart = 1520.959;


  $.checkpoint18_z_kickstart = 303.545;


  $.flag_done_checkpoint18_kickstart = 0;

  // Checkpoint 19 track 6


  $.checkpoint19_x_kickstart = -1460.186;


  $.checkpoint19_y_kickstart = 1510.866;


  $.checkpoint19_z_kickstart = 298.952;


  $.flag_done_checkpoint19_kickstart = 0;

  // Checkpoint 20 behind jump 2 on track7


  $.checkpoint20_x_kickstart = -1460.878;


  $.checkpoint20_y_kickstart = 1471.218;


  $.checkpoint20_z_kickstart = 298.564;


  $.flag_done_checkpoint20_kickstart = 0;

  // Checkpoint 21 in small dip track8


  $.checkpoint21_x_kickstart = -1429.784;


  $.checkpoint21_y_kickstart = 1451.610;


  $.checkpoint21_z_kickstart = 298.27;


  $.flag_done_checkpoint21_kickstart = 0;

  // Checkpoint 22 track9


  $.checkpoint22_x_kickstart = -1400.634;


  $.checkpoint22_y_kickstart = 1461.061;


  $.checkpoint22_z_kickstart = 298.286;


  $.flag_done_checkpoint22_kickstart = 0;

  // Checkpoint 23  track 10


  $.checkpoint23_x_kickstart = -1425.175;


  $.checkpoint23_y_kickstart = 1478.428;


  $.checkpoint23_z_kickstart = 301.445;


  $.flag_done_checkpoint23_kickstart = 0;

  // Checkpoint 24 track 11


  $.checkpoint24_x_kickstart = -1414.860;


  $.checkpoint24_y_kickstart = 1497.479;


  $.checkpoint24_z_kickstart = 302.988;


  $.flag_done_checkpoint24_kickstart = 0;

  // Checkpoint 25 track 12


  $.checkpoint25_x_kickstart = -1379.127;


  $.checkpoint25_y_kickstart = 1492.167;


  $.checkpoint25_z_kickstart = 302.758;


  $.flag_done_checkpoint25_kickstart = 0;

  // Checkpoint 26 track 13


  $.checkpoint26_x_kickstart = -1366.536;


  $.checkpoint26_y_kickstart = 1450.439;


  $.checkpoint26_z_kickstart = 299.945;


  $.flag_done_checkpoint26_kickstart = 0;

  // Checkpoint 27 track 14


  $.checkpoint27_x_kickstart = -1346.842;


  $.checkpoint27_y_kickstart = 1484.873;


  $.checkpoint27_z_kickstart = 299.035;


  $.flag_done_checkpoint27_kickstart = 0;

  // Checkpoint 28 single bus far side of comp


  $.checkpoint28_x_kickstart = -1513.362;


  $.checkpoint28_y_kickstart = 1508.387;


  $.checkpoint28_z_kickstart = 302.0;


  $.flag_done_checkpoint28_kickstart = 0;

  // Checkpoint 29 single bus far side by two small walls


  $.checkpoint29_x_kickstart = -1493.339;


  $.checkpoint29_y_kickstart = 1462.965;


  $.checkpoint29_z_kickstart = 302.345;


  $.flag_done_checkpoint29_kickstart = 0;

  // Checkpoint 30


  $.checkpoint30_x_kickstart = -1509.219;


  $.checkpoint30_y_kickstart = 1479.257;


  $.checkpoint30_z_kickstart = 301.356;


  $.flag_done_checkpoint30_kickstart = 0;

  // Checkpoint 31


  $.checkpoint31_x_kickstart = -1484.417;


  $.checkpoint31_y_kickstart = 1454.364;


  $.checkpoint31_z_kickstart = 303.049;


  $.flag_done_checkpoint31_kickstart = 0;

  // Checkpoint 32 ontop of pile of 3 cars.


  $.checkpoint32_x_kickstart = -1496.913;


  $.checkpoint32_y_kickstart = 1517.326;


  $.checkpoint32_z_kickstart = 301.50;


  $.flag_done_checkpoint32_kickstart = 0;

  // Timer stuff


  $.race_timer_seconds_kickstart = 0;


  $.race_timer_seconds2_kickstart = 0;


  $.race_timer_mins_kickstart = 0;


  $.flag_bike_blip_on_kickstart = 0;


  $.player_taken_too_long_kickstart = 0;

  // Number of checkpoint stuff


  $.number_of_checkpoints_kickstart = 32;

  // dodgy map stuff


  $.player_x_kickstart = 0.0;


  $.player_y_kickstart = 0.0;


  $.player_z_kickstart = 0.0;


  $.bike_x_kickstart = 0.0;


  $.bike_y_kickstart = 0.0;


  $.bike_z_kickstart = 0.0;

  // Player in end area


  $.player_in_end_area_kickstart = 0;

  // New scoreing system


  $.player_been_rewarded_kickstart = 0;

  // New audio stuff


  $.audio_flag_cheer_kick = 0;


  $.audio_flag_ohh_kick = 0;


  await asyncWait(0);


  Text.LoadMissionText("KICKSTT");




  // *************************************** MISSION START ***********************************


  $.player1.setControl(false /* OFF */);
  Game.SetIsInStadium(true /* TRUE */);
  Streaming.SetAreaVisible(VIS_DIRT);
  World.SetExtraColors(9, false /* FALSE */);
  Streaming.LoadScene(-1331.889, 1498.615, 298.140);

  // Waiting for the ped models to load


  Streaming.RequestModel(SANCHEZ);


  while (!(Streaming.HasModelLoaded(SANCHEZ))) {
    await asyncWait(0);


  }


  Camera.SetFixedPosition(-1339.475, 1448.583, 299.939, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1338.617, 1449.095, 299.894, 2 /* JUMP_CUT */);


  $.player1.setCoordinates(-1333.326, 1451.837, 298.161);
  $.player1.setHeading(0.0);
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  $.bike_kickstart = Car.Create(SANCHEZ, -1331.994, 1454.152, 298.150);
  $.bike_kickstart.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
  $.bike_blip_kickstart = Blip.AddForCar($.bike_kickstart);


  $.bike_kickstart.setStrong(true /* TRUE */);


  $.sphere_kickstart = Sphere.Create(-1445.728, 1531.963, 301.721, 3.0);

  // creates the checkpoints


  Fx.DrawCorona($.checkpoint1_x_kickstart, $.checkpoint1_y_kickstart, $.checkpoint1_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint1_blip_kickstart = Blip.AddForCoordOld($.checkpoint1_x_kickstart, $.checkpoint1_y_kickstart, $.checkpoint1_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint1_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint2_x_kickstart, $.checkpoint2_y_kickstart, $.checkpoint2_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint2_blip_kickstart = Blip.AddForCoordOld($.checkpoint2_x_kickstart, $.checkpoint2_y_kickstart, $.checkpoint2_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint2_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint3_x_kickstart, $.checkpoint3_y_kickstart, $.checkpoint3_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint3_blip_kickstart = Blip.AddForCoordOld($.checkpoint3_x_kickstart, $.checkpoint3_y_kickstart, $.checkpoint3_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint3_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint4_x_kickstart, $.checkpoint4_y_kickstart, $.checkpoint4_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint4_blip_kickstart = Blip.AddForCoordOld($.checkpoint4_x_kickstart, $.checkpoint4_y_kickstart, $.checkpoint4_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint4_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint5_x_kickstart, $.checkpoint5_y_kickstart, $.checkpoint5_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint5_blip_kickstart = Blip.AddForCoordOld($.checkpoint5_x_kickstart, $.checkpoint5_y_kickstart, $.checkpoint5_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint5_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint6_x_kickstart, $.checkpoint6_y_kickstart, $.checkpoint6_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint6_blip_kickstart = Blip.AddForCoordOld($.checkpoint6_x_kickstart, $.checkpoint6_y_kickstart, $.checkpoint6_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint6_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint7_x_kickstart, $.checkpoint7_y_kickstart, $.checkpoint7_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint7_blip_kickstart = Blip.AddForCoordOld($.checkpoint7_x_kickstart, $.checkpoint7_y_kickstart, $.checkpoint7_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint7_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint8_x_kickstart, $.checkpoint8_y_kickstart, $.checkpoint8_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint8_blip_kickstart = Blip.AddForCoordOld($.checkpoint8_x_kickstart, $.checkpoint8_y_kickstart, $.checkpoint8_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint8_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint9_x_kickstart, $.checkpoint9_y_kickstart, $.checkpoint9_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint9_blip_kickstart = Blip.AddForCoordOld($.checkpoint9_x_kickstart, $.checkpoint9_y_kickstart, $.checkpoint9_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint9_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint10_x_kickstart, $.checkpoint10_y_kickstart, $.checkpoint10_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint10_blip_kickstart = Blip.AddForCoordOld($.checkpoint10_x_kickstart, $.checkpoint10_y_kickstart, $.checkpoint10_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint10_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint11_x_kickstart, $.checkpoint11_y_kickstart, $.checkpoint11_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint11_blip_kickstart = Blip.AddForCoordOld($.checkpoint11_x_kickstart, $.checkpoint11_y_kickstart, $.checkpoint11_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint11_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint12_x_kickstart, $.checkpoint12_y_kickstart, $.checkpoint12_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint12_blip_kickstart = Blip.AddForCoordOld($.checkpoint12_x_kickstart, $.checkpoint12_y_kickstart, $.checkpoint12_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint12_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint13_x_kickstart, $.checkpoint13_y_kickstart, $.checkpoint13_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint13_blip_kickstart = Blip.AddForCoordOld($.checkpoint13_x_kickstart, $.checkpoint13_y_kickstart, $.checkpoint13_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint13_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint14_x_kickstart, $.checkpoint14_y_kickstart, $.checkpoint14_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint14_blip_kickstart = Blip.AddForCoordOld($.checkpoint14_x_kickstart, $.checkpoint14_y_kickstart, $.checkpoint14_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint14_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint15_x_kickstart, $.checkpoint15_y_kickstart, $.checkpoint15_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint15_blip_kickstart = Blip.AddForCoordOld($.checkpoint15_x_kickstart, $.checkpoint15_y_kickstart, $.checkpoint15_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint15_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint16_x_kickstart, $.checkpoint16_y_kickstart, $.checkpoint16_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint16_blip_kickstart = Blip.AddForCoordOld($.checkpoint16_x_kickstart, $.checkpoint16_y_kickstart, $.checkpoint16_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint16_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint17_x_kickstart, $.checkpoint17_y_kickstart, $.checkpoint17_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint17_blip_kickstart = Blip.AddForCoordOld($.checkpoint17_x_kickstart, $.checkpoint17_y_kickstart, $.checkpoint17_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint17_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint18_x_kickstart, $.checkpoint18_y_kickstart, $.checkpoint18_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint18_blip_kickstart = Blip.AddForCoordOld($.checkpoint18_x_kickstart, $.checkpoint18_y_kickstart, $.checkpoint18_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint18_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint19_x_kickstart, $.checkpoint19_y_kickstart, $.checkpoint19_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint19_blip_kickstart = Blip.AddForCoordOld($.checkpoint19_x_kickstart, $.checkpoint19_y_kickstart, $.checkpoint19_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint19_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint20_x_kickstart, $.checkpoint20_y_kickstart, $.checkpoint20_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint20_blip_kickstart = Blip.AddForCoordOld($.checkpoint20_x_kickstart, $.checkpoint20_y_kickstart, $.checkpoint20_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint20_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint21_x_kickstart, $.checkpoint21_y_kickstart, $.checkpoint21_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint21_blip_kickstart = Blip.AddForCoordOld($.checkpoint21_x_kickstart, $.checkpoint21_y_kickstart, $.checkpoint21_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint21_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint22_x_kickstart, $.checkpoint22_y_kickstart, $.checkpoint22_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint22_blip_kickstart = Blip.AddForCoordOld($.checkpoint22_x_kickstart, $.checkpoint22_y_kickstart, $.checkpoint22_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint22_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint23_x_kickstart, $.checkpoint23_y_kickstart, $.checkpoint23_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint23_blip_kickstart = Blip.AddForCoordOld($.checkpoint23_x_kickstart, $.checkpoint23_y_kickstart, $.checkpoint23_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint23_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint24_x_kickstart, $.checkpoint24_y_kickstart, $.checkpoint24_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint24_blip_kickstart = Blip.AddForCoordOld($.checkpoint24_x_kickstart, $.checkpoint24_y_kickstart, $.checkpoint24_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint24_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint25_x_kickstart, $.checkpoint25_y_kickstart, $.checkpoint25_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint25_blip_kickstart = Blip.AddForCoordOld($.checkpoint25_x_kickstart, $.checkpoint25_y_kickstart, $.checkpoint25_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint25_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint26_x_kickstart, $.checkpoint26_y_kickstart, $.checkpoint26_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint26_blip_kickstart = Blip.AddForCoordOld($.checkpoint26_x_kickstart, $.checkpoint26_y_kickstart, $.checkpoint26_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint26_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint27_x_kickstart, $.checkpoint27_y_kickstart, $.checkpoint27_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint27_blip_kickstart = Blip.AddForCoordOld($.checkpoint27_x_kickstart, $.checkpoint27_y_kickstart, $.checkpoint27_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint27_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint28_x_kickstart, $.checkpoint28_y_kickstart, $.checkpoint28_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint28_blip_kickstart = Blip.AddForCoordOld($.checkpoint28_x_kickstart, $.checkpoint28_y_kickstart, $.checkpoint28_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint28_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint29_x_kickstart, $.checkpoint29_y_kickstart, $.checkpoint29_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint29_blip_kickstart = Blip.AddForCoordOld($.checkpoint29_x_kickstart, $.checkpoint29_y_kickstart, $.checkpoint29_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint29_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint30_x_kickstart, $.checkpoint30_y_kickstart, $.checkpoint30_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint30_blip_kickstart = Blip.AddForCoordOld($.checkpoint30_x_kickstart, $.checkpoint30_y_kickstart, $.checkpoint30_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint30_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint31_x_kickstart, $.checkpoint31_y_kickstart, $.checkpoint31_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint31_blip_kickstart = Blip.AddForCoordOld($.checkpoint31_x_kickstart, $.checkpoint31_y_kickstart, $.checkpoint31_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint31_blip_kickstart.changeScale(1);


  Fx.DrawCorona($.checkpoint32_x_kickstart, $.checkpoint32_y_kickstart, $.checkpoint32_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
  $.checkpoint32_blip_kickstart = Blip.AddForCoordOld($.checkpoint32_x_kickstart, $.checkpoint32_y_kickstart, $.checkpoint32_z_kickstart, 0, 3 /* BOTH */);
  $.checkpoint32_blip_kickstart.changeScale(1);

  //SWITCH_WIDESCREEN ON

  Game.SetPoliceIgnorePlayer($.player1, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player1, true /* ON */);

  // fades the screen in


  Camera.SetFadingColor(0, 0, 0);


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Camera.SetFixedPosition(-1332.843, 1459.140, 299.987, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1332.882, 1460.137, 300.053, 2 /* JUMP_CUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Car.IsDead($.bike_kickstart)) {
      $.player1.setControl(false /* OFF */);
      Text.PrintNow("KICK1_7", 5000, 1); //"You have wrecked the bike!"
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow


    }
    else {
      $.bike_kickstart.setHealth(1000);
    }
    await checkpoints_kickstart();  // SCM GOSUB checkpoints_kickstart


  }


  Text.PrintNow("KICK_10", 10000, 1); //"Use the Sanchez to complete the course by passing through all of the checkpoints.!


  TIMERA = 0;


  while (TIMERA < 7000) {
    await asyncWait(0);
    if (Car.IsDead($.bike_kickstart)) {
      $.player1.setControl(false /* OFF */);
      Text.PrintNow("KICK1_7", 5000, 1); //"You have wrecked the bike!"
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow


    }
    else {
      $.bike_kickstart.setHealth(1000);
    }
    await checkpoints_kickstart();  // SCM GOSUB checkpoints_kickstart


  }


  Text.ClearThisPrint("KICK_10");


  $.player1.setCoordinates(-1459.980, 1532.382, 301.478);
  Camera.SetFixedPosition(-1454.861, 1526.978, 305.908, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-1453.956, 1527.388, 305.790, 2 /* JUMP_CUT */);
  Text.PrintNow("KICK_11", 10000, 1); //"To leave the mission stand in the pink hilighted area on foot.!


  TIMERA = 0;


  while (TIMERA < 7000) {
    await asyncWait(0);
    if (Car.IsDead($.bike_kickstart)) {
      $.player1.setControl(false /* OFF */);
      Text.PrintNow("KICK1_7", 5000, 1); //"You have wrecked the bike!"
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow


    }
    else {
      $.bike_kickstart.setHealth(1000);
    }
    await checkpoints_kickstart();  // SCM GOSUB checkpoints_kickstart


  }


  Text.ClearThisPrint("KICK_11");


  $.player1.setCoordinates(-1333.326, 1451.837, 298.161);
  $.player1.setHeading(0.0);
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();


  Hud.SwitchWidescreen(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player1, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player1, false /* OFF */);
  Camera.SetBehindPlayer();
  $.player1.setControl(true /* ON */);
  Camera.RestoreJumpcut();


  Text.PrintNow("KICK1_8", 5000, 1); //"Get ont the bike!"


  while (!($.player1.isInCar($.bike_kickstart))) {
    await asyncWait(0);
    if (Car.IsDead($.bike_kickstart)) {
      $.player1.setControl(false /* OFF */);
      Text.PrintNow("KICK1_7", 5000, 1); //"You have wrecked the bike!"
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow


    }
    else {
      $.bike_kickstart.setHealth(1000);
    }
    if ($.race_timer_kickstart >= 3600000 || $.player_taken_too_long_kickstart == 1) {
      $.player1.setControl(false /* OFF */);
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Text.PrintNow("KICK_13", 5000, 1); //"You have taken too long!
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateStoppedOnFoot3D(-1445.728, 1531.96, .33, 301.721, 3.0, 3.0, 3.0, 0 /* FALSE */) || $.player_in_end_area_kickstart == 1) {
      $.player1.setControl(false /* OFF */);
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Text.PrintNow("KICK_12", 5000, 1); //"You bottled it!"
      $.sphere_kickstart.remove();
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
    }


    await checkpoints_kickstart();  // SCM GOSUB checkpoints_kickstart


  }


  $.bike_blip_kickstart.remove();


  $.player1.setControl(true /* ON */);


  Text.PrintNow("KICK1_1", 5000, 1); //"Complete the course!"


  Hud.DisplayCounterWithString($.$id.number_of_checkpoints_kickstart, 0 /* COUNTER_DISPLAY_NUMBER */, "KICK1_9");


  Hud.DisplayTimerWithString($.$id.race_timer_kickstart, TIMER_UP, "KICK1_T");


  TIMERA = 0;

  // Player started the competition


  while (!($.player_checkpoint_kickstart == 32)) {
    await asyncWait(0);

    // player collected the checkpoints audio

    if ($.audio_flag_cheer_kick == 0) {
      if ($.player_checkpoint_kickstart < 8) {
        Audio.LoadMissionAudio(1, "cheer1" as any);
        $.audio_flag_cheer_kick = 1;
      }
      if ($.player_checkpoint_kickstart > 8 && $.player_checkpoint_kickstart < 16) {
        Audio.LoadMissionAudio(1, "cheer2" as any);
        $.audio_flag_cheer_kick = 1;
      }
      if ($.player_checkpoint_kickstart > 16 && $.player_checkpoint_kickstart < 24) {
        Audio.LoadMissionAudio(1, "cheer3" as any);
        $.audio_flag_cheer_kick = 1;
      }
      if ($.player_checkpoint_kickstart > 24 && $.player_checkpoint_kickstart < 32) {
        Audio.LoadMissionAudio(1, "cheer4" as any);
        $.audio_flag_cheer_kick = 1;
      }


    }
    if ($.audio_flag_cheer_kick == 1) {
      if (Audio.HasMissionAudioLoaded(1)) {
        $.audio_flag_cheer_kick = 2;
      }


    }
    if ($.audio_flag_cheer_kick == 2) {
      if ($.player_checkpoint_kickstart == 8) {
        Audio.PlayMissionAudio(1);
        $.audio_flag_cheer_kick = 3;
      }
      if ($.player_checkpoint_kickstart == 16) {
        Audio.PlayMissionAudio(1);
        $.audio_flag_cheer_kick = 3;
      }
      if ($.player_checkpoint_kickstart == 24) {
        Audio.PlayMissionAudio(1);
        $.audio_flag_cheer_kick = 3;
      }
      if ($.player_checkpoint_kickstart == 32) {
        Audio.PlayMissionAudio(1);
        $.audio_flag_cheer_kick = 3;
      }


    }
    if ($.audio_flag_cheer_kick == 3) {
      if (Audio.HasMissionAudioFinished(1)) {
        $.audio_flag_cheer_kick = 4;
      }


    }
    if ($.audio_flag_cheer_kick == 4) {
      $.audio_flag_cheer_kick = 0;
    }

    // player fallen off of bike audio

    if ($.audio_flag_ohh_kick == 0) {
      Audio.LoadMissionAudio(2, "ooh1" as any);
      $.audio_flag_ohh_kick = 1;
    }
    if ($.audio_flag_ohh_kick == 1) {
      if (Audio.HasMissionAudioLoaded(2)) {
        $.audio_flag_ohh_kick = 2;
      }


    }
    if ($.audio_flag_ohh_kick == 3) {
      Audio.HasMissionAudioFinished(2);
      $.audio_flag_ohh_kick = 4;
    }
    if ($.audio_flag_ohh_kick == 4) {
      $.audio_flag_ohh_kick = 0;
    }
    if ($.race_timer_kickstart >= 3600000 || $.player_taken_too_long_kickstart == 1) {
      $.player1.setControl(false /* OFF */);
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Text.PrintNow("KICK_13", 5000, 1); //"You have taken too long!
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
    }
    if ($.player1.locateStoppedOnFoot3D(-1445.728, 1531.96, .33, 301.721, 3.0, 3.0, 3.0, 0 /* FALSE */) || $.player_in_end_area_kickstart == 1) {
      $.player1.setControl(false /* OFF */);
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Text.PrintNow("KICK_12", 5000, 1); //"You bottled it!"
      $.sphere_kickstart.remove();
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
    }
    const _res312 = $.player1.getCoordinates();
$.player_x_kickstart = _res312.x;
$.player_y_kickstart = _res312.y;
$.player_z_kickstart = _res312.z;
    if ($.player_z_kickstart < 290.0) {
      $.player1.setCoordinates(-1333.326, 1451.837, 298.161);
      $.player1.setHeading(0.0);
    }


    if (Car.IsDead($.bike_kickstart) || $.flag_bike_dead_kickstart == 1) {
      $.player1.setControl(false /* OFF */);
      Text.PrintNow("KICK1_7", 5000, 1); //"You have wrecked the bike!"
      Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1000, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);


      }
      // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
    }
    else {
      $.bike_kickstart.setHealth(1000);
      const _res313 = $.bike_kickstart.getCoordinates();
$.bike_x_kickstart = _res313.x;
$.bike_y_kickstart = _res313.y;
$.bike_z_kickstart = _res313.z;
      if ($.bike_z_kickstart < 290.0) {
        $.bike_kickstart.setCoordinates(-1331.994, 1454.152, 298.150);
        $.bike_kickstart.setHeading(0.0);
      }


    }
    await checkpoints_kickstart();  // SCM GOSUB checkpoints_kickstart
    if ($.flag_done_checkpoint1_kickstart == 0) {
      Fx.DrawCorona($.checkpoint1_x_kickstart, $.checkpoint1_y_kickstart, $.checkpoint1_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint2_kickstart == 0) {
      Fx.DrawCorona($.checkpoint2_x_kickstart, $.checkpoint2_y_kickstart, $.checkpoint2_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint3_kickstart == 0) {
      Fx.DrawCorona($.checkpoint3_x_kickstart, $.checkpoint3_y_kickstart, $.checkpoint3_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint4_kickstart == 0) {
      Fx.DrawCorona($.checkpoint4_x_kickstart, $.checkpoint4_y_kickstart, $.checkpoint4_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint5_kickstart == 0) {
      Fx.DrawCorona($.checkpoint5_x_kickstart, $.checkpoint5_y_kickstart, $.checkpoint5_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint6_kickstart == 0) {
      Fx.DrawCorona($.checkpoint6_x_kickstart, $.checkpoint6_y_kickstart, $.checkpoint6_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint7_kickstart == 0) {
      Fx.DrawCorona($.checkpoint7_x_kickstart, $.checkpoint7_y_kickstart, $.checkpoint7_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint8_kickstart == 0) {
      Fx.DrawCorona($.checkpoint8_x_kickstart, $.checkpoint8_y_kickstart, $.checkpoint8_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint9_kickstart == 0) {
      Fx.DrawCorona($.checkpoint9_x_kickstart, $.checkpoint9_y_kickstart, $.checkpoint9_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint10_kickstart == 0) {
      Fx.DrawCorona($.checkpoint10_x_kickstart, $.checkpoint10_y_kickstart, $.checkpoint10_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint11_kickstart == 0) {
      Fx.DrawCorona($.checkpoint11_x_kickstart, $.checkpoint11_y_kickstart, $.checkpoint11_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint12_kickstart == 0) {
      Fx.DrawCorona($.checkpoint12_x_kickstart, $.checkpoint12_y_kickstart, $.checkpoint12_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint13_kickstart == 0) {
      Fx.DrawCorona($.checkpoint13_x_kickstart, $.checkpoint13_y_kickstart, $.checkpoint13_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint14_kickstart == 0) {
      Fx.DrawCorona($.checkpoint14_x_kickstart, $.checkpoint14_y_kickstart, $.checkpoint14_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint15_kickstart == 0) {
      Fx.DrawCorona($.checkpoint15_x_kickstart, $.checkpoint15_y_kickstart, $.checkpoint15_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint16_kickstart == 0) {
      Fx.DrawCorona($.checkpoint16_x_kickstart, $.checkpoint16_y_kickstart, $.checkpoint16_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint17_kickstart == 0) {
      Fx.DrawCorona($.checkpoint17_x_kickstart, $.checkpoint17_y_kickstart, $.checkpoint17_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint18_kickstart == 0) {
      Fx.DrawCorona($.checkpoint18_x_kickstart, $.checkpoint18_y_kickstart, $.checkpoint18_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint19_kickstart == 0) {
      Fx.DrawCorona($.checkpoint19_x_kickstart, $.checkpoint19_y_kickstart, $.checkpoint19_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint20_kickstart == 0) {
      Fx.DrawCorona($.checkpoint20_x_kickstart, $.checkpoint20_y_kickstart, $.checkpoint20_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint21_kickstart == 0) {
      Fx.DrawCorona($.checkpoint21_x_kickstart, $.checkpoint21_y_kickstart, $.checkpoint21_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint22_kickstart == 0) {
      Fx.DrawCorona($.checkpoint22_x_kickstart, $.checkpoint22_y_kickstart, $.checkpoint22_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint23_kickstart == 0) {
      Fx.DrawCorona($.checkpoint23_x_kickstart, $.checkpoint23_y_kickstart, $.checkpoint23_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint24_kickstart == 0) {
      Fx.DrawCorona($.checkpoint24_x_kickstart, $.checkpoint24_y_kickstart, $.checkpoint24_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint25_kickstart == 0) {
      Fx.DrawCorona($.checkpoint25_x_kickstart, $.checkpoint25_y_kickstart, $.checkpoint25_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint26_kickstart == 0) {
      Fx.DrawCorona($.checkpoint26_x_kickstart, $.checkpoint26_y_kickstart, $.checkpoint26_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint27_kickstart == 0) {
      Fx.DrawCorona($.checkpoint27_x_kickstart, $.checkpoint27_y_kickstart, $.checkpoint27_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint28_kickstart == 0) {
      Fx.DrawCorona($.checkpoint28_x_kickstart, $.checkpoint28_y_kickstart, $.checkpoint28_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint29_kickstart == 0) {
      Fx.DrawCorona($.checkpoint29_x_kickstart, $.checkpoint29_y_kickstart, $.checkpoint29_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint30_kickstart == 0) {
      Fx.DrawCorona($.checkpoint30_x_kickstart, $.checkpoint30_y_kickstart, $.checkpoint30_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint31_kickstart == 0) {
      Fx.DrawCorona($.checkpoint31_x_kickstart, $.checkpoint31_y_kickstart, $.checkpoint31_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    if ($.flag_done_checkpoint32_kickstart == 0) {
      Fx.DrawCorona($.checkpoint32_x_kickstart, $.checkpoint32_y_kickstart, $.checkpoint32_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    }
    // SCM label bike_check_kickstart
    if ($.player1.locateStoppedOnFoot3D(-1445.728, 1531.96, .33, 301.721, 3.0, 3.0, 3.0, 0 /* FALSE */)) {
      $.player_in_end_area_kickstart = 1;
    }
    if (!($.player1.isInModel(SANCHEZ))) {
      if ($.flag_bike_blip_on_kickstart == 0) {
        $.bike_blip_kickstart = Blip.AddForCar($.bike_kickstart);
        if ($.audio_flag_ohh_kick == 2) {
          Audio.PlayMissionAudio(2);
          $.audio_flag_ohh_kick = 3;
        }
        $.flag_bike_blip_on_kickstart = 1;
      }
      $.time_bailed_ks = Clock.GetGameTimer();
      $.time_left_to_find_bike_ks = 30000;
      while ($.time_left_to_find_bike_ks > 0) {
        await asyncWait(0);
        if ($.audio_flag_cheer_kick == 0) {
          if ($.player_checkpoint_kickstart < 8) {
            Audio.LoadMissionAudio(1, "cheer1" as any);
            $.audio_flag_cheer_kick = 1;
          }
          if ($.player_checkpoint_kickstart > 8 && $.player_checkpoint_kickstart < 16) {
            Audio.LoadMissionAudio(1, "cheer2" as any);
            $.audio_flag_cheer_kick = 1;
          }
          if ($.player_checkpoint_kickstart > 16 && $.player_checkpoint_kickstart < 24) {
            Audio.LoadMissionAudio(1, "cheer3" as any);
            $.audio_flag_cheer_kick = 1;
          }
          if ($.player_checkpoint_kickstart > 24 && $.player_checkpoint_kickstart < 32) {
            Audio.LoadMissionAudio(1, "cheer4" as any);
            $.audio_flag_cheer_kick = 1;
          }


        }
        if ($.audio_flag_cheer_kick == 1) {
          if (Audio.HasMissionAudioLoaded(1)) {
            $.audio_flag_cheer_kick = 2;
          }


        }
        if ($.audio_flag_cheer_kick == 2) {
          if ($.player_checkpoint_kickstart == 8) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }
          if ($.player_checkpoint_kickstart == 16) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }
          if ($.player_checkpoint_kickstart == 24) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }
          if ($.player_checkpoint_kickstart == 32) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }


        }
        if ($.audio_flag_cheer_kick == 3) {
          if (Audio.HasMissionAudioFinished(1)) {
            $.audio_flag_cheer_kick = 4;
          }


        }
        if ($.audio_flag_cheer_kick == 4) {
          $.audio_flag_cheer_kick = 0;
        }

        // player fallen off of bike audio

        if ($.audio_flag_ohh_kick == 0) {
          Audio.LoadMissionAudio(2, "ooh1" as any);
          $.audio_flag_ohh_kick = 1;
        }
        if ($.audio_flag_ohh_kick == 1) {
          if (Audio.HasMissionAudioLoaded(2)) {
            $.audio_flag_ohh_kick = 2;
          }


        }
        if ($.audio_flag_ohh_kick == 3) {
          Audio.HasMissionAudioFinished(2);
          $.audio_flag_ohh_kick = 4;
        }
        if ($.audio_flag_ohh_kick == 4) {
          $.audio_flag_ohh_kick = 0;
        }
        if ($.race_timer_kickstart >= 3600000 || $.player_taken_too_long_kickstart == 1) {
          $.player1.setControl(false /* OFF */);
          Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
          Text.PrintNow("KICK_13", 5000, 1); //"You have taken too long!
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1000, 0 /* FADE_OUT */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);


          }
          // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
        }
        if ($.player1.locateStoppedOnFoot3D(-1445.728, 1531.96, .33, 301.721, 3.0, 3.0, 3.0, 0 /* FALSE */) || $.player_in_end_area_kickstart == 1) {
          $.player1.setControl(false /* OFF */);
          Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
          Text.PrintNow("KICK_12", 5000, 1); //"You bottled it!"
          $.sphere_kickstart.remove();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1000, 0 /* FADE_OUT */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);


          }
          // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
        }
        if ($.flag_done_checkpoint1_kickstart == 0) {
          Fx.DrawCorona($.checkpoint1_x_kickstart, $.checkpoint1_y_kickstart, $.checkpoint1_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint2_kickstart == 0) {
          Fx.DrawCorona($.checkpoint2_x_kickstart, $.checkpoint2_y_kickstart, $.checkpoint2_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint3_kickstart == 0) {
          Fx.DrawCorona($.checkpoint3_x_kickstart, $.checkpoint3_y_kickstart, $.checkpoint3_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint4_kickstart == 0) {
          Fx.DrawCorona($.checkpoint4_x_kickstart, $.checkpoint4_y_kickstart, $.checkpoint4_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint5_kickstart == 0) {
          Fx.DrawCorona($.checkpoint5_x_kickstart, $.checkpoint5_y_kickstart, $.checkpoint5_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint6_kickstart == 0) {
          Fx.DrawCorona($.checkpoint6_x_kickstart, $.checkpoint6_y_kickstart, $.checkpoint6_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint7_kickstart == 0) {
          Fx.DrawCorona($.checkpoint7_x_kickstart, $.checkpoint7_y_kickstart, $.checkpoint7_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint8_kickstart == 0) {
          Fx.DrawCorona($.checkpoint8_x_kickstart, $.checkpoint8_y_kickstart, $.checkpoint8_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint9_kickstart == 0) {
          Fx.DrawCorona($.checkpoint9_x_kickstart, $.checkpoint9_y_kickstart, $.checkpoint9_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint10_kickstart == 0) {
          Fx.DrawCorona($.checkpoint10_x_kickstart, $.checkpoint10_y_kickstart, $.checkpoint10_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint11_kickstart == 0) {
          Fx.DrawCorona($.checkpoint11_x_kickstart, $.checkpoint11_y_kickstart, $.checkpoint11_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint12_kickstart == 0) {
          Fx.DrawCorona($.checkpoint12_x_kickstart, $.checkpoint12_y_kickstart, $.checkpoint12_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint13_kickstart == 0) {
          Fx.DrawCorona($.checkpoint13_x_kickstart, $.checkpoint13_y_kickstart, $.checkpoint13_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint14_kickstart == 0) {
          Fx.DrawCorona($.checkpoint14_x_kickstart, $.checkpoint14_y_kickstart, $.checkpoint14_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint15_kickstart == 0) {
          Fx.DrawCorona($.checkpoint15_x_kickstart, $.checkpoint15_y_kickstart, $.checkpoint15_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint16_kickstart == 0) {
          Fx.DrawCorona($.checkpoint16_x_kickstart, $.checkpoint16_y_kickstart, $.checkpoint16_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint17_kickstart == 0) {
          Fx.DrawCorona($.checkpoint17_x_kickstart, $.checkpoint17_y_kickstart, $.checkpoint17_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint18_kickstart == 0) {
          Fx.DrawCorona($.checkpoint18_x_kickstart, $.checkpoint18_y_kickstart, $.checkpoint18_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint19_kickstart == 0) {
          Fx.DrawCorona($.checkpoint19_x_kickstart, $.checkpoint19_y_kickstart, $.checkpoint19_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint20_kickstart == 0) {
          Fx.DrawCorona($.checkpoint20_x_kickstart, $.checkpoint20_y_kickstart, $.checkpoint20_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint21_kickstart == 0) {
          Fx.DrawCorona($.checkpoint21_x_kickstart, $.checkpoint21_y_kickstart, $.checkpoint21_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint22_kickstart == 0) {
          Fx.DrawCorona($.checkpoint22_x_kickstart, $.checkpoint22_y_kickstart, $.checkpoint22_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint23_kickstart == 0) {
          Fx.DrawCorona($.checkpoint23_x_kickstart, $.checkpoint23_y_kickstart, $.checkpoint23_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint24_kickstart == 0) {
          Fx.DrawCorona($.checkpoint24_x_kickstart, $.checkpoint24_y_kickstart, $.checkpoint24_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint25_kickstart == 0) {
          Fx.DrawCorona($.checkpoint25_x_kickstart, $.checkpoint25_y_kickstart, $.checkpoint25_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint26_kickstart == 0) {
          Fx.DrawCorona($.checkpoint26_x_kickstart, $.checkpoint26_y_kickstart, $.checkpoint26_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint27_kickstart == 0) {
          Fx.DrawCorona($.checkpoint27_x_kickstart, $.checkpoint27_y_kickstart, $.checkpoint27_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint28_kickstart == 0) {
          Fx.DrawCorona($.checkpoint28_x_kickstart, $.checkpoint28_y_kickstart, $.checkpoint28_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint29_kickstart == 0) {
          Fx.DrawCorona($.checkpoint29_x_kickstart, $.checkpoint29_y_kickstart, $.checkpoint29_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint30_kickstart == 0) {
          Fx.DrawCorona($.checkpoint30_x_kickstart, $.checkpoint30_y_kickstart, $.checkpoint30_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint31_kickstart == 0) {
          Fx.DrawCorona($.checkpoint31_x_kickstart, $.checkpoint31_y_kickstart, $.checkpoint31_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        if ($.flag_done_checkpoint32_kickstart == 0) {
          Fx.DrawCorona($.checkpoint32_x_kickstart, $.checkpoint32_y_kickstart, $.checkpoint32_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
        }
        $.time_now_ks = Clock.GetGameTimer();
        $.time_off_bike_ks = $.time_now_ks - $.time_bailed_ks;
        $.time_bailed_ks = $.time_now_ks;
        $.time_left_to_find_bike_ks = $.time_left_to_find_bike_ks - $.time_off_bike_ks;
        $.time_left_to_find_bike_secs_ks = $.time_left_to_find_bike_ks / 1000;
        Text.PrintWithNumberNow("GETBIKE", $.time_left_to_find_bike_secs_ks, 1000, 1); //"time left to get onto bike!"
        if ($.player1.isInModel(SANCHEZ)) {
          Text.ClearThisPrint("GETBIKE");
          $.time_left_to_find_bike_ks = 1;
          // SCM GOTO → bike_check_kickstart (not lowered; manual jump required)
          throw new Error("unresolved GOTO bike_check_kickstart"); // fallback: would break linear control flow
        }


      }
      if ($.time_left_to_find_bike_ks <= 0) {
        Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
        Text.PrintNow("KICK1_2", 5000, 1); //"You did not get back to the bike quickly enough!"
        $.player1.setControl(false /* OFF */);
        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);


        }
        // SCM GOTO → mission_kickstart_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kickstart_failed"); // fallback: would break linear control flow
      }


    }
    else {
      Text.ClearThisPrint("GETBIKE");
      if ($.flag_bike_blip_on_kickstart == 1) {
        $.bike_blip_kickstart.remove();
        $.flag_bike_blip_on_kickstart = 0;
      }


    }


  }


  Hud.ClearTimer($.$id.race_timer_kickstart);
  Hud.ClearCounter($.$id.number_of_checkpoints_kickstart);


  // SCM GOTO → mission_kickstart_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kickstart_passed"); // fallback: would break linear control flow
}


// ****************************************** Mission Failed *******************************


async function mission_kickstart_failed() {


  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
}




// *************************************** Mission Passed **********************************


async function mission_kickstart_passed() {


  if ($.flag_kickstart_passed_1stime == 0) {
    Stat.RegisterOddjobMissionPassed();
    Stat.PlayerMadeProgress(1);
    $.flag_kickstart_passed_1stime = 1;
  }


  Audio.PlayMissionPassedTune(1);
  Audio.SetMusicDoesFade(false /* FALSE */);
  $.player1.clearWantedLevel();


  if ($.player_been_rewarded_kickstart == 0) {
    if ($.race_timer_kickstart <= 300000) {
      Text.PrintWithNumberBig("M_PASS", 50000, 5000, 1); //"Mission Passed!"
      $.player1.addScore(50000);
      $.player_been_rewarded_kickstart = 1;
    }


  }


  if ($.player_been_rewarded_kickstart == 0) {
    if ($.race_timer_kickstart <= 600000) {
      Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1); //"Mission Passed!"
      $.player1.addScore(10000);
      $.player_been_rewarded_kickstart = 1;
    }


  }


  if ($.player_been_rewarded_kickstart == 0) {
    if ($.race_timer_kickstart <= 3600000) {
      Text.PrintWithNumberBig("M_PASS", 5000, 5000, 1); //"Mission Passed!"
      $.player1.addScore(5000);
      $.player_been_rewarded_kickstart = 1;
    }


  }


  $.race_timer_seconds_kickstart = $.race_timer_kickstart / 1000;
  Stat.RegisterFastestTime(2, $.race_timer_seconds_kickstart);
  $.race_timer_mins_kickstart = $.race_timer_seconds_kickstart / 60;
  $.race_timer_seconds2_kickstart = $.race_timer_mins_kickstart * 60;
  $.race_timer_seconds_kickstart = $.race_timer_seconds_kickstart - $.race_timer_seconds2_kickstart;


  if ($.race_timer_seconds_kickstart >= 10) {
    Text.PrintWith2NumbersNow("KICKTM", $.race_timer_mins_kickstart, $.race_timer_seconds_kickstart, 5000, 1);
  }
  else {
    Text.PrintWith2NumbersNow("KICKTM2", $.race_timer_mins_kickstart, $.race_timer_seconds_kickstart, 5000, 1);
  }


  await asyncWait(3000);


  $.player1.setControl(false /* OFF */);


  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1000, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  Audio.SetMusicDoesFade(true /* TRUE */);
}




// *************************************** Mission Cleanup *********************************


async function mission_cleanup_kickstart() {


  ONMISSION = 0;
  Text.ClearPrints();
  World.ClearExtraColors(false /* FALSE */);
  Audio.SetMusicDoesFade(true /* TRUE */);


  $.sphere_kickstart.remove();
  $.checkpoint1_blip_kickstart.remove();
  $.checkpoint2_blip_kickstart.remove();
  $.checkpoint3_blip_kickstart.remove();
  $.checkpoint4_blip_kickstart.remove();
  $.checkpoint5_blip_kickstart.remove();
  $.checkpoint6_blip_kickstart.remove();
  $.checkpoint7_blip_kickstart.remove();
  $.checkpoint8_blip_kickstart.remove();
  $.checkpoint9_blip_kickstart.remove();
  $.checkpoint10_blip_kickstart.remove();
  $.checkpoint11_blip_kickstart.remove();
  $.checkpoint12_blip_kickstart.remove();
  $.checkpoint13_blip_kickstart.remove();
  $.checkpoint14_blip_kickstart.remove();
  $.checkpoint15_blip_kickstart.remove();
  $.checkpoint16_blip_kickstart.remove();
  $.checkpoint17_blip_kickstart.remove();
  $.checkpoint18_blip_kickstart.remove();
  $.checkpoint19_blip_kickstart.remove();
  $.checkpoint20_blip_kickstart.remove();
  $.checkpoint21_blip_kickstart.remove();
  $.checkpoint22_blip_kickstart.remove();
  $.checkpoint23_blip_kickstart.remove();
  $.checkpoint24_blip_kickstart.remove();
  $.checkpoint25_blip_kickstart.remove();
  $.checkpoint26_blip_kickstart.remove();
  $.checkpoint27_blip_kickstart.remove();
  $.checkpoint28_blip_kickstart.remove();
  $.checkpoint29_blip_kickstart.remove();
  $.checkpoint30_blip_kickstart.remove();
  $.checkpoint31_blip_kickstart.remove();
  $.checkpoint32_blip_kickstart.remove();
  $.bike_blip_kickstart.remove();
  Streaming.MarkModelAsNoLongerNeeded(SANCHEZ);
  Hud.ClearTimer($.$id.race_timer_kickstart);
  Hud.ClearCounter($.$id.number_of_checkpoints_kickstart);


  Streaming.LoadScene(-1101.0, 1331.0, 19.1);


  if (!(HAS_DEATHARREST_BEEN_EXECUTED()) || $.flag_kickstart_mission1_passed == 1) {
    Streaming.SetAreaVisible(VIS_MAIN_MAP);
    Streaming.LoadScene(-1101.0, 1331.0, 19.1);
    if ($.player1.isInAnyCar()) {
      $.player1.warpFromCarToCoord(-1101.0, 1331.0, 19.1);
    }
    else {
      $.player1.setCoordinates(-1101.0, 1331.0, 19.1);
    }
    $.player1.setHeading(278.650);
    Camera.RestoreJumpcut();
    Camera.SetInFrontOfPlayer();
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(1500, 1 /* FADE_IN */);
    $.player1.setControl(true /* ON */);
  }


  Game.SetIsInStadium(false /* FALSE */);
  $.timer_mobile_start = Clock.GetGameTimer();
  Mission.Finish();
}




async function checkpoints_kickstart() {


  if ($.audio_flag_cheer_kick == 0) {
    if ($.player_checkpoint_kickstart < 8) {
      Audio.LoadMissionAudio(1, "cheer1" as any);
      $.audio_flag_cheer_kick = 1;
    }
    if ($.player_checkpoint_kickstart > 8 && $.player_checkpoint_kickstart < 16) {
      Audio.LoadMissionAudio(1, "cheer2" as any);
      $.audio_flag_cheer_kick = 1;
    }
    if ($.player_checkpoint_kickstart > 16 && $.player_checkpoint_kickstart < 24) {
      Audio.LoadMissionAudio(1, "cheer3" as any);
      $.audio_flag_cheer_kick = 1;
    }
    if ($.player_checkpoint_kickstart > 24 && $.player_checkpoint_kickstart < 32) {
      Audio.LoadMissionAudio(1, "cheer4" as any);
      $.audio_flag_cheer_kick = 1;
    }


  }


  if ($.audio_flag_cheer_kick == 1) {
    if (Audio.HasMissionAudioLoaded(1)) {
      $.audio_flag_cheer_kick = 2;
    }


  }


  if ($.audio_flag_cheer_kick == 2) {
    if ($.player_checkpoint_kickstart == 8) {
      Audio.PlayMissionAudio(1);
      $.audio_flag_cheer_kick = 3;
    }
    if ($.player_checkpoint_kickstart == 16) {
      Audio.PlayMissionAudio(1);
      $.audio_flag_cheer_kick = 3;
    }
    if ($.player_checkpoint_kickstart == 24) {
      Audio.PlayMissionAudio(1);
      $.audio_flag_cheer_kick = 3;
    }
    if ($.player_checkpoint_kickstart == 32) {
      Audio.PlayMissionAudio(1);
      $.audio_flag_cheer_kick = 3;
    }


  }


  if ($.audio_flag_cheer_kick == 3) {
    if (Audio.HasMissionAudioFinished(1)) {
      $.audio_flag_cheer_kick = 4;
    }


  }


  if ($.audio_flag_cheer_kick == 4) {
    $.audio_flag_cheer_kick = 0;
  }

  // player fallen off of bike audio


  if ($.audio_flag_ohh_kick == 0) {
    Audio.LoadMissionAudio(2, "ooh1" as any);
    $.audio_flag_ohh_kick = 1;
  }


  if ($.audio_flag_ohh_kick == 1) {
    if (Audio.HasMissionAudioLoaded(2)) {
      $.audio_flag_ohh_kick = 2;
    }


  }


  if ($.audio_flag_ohh_kick == 3) {
    Audio.HasMissionAudioFinished(2);
    $.audio_flag_ohh_kick = 4;
  }


  if ($.audio_flag_ohh_kick == 4) {
    $.audio_flag_ohh_kick = 0;
  }


  if ($.race_timer_kickstart >= 3600000) {
    $.player_taken_too_long_kickstart = 1;
  }


  if ($.player1.locateStoppedOnFoot3D(-1445.728, 1531.96, .33, 301.721, 3.0, 3.0, 3.0, 0 /* FALSE */)) {
    $.player_in_end_area_kickstart = 1;
  }


  const _res314 = $.player1.getCoordinates();
$.player_x_kickstart = _res314.x;
$.player_y_kickstart = _res314.y;
$.player_z_kickstart = _res314.z;


  if ($.player_z_kickstart < 290.0) {
    $.player1.setCoordinates(-1333.326, 1451.837, 298.161);
    $.player1.setHeading(0.0);
  }


  if (Car.IsDead($.bike_kickstart)) {
    Text.PrintNow("KICK1_7", 5000, 1); //"You have wrecked the bike!"
    $.flag_bike_dead_kickstart = 1;
  }
  else {
    $.bike_kickstart.setHealth(1000);
    const _res315 = $.bike_kickstart.getCoordinates();
$.bike_x_kickstart = _res315.x;
$.bike_y_kickstart = _res315.y;
$.bike_z_kickstart = _res315.z;
    if ($.bike_z_kickstart < 290.0) {
      $.bike_kickstart.setCoordinates(-1331.994, 1454.152, 298.150);
      $.bike_kickstart.setHeading(0.0);
    }


  }


  if ($.flag_done_checkpoint1_kickstart == 0) {
    Fx.DrawCorona($.checkpoint1_x_kickstart, $.checkpoint1_y_kickstart, $.checkpoint1_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint1_x_kickstart, $.checkpoint1_y_kickstart, $.checkpoint1_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint1_x_kickstart, $.checkpoint1_y_kickstart, $.checkpoint1_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint1_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint1_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint2_kickstart == 0) {
    Fx.DrawCorona($.checkpoint2_x_kickstart, $.checkpoint2_y_kickstart, $.checkpoint2_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint2_x_kickstart, $.checkpoint2_y_kickstart, $.checkpoint2_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        if ($.audio_flag_cheer_kick == 2) {
          if (!($.player_checkpoint_kickstart == 7) && !($.player_checkpoint_kickstart == 15) && !($.player_checkpoint_kickstart == 23) && !($.player_checkpoint_kickstart == 31)) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }


        }
        Sound.AddOneOffSound($.checkpoint2_x_kickstart, $.checkpoint2_y_kickstart, $.checkpoint2_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint2_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint2_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint3_kickstart == 0) {
    Fx.DrawCorona($.checkpoint3_x_kickstart, $.checkpoint3_y_kickstart, $.checkpoint3_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint3_x_kickstart, $.checkpoint3_y_kickstart, $.checkpoint3_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint3_x_kickstart, $.checkpoint3_y_kickstart, $.checkpoint3_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint3_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint3_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint4_kickstart == 0) {
    Fx.DrawCorona($.checkpoint4_x_kickstart, $.checkpoint4_y_kickstart, $.checkpoint4_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint4_x_kickstart, $.checkpoint4_y_kickstart, $.checkpoint4_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint4_x_kickstart, $.checkpoint4_y_kickstart, $.checkpoint4_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint4_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint4_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint5_kickstart == 0) {
    Fx.DrawCorona($.checkpoint5_x_kickstart, $.checkpoint5_y_kickstart, $.checkpoint5_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint5_x_kickstart, $.checkpoint5_y_kickstart, $.checkpoint5_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint5_x_kickstart, $.checkpoint5_y_kickstart, $.checkpoint5_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint5_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint5_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint6_kickstart == 0) {
    Fx.DrawCorona($.checkpoint6_x_kickstart, $.checkpoint6_y_kickstart, $.checkpoint6_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint6_x_kickstart, $.checkpoint6_y_kickstart, $.checkpoint6_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        if ($.audio_flag_cheer_kick == 2) {
          if (!($.player_checkpoint_kickstart == 7) && !($.player_checkpoint_kickstart == 15) && !($.player_checkpoint_kickstart == 23) && !($.player_checkpoint_kickstart == 31)) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }


        }
        Sound.AddOneOffSound($.checkpoint6_x_kickstart, $.checkpoint6_y_kickstart, $.checkpoint6_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint6_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint6_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint7_kickstart == 0) {
    Fx.DrawCorona($.checkpoint7_x_kickstart, $.checkpoint7_y_kickstart, $.checkpoint7_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint7_x_kickstart, $.checkpoint7_y_kickstart, $.checkpoint7_z_kickstart, 2.0, 2.0, 2.0, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        if ($.audio_flag_cheer_kick == 2) {
          if (!($.player_checkpoint_kickstart == 7) && !($.player_checkpoint_kickstart == 15) && !($.player_checkpoint_kickstart == 23) && !($.player_checkpoint_kickstart == 31)) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }


        }
        Sound.AddOneOffSound($.checkpoint7_x_kickstart, $.checkpoint7_y_kickstart, $.checkpoint7_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint7_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint7_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint8_kickstart == 0) {
    Fx.DrawCorona($.checkpoint8_x_kickstart, $.checkpoint8_y_kickstart, $.checkpoint8_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint8_x_kickstart, $.checkpoint8_y_kickstart, $.checkpoint8_z_kickstart, 2.0, 2.0, 2.0, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        if ($.audio_flag_cheer_kick == 2) {
          if (!($.player_checkpoint_kickstart == 7) && !($.player_checkpoint_kickstart == 15) && !($.player_checkpoint_kickstart == 23) && !($.player_checkpoint_kickstart == 31)) {
            Audio.PlayMissionAudio(1);
            $.audio_flag_cheer_kick = 3;
          }


        }
        Sound.AddOneOffSound($.checkpoint8_x_kickstart, $.checkpoint8_y_kickstart, $.checkpoint8_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint8_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint8_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint9_kickstart == 0) {
    Fx.DrawCorona($.checkpoint9_x_kickstart, $.checkpoint9_y_kickstart, $.checkpoint9_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint9_x_kickstart, $.checkpoint9_y_kickstart, $.checkpoint9_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint9_x_kickstart, $.checkpoint9_y_kickstart, $.checkpoint9_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint9_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint9_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint10_kickstart == 0) {
    Fx.DrawCorona($.checkpoint10_x_kickstart, $.checkpoint10_y_kickstart, $.checkpoint10_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint10_x_kickstart, $.checkpoint10_y_kickstart, $.checkpoint10_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint10_x_kickstart, $.checkpoint10_y_kickstart, $.checkpoint10_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint10_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint10_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint11_kickstart == 0) {
    Fx.DrawCorona($.checkpoint11_x_kickstart, $.checkpoint11_y_kickstart, $.checkpoint11_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint11_x_kickstart, $.checkpoint11_y_kickstart, $.checkpoint11_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint11_x_kickstart, $.checkpoint11_y_kickstart, $.checkpoint11_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint11_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint11_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint12_kickstart == 0) {
    Fx.DrawCorona($.checkpoint12_x_kickstart, $.checkpoint12_y_kickstart, $.checkpoint12_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint12_x_kickstart, $.checkpoint12_y_kickstart, $.checkpoint12_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint12_x_kickstart, $.checkpoint12_y_kickstart, $.checkpoint12_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint12_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint12_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint13_kickstart == 0) {
    Fx.DrawCorona($.checkpoint13_x_kickstart, $.checkpoint13_y_kickstart, $.checkpoint13_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint13_x_kickstart, $.checkpoint13_y_kickstart, $.checkpoint13_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint13_x_kickstart, $.checkpoint13_y_kickstart, $.checkpoint13_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint13_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint13_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint14_kickstart == 0) {
    Fx.DrawCorona($.checkpoint14_x_kickstart, $.checkpoint14_y_kickstart, $.checkpoint14_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint14_x_kickstart, $.checkpoint14_y_kickstart, $.checkpoint14_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint14_x_kickstart, $.checkpoint14_y_kickstart, $.checkpoint14_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint14_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint14_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint15_kickstart == 0) {
    Fx.DrawCorona($.checkpoint15_x_kickstart, $.checkpoint15_y_kickstart, $.checkpoint15_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint15_x_kickstart, $.checkpoint15_y_kickstart, $.checkpoint15_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint15_x_kickstart, $.checkpoint15_y_kickstart, $.checkpoint15_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint15_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint15_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint16_kickstart == 0) {
    Fx.DrawCorona($.checkpoint16_x_kickstart, $.checkpoint16_y_kickstart, $.checkpoint16_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint16_x_kickstart, $.checkpoint16_y_kickstart, $.checkpoint16_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint16_x_kickstart, $.checkpoint16_y_kickstart, $.checkpoint16_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint16_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint16_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint17_kickstart == 0) {
    Fx.DrawCorona($.checkpoint17_x_kickstart, $.checkpoint17_y_kickstart, $.checkpoint17_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint17_x_kickstart, $.checkpoint17_y_kickstart, $.checkpoint17_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint17_x_kickstart, $.checkpoint17_y_kickstart, $.checkpoint17_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint17_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint17_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint18_kickstart == 0) {
    Fx.DrawCorona($.checkpoint18_x_kickstart, $.checkpoint18_y_kickstart, $.checkpoint18_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint18_x_kickstart, $.checkpoint18_y_kickstart, $.checkpoint18_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint18_x_kickstart, $.checkpoint18_y_kickstart, $.checkpoint18_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint18_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint18_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint19_kickstart == 0) {
    Fx.DrawCorona($.checkpoint19_x_kickstart, $.checkpoint19_y_kickstart, $.checkpoint19_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint19_x_kickstart, $.checkpoint19_y_kickstart, $.checkpoint19_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint19_x_kickstart, $.checkpoint19_y_kickstart, $.checkpoint19_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint19_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint19_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint20_kickstart == 0) {
    Fx.DrawCorona($.checkpoint20_x_kickstart, $.checkpoint20_y_kickstart, $.checkpoint20_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint20_x_kickstart, $.checkpoint20_y_kickstart, $.checkpoint20_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint20_x_kickstart, $.checkpoint20_y_kickstart, $.checkpoint20_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint20_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint20_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint21_kickstart == 0) {
    Fx.DrawCorona($.checkpoint21_x_kickstart, $.checkpoint21_y_kickstart, $.checkpoint21_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint21_x_kickstart, $.checkpoint21_y_kickstart, $.checkpoint21_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint21_x_kickstart, $.checkpoint21_y_kickstart, $.checkpoint21_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint21_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint21_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint22_kickstart == 0) {
    Fx.DrawCorona($.checkpoint22_x_kickstart, $.checkpoint22_y_kickstart, $.checkpoint22_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint22_x_kickstart, $.checkpoint22_y_kickstart, $.checkpoint22_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint22_x_kickstart, $.checkpoint22_y_kickstart, $.checkpoint22_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint22_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint22_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint23_kickstart == 0) {
    Fx.DrawCorona($.checkpoint23_x_kickstart, $.checkpoint23_y_kickstart, $.checkpoint23_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint23_x_kickstart, $.checkpoint23_y_kickstart, $.checkpoint23_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint23_x_kickstart, $.checkpoint23_y_kickstart, $.checkpoint23_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint23_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint23_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint24_kickstart == 0) {
    Fx.DrawCorona($.checkpoint24_x_kickstart, $.checkpoint24_y_kickstart, $.checkpoint24_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint24_x_kickstart, $.checkpoint24_y_kickstart, $.checkpoint24_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint24_x_kickstart, $.checkpoint24_y_kickstart, $.checkpoint24_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint24_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint24_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint25_kickstart == 0) {
    Fx.DrawCorona($.checkpoint25_x_kickstart, $.checkpoint25_y_kickstart, $.checkpoint25_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint25_x_kickstart, $.checkpoint25_y_kickstart, $.checkpoint25_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint25_x_kickstart, $.checkpoint25_y_kickstart, $.checkpoint25_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint25_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint25_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint26_kickstart == 0) {
    Fx.DrawCorona($.checkpoint26_x_kickstart, $.checkpoint26_y_kickstart, $.checkpoint26_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint26_x_kickstart, $.checkpoint26_y_kickstart, $.checkpoint26_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint26_x_kickstart, $.checkpoint26_y_kickstart, $.checkpoint26_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint26_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint26_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint27_kickstart == 0) {
    Fx.DrawCorona($.checkpoint27_x_kickstart, $.checkpoint27_y_kickstart, $.checkpoint27_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint27_x_kickstart, $.checkpoint27_y_kickstart, $.checkpoint27_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint27_x_kickstart, $.checkpoint27_y_kickstart, $.checkpoint27_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint27_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint27_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint28_kickstart == 0) {
    Fx.DrawCorona($.checkpoint28_x_kickstart, $.checkpoint28_y_kickstart, $.checkpoint28_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint28_x_kickstart, $.checkpoint28_y_kickstart, $.checkpoint28_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint28_x_kickstart, $.checkpoint28_y_kickstart, $.checkpoint28_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint28_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint28_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint29_kickstart == 0) {
    Fx.DrawCorona($.checkpoint29_x_kickstart, $.checkpoint29_y_kickstart, $.checkpoint29_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint29_x_kickstart, $.checkpoint29_y_kickstart, $.checkpoint29_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint29_x_kickstart, $.checkpoint29_y_kickstart, $.checkpoint29_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint29_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint29_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint30_kickstart == 0) {
    Fx.DrawCorona($.checkpoint30_x_kickstart, $.checkpoint30_y_kickstart, $.checkpoint30_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint30_x_kickstart, $.checkpoint30_y_kickstart, $.checkpoint30_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint30_x_kickstart, $.checkpoint30_y_kickstart, $.checkpoint30_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint30_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint30_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint31_kickstart == 0) {
    Fx.DrawCorona($.checkpoint31_x_kickstart, $.checkpoint31_y_kickstart, $.checkpoint31_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint31_x_kickstart, $.checkpoint31_y_kickstart, $.checkpoint31_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint31_x_kickstart, $.checkpoint31_y_kickstart, $.checkpoint31_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint31_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint31_kickstart = 1;
      }


    }


  }


  if ($.flag_done_checkpoint32_kickstart == 0) {
    Fx.DrawCorona($.checkpoint32_x_kickstart, $.checkpoint32_y_kickstart, $.checkpoint32_z_kickstart, 1.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 255, 137, 205);
    if ($.player1.locateAnyMeans3D($.checkpoint32_x_kickstart, $.checkpoint32_y_kickstart, $.checkpoint32_z_kickstart, 1.5, 1.5, 1.5, false /* FALSE */)) {
      if ($.player1.isInModel(SANCHEZ)) {
        Sound.AddOneOffSound($.checkpoint32_x_kickstart, $.checkpoint32_y_kickstart, $.checkpoint32_z_kickstart, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KICK1_6", 1000, 1); //"Well done now on to the next checkpoint!"
        $.checkpoint32_blip_kickstart.remove();
        ++$.player_checkpoint_kickstart;
        --$.number_of_checkpoints_kickstart;
        $.flag_done_checkpoint32_kickstart = 1;
      }


    }


  }
}

export async function kickstart() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // ********************************** KickStart Bike Trials ********************************
  // ********************************** Dirtring Dirt Ring DirtRing	    ********************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************


  // SCRIPT_NAME kickst

  // Mission start stuff


  await mission_start_kickstart();  // SCM GOSUB mission_start_kickstart


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    await mission_kickstart_failed();  // SCM GOSUB mission_kickstart_failed
  }


  await mission_cleanup_kickstart();  // SCM GOSUB mission_cleanup_kickstart


  // MissionBoundary

  // Variables for mission


  // VAR_INT player_checkpoint_kickstart


  // VAR_INT time_now_ks


  // VAR_INT time_off_bike_ks


  // VAR_INT time_bailed_ks


  // VAR_INT time_left_to_find_bike_ks


  // VAR_INT time_left_to_find_bike_secs_ks

  // timer stuff


  // VAR_INT race_timer_kickstart

  // Checkpoint1 small jump over 3 burnt out cars


  // VAR_FLOAT checkpoint1_x_kickstart


  // VAR_FLOAT checkpoint1_y_kickstart


  // VAR_FLOAT checkpoint1_z_kickstart


  // VAR_INT flag_done_checkpoint1_kickstart


  // VAR_INT checkpoint1_blip_kickstart

  // Checkpoint 2 // fire jump on left hand side


  // VAR_FLOAT checkpoint2_x_kickstart


  // VAR_FLOAT checkpoint2_y_kickstart


  // VAR_FLOAT checkpoint2_z_kickstart


  // VAR_INT flag_done_checkpoint2_kickstart


  // VAR_INT checkpoint2_blip_kickstart

  // Checkpoint 3 placed in the middle of a small pile of cars left hand side


  // VAR_FLOAT checkpoint3_x_kickstart


  // VAR_FLOAT checkpoint3_y_kickstart


  // VAR_FLOAT checkpoint3_z_kickstart


  // VAR_INT flag_done_checkpoint3_kickstart


  // VAR_INT checkpoint3_blip_kickstart

  // Checkpoint 4 ontop of first bus


  // VAR_FLOAT checkpoint4_x_kickstart


  // VAR_FLOAT checkpoint4_y_kickstart


  // VAR_FLOAT checkpoint4_z_kickstart


  // VAR_INT flag_done_checkpoint4_kickstart


  // VAR_INT checkpoint4_blip_kickstart

  // Checkpoint 5 on top of second bus


  // VAR_FLOAT checkpoint5_x_kickstart


  // VAR_FLOAT checkpoint5_y_kickstart


  // VAR_FLOAT checkpoint5_z_kickstart


  // VAR_INT flag_done_checkpoint5_kickstart


  // VAR_INT checkpoint5_blip_kickstart

  // Checkpoint 6 second fire jump in teh middle of the course


  // VAR_FLOAT checkpoint6_x_kickstart


  // VAR_FLOAT checkpoint6_y_kickstart


  // VAR_FLOAT checkpoint6_z_kickstart


  // VAR_INT flag_done_checkpoint6_kickstart


  // VAR_INT checkpoint6_blip_kickstart

  // Checkpoint 7 loop the loop right hand side of middle fire jump


  // VAR_FLOAT checkpoint7_x_kickstart


  // VAR_FLOAT checkpoint7_y_kickstart


  // VAR_FLOAT checkpoint7_z_kickstart


  // VAR_INT flag_done_checkpoint7_kickstart


  // VAR_INT checkpoint7_blip_kickstart

  // Checkpoint 8 ontop of pile of cars by bus jump


  // VAR_FLOAT checkpoint8_x_kickstart


  // VAR_FLOAT checkpoint8_y_kickstart


  // VAR_FLOAT checkpoint8_z_kickstart


  // VAR_INT flag_done_checkpoint8_kickstart


  // VAR_INT checkpoint8_blip_kickstart

  // Checkpoint 9 on top of second pile of cars by bus jump


  // VAR_FLOAT checkpoint9_x_kickstart


  // VAR_FLOAT checkpoint9_y_kickstart


  // VAR_FLOAT checkpoint9_z_kickstart


  // VAR_INT flag_done_checkpoint9_kickstart


  // VAR_INT checkpoint9_blip_kickstart

  // Checkpoint 10


  // VAR_FLOAT checkpoint10_x_kickstart


  // VAR_FLOAT checkpoint10_y_kickstart


  // VAR_FLOAT checkpoint10_z_kickstart


  // VAR_INT flag_done_checkpoint10_kickstart


  // VAR_INT checkpoint10_blip_kickstart

  // Checkpoint 11


  // VAR_FLOAT checkpoint11_x_kickstart


  // VAR_FLOAT checkpoint11_y_kickstart


  // VAR_FLOAT checkpoint11_z_kickstart


  // VAR_INT flag_done_checkpoint11_kickstart


  // VAR_INT checkpoint11_blip_kickstart

  // Checkpoint 12


  // VAR_FLOAT checkpoint12_x_kickstart


  // VAR_FLOAT checkpoint12_y_kickstart


  // VAR_FLOAT checkpoint12_z_kickstart


  // VAR_INT flag_done_checkpoint12_kickstart


  // VAR_INT checkpoint12_blip_kickstart

  // Checkpoint 13


  // VAR_FLOAT checkpoint13_x_kickstart


  // VAR_FLOAT checkpoint13_y_kickstart


  // VAR_FLOAT checkpoint13_z_kickstart


  // VAR_INT flag_done_checkpoint13_kickstart


  // VAR_INT checkpoint13_blip_kickstart

  // Checkpoint 14


  // VAR_FLOAT checkpoint14_x_kickstart


  // VAR_FLOAT checkpoint14_y_kickstart


  // VAR_FLOAT checkpoint14_z_kickstart


  // VAR_INT flag_done_checkpoint14_kickstart


  // VAR_INT checkpoint14_blip_kickstart

  // Checkpoint 15


  // VAR_FLOAT checkpoint15_x_kickstart


  // VAR_FLOAT checkpoint15_y_kickstart


  // VAR_FLOAT checkpoint15_z_kickstart


  // VAR_INT flag_done_checkpoint15_kickstart


  // VAR_INT checkpoint15_blip_kickstart

  // Checkpoint 16


  // VAR_FLOAT checkpoint16_x_kickstart


  // VAR_FLOAT checkpoint16_y_kickstart


  // VAR_FLOAT checkpoint16_z_kickstart


  // VAR_INT flag_done_checkpoint16_kickstart


  // VAR_INT checkpoint16_blip_kickstart

  // Checkpoint 17


  // VAR_FLOAT checkpoint17_x_kickstart


  // VAR_FLOAT checkpoint17_y_kickstart


  // VAR_FLOAT checkpoint17_z_kickstart


  // VAR_INT flag_done_checkpoint17_kickstart


  // VAR_INT checkpoint17_blip_kickstart

  // Checkpoint 18


  // VAR_FLOAT checkpoint18_x_kickstart


  // VAR_FLOAT checkpoint18_y_kickstart


  // VAR_FLOAT checkpoint18_z_kickstart


  // VAR_INT flag_done_checkpoint18_kickstart


  // VAR_INT checkpoint18_blip_kickstart

  // Checkpoint 19


  // VAR_FLOAT checkpoint19_x_kickstart


  // VAR_FLOAT checkpoint19_y_kickstart


  // VAR_FLOAT checkpoint19_z_kickstart


  // VAR_INT flag_done_checkpoint19_kickstart


  // VAR_INT checkpoint19_blip_kickstart

  // Checkpoint 20


  // VAR_FLOAT checkpoint20_x_kickstart


  // VAR_FLOAT checkpoint20_y_kickstart


  // VAR_FLOAT checkpoint20_z_kickstart


  // VAR_INT flag_done_checkpoint20_kickstart


  // VAR_INT checkpoint20_blip_kickstart

  // Checkpoint 21


  // VAR_FLOAT checkpoint21_x_kickstart


  // VAR_FLOAT checkpoint21_y_kickstart


  // VAR_FLOAT checkpoint21_z_kickstart


  // VAR_INT flag_done_checkpoint21_kickstart


  // VAR_INT checkpoint21_blip_kickstart

  // Checkpoint 22


  // VAR_FLOAT checkpoint22_x_kickstart


  // VAR_FLOAT checkpoint22_y_kickstart


  // VAR_FLOAT checkpoint22_z_kickstart


  // VAR_INT flag_done_checkpoint22_kickstart


  // VAR_INT checkpoint22_blip_kickstart

  // Checkpoint 23


  // VAR_FLOAT checkpoint23_x_kickstart


  // VAR_FLOAT checkpoint23_y_kickstart


  // VAR_FLOAT checkpoint23_z_kickstart


  // VAR_INT flag_done_checkpoint23_kickstart


  // VAR_INT checkpoint23_blip_kickstart

  // Checkpoint 24


  // VAR_FLOAT checkpoint24_x_kickstart


  // VAR_FLOAT checkpoint24_y_kickstart


  // VAR_FLOAT checkpoint24_z_kickstart


  // VAR_INT flag_done_checkpoint24_kickstart


  // VAR_INT checkpoint24_blip_kickstart

  // Checkpoint 25


  // VAR_FLOAT checkpoint25_x_kickstart


  // VAR_FLOAT checkpoint25_y_kickstart


  // VAR_FLOAT checkpoint25_z_kickstart


  // VAR_INT flag_done_checkpoint25_kickstart


  // VAR_INT checkpoint25_blip_kickstart

  // Checkpoint 26


  // VAR_FLOAT checkpoint26_x_kickstart


  // VAR_FLOAT checkpoint26_y_kickstart


  // VAR_FLOAT checkpoint26_z_kickstart


  // VAR_INT flag_done_checkpoint26_kickstart


  // VAR_INT checkpoint26_blip_kickstart

  // Checkpoint 27


  // VAR_FLOAT checkpoint27_x_kickstart


  // VAR_FLOAT checkpoint27_y_kickstart


  // VAR_FLOAT checkpoint27_z_kickstart


  // VAR_INT flag_done_checkpoint27_kickstart


  // VAR_INT checkpoint27_blip_kickstart

  // Checkpoint 28


  // VAR_FLOAT checkpoint28_x_kickstart


  // VAR_FLOAT checkpoint28_y_kickstart


  // VAR_FLOAT checkpoint28_z_kickstart


  // VAR_INT flag_done_checkpoint28_kickstart


  // VAR_INT checkpoint28_blip_kickstart

  // Checkpoint 29


  // VAR_FLOAT checkpoint29_x_kickstart


  // VAR_FLOAT checkpoint29_y_kickstart


  // VAR_FLOAT checkpoint29_z_kickstart


  // VAR_INT flag_done_checkpoint29_kickstart


  // VAR_INT checkpoint29_blip_kickstart

  // Checkpoint 30


  // VAR_FLOAT checkpoint30_x_kickstart


  // VAR_FLOAT checkpoint30_y_kickstart


  // VAR_FLOAT checkpoint30_z_kickstart


  // VAR_INT flag_done_checkpoint30_kickstart


  // VAR_INT checkpoint30_blip_kickstart

  // Checkpoint 31


  // VAR_FLOAT checkpoint31_x_kickstart


  // VAR_FLOAT checkpoint31_y_kickstart


  // VAR_FLOAT checkpoint31_z_kickstart


  // VAR_INT flag_done_checkpoint31_kickstart


  // VAR_INT checkpoint31_blip_kickstart

  // Checkpoint 32


  // VAR_FLOAT checkpoint32_x_kickstart


  // VAR_FLOAT checkpoint32_y_kickstart


  // VAR_FLOAT checkpoint32_z_kickstart


  // VAR_INT flag_done_checkpoint32_kickstart


  // VAR_INT checkpoint32_blip_kickstart

  // Timer stuff


  // VAR_INT race_timer_seconds_kickstart


  // VAR_INT race_timer_mins_kickstart


  // VAR_INT race_timer_seconds2_kickstart


  // VAR_INT player_taken_too_long_kickstart

  // Bike stuff


  // VAR_INT bike_kickstart


  // VAR_INT flag_bike_blip_on_kickstart


  // VAR_INT bike_blip_kickstart

  // Blob Stuff


  // VAR_INT number_of_checkpoints_kickstart

  // Dodgy map stuff coords


  // VAR_FLOAT player_x_kickstart


  // VAR_FLOAT player_y_kickstart


  // VAR_FLOAT player_z_kickstart


  // VAR_FLOAT bike_x_kickstart


  // VAR_FLOAT bike_y_kickstart


  // VAR_FLOAT bike_z_kickstart

  // player in end area


  // VAR_INT player_in_end_area_kickstart


  // VAR_INT sphere_kickstart

  // New scoreing system


  // VAR_INT player_been_rewarded_kickstart

  // New audio stuff


  // VAR_INT audio_flag_cheer_kick


  // VAR_INT audio_flag_ohh_kick


  // VAR_INT flag_bike_dead_kickstart


  $.flag_bike_dead_kickstart = 0;

  // ****************************************Mission Start************************************


}
