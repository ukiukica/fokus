from app.models import db, Image


def seed_images():
    image_1 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Contaflex_BW_1.jpg', film_roll = False, camera_id = 1)
    image_2 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Contaflex_BW_2.JPG', film_roll = False, camera_id = 1)
    image_3 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Contaflex_BW_3.jpg', film_roll = False, camera_id = 1)
    image_4 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Contaflex_film_roll_1.jpg', film_roll = True, camera_id = 1)
    image_5 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Contaflex_film_roll_2.jpg', film_roll = True, camera_id = 1)
    image_6 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Contaflex_film_roll_3.jpg', film_roll = True, camera_id = 1)

    image_7 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Asahiflex_IIb_1.jpg', film_roll = False, camera_id = 2)
    image_8 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Asahiflex_IIb_2.jpg', film_roll = False, camera_id = 2)
    image_9 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Asahiflex_IIb_3.jpg', film_roll = False, camera_id = 2)
    image_10 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Asahiflex_IIb_film_roll_1.jpg', film_roll = True, camera_id = 2)
    image_11 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Asahiflex_IIb_film_roll_2.jpg', film_roll = True, camera_id = 2)
    image_12 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Asahiflex_IIb_film_roll_3.jpg', film_roll = True, camera_id = 2)

    image_13 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Canon_pellix_1.jpg', film_roll = False, camera_id = 3)
    image_14 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Canon_pellix_2.jpg', film_roll = False, camera_id = 3)
    image_15 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Canon_pellix_3.jpg', film_roll = False, camera_id = 3)
    image_16 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Canon_pellix_film_roll_1.jpg', film_roll = True, camera_id = 3)
    image_17 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Canon_pellix_film_roll_2.jpg', film_roll = True, camera_id = 3)
    image_18 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Canon_pellix_film_roll_3.jpg', film_roll = True, camera_id = 3)

    image_19 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Rolleiflex_Original_1.jpg', film_roll = False, camera_id = 4)
    image_20 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Rolleiflex_Original_2.jpg', film_roll = False, camera_id = 4)
    image_21 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Rolleiflex_Original_3.jpg', film_roll = False, camera_id = 4)
    image_22 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Rolleiflex_Original_film_roll_1.jpg', film_roll = True, camera_id = 4)
    image_23 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Rolleiflex_Original_film_roll_2.jpg', film_roll = True, camera_id = 4)
    image_24 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Rolleiflex_Original_film_roll_3.jpg', film_roll = True, camera_id = 4)

    image_25 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/KodakDuo_1.jpg', film_roll = False, camera_id = 5)
    image_26 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/KodakDuo_2.jpg', film_roll = False, camera_id = 5)
    image_27 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/KodakDuo_3.jpg', film_roll = False, camera_id = 5)
    image_28 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/KodakDuo_film_roll_1.jpg', film_roll = True, camera_id = 5)
    image_29 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/KodakDuo_film_roll_2.jpg', film_roll = True, camera_id = 5)
    image_30 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/KodakDuo_film_roll_3.jpg', film_roll = True, camera_id = 5)

    image_31 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/CanonetG-III_1.jpg', film_roll = False, camera_id = 6)
    image_32 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/CanonetG-III_2.jpg', film_roll = False, camera_id = 6)
    image_33 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/CanonetG-III_3.jpg', film_roll = False, camera_id = 6)
    image_34 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/CanonetG-III_film_roll_1.jpg', film_roll = True, camera_id = 6)
    image_35 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/CanonetG-III_film_roll_2.jpg', film_roll = True, camera_id = 6)
    image_36 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/CanonetG-III_film_roll_3.jpg', film_roll = True, camera_id = 6)

    image_37 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/YashicaElectro_1.jpg', film_roll = False, camera_id = 7)
    image_38 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/YashicaElectro_2.jpg', film_roll = False, camera_id = 7)
    image_39 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/YashicaElectro_3.jpg', film_roll = False, camera_id = 7)
    image_40 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/YashicaElectro_film_roll_1.jpg', film_roll = True, camera_id = 7)
    image_41 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/YashicaElectro_film_roll_2.jpg', film_roll = True, camera_id = 7)
    image_42 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/YashicaElectro_film_roll_3.jpg', film_roll = True, camera_id = 7)

    image_38 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Minox35EL_1.jpg', film_roll = False, camera_id = 8)
    image_39 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Minox35EL_2.jpg', film_roll = False, camera_id = 8)
    image_40 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/Minox35EL_3.jpg', film_roll = False, camera_id = 8)
    image_41 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Minox35EL_film_roll_1.jpg', film_roll = True, camera_id = 8)
    image_42 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Minox35EL_film_roll_2.jpg', film_roll = True, camera_id = 8)
    image_43 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/Minox35EL_film_roll_3.jpg', film_roll = True, camera_id = 8)

    image_44 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PentaxPC700_1.jpg', film_roll = False, camera_id = 9)
    image_45 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PentaxPC700_2.jpg', film_roll = False, camera_id = 9)
    image_46 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PentaxPC700_3.jpg', film_roll = False, camera_id = 9)
    image_47 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PentaxPC700_film_roll_1.jpg', film_roll = True, camera_id = 9)
    image_48 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PentaxPC700_film_roll_2.jpg', film_roll = True, camera_id = 9)
    image_49 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PentaxPC700_film_roll_3.jpg', film_roll = True, camera_id = 9)

    image_50 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PolaroidSX70_1.jpg', film_roll = False, camera_id = 10)
    image_51 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PolaroidSX70_2.jpg', film_roll = False, camera_id = 10)
    image_52 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PolaroidSX70_3.jpg', film_roll = False, camera_id = 10)
    image_53 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PolaroidSX70_film_roll_1.jpg', film_roll = True, camera_id = 10)
    image_54 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PolaroidSX70_film_roll_2.jpg', film_roll = True, camera_id = 10)
    image_55 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PolaroidSX70_film_roll_3.jpg', film_roll = True, camera_id = 10)

    image_56 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PolaroidCoolCam_1.jpg', film_roll = False, camera_id = 11)
    image_57 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PolaroidCoolCam_2.jpg', film_roll = False, camera_id = 11)
    image_58 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/PolaroidCoolCam_3.jpg', film_roll = False, camera_id = 11)
    image_59 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PolaroidCoolCam_film_roll_1.jpg', film_roll = True, camera_id = 11)
    image_60 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PolaroidCoolCam_film_roll_2.jpg', film_roll = True, camera_id = 11)
    image_61 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/PolaroidCoolCam_film_roll_3.jpg', film_roll = True, camera_id = 11)

    image_62 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/SohoCadetB_1.jpg', film_roll = False, camera_id = 12)
    image_63 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/SohoCadetB_2.jpg', film_roll = False, camera_id = 12)
    image_64 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Cameras/SohoCadetB_3.jpg', film_roll = False, camera_id = 12)
    image_65 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/SohoCadetB_film_roll_1.jpg', film_roll = True, camera_id = 12)
    image_66 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/SohoCadetB_film_roll_2.jpg', film_roll = True, camera_id = 12)
    image_67 = Image(
      image_url = 'https://fokus-app.s3.amazonaws.com/Film+Rolls/SohoCadetB_film_roll_3.jpg', film_roll = True, camera_id = 12)


    db.session.add(image_1)
    db.session.add(image_2)
    db.session.add(image_3)
    db.session.add(image_4)
    db.session.add(image_5)
    db.session.add(image_6)
    db.session.add(image_7)
    db.session.add(image_8)
    db.session.add(image_9)
    db.session.add(image_10)
    db.session.add(image_11)
    db.session.add(image_12)
    db.session.add(image_13)
    db.session.add(image_14)
    db.session.add(image_15)
    db.session.add(image_16)
    db.session.add(image_17)
    db.session.add(image_18)
    db.session.add(image_19)
    db.session.add(image_20)
    db.session.add(image_21)
    db.session.add(image_22)
    db.session.add(image_23)
    db.session.add(image_24)
    db.session.add(image_25)
    db.session.add(image_26)
    db.session.add(image_27)
    db.session.add(image_28)
    db.session.add(image_29)
    db.session.add(image_30)
    db.session.add(image_31)
    db.session.add(image_32)
    db.session.add(image_33)
    db.session.add(image_34)
    db.session.add(image_35)
    db.session.add(image_36)
    db.session.add(image_37)
    db.session.add(image_38)
    db.session.add(image_39)
    db.session.add(image_40)
    db.session.add(image_41)
    db.session.add(image_42)
    db.session.add(image_43)
    db.session.add(image_44)
    db.session.add(image_45)
    db.session.add(image_46)
    db.session.add(image_47)
    db.session.add(image_48)
    db.session.add(image_49)
    db.session.add(image_50)
    db.session.add(image_51)
    db.session.add(image_52)
    db.session.add(image_53)
    db.session.add(image_54)
    db.session.add(image_55)
    db.session.add(image_56)
    db.session.add(image_57)
    db.session.add(image_58)
    db.session.add(image_59)
    db.session.add(image_60)
    db.session.add(image_61)
    db.session.add(image_62)
    db.session.add(image_63)
    db.session.add(image_64)
    db.session.add(image_65)
    db.session.add(image_66)
    db.session.add(image_67)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
