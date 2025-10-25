import { Fonts } from '@/constants/theme';
import { useThemeColor } from '@/hooks/use-theme-color';
import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { ThemedText } from '../themed-text';
import { ThemedView } from '../themed-view';
import { IconSymbol } from '../ui/icon-symbol';

export interface DropdownOption {
  id: string;
  label: string;
  value: any;
  icon?: string;
  iconPosition?: 'before' | 'after';
  emoji?: string;
}

export interface SearchableDropdownProps {
  options: DropdownOption[];
  selectedValues: any[] | any;
  onSelectionChange: (selectedValues: any[] | any) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  multiSelect?: boolean;
  maxHeight?: number;
  showSearch?: boolean;
  disabled?: boolean;
  style?: any;
  optionStyle?: any;
  selectedOptionStyle?: any;
  searchInputStyle?: any;
  iconColor?: string;
  chevronIcon?: string;
  emptyMessage?: string;
  closeOnSelect?: boolean;
}

// Removed unused screenWidth variable

export function SearchableDropdown({
  options = [],
  selectedValues = [],
  onSelectionChange,
  placeholder = 'Select an option',
  searchPlaceholder = 'Search...',
  multiSelect = false,
  maxHeight = 200,
  showSearch = true,
  disabled = false,
  style,
  optionStyle,
  selectedOptionStyle,
  searchInputStyle,
  iconColor = '#8e8e8e',
  chevronIcon = 'chevron.down',
  emptyMessage = 'No options found',
  closeOnSelect = true,
}: SearchableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const searchRef = useRef<TextInput>(null);

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');

  // Filter options based on search text
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter(option =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [searchText, options]);

  // Get selected values array
  const getSelectedValues = () => {
    if (multiSelect) {
      return Array.isArray(selectedValues) ? selectedValues : [];
    }
    return selectedValues ? [selectedValues] : [];
  };

  // Check if option is selected
  const isSelected = (option: DropdownOption) => {
    const selected = getSelectedValues();
    return selected.some(selectedValue => 
      JSON.stringify(selectedValue) === JSON.stringify(option.value)
    );
  };

  // Handle option selection
  const handleOptionSelect = (option: DropdownOption) => {
    if (multiSelect) {
      const currentSelected = getSelectedValues();
      const isCurrentlySelected = isSelected(option);
      
      let newSelected;
      if (isCurrentlySelected) {
        // Remove from selection
        newSelected = currentSelected.filter(selectedValue => 
          JSON.stringify(selectedValue) !== JSON.stringify(option.value)
        );
      } else {
        // Add to selection
        newSelected = [...currentSelected, option.value];
      }
      onSelectionChange(newSelected);
    } else {
      onSelectionChange(option.value);
      if (closeOnSelect) {
        setIsOpen(false);
        setSearchText('');
        searchRef.current?.clear();
      }
    }
  };

  // Get display text for selected values
  const getDisplayText = () => {
    const selected = getSelectedValues();
    if (selected.length === 0) return placeholder;
    if (multiSelect) {
      const selectedLabels = selected.map(selectedValue => {
        const option = options.find(opt => 
          JSON.stringify(opt.value) === JSON.stringify(selectedValue)
        );
        return option?.label || selectedValue;
      });
      
      // Show only first 2 items, then ellipsis if more
      const maxDisplayItems = 3;
      if (selectedLabels.length <= maxDisplayItems) {
        return selectedLabels.join(', ');
      } else {
        const displayedItems = selectedLabels.slice(0, maxDisplayItems);
        return `${displayedItems.join(', ')}...`;
      }
    }
    const option = options.find(opt => 
      JSON.stringify(opt.value) === JSON.stringify(selected[0])
    );
    return option?.label || placeholder;
  };

  // Render option with icon/emoji
  const renderOptionContent = (option: DropdownOption) => (
    <View style={styles.optionContent}>
      {option.icon && option.iconPosition === 'before' && (
        <IconSymbol 
          name={option.icon} 
          size={20} 
          color={isSelected(option) ? tintColor : iconColor} 
        />
      )}
      {option.emoji && option.iconPosition === 'before' && (
        <Text style={styles.emoji}>{option.emoji}</Text>
      )}
      <ThemedText 
        style={[
          styles.optionText,
          isSelected(option) && { color: tintColor, fontWeight: '600' },
          optionStyle
        ]}
      >
        {option.label}
      </ThemedText>
      {option.icon && option.iconPosition === 'after' && (
        <IconSymbol 
          name={option.icon} 
          size={20} 
          color={isSelected(option) ? tintColor : iconColor} 
        />
      )}
      {option.emoji && option.iconPosition === 'after' && (
        <Text style={styles.emoji}>{option.emoji}</Text>
      )}
      {isSelected(option) && (
        <IconSymbol 
          name="checkmark" 
          size={20} 
          color={tintColor} 
          style={styles.checkmark}
        />
      )}
    </View>
  );

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.dropdownTrigger,
          { 
            backgroundColor,
            borderColor: isOpen ? tintColor : '#e0e0e0',
            opacity: disabled ? 0.6 : 1
          }
        ]}
        onPress={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
            if (!isOpen && showSearch) {
              setTimeout(() => searchRef.current?.focus(), 100);
            }
          }
        }}
        disabled={disabled}
      >
        {isOpen && showSearch ? (
          <TextInput
            ref={searchRef}
            style={[
              styles.searchInputInTrigger,
              { color: textColor }
            ]}
            placeholder={searchPlaceholder}
            placeholderTextColor={iconColor}
            value={searchText}
            onChangeText={setSearchText}
            autoFocus
          />
        ) : (
          <ThemedText 
            style={[
              styles.triggerText,
              { color: textColor },
              getSelectedValues().length === 0 && { color: iconColor }
            ]}
          >
            {getDisplayText()}
          </ThemedText>
        )}
        <IconSymbol 
          name={isOpen ? 'chevron.up' : chevronIcon} 
          size={20} 
          color={iconColor} 
        />
      </TouchableOpacity>

      {isOpen && (
        <ThemedView 
          style={[
            styles.dropdownContainer,
            { 
              backgroundColor,
              maxHeight: maxHeight
            }
          ]}
        >
          <FlatList
            data={filteredOptions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.optionItem,
                  isSelected(item) && { backgroundColor: tintColor + '15' },
                  selectedOptionStyle
                ]}
                onPress={() => handleOptionSelect(item)}
              >
                {renderOptionContent(item)}
              </TouchableOpacity>
            )}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <ThemedText style={[styles.emptyText, { color: iconColor }]}>
                  {emptyMessage}
                </ThemedText>
              </View>
            }
            showsVerticalScrollIndicator={true}
            style={styles.optionsList}
          />
        </ThemedView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownTrigger: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 48,
  },
  triggerText: {
    fontSize: 16,
    flex: 1,
    fontFamily: Fonts.regular,
  },
  searchInputInTrigger: {
    fontSize: 16,
    flex: 1,
    padding: 0,
    margin: 0,
    fontFamily: Fonts.regular,
  },
  dropdownContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderTopWidth: 0,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionsList: {
    maxHeight: 200,
    borderRadius: 8,
  },
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
    fontFamily: Fonts.regular,
  },
  emoji: {
    fontSize: 18,
  },
  checkmark: {
    marginLeft: 'auto',
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
  },
});