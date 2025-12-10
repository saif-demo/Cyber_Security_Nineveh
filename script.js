let currentSection = '';
let currentScheduleType = '';
let currentGroupType = '';

function openSection(section) {
    currentSection = section;
    const modal = document.getElementById('section-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    switch(section) {
        case 'schedule':
            modalTitle.textContent = 'جدول المحاضرات';
            showScheduleOptions();
            break;
        case 'classroom':
            modalTitle.textContent = 'أكواد الكلاس روم';
            showClassroomCodes();
            break;
        case 'telegram-groups':
            modalTitle.textContent = 'كروبات الدفعة';
            showTelegramGroups();
            break;
        case 'channels':
            modalTitle.textContent = 'التبليغات والقنوات';
            showChannels();
            break;
        case 'students':
            modalTitle.textContent = 'أسماء الطلبة';
            showStudentsSection();
            break;
        case 'about':
            modalTitle.textContent = 'معلومات المطور';
            showAboutInfo();
            break;
    }
}

function closeModal() {
    const modal = document.getElementById('section-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentScheduleType = '';
    currentGroupType = '';
}

window.onclick = function(event) {
    const modal = document.getElementById('section-modal');
    if (event.target === modal) {
        closeModal();
    }
}

function showScheduleOptions() {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <p style="text-align: center; color: #666; margin-bottom: 30px; font-size: 1.1rem;">
            اختر الفترة الدراسية
        </p>
        <div class="options-grid">
            <button class="option-btn" onclick="selectScheduleType('morning')">
                <i class="fas fa-sun"></i>
                <span>صباحي</span>
            </button>
            <button class="option-btn" onclick="selectScheduleType('evening')">
                <i class="fas fa-moon"></i>
                <span>مسائي</span>
            </button>
        </div>
    `;
}

function selectScheduleType(type) {
    currentScheduleType = type;
    const modalBody = document.getElementById('modal-body');
    const typeName = type === 'morning' ? 'صباحي' : 'مسائي';
    
    modalBody.innerHTML = `
        <button class="option-btn" style="margin-bottom: 20px;" onclick="showScheduleOptions()">
            <i class="fas fa-arrow-right"></i>
            <span>رجوع</span>
        </button>
        <p style="text-align: center; color: #666; margin-bottom: 30px; font-size: 1.1rem;">
            اختر الشعبة - ${typeName}
        </p>
        <div class="options-grid">
            <button class="option-btn" onclick="showScheduleImage('A')">
                <i class="fas fa-users"></i>
                <span>الشعبة A</span>
            </button>
            <button class="option-btn" onclick="showScheduleImage('B')">
                <i class="fas fa-users"></i>
                <span>الشعبة B</span>
            </button>
            <button class="option-btn" onclick="showScheduleImage('C')">
                <i class="fas fa-users"></i>
                <span>الشعبة C</span>
            </button>
        </div>
    `;
}

function showScheduleImage(group) {
    let imageUrl = '';
    
    if (currentScheduleType === 'morning') {
        if (group === 'A') imageUrl = 'https://www2.0zz0.com/2025/12/10/13/694720852.jpg';
        else if (group === 'B') imageUrl = 'https://www2.0zz0.com/2025/12/10/14/128732699.jpg';
        else if (group === 'C') imageUrl = 'https://www2.0zz0.com/2025/12/10/14/613658720.jpg';
    } else {
        if (group === 'A') imageUrl = 'https://www2.0zz0.com/2025/12/10/14/828515922.jpg';
        else if (group === 'B') imageUrl = 'https://www2.0zz0.com/2025/12/10/14/990678017.jpg';
        else if (group === 'C') imageUrl = 'https://www2.0zz0.com/2025/12/10/14/838953197.jpg';
    }
    
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <button class="option-btn" style="margin-bottom: 20px;" onclick="selectScheduleType('${currentScheduleType}')">
            <i class="fas fa-arrow-right"></i>
            <span>رجوع</span>
        </button>
        <h3 style="text-align: center; color: #1a237e; margin-bottom: 20px;">
            جدول ${currentScheduleType === 'morning' ? 'صباحي' : 'مسائي'} - الشعبة ${group}
        </h3>
        <img src="${imageUrl}" alt="جدول المحاضرات" class="schedule-image" onerror="this.src='https://via.placeholder.com/600x400/1a237e/ffffff?text=صورة+الجدول+غير+متاحة'">
        <div style="text-align: center; margin-top: 20px;">
            <button class="join-btn" onclick="window.open('${imageUrl}', '_blank')" style="width: auto; padding: 10px 30px;">
                <i class="fas fa-external-link-alt"></i> فتح الصورة في نافذة جديدة
            </button>
        </div>
    `;
}

function showClassroomCodes() {
    const modalBody = document.getElementById('modal-body');
    
    const classroomData = [
        {
            title: 'التطبيق الرسمي',
            description: 'حمّل تطبيق Google Classroom للجوال',
            code: 'تحميل',
            link: 'https://play.google.com/store/apps/details?id=com.google.android.apps.classroom'
        },
        {
            title: 'التبليغات (المقرر أ.عمار)',
            description: 'مقرر التبليغات - المحاضر: أ.عمار',
            code: '6hiwp2sr',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=6hiwp2sr'
        },
        {
            title: 'الرياضيات (أ.عمر محمد)',
            description: 'مقرر الرياضيات - المحاضر: أ.عمر محمد',
            code: 'ehaalyf6',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=ehaalyf6'
        },
        {
            title: 'برمجة نظري (أ.ميس قحطان)',
            description: 'مقرر البرمجة النظري - المحاضرة: أ.ميس قحطان',
            code: 'zzzyy766',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=zzzyy766'
        },
        {
            title: 'الهندسة الكهربائية نظري (د.عمر هاتف)',
            description: 'مقرر الهندسة الكهربائية النظري - المحاضر: د.عمر هاتف',
            code: 'g4reyh25',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=g4reyh25'
        },
        {
            title: 'حقوق الإنسان (د.ياسر محمد)',
            description: 'مقرر حقوق الإنسان - المحاضر: د.ياسر محمد',
            code: '47c5rv43',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=47c5rv43'
        },
        {
            title: 'لينكس عملي (أ. محمد باسل)',
            description: 'مقرر لينكس العملي - المحاضر: أ. محمد باسل',
            code: 'lnzh6kks',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=lnzh6kks'
        },
        {
            title: 'اللغة الإنجليزية (أ.رؤى الناصر)',
            description: 'مقرر اللغة الإنجليزية - المحاضرة: أ.رؤى الناصر',
            code: 'ren3d5d3',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=ren3d5d3'
        },
        {
            title: 'الهندسة الكهربائية عملي (أ.قيس رشيد)',
            description: 'مقرر الهندسة الكهربائية العملي - المحاضر: أ.قيس رشيد',
            code: 'd7gbvmad',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=d7gbvmad'
        },
        {
            title: 'علم الاجتماع (د.فرح عبدالرزاق)',
            description: 'مقرر علم الاجتماع - المحاضرة: د.فرح عبدالرزاق',
            code: 'oluubkz5',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=oluubkz5'
        },
        {
            title: 'لينكس نظري (أ.سرمد الشمري)',
            description: 'مقرر لينكس النظري - المحاضر: أ.سرمد الشمري',
            code: 'nnk3mbhe',
            link: 'https://classroom.google.com/c/ODMyMTIxNzg1MDY2?cjc=nnk3mbhe'
        }
    ];
    
    let html = '<div class="classroom-list">';
    
    classroomData.forEach((item, index) => {
        html += `
            <div class="classroom-item">
                <div class="classroom-header">
                    <h4>${item.title}</h4>
                    <span class="classroom-code">${item.code}</span>
                </div>
                <p>${item.description}</p>
                <button class="join-btn" onclick="window.open('${item.link}', '_blank')">
                    <i class="fas fa-door-open"></i> ${index === 0 ? 'تحميل التطبيق' : 'انضم إلى المقرر'}
                </button>
            </div>
        `;
    });
    
    html += '</div>';
    modalBody.innerHTML = html;
}

function showTelegramGroups() {
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <p style="text-align: center; color: #666; margin-bottom: 20px; font-size: 1.1rem;">
            اختر الفترة الدراسية
        </p>
        
        <div class="options-grid">
            <button class="option-btn" onclick="showTelegramGroupsByType('morning')">
                <i class="fas fa-sun"></i>
                <span>صباحي</span>
            </button>
            <button class="option-btn" onclick="showTelegramGroupsByType('evening')">
                <i class="fas fa-moon"></i>
                <span>مسائي</span>
            </button>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
            <h3 style="color: #1a237e; margin-bottom: 15px;">الكروب المشترك</h3>
            <a href="https://t.me/+yUU4lQmjDdI4MTVi" target="_blank" class="channel-link" style="background: linear-gradient(135deg, #0088cc 0%, #005580 100%); color: white;">
                <h4><i class="fab fa-telegram"></i> كروب مشترك صباحي ومسائي</h4>
                <p>انضم إلى الكروب المشترك بين جميع الطلاب</p>
            </a>
        </div>
    `;
}

function showTelegramGroupsByType(type) {
    currentGroupType = type;
    const typeName = type === 'morning' ? 'صباحي' : 'مسائي';
    
    const modalBody = document.getElementById('modal-body');
    let generalLink = '';
    let groups = [];
    
    if (type === 'morning') {
        generalLink = 'https://t.me/+FEkzRHHyUqQ4OGFi';
        groups = [
            { name: 'شعبة A', link: 'https://t.me/+_CZLHjN_jhE5NjFi' },
            { name: 'شعبة B', link: 'https://t.me/+U2NQvFR9JaQ4MTky' },
            { name: 'شعبة C', link: 'https://t.me/+U2NQvFR9JaQ4MTky' }
        ];
        
        
    } else {
        generalLink = 'https://t.me/+3c8qF8V9F6RkOTFk';
        groups = [
            { name: 'شعبة A', link: 'https://t.me/+6Zk6In_xcG8xOWRi' },
            { name: 'شعبة B', link: 'https://t.me/+eGlyyAnFq_BlZmU0' },
            { name: 'شعبة C', link: 'https://t.me/+U2NQvFR9JaQ4MTky' }
        ];
    }
    
    modalBody.innerHTML = `
        <button class="option-btn" style="margin-bottom: 20px;" onclick="showTelegramGroups()">
            <i class="fas fa-arrow-right"></i>
            <span>رجوع</span>
        </button>
        
        <h3 style="text-align: center; color: #1a237e; margin-bottom: 20px;">
            كروبات الفترة ${typeName}
        </h3>
        
        <div style="margin-bottom: 30px;">
            <a href="${generalLink}" target="_blank" class="channel-link" style="background: linear-gradient(135deg, #0088cc 0%, #005580 100%); color: white;">
                <h4><i class="fab fa-telegram"></i> كروب ${typeName} العام</h4>
                <p>انضم إلى كروب الفترة ${typeName} العام</p>
            </a>
        </div>
        
        <h4 style="color: #1a237e; margin-bottom: 15px;">كروبات الشعب:</h4>
        <div class="options-grid">
            ${groups.map(group => `
                <a href="${group.link}" target="_blank" class="option-btn" style="text-decoration: none;">
                    <i class="fas fa-user-friends"></i>
                    <span>${group.name}</span>
                </a>
            `).join('')}
        </div>
    `;
}

function showChannels() {
    const modalBody = document.getElementById('modal-body');
    
    const channels = [
        {
            title: 'قناة كلية التقنية الشمالية',
            description: 'القناة الرسمية للكلية',
            link: 'https://t.me/Univety'
        },
        {
            title: 'قناة تبليغات الأمن السيبراني',
            description: 'قناة التبليغات الرسمية للقسم',
            link: 'https://t.me/+pXp0maadiV0xNTUy'
        },
        {
            title: 'قناة دكتورة ميس للبرمجة',
            description: 'قناة د.ميس لمواد البرمجة صباحي ومسائي',
            link: 'https://t.me/+9teyODANJXVkNDli'
        },
        {
            title: 'قناة معلومات الأمن السيبراني',
            description: 'قناة تخص معلومات الأمن السيبراني',
            link: 'https://t.me/cyb_sta'
        }
    ];
    
    let html = '<div class="channels-list">';
    
    channels.forEach(channel => {
        html += `
            <a href="${channel.link}" target="_blank" class="channel-link">
                <h4><i class="fab fa-telegram"></i> ${channel.title}</h4>
                <p>${channel.description}</p>
            </a>
        `;
    });
    
    html += '</div>';
    modalBody.innerHTML = html;
}

function showStudentsSection() {
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <p style="text-align: center; color: #666; margin-bottom: 30px; font-size: 1.1rem;">
            اختر ما تريد عرضه
        </p>
        
        <div class="options-grid">
            <button class="option-btn" onclick="showClassroomsImage()">
                <i class="fas fa-map-marker-alt"></i>
                <span>أماكن المختبرات والقاعات</span>
            </button>
            <button class="option-btn" onclick="showStudentsPDFs()">
                <i class="fas fa-users"></i>
                <span>أسماء طلبة الصباحي</span>
            </button>
        </div>
    `;
}

function showClassroomsImage() {
    const modalBody = document.getElementById('modal-body');
    const imageUrl = 'https://www2.0zz0.com/2025/12/10/14/103384321.jpg';
    
    modalBody.innerHTML = `
        <button class="option-btn" style="margin-bottom: 20px;" onclick="showStudentsSection()">
            <i class="fas fa-arrow-right"></i>
            <span>رجوع</span>
        </button>
        
        <h3 style="text-align: center; color: #1a237e; margin-bottom: 20px;">
            أماكن المختبرات والقاعات
        </h3>
        
        <img src="${imageUrl}" alt="أماكن المختبرات والقاعات" class="schedule-image" onerror="this.src='https://via.placeholder.com/600x400/1a237e/ffffff?text=صورة+غير+متاحة'">
        
        <div style="text-align: center; margin-top: 20px;">
            <button class="join-btn" onclick="window.open('${imageUrl}', '_blank')" style="width: auto; padding: 10px 30px;">
                <i class="fas fa-external-link-alt"></i> فتح الصورة في نافذة جديدة
            </button>
        </div>
    `;
}

function showStudentsPDFs() {
    const modalBody = document.getElementById('modal-body');
    
    const pdfLinks = [
        {
            group: 'A',
            link: 'https://saintly-jewel-957.sharebob.app'
        },
        {
            group: 'B', 
            link: 'https://intimate-rail-47.sharebob.app'
        },
        {
            group: 'C',
            link: 'https://convincing-day-149.sharebob.app/'
        }
    ];
    
    modalBody.innerHTML = `
        <button class="option-btn" style="margin-bottom: 20px;" onclick="showStudentsSection()">
            <i class="fas fa-arrow-right"></i>
            <span>رجوع</span>
        </button>
        
        <p style="text-align: center; color: #666; margin-bottom: 30px; font-size: 1.1rem;">
            اختر الشعبة لعرض أسماء الطلبة (سيتم فتح ملف PDF في نافذة جديدة)
        </p>
        
        <div class="options-grid">
            ${pdfLinks.map(pdf => `
                <a href="${pdf.link}" target="_blank" class="option-btn" style="text-decoration: none;">
                    <i class="fas fa-file-pdf"></i>
                    <span>الشعبة ${pdf.group}</span>
                </a>
            `).join('')}
        </div>
    `;
}

function showAboutInfo() {
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="width: 120px; height: 120px; background: linear-gradient(135deg, #4caf50 0%, #1a237e 100%); border-radius: 50%; margin: 0 auto 25px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2.5rem;">
                <i class="fas fa-user-graduate"></i>
            </div>
            
            <h3 style="color: #1a237e; margin-bottom: 20px;">سيف محمد</h3>
            
            <div style="background: #f5f5f5; border-radius: 15px; padding: 25px; margin-bottom: 25px; text-align: right;">
                <p style="color: #666; line-height: 1.8; margin-bottom: 15px; font-size: 1.1rem;">
                    طالب مرحلة أولى في كلية التقنية الشمالية، قسم هندسة الأمن السيبراني والحوسبة السحابية، طالب صباحي في كروب شعبة C.
                </p>
                <p style="color: #666; line-height: 1.8; font-size: 1.1rem;">
                    حبيت أقدم لكم موقع بسيط يجمع بين الأشياء التي تحتاجونها بشكل يومي في مكان واحد، ويتم العمل على أشياء أكبر وأفضل في المستقبل القريب إن شاء الله.
                </p>
            </div>
            
            <div style="margin-top: 30px;">
                <p style="color: #666; margin-bottom: 15px; font-size: 1.1rem;">
                    للتواصل أو أي استفسار:
                </p>
                <a href="https://t.me/m/_2U844wAMThi" target="_blank" class="join-btn" style="width: auto; padding: 12px 35px; font-size: 1.1rem; background: linear-gradient(135deg, #0088cc 0%, #005580 100%);">
                    <i class="fab fa-telegram"></i> @DEMO_CYBER
                </a>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #f1f8e9; border-radius: 15px; border-right: 4px solid #4caf50;">
                <h4 style="color: #1a237e; margin-bottom: 10px;">ميزات الموقع:</h4>
                <ul style="text-align: right; color: #666; list-style-type: none; padding: 0;">
                    <li style="margin-bottom: 10px; padding-right: 20px; position: relative;">
                        <i class="fas fa-check-circle" style="color: #4caf50; position: absolute; right: 0;"></i>
                        جدول المحاضرات مصنف حسب الفترة والشعبة
                    </li>
                    <li style="margin-bottom: 10px; padding-right: 20px; position: relative;">
                        <i class="fas fa-check-circle" style="color: #4caf50; position: absolute; right: 0;"></i>
                        أكواد Google Classroom مع روابط مباشرة
                    </li>
                    <li style="margin-bottom: 10px; padding-right: 20px; position: relative;">
                        <i class="fas fa-check-circle" style="color: #4caf50; position: absolute; right: 0;"></i>
                        مجموعات وقنوات التليجرام المنظمة
                    </li>
                    <li style="margin-bottom: 10px; padding-right: 20px; position: relative;">
                        <i class="fas fa-check-circle" style="color: #4caf50; position: absolute; right: 0;"></i>
                        أسماء الطلبة وأماكن المختبرات
                    </li>
                </ul>
            </div>
        </div>
    `;
}
