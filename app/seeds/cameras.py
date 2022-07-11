from app.models import db, Camera

def seed_cameras():
    camera_1 = Camera(
      brand = 'Contaflex', model = 'III', film_type = '35mm', other_specs = 'The Contaflex family of 35mm leaf-shuttered SLR cameras was introduced in 1953 by Zeiss Ikon, utilising the newly developed Compur reflex shutter. By doing so, a completely new 35mm camera emerged, a concept probably first used in 1929 in the Mentor Compur-Reflex. The Contaflex name was made famous and became highly respected due to the spectacular 35mm twin lens reflex Contaflex, introduced in 1935 and only produced a few years.', amount = 210.33, inventory = 3, category_id = 1, user_id = 2, created_at = '2019-04-14', updated_at = '2019-04-14')

    camera_2 = Camera(
      brand = 'Asahiflex', model = 'II', film_type = '35mm', other_specs = "The Asahiflex was a 35 mm single-lens reflex camera built by the Asahi Optical Corporation (later to become Pentax). It was regarded as the first SLR camera built in Japan. Asahi Optical introduced its first 35 mm camera in 1952. The Asahiflex IIB was released in 1954. With the IIB, a key advance was made, the quick-return mirror. It was the world's first SLR camera with an instant return mirror.", amount = 357.29, inventory = 2, category_id = 1, user_id = 3, created_at = '2020-05-11', updated_at = '2020-05-11')

    camera_3 = Camera(
      brand = 'Canon', model = 'Pellix', film_type = '35mm', other_specs = "The Canon Pellix is a manual focus camera released in 1965 that uses a semitransparent stationary reflex mirror behind which a metering cell is raised during the reading. The semitransparent fixed mirror in the Pellix, for the first time successfully used in a 35mm SLR camera, lets about two-thirds (66%) of the light from the lens pass directly through to the film, while the rest is reflected to the viewfinder.", amount = 108.00, inventory = 5, category_id = 1, user_id = 4, created_at = '2021-01-11', updated_at = '2021-01-11')

    camera_4 = Camera(
      brand = 'Rolleiflex', model = 'Original', film_type = '120mm', other_specs = "Rolleiflex is the name of a long-running and diverse line of high-end cameras originally made by the German company Franke & Heidecke, and later Rollei-Werke. This first Rolleiflex was introduced in 1929 after three years of development, and was the company's first medium format roll-film, twin-lens reflex camera.", amount = 195.00, inventory = 2, category_id = 2, user_id = 5, created_at = '2022-01-01', updated_at = '2022-01-01')

    camera_5 = Camera(
      brand = 'Kodak', model = 'Duaflex 2', film_type = '120mm', other_specs = "The Kodak Duaflex is a 620 roll film pseudo TLR made by Kodak. A special feature of the Duaflex line was double-exposure prevention, meaning the advance knob had to be turned to the next exposure before the shutter could be activated. This feature could be overridden by pushing the little lever below the shutter button.", amount = 85.00, inventory = 1, category_id = 2, user_id = 2, created_at = '2021-06-01', updated_at = '2021-06-01')

    camera_6 = Camera(
      brand = 'Canon', model = 'Canonet G-III', film_type = '35mm', other_specs = "The Canonet G-III QL17 is a coupled-rangefinder, leaf-shuttered, fixed-focal-length 35 mm camera first manufactured by Canon in 1972. It features fully shutter-priority automatic exposure and fully manual shooting modes. The G-III features a 40 mm f/1.7 with six elements in four groups. The integrated lightmeter provides shutter priority and manual modes.", amount = 129.00, inventory = 4, category_id = 3, user_id = 3, created_at = '2019-06-13', updated_at = '2019-06-13')

    camera_7 = Camera(
      brand = 'Yashica', model = 'Electro 35', film_type = '35mm', other_specs = "The Yashica Electro 35 was one of the most popular consumer 35mm cameras of the 1960s and 1970s. My grandparents had one. They took it all over the world on their vacations, and came back with loads of great slides.", amount = 49.99, inventory = 3, category_id = 3, user_id = 6, created_at = '2019-08-09', updated_at = '2019-08-09')

    camera_8 = Camera(
      brand = 'Minox', model = '35 EL', film_type = '35mm', other_specs = "The Minox 35 EL is the smallest 35mm film camera in the world, which makes it perfect as a second camera or a travel, street, or night out point and shoot. It’s also no slouch when it comes to image-making, offering auto-exposure, a fast 35mm F/2.8 lens, and creative controls by way of manual focus and aperture control. Its ISO setting is user-selectable from ISO 25 to 800.", amount = 51.00, inventory = 6, category_id = 4, user_id = 7, created_at = '2019-03-19', updated_at = '2019-03-19')

    camera_9 = Camera(
      brand = 'Pentax', model = 'PC 700', film_type = '35mm', other_specs = "Pentax made dozens of excellent point and shoot cameras all throughout the 1990s and early ’00s, and people tend to overlook them today. A true point and shoot camera. All these factors make the Pentax PC 700 perfect for the photo geek who wants to make snapshots by the pool or at the beach, or on summer road trips or mountain hikes.", amount = 48.50, inventory = 5, category_id = 4, user_id = 8, created_at = '2019-11-19', updated_at = '2019-11-19')

    camera_10 = Camera(
      brand = 'Polaroid', model = 'SX 70', film_type = 'SX-70', other_specs = "The Polaroid SX-70 is for the ultimate analog enthusiast. The first instant SLR (single lens reflex) camera ever made and the first to use the Polaroid instant film we know today. Its manual controls and low film speed make it a go-to for artists and dreamers alike.", amount = 98.55, inventory = 3, category_id = 5, user_id = 9, created_at = '2021-11-19', updated_at = '2021-11-19')

    camera_11 = Camera(
      brand = 'Polaroid', model = 'SuperColor 600', film_type = '600', other_specs = "When color reigned. This limited edition Polaroid Sun 600 analog instant camera from the ‘80s is all about aesthetics: pink and grey, black and red. Contrasting colors to match or clash. A refurbished vintage camera in that classic Polaroid 600 shape in colors that defy dress codes.", amount = 108.00, inventory = 4, category_id = 5, user_id = 10, created_at = '2021-10-18', updated_at = '2021-10-18')

    camera_12 = Camera(
      brand = 'Soho', model = 'Cadet', film_type = '120mm', other_specs = "The Soho Cadet is a 120 roll film camera sold by Soho Ltd. in London, c.1930. Construction is of dark red/maroon Bakelite, which if you look closely in the light, has faint tortoiseshell markings in it. The colour was described in advertisements as rosewood. The body is complemented with dark maroon leather bellows. ", amount = 223.50, inventory = 2, category_id = 6, user_id = 10, created_at = '2021-7-18', updated_at = '2021-7-18')




    db.session.add(camera_1)
    db.session.add(camera_2)
    db.session.add(camera_3)
    db.session.add(camera_4)
    db.session.add(camera_5)
    db.session.add(camera_6)
    db.session.add(camera_7)
    db.session.add(camera_8)
    db.session.add(camera_9)
    db.session.add(camera_10)
    db.session.add(camera_11)
    db.session.add(camera_12)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cameras():
    db.session.execute('TRUNCATE cameras RESTART IDENTITY CASCADE;')
    db.session.commit()
