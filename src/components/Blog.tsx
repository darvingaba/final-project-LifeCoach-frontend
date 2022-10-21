import { Link, useNavigate } from "react-router-dom";

export function Blog() {
  const navigate = useNavigate()
  return (
    <div className="blogContainer">
      <p className="section-subtitle">Our News</p>
      <h2 className="h2 section-title text-center">Latest Blog Feed</h2>
      <div className="blogContent">
        <div className="blogCard">
          <Link
            to={{
              pathname:
                "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies",
            }}
            target="_blank"
          />
          <div className="up">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszlxO7uggCKIHBe8lSIMVvm-Er00ONqvU5w&usqp=CAU"
              alt=""
            />
          </div>
          <div className="down">
            <h3 className="blogTitle">Going to the gym for the first time</h3>
            <p>
              Perhaps you’ve made a New Year’s resolution—or maybe your friend
              posted a picture on social media that made you cringe—and you’ve
              decided it’s time to hit the gym and get that body into shape.
              This can be intimidating, especially for first-timers.
            </p>

            <a
              href="https://www.gyms4you.com/en/the-best-tips-for-going-to-the-gym-for-the-first-time/"
              target="_blank"
            >
              <button>Read More</button>
            </a>
          </div>
        </div>

        <div className="blogCard">
          <div className="blogCard">
            <div className="up">
              <img
                src="https://images.news.iu.edu/dams/vrxvlfxuzj_w768.jpg"
                alt=""
              />
            </div>
            <div className="down">
              <h3 className="blogTitle">Healthy food and Fitness</h3>
              <p>
                Eat plenty of fruits and vegetables. Choose foods that are low
                in added sugars, saturated fats, and sodium. Pick whole grains
                and lean sources of protein and dairy products. Practice all
                four types of exercise—endurance, strength, balance, and
                flexibility.
              </p>
              <a
                href="https://www.healthline.com/health/fitness-exercise-eating-healthy"
                target="_blank"
              >
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>

        <div className="blogCard">
          <div className="blogCard">
            <div className="up">
              <img
                src="https://siestasleepworks.com/wp-content/uploads/2020/06/shutterstock_740795383.jpg"
                alt=""
              />
            </div>
            <div className="down">
              <h3 className="blogTitle">Why good sleep is important</h3>
              <p>
                Good sleep improves your brain performance, mood, and health.
                Not getting enough quality sleep regularly raises the risk of
                many diseases and disorders. These range from heart disease and
                stroke to obesity and dementia. There's more to good sleep than
                just the hours spent in bed
              </p>
              <a
                href="https://newsinhealth.nih.gov/2021/04/good-sleep-good-health#:~:text=Good%20sleep%20improves%20your%20brain,spent%20in%20bed%2C%20says%20Dr."
                target="_blank"
              >
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
