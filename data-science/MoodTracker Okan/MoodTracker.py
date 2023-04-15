import sqlalchemy
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.orm import sessionmaker
import datetime

# Create a connection to the MySQL database
engine = create_engine("mysql+mysqlconnector://root:hallo1234@localhost/clear")

Base = sqlalchemy.orm.declarative_base()

class Mood(Base):
    __tablename__ = "clearyourmind"
    id = Column(Integer, primary_key=True)
    patient_id = Column(Integer)
    mood = Column(String(255))  
    date = Column(DateTime)

# Create the table in the database
Base.metadata.create_all(engine)

# Create a new session
Session = sessionmaker(bind=engine)
session = Session()

# Function to track the mood of a patient
def track_mood(patient_id, mood, date):
    # Check if the mood is one of the valid options
    valid_moods = ["terrible", "bad", "neutral", "good", "very good"]
    if mood not in valid_moods:
        print("Invalid mood. Valid options are:", valid_moods)
        return

    new_mood = Mood(patient_id=patient_id, mood=mood, date=date)
    session.add(new_mood)
    session.commit()
    print("Mood tracked successfully!")

# Testing the code

# Query all patient moods
all_moods = session.query(Mood).all()
for mood in all_moods:
    print("Patient ID: {} Mood: {} Date: {}".format(mood.patient_id, mood.mood, mood.date))

# Query moods for a specific patient
patient_moods = session.query(Mood).filter(Mood.patient_id == 1).all()
for mood in patient_moods:
    print("Patient ID: {} Mood: {} Date: {}".format(mood.patient_id, mood.mood, mood.date))
