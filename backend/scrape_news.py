import requests
from bs4 import BeautifulSoup

def get_cyber_news():
    url = "https://thehackernews.com/"  # Example cybersecurity news website
    headers = {"User-Agent": "Mozilla/5.0"}
    
    try:
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            return [{"error": "Failed to fetch news from source"}]

        soup = BeautifulSoup(response.text, "html.parser")
        articles = soup.find_all("a", class_="story-link")[:20]  # Get top 5 articles

        news_list = []
        for article in articles:
            title = article.find("h2").text.strip()
            link = article["href"]
            news_list.append({"title": title, "url": link, "source": "The Hacker News"})

        return news_list

    except Exception as e:
        return [{"error": str(e)}]

# Test scraper
if __name__ == "__main__":
    print(get_cyber_news())
