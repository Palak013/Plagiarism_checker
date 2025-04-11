from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

reference_doc = """
This is a sample reference document that your input will be compared against.
You can replace this with stored documents or connect it to a database later.
"""

def check_plagiarism(user_text):
    documents = [reference_doc, user_text]
    tfidf = TfidfVectorizer().fit_transform(documents)
    score = cosine_similarity(tfidf[0:1], tfidf[1:2])[0][0]
    return {"plagiarism_score": round(score * 100, 2)}

