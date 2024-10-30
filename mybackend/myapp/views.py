from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import Book
from .forms import BookForm


@csrf_exempt
def list_books(request):
    if request.method == 'GET':
        try:
            books = Book.objects.all().values()  
            return JsonResponse(list(books), safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Método não permitido'}, status=405)


@csrf_exempt
def add_book(request):
    if request.method == 'POST':
        try:
            data = request.POST.dict() 
            form = BookForm(data, request.FILES) 

            if form.is_valid():
                book = form.save()
                return JsonResponse({'message': 'Book added successfully', 'book_id': book.id}, status=201)
            else:
                return JsonResponse({'errors': form.errors}, status=400)
                
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def delete_book(request):
    if request.method == 'DELETE':
        try:
            data = json.loads(request.body)
            title = data.get('title') 

            if not title:
                return JsonResponse({'error': 'Title is required'}, status=400)

            books = Book.objects.filter(title=title)
            
            if books.exists():
                books.delete()
                return JsonResponse({'message': 'Book(s) deleted successfully'}, status=204)
            else:
                return JsonResponse({'error': 'No book found with that title'}, status=404)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
