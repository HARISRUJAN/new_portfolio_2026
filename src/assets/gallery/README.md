# Gallery Images Folder

Upload your gallery images here!

## Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## How to Add Images

1. **Upload your images** to this folder (`src/assets/gallery/`)

2. **Open** `src/components/Gallery.tsx`

3. **Import your images** at the top of the file:
   ```typescript
   import gallery1 from '../assets/gallery/your-image-1.jpg';
   import gallery2 from '../assets/gallery/your-image-2.jpg';
   ```

4. **Add them to the photos array**:
   ```typescript
   const photos: Photo[] = [
     { id: '1', src: gallery1, title: 'Your Photo Title', category: 'Nature', location: 'Location Name' },
     { id: '2', src: gallery2, title: 'Another Photo', category: 'Urban', location: 'Another Location' },
   ];
   ```

5. **Update categories** if needed in the `categories` array (currently: 'All', 'Nature', 'Urban')

That's it! Your images will appear in the gallery section.
