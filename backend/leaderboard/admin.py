from django.contrib import admin
from .models import Leaderboard
from .models import Player, Winner
# Register your models here.


admin.site.register(Leaderboard)
admin.site.register(Player)
admin.site.register(Winner)



# from django.contrib import admin
# from .models import Leaderboard, Player, Winner  # Import your models

# class BaseAdmin(admin.ModelAdmin):
#     def has_change_permission(self, request, obj=None):
#         return not request.user.is_superuser  # Prevent superusers from editing
    
#     def has_add_permission(self, request):
#         return not request.user.is_superuser  # Prevent superusers from adding
    
#     def has_delete_permission(self, request, obj=None):
#         return not request.user.is_superuser  # Prevent superusers from deleting

# # Register models with restricted admin permissions
# admin.site.register(Leaderboard, BaseAdmin)
# admin.site.register(Player, BaseAdmin)
# admin.site.register(Winner, BaseAdmin)