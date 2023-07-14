/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';

// import { FloatingAction } from "react-native-floating-action";
// import { useFloating, shift } from '@floating-ui/react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Modal,
  KeyboardAvoidingView,
  Platform,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';


function Home({ navigation }): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [taskname, setTaskname] = useState('');
  const [assigneel, setAssigneel] = useState('');
  const [description, setDescription] = useState('');
  const [dueday, setDueday] = useState('');
  const [data, setData] = useState<Task[]>([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Task | null>(null);
  const [modalTaskId, setModalTaskId] = useState(null);


  interface Task {
    taskid: number;
    taskname: string | null;
    assigneel: string | null;
    description: string | null;
    dueday: string | null;
  }

  useEffect(() => {
    if (selectedItem) {
      setTaskname(selectedItem.taskname || '');
      setAssigneel(selectedItem.assigneel || '');
      setDescription(selectedItem.description || '');
      setDueday(selectedItem.dueday || '');
    }
  }, [selectedItem]);


  useEffect(() => {
    // Lấy dữ liệu từ API và cập nhật vào state
    fetch('http://10.7.178.194:8090/api/task')
      .then(response => response.json())
      .then(data => setData(data[0]))
      .catch(error => console.error(error));
  }, []);
  function fetchData() {
    // Lấy dữ liệu từ API và cập nhật vào state
    fetch('http://10.7.178.194:8090/api/task')
      .then(response => response.json())
      .then(data => setData(data[0]))
      .catch(error => console.error(error));
  };


  const updateTask = () => {
    fetch(`http://10.7.178.194:8090/api/task/${modalTaskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "taskname": taskname,
        "assigneel": assigneel,
        "description": description,
        "dueday": dueday

      }),
    })
      .then(response => {
        if (response.ok) {
          // Yêu cầu thành công
          Alert.alert('Update success');
        } else {
          // Yêu cầu không thành công
          Alert.alert('Update failed');
        }
      })
      .catch(error => {
        // Xảy ra lỗi trong quá trình gửi yêu cầu
        console.error(error);
      });
  };

  const delTask = () => {
    fetch(`http://10.7.178.194:8090/api/task/${modalTaskId}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (response.ok) {
          // Yêu cầu thành công
          Alert.alert('Delete success');
          fetchData();
        } else {
          // Yêu cầu không thành công
          Alert.alert('Delete failed');
        }
      })
      .catch(error => {
        // Xảy ra lỗi trong quá trình gửi yêu cầu
        console.error(error);
      });
  };


  const Add = () => {
    fetch(`http://10.7.178.194:8090/api/task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "taskname": taskname,
        "assigneel": assigneel,
        "description": description,
        "dueday": dueday
      })
    })
      .then(response => {
        if (!response.ok) {
          Alert.alert('Add failed');
        } else {
          Alert.alert('Successfully Add');
        }

      })
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {

  });

  const HandPress = () => {
    Alert.alert('Hello', 'Nezuko-chan!!');
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [menuResponsive, setMenuResponsive] = useState(false);
  const [modalCreateW, setModalCreateW] = useState(false)


  return (
    <View style={styles.container} >
      <View style={styles.title}>
        <View style={styles.project}>
          <TouchableOpacity onPress={() => setMenuResponsive(true)}>
            <Icon name='menu' style={styles.options} />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#E74646' }}>Workspace</Text>
        </View>

        <TouchableOpacity onPress={HandPress}>
          <Icon name='user-plus' style={[styles.options, { color: '#E74646' }]} />
        </TouchableOpacity>

      </View>
      <View style={styles.task}>
        <View style={styles.wrapContent}>
          <View style={[styles.iconW, { backgroundColor: '#116D6E' }]}>
            <Icon name='check-square' style={[styles.icon, { color: 'white' }]} />
          </View>
          <Text style={[styles.taskText, { fontSize: 18 }]}>Tasks</Text>
        </View>

        <Text style={[styles.taskText, { fontSize: 20 }]}>0</Text>
      </View>

      <View style={styles.WrapBigContent}>
        <View style={styles.MiddleWrap}>
          <Text style={styles.miniTitle}>MY TASKS</Text>
          <TouchableOpacity style={styles.project} onPress={() => navigation.navigate('App')}>
            <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
              <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
            </View>
            <View style={styles.wrapContent}>
              <Text style={styles.pTitle}>Getting started</Text>
              <View style={styles.note}>
                <TouchableOpacity style={styles.noteButton} onPress={HandPress}>
                  <Icon name='calendar' style={styles.icon} />
                  <Text style={styles.noteText}>Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noteButton} onPress={HandPress}>
                  <Icon name='user' style={styles.icon} />
                  <Text style={styles.noteText}>Assign</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.noteButton} onPress={HandPress}>
                  <Icon name='tag' style={styles.icon} />
                  <Text style={styles.noteText}>Tag</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>


      </View>



      <View style={styles.HorNav}>

        {/* Button Tìm kiếm */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="search" style={styles.options} />
        </TouchableOpacity>
        {/* <TouchableOpacity >
          <Text style={{color:'white',fontSize:30}}>+</Text>
           <Icon name="plus" style={[styles.options, { fontSize: 28 }]} onPress={HandPress} />
        </TouchableOpacity> */}


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalAdd}>
          <View style={styles.centeredViewAdd}>

            <View style={styles.warpContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.textStyleAdd, { fontWeight: 'bold' }]}>Quick Add</Text>
                <TouchableOpacity onPress={() => setModalAdd(false)} ><Text style={styles.textStyleAdd}>Cancel</Text></TouchableOpacity>
              </View>

              <View style={styles.inputStyle}>
                <KeyboardAvoidingView
                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                  <TextInput
                    style={{ color: "white" }}
                    value={selectedItem?.taskname ?? ''}
                    onChangeText={(text) =>
                      setSelectedItem((prevState) => ({
                        ...prevState,
                        taskname: text,
                      }))
                    }
                  />
                  <TextInput
                    style={{ color: 'white' }}
                    value={selectedItem?.assigneel ?? ''}
                    onChangeText={(text) =>
                      setSelectedItem((prevState) => ({
                        ...prevState,
                        assigneel: text,
                      }))
                    }
                  />
                  <TextInput
                    style={{ color: 'white' }}
                    value={selectedItem?.description ?? ''}
                    onChangeText={(text) =>
                      setSelectedItem((prevState) => ({
                        ...prevState,
                        description: text,
                      }))
                    }
                  />
                  <TextInput
                    style={{ color: 'white' }}
                    value={selectedItem?.dueday ?? ''}
                    onChangeText={(text) =>
                      setSelectedItem((prevState) => ({
                        ...prevState,
                        dueday: text,
                      }))
                    }
                  />

                </KeyboardAvoidingView>


              </View>


              <TouchableOpacity style={styles.AddButton} onPress={() => { updateTask(), setModalEdit(false) }} >
                <Text style={{ color: '#EA4463' }} >Save to project</Text></TouchableOpacity>
              <TouchableOpacity style={styles.AddButton} onPress={() => { delTask(), setModalEdit(false) }} >
                <Text style={{ color: '#EA4463' }} >Delete from project</Text></TouchableOpacity>
              <View style={styles.childStyle} >

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible3}
                >
                  <View style={styles.centeredViewAdd}>
                    <View style={styles.modalViewAdd}>
                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.modalTextAdd}>CHOOSE WORKSPACE</Text>
                          <TouchableOpacity

                            onPress={() => setModalVisible3(false)}>
                            <Text style={styles.poptextStyle}>X</Text>
                          </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 15 }]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceA</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceB</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceC</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}>
                          <Text style={styles.textStyleAdd}>WorkSpaceD</Text>

                        </TouchableOpacity>
                      </View>


                    </View>
                  </View>

                  <TouchableOpacity style={styles.AddButton}>
                    <Text style={{ color: '#EA4463' }} onPress={Add}>Add to project</Text>
                  </TouchableOpacity>



                </Modal>
                <TouchableOpacity onPress={() => setModalVisible3(true)} style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10 }]}>
                  <Text style={styles.textStyleAdd}>Workspace</Text>
                </TouchableOpacity>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible2}

                >
                  <View style={styles.centeredViewAdd}>
                    <View style={styles.modalViewAdd}>
                      <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={styles.modalTextAdd}>CHOOSE PROJECT</Text>
                          <TouchableOpacity

                            onPress={() => setModalVisible2(false)}>
                            <Text style={styles.poptextStyle}>X</Text>
                          </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={[styles.childButton, { borderTopLeftRadius: 10, borderTopRightRadius: 10, marginTop: 15 }]}>
                          <Text style={styles.textStyleAdd}>ProjcectA</Text>


                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>ProjcectB</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.childButton, styles.chooseProjectStyle]}>
                          <Text style={styles.textStyleAdd}>ProjcectC</Text>

                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.childButton, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, borderTopColor: '#626468' }]}>
                          <Text style={styles.textStyleAdd}>ProjcectD</Text>

                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity onPress={() => setModalVisible2(true)} style={[styles.childButton, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopWidth: 1, borderTopColor: '#626468' }]}>
                  <Text style={styles.textStyleAdd}>Project</Text>
                </TouchableOpacity>

              </View>

            </View>

          </View>
        </Modal>

        {/* Button Tạo Project */}
        <TouchableOpacity onPress={() => setModalAdd(true)}>
          <Icon name="plus" style={[styles.options, { fontSize: 28 }]} />
        </TouchableOpacity>

        {/* Button Thông báo */}
        <TouchableOpacity onPress={() => navigation.navigate('noti')}>
          <Icon name="bell" style={styles.options} />
        </TouchableOpacity>

        {/* Button Account */}
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <Icon name="settings" style={styles.options} />
        </TouchableOpacity>
      </View >

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { alignItems: 'center' }]}>

            <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Quick Search</Text>
              <TouchableOpacity style={{}} onPress={() => setModalVisible(!modalVisible)}>
                <Icon name='x' style={[styles.options, { color: 'black' }]} />
              </TouchableOpacity>
            </View>


            <TextInput style={styles.Input} placeholder='Search'></TextInput>
            <View style={styles.searchContent}>
              <ScrollView style={styles.searchScrollView}>
                {/* Vung hien thi thong tin tim kiem */}
                {/* <TouchableOpacity style={styles.project} onPress={HandPress}>
                  <View style={[styles.iconW, { alignSelf: 'center', width: 45, height: 45, backgroundColor: '#E74646' }]}>
                    <Icon name='file-text' style={[styles.icon, { color: 'white', fontSize: 25 }]} />
                  </View>
                  <View style={[styles.wrapContent, { alignSelf: 'center' }]}>
                    <Text style={styles.pTitle}>Getting started</Text>
                  </View>
                </TouchableOpacity> */}
              </ScrollView>

              {/* Noi dung hien thi khi chua co tim kiem */}
              <View style={styles.blankContent}>
                <Icon name="search" style={[styles.options, { color: 'black', alignSelf: 'center', alignContent: 'center' }]} />
                <Text style={styles.modalText}>Search all projects, comments and workspaces</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal "Create a WorkSpace" */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCreateW}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalCreateW(!modalCreateW);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={[styles.flex, { width: 350, marginBottom: 10, paddingBottom: 10 }]}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create a Workspace</Text>
              <TouchableOpacity style={{}} onPress={() => setModalCreateW(!modalCreateW)}>
                <Icon name='x' style={[styles.options, { color: 'black' }]} />

              </TouchableOpacity>
            </View>
            <TextInput style={styles.Input} placeholder='Ex.Acme or Acme Marketing'></TextInput>
            <View style={styles.invite}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Invite to Workspace</Text>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <View style={{ backgroundColor: '#DDDDDD', width: 40, height: 40, borderRadius: 100, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name='user-plus' size={20} />
                </View>
                <TextInput placeholder='Search by e-mail or username' />
              </View>
              <TouchableOpacity style={{ backgroundColor: "#73777B", borderRadius: 10, padding: 10, justifyContent: 'center', alignItems: 'center', width: 350, marginTop: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Invite</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Menu Responsive */}

      <Modal
        animationType="none"
        transparent={true}
        visible={menuResponsive}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setMenuResponsive(!menuResponsive)
        }}
      >
        <View style={styles.leftView}>
          <View style={styles.menuContent}>


            <View style={styles.spaceName}>
              {/* Hiển Thị tên WorkSpace hiện tại */}
              <Text style={{ fontSize: 18, color: 'white' }}>Workspace</Text>
            </View>

            <View style={styles.workSpacesContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 }}>
                <Text style={{ color: 'white' }}>WORKSPACES</Text>
                <TouchableOpacity style={{ backgroundColor: '#73777B', borderRadius: 10, padding: 5 }} onPress={() => setModalCreateW(true)}>
                  <Icon name='plus' size={20} color={'white'} />
                </TouchableOpacity>
              </View>

              <View style={styles.workSpaceWrapper}>
                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                  {/* Hiện thị logo của Work Space */}
                  <Text style={{ color: 'white', backgroundColor: 'red', padding: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>W</Text>
                  {/* Hiện thị tên của Work Space */}
                  <Text style={{ color: 'white' }}>SSD</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                  {/* Hiện thị logo của Work Space */}
                  <Text style={{ color: 'white', backgroundColor: 'red', padding: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>W</Text>
                  {/* Hiện thị tên của Work Space */}
                  <Text style={{ color: 'white' }}>SSD</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center' }}>
                  {/* Hiện thị logo của Work Space */}
                  <Text style={{ color: 'white', backgroundColor: 'red', padding: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>W</Text>
                  {/* Hiện thị tên của Work Space */}
                  <Text style={{ color: 'white' }}>SSD</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </Modal>



    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1F22'
  },
  flex: {
    // backgroundColor:'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'


  },
  // outWrap: {
  //   flexDirection: 'column',
  //   justifyContent: "flex-start",

  // },
  leftView: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: '#434242',
    flexDirection: 'column',
    width: 300,
  },
  menuContent: {
    // margin: 20,
    // backgroundColor: 'white',
    // borderRadius: 10,
    padding: 10,
    // flexDirection:'row',
    // gap: 50

    // alignItems: 'center',
  },
  spaceName: {
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 0.5
  },
  workSpacesContainer: {
    // marginTop:10,
    paddingVertical: 10
  },
  workSpaceWrapper: {
    // padding:20
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  MiddleWrap: {
    // marginTop: 10,
    // paddingVertical:20,
    flexDirection: 'column',
  },
  invite: {
    flexDirection: 'column',
    marginTop: 10,
    // paddingVertical: 20
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },

  task: {
    // height: 80,
    borderWidth: 1,
    // backgroundColor: '#FF6969',
    borderColor: "#7F8487",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskText: {
    color: 'white',
    fontWeight: 'bold',
  },
  WrapBigContent: {
    marginTop: 10,
    flex: 5,
    padding: 10,
    flexDirection: 'column',
    gap: 10
  },

  project: {
    flexDirection: 'row',
    gap: 10
  },
  iconProject: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 30

  },
  icon: {
    fontSize: 18,
    color: '#EAEAEA',

  },
  iconW: {
    backgroundColor: 'pink',
    width: 35,
    height: 35,
    borderColor: 'pink',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapContent: {
    flexDirection: 'column',
    gap: 5
  },
  note: {
    flexDirection: 'row',
    gap: 5
  },
  noteButton: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderColor: '#7F8487',
    borderWidth: 1,
    borderRadius: 20
  },
  noteText: {
    alignSelf: 'center',
    color: '#EAEAEA',
    fontWeight: 'bold',
    fontSize: 15
  },

  miniTitle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#EAEAEA',
    marginBottom: 5
  },
  pTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  newProject: {
    marginHorizontal: 10,
    borderColor: 'white',
    borderWidth: 2
  },
  newProjectText: {
    color: 'white'
  },
  HorNav: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#7F8487'
  },
  options: {
    fontSize: 25,
    color: 'white'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    // justifyContent:'flex-start'
    // shadowColor: 'white',
    // shadowOffset: {
    //   width:0,
    //   height: 2,
    // },
    // shadowOpacity:1,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,

  },

  Input: {
    width: 350,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    // borderWidth:1,
    // borderColor:'grey'
  },
  searchContent: {
    // backgroundColor: 'pink',
    height: 450,
    padding: 10

  },
  searchScrollView: {
    flexDirection: 'column',


  },
  blankContent: {
    flex: 3,
    flexDirection: 'column',
    paddingTop: 20,
    // backgroundColor:'red'
  },
  warpContainer: {
    flex: 0.5,
    backgroundColor: '#1D1F22',
    //justifyContent: 'flex-end',
    elevation: 15,
    padding: 25,
    borderRadius: 20,


  },
  textStyleAdd: {
    color: 'white',
    fontWeight: '400',



  },



  inputStyle: {
    borderWidth: 1,
    borderColor: '#2D3034',
    borderRadius: 10,
    width: 350,
    height: 170,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#1C1F22',
    justifyContent: 'space-between'


  },

  DateButton: {

    width: 80,
    padding: 5,
    borderColor: '#7F8487',
    borderWidth: 0.6,
    borderRadius: 20,

  },
  DateText: {
    alignSelf: 'center',
    color: '#EAEAEA',
    fontWeight: 'bold'
  },


  AddButton: {
    borderRadius: 10,
    width: 350,
    height: 40,
    backgroundColor: '#612837',
    alignItems: 'center',
    justifyContent: 'center'
  },
  childButton: {
    height: 50,
    width: 350,
    backgroundColor: '#25282C',
    //borderRadius:
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 10,




  },

  childStyle: {

    marginTop: 10,
    height: 200,
    borderRadius: 10

  },
  modalViewAdd: {
    //margin: 20,
    backgroundColor: '#1D1F22',
    borderRadius: 20,
    padding: 25,
    elevation: 10,



  },
  chooseProjectStyle: {
    borderTopWidth: 1,
    borderTopColor: '#626468'


  },
  poptextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalTextAdd: {
    marginBottom: 10,
    color: 'white'
  },

  centeredViewAdd: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',


  },



});

export default Home;