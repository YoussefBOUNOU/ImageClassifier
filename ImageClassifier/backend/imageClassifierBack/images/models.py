from django.db import models
from PIL import Image as PILImage
import requests
import torch
from transformers import ViTImageProcessor, ViTForImageClassification
from django.conf import settings

class Image(models.Model):
    picture = models.ImageField()
    classified = models.CharField(max_length=200, blank=True)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.classified

    def save(self, *args, **kwargs):
        try:
            # Load image using PIL
            img = PILImage.open(self.picture)
            
            # Preprocess image
            processor = ViTImageProcessor.from_pretrained('google/vit-base-patch16-224')
            model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224')
            inputs = processor(images=img, return_tensors="pt")

            # Make prediction
            with torch.no_grad():
                outputs = model(**inputs)
            logits = outputs.logits
            predicted_class_idx = logits.argmax(-1).item()
            self.classified = model.config.id2label[predicted_class_idx]
            
            print('Success')
            print(self.classified)
        except Exception as e:
            print(f"Classification Failed {e}")
        super().save(*args, **kwargs)
