from rest_framework.decorators import api_view
from rest_framework.response import Response
from .utils import check_plagiarism

@api_view(['POST'])
def check_text(request):
    text = request.data.get("text", "")
    result = check_plagiarism(text)
    return Response(result)
