-- Создание таблицы для треков радиостанции
CREATE TABLE IF NOT EXISTS radio_tracks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    duration INTEGER NOT NULL, -- длительность в секундах
    audio_url VARCHAR(500),
    cover_url VARCHAR(500),
    bpm INTEGER,
    mood VARCHAR(100),
    tags TEXT[], -- массив тегов
    plays_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    added_by VARCHAR(100),
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT true,
    scheduled_time TIME, -- время в расписании (если трек запланирован)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индексов для быстрого поиска
CREATE INDEX idx_radio_tracks_genre ON radio_tracks(genre);
CREATE INDEX idx_radio_tracks_artist ON radio_tracks(artist);
CREATE INDEX idx_radio_tracks_active ON radio_tracks(is_active);
CREATE INDEX idx_radio_tracks_added_date ON radio_tracks(added_date DESC);

-- Добавление тестовых данных
INSERT INTO radio_tracks (title, artist, genre, duration, bpm, mood, tags, plays_count, likes_count) VALUES
('Midnight City', 'DJ Nova', 'Ambient', 245, 90, 'Спокойное', ARRAY['chill', 'night', 'electronic'], 1542, 234),
('Neon Dreams', 'DJ Pulse', 'House', 198, 128, 'Энергичное', ARRAY['dance', 'club', 'upbeat'], 2834, 412),
('Digital Echo', 'DJ Echo', 'Techno', 312, 135, 'Танцевальное', ARRAY['techno', 'rave', 'underground'], 1923, 287),
('Wave Rider', 'DJ Wave', 'Deep House', 278, 120, 'Расслабленное', ARRAY['deep', 'smooth', 'sunset'], 1654, 198),
('Cosmic Flow', 'DJ Nova', 'Ambient', 267, 85, 'Меланхоличное', ARRAY['space', 'ambient', 'meditation'], 1124, 156),
('Electric Soul', 'DJ Pulse', 'Electronic', 223, 124, 'Энергичное', ARRAY['energetic', 'soul', 'modern'], 2156, 341),
('Bass Awakening', 'DJ Echo', 'Drum & Bass', 189, 174, 'Интенсивное', ARRAY['dnb', 'bass', 'energy'], 1867, 298),
('Sunset Boulevard', 'DJ Wave', 'Melodic House', 301, 118, 'Романтичное', ARRAY['melodic', 'sunset', 'emotional'], 1432, 223);
